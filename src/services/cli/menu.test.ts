import { describe, expect, it } from "bun:test"
import { TestKeyInput, TestTerminal } from "@effect/platform/test"
import { Effect, Exit } from "effect"
import { runMenu } from "./menu.ts"

const arrowDown = { key: "down" }
const enter = { key: "return" }

describe("runMenu", () => {
  it("returns selected index", async (): Promise<void> => {
    const program = runMenu(["a", "b", "c"])
    const exit = await Effect.runPromiseExit(
      program.pipe(
        Effect.provide(TestKeyInput.layer({ keys: [arrowDown, arrowDown, enter] })),
        Effect.provide(TestTerminal.layer({}))
      )
    )
    expect(Exit.isSuccess(exit)).toBe(true)
    if (Exit.isSuccess(exit)) {
      expect(exit.value).toBe(2)
    }
  })
})
