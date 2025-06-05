import { Terminal } from "@effect/platform"
import { Effect } from "effect"
import { IOError } from "../../errors.ts"

export const ask = (question: string): Effect.Effect<string, IOError, Terminal.Terminal> =>
  Effect.gen(function* () {
    const terminal = yield* Terminal.Terminal
    yield* terminal.display(question)
    return yield* terminal.readLine
  }).pipe(
    Effect.mapError(
      (error) =>
        new IOError({
          operation: "readline",
          reason: `Failed to read input: ${String(error)}`
        })
    )
  )
