import { afterEach, beforeEach, describe, expect, it } from "bun:test"
import console from "node:console"
import { existsSync, rmSync } from "node:fs"
import { join } from "node:path"
import process from "node:process"
import { PassThrough } from "node:stream"
import { ask } from "./input.ts"
import { TuiMenu } from "./menu.ts"
import { createPromptStore } from "./prompts.ts"

const { addPrompt, closeDb, listPrompts } = createPromptStore()

const DATA_DIR = join(process.cwd(), "data")
const DB_FILE = join(DATA_DIR, "prompts.sqlite")

beforeEach(() => {
  closeDb()
  if (existsSync(DB_FILE)) {
    rmSync(DB_FILE)
  }
})

afterEach(() => {
  closeDb()
  if (existsSync(DB_FILE)) {
    rmSync(DB_FILE)
  }
})

describe("cli tui", () => {
  it("adds and lists prompts", async () => {
    const input = new PassThrough()
    const output = new PassThrough()
    const logs: string[] = []
    const originalLog = console.log
    console.log = (msg?: unknown): void => {
      logs.push(String(msg))
    }

    const menu = new TuiMenu(["List prompts", "View prompt", "Add prompt", "Update prompt", "Delete prompt", "Exit"], {
      input,
      output
    })
    const menuRun = menu.run()
    input.write("\u001b[B")
    input.write("\u001b[B")
    input.write("\r")
    await menuRun

    const namePromise = ask("Name: ", { input, output })
    input.write("test\n")
    const name = await namePromise
    const contentPromise = ask("Content: ", { input, output })
    input.write("body\n")
    const content = await contentPromise
    addPrompt(name, content)

    const prompts = listPrompts()
    if (prompts.length === 0) {
      console.log("No prompts found")
    } else {
      for (const p of prompts) {
        console.log(`${p.id}: ${p.name}`)
      }
    }

    console.log = originalLog

    expect(prompts.length).toBe(1)
    expect(logs.some((l) => l.includes("test"))).toBe(true)
  })
})
