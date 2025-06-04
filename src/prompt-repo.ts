import { type Result, err, ok } from "neverthrow"
import type { DbConnection, DbError } from "./db.ts"
import type { PromptError } from "./errors.ts"
import type { Prompt } from "./types.ts"

export const createPromptRepo = (
  db: DbConnection
): {
  readonly addPrompt: (id: string, name: string, content: string) => Result<Prompt, PromptError>
  readonly getPrompt: (id: string) => Result<Prompt, PromptError>
  readonly listPrompts: () => Result<readonly Prompt[], PromptError>
  readonly updatePrompt: (id: string, name: string, content: string) => Result<Prompt, PromptError>
  readonly deletePrompt: (id: string) => Result<void, PromptError>
} => {
  const mapDbError = (error: DbError): PromptError => ({
    type: "invalid-input",
    reason: error.reason
  })

  const addPrompt = (id: string, name: string, content: string): Result<Prompt, PromptError> =>
    db
      .run("INSERT INTO prompts (id, name, content) VALUES (?1, ?2, ?3)", [id, name, content])
      .map((): Prompt => ({ id, name, content }))
      .mapErr(mapDbError)

  const getPrompt = (id: string): Result<Prompt, PromptError> =>
    db
      .all<Prompt>("SELECT id, name, content FROM prompts WHERE id = ?1", [id])
      .mapErr(mapDbError)
      .andThen((rows) => {
        const [first] = rows
        if (first) {
          return ok(first)
        }
        const notFound: PromptError = { type: "not-found", id }
        return err(notFound)
      })

  const listPrompts = (): Result<readonly Prompt[], PromptError> =>
    db
      .all<Prompt>("SELECT id, name, content FROM prompts", [])
      .map((rows) => rows as readonly Prompt[])
      .mapErr(mapDbError)

  const updatePrompt = (id: string, name: string, content: string): Result<Prompt, PromptError> =>
    db
      .run("UPDATE prompts SET name = ?1, content = ?2 WHERE id = ?3", [name, content, id])
      .mapErr(mapDbError)
      .andThen((result) => {
        if (result.changes === 0) {
          const notFound: PromptError = { type: "not-found", id }
          return err(notFound)
        }
        return ok({ id, name, content })
      })

  const deletePrompt = (id: string): Result<void, PromptError> =>
    db
      .run("DELETE FROM prompts WHERE id = ?1", [id])
      .mapErr(mapDbError)
      .andThen((result) => {
        if (result.changes === 0) {
          const notFound: PromptError = { type: "not-found", id }
          return err(notFound)
        }
        return ok(undefined)
      })

  return {
    addPrompt,
    getPrompt,
    listPrompts,
    updatePrompt,
    deletePrompt
  } as const
}
