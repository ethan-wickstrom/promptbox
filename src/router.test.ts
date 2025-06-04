import { describe, expect, it } from 'bun:test';
import { err, ok } from 'neverthrow';
import {
  Router,
  parseJson,
  validatePromptInput,
  toResponse,
  toEmptyResponse,
} from './router';
import type { PromptError } from './errors';

const readJson = async (body: string) =>
  parseJson(new Request('http://t', { method: 'POST', body }));

describe('router utilities', () => {
  it('parses valid json', async () => {
    const result = await readJson('{"a":1}');
    expect(result.isOk()).toBe(true);
  });

  it('rejects invalid json', async () => {
    const result = await readJson('no');
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.status).toBe(400);
    }
  });

  it('validates prompt input', () => {
    const okResult = validatePromptInput({ name: 'n', content: 'c' });
    expect(okResult.isOk()).toBe(true);
    const errResult = validatePromptInput({ wrong: true });
    expect(errResult.isErr()).toBe(true);
  });

  it('converts result to response', () => {
    const success = toResponse(ok<Record<string, never>>({}), 201);
    expect(success.status).toBe(201);
    const failure = toResponse(err<void, PromptError>({ type: 'not-found', id: 'x' }));
    expect(failure.status).toBe(404);
  });

  it('converts result to empty response', () => {
    const success = toEmptyResponse(ok(undefined));
    expect(success.status).toBe(204);
    const failure = toEmptyResponse(err<void, PromptError>({ type: 'invalid-input', reason: 'bad' }));
    expect(failure.status).toBe(400);
  });
});

describe('Router', () => {
  it('handles routes and params', async () => {
    const router = new Router().get('/item/:id', ({ params }) => Response.json(params));
    const res = await router.handle(new Request('http://t/item/abc', { method: 'GET' }));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.id).toBe('abc');
  });

  it('runs middleware chain', async () => {
    const calls: string[] = [];
    const router = new Router()
      .use(async (_req, next) => {
        calls.push('a');
        return next();
      })
      .use(async (_req, next) => {
        calls.push('b');
        const res = await next();
        res.headers.set('x-test', calls.join(''));
        return res;
      })
      .get('/mw', () => new Response('ok'));

    const res = await router.handle(new Request('http://t/mw'));
    expect(await res.text()).toBe('ok');
    expect(res.headers.get('x-test')).toBe('ab');
  });

  it('validates request bodies', async () => {
    const router = new Router().post('/data', validatePromptInput, ({ body }) => Response.json(body));
    const bad = await router.handle(new Request('http://t/data', { method: 'POST', body: 'no' }));
    expect(bad.status).toBe(400);
    const goodReq = new Request('http://t/data', { method: 'POST', body: JSON.stringify({ name: 'n', content: 'c' }) });
    const goodRes = await router.handle(goodReq);
    expect(goodRes.status).toBe(200);
    const goodData = await goodRes.json();
    expect(goodData.name).toBe('n');
    expect(goodData.content).toBe('c');
  });

  it('parses query parameters', async () => {
    const router = new Router().get('/query', ({ query }) => Response.json(query));
    const res = await router.handle(new Request('http://t/query?a=1&a=2&b=3'));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual({ a: ['1', '2'], b: '3' });
  });
});
