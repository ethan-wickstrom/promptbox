import type { Changes } from "bun:sqlite"
import { ArrayFormatter, Schema } from "@effect/schema"
import { Context, Effect, Layer, pipe } from "effect"
import type { AllDatabaseErrors } from "../errors.ts"
import { NotFoundError, ValidationError } from "../errors.ts"
import type { Prompt } from "../schemas.ts"
import { CreatePromptRequestSchema } from "../schemas.ts"
import { DatabaseService } from "./database.ts"

// Service type definition
export type PromptService = {
  readonly create: (name: string, content: string) => Effect.Effect<Prompt, ValidationError | AllDatabaseErrors>
  readonly getById: (id: string) => Effect.Effect<Prompt, NotFoundError | AllDatabaseErrors>
  readonly list: Effect.Effect<readonly Prompt[], AllDatabaseErrors>
  readonly update: (
    id: string,
    name: string,
    content: string
  ) => Effect.Effect<Prompt, ValidationError | NotFoundError | AllDatabaseErrors>
  readonly delete: (id: string) => Effect.Effect<void, NotFoundError | AllDatabaseErrors>
}

// Context.Tag for dependency injection
export const PromptService = Context.GenericTag<PromptService>("@services/Prompt")

// Generate a unique ID (using crypto API when available)
const generateId = (): string =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

// Pure function to create the service
const makePromptService = (database: DatabaseService): PromptService => {
  const validateInput = (
    name: string,
    content: string
  ): Effect.Effect<{ name: string; content: string }, ValidationError> =>
    pipe(
      Schema.decodeUnknown(CreatePromptRequestSchema)({ name, content }),
      Effect.mapError(
        (error) =>
          new ValidationError({
            field: "input",
            reason: ArrayFormatter.formatErrorSync(error)
              .map((issue) => issue.message)
              .join(", ")
          })
      )
    )

  const create = (name: string, content: string): Effect.Effect<Prompt, ValidationError | AllDatabaseErrors> =>
    pipe(
      validateInput(name, content),
      Effect.flatMap(() => {
        const id = generateId()
        const prompt: Prompt = { id, name, content }

        return database.withConnection((conn) =>
          conn
            .run("INSERT INTO prompts (id, name, content) VALUES (?, ?, ?)", [id, name, content])
            .pipe(Effect.as(prompt))
        )
      })
    )

  const getById = (id: string): Effect.Effect<Prompt, NotFoundError | AllDatabaseErrors> =>
    database.withConnection((conn) =>
      pipe(
        conn.all<Prompt>("SELECT id, name, content FROM prompts WHERE id = ?", [id]),
        Effect.flatMap((rows) => {
          const first = rows[0]
          return first ? Effect.succeed(first) : Effect.fail(new NotFoundError({ type: "prompt", id }))
        })
      )
    )

  const list: Effect.Effect<readonly Prompt[], AllDatabaseErrors> = database.withConnection((conn) =>
    conn.all<Prompt>("SELECT id, name, content FROM prompts ORDER BY created_at DESC")
  )

  const update = (
    id: string,
    name: string,
    content: string
  ): Effect.Effect<Prompt, ValidationError | NotFoundError | AllDatabaseErrors> =>
    pipe(
      validateInput(name, content),
      Effect.flatMap(() =>
        database.withConnection((conn) =>
          pipe(
            conn.run("UPDATE prompts SET name = ?, content = ?, updated_at = unixepoch() WHERE id = ?", [
              name,
              content,
              id
            ]),
            Effect.flatMap((result) =>
              result.changes === 0
                ? Effect.fail(new NotFoundError({ type: "prompt", id }))
                : Effect.succeed({ id, name, content })
            )
          )
        )
      )
    )

  const deletePrompt = (id: string): Effect.Effect<void, NotFoundError | AllDatabaseErrors> =>
    database.withConnection((conn) =>
      pipe(
        conn.run("DELETE FROM prompts WHERE id = ?", [id]),
        Effect.flatMap(
          (result: Changes): Effect.Effect<void, NotFoundError> =>
            result.changes === 0 ? Effect.fail(new NotFoundError({ type: "prompt", id })) : Effect.void
        )
      )
    )

  return {
    create,
    getById,
    list,
    update,
    delete: deletePrompt
  }
}

// Layer implementation
export const PromptServiceLive = Layer.effect(
  PromptService,
  Effect.gen(function* () {
    const database = yield* DatabaseService
    return makePromptService(database)
  })
)

// Test layer with mock implementation
export const PromptServiceTest = Layer.succeed(
  PromptService,
  (() => {
    const prompts = new Map<string, Prompt>()

    return {
      create: (name: string, content: string): Effect.Effect<Prompt, ValidationError> =>
        Effect.gen(function* () {
          const input = yield* pipe(
            Schema.decodeUnknown(CreatePromptRequestSchema)({ name, content }),
            Effect.mapError(
              (error) =>
                new ValidationError({
                  field: "input",
                  reason: ArrayFormatter.formatErrorSync(error)
                    .map((issue) => issue.message)
                    .join(", ")
                })
            )
          )
          const id = generateId()
          const prompt: Prompt = { id, name: input.name, content: input.content }
          prompts.set(id, prompt)
          return prompt
        }),

      getById: (id: string): Effect.Effect<Prompt, NotFoundError> =>
        Effect.suspend(() => {
          const prompt = prompts.get(id)
          return prompt ? Effect.succeed(prompt) : Effect.fail(new NotFoundError({ type: "prompt", id }))
        }),

      list: Effect.sync(() => Array.from(prompts.values())),

      update: (id: string, name: string, content: string): Effect.Effect<Prompt, ValidationError | NotFoundError> =>
        Effect.gen(function* () {
          const input = yield* pipe(
            Schema.decodeUnknown(CreatePromptRequestSchema)({ name, content }),
            Effect.mapError(
              (error) =>
                new ValidationError({
                  field: "input",
                  reason: ArrayFormatter.formatErrorSync(error)
                    .map((issue) => issue.message)
                    .join(", ")
                })
            )
          )
          if (!prompts.has(id)) {
            return yield* Effect.fail(new NotFoundError({ type: "prompt", id }))
          }
          const prompt: Prompt = { id, name: input.name, content: input.content }
          prompts.set(id, prompt)
          return prompt
        }),

      delete: (id: string): Effect.Effect<void, NotFoundError> =>
        Effect.suspend(() => {
          if (!prompts.has(id)) {
            return Effect.fail(new NotFoundError({ type: "prompt", id }))
          }
          prompts.delete(id)
          return Effect.void
        })
    }
  })()
)