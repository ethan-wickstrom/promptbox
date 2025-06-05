import { afterEach, beforeEach, describe, expect, jest, spyOn, test } from "bun:test"
import { EventEmitter } from "node:events"
import NodeReadlineModule from "node:readline"
import type { Interface as ReadlineInterfaceType } from "node:readline"
import { Readable, Writable } from "node:stream"
import { Effect, Exit, Fiber } from "effect"
import type { IOError } from "../../errors.ts"
import { type InputOptions, ask } from "./input.ts"

// Mock for readline.Interface
class MockReadlineInterface extends EventEmitter {
  question = jest.fn()
  close = jest.fn()
  output!: Writable
  input!: Readable
}

// Spy for NodeReadlineModule.createInterface
let createInterfaceSpy: ReturnType<typeof spyOn<typeof NodeReadlineModule, "createInterface">>

describe("ask", () => {
  let mockRlInstance: MockReadlineInterface
  let mockInputStream: Readable
  let mockOutputStream: Writable

  beforeEach((): void => {
    mockRlInstance = new MockReadlineInterface() // Create the instance directly
    // Spy on the imported module's function and make it return our mock instance
    createInterfaceSpy = spyOn(NodeReadlineModule, "createInterface").mockImplementation(
      () => mockRlInstance as unknown as ReadlineInterfaceType
    )

    mockInputStream = new Readable({
      read(): void {
        /* no-op for test */
      }
    })
    mockOutputStream = new Writable({
      write(
        _chunk: string | Uint8Array,
        _encoding: globalThis.BufferEncoding,
        callback: (error?: Error | null) => void
      ): void {
        callback()
      }
    })
  })

  afterEach((): void => {
    if (createInterfaceSpy) {
      createInterfaceSpy.mockRestore() // Restore original implementation
    }
  })

  test("should resolve with the answer when input is provided", async (): Promise<void> => {
    const questionText = "What is your name?"
    const expectedAnswer = "Test User"

    mockRlInstance.question.mockImplementationOnce((_q, callback): void => {
      callback(expectedAnswer)
    })

    const options: InputOptions = {
      input: mockInputStream,
      output: mockOutputStream
    }

    const program = ask(questionText, options)
    const result = await Effect.runPromiseExit(program)

    expect(Exit.isSuccess(result)).toBe(true)
    if (Exit.isSuccess(result)) {
      expect(result.value).toBe(expectedAnswer)
    }
    expect(NodeReadlineModule.createInterface).toHaveBeenCalledWith({
      input: mockInputStream,
      output: mockOutputStream
    })
    expect(mockRlInstance.question).toHaveBeenCalledWith(questionText, expect.any(Function))
    expect(mockRlInstance.close).toHaveBeenCalledTimes(1)
  })

  test("should fail with IOError when readline emits an error", async () => {
    const questionText = "What is your quest?"
    const errorMessage = "Readline error"

    mockRlInstance.question.mockImplementationOnce(() => {}) // Don't call callback

    const options: InputOptions = {
      input: mockInputStream,
      output: mockOutputStream
    }

    const program = ask(questionText, options)
    const promise = Effect.runPromiseExit(program)

    // Allow the Effect to subscribe and set up listeners
    await new Promise((resolve) => setTimeout(resolve, 0))

    mockRlInstance.emit("error", new Error(errorMessage))

    const result = await promise

    expect(Exit.isFailure(result)).toBe(true)
    if (Exit.isFailure(result)) {
      const cause = result.cause
      expect(cause._tag).toBe("Fail")
      if (cause._tag === "Fail") {
        const error = cause.error as IOError
        expect(error._tag).toBe("IOError")
        expect(error.operation).toBe("readline")
        expect(error.reason).toBe(`Failed to read input: ${errorMessage}`)
      }
    }
    expect(mockRlInstance.close).toHaveBeenCalledTimes(1)
  })

  test("cleanup function should close readline interface on interruption", async () => {
    const questionText = "Interrupt me"
    const options: InputOptions = {
      input: mockInputStream,
      output: mockOutputStream
    }

    mockRlInstance.question.mockImplementationOnce(() => {
      // Do nothing, wait for interruption
    })

    const program = ask(questionText, options)

    const fiber = await Effect.runFork(program)
    await Effect.runPromise(Fiber.interrupt(fiber))

    // Allow time for cleanup to run
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(mockRlInstance.close).toHaveBeenCalledTimes(1)
  })
})
