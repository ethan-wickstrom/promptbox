import { match, P } from 'ts-pattern';
import type { Result } from 'neverthrow';
import { ok, err } from 'neverthrow';

import type { PromptError } from './errors';

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonValue[];

export type JsonObject = { readonly [key: string]: JsonValue };

const isJsonValue = (value: unknown): value is JsonValue => {
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.every(isJsonValue);
  }
  if (typeof value === 'object') {
    return Object.values(value as JsonObject).every(isJsonValue);
  }
  return false;
};

export type PromptInput = {
  readonly name: string;
  readonly content: string;
};

export const parseJson = async (
  req: Request
): Promise<Result<JsonValue, Response>> => {
  try {
    const data = JSON.parse(await req.text());
    return isJsonValue(data)
      ? ok(data)
      : err(new Response('Invalid JSON', { status: 400 }));
  } catch {
    return err(new Response('Invalid JSON', { status: 400 }));
  }
};

export const validatePromptInput = (
  data: JsonObject
): Result<PromptInput, Response> =>
  match(data)
    .with({ name: P.string, content: P.string }, ({ name, content }) =>
      ok({ name, content })
    )
    .otherwise(() => err(new Response('Invalid', { status: 400 })));

export const toResponse = <T>(
  result: Result<T, PromptError>,
  status = 200
): Response =>
  result.match(
    (value) => Response.json(value, { status }),
    (error) =>
      match(error)
        .with(
          { type: 'invalid-input' },
          (e) => new Response(e.reason, { status: 400 })
        )
        .with(
          { type: 'not-found' },
          () => new Response('Not Found', { status: 404 })
        )
        .exhaustive()
  );

export const toEmptyResponse = (
  result: Result<unknown, PromptError>,
  status = 204
): Response =>
  result.match(
    () => new Response(null, { status }),
    (error) =>
      match(error)
        .with(
          { type: 'invalid-input' },
          (e) => new Response(e.reason, { status: 400 })
        )
        .with(
          { type: 'not-found' },
          () => new Response('Not Found', { status: 404 })
        )
        .exhaustive()
  );

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * For a path string like "/foo/:id", PathParams resolves to an object
 * containing the matching parameter name, e.g. { id: string }. If no
 * parameters exist, it becomes an empty object.
 */
type PathParams<P extends string> =
  P extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof PathParams<Rest>]: string }
    : P extends `${string}:${infer Param}`
    ? { [K in Param]: string }
    : Record<never, never>;

type Validator<T> = (data: JsonObject) => Result<T, Response>;

export type QueryParams = {
  readonly [key: string]: string | readonly string[];
};

export const parseQuery = (url: URL): QueryParams => {
  // Use `readonly string[]` to line‑up with the `QueryParams` alias
  const result: Record<string, string | readonly string[]> = {};

  // Using a `Set` prevents duplicate work if the same key appears more than once
  const keys = new Set(url.searchParams.keys());

  for (const key of keys) {
    const values = url.searchParams.getAll(key);

    if (values.length === 1) {
      const [value] = values;
      // `value` is defined because `length === 1`, but the compiler
      // still considers the possibility of `undefined` when
      // `noUncheckedIndexedAccess` is enabled.  Provide a safe fallback.
      result[key] = value ?? '';
    } else {
      // Preserve *all* values for query parameters that occur multiple times
      result[key] = values;
    }
  }

  return result;
};

type Route<P extends string, B> = {
  readonly method: HttpMethod;
  readonly match: (url: URL) => PathParams<P> | null;
  readonly handler: (ctx: {
    readonly req: Request;
    readonly params: PathParams<P>;
    readonly query: QueryParams;
    readonly body: B;
  }) => Promise<Response> | Response;
  readonly validate?: Validator<B>;
};

const buildMatcher = <P extends string>(path: P) => {
  const parts = path.split('/').filter((segment) => segment.length > 0);

  return (url: URL): PathParams<P> | null => {
    const urlParts = url.pathname
      .split('/')
      .filter((segment) => segment.length > 0);
    if (urlParts.length !== parts.length) {
      return null;
    }

    const params: Record<string, string> = {};
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part === undefined) {
        return null;
      }
      const current = urlParts[i];

      // If a segment is missing or undefined, fail to match
      if (current === undefined) {
        return null;
      }
      if (part.startsWith(':')) {
        params[part.slice(1)] = decodeURIComponent(current);
      } else if (part !== current) {
        return null;
      }
    }
    return params as PathParams<P>;
  };
};

export type Middleware = (
  req: Request,
  next: () => Promise<Response>
) => Promise<Response>;

export class Router {
  constructor(
    private readonly routes: readonly Route<string, unknown>[] = [],
    private readonly middleware: readonly Middleware[] = []
  ) {}

  private with(route: Route<string, unknown>): Router {
    return new Router([...this.routes, route], this.middleware);
  }

  private withMiddleware(mw: Middleware): Router {
    return new Router(this.routes, [...this.middleware, mw]);
  }

  use(mw: Middleware): Router {
    return this.withMiddleware(mw);
  }

  add<P extends string, B>(
    method: HttpMethod,
    path: P,
    handler: (ctx: {
      readonly req: Request;
      readonly params: PathParams<P>;
      readonly query: QueryParams;
      readonly body: B;
    }) => Promise<Response> | Response,
    validate?: Validator<B>
  ): Router {
    return this.with({
      method,
      match: buildMatcher(path),
      handler: handler as Route<string, unknown>['handler'],
      validate: validate as Validator<unknown> | undefined,
    });
  }

  get<P extends string>(
    path: P,
    handler: (ctx: {
      readonly req: Request;
      readonly params: PathParams<P>;
      readonly query: QueryParams;
      readonly body: undefined;
    }) => Promise<Response> | Response
  ): Router {
    return this.add('GET', path, handler);
  }

  post<P extends string, B>(
    path: P,
    validate: Validator<B>,
    handler: (ctx: {
      readonly req: Request;
      readonly params: PathParams<P>;
      readonly query: QueryParams;
      readonly body: B;
    }) => Promise<Response> | Response
  ): Router {
    return this.add('POST', path, handler, validate);
  }

  put<P extends string, B>(
    path: P,
    validate: Validator<B>,
    handler: (ctx: {
      readonly req: Request;
      readonly params: PathParams<P>;
      readonly query: QueryParams;
      readonly body: B;
    }) => Promise<Response> | Response
  ): Router {
    return this.add('PUT', path, handler, validate);
  }

  delete<P extends string>(
    path: P,
    handler: (ctx: {
      readonly req: Request;
      readonly params: PathParams<P>;
      readonly query: QueryParams;
      readonly body: undefined;
    }) => Promise<Response> | Response
  ): Router {
    return this.add('DELETE', path, handler);
  }

  private async dispatch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    let methodMismatch = false;

    for (const route of this.routes) {
      const params = route.match(url);
      if (!params) continue;
      if (route.method !== req.method) {
        methodMismatch = true;

        continue;
      }
      const query = parseQuery(url);
      let body: unknown;
      if (route.validate) {
        const json = await parseJson(req);
        if (json.isErr()) return json.error;

        const parsedData = json.value;
        if (
          typeof parsedData !== 'object' ||
          parsedData === null ||
          Array.isArray(parsedData)
        ) {
          return new Response('Invalid JSON', { status: 400 });
        }

        const validated = route.validate(parsedData);
        if (validated.isErr()) return validated.error;
        body = validated.value;
      }

      return route.handler({ req, params, query, body });
    }
    if (methodMismatch) {
      return new Response('Method Not Allowed', { status: 405 });
    }
    return new Response('Not Found', { status: 404 });
  }

  async handle(req: Request): Promise<Response> {
    let index = -1;
    const run = async (i: number): Promise<Response> => {
      if (i <= index) {
        throw new Error('next called multiple times');
      }
      index = i;
      const mw = this.middleware[i];
      if (mw) {
        return mw(req, () => run(i + 1));
      }
      return this.dispatch(req);
    };
    return run(0);
  }
}
