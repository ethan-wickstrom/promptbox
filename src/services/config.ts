import { existsSync, mkdirSync } from "node:fs"
import { join } from "node:path"
import process from "node:process"
import { Context, Effect, Layer } from "effect"
import { ConfigError } from "../errors.ts"

// Service type definition (never interface!)
export type ConfigService = {
  readonly getDataDir: Effect.Effect<string, ConfigError>
  readonly getPort: Effect.Effect<number, ConfigError>
  readonly getHost: Effect.Effect<string, ConfigError>
}

// Context.Tag for dependency injection
export const ConfigService = Context.GenericTag<ConfigService>("@services/Config")

// Pure function to create the service
const makeConfigService = (): ConfigService => {
  const getEnv = (key: string, defaultValue?: string): Effect.Effect<string, ConfigError> =>
    Effect.sync(() => process.env[key] ?? defaultValue).pipe(
      Effect.flatMap((value) =>
        value
          ? Effect.succeed(value)
          : Effect.fail(new ConfigError({ key, reason: `Environment variable ${key} not found` }))
      )
    )

  const getDataDir: Effect.Effect<string, ConfigError> = getEnv("PROMPTBOX_DATA_DIR", join(process.cwd(), "data")).pipe(
    Effect.map((dir) => dir.trim()),
    Effect.tap((dir) =>
      Effect.sync(() => {
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true })
        }
      })
    )
  )

  const getPort: Effect.Effect<number, ConfigError> = getEnv("PORT", "3000").pipe(
    Effect.flatMap((portStr) => {
      const port = Number.parseInt(portStr, 10)
      return Number.isNaN(port) || port < 1 || port > 65535
        ? Effect.fail(new ConfigError({ key: "PORT", reason: `Invalid port number: ${portStr}` }))
        : Effect.succeed(port)
    })
  )

  const getHost: Effect.Effect<string, ConfigError> = getEnv("HOST", "localhost")

  return {
    getDataDir,
    getPort,
    getHost
  }
}

// Layer implementation
export const ConfigServiceLive = Layer.succeed(ConfigService, makeConfigService())

// Test layer with predefined values
export const ConfigServiceTest = Layer.succeed(
  ConfigService,
  (() => {
    const testDataDir = join(process.cwd(), "test-data")
    return {
      getDataDir: Effect.succeed(testDataDir),
      getPort: Effect.succeed(3001),
      getHost: Effect.succeed("localhost")
    }
  })()
)
