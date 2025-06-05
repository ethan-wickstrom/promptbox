import { Terminal } from "@effect/platform"
import { Effect, Layer, Option } from "effect"

export type TestTerminalOptions = {
  readonly input?: readonly string[]
  readonly keys?: readonly Terminal.Key[]
  readonly readLineEffect?: Effect.Effect<string, Terminal.QuitException>
}

const make = (options: TestTerminalOptions = {}): Terminal.Terminal => {
  let lines = [...(options.input ?? [])]
  let keys = [...(options.keys ?? [])]
  return {
    columns: Effect.succeed(80),
    readInput: Effect.try({
      try: (): { input: Option.Option<string>; key: Terminal.Key } => {
        const [first, ...rest] = keys
        if (first === undefined) {
          throw new Terminal.QuitException()
        }
        keys = rest
        return { input: Option.none(), key: first }
      },
      catch: (e): Terminal.QuitException => e as Terminal.QuitException
    }),
    readLine:
      options.readLineEffect ??
      Effect.try({
        try: (): string => {
          const [first, ...rest] = lines
          if (first === undefined) {
            throw new Terminal.QuitException()
          }
          lines = rest
          return first
        },
        catch: (e): Terminal.QuitException => e as Terminal.QuitException
      }),
    display: (): Effect.Effect<void> => Effect.void
  }
}

export const TestTerminal = {
  layer: (options?: TestTerminalOptions): Layer.Layer<Terminal.Terminal> =>
    Layer.succeed(Terminal.Terminal, make(options))
}
