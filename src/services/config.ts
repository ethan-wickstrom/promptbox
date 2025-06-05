import { FileSystem } from "@effect/platform"
import { Config, Context, Effect, Layer } from "effect"
import { ConfigError } from "../errors.ts"

// Service type definition (never interface!)
export type ConfigService = {
  readonly dataDir: string
  readonly port: number
  readonly host: string
}

// Context.Tag for dependency injection
export const ConfigService = Context.GenericTag<ConfigService>("@services/Config")

const dataDirConfig = Config.string("PROMPTBOX_DATA_DIR").pipe(Config.withDefault("data"))
const portConfig = Config.number("PORT").pipe(Config.withDefault(3000))
const hostConfig = Config.string("HOST").pipe(Config.withDefault("localhost"))

const config = Config.all({
  dataDir: dataDirConfig,
  port: portConfig,
  host: hostConfig
})

// Layer implementation
export const ConfigServiceLive = Layer.effect(
  ConfigService,
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem
    const conf = yield* config
    yield* fs.makeDirectory(conf.dataDir, { recursive: true })
    return conf
  })
).pipe(Layer.mapError((error) => new ConfigError({ key: "config", reason: String(error) })))

// Test layer with predefined values
export const ConfigServiceTest = Layer.succeed(
  ConfigService,
  ConfigService.of({
    dataDir: "test-data",
    port: 3001,
    host: "localhost"
  })
)
