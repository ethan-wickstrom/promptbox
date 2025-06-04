import { afterEach, beforeEach, describe, expect, it } from "bun:test"
import { existsSync, rmSync } from "node:fs"
import { join } from "node:path"
import process from "node:process"
import { Effect } from "effect"
import { createPromptStore } from "./prompts.ts"

const CUSTOM_DIR = join(process.cwd(), "custom-data")
const DB_PATH = join(CUSTOM_DIR, "prompts.sqlite")

beforeEach(() => {
  if (existsSync(DB_PATH)) {
    rmSync(DB_PATH)
  }
})

afterEach(() => {
  if (existsSync(DB_PATH)) {
    rmSync(DB_PATH)
  }
  if (existsSync(CUSTOM_DIR)) {
    rmSync(CUSTOM_DIR, { recursive: true, force: true })
  }
})

describe("PROMPTBOX_DATA_DIR", () => {
  it("stores database in the configured directory", () => {
    const { addPrompt, closeDb } = createPromptStore(CUSTOM_DIR)
    Effect.runSync(addPrompt("env-test", "content"))
    closeDb()
    expect(existsSync(DB_PATH)).toBe(true)
  })
})
