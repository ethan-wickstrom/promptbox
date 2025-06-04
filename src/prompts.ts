import { existsSync, mkdirSync } from "node:fs"
import { join } from "node:path"
import process from "node:process"
import { Effect, Exit, pipe } from "effect"
import { type DbConnection, type DbError, createConnection } from "./db.ts"
import type { PromptError } from "./errors.ts"
import { createPromptRepo } from "./prompt-repo.ts"
import type { Prompt } from "./types.ts"

export const createPromptStore = (
  dataDir?: string
): {
  readonly addPrompt: (name: string, content: string) => Effect.Effect<Prompt, PromptError>
  readonly getPrompt: (id: string) => Effect.Effect<Prompt, PromptError>
  readonly listPrompts: () => readonly Prompt[]
  readonly updatePrompt: (id: string, name: string, content: string) => Effect.Effect<Prompt, PromptError>
  readonly deletePrompt: (id: string) => Effect.Effect<void, PromptError>
  readonly closeDb: () => void
} => {
  const { PROMPTBOX_DATA_DIR } = process.env
  const dir = dataDir?.trim() || PROMPTBOX_DATA_DIR?.trim() || join(process.cwd(), "data")
  const dbFile = join(dir, "prompts.sqlite")
  let db: DbConnection | undefined
  let repo: ReturnType<typeof createPromptRepo> | undefined

  const getDb = (): Effect.Effect<DbConnection, DbError> => {
    if (db) {
      return Effect.succeed(db)
    }
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
    return pipe(
      createConnection(dbFile),
      Effect.map((conn) => {
        db = conn
        Effect.runSync(
          conn.run(
            "CREATE TABLE IF NOT EXISTS prompts (id TEXT PRIMARY KEY, name TEXT NOT NULL, content TEXT NOT NULL);",
            []
          )
        )
        repo = createPromptRepo(conn)
        return conn
      })
    )
  }

  const closeDb = (): void => {
    if (db) {
      db.close()
      db = undefined
      repo = undefined
    }
  }

  const getRepo = (): Effect.Effect<ReturnType<typeof createPromptRepo>, DbError> =>
    pipe(
      getDb(),
      Effect.map((conn) => {
        if (!repo) {
          repo = createPromptRepo(conn)
        }
        return repo
      })
    )

  const mapDbError = (error: DbError): PromptError => ({
    type: "invalid-input",
    reason: error.reason
  })

  const addPrompt = (name: string, content: string): Effect.Effect<Prompt, PromptError> => {
    if (!(name.trim() && content.trim())) {
      return Effect.fail({
        type: "invalid-input",
        reason: "Empty values are not allowed"
      })
    }
    const id: string =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
    return pipe(
      getRepo(),
      Effect.mapError(mapDbError),
      Effect.flatMap((r) => r.addPrompt(id, name, content))
    )
  }

  const getPrompt = (id: string): Effect.Effect<Prompt, PromptError> =>
    pipe(
      getRepo(),
      Effect.mapError(mapDbError),
      Effect.flatMap((r) => r.getPrompt(id))
    )

  const listPrompts = (): readonly Prompt[] => {
    const exit = Effect.runSyncExit(
      pipe(
        getRepo(),
        Effect.flatMap((r) => r.listPrompts())
      )
    )
    return Exit.match(exit, {
      onSuccess: (rows): readonly Prompt[] => rows,
      onFailure: (): readonly Prompt[] => []
    })
  }

  const updatePrompt = (id: string, name: string, content: string): Effect.Effect<Prompt, PromptError> => {
    if (!(name.trim() && content.trim())) {
      return Effect.fail({
        type: "invalid-input",
        reason: "Empty values are not allowed"
      })
    }
    return pipe(
      getRepo(),
      Effect.mapError(mapDbError),
      Effect.flatMap((r) => r.updatePrompt(id, name, content))
    )
  }

  const deletePrompt = (id: string): Effect.Effect<void, PromptError> =>
    pipe(
      getRepo(),
      Effect.mapError(mapDbError),
      Effect.flatMap((r) => r.deletePrompt(id))
    )

  return {
    addPrompt,
    getPrompt,
    listPrompts,
    updatePrompt,
    deletePrompt,
    closeDb
  } as const
}
