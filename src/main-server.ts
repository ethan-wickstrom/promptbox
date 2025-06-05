import { BunHttpServer, BunRuntime } from "@effect/platform-bun"
import { Config, Console, Effect, Layer } from "effect"
import { ConfigService, ConfigServiceLive } from "./services/config.ts"
import { DatabaseServiceLive } from "./services/database.ts"
import { HttpLive } from "./services/http.ts"
import { PromptServiceLive } from "./services/prompt.ts"

// Compose all layers for the HTTP server
const ServerLive = Layer.unwrapEffect(
  Effect.gen(function* () {
    const config = yield* ConfigService
    return BunHttpServer.layer({ port: config.port, hostname: config.host })
  })
)

const MainLive = Layer.mergeAll(ConfigServiceLive, DatabaseServiceLive, PromptServiceLive, HttpLive, ServerLive)

// Main program
const program = Effect.gen(function* () {
  const port = yield* Config.number("PORT").pipe(Config.withDefault(3000))
  const host = yield* Config.string("HOST").pipe(Config.withDefault("localhost"))
  yield* Console.log(`Server running at http://${host}:${port}`)
  yield* Effect.never
}).pipe(Effect.provide(MainLive), Effect.tapErrorCause(Effect.logError))

// Run the program with proper resource management and graceful shutdown
if (import.meta.main) {
  BunRuntime.runMain(program)
}
