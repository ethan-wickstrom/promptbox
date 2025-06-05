import { BunRuntime } from "@effect/platform-bun"
import { Effect, Layer, LogLevel, Logger } from "effect"
import { CliService, CliServiceLive } from "./services/cli/index"
import { ConfigServiceLive } from "./services/config.ts"
import { DatabaseServiceLive } from "./services/database.ts"
import { PromptServiceLive } from "./services/prompt.ts"

// Compose all layers for the CLI application
const MainLive = Layer.mergeAll(
  ConfigServiceLive,
  DatabaseServiceLive,
  PromptServiceLive,
  CliServiceLive,
  Logger.minimumLogLevel(LogLevel.All) // Add logger layer
)

// Main program
const program = CliService.pipe(
  Effect.flatMap((cli) => cli.run),
  Effect.provide(MainLive)
)

// Run the program with proper resource management
if (import.meta.main) {
  BunRuntime.runMain(program.pipe(Effect.tapErrorCause(Effect.logError)))
}
