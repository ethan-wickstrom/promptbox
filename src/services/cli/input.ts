import process from "node:process"
import { createInterface } from "node:readline"
import type { Readable, Writable } from "node:stream"
import { Effect } from "effect"
import { IOError } from "../../errors.ts"

export type InputOptions = {
  readonly input?: Readable
  readonly output?: Writable
}

export const ask = (question: string, options: InputOptions = {}): Effect.Effect<string, IOError> =>
  Effect.async<string, IOError>((resume) => {
    const rl = createInterface({
      input: options.input ?? process.stdin,
      output: options.output ?? process.stdout
    })

    rl.question(question, (answer) => {
      rl.close()
      resume(Effect.succeed(answer))
    })

    // Handle error cases
    rl.on("error", (error) => {
      rl.close()
      resume(
        Effect.fail(
          new IOError({
            operation: "readline",
            reason: `Failed to read input: ${error.message}`
          })
        )
      )
    })

    // Cleanup function
    return Effect.sync(() => {
      rl.close()
    })
  })
