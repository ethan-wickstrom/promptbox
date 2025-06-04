import { describe, expect, it } from "bun:test"
import { PassThrough } from "node:stream"
import { TuiMenu } from "./menu.ts"

const arrowDown = "\u001b[B"
const enter = "\r"

describe("TuiMenu", () => {
  it("returns selected index", async () => {
    const input = new PassThrough()
    const output = new PassThrough()
    const menu = new TuiMenu(["a", "b", "c"], { input, output })
    const runPromise = menu.run()
    input.write(arrowDown)
    input.write(arrowDown)
    input.write(enter)
    const index = await runPromise
    expect(index).toBe(2)
  })
})
