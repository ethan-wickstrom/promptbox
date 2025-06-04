import { match, P } from 'ts-pattern';
import { Result, ok, err } from 'neverthrow';
import type { PromptError } from './errors';

export type PromptInput = {
  readonly name: string;
  readonly content: string;
};

export const parseJson = async <T>(req: Request): Promise<Result<T, Response>> => {
  try {
    const data = (await req.json()) as T;
    return ok(data);
  } catch {
    return err(new Response('Invalid JSON', { status: 400 }));
  }
};

export const validatePromptInput = (
  data: Record<string, unknown>,
): Result<PromptInput, Response> =>
  match(data)
    .with({ name: P.string, content: P.string }, ({ name, content }) =>
      ok({ name, content }),
    )
    .otherwise(() => err(new Response('Invalid', { status: 400 })));

export const toResponse = <T>(
  result: Result<T, PromptError>,
  status = 200,
): Response =>
  result.match(
    value => Response.json(value, { status }),
    error =>
      match(error)
        .with({ type: 'invalid-input' }, e => new Response(e.reason, { status: 400 }))
        .with({ type: 'not-found' }, () => new Response('Not Found', { status: 404 }))
        .exhaustive(),
  );

export const toEmptyResponse = (
  result: Result<unknown, PromptError>,
  status = 204,
): Response =>
  result.match(
    () => new Response(null, { status }),
    error =>
      match(error)
        .with({ type: 'invalid-input' }, e => new Response(e.reason, { status: 400 }))
        .with({ type: 'not-found' }, () => new Response('Not Found', { status: 404 }))
        .exhaustive(),
  );

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type PathParams<P extends string> =
  P extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof PathParams<Rest>]: string }
    : P extends `${string}:${infer Param}`
    ? { [K in Param]: string }
    : {};

type Validator<T> = (data: Record<string, unknown>) => Result<T, Response>;

type Route<P extends string, B> = {
  readonly method: HttpMethod;
  readonly match: (url: URL) => PathParams<P> | null;
  readonly handler: (
    ctx: { readonly req: Request; readonly params: PathParams<P>; readonly body: B },
  ) => Promise<Response> | Response;
  readonly validate?: Validator<B>;
};

const buildMatcher = <P extends string>(path: P) => {
  const parts = path.split('/').filter(Boolean);
  return (url: URL): PathParams<P> | null => {
    const urlParts = url.pathname.split('/').filter(Boolean);
    if (urlParts.length !== parts.length) return null;
    const params: Record<string, string> = {};
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]!;
      const current = urlParts[i]!;
      if (part.startsWith(':')) {
        params[part.slice(1)] = decodeURIComponent(current);
      } else if (part !== current) {
        return null;
      }
    }
    return params as PathParams<P>;
  };
};

export class Router {
  constructor(private readonly routes: readonly Route<string, unknown>[] = []) {}

  private with(route: Route<string, unknown>): Router {
    return new Router([...this.routes, route]);
  }

  add<P extends string, B>(
    method: HttpMethod,
    path: P,
    handler: (
      ctx: { readonly req: Request; readonly params: PathParams<P>; readonly body: B },
    ) => Promise<Response> | Response,
    validate?: Validator<B>,
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
    handler: (
      ctx: { readonly req: Request; readonly params: PathParams<P>; readonly body: undefined },
    ) => Promise<Response> | Response,
  ): Router {
    return this.add('GET', path, handler);
  }

  post<P extends string, B>(
    path: P,
    validate: Validator<B>,
    handler: (
      ctx: { readonly req: Request; readonly params: PathParams<P>; readonly body: B },
    ) => Promise<Response> | Response,
  ): Router {
    return this.add('POST', path, handler, validate);
  }

  put<P extends string, B>(
    path: P,
    validate: Validator<B>,
    handler: (
      ctx: { readonly req: Request; readonly params: PathParams<P>; readonly body: B },
    ) => Promise<Response> | Response,
  ): Router {
    return this.add('PUT', path, handler, validate);
  }

  delete<P extends string>(
    path: P,
    handler: (
      ctx: { readonly req: Request; readonly params: PathParams<P>; readonly body: undefined },
    ) => Promise<Response> | Response,
  ): Router {
    return this.add('DELETE', path, handler);
  }

  async handle(req: Request): Promise<Response> {
    const url = new URL(req.url);
    for (const route of this.routes) {
      if (route.method !== req.method) continue;
      const params = route.match(url);
      if (!params) continue;
      let body: unknown = undefined;
      if (route.validate) {
        const json = await parseJson<Record<string, unknown>>(req);
        if (json.isErr()) return json.error;
        const validated = route.validate(json.value);
        if (validated.isErr()) return validated.error;
        body = validated.value;
      }
      return route.handler({ req, params, body } as never);
    }
    return new Response('Not Found', { status: 404 });
  }
}

