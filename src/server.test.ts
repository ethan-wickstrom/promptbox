import { beforeAll, afterAll, describe, expect, it } from 'bun:test';
import { createServer } from './server';
import { existsSync, rmSync } from 'fs';
import { closeDb } from './prompts';
import { join } from 'path';

const DB_FILE = join(process.cwd(), 'data', 'prompts.sqlite');

let server: ReturnType<typeof createServer>;

beforeAll(() => {
  closeDb();
  if (existsSync(DB_FILE)) {
    rmSync(DB_FILE);
  }
  server = createServer();
});

afterAll(async () => {
  await server.stop(true);
  closeDb();
  if (existsSync(DB_FILE)) {
    rmSync(DB_FILE);
  }
});

describe('server api', () => {
  it('creates and lists prompts', async () => {
    const res = await fetch(new URL('/api/prompts', server.url), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 't', content: 'c' }),
    });
    expect(res.status).toBe(201);
    const listRes = await fetch(new URL('/api/prompts', server.url));
    const prompts = await listRes.json();
    expect(prompts.length).toBe(1);
  });

  it('retrieves a prompt by id', async () => {
    const createRes = await fetch(new URL('/api/prompts', server.url), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'get', content: 'test get' }),
    });
    const created = await createRes.json();
    const getRes = await fetch(
      new URL(`/api/prompts/${created.id}`, server.url),
    );
    expect(getRes.status).toBe(200);
    const prompt = await getRes.json();
    expect(prompt.name).toBe('get');
    expect(prompt.content).toBe('test get');
  });

  it('updates a prompt', async () => {
    const createRes = await fetch(new URL('/api/prompts', server.url), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'old', content: 'content' }),
    });
    const created = await createRes.json();
    const updateRes = await fetch(
      new URL(`/api/prompts/${created.id}`, server.url),
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'new', content: 'updated' }),
      },
    );
    expect(updateRes.status).toBe(200);
    const updated = await updateRes.json();
    expect(updated.name).toBe('new');
    expect(updated.content).toBe('updated');
  });

  it('deletes a prompt', async () => {
    const createRes = await fetch(new URL('/api/prompts', server.url), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'temp', content: 'delete' }),
    });
    const created = await createRes.json();
    const deleteRes = await fetch(
      new URL(`/api/prompts/${created.id}`, server.url),
      { method: 'DELETE' },
    );
    expect(deleteRes.status).toBe(204);
    const listRes = await fetch(new URL('/api/prompts', server.url));
    const prompts = await listRes.json();
    expect(prompts.find((p: { id: string }) => p.id === created.id)).toBe(
      undefined,
    );
    const getRes = await fetch(
      new URL(`/api/prompts/${created.id}`, server.url),
    );
    expect(getRes.status).toBe(404);
  });

  it('rejects invalid json', async () => {
    const res = await fetch(new URL('/api/prompts', server.url), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'no',
    });
    expect(res.status).toBe(400);
  });

  it('rejects missing fields', async () => {
    const res = await fetch(new URL('/api/prompts', server.url), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'only' }),
    });
    expect(res.status).toBe(400);
  });

  it('returns 404 for updating missing prompt', async () => {
    const res = await fetch(new URL('/api/prompts/none', server.url), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'n', content: 'c' }),
    });
    expect(res.status).toBe(404);
  });
});
