import { Cause, Effect, Exit, Either, pipe } from "effect"
import { P, match } from "ts-pattern"

import type { PromptError } from "./errors.ts"

export type JsonValue = string | number | boolean | null | JsonObject | JsonValue[]

export type JsonObject = { readonly [key: string]: JsonValue }

const isJsonValue = (value: unknown): value is JsonValue => {
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return true
  }
  if (Array.isArray(value)) {
    return value.every(isJsonValue)
  }
  if (typeof value === "object") {
    return Object.values(value as JsonObject).every(isJsonValue)
  }
  return false
}

export type PromptInput = {
  readonly name: string
  readonly content: string
}

export const parseJson = (req: Request): Effect.Effect<JsonValue, Response> =>
  pipe(
    Effect.tryPromise({
      try: (): Promise<string> => req.text(),
      catch: (): Response => new Response("Invalid JSON", { status: 400 })
    }),
    Effect.flatMap((text) =>
      Effect.try({
        try: (): JsonValue => JSON.parse(text),
        catch: (): Response => new Response("Invalid JSON", { status: 400 })
      })
    ),
    Effect.flatMap((data) =>
      isJsonValue(data) ? Effect.succeed(data) : Effect.fail(new Response("Invalid JSON", { status: 400 }))
    )
  )

export const validatePromptInput = (data: JsonObject): Effect.Effect<PromptInput, Response> =>
  match(data)
    .with({ name: P.string, content: P.string }, ({ name, content }) => Effect.succeed({ name, content }))
    .otherwise(() => Effect.fail(new Response("Invalid", { status: 400 })))

export const toResponse = <T>(effect: Effect.Effect<T, PromptError>, status = 200): Response => {
  const exit = Effect.runSyncExit(effect)
  return Exit.match(exit, {
    onSuccess: (value): Response => Response.json(value, { status }),
    onFailure: (cause): Response => {
      const either = Cause.failureOrCause(cause)
      if (Either.isLeft(either)) {
        const error = either.left
        if (error.type === "invalid-input") {
          return new Response(error.reason, { status: 400 })
        }
        if (error.type === "not-found") {
          return new Response("Not Found", { status: 404 })
        }
      }
      return new Response("Internal Error", { status: 500 })
    }
  })
}

export const toEmptyResponse = (effect: Effect.Effect<unknown, PromptError>, status = 204): Response => {
  const exit = Effect.runSyncExit(effect)
  return Exit.match(exit, {
    onSuccess: (): Response => new Response(null, { status }),
    onFailure: (cause): Response => {
      const either = Cause.failureOrCause(cause)
      if (Either.isLeft(either)) {
        const error = either.left
        if (error.type === "invalid-input") {
          return new Response(error.reason, { status: 400 })
        }
        if (error.type === "not-found") {
          return new Response("Not Found", { status: 404 })
        }
      }
      return new Response("Internal Error", { status: 500 })
    }
  })
}

const parseAndValidate = <B>(req: Request, validate: Validator<B>): Effect.Effect<B, Response> =>
  pipe(
    parseJson(req),
    Effect.flatMap((parsedData) => {
      if (typeof parsedData !== "object" || parsedData === null || Array.isArray(parsedData)) {
        return Effect.fail(new Response("Invalid JSON", { status: 400 }))
      }
      return validate(parsedData)
    })
  )

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

/**
 * For a path string like "/foo/:id", PathParams resolves to an object
 * containing the matching parameter name, e.g. { id: string }. If no
 * parameters exist, it becomes an empty object.
 */
type PathParams<P extends string> = P extends `${string}:${infer Param}/${infer Rest}`
  ? { [K in Param | keyof PathParams<Rest>]: string }
  : P extends `${string}:${infer Param}`
    ? { [K in Param]: string }
    : Record<never, never>

type Validator<T> = (data: JsonObject) => Effect.Effect<T, Response>

export type QueryParams = {
  readonly limit?: string | readonly string[]
  readonly [key: string]: string | readonly string[] | undefined
}

export const parseQuery = (url: URL): QueryParams => {
  // Use `readonly string[]` to line‑up with the `QueryParams` alias
  const result: Record<string, string | readonly string[]> = {}

  // Using a `Set` prevents duplicate work if the same key appears more than once
  const keys = new Set(url.searchParams.keys())

  for (const key of keys) {
    const values = url.searchParams.getAll(key)

    if (values.length === 1) {
      const [value] = values
      // `value` is defined because `length === 1`, but the compiler
      // still considers the possibility of `undefined` when
      // `noUncheckedIndexedAccess` is enabled.  Provide a safe fallback.
      result[key] = value ?? ""
    } else {
      // Preserve *all* values for query parameters that occur multiple times
      result[key] = values
    }
  }

  return result
}

type Route<P extends string, B> = {
  readonly method: HttpMethod
  readonly match: (url: URL) => PathParams<P> | null
  readonly handler: (ctx: {
    readonly req: Request
    readonly params: PathParams<P>
    readonly query: QueryParams
    readonly body: B
  }) => Promise<Response> | Response
  readonly validate?: Validator<B>
}

const buildMatcher = <P extends string>(path: P): ((url: URL) => PathParams<P> | null) => {
  type Part = { readonly param: string } | { readonly fixed: string }
  const parts: readonly Part[] = path
    .split("/")
    .filter((segment) => segment.length > 0)
    .map<Part>((segment) => (segment.startsWith(":") ? { param: segment.slice(1) } : { fixed: segment }))

  return (url: URL): PathParams<P> | null => {
    const urlParts = url.pathname.split("/").filter((segment) => segment.length > 0)
    if (urlParts.length !== parts.length) {
      return null
    }

    const params: Record<string, string> = {}
    const matched = parts.every((part, i) => {
      const current = urlParts[i]
      if (current === undefined) {
        return false
      }
      if ("param" in part) {
        params[part.param] = decodeURIComponent(current)
        return true
      }
      return part.fixed === current
    })

    return matched ? (params as PathParams<P>) : null
  }
}

export type Middleware = (req: Request, next: () => Promise<Response>) => Promise<Response>

export class Router {
  private readonly routes: readonly Route<string, unknown>[]
  private readonly middleware: readonly Middleware[]

  constructor(routes: readonly Route<string, unknown>[] = [], middleware: readonly Middleware[] = []) {
    this.routes = routes
    this.middleware = middleware
  }

  private with(route: Route<string, unknown>): Router {
    return new Router([...this.routes, route], this.middleware)
  }

  private withMiddleware(mw: Middleware): Router {
    return new Router(this.routes, [...this.middleware, mw])
  }

  use(mw: Middleware): Router {
    return this.withMiddleware(mw)
  }

  add<P extends string, B>(
    method: HttpMethod,
    path: P,
    handler: (ctx: {
      readonly req: Request
      readonly params: PathParams<P>
      readonly query: QueryParams
      readonly body: B
    }) => Promise<Response> | Response,
    validate?: Validator<B>
  ): Router {
    return this.with({
      method,
      match: buildMatcher(path),
      handler: handler as Route<string, unknown>["handler"],
      validate: validate as Validator<unknown> | undefined
    })
  }

  get<P extends string>(
    path: P,
    handler: (ctx: {
      readonly req: Request
      readonly params: PathParams<P>
      readonly query: QueryParams
      readonly body: undefined
    }) => Promise<Response> | Response
  ): Router {
    return this.add("GET", path, handler)
  }

  post<P extends string, B>(
    path: P,
    validate: Validator<B>,
    handler: (ctx: {
      readonly req: Request
      readonly params: PathParams<P>
      readonly query: QueryParams
      readonly body: B
    }) => Promise<Response> | Response
  ): Router {
    return this.add("POST", path, handler, validate)
  }

  put<P extends string, B>(
    path: P,
    validate: Validator<B>,
    handler: (ctx: {
      readonly req: Request
      readonly params: PathParams<P>
      readonly query: QueryParams
      readonly body: B
    }) => Promise<Response> | Response
  ): Router {
    return this.add("PUT", path, handler, validate)
  }

  delete<P extends string>(
    path: P,
    handler: (ctx: {
      readonly req: Request
      readonly params: PathParams<P>
      readonly query: QueryParams
      readonly body: undefined
    }) => Promise<Response> | Response
  ): Router {
    return this.add("DELETE", path, handler)
  }

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: router logic is straightforward
  private async dispatch(req: Request): Promise<Response> {
    const url = new URL(req.url)
    let methodMismatch = false

    for (const route of this.routes) {
      const params = route.match(url)
      if (!params) {
        continue
      }
      if (route.method !== req.method) {
        methodMismatch = true
        continue
      }
      const query = parseQuery(url)
        const bodyExit = route.validate
          ? await Effect.runPromiseExit(parseAndValidate(req, route.validate))
          : Exit.succeed<unknown>(undefined)
        if (Exit.isFailure(bodyExit)) {
          const either = Cause.failureOrCause(bodyExit.cause)
          if (Either.isLeft(either)) {
            return either.left
          }
          return new Response("Internal Error", { status: 500 })
        }
      return route.handler({ req, params, query, body: bodyExit.value })
    }
    if (methodMismatch) {
      return new Response("Method Not Allowed", { status: 405 })
    }
    return new Response("Not Found", { status: 404 })
  }

  async handle(req: Request): Promise<Response> {
    let index = -1
    const run = async (i: number): Promise<Response> => {
      if (i <= index) {
        throw new Error("next called multiple times")
      }
      index = i
      const mw = this.middleware[i]
      if (mw) {
        return mw(req, () => run(i + 1))
      }
      return this.dispatch(req)
    }
    return run(0)
  }
}
