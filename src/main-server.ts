import { BunRuntime } from "@effect/platform-bun"
import { Effect, Layer } from "effect"
import { ConfigServiceLive } from "./services/config.ts"
import { DatabaseServiceLive } from "./services/database.ts"
import { HttpServerService, HttpServerServiceLive } from "./services/http/index.ts"
import { PromptServiceLive } from "./services/prompt.ts"

// Compose all layers for the HTTP server
const MainLive = Layer.mergeAll(ConfigServiceLive, DatabaseServiceLive, PromptServiceLive, HttpServerServiceLive)

// Main program
const program = Effect.gen(function* () {
  const httpServer = yield* HttpServerService
  yield* httpServer.start
}).pipe(Effect.scoped, Effect.tapErrorCause(Effect.logError))

// Run with proper teardown handling
BunRuntime.runMain(Effect.provide(program, MainLive))
