import { Effect, pipe } from "effect"
import type { DbConnection, DbError } from "./db.ts"
import type { PromptError } from "./errors.ts"
import type { Prompt } from "./types.ts"

export const createPromptRepo = (
  db: DbConnection
): {
  readonly addPrompt: (id: string, name: string, content: string) => Effect.Effect<Prompt, PromptError>
  readonly getPrompt: (id: string) => Effect.Effect<Prompt, PromptError>
  readonly listPrompts: () => Effect.Effect<readonly Prompt[], PromptError>
  readonly updatePrompt: (id: string, name: string, content: string) => Effect.Effect<Prompt, PromptError>
  readonly deletePrompt: (id: string) => Effect.Effect<void, PromptError>
} => {
  const mapDbError = (error: DbError): PromptError => ({
    type: "invalid-input",
    reason: error.reason
  })

  const addPrompt = (id: string, name: string, content: string): Effect.Effect<Prompt, PromptError> =>
    pipe(
      db.run("INSERT INTO prompts (id, name, content) VALUES (?1, ?2, ?3)", [id, name, content]),
      Effect.map((): Prompt => ({ id, name, content })),
      Effect.mapError(mapDbError)
    )

  const getPrompt = (id: string): Effect.Effect<Prompt, PromptError> =>
    pipe(
      db.all<Prompt>("SELECT id, name, content FROM prompts WHERE id = ?1", [id]),
      Effect.mapError(mapDbError),
      Effect.flatMap((rows) => {
        const [first] = rows
        if (first) {
          return Effect.succeed(first)
        }
        const notFound: PromptError = { type: "not-found", id }
        return Effect.fail(notFound)
      })
    )

  const listPrompts = (): Effect.Effect<readonly Prompt[], PromptError> =>
    pipe(
      db.all<Prompt>("SELECT id, name, content FROM prompts", []),
      Effect.map((rows) => rows as readonly Prompt[]),
      Effect.mapError(mapDbError)
    )

  const updatePrompt = (id: string, name: string, content: string): Effect.Effect<Prompt, PromptError> =>
    pipe(
      db.run("UPDATE prompts SET name = ?1, content = ?2 WHERE id = ?3", [name, content, id]),
      Effect.mapError(mapDbError),
      Effect.flatMap((result) => {
        if (result.changes === 0) {
          const notFound: PromptError = { type: "not-found", id }
          return Effect.fail(notFound)
        }
        return Effect.succeed({ id, name, content })
      })
    )

  const deletePrompt = (id: string): Effect.Effect<void, PromptError> =>
    pipe(
      db.run("DELETE FROM prompts WHERE id = ?1", [id]),
      Effect.mapError(mapDbError),
      Effect.flatMap((result) => {
        if (result.changes === 0) {
          const notFound: PromptError = { type: "not-found", id }
          return Effect.fail(notFound)
        }
        return Effect.succeed(undefined)
      })
    )

  return {
    addPrompt,
    getPrompt,
    listPrompts,
    updatePrompt,
    deletePrompt
  } as const
}
