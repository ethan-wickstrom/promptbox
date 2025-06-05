import { Terminal } from "@effect/platform"
import { Context, Effect, Layer } from "effect"
import { match } from "ts-pattern"
import type { IOError, NotFoundError, ValidationError } from "../../errors.ts"
import { PromptService } from "../prompt.ts"
import { ask } from "./input.ts"
import { runMenu } from "./menu.ts"

// Menu actions
const MenuActions = {
  LIST: "List prompts",
  VIEW: "View prompt",
  ADD: "Add prompt",
  UPDATE: "Update prompt",
  DELETE: "Delete prompt",
  EXIT: "Exit"
} as const

type MenuAction = (typeof MenuActions)[keyof typeof MenuActions]

// Service type definition
export type CliService = {
  readonly run: Effect.Effect<void, never, Terminal.Terminal>
  readonly showMenu: Effect.Effect<MenuAction, IOError, Terminal.Terminal>
  readonly listPrompts: Effect.Effect<void, never, Terminal.Terminal>
  readonly viewPrompt: Effect.Effect<void, IOError | NotFoundError, Terminal.Terminal>
  readonly addPrompt: Effect.Effect<void, IOError | ValidationError, Terminal.Terminal>
  readonly updatePrompt: Effect.Effect<void, IOError | ValidationError | NotFoundError, Terminal.Terminal>
  readonly deletePrompt: Effect.Effect<void, IOError | NotFoundError, Terminal.Terminal>
}

// Context.Tag for dependency injection
export const CliService = Context.GenericTag<CliService>("@services/Cli")

// Create the CLI service
const makeCliService = (promptService: PromptService): CliService => {
  const showMenu = runMenu(Object.values(MenuActions)).pipe(
    Effect.map((index) => Object.values(MenuActions)[index] as MenuAction)
  )

  const log = (message: string): Effect.Effect<void, never, Terminal.Terminal> =>
    Effect.gen(function* () {
      const terminal = yield* Terminal.Terminal
      yield* terminal.display(`${message}\n`)
    }).pipe(Effect.catchAllCause(Effect.logError))

  const listPrompts: Effect.Effect<void, never, Terminal.Terminal> = promptService.list.pipe(
    Effect.flatMap((prompts) => {
      if (prompts.length === 0) {
        return log("No prompts found")
      }
      return Effect.all(
        prompts.map((p) => log(`${p.id}: ${p.name}`)),
        { discard: true }
      )
    })
  )

  const viewPrompt: Effect.Effect<void, IOError | NotFoundError, Terminal.Terminal> = Effect.gen(function* () {
    const id = yield* ask("Prompt id: ")
    const prompt = yield* promptService.getById(id)
    yield* log(`Name: ${prompt.name}\nContent: ${prompt.content}`)
  }).pipe(
    Effect.catchTags({
      NotFoundError: (error): Effect.Effect<void, never, Terminal.Terminal> =>
        log(`Error: Prompt not found with id: ${error.id}`),
      IOError: (error): Effect.Effect<void, never, Terminal.Terminal> => log(`Error: ${error.reason}`)
    })
  )

  const addPrompt: Effect.Effect<void, IOError | ValidationError, Terminal.Terminal> = Effect.gen(function* () {
    const name = yield* ask("Name: ")
    const content = yield* ask("Content: ")
    const prompt = yield* promptService.create(name, content)
    yield* log(`Added prompt ${prompt.id}`)
  }).pipe(
    Effect.catchTags({
      ValidationError: (error): Effect.Effect<void, never, Terminal.Terminal> => log(`Error: ${error.reason}`),
      IOError: (error): Effect.Effect<void, never, Terminal.Terminal> => log(`Error: ${error.reason}`)
    })
  )

  const updatePrompt: Effect.Effect<void, IOError | ValidationError | NotFoundError, Terminal.Terminal> = Effect.gen(
    function* () {
      const id = yield* ask("Id: ")
      const name = yield* ask("Name: ")
      const content = yield* ask("Content: ")
      const prompt = yield* promptService.update(id, name, content)
      yield* log(`Updated ${prompt.id}`)
    }
  ).pipe(
    Effect.catchTags({
      ValidationError: (error): Effect.Effect<void, never, Terminal.Terminal> => log(`Error: ${error.reason}`),
      NotFoundError: (error): Effect.Effect<void, never, Terminal.Terminal> =>
        log(`Error: Prompt not found with id: ${error.id}`),
      IOError: (error): Effect.Effect<void, never, Terminal.Terminal> => log(`Error: ${error.reason}`)
    })
  )

  const deletePrompt: Effect.Effect<void, IOError | NotFoundError, Terminal.Terminal> = Effect.gen(function* () {
    const id = yield* ask("Id: ")
    yield* promptService.delete(id)
    yield* log("Deleted")
  }).pipe(
    Effect.catchTags({
      NotFoundError: (error): Effect.Effect<void, never, Terminal.Terminal> =>
        log(`Error: Prompt not found with id: ${error.id}`),
      IOError: (error): Effect.Effect<void, never, Terminal.Terminal> => log(`Error: ${error.reason}`)
    })
  )

  const run: Effect.Effect<void, never, Terminal.Terminal> = Effect.gen(function* () {
    let running = true

    while (running) {
      const action = yield* showMenu

      yield* match(action)
        .with(MenuActions.LIST, () => listPrompts)
        .with(MenuActions.VIEW, () => viewPrompt)
        .with(MenuActions.ADD, () => addPrompt)
        .with(MenuActions.UPDATE, () => updatePrompt)
        .with(MenuActions.DELETE, () => deletePrompt)
        .with(MenuActions.EXIT, () => {
          running = false
          return log("Goodbye!")
        })
        .exhaustive()
    }
  }).pipe(Effect.catchAllCause(Effect.logError))

  return {
    run,
    showMenu,
    listPrompts,
    viewPrompt,
    addPrompt,
    updatePrompt,
    deletePrompt
  }
}

// Layer implementation
export const CliServiceLive = Layer.effect(
  CliService,
  Effect.gen(function* () {
    const promptService = yield* PromptService
    return makeCliService(promptService)
  })
)

// Test layer with mock implementation
export const CliServiceTest = Layer.succeed(CliService, {
  run: Effect.void,
  showMenu: Effect.succeed(MenuActions.EXIT),
  listPrompts: Effect.void,
  viewPrompt: Effect.void,
  addPrompt: Effect.void,
  updatePrompt: Effect.void,
  deletePrompt: Effect.void
})
