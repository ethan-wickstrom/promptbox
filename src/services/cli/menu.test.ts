import { describe, expect, it } from "bun:test"
import { Effect, Exit } from "effect"
import { TestTerminal } from "../../test/test-terminal.ts"
import { runMenu } from "./menu.ts"

const arrowDown = { name: "down", ctrl: false, meta: false, shift: false }
const enter = { name: "return", ctrl: false, meta: false, shift: false }

describe("runMenu", () => {
  it("returns selected index", async (): Promise<void> => {
    const program = runMenu(["a", "b", "c"])
    const exit = await Effect.runPromiseExit(
      program.pipe(Effect.provide(TestTerminal.layer({ keys: [arrowDown, arrowDown, enter] })))
    )
    expect(Exit.isSuccess(exit)).toBe(true)
    if (Exit.isSuccess(exit)) {
      expect(exit.value).toBe(2)
    }
  })
})
