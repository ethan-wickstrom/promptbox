import { Console, Effect, Layer } from "effect"
import { ConfigService, ConfigServiceLive } from "./services/config.ts"
import { DatabaseServiceLive } from "./services/database.ts"
import { startServer } from "./services/http.ts"
import { PromptService, PromptServiceLive } from "./services/prompt.ts"

// Compose all layers for the HTTP server
const MainLive = Layer.mergeAll(ConfigServiceLive, DatabaseServiceLive, PromptServiceLive)

// Main program
const program = Effect.gen(function* () {
  const config = yield* ConfigService
  const promptService = yield* PromptService
  yield* Console.log(`Server running at http://${config.host}:${config.port}`)
  yield* startServer(promptService, config)
  yield* Effect.never
}).pipe(Effect.tapErrorCause(Effect.logError))

// Run the program with proper resource management and graceful shutdown

export { MainLive, program }
