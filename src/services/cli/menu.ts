import { Terminal } from "@effect/platform"
import { Effect, Ref } from "effect"
import { match } from "ts-pattern"
import { IOError } from "../../errors.ts"

// Menu state
type MenuState = {
  readonly index: number
  readonly items: readonly string[]
}

// Render the menu to the output stream
const render = (state: MenuState): Effect.Effect<void, never, Terminal.Terminal> =>
  Effect.gen(function* () {
    const terminal = yield* Terminal.Terminal
    yield* terminal.display("\u001B[?25l") // hide cursor
    yield* terminal.display("\u001B[2J\u001B[H") // clear screen
    for (let i = 0; i < state.items.length; i++) {
      const item = state.items[i]
      const prefix = i === state.index ? "> " : "  "
      yield* terminal.display(`${prefix}${item}\n`)
    }
  }).pipe(Effect.catchAllCause(Effect.logError))

// Move the cursor up or down
const moveCursor = (delta: number, state: MenuState): MenuState => {
  const total = state.items.length
  const newIndex = (state.index + delta + total) % total
  return { ...state, index: newIndex }
}

// Run the menu and return the selected index
export const runMenu = (items: readonly string[]): Effect.Effect<number, IOError, Terminal.Terminal> =>
  Effect.gen(function* () {
    const terminal = yield* Terminal.Terminal

    // Initialize state
    const stateRef = yield* Ref.make<MenuState>({ index: 0, items })

    const selectedIndex = yield* Effect.scoped(
      Effect.gen(function* () {
        // Initial render
        const initialState = yield* Ref.get(stateRef)
        yield* render(initialState)

        const loop: Effect.Effect<number, Terminal.QuitException, Terminal.Terminal> = Effect.gen(function* () {
          const input = yield* terminal.readInput
          const key = input.key
          const state = yield* Ref.get(stateRef)
          return yield* match(key.name)
            .with("up", () => {
              const newState = moveCursor(-1, state)
              return Ref.set(stateRef, newState).pipe(Effect.andThen(render(newState)), Effect.andThen(loop))
            })
            .with("down", () => {
              const newState = moveCursor(1, state)
              return Ref.set(stateRef, newState).pipe(Effect.andThen(render(newState)), Effect.andThen(loop))
            })
            .with("return", () => Effect.succeed(state.index))
            .with("c", () => Effect.fail(new Terminal.QuitException()))
            .otherwise(() => loop)
        })

        return yield* loop
      })
    )

    yield* terminal.display("\u001B[?25h") // show cursor
    return selectedIndex
  }).pipe(
    Effect.mapError(
      (error) =>
        new IOError({
          operation: "menu",
          reason: String(error)
        })
    )
  )