import { Schema } from "@effect/schema"
import { formatErrorSync } from "@effect/schema/TreeFormatter"
import { Effect, pipe } from "effect"
import { HttpError, NotFoundError, ValidationError } from "./errors.ts"

// JSON types
export type JsonValue = string | number | boolean | null | JsonObject | JsonValue[]
export type JsonObject = { readonly [key: string]: JsonValue }

// Input validation schema
export const PromptInputSchema = Schema.Struct({
  name: Schema.NonEmptyString,
  content: Schema.NonEmptyString
})

export type PromptInput = Schema.Schema.Type<typeof PromptInputSchema>

// Parse JSON from request body
export const parseJson = (req: Request): Effect.Effect<JsonValue, HttpError> =>
  Effect.tryPromise({
    try: async (): Promise<JsonValue> => {
      const text = await req.text()
      return JSON.parse(text)
    },
    catch: (error): HttpError =>
      new HttpError({
        statusCode: 400,
        reason: `Invalid JSON: ${error instanceof Error ? error.message : String(error)}`
      })
  })

// Validate prompt input
export const validatePromptInput = (data: unknown): Effect.Effect<PromptInput, HttpError> =>
  pipe(
    Schema.decodeUnknown(PromptInputSchema)(data),
    Effect.mapError(
      (error) =>
        new HttpError({
          statusCode: 400,
          reason: formatErrorSync(error).split("\n")[0] ?? "Invalid input"
        })
    )
  )

// Parse and validate request body
export const parseAndValidate = <A>(
  req: Request,
  validate: (data: unknown) => Effect.Effect<A, HttpError>
): Effect.Effect<A, HttpError> => pipe(parseJson(req), Effect.flatMap(validate))

// HTTP types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

// Path parameter extraction types
type PathParams<P extends string> = P extends `${string}:${infer Param}/${infer Rest}`
  ? { [K in Param | keyof PathParams<Rest>]: string }
  : P extends `${string}:${infer Param}`
    ? { [K in Param]: string }
    : Record<never, never>

// Query parameters type
export type QueryParams = {
  readonly limit?: string | readonly string[]
  readonly [key: string]: string | readonly string[] | undefined
}

// Parse query parameters
export const parseQuery = (url: URL): QueryParams => {
  const result: Record<string, string | readonly string[]> = {}
  const keys = new Set(url.searchParams.keys())

  for (const key of keys) {
    const values = url.searchParams.getAll(key)
    result[key] = values.length === 1 ? (values[0] ?? "") : values
  }

  return result
}

// Route context type
export type RouteContext<P extends string, B = undefined> = {
  readonly req: Request
  readonly params: PathParams<P>
  readonly query: QueryParams
  readonly body: B
}

// Route handler type
type RouteHandler<P extends string, B, E> = (ctx: RouteContext<P, B>) => Effect.Effect<Response, E>

// Validator type
type Validator<A> = (data: unknown) => Effect.Effect<A, HttpError>

// Route type
type Route<E> = {
  readonly method: HttpMethod
  readonly match: (url: URL) => Record<string, string> | null
  readonly handler: (ctx: RouteContext<string, unknown>) => Effect.Effect<Response, E>
  readonly validate?: Validator<unknown>
}

// Build path matcher
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

    return matched ? params : null
  }
}

// Middleware type
export type Middleware<E> = (req: Request, next: () => Effect.Effect<Response, E>) => Effect.Effect<Response, E>

// Router class
export class Router<E = never> {
  private readonly routes: readonly Route<E>[]
  private readonly middleware: readonly Middleware<E>[]

  constructor(routes: readonly Route<E>[] = [], middleware: readonly Middleware<E>[] = []) {
    this.routes = routes
    this.middleware = middleware
  }

  private with(route: Route<E>): Router<E> {
    return new Router([...this.routes, route], this.middleware)
  }

  private withMiddleware(mw: Middleware<E>): Router<E> {
    return new Router(this.routes, [...this.middleware, mw])
  }

  use<E2>(mw: Middleware<E | E2>): Router<E | E2> {
    return new Router<E | E2>(
      this.routes as readonly Route<E | E2>[],
      [...this.middleware, mw] as readonly Middleware<E | E2>[]
    )
  }

  add<P extends string, B, E2>(
    method: HttpMethod,
    path: P,
    handler: RouteHandler<P, B, E | E2>,
    validate?: Validator<B>
  ): Router<E | E2> {
    const route: Route<E | E2> = {
      method,
      match: buildMatcher(path),
      handler: handler,
      validate: validate
    }
    return new Router<E | E2>(
      [...this.routes, route] as readonly Route<E | E2>[],
      this.middleware as readonly Middleware<E | E2>[]
    )
  }

  get<P extends string, E2 = never>(path: P, handler: RouteHandler<P, undefined, E | E2>): Router<E | E2> {
    return this.add("GET", path, handler)
  }

  post<P extends string, B, E2 = never>(
    path: P,
    validate: Validator<B>,
    handler: RouteHandler<P, B, E | E2>
  ): Router<E | E2> {
    return this.add("POST", path, handler, validate)
  }

  put<P extends string, B, E2 = never>(
    path: P,
    validate: Validator<B>,
    handler: RouteHandler<P, B, E | E2>
  ): Router<E | E2> {
    return this.add("PUT", path, handler, validate)
  }

  delete<P extends string, E2 = never>(path: P, handler: RouteHandler<P, undefined, E | E2>): Router<E | E2> {
    return this.add("DELETE", path, handler)
  }

  private dispatch(req: Request): Effect.Effect<Response, E | HttpError> {
    return Effect.sync(() => {
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

        if (route.validate) {
          return pipe(
            parseAndValidate(req, route.validate),
            Effect.flatMap((body) => route.handler({ req, params, query, body }))
          )
        }

        return route.handler({ req, params, query, body: undefined })
      }

      if (methodMismatch) {
        return Effect.fail(
          new HttpError({
            statusCode: 405,
            reason: "Method Not Allowed"
          })
        )
      }

      return Effect.fail(
        new HttpError({
          statusCode: 404,
          reason: "Not Found"
        })
      )
    }).pipe(Effect.flatten)
  }

  handle(req: Request): Effect.Effect<Response, E | HttpError> {
    const runMiddleware = (index: number): Effect.Effect<Response, E | HttpError> => {
      const mw = this.middleware[index]
      if (mw) {
        return mw(req, () => runMiddleware(index + 1))
      }
      return this.dispatch(req)
    }

    return runMiddleware(0)
  }
}

// Helper functions for converting Effects to Responses
export const toJsonResponse = <A, E>(
  effect: Effect.Effect<A, E>,
  errorHandler: (error: E) => HttpError,
  status = 200
): Effect.Effect<Response, never> =>
  pipe(
    effect,
    Effect.map((data) => Response.json(data, { status })),
    Effect.catchAll((error) => {
      const httpError = errorHandler(error)
      return Effect.succeed(new Response(httpError.reason, { status: httpError.statusCode }))
    })
  )

export const toEmptyResponse = <E>(
  effect: Effect.Effect<unknown, E>,
  errorHandler: (error: E) => HttpError,
  status = 204
): Effect.Effect<Response, never> =>
  pipe(
    effect,
    Effect.map(() => new Response(null, { status })),
    Effect.catchAll((error) => {
      const httpError = errorHandler(error)
      return Effect.succeed(new Response(httpError.reason, { status: httpError.statusCode }))
    })
  )

// Error mapping for domain errors
export const mapDomainError = (error: unknown): HttpError => {
  if (error instanceof NotFoundError) {
    return new HttpError({
      statusCode: 404,
      reason: `${error.type} not found: ${error.id}`
    })
  }
  if (error instanceof ValidationError) {
    return new HttpError({
      statusCode: 400,
      reason: error.reason
    })
  }
  if (error instanceof HttpError) {
    return error
  }
  return new HttpError({
    statusCode: 500,
    reason: "Internal Server Error"
  })
}
