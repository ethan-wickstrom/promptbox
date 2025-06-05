import { FileSystem } from "@effect/platform"
import {
  HttpApp,
  HttpRouter,
  HttpServer,
  HttpServerError,
  HttpServerRequest,
  HttpServerResponse
} from "@effect/platform"
import { Schema } from "@effect/schema"
import { Effect, Layer } from "effect"
import { NotFoundError, ValidationError } from "../errors.ts"
import { PromptService } from "./prompt.ts"

const PromptInputSchema = Schema.Struct({
  name: Schema.NonEmptyString,
  content: Schema.NonEmptyString
})

const handleErrors = (error: unknown): HttpServerError.HttpServerError => {
  if (error instanceof NotFoundError) {
    return HttpServerError.notFound()
  }
  if (error instanceof ValidationError) {
    return HttpServerError.badRequest({ message: error.reason })
  }
  return HttpServerError.internalServerError()
}

const apiRoutes = (promptService: PromptService): HttpRouter.HttpRouter<never, never> =>
  HttpRouter.empty.pipe(
    HttpRouter.get(
      "/api/prompts",
      Effect.gen(function* () {
        const prompts = yield* promptService.list
        return yield* HttpServerResponse.json(prompts)
      })
    ),
    HttpRouter.post(
      "/api/prompts",
      Effect.gen(function* () {
        const body = yield* HttpServerRequest.schemaBodyJson(PromptInputSchema)
        const prompt = yield* promptService.create(body.name, body.content)
        return yield* HttpServerResponse.json(prompt, { status: 201 })
      })
    ),
    HttpRouter.get(
      "/api/prompts/:id",
      Effect.gen(function* () {
        const params = yield* HttpRouter.params
        const id = params["id"]
        if (!id) {
          return yield* Effect.fail(HttpServerError.badRequest())
        }
        const prompt = yield* promptService.getById(id)
        return yield* HttpServerResponse.json(prompt)
      })
    ),
    HttpRouter.put(
      "/api/prompts/:id",
      Effect.gen(function* () {
        const params = yield* HttpRouter.params
        const body = yield* HttpServerRequest.schemaBodyJson(PromptInputSchema)
        const id = params["id"]
        if (!id) {
          return yield* Effect.fail(HttpServerError.badRequest())
        }
        const prompt = yield* promptService.update(id, body.name, body.content)
        return yield* HttpServerResponse.json(prompt)
      })
    ),
    HttpRouter.del(
      "/api/prompts/:id",
      Effect.gen(function* () {
        const params = yield* HttpRouter.params
        const id = params["id"]
        if (!id) {
          return yield* Effect.fail(HttpServerError.badRequest())
        }
        yield* promptService.delete(id)
        return HttpServerResponse.empty()
      })
    ),
    HttpRouter.catchAll((error) => Effect.fail(handleErrors(error)))
  )

const staticRoutes = HttpRouter.empty.pipe(
  HttpRouter.get(
    "/",
    FileSystem.FileSystem.pipe(
      Effect.flatMap((fs) => fs.readFileString("index.html")),
      Effect.flatMap((content) => HttpServerResponse.html(content)),
      Effect.catchTag("SystemError", (_e) => Effect.fail(HttpServerError.notFound()))
    )
  )
)

export const HttpLive = Layer.effect(
  HttpServer.HttpServer,
  Effect.gen(function* () {
    const promptService = yield* PromptService
    const router = HttpRouter.empty.pipe(
      HttpRouter.mount("/api", apiRoutes(promptService)),
      HttpRouter.mountApp("/", HttpApp.toWebHandler(staticRoutes))
    )
    return HttpServer.router(router)
  })
)
