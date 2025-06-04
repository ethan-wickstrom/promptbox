import { describe, expect, it } from 'bun:test';
import { err, ok } from 'neverthrow';
import { parseJson, validatePromptInput, toResponse, toEmptyResponse } from './router';
import type { PromptError } from './errors';

const readJson = async (body: string) =>
  parseJson<Record<string, unknown>>(new Request('http://t', { method: 'POST', body }));

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
