import process from "node:process"
import type { Readable, Writable } from "node:stream"
import { Effect, Ref } from "effect"
import { match } from "ts-pattern"
import { IOError } from "../../errors.ts"

export type MenuOptions = {
  readonly input?: Readable
  readonly output?: Writable
}

// Key codes
const KEY_UP = "\u001b[A"
const KEY_DOWN = "\u001b[B"
const KEY_ENTER = "\r"

// ANSI escape codes
const CLEAR_SCREEN = "\x1b[2J\x1b[0f"

// Menu state
type MenuState = {
  readonly index: number
  readonly items: readonly string[]
}

// Render the menu to the output stream
const render = (output: Writable, state: MenuState): Effect.Effect<void, IOError> =>
  Effect.async<void, IOError>((resume) => {
    try {
      output.write(CLEAR_SCREEN)
      state.items.forEach((item, i) => {
        const prefix = i === state.index ? "> " : "  "
        output.write(`${prefix}${item}\n`)
      })
      resume(Effect.void)
    } catch (error) {
      resume(
        Effect.fail(
          new IOError({
            operation: "menu-render",
            reason: error instanceof Error ? error.message : String(error)
          })
        )
      )
    }
  })

// Move the cursor up or down
const moveCursor = (delta: number, state: MenuState): MenuState => {
  const total = state.items.length
  const newIndex = (state.index + delta + total) % total
  return { ...state, index: newIndex }
}

// Run the menu and return the selected index
export const runMenu = (items: readonly string[], options: MenuOptions = {}): Effect.Effect<number, IOError> => {
  const input = options.input ?? process.stdin
  const output = options.output ?? process.stdout

  return Effect.gen(function* () {
    // Initialize state
    const stateRef = yield* Ref.make<MenuState>({ index: 0, items })

    // Set raw mode if available
    yield* Effect.sync(() => {
      if (typeof (input as NodeJS.ReadStream).setRawMode === "function") {
        ;(input as NodeJS.ReadStream).setRawMode(true)
      }
    })

    // Initial render
    const initialState = yield* Ref.get(stateRef)
    yield* render(output, initialState)

    // Handle input
    const selectedIndex = yield* Effect.async<number, IOError>((resume) => {
      const onData = (data: Buffer): void => {
        const key = data.toString()

        Effect.runSync(
          Effect.gen(function* () {
            const state = yield* Ref.get(stateRef)

            const result = match(key)
              .with(KEY_UP, () => {
                const newState = moveCursor(-1, state)
                return Effect.all([Ref.set(stateRef, newState), render(output, newState)])
              })
              .with(KEY_DOWN, () => {
                const newState = moveCursor(1, state)
                return Effect.all([Ref.set(stateRef, newState), render(output, newState)])
              })
              .with(KEY_ENTER, () => {
                cleanup()
                resume(Effect.succeed(state.index))
                return Effect.void
              })
              .otherwise(() => Effect.void)

            yield* result
          }).pipe(
            Effect.catchAll((error) => {
              cleanup()
              resume(Effect.fail(error))
              return Effect.void
            })
          )
        )
      }

      const onError = (error: Error): void => {
        cleanup()
        resume(
          Effect.fail(
            new IOError({
              operation: "menu-input",
              reason: error.message
            })
          )
        )
      }

      const cleanup = (): void => {
        input.removeListener("data", onData)
        input.removeListener("error", onError)
        input.pause()
      }

      // Set up event listeners
      input.resume()
      input.on("data", onData)
      input.on("error", onError)

      // Return cleanup function
      return Effect.sync(cleanup)
    })

    // Clean up: restore terminal settings
    yield* Effect.sync(() => {
      if (typeof (input as NodeJS.ReadStream).setRawMode === "function") {
        ;(input as NodeJS.ReadStream).setRawMode(false)
      }
      output.write("\n")
    })

    return selectedIndex
  })
}

// Legacy class wrapper for backward compatibility
export class TuiMenu {
  private readonly items: readonly string[]
  private readonly options: MenuOptions

  constructor(items: readonly string[], options: MenuOptions = {}) {
    this.items = items
    this.options = options
  }

  async run(): Promise<number> {
    return await Effect.runPromise(runMenu(this.items, this.options))
  }
}
