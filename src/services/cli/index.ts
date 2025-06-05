import { Console, Context, Effect, Layer, pipe } from "effect"
import type { Logger } from "effect/Logger"
// All usages must specify both type arguments: Logger<unknown, void>
import { match } from "ts-pattern"
import type { IOError, NotFoundError, ValidationError } from "../../errors.ts"
import { PromptService } from "../prompt.ts"
import { ask } from "./input.ts"
import { TuiMenu, runMenu } from "./menu.ts"

export { TuiMenu }

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
  readonly run: Effect.Effect<void, never, Logger<unknown, void> | Console>
  readonly showMenu: Effect.Effect<MenuAction, IOError>
  readonly listPrompts: Effect.Effect<void, never, Console>
  readonly viewPrompt: Effect.Effect<void, IOError | NotFoundError, Console>
  readonly addPrompt: Effect.Effect<void, IOError | ValidationError, Console>
  readonly updatePrompt: Effect.Effect<void, IOError | ValidationError | NotFoundError, Console>
  readonly deletePrompt: Effect.Effect<void, IOError | NotFoundError, Console>
}

// Context.Tag for dependency injection
export const CliService = Context.GenericTag<CliService>("@services/Cli")

// Create the CLI service
const makeCliService = (promptService: PromptService): CliService => {
  // All Logger requirements are now Logger<unknown, void>

  const showMenu: Effect.Effect<MenuAction, IOError> = pipe(
    runMenu(Object.values(MenuActions)),
    Effect.map((index) => Object.values(MenuActions)[index] as MenuAction)
  )

  const listPrompts: Effect.Effect<void, never, Console> = pipe(
    promptService.list,
    Effect.flatMap((prompts) => {
      if (prompts.length === 0) {
        return Console.log("No prompts found")
      }
      return Effect.all(
        prompts.map((p) => Console.log(`${p.id}: ${p.name}`)),
        { discard: true }
      )
    })
  )

  const viewPrompt: Effect.Effect<void, IOError | NotFoundError, Console> = pipe(
    ask("Prompt id: "),
    Effect.flatMap((id) => promptService.getById(id)),
    Effect.flatMap((prompt) => Console.log(`Name: ${prompt.name}\nContent: ${prompt.content}`)),
    Effect.catchTags({
      NotFoundError: (error): Effect.Effect<void, never, Console> =>
        Console.log(`Error: Prompt not found with id: ${error.id}`),
      IOError: (error): Effect.Effect<void, never, Console> => Console.log(`Error: ${error.reason}`)
    })
  )

  const addPrompt: Effect.Effect<void, IOError | ValidationError, Console> = Effect.gen(function* () {
    const name = yield* ask("Name: ")
    const content = yield* ask("Content: ")
    const prompt = yield* promptService.create(name, content)
    yield* Console.log(`Added prompt ${prompt.id}`)
  }).pipe(
    Effect.catchTags({
      ValidationError: (error): Effect.Effect<void, never, Console> => Console.log(`Error: ${error.reason}`),
      IOError: (error): Effect.Effect<void, never, Console> => Console.log(`Error: ${error.reason}`)
    })
  )

  const updatePrompt: Effect.Effect<void, IOError | ValidationError | NotFoundError, Console> = Effect.gen(
    function* () {
      const id = yield* ask("Id: ")
      const name = yield* ask("Name: ")
      const content = yield* ask("Content: ")
      const prompt = yield* promptService.update(id, name, content)
      yield* Console.log(`Updated ${prompt.id}`)
    }
  ).pipe(
    Effect.catchTags({
      ValidationError: (error): Effect.Effect<void, never, Console> => Console.log(`Error: ${error.reason}`),
      NotFoundError: (error): Effect.Effect<void, never, Console> =>
        Console.log(`Error: Prompt not found with id: ${error.id}`),
      IOError: (error): Effect.Effect<void, never, Console> => Console.log(`Error: ${error.reason}`)
    })
  )

  const deletePrompt: Effect.Effect<void, IOError | NotFoundError, Console> = Effect.gen(function* () {
    const id = yield* ask("Id: ")
    yield* promptService.delete(id)
    yield* Console.log("Deleted")
  }).pipe(
    Effect.catchTags({
      NotFoundError: (error): Effect.Effect<void, never, Console> =>
        Console.log(`Error: Prompt not found with id: ${error.id}`),
      IOError: (error): Effect.Effect<void, never, Console> => Console.log(`Error: ${error.reason}`)
    })
  )

  const run: Effect.Effect<void, never, Logger<unknown, void> | Console> = Effect.gen(function* () {
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
          return Console.log("Goodbye!")
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
