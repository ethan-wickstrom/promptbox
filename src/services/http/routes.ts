import { HttpRouter, HttpServerRequest, HttpServerResponse } from "@effect/platform"
import { ArrayFormatter, Schema } from "@effect/schema"
import { Effect, pipe } from "effect"
import { HttpError } from "../../errors.ts"
import type { PromptService } from "../prompt.ts"
import { CreatePromptRequest, UpdatePromptRequest } from "./schemas.ts"

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

// Create API routes
export const makeApiRoutes = (promptService: PromptService): HttpRouter.HttpRouter<never> =>
  HttpRouter.empty.pipe(
    // GET /prompts
    HttpRouter.get(
      "/prompts",
      Effect.gen(function* () {
        const prompts = yield* promptService.list
        return yield* HttpServerResponse.json(prompts)
      })
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

        const prompt = yield* promptService.getById(id)
        return yield* HttpServerResponse.json(prompt)
      }).pipe(
        Effect.catchTags({
          NotFoundError: (error) =>
            HttpServerResponse.json({ error: "Prompt not found", details: { id: error.id } }, { status: 404 })
        })
      )
    ),
    // POST /prompts
    HttpRouter.post(
      "/prompts",
      Effect.gen(function* () {
        const request = yield* HttpServerRequest.HttpServerRequest
        const body = yield* parseJsonBody(CreatePromptRequest)(request)
        const prompt = yield* promptService.create(body.name, body.content)
        return yield* HttpServerResponse.json(prompt, { status: 201 })
      }).pipe(
        Effect.catchTags({
          HttpError: (error) => HttpServerResponse.json({ error: error.reason }, { status: error.statusCode }),
          ValidationError: (error) =>
            HttpServerResponse.json({ error: "Validation failed", details: error.reason }, { status: 400 })
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
        const body = yield* parseJsonBody(UpdatePromptRequest)(request)
        const prompt = yield* promptService.update(id, body.name, body.content)
        return yield* HttpServerResponse.json(prompt)
      }).pipe(
        Effect.catchTags({
          HttpError: (error) => HttpServerResponse.json({ error: error.reason }, { status: error.statusCode }),
          ValidationError: (error) =>
            HttpServerResponse.json({ error: "Validation failed", details: error.reason }, { status: 400 }),
          NotFoundError: (error) =>
            HttpServerResponse.json({ error: "Prompt not found", details: { id: error.id } }, { status: 404 })
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

        yield* promptService.delete(id)
        return yield* HttpServerResponse.empty({ status: 204 })
      }).pipe(
        Effect.catchTags({
          NotFoundError: (error) =>
            HttpServerResponse.json({ error: "Prompt not found", details: { id: error.id } }, { status: 404 })
        })
      )
    )
  )
