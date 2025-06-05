import { Terminal } from "@effect/platform"
import { Context, Effect, Layer } from "effect"
import { match } from "ts-pattern"
import type { AllDatabaseErrors, IOError, NotFoundError, ValidationError } from "../../errors.ts"
import { PromptService } from "../prompt.ts"
import { ask } from "./input.ts"
import { runMenu } from "./menu.ts"

// Menu actions
const menuActions = [
  "List prompts",
  "View prompt",
  "Add prompt",
  "Update prompt",
  "Delete prompt",
  "Exit"
] as const

type MenuAction = (typeof menuActions)[number]

// Service type definition
export type CliService = {
  readonly run: Effect.Effect<void, never, Terminal.Terminal>
  readonly showMenu: Effect.Effect<MenuAction, IOError, Terminal.Terminal>
  readonly listPrompts: Effect.Effect<void, never, Terminal.Terminal>
  readonly viewPrompt: Effect.Effect<void, never, Terminal.Terminal>
  readonly addPrompt: Effect.Effect<void, never, Terminal.Terminal>
  readonly updatePrompt: Effect.Effect<void, never, Terminal.Terminal>
  readonly deletePrompt: Effect.Effect<void, never, Terminal.Terminal>
}

// Context.Tag for dependency injection
export const CliService = Context.GenericTag<CliService>("@services/Cli")

// Create the CLI service
const makeCliService = (promptService: PromptService): CliService => {
  const showMenu = runMenu(menuActions).pipe(Effect.map((index) => menuActions[index]))

  const log = (message: string): Effect.Effect<void, never, Terminal.Terminal> =>
    Effect.gen(function* () {
      const terminal = yield* Terminal.Terminal
      yield* terminal.display(`${message}\n`)
    }).pipe(Effect.catchAllCause(Effect.logError))

  const handleError = (error: AllDatabaseErrors | NotFoundError | ValidationError | IOError) =>
    log(`Error: ${String(error)}`)

  const listPrompts: Effect.Effect<void, never, Terminal.Terminal> = promptService.list.pipe(
    Effect.flatMap((prompts) => {
      if (prompts.length === 0) {
        return log("No prompts found")
      }
      return Effect.all(
        prompts.map((p) => log(`${p.id}: ${p.name}`)),
        { discard: true }
      )
    }),
    Effect.catchAll(handleError)
  )

  const viewPrompt: Effect.Effect<void, never, Terminal.Terminal> = Effect.gen(function* () {
    const id = yield* ask("Prompt id: ")
    const prompt = yield* promptService.getById(id)
    yield* log(`Name: ${prompt.name}\nContent: ${prompt.content}`)
  }).pipe(Effect.catchAll(handleError))

  const addPrompt: Effect.Effect<void, never, Terminal.Terminal> = Effect.gen(function* () {
    const name = yield* ask("Name: ")
    const content = yield* ask("Content: ")
    const prompt = yield* promptService.create(name, content)
    yield* log(`Added prompt ${prompt.id}`)
  }).pipe(Effect.catchAll(handleError))

  const updatePrompt: Effect.Effect<void, never, Terminal.Terminal> = Effect.gen(function* () {
    const id = yield* ask("Id: ")
    const name = yield* ask("Name: ")
    const content = yield* ask("Content: ")
    const prompt = yield* promptService.update(id, name, content)
    yield* log(`Updated ${prompt.id}`)
  }).pipe(Effect.catchAll(handleError))

  const deletePrompt: Effect.Effect<void, never, Terminal.Terminal> = Effect.gen(function* () {
    const id = yield* ask("Id: ")
    yield* promptService.delete(id)
    yield* log("Deleted")
  }).pipe(Effect.catchAll(handleError))

  const run: Effect.Effect<void, never, Terminal.Terminal> = Effect.gen(function* () {
    let running = true

    while (running) {
      const action = yield* Effect.catchAll(showMenu, (error) => {
        running = false
        return log(`Exiting... (${error.reason})`).pipe(Effect.as("Exit" as const))
      })

      if (!running) {
        break
      }

      yield* match(action)
        .with("List prompts", () => listPrompts)
        .with("View prompt", () => viewPrompt)
        .with("Add prompt", () => addPrompt)
        .with("Update prompt", () => updatePrompt)
        .with("Delete prompt", () => deletePrompt)
        .with("Exit", () => {
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
  showMenu: Effect.succeed("Exit"),
  listPrompts: Effect.void,
  viewPrompt: Effect.void,
  addPrompt: Effect.void,
  updatePrompt: Effect.void,
  deletePrompt: Effect.void
})