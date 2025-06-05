import { HttpRouter, HttpServerRequest, HttpServerResponse } from "@effect/platform"
import { ArrayFormatter, Schema } from "@effect/schema"
import { Effect, pipe } from "effect"
import type { AllDatabaseErrors } from "../../errors.ts"
import { HttpError } from "../../errors.ts"
import { PromptService } from "../prompt.ts"
import { CreatePromptRequestSchema, UpdatePromptRequestSchema } from "../../schemas.ts"

// Helper to parse JSON body with schema validation
const parseJsonBody =
  <A, I>(schema: Schema.Schema<A, I>) =>
  (request: HttpServerRequest.HttpServerRequest): Effect.Effect<A, HttpError> =>
    pipe(
      request.json,
      Effect.mapError(() => new HttpError({ statusCode: 400, reason: "Invalid JSON" })),
      Effect.flatMap(
        Schema.decodeUnknown(schema).pipe(
          Effect.mapError(
            (error) =>
              new HttpError({
                statusCode: 400,
                reason: ArrayFormatter.formatErrorSync(error)
                  .map((issue) => issue.message)
                  .join(", ")
              })
          )
        )
      )
    )

const handleDbError = (error: AllDatabaseErrors) =>
  HttpServerResponse.json({ error: "Database error", details: error.reason }, { status: 500 })

// Create API routes
export const makeApiRoutes = (): HttpRouter.HttpRouter<PromptService> =>
  HttpRouter.empty.pipe(
    // GET /prompts
    HttpRouter.get(
      "/prompts",
      Effect.gen(function* () {
        const promptService = yield* PromptService
        const prompts = yield* promptService.list
        return yield* HttpServerResponse.json(prompts)
      }).pipe(
        Effect.catchTags({
          DatabaseError: handleDbError,
          ConnectionError: handleDbError,
          QueryError: handleDbError,
          ConstraintError: handleDbError
        })
      )
    ),
    // GET /prompts/:id
    HttpRouter.get(
      "/prompts/:id",
      Effect.gen(function* () {
        const params = yield* HttpRouter.params
        const id = params.id

        if (!id) {
          return yield* HttpServerResponse.json({ error: "Invalid prompt ID" }, { status: 400 })
        }

        const promptService = yield* PromptService
        const prompt = yield* promptService.getById(id)
        return yield* HttpServerResponse.json(prompt)
      }).pipe(
        Effect.catchTags({
          NotFoundError: (error) =>
            HttpServerResponse.json({ error: "Prompt not found", details: { id: error.id } }, { status: 404 }),
          DatabaseError: handleDbError,
          ConnectionError: handleDbError,
          QueryError: handleDbError,
          ConstraintError: handleDbError
        })
      )
    ),
    // POST /prompts
    HttpRouter.post(
      "/prompts",
      Effect.gen(function* () {
        const request = yield* HttpServerRequest.HttpServerRequest
        const body = yield* parseJsonBody(CreatePromptRequestSchema)(request)
        const promptService = yield* PromptService
        const prompt = yield* promptService.create(body.name, body.content)
        return yield* HttpServerResponse.json(prompt, { status: 201 })
      }).pipe(
        Effect.catchTags({
          HttpError: (error) => HttpServerResponse.json({ error: error.reason }, { status: error.statusCode }),
          ValidationError: (error) =>
            HttpServerResponse.json({ error: "Validation failed", details: error.reason }, { status: 400 }),
          DatabaseError: handleDbError,
          ConnectionError: handleDbError,
          QueryError: handleDbError,
          ConstraintError: handleDbError
        })
      )
    ),
    // PUT /prompts/:id
    HttpRouter.put(
      "/prompts/:id",
      Effect.gen(function* () {
        const params = yield* HttpRouter.params
        const id = params.id

        if (!id) {
          return yield* HttpServerResponse.json({ error: "Invalid prompt ID" }, { status: 400 })
        }

        const request = yield* HttpServerRequest.HttpServerRequest
        const body = yield* parseJsonBody(UpdatePromptRequestSchema)(request)
        const promptService = yield* PromptService
        const prompt = yield* promptService.update(id, body.name, body.content)
        return yield* HttpServerResponse.json(prompt)
      }).pipe(
        Effect.catchTags({
          HttpError: (error) => HttpServerResponse.json({ error: error.reason }, { status: error.statusCode }),
          ValidationError: (error) =>
            HttpServerResponse.json({ error: "Validation failed", details: error.reason }, { status: 400 }),
          NotFoundError: (error) =>
            HttpServerResponse.json({ error: "Prompt not found", details: { id: error.id } }, { status: 404 }),
          DatabaseError: handleDbError,
          ConnectionError: handleDbError,
          QueryError: handleDbError,
          ConstraintError: handleDbError
        })
      )
    ),
    // DELETE /prompts/:id
    HttpRouter.del(
      "/prompts/:id",
      Effect.gen(function* () {
        const params = yield* HttpRouter.params
        const id = params.id

        if (!id) {
          return yield* HttpServerResponse.json({ error: "Invalid prompt ID" }, { status: 400 })
        }

        const promptService = yield* PromptService
        yield* promptService.delete(id)
        return yield* HttpServerResponse.empty({ status: 204 })
      }).pipe(
        Effect.catchTags({
          NotFoundError: (error) =>
            HttpServerResponse.json({ error: "Prompt not found", details: { id: error.id } }, { status: 404 }),
          DatabaseError: handleDbError,
          ConnectionError: handleDbError,
          QueryError: handleDbError,
          ConstraintError: handleDbError
        })
      )
    )
  )
