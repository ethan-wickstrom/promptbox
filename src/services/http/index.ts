import { HttpRouter, HttpServer, HttpServerRequest, HttpServerResponse } from "@effect/platform"
import { BunHttpServer } from "@effect/platform-bun"
import { Context, Effect, Layer } from "effect"
import { ConfigService } from "../config.ts"
import { PromptService } from "../prompt.ts"
import { makeApiRoutes } from "./routes.ts"
import { serveStatic } from "./static.ts"

// Service type definition
export type HttpServerService = {
  readonly start: Effect.Effect<void, never, never>
}

// Context.Tag for dependency injection
export const HttpServerService = Context.GenericTag<HttpServerService>("@services/HttpServer")

// Create the HTTP app
const createApp = (promptService: PromptService, config: ConfigService) => {
  // Create API routes
  const apiRoutes = makeApiRoutes(promptService)

  // Create main router
  return HttpRouter.empty.pipe(
    // Mount API routes under /api
    HttpRouter.mount("/api", apiRoutes),
    // Serve index.html for root
    HttpRouter.get(
      "/",
      Effect.gen(function* () {
        return yield* serveStatic("index.html").pipe(Effect.provideService(ConfigService, config))
      })
    ),
    // Serve static files
    HttpRouter.get(
      "/*",
      Effect.gen(function* () {
        const request = yield* HttpServerRequest.HttpServerRequest
        const url = new URL(request.url)
        const path = url.pathname.slice(1) // Remove leading slash
        return yield* serveStatic(path).pipe(
          Effect.provideService(ConfigService, config),
          Effect.catchTag("HttpError", () => HttpServerResponse.text("Not Found", { status: 404 }))
        )
      })
    )
  )
}

// Create the HTTP service
const makeHttpServerService = (promptService: PromptService, config: ConfigService): HttpServerService => ({
  start: Effect.gen(function* () {
    yield* Effect.log(`Server starting at http://${config.host}:${config.port}`)

    const app = createApp(promptService, config)

    // Create and launch the server
    yield* HttpServer.serve(app).pipe(
      Layer.launch,
      Effect.provideService(
        HttpServer.HttpServer,
        HttpServer.make({
          serve: () => Effect.never,
          address: { _tag: "TcpAddress", hostname: config.host, port: config.port }
        })
      ),
      Effect.provide(BunHttpServer.layer({ port: config.port, hostname: config.host }))
    )
  })
})

// Layer implementation
export const HttpServerServiceLive = Layer.effect(
  HttpServerService,
  Effect.gen(function* () {
    const promptService = yield* PromptService
    const config = yield* ConfigService
    return makeHttpServerService(promptService, config)
  })
)

// Test layer
export const HttpServerServiceTest = Layer.succeed(HttpServerService, {
  start: Effect.log("Test HTTP server started")
})
