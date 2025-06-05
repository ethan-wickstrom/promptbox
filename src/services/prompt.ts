import type { Changes } from "bun:sqlite"
import { Schema, TreeFormatter } from "@effect/schema"
import { Context, Effect, Layer, pipe } from "effect"
import { NotFoundError, ValidationError } from "../errors.ts"
import type { Prompt } from "../types.ts"
import { DatabaseService } from "./database.ts"

// Schema for prompt validation
const PromptInputSchema = Schema.Struct({
  name: Schema.NonEmptyString,
  content: Schema.NonEmptyString
})

// Service type definition
export type PromptService = {
  readonly create: (name: string, content: string) => Effect.Effect<Prompt, ValidationError>
  readonly getById: (id: string) => Effect.Effect<Prompt, NotFoundError>
  readonly list: Effect.Effect<readonly Prompt[], never>
  readonly update: (id: string, name: string, content: string) => Effect.Effect<Prompt, ValidationError | NotFoundError>
  readonly delete: (id: string) => Effect.Effect<void, NotFoundError>
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
      Schema.decodeUnknown(PromptInputSchema)({ name, content }),
      Effect.mapError(
        (error) =>
          new ValidationError({
            field: "input",
            reason: TreeFormatter.formatErrorSync(error)
          })
      )
    )

  const create = (name: string, content: string): Effect.Effect<Prompt, ValidationError> =>
    pipe(
      validateInput(name, content),
      Effect.andThen(() => {
        const id = generateId()
        const prompt: Prompt = { id, name, content }

        return database.withConnection((conn) =>
          conn
            .run("INSERT INTO prompts (id, name, content) VALUES (?, ?, ?)", [id, name, content])
            .pipe(Effect.as(prompt))
        )
      }),
      Effect.mapError((error) =>
        error._tag === "ValidationError"
          ? error
          : new ValidationError({
              field: "database",
              reason: `Failed to create prompt: ${error._tag}`
            })
      )
    )

  const getById = (id: string): Effect.Effect<Prompt, NotFoundError> =>
    database
      .withConnection((conn) =>
        pipe(
          conn.all<Prompt>("SELECT id, name, content FROM prompts WHERE id = ?", [id]),
          Effect.flatMap((rows) => {
            const [first] = rows
            return first ? Effect.succeed(first) : Effect.fail(new NotFoundError({ type: "prompt", id }))
          })
        )
      )
      .pipe(Effect.catchAll(() => Effect.fail(new NotFoundError({ type: "prompt", id }))))

  const list: Effect.Effect<readonly Prompt[], never> = database
    .withConnection((conn) => conn.all<Prompt>("SELECT id, name, content FROM prompts ORDER BY created_at DESC"))
    .pipe(Effect.catchAll(() => Effect.succeed([])))

  const update = (id: string, name: string, content: string): Effect.Effect<Prompt, ValidationError | NotFoundError> =>
    pipe(
      validateInput(name, content),
      Effect.andThen(() =>
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
      ),
      Effect.mapError((error) => {
        if (error._tag === "ValidationError" || error._tag === "NotFoundError") {
          return error
        }
        return new ValidationError({
          field: "database",
          reason: `Failed to update prompt: ${error._tag}`
        })
      })
    )

  const deletePrompt = (id: string): Effect.Effect<void, NotFoundError> =>
    database
      .withConnection((conn) =>
        pipe(
          conn.run("DELETE FROM prompts WHERE id = ?", [id]),
          Effect.flatMap(
            (result: Changes): Effect.Effect<void, NotFoundError> =>
              result.changes === 0 ? Effect.fail(new NotFoundError({ type: "prompt", id })) : Effect.void
          )
        )
      )
      .pipe(Effect.catchAll(() => Effect.fail(new NotFoundError({ type: "prompt", id }))))

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
            Schema.decodeUnknown(PromptInputSchema)({ name, content }),
            Effect.mapError(
              (error) =>
                new ValidationError({
                  field: "input",
                  reason: TreeFormatter.formatErrorSync(error)
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
            Schema.decodeUnknown(PromptInputSchema)({ name, content }),
            Effect.mapError(
              (error) =>
                new ValidationError({
                  field: "input",
                  reason: TreeFormatter.formatErrorSync(error)
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
