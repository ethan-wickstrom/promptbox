import { BunRuntime, BunTerminal } from "@effect/platform-bun"
import { Effect, Layer, LogLevel, Logger } from "effect"
import { CliService, CliServiceLive } from "./services/cli/index.ts"
import { ConfigServiceLive } from "./services/config.ts"
import { DatabaseServiceLive } from "./services/database.ts"
import { PromptServiceLive } from "./services/prompt.ts"

// Compose all layers for the CLI application
const MainLive = Layer.mergeAll(
  ConfigServiceLive,
  DatabaseServiceLive,
  PromptServiceLive,
  CliServiceLive,
  BunTerminal.layer,
  Logger.minimumLogLevel(LogLevel.All)
)

// Main program
const program = Effect.gen(function* () {
  const cli = yield* CliService
  yield* cli.run
}).pipe(Effect.scoped, Effect.tapErrorCause(Effect.logError))

// Run with proper teardown handling
BunRuntime.runMain(Effect.provide(program, MainLive))
