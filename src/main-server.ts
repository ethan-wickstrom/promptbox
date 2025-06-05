import { BunRuntime } from "@effect/platform-bun"
import { Console, Effect, Layer } from "effect"
import { ConfigService, ConfigServiceLive } from "./services/config.ts"
import { DatabaseServiceLive } from "./services/database.ts"
import { HttpService, HttpServiceLive, createServer } from "./services/http.ts"
import { PromptServiceLive } from "./services/prompt.ts"

// Compose all layers for the HTTP server
const MainLive = Layer.mergeAll(ConfigServiceLive, DatabaseServiceLive, PromptServiceLive, HttpServiceLive)

// Main program
const program = Effect.gen(function* () {
  const config = yield* ConfigService
  const http = yield* HttpService
  const port = yield* config.getPort
  const host = yield* config.getHost
  const url = yield* http.getUrl

  createServer(http.router, port, host)

  yield* Console.log(`Server running at ${url}`)
}).pipe(Effect.provide(MainLive))

// Run the program with proper resource management and graceful shutdown
if (import.meta.main) {
  BunRuntime.runMain(program.pipe(Effect.tapErrorCause(Effect.logError)))
}
