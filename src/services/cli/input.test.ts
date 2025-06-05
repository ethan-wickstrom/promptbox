import { describe, expect, test } from "bun:test"
import { Terminal } from "@effect/platform"
import { Effect, Exit } from "effect"
import type { IOError } from "../../errors.ts"
import { TestTerminal } from "../../test/test-terminal.ts"
import { ask } from "./input.ts"

describe("ask", () => {
  test("should resolve with the answer when input is provided", async (): Promise<void> => {
    const questionText = "What is your name?"
    const expectedAnswer = "Test User"

    const program = ask(questionText)
    const result = await Effect.runPromiseExit(
      program.pipe(Effect.provide(TestTerminal.layer({ input: [expectedAnswer] })))
    )

    expect(Exit.isSuccess(result)).toBe(true)
    if (Exit.isSuccess(result)) {
      expect(result.value).toBe(expectedAnswer)
    }
  })

  test("should fail with IOError when readline emits an error", async (): Promise<void> => {
    const questionText = "What is your quest?"

    const program = ask(questionText)
    const result = await Effect.runPromiseExit(
      program.pipe(
        Effect.provide(
          TestTerminal.layer({
            readLineEffect: Effect.fail(new Terminal.QuitException())
          })
        )
      )
    )

    expect(Exit.isFailure(result)).toBe(true)
    if (Exit.isFailure(result)) {
      const cause = result.cause
      expect(cause._tag).toBe("Fail")
      if (cause._tag === "Fail") {
        const error = cause.error as IOError
        expect(error._tag).toBe("IOError")
        expect(error.operation).toBe("readline")
        expect(error.reason).toBe("Failed to read input: QuitException")
      }
    }
  })
})
