import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { Database } from 'bun:sqlite';
import { err, ok, type Result } from 'neverthrow';
import type { Prompt } from './types';
import type { PromptError } from './errors';

export const createPromptStore = (dataDir?: string) => {
  const dir = dataDir?.trim() ||
    process.env['PROMPTBOX_DATA_DIR']?.trim() ||
    join(process.cwd(), 'data');
  const dbFile = join(dir, 'prompts.sqlite');
  let db: Database | undefined;

  const getDb = (): Database => {
    if (db) {
      return db;
    }
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    db = new Database(dbFile);
    db.exec('PRAGMA journal_mode = WAL;');
    db.exec(
      'CREATE TABLE IF NOT EXISTS prompts (id TEXT PRIMARY KEY, name TEXT NOT NULL, content TEXT NOT NULL);'
    );
    return db;
  };

  const closeDb = (): void => {
    if (db) {
      db.close(false);
      db = undefined;
    }
  };

  const addPrompt = (
    name: string,
    content: string
  ): Result<Prompt, PromptError> => {
    if (!name.trim() || !content.trim()) {
      return err({
        type: 'invalid-input',
        reason: 'Empty values are not allowed',
      });
    }
    const id: string = typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    const database = getDb();
    database
      .query('INSERT INTO prompts (id, name, content) VALUES (?1, ?2, ?3)')
      .run(id, name, content);
    const prompt: Prompt = { id, name, content };
    return ok(prompt);
  };

  const getPrompt = (id: string): Result<Prompt, PromptError> => {
    const row =
      getDb()
        .query<Prompt, { $id: string }>(
          'SELECT id, name, content FROM prompts WHERE id = $id'
        )
        .get({ $id: id }) ?? undefined;
    return row ? ok(row) : err({ type: 'not-found', id });
  };

  const listPrompts = (): ReadonlyArray<Prompt> =>
    getDb().query<Prompt, []>('SELECT id, name, content FROM prompts').all();

  const updatePrompt = (
    id: string,
    name: string,
    content: string
  ): Result<Prompt, PromptError> => {
    if (!name.trim() || !content.trim()) {
      return err({
        type: 'invalid-input',
        reason: 'Empty values are not allowed',
      });
    }
    const result = getDb()
      .query('UPDATE prompts SET name = ?1, content = ?2 WHERE id = ?3')
      .run(name, content, id);
    if (result.changes === 0) {
      return err({ type: 'not-found', id });
    }
    const updated: Prompt = { id, name, content };
    return ok(updated);
  };

  const deletePrompt = (id: string): Result<void, PromptError> => {
    const result = getDb().query('DELETE FROM prompts WHERE id = ?1').run(id);
    if (result.changes === 0) {
      return err({ type: 'not-found', id });
    }
    return ok(undefined);
  };

  return {
    addPrompt,
    getPrompt,
    listPrompts,
    updatePrompt,
    deletePrompt,
    closeDb,
  } as const;
};
