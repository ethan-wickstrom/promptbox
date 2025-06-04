import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { Database } from 'bun:sqlite';
import { err, ok, Result } from 'neverthrow';
import type { Prompt } from './types';
import type { PromptError } from './errors';

const DATA_DIR =
  (process.env.PROMPTBOX_DATA_DIR && process.env.PROMPTBOX_DATA_DIR.trim())
    ? process.env.PROMPTBOX_DATA_DIR.trim()
    : join(process.cwd(), 'data');
const DB_FILE = join(DATA_DIR, 'prompts.sqlite');
let db: Database | undefined;

const getDb = (): Database => {
  if (db) {
    return db;
  }
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
  db = new Database(DB_FILE);
  db.exec('PRAGMA journal_mode = WAL;');
  db.exec(
    'CREATE TABLE IF NOT EXISTS prompts (id TEXT PRIMARY KEY, name TEXT NOT NULL, content TEXT NOT NULL);',
  );
  return db;
};

export const closeDb = (): void => {
  if (db) {
    db.close(false);
    db = undefined;
  }
};

export const addPrompt = (
  name: string,
  content: string,
): Result<Prompt, PromptError> => {
  if (!name.trim() || !content.trim()) {
    return err({ type: 'invalid-input', reason: 'Empty values are not allowed' });
  }
  const id = Date.now().toString(36);
  const db = getDb();
  db
    .query('INSERT INTO prompts (id, name, content) VALUES (?1, ?2, ?3)')
    .run(id, name, content);
  const prompt: Prompt = { id, name, content };
  return ok(prompt);
};

export const getPrompt = (id: string): Result<Prompt, PromptError> => {
  const row =
    getDb()
      .query<Prompt, { $id: string }>(
        'SELECT id, name, content FROM prompts WHERE id = $id',
      )
      .get({ $id: id }) ?? undefined;
  return row ? ok(row) : err({ type: 'not-found', id });
};

export const listPrompts = (): ReadonlyArray<Prompt> =>
  getDb()
    .query<Prompt, []>('SELECT id, name, content FROM prompts')
    .all();

export const updatePrompt = (
  id: string,
  name: string,
  content: string,
): Result<Prompt, PromptError> => {
  if (!name.trim() || !content.trim()) {
    return err({ type: 'invalid-input', reason: 'Empty values are not allowed' });
  }
  const result =
    getDb()
      .query('UPDATE prompts SET name = ?1, content = ?2 WHERE id = ?3')
      .run(name, content, id);
  if (result.changes === 0) {
    return err({ type: 'not-found', id });
  }
  const updated: Prompt = { id, name, content };
  return ok(updated);
};

export const deletePrompt = (id: string): Result<void, PromptError> => {
  const result = getDb().query('DELETE FROM prompts WHERE id = ?1').run(id);
  if (result.changes === 0) {
    return err({ type: 'not-found', id });
  }
  return ok(undefined);
};
