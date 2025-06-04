import console from "node:console"
import { Cause, Effect, Exit, Option } from "effect"
import { match } from "ts-pattern"
import { createPromptStore } from "./prompts.ts"

const { addPrompt, deletePrompt, getPrompt, listPrompts, updatePrompt, closeDb } = createPromptStore()
import { ask } from "./input.ts"
import { TuiMenu } from "./menu.ts"

const actions = ["List prompts", "View prompt", "Add prompt", "Update prompt", "Delete prompt", "Exit"] as const

type ActionIndex = 0 | 1 | 2 | 3 | 4 | 5

const handleList = (): void => {
  const prompts = listPrompts()
  if (prompts.length === 0) {
    console.log("No prompts found")
    return
  }
  for (const p of prompts) {
    console.log(`${p.id}: ${p.name}`)
  }
}

const handleView = async (): Promise<void> => {
  const id = await ask("Prompt id: ")
  const exit = Effect.runSyncExit(getPrompt(id))
  Exit.match(exit, {
    onSuccess: (prompt): void => {
      console.log(`Name: ${prompt.name}\nContent: ${prompt.content}`)
    },
    onFailure: (cause): void => {
      const option = Cause.failureOption(cause)
      if (Option.isSome(option)) {
        console.log(`Error: ${option.value.type}`)
      } else {
        console.log("Error")
      }
    }
  })
}

const handleAdd = async (): Promise<void> => {
  const name = await ask("Name: ")
  const content = await ask("Content: ")
  const exit = Effect.runSyncExit(addPrompt(name, content))
  Exit.match(exit, {
    onSuccess: (prompt): void => console.log(`Added prompt ${prompt.id}`),
    onFailure: (cause): void => {
      const option = Cause.failureOption(cause)
      if (Option.isSome(option)) {
        match(option.value)
          .with({ type: "invalid-input" }, (e) => console.log(`Error: ${e.reason}`))
          .otherwise((e) => console.log(`Error: ${e.type}`))
      } else {
        console.log("Error")
      }
    }
  })
}

const handleUpdate = async (): Promise<void> => {
  const id = await ask("Id: ")
  const name = await ask("Name: ")
  const content = await ask("Content: ")
  const exit = Effect.runSyncExit(updatePrompt(id, name, content))
  Exit.match(exit, {
    onSuccess: (prompt): void => console.log(`Updated ${prompt.id}`),
    onFailure: (cause): void => {
      const option = Cause.failureOption(cause)
      if (Option.isSome(option)) {
        match(option.value)
          .with({ type: "invalid-input" }, (e) => console.log(`Error: ${e.reason}`))
          .otherwise((e) => console.log(`Error: ${e.type}`))
      } else {
        console.log("Error")
      }
    }
  })
}

const handleDelete = async (): Promise<void> => {
  const id = await ask("Id: ")
  const exit = Effect.runSyncExit(deletePrompt(id))
  Exit.match(exit, {
    onSuccess: (): void => console.log("Deleted"),
    onFailure: (cause): void => {
      const option = Cause.failureOption(cause)
      if (Option.isSome(option)) {
        console.log(`Error: ${option.value.type}`)
      } else {
        console.log("Error")
      }
    }
  })
}

const main = async (): Promise<void> => {
  let running = true
  while (running) {
    const menu = new TuiMenu([...actions])
    const choice = (await menu.run()) as ActionIndex
    await match<ActionIndex>(choice)
      .with(0, () => handleList())
      .with(1, () => handleView())
      .with(2, () => handleAdd())
      .with(3, () => handleUpdate())
      .with(4, () => handleDelete())
      .with(5, () => {
        running = false
      })
      .exhaustive()
  }
  closeDb()
}

main()
