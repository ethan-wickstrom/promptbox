import { afterEach, beforeEach, describe, expect, it } from "bun:test"
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
    const result = addPrompt("test", "content")
    expect(result.isOk()).toBe(true)
    const prompts = listPrompts()
    expect(prompts.length).toBe(1)
    const first = prompts[0]
    if (!first) {
      throw new Error("Prompt not found")
    }
    expect(first.name).toBe("test")
  })

  it("gets a prompt by id", () => {
    const prompt = addPrompt("name", "body")._unsafeUnwrap()
    const loaded = getPrompt(prompt.id)._unsafeUnwrap()
    expect(loaded.content).toBe("body")
  })

  it("updates a prompt", () => {
    const prompt = addPrompt("old", "content")._unsafeUnwrap()
    const updated = updatePrompt(prompt.id, "new", "updated")._unsafeUnwrap()
    expect(updated.name).toBe("new")
    const loaded = getPrompt(prompt.id)._unsafeUnwrap()
    expect(loaded.content).toBe("updated")
  })

  it("deletes a prompt", () => {
    const prompt = addPrompt("temp", "delete")._unsafeUnwrap()
    const result = deletePrompt(prompt.id)
    expect(result.isOk()).toBe(true)
    expect(getPrompt(prompt.id).isErr()).toBe(true)
    expect(listPrompts().length).toBe(0)
  })
})
