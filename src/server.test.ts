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
});
