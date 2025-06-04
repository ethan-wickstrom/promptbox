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
