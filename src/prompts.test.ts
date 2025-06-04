import { afterEach, beforeEach, describe, expect, it } from "bun:test"
import { Effect, Exit } from "effect"
import { createPromptStore } from "./prompts.ts"

const { addPrompt, deletePrompt, getPrompt, listPrompts, updatePrompt, closeDb } = createPromptStore()
import { existsSync, rmSync } from "node:fs"
import { join } from "node:path"
import process from "node:process"

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

describe("prompts", () => {
  it("adds and lists prompts", () => {
    const exit = Effect.runSyncExit(addPrompt("test", "content"))
    expect(Exit.isSuccess(exit)).toBe(true)
    const prompts = listPrompts()
    expect(prompts.length).toBe(1)
    const first = prompts[0]
    if (!first) {
      throw new Error("Prompt not found")
    }
    expect(first.name).toBe("test")
  })

  it("gets a prompt by id", () => {
    const prompt = Effect.runSync(addPrompt("name", "body"))
    const loaded = Effect.runSync(getPrompt(prompt.id))
    expect(loaded.content).toBe("body")
  })

  it("updates a prompt", () => {
    const prompt = Effect.runSync(addPrompt("old", "content"))
    const updated = Effect.runSync(updatePrompt(prompt.id, "new", "updated"))
    expect(updated.name).toBe("new")
    const loaded = Effect.runSync(getPrompt(prompt.id))
    expect(loaded.content).toBe("updated")
  })

  it("deletes a prompt", () => {
    const prompt = Effect.runSync(addPrompt("temp", "delete"))
    const exit = Effect.runSyncExit(deletePrompt(prompt.id))
    expect(Exit.isSuccess(exit)).toBe(true)
    const getExit = Effect.runSyncExit(getPrompt(prompt.id))
    expect(Exit.isFailure(getExit)).toBe(true)
    expect(listPrompts().length).toBe(0)
  })
})
