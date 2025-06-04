import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { err, ok, type Result } from 'neverthrow';
import {
  createConnection,
  type DbConnection,
  type DbError,
} from './db';
import { createPromptRepo } from './prompt-repo';
import type { Prompt } from './types';
import type { PromptError } from './errors';

export const createPromptStore = (dataDir?: string) => {
  const dir = dataDir?.trim() ||
    process.env['PROMPTBOX_DATA_DIR']?.trim() ||
    join(process.cwd(), 'data');
  const dbFile = join(dir, 'prompts.sqlite');
  let db: DbConnection | undefined;
  let repo: ReturnType<typeof createPromptRepo> | undefined;

  const getDb = (): Result<DbConnection, DbError> => {
    if (db) {
      return ok(db);
    }
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    return createConnection(dbFile).map((conn) => {
      db = conn;
      conn.run(
        'CREATE TABLE IF NOT EXISTS prompts (id TEXT PRIMARY KEY, name TEXT NOT NULL, content TEXT NOT NULL);',
        [],
      );
      repo = createPromptRepo(conn);
      return conn;
    });
  };

  const closeDb = (): void => {
    if (db) {
      db.close();
      db = undefined;
      repo = undefined;
    }
  };

  const getRepo = (): Result<ReturnType<typeof createPromptRepo>, DbError> =>
    getDb().map((conn) => {
      if (!repo) {
        repo = createPromptRepo(conn);
      }
      return repo;
    });

  const mapDbError = (error: DbError): PromptError => ({
    type: 'invalid-input',
    reason: error.reason,
  });

  const addPrompt = (
    name: string,
    content: string,
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
    return getRepo()
      .mapErr(mapDbError)
      .andThen((r) => r.addPrompt(id, name, content));
  };

  const getPrompt = (id: string): Result<Prompt, PromptError> =>
    getRepo()
      .mapErr(mapDbError)
      .andThen((r) => r.getPrompt(id));

  const listPrompts = (): ReadonlyArray<Prompt> =>
    getRepo()
      .andThen((r) => r.listPrompts())
      .match(
        (rows) => rows,
        () => [],
      );

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
    return getRepo()
      .mapErr(mapDbError)
      .andThen((r) => r.updatePrompt(id, name, content));
  };

  const deletePrompt = (id: string): Result<void, PromptError> =>
    getRepo()
      .mapErr(mapDbError)
      .andThen((r) => r.deletePrompt(id));

  return {
    addPrompt,
    getPrompt,
    listPrompts,
    updatePrompt,
    deletePrompt,
    closeDb,
  } as const;
};
