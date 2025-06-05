import { HttpRouter, HttpServer, HttpServerRequest, HttpServerResponse } from "@effect/platform"
import { BunHttpServer } from "@effect/platform-bun"
import { Context, Effect, Layer } from "effect"
import { ConfigService } from "../config.ts"
import { PromptService } from "../prompt.ts"
import { makeApiRoutes } from "./routes.ts"
import { serveStatic } from "./static.ts"

// Service type definition
export type HttpServerService = {
  readonly start: Effect.Effect<void, Error, never>
}

// Context.Tag for dependency injection
export const HttpServerService = Context.GenericTag<HttpServerService>("@services/HttpServer")

// Create the HTTP app
const createApp = (): HttpRouter.HttpRouter<ConfigService | PromptService> => {
  // Create API routes
  const apiRoutes = makeApiRoutes()

  // Create main router
  return HttpRouter.empty.pipe(
    // Mount API routes under /api
    HttpRouter.mount("/api", apiRoutes),
    // Serve index.html for root
    HttpRouter.get("/", serveStatic("index.html")),
    // Serve static files, fallback to 404
    HttpRouter.get(
      "/*",
      Effect.gen(function* () {
        const request = yield* HttpServerRequest.HttpServerRequest
        const url = new URL(request.url)
        const path = url.pathname.slice(1) // Remove leading slash
        return yield* serveStatic(path).pipe(
          Effect.catchTag("HttpError", () => HttpServerResponse.text("Not Found", { status: 404 }))
        )
      })
    )
  )
}

// Create the HTTP service
const makeHttpServerService = (): HttpServerService => ({
  start: Effect.gen(function* () {
    const config = yield* ConfigService
    yield* Effect.log(`Server starting at http://${config.host}:${config.port}`)

    const app = createApp()

    // Create and launch the server
    yield* HttpServer.serve(app).pipe(
      Effect.provide(BunHttpServer.layer({ port: config.port, hostname: config.host })),
      Layer.launch,
      Effect.scoped
    )
  })
})

// Layer implementation
export const HttpServerServiceLive = Layer.succeed(HttpServerService, makeHttpServerService())

// Test layer
export const HttpServerServiceTest = Layer.succeed(HttpServerService, {
  start: Effect.log("Test HTTP server started")
})