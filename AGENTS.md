# Project Instructions

> [!IMPORTANT]:
> You MUST read the entire AGENTS.md file before beginning any work.

This project is built with **Bun** (a fast JavaScript/TypeScript runtime) and **Effect v3** (TypeScript’s functional effect system). Effect v3 provides a **powerful standard library** for managing async code, errors, concurrency, resource safety, and dependency injection in a purely functional style. The codebase uses **Effect 3.16** (or higher), meaning all APIs and patterns follow the latest stable release. This document serves as a guide for AI agents and humans to navigate and contribute to the codebase effectively, with **idiomatic Effect v3** usage and full Bun integration.

**Key points about the stack:**

- **Bun Integration:** Bun can directly run TypeScript and provides a built-in test runner. Use `bun install` for dependencies and `bun test` for running tests. To execute the program (e.g. a CLI or server) in development, use `bun run <entry-file>` or simply `bun <entry-file.ts>`. The project’s entry point uses Effect’s `runMain` abstraction for Bun (`BunRuntime.runMain`) to ensure graceful shutdown and resource cleanup on termination.

- **Effect v3 Overview:** Effect is a **functional effect system** – every side-effecting or asynchronous operation is represented as an `Effect<R, E, A>` (requiring environment `R`, potentially erroring with `E`, and producing a value `A`). Code is composed **without side-effects**; effects describe what to do, and the runtime executes them. This yields safer, more testable code (no untyped thrown errors, no ambient state). In Effect v3, APIs are **“dual”** – usable in both **data-first (pipeable)** and **data-last (function call)** styles for flexibility. We favor a clear, pipeline style using the `pipe` utility for readability.

- **Updated Patterns in v3:** Effect 3.x introduced several improvements and new APIs:

  - **Generators for sequencing** – Use `Effect.gen` to write synchronous-looking sequential code (akin to async/await) while staying in the Effect context.
  - **Context & Layer for DI** – Replaces manual dependency passing with a type-safe service registry (similar to ZIO environment). Use `Context.Tag` (or `Effect.Service`) to define services, and `Layer` to provide implementations.
  - **Structured Error Handling** – Instead of throwing, represent expected errors with types. Effect v3 offers `Data.TaggedError` classes for domain errors and combinators like `Effect.catchTag` (now supporting multiple error tags in one handler) to pattern-match failures.
  - **Concurrency Control** – Utilities like `Effect.all` (with configurable concurrency and error accumulation modes) and fiber primitives (fork, race, etc.) allow high-level parallelism. By default, collecting effects will short-circuit on the first failure unless using “validate” mode to accumulate errors.
  - **Resource Safety** – Acquire/release patterns are built-in. Use `Effect.acquireRelease` or `Effect.addFinalizer` to ensure cleanup, or leverage `Layer.scoped` for services that need teardown (e.g. DB connections). The `runMain` entrypoint uses these finalizers to catch SIGINT and gracefully shutdown all fibers.
  - **Effect Schema** – A full runtime type/schema system for validation and serialization. We use Schema to validate external input at boundaries, ensuring runtime type safety (e.g., parsing config or HTTP request data).
  - **Streaming** – The `Stream` module provides asynchronous streams with backpressure, integrated with Effect for processing large or infinite data streams safely and concurrently.

This guide will detail how these patterns are used in the project and how to follow them when writing code. All examples and instructions here prioritize **pragmatism and correctness** in Effect v3, so you can confidently implement features that compile, pass tests, and run reliably.

## Project Structure & Design

**Functional Architecture:** The codebase is organized into _services_ and _layers_ following Effect’s service-oriented architecture. Rather than using global singletons or manual dependency injection, we define interfaces for each service (e.g., a logger, database access, external API client) and use Effect’s `Context` to manage them. Key concepts:

- **Services (Context Tags):** Each service has a `Context.Tag<Identifier, ServiceShape>` which serves as a unique identifier and type for that dependency. For example, a logging service might be:

  ```ts
  import { Context, Effect } from 'effect';

  // Service interface
  interface Logger {
    readonly log: (message: string) => Effect.Effect<void, never, void>;
  }
  // Service tag (acts as DI key)
  const Logger = Context.Tag<Logger>();
  ```

  The `Logger` tag is used wherever logging is required. Code can **access** the service via the tag (see **Usage** below), without needing to know the concrete implementation. This ensures loose coupling and testability.

- **Layers:** A `Layer<RIn, E, ROut>` provides services. We create layers to wire actual implementations to the service interfaces. For simple services with no internal state or external resource, we use `Layer.succeed`; for ones that require effectful initialization or resource acquisition, we use `Layer.effect` or `Layer.scoped` (with finalizers). Layers can depend on other layers, forming a **dependency graph** that the Effect runtime composes and memoizes.

  **Example – Defining and Providing a Service via Layer:**

  ```ts
  import { Layer, Effect, Context, Console } from 'effect';

  interface RandomNumberService {
    readonly next: Effect.Effect<never, never, number>;
  }
  const RandomNumberService = Context.Tag<RandomNumberService>();

  // Implementation: next() uses Math.random (no external deps)
  const LiveRandom: Layer.Layer<never, never, RandomNumberService> =
    Layer.succeed(RandomNumberService, {
      next: Effect.sync(() => Math.random()),
    });
  ```

  Here `LiveRandom` is a Layer that, when provided, satisfies any requirement for `RandomNumberService` by supplying an object with a `next` method. We use `Effect.sync` to wrap the side-effect (`Math.random()`), because even though it cannot fail, we need to encapsulate it as an Effect (ensuring purity).

- **Composing Layers:** If a component requires multiple services, we compose layers using `Layer.provide` or the higher-level `Effect.provide` combinator. For instance, if an effect needs `RandomNumberService` and `Logger`, we can combine `LiveRandom` and `LiveConsoleLogger` layers (assuming `LiveConsoleLogger` is another layer) by `Layer.merge` or simply provide both sequentially. The Effect runtime will automatically build the dependency graph, instantiate services, and manage lifecycles (including tearing them down in case of fiber interruption).

- **Usage:** Inside effect code (e.g., within an `Effect.gen` generator), we **access** a service via its tag. Yielding a `Context.Tag` returns the service implementation. For example:

  ```ts
  const program = Effect.gen(function* ($) {
    const rng = yield* $(RandomNumberService); // get RandomNumberService impl
    const logger = yield* $(Logger);
    const n = yield* $(rng.next); // use RandomNumberService
    yield* $(logger.log(`Generated: ${n}`)); // use Logger
  });
  ```

  Note: In generator functions, we write `yield* $(Effect)` to sequence effectful calls. When yielding a `Context.Tag`, it provides the bound service (this is essentially `Effect.service` under the hood).

- **Providing Layers:** To run an Effect that has service requirements, use `Effect.provide` with the appropriate layer(s). For example, to run `program` which needs `RandomNumberService` and `Logger`:

  ```ts
  import { BunRuntime } from '@effect/platform-bun';

  program.pipe(
    Effect.provide(LiveRandom),
    Effect.provide(LiveConsoleLogger),
    BunRuntime.runMain
  );
  ```

  The above will _inject_ the `LiveRandom` and `LiveConsoleLogger` implementations into the effect, then run it on Bun’s runtime. The use of `BunRuntime.runMain` ensures the process listens for `SIGINT`/Ctrl+C and interrupts fibers gracefully, running finalizers before exit. **Important:** Always use the `runMain` from the appropriate platform (`@effect/platform-bun` for Bun) for long-running apps or services – it wraps `Effect.run` with logic to handle process signals and fiber supervision.

**Dependency Injection Rationale:** By using Context/Layer, we avoid hard-coding modules or using global variables for dependencies. This makes testing straightforward – for example, we can swap the real database layer with an in-memory fake layer in tests, or provide a no-op logger to silence logs. _“Providing”_ a service implementation **links the abstract interface to a concrete implementation**, allowing the effect to run without further requirements. All code should assume services are provided; the top-level composition (in `main` or in tests) will supply the needed layers.

**Project Modules:** Source files are typically organized by feature or service. For instance, you might see a `services/` directory with files like `Logger.ts`, `Database.ts`, etc., each defining a Context Tag and perhaps a default live Layer (`Logger.Live`, `Database.Live`, etc.). Business logic modules then consume these services via their tags, without coupling to the implementation. This yields a **layered architecture**:

- **Core logic** (pure or effectful functions that implement business rules)
- **Service definitions** (Context Tags and interfaces)
- **Service implementations** (Layers providing those interfaces, possibly calling external APIs, databases, file system, etc.)
- **Entry points** (CLI or HTTP server startup that composes Layers and runs the main Effect)

This architecture aligns with Effect’s best practices for **service-oriented design and dependency management**.

## Coding Guidelines and Best Practices

When writing or modifying code in this codebase, follow these guidelines to ensure consistency, reliability, and that changes integrate well with Codex’s automated capabilities:

### 1. Use Effect for All Side Effects and Async Operations

All **side effects** (IO, network calls, random generation, timeouts, etc.) must be done through the Effect API – _never_ directly in top-level code or normal functions. This ensures they are tracked in the type system and can be composed and tested. Some patterns to use:

- **Synchronous side effects:** Use `Effect.sync` (for actions that cannot fail) or `Effect.trySync` (for actions that might throw). For example, reading from `process.env` or generating a random number:

  ```ts
  const readEnv = Effect.sync(() => process.env.MY_VAR);
  const randomInt = Effect.sync(() => Math.floor(Math.random() * 100));
  ```

  If a synchronous action could throw (e.g., JSON.parse on an unknown string), wrap it in `Effect.trySync(() => {...}, catchFn)`, providing a catch handler to convert exceptions to a typed error if needed.

- **Asynchronous operations (Promises):** Use `Effect.promise` and `Effect.tryPromise` to integrate promises.

  - `Effect.promise(() => somePromise)` assumes the promise **cannot reject** (if it does, it’s treated as a defect/bug). Only use this for guaranteed-success promises.
  - `Effect.tryPromise(() => somePromise)` wraps a promise that _might fail_, capturing any rejection or exception as an error in the Effect. By default, an unexpected error becomes an `UnknownException` in Effect’s error channel. You can use an overload with `catch` to map known error cases to custom error types.

  **Example:** Fetching an API with proper error capture:

  ```ts
  import { Effect, Data } from 'effect';

  class RequestFailed extends Data.TaggedError('RequestFailed')<{}> {}
  const fetchTodo = (id: number) =>
    Effect.tryPromise({
      try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
      catch: (error) => new RequestFailed({ cause: error }),
    });
  ```

  In this example, any network failure or non-OK HTTP response can be caught and turned into a `RequestFailed` domain error. `Data.TaggedError` is used to create a richly-typed error class (here with no extra fields except an implicit cause). This way, the error is part of the Effect’s type and can be handled explicitly.

- **Callbacks to Effect:** For Node-style callback APIs, use `Effect.async` or wrap them manually. If needed, prefer using Promise-based APIs or util.promisify and then `Effect.tryPromise`.

- **No `async/await`:** Do not use `async/await` in this codebase’s functions. Instead, use `Effect` combinators or the `Effect.gen` generator syntax (which is typesafe and integrates with cancellation). `async/await` produces raw promises and misses out on Effect’s error handling and cancellation model. It’s acceptable to use `await` _inside_ an `Effect.tryPromise` evaluator (since that is still catching exceptions in an Effect), but never at the top level of module code or in a function that doesn’t immediately wrap it in an Effect.

### 2. Leverage `Effect.gen` for Complex Sequences

Effect provides a generator-based DSL via `Effect.gen` to write sequential code that looks imperative but stays within the effect context. This is very useful for organizing business logic steps with dependency injection:

```ts
const myEffect = Effect.gen(function* ($) {
  // Inside generator, use $(...) to unwrap Effects.
  const foo = yield* $(computeFoo()); // computeFoo() returns Effect<..., Foo>
  const bar = yield* $(someService.doX(foo)); // service usage
  if (bar.needsRetry) {
    // You can use control flow normally
    yield* $(Effect.sleep('100 millis')); // wait 100ms (Effect built-in)
    return yield* $(someService.doX(foo)); // retry once
  }
  return bar.result;
});
```

Within `Effect.gen`, use `yield* $(effect)` pattern to sequence calls (the `$` is provided by Effect.gen to handle the yields). This approach improves readability over deeply nested `.pipe` chains or callbacks. It also automatically **catches exceptions** as failures (no unhandled exceptions escape a generator). Use it freely to simplify logic that would otherwise involve multiple nested maps or conditionals inside effects.

### 3. Error Modeling and Handling

Proper error handling is a cornerstone of Effect. Guidelines for this project:

- **Typed Errors:** Whenever an effect can fail in a **expected** way (e.g. business rule violation, validation failure, external service returned an error), represent that with a **specific error type**. Use `Data.TaggedError` to define error classes that carry a descriptive tag and structured data. For example, if a function validates user input, it might fail with `InvalidInput` error:

  ```ts
  class InvalidInput extends Data.TaggedError('InvalidInput')<{
    issues: string[];
  }> {}
  ```

  Now your effect can be `Effect<E, InvalidInput, A>` to signal that specific failure. Inside, use `Effect.fail(new InvalidInput({ issues }))` to fail. This way, callers can handle `InvalidInput` explicitly via `Effect.catchTag("InvalidInput", ... )` or `Effect.match` on error tag.

- **Expected vs Unexpected Errors:** Effect distinguishes _expected_ errors (the `E` in `Effect<R, E, A>`) from _unexpected_ defects (unhandled exceptions, typically programming bugs). By default, **exceptions thrown inside an Effect** (or a promise rejection not caught by `tryPromise`) become **defects** (often wrapped in `Effect.UnknownException`). We treat defects as bugs – they will cause logs/metrics but are not meant to be recovered in normal logic. Always try to foresee error conditions and use `Effect.fail` or `Effect.tryCatch` to turn them into typed errors, rather than throwing. In rare cases where truly unexpected exceptions happen, they can be caught with `Effect.catchAllDefect` at a high level if needed, but generally our code should avoid raising defects.

- **Handling Errors:** Use combinators like:

  - `Effect.match` or `Effect.catchTag` for handling specific error cases. For example, to handle a `InvalidInput` and convert it to a user-friendly message:

    ```ts
    myEffect.pipe(
      Effect.catchTag('InvalidInput', (err) =>
        Effect.succeed(`Input error: ${err.issues.join(', ')}`)
      )
    );
    ```

    `catchTag` now supports catching multiple tags in one go if the handling logic is similar.

  - `Effect.orElse` / `catchAll` to fallback for any failure.
  - `Effect.retry` with a `Schedule` for retrying transient failures (e.g., network issues) – see the **Scheduling** module for built-in retry policies.
  - `Effect.annotate` or `Effect.refine` to add context or refine error types.

  The goal is **no bare `unknown` errors** flowing through the system. Every failure should be anticipated and given a type (even if it’s a generic `UnknownException` for truly unpredictable cases).

- **Error Accumulation:** When running things in parallel (e.g. using `Effect.all` or streams), consider whether you want to fail fast or accumulate errors. By default, `Effect.all` fails fast (cancelling remaining tasks on first failure). If you want to collect all errors, use `Effect.all(..., { mode: "validate" })` which returns a _failure_ containing a Cause with all individual errors aggregated. This is useful for validating multiple inputs at once, etc. The project uses this pattern in validation logic via Effect Schema (collecting all schema violations) – see **Schema** below.

### 4. Effect Schema for Data Validation

For validating and parsing external data (JSON inputs, env config, etc.), we use **Effect Schema**, which provides declarative schemas and automatic codecs. Schemas double as both TypeScript type _and_ runtime validator. Key points:

- Schemas are defined using combinators in the `Schema` module (import from `"effect"`). For example:

  ```ts
  import { Schema } from 'effect';
  const UserSchema = Schema.struct({
    id: Schema.Number,
    name: Schema.String,
    age: Schema.NumberFromString, // accepts number or numeric string
  });
  type User = Schema.To<typeof UserSchema>; // Inferred type { id: number; name: string; age: number }
  ```

  Here `Schema.NumberFromString` is used to accept a string and parse to a number. There are many such combinators (for dates, booleans, enums, etc.) and you can compose schemas arbitrarily.

- To **parse** unknown data to a schema, use one of the decoding functions:

  - `Schema.decodeEither(schema, input)` or `Schema.decodeUnknownEither` if input is `unknown`: returns a `Either<ParseError, ParsedType>`.
  - `Schema.decode(schema, input)` returns a `ParsedType` _or throws_ a `ParseError` if invalid – useful for quick one-off parsing where you plan to catch the exception (not commonly used in our code).
  - **Effectful decoding:** You can convert the `Either` to an Effect using `Effect.fromEither`. For example:

    ```ts
    const parseUser = (raw: unknown) =>
      Effect.fromEither(Schema.decodeUnknownEither(UserSchema, raw)).pipe(
        Effect.mapError(
          (err) => new InvalidInput({ issues: Schema.formatErrors(err) })
        )
      );
    ```

    We wrap the decode result in an Effect, and map a failure to our `InvalidInput` error (using `Schema.formatErrors` to get human-readable issues). This gives an `Effect<never, InvalidInput, User>`.

  If multiple fields are wrong, Schema’s default is to collect **all errors** (one per field) into a single `ParseError` structure. We often convert that to our domain error. This means **error accumulation** at input boundaries is automatic, which is great for reporting all issues to users at once.

- **Using Schema for Config:** Effect v3 can integrate Schema with configuration loading (from environment variables, JSON files, etc.). We use `Config` module (with `Config.Provider`) in conjunction with Schema definitions for complex configuration. For example, you might see code like:

  ```ts
  import { Config } from 'effect';
  const AppConfigSchema = Schema.struct({
    PORT: Schema.Number,
    DEBUG: Schema.Boolean,
  });
  const AppConfig = Config.fromEnv(AppConfigSchema); // constructs a Layer that loads env vars into this schema
  ```

  This will produce a Layer providing a `AppConfig` service (Context tag) with parsed config, or fail with a detailed error if any env var is missing or invalid. **Codex note:** When adding new config values, update the schema and where it’s used. Use `Config.fromEnv` or `Config.fromJson` as appropriate, and provide the layer in `main` or tests.

- **JSON Serialization:** The Schema module can also derive JSON encoders/decoders. If implementing features like storing to disk or sending over network, prefer using the schema’s encoder/decoder to ensure consistency. For instance, `Schema.encodeToJSON(UserSchema, user)` will produce a JSON-friendly representation according to the schema (and likewise `decode` from JSON).

Effect Schema helps maintain **runtime type safety** in our app – a crucial complement to TypeScript’s compile-time types. Always validate inputs at the boundary and convert them into well-typed domain objects before processing further.

### 5. Concurrency and Parallelism

Effect’s concurrency model is based on **fibers** (lightweight cooperatively-scheduled threads of execution). By default, Effects are executed sequentially relative to each other unless you explicitly introduce concurrency. Guidelines:

- **Running in Parallel:** To run multiple effects in parallel, you have options:

  - Use `Effect.all([...])` on a collection of effects. By default this will run them in parallel (unbounded concurrency) and _fail fast_ – if any effect fails, the whole thing fails and the other fibers are interrupted. If you want to limit concurrency, provide `options: { concurrency: n }` or use `Effect.all(..., { concurrency: "unbounded" })` explicitly for clarity. If you want to _not_ fail fast, see “Error modes” below.
  - Use `Effect.fork` / `Effect.forkDaemon` to manually fork a fiber. This returns a `Fiber` handle immediately. You can then compose fibers (join them, await their result, or fire-and-forget). For example:

    ```ts
    const fiberA = yield * $(someEffect.fork());
    const fiberB = yield * $(otherEffect.fork());
    // Both running concurrently now.
    const resultA = yield * $(fiberA.join());
    const resultB = yield * $(fiberB.join());
    ```

    This is more verbose but gives fine-grained control (e.g., you can race fibers or supervise them).

  - Use `Effect.race` or `Effect.raceAll` to race multiple effects and take the first to succeed or fail.

- **Structured Concurrency:** Prefer high-level combinators (`Effect.all`, `Effect.race`, streams, etc.) over manual fork/join where possible. They handle cancellation and error propagation correctly by default. For instance, if one effect in `Effect.all` fails, the others are automatically interrupted to avoid leaking work.

- **Error Handling in Parallel:** As mentioned, `Effect.all` defaults to _fail-fast_. If you want to collect results including errors, you have two modes:

  - **Either Mode:** `Effect.all(effects, { mode: "either" })` will succeed with an `Either[]` for each result, where each element is `Right(value)` or `Left(error)`. This way, no failure short-circuits the others – you get to handle all errors afterwards.
  - **Validate Mode:** `Effect.all(effects, { mode: "validate" })` will **fail** if any fail, but not until all are done. Instead of failing fast, it waits, gathers all failures into a combined `Cause` (typically a `Fail` cause containing a list of errors), and yields that as the error of the whole Effect. We use this mode mostly for _independent validations_ where we want to report all errors at once.

- **Fibers and Daemons:** If launching background processes that should not cancel even if the parent fiber cancels, use `forkDaemon`. Regular `fork` will tie the child fiber’s lifetime to its parent (cancel on parent cancel). Daemon fibers must be managed carefully (they can outlive requests, etc.). In this project, long-lived background fibers (if any) are usually started in the main layer and supervised.

- **Resource Contention:** Use Effect’s coordination primitives when needed:

  - `Semaphore` for limiting concurrency (e.g., only allow N effects to run a critical section at a time).
  - `Queue` and `Hub` (Pub/Sub) for message passing between fibers.
  - `Deferred` for one-time signals between fibers (like a promise that an external fiber can resolve).
  - These are all in the `effect` module (e.g., `Effect.makeSemaphore`, `Effect.makeQueue` etc.) and integrate with fibers (they are interruption-safe, etc.).

When writing new code that needs concurrency, choose the simplest abstraction that solves the problem and handle cancellation properly. **Codex tip:** if a function spawns fibers via `fork`, ensure to join or otherwise handle their termination, or document why leaking fibers is acceptable.

### 6. Resource Management and Finalization

Effect v3 ensures that resources are properly released even when programs are interrupted or errors occur, as long as you use the provided patterns:

- **Bracket pattern:** Use `Effect.acquireRelease(acquire, release)` when you need to safely acquire and release a resource within an Effect. This returns an Effect that will run `acquire` (to get the resource), then your usage code, and finally run `release` regardless of success, failure, or cancellation. For example:

  ```ts
  const withFile = (
    path: string,
    body: (file: FileHandle) => Effect.Effect<never, Error, A>
  ) =>
    Effect.acquireRelease(
      Effect.tryPromise(() => fs.promises.open(path, 'r')), // acquire file
      (file, exit) =>
        Effect.sync(() => {
          file.closeSync();
        }) // release file
    ).pipe(Effect.flatMap(body));
  ```

  Here `exit` (of type `Exit`) in the release can be inspected to know if the using code succeeded or not, if needed. Usually, just ensure release runs.

- **`Scope` and `Effect.scoped`:** For more dynamic cases, `Effect.scoped` can be used to manage lifetimes via a Scope. In our project, we mostly use `Layer.scoped` which internally uses scopes to tie resource lifetimes to the layer’s lifetime. For example, a database connection pool could be provided with `Layer.scoped(Database, Effect.acquireRelease(connect, disconnect))`. When that layer is provided to an Effect, the pool is opened, and when the Effect (or fiber) ends, the pool is closed automatically.

- **Finalizers:** You can attach finalizers to any Effect using `Effect.addFinalizer(finalizerEffect)`. This is useful if a piece of logic has some cleanup that must run no matter what. For instance, if you spawn a fiber and need to cancel it when the parent is done:

  ```ts
  Effect.gen(function* ($) {
    const fiber = yield* $(longRunningTask.fork());
    yield* $(Effect.addFinalizer(() => fiber.interrupt()));
    // ... continue, fiber will be interrupted when this scope exits ...
  });
  ```

- **Using `runMain`:** As noted, always prefer `BunRuntime.runMain(program)` for the top-level program execution. It wraps `Effect.run` with logic to catch termination signals and run finalizers. If you used `Effect.runPromise` or similar at top-level, Ctrl+C could leave resources hanging; `runMain` solves that by interrupting fibers and waiting for finalizers on shutdown. For different runtimes, there are equivalents (`NodeRuntime.runMain`, `BrowserRuntime.runMain`, etc.) – but since we are on Bun (which is basically Node environment), `BunRuntime.runMain` is the correct choice.

In summary, when acquiring any external resource (files, network connections, threads, etc.), ensure you either use a Layer or `acquireRelease` to manage it. Never rely on `finally` in raw try/catch or process `exit` handlers – let Effect manage it, as it will even handle fiber cancellations that traditional try/finally might miss.

### 7. Code Style and Patterns

To maintain consistency and harness Effect’s advantages, keep in mind:

- **Prefer Pipeable style:** Use `something.pipe(Effect.operator(...))` or static `Effect.func(something, ...)` as appropriate. The codebase leans toward pipeline style for readability when multiple operations are chained. For example:

  ```ts
  return Effect.succeed(value).pipe(
    Effect.filterOrElse(Predicate.isString, (v: number) =>
      Effect.fail(new NotAString(v))
    ),
    Effect.map((str) => str.trim())
  );
  ```

  is preferred over nested calls. This style makes the transformation steps clear and avoids deeply nested arrow functions.

- **Avoid tacit/point-free usage:** Explicitly declare function parameters instead of using point-free tricks that can confuse type inference. For instance, **do not** write `Effect.map(SomeFunction)` directly – instead, use `Effect.map((x) => SomeFunction(x))`. Tacit usage can lead to type inference issues and is less clear in stack traces. We err on clarity over brevity.

- **No excessive nesting:** If you find yourself nesting many lambda callbacks (e.g., `.pipe(Effect.flatMap(x => {... Effect.flatMap(y => { ... })}))`), consider switching to `Effect.gen` for clarity or breaking the logic into smaller helper functions. Deep nesting can become hard to follow; a generator or intermediate named effects improve readability.

- **Use Pattern Matching utilities:** For complex branching on data, consider using `Effect.match` or the `match` utility from `effect/Match` (if included) rather than long if-else chains. For example, to handle an `Either` inside an Effect:

  ```ts
  someEitherEffect.pipe(
    Effect.flatMap(
      Either.match({
        onLeft: (err) => Effect.fail(mapError(err)),
        onRight: (ok) => Effect.succeed(ok),
      })
    )
  );
  ```

  This is more expressive than manual if-checks on tag.

- **Immutable Data (`Data` module):** We often use the `Data` module for creating **value objects** that have structural equality. If you need to create classes or objects primarily for carrying data (especially errors, as shown above, or result types), consider using `Data.TaggedClass` or `Data.struct`. These ensure the objects have proper `Hash` and `Equal` implementations for use in collections or comparisons. For example, an `Order` entity could be `class Order extends Data.TaggedClass<{ id: string; total: number }>() {}` which gives you value-based equality out of the box.

- **Logging and Tracing:** The project uses Effect’s built-in logging. The default logger (`Logger` service) is provided by the runtime (printing to console with log level control). Use `Effect.log`, `Effect.logInfo`, `Effect.logError`, etc., to produce logs within effects – these respect the log level and attach fiber context (like fiber id, timestamp) automatically. Avoid using `console.log` directly; instead import `Console` from `"effect"` and use `Console.log` which returns an Effect you can compose. For example: `yield* $(Console.log("Starting process"))` inside a gen. If you need structured logs or to attach contextual data, use `Effect.addLogger` or consider `Effect.logSpan` for tracing spans. _Codex:_ When adding logging, ensure it’s done in the effect context (so it can be captured/filtered by the logging service).

- **Metrics:** If the codebase uses Effect’s Metrics (check for any `Metrics.counter`, etc.), follow the established pattern (usually creating a Metric at module load and updating it via `Effect.metricIncrement` in code). The agent should update metrics in tandem with new features if relevant (e.g., increment a counter when a certain event happens).

- **Testing utilities:** Use `TestClock` if writing tests for time-dependent logic (it allows manual advancing of time). Use `Effect.provide` to inject test versions of services (e.g., a stub Layer) to isolate behavior. There is a `DefaultServices` layer which provides things like live Clock, Console, Random, etc.. In tests, you can override any of these with deterministic versions (e.g., `Layer.succeed(Random, { next: Effect.succeed(0.5) })` to fix randomness). Many Effect test patterns involve providing a combination of `DefaultServices` and overrides.

### 8. Testing Approach

We use Bun’s test runner (`bun:test`) for unit and integration tests. Each test file typically imports `it`, `describe`, and `expect` from `"bun:test"`.

**Writing Tests with Effect:** Tests are often async functions that await Effect results:

```ts
import { it, expect } from 'bun:test';

it('should compute foo correctly', async () => {
  const result = await Effect.runPromise(computeFooEffect(42));
  expect(result).toBe(84);
});
```

This allows the Effect to execute. If the Effect can fail, you might use `runPromiseExit` to get an `Exit` and assert on failure cases without throwing, but in many cases it’s fine to let it throw if it fails (which will fail the test). The `expect` API in Bun is synchronous, so if you need to assert an **error is thrown**, you cannot use Jest’s `.rejects` style (Bun’s expect doesn’t support it yet). Instead, capture the exit:

```ts
const exit = await Effect.runPromiseExit(effectThatFails);
expect(exit._tag).toBe('Failure');
```

Or use try/catch in the test function.

**Test organization:** Follow BDD style descriptions. Make liberal use of **service injection** to isolate behavior:

- If a function under test relies on a context service (say a DB or network call), provide a stub layer in the test that simulates the behavior. For example:

  ```ts
  const FakeDB = Layer.succeed(Database, {
    query: (_) => Effect.succeed({ result: 'fake' }),
  });
  await Effect.runPromise(
    program.pipe(Effect.provide(FakeDB), Effect.provide(SomeOtherDependency))
  );
  ```

  Then assert the results. By providing fakes, tests remain fast and deterministic.

- Use `TestClock.adjust(ms)` (after providing `TestClock` from `"effect/test"` if needed) to simulate the passage of time in tests for scheduled/retry logic.

- All tests should **run green (pass)** and ideally be **idempotent** (no reliance on external state unless that’s the purpose of the test). Codex should run `bun test` after making changes and ensure all tests pass before considering a task done.

### 9. Workflow for Codex Agent

To help the Codex agent operate effectively on this repository, here’s a step-by-step approach it should follow when implementing changes or new features:

1. **Understand the Task:** Parse the natural language request or issue. Identify what needs to be changed or created (new module, modify logic, fix bug, etc.). If it relates to a particular service or layer, locate that in the codebase (filenames often match service names).

2. **Locate Relevant Code:** Use the project structure knowledge to open the relevant files. For example, if the task is "Add a new configuration for timeout", open the config module or wherever configuration is defined (likely a schema or constants file). Use the context: The `AGENTS.md` and repository docs (like README or code comments) might have pointers.

3. **Plan the Implementation:** Break down the solution:

   - Determine which **services or layers** will be involved. Will you add a new service? Use an existing one? (If new, create a Context tag and define its interface in an appropriate file.)
   - Determine the **Effect flow**: sequence of operations, any parallelism needed, error cases to handle.
   - Decide where to place new code. Keep business logic in pure functions or small Effects that can be composed. Keep side-effectful interactions at the edges (in layers or specific functions).
   - Consider **testing**: plan how to verify the new code. Write tests as you implement to drive correct behavior.

4. **Write Code Iteratively:**

   - Create or modify files with the new code. Follow the coding and style guidelines above.
   - **Always keep the code compiling:** Codex should frequently check types. Leverage TypeScript’s feedback. If using Codex CLI, it will automatically run `tsc` or similar on changes; pay attention to type errors and fix them.
   - **Ensure Effect correctness:** e.g., if an Effect returns a value that will be provided to a layer, make sure the types align exactly with the Context’s `Service` shape. If using `Effect.gen`, ensure every `yield*` is properly `$`-wrapped.
   - Add **comments** where needed to clarify complex logic, for the benefit of future maintainers (and to show reasoning, though Codex tends to produce minimal comments unless instructed).

5. **Update/Write Tests:** If implementing a new feature, write corresponding tests in the `tests/` directory (or alongside implementation, depending on project convention). Use the Effect testing patterns described. The agent should verify that tests cover expected behavior and edge cases.

6. **Run Tests and Linting:** After implementation, run `bun test` to execute the test suite. The Codex CLI can do this automatically (and even iterate fixes until tests pass). Ensure **all tests pass** (not just the new ones). If any failures occur, debug by reading error logs or stack traces (Effect errors have pretty descriptive causes and stack traces due to fibers). Fix issues and re-run.

   - Also run `bun run lint` or `bun fmt` if the project has linting/formatting commands configured (check `package.json` scripts). Coding style should adhere to project conventions (semi-standard TS style plus the functional patterns given; no trailing spaces, etc.). If no explicit lint step, ensure code is formatted similarly to existing code.

7. **Commit Changes with Clear Message:** When tests are green, prepare to commit. The commit message should be clear about what was done (e.g., “Add timeout configuration to API requests” or “Fix bug in OrderService calculation”). If using Codex CLI in auto-mode, it might auto-commit based on the prompt given. In manual mode, you craft the commit message. In either case, prefer conventional commit style if the repository uses it (e.g., prefix with `feat:`, `fix:`, etc., as appropriate).

8. **Repeat if Multiple Steps:** If the task is complex, implement in small increments, running tests frequently. The Codex agent can handle iterative prompts like “Now optimize X” or “Add tests for Y” as separate steps, each time ensuring everything stays green.

**Important:** Always keep the **Effect semantics** in mind. For example, if adding a new feature that calls an external API, do it through a service interface so it can be mocked in tests (don’t embed a fetch call deep inside a pure function without making it an Effect). If modifying a layer, ensure any new resource is properly released in that layer’s scope.

By following these steps, you will maintain the project’s integrity and produce reliable, idiomatic code. The emphasis is on type-safe, effectful implementations with comprehensive error handling and test coverage, which aligns with both Effect’s philosophy and robust software engineering practices.

## Example: End-to-End Feature Addition

To illustrate how you should approach a real task, consider an example: _“Implement a new caching service to memoize results of an expensive computation, with a configurable TTL (time-to-live) for cache entries.”_

**Step 1: Plan** – We decide to create a new service `CacheService` with operations `get(key)` and `set(key, value)`. It will require a clock (for TTL) and run in-memory for simplicity. We also add a config for the TTL duration.

**Step 2: Define Service** – In `services/CacheService.ts`:

```ts
import { Context, Effect, Option, Data, Ref } from 'effect';

// Define a Cache entry type with value and expiration time
interface CacheEntry<V> extends Data.Case {
  value: V;
  expiresAt: number; // epoch millis
}
const CacheEntry = Data.tagged<CacheEntry<unknown>>('CacheEntry');

// Service interface
export interface CacheService {
  readonly get: <V>(
    key: string
  ) => Effect.Effect<never, never, Option.Option<V>>;
  readonly set: <V>(
    key: string,
    value: V,
    ttlMs: number
  ) => Effect.Effect<never, never, void>;
}
export const CacheService = Context.Tag<CacheService>();
```

_(We choose to use a `Ref` for storage when implementing, to have mutable state in a safe way.)_

**Step 3: Implement Layer** – Also in `CacheService.ts` (or a separate file):

```ts
import { Layer, Effect, Option, Ref, Clock } from 'effect';

const makeCacheLayer = Effect.gen(function* ($) {
  // Use a Ref (mutable reference in Effect) to hold the cache map
  const cacheRef = yield* $(
    Ref.make<ReadonlyMap<string, CacheEntry<unknown>>>(new Map())
  );

  // Function to cleanup expired entries (could be called on each get/set)
  const purgeExpired = Effect.sync(() =>
    cacheRef.update((map) => {
      const now = Date.now();
      // Remove entries expired by now
      return new Map([...map].filter(([, entry]) => entry.expiresAt > now));
    })
  );

  const serviceImpl: CacheService = {
    get: (key) =>
      Effect.sync(() => Date.now()).pipe(
        // current time
        Effect.flatMap((now) =>
          cacheRef.get.map((map) => {
            const entry = map.get(key);
            if (!entry) return Option.none;
            if (entry.expiresAt <= now) {
              // expired, remove it and return none
              cacheRef.update((map) => {
                const updated = new Map(map);
                updated.delete(key);
                return updated;
              });
              return Option.none;
            }
            // valid
            return Option.some(entry.value as unknown);
          })
        )
      ),

    set: (key, value, ttlMs) =>
      Effect.sync(() => Date.now()).flatMap((now) =>
        cacheRef.update((map) => {
          const expiresAt = now + ttlMs;
          const newEntry = CacheEntry({ value, expiresAt });
          const newMap = new Map(map);
          newMap.set(key, newEntry);
          return newMap;
        })
      ),
  };

  return serviceImpl;
});

// Layer that provides CacheService (requires Clock if we want to use Effect.Clock instead of Date.now, but here we used Date.now directly)
export const CacheLayer = Layer.effect(CacheService, makeCacheLayer);
```

_(This example uses Date directly for brevity; ideally, we’d use `Clock.currentTimeMillis` from Effect’s default Clock service for testability, but we can assume real-time is acceptable here.)_

**Step 4: Use the Service** – Suppose an expensive computation exists in `ExpensiveService.ts`:

```ts
import { Effect, Option } from 'effect';
import { CacheService } from './CacheService';
import { ExpensiveService } from './ExpensiveService';

export const cachedCompute = (input: string) =>
  Effect.gen(function* ($) {
    const cache = yield* $(CacheService);
    const cachedResult = yield* $(cache.get<string>(input));
    if (Option.isSome(cachedResult)) {
      return cachedResult.value; // return cached value
    }
    // Not in cache, compute and then cache it
    const result = yield* $(ExpensiveService.compute(input));
    // Assuming TTL from config or constant:
    yield* $(cache.set(input, result, 60000)); // cache for 60s
    return result;
  });
```

**Step 5: Provide Layer in main** – In `Main.ts` or wherever layers are composed:

```ts
program.pipe(
  Effect.provide(CacheLayer),
  // ... other layers ...
  BunRuntime.runMain
);
```

**Step 6: Testing** – In `CacheService.test.ts`:

```ts
import { it, expect } from 'bun:test';
import { Effect, Option } from 'effect';
import { CacheLayer, CacheService } from '../services/CacheService';

it('caches values and respects TTL', async () => {
  // Provide the CacheService layer
  const cache = CacheService; // tag
  // 1. Set a value
  await Effect.runPromise(
    Effect.provide(CacheLayer)(
      cache
        .get('foo') // should initially be none
        .flatMap((res1) => {
          expect(res1).toEqual(Option.none());
          // set the cache
          return cache.set('foo', 123, 50).andThen(cache.get<number>('foo'));
        })
        .flatMap((res2) => {
          expect(res2).toEqual(Option.some(123));
          // wait for TTL to expire
          return Effect.sleep('60 millis').andThen(cache.get<number>('foo'));
        })
        .map((res3) => {
          // After 60ms (>50ms TTL), should be none
          expect(res3).toEqual(Option.none());
        })
    )
  );
});
```

This example shows how you should implement a feature following our patterns: a new service with a Context tag, a Layer to provide it, usage of Effect APIs (`Ref`, `Option`, `Effect.sleep` for test delays), and injection of the layer in tests and main. Throughout, we ensure:

- No global state (cache is in a Ref, within the layer scope).
- Proper typing (e.g., `cache.get<string>` returns `Effect<never, never, Option<string>>`).
- Errors: in this cache example, we didn’t have failing conditions; if we did (like if setting could fail), we’d model that.
- Test uses the provided layer to isolate the CacheService.

## Guidelines & Reference

Adhere to the following guidelines.

### Guidelines

Maintain the codebase effectively by doing the following:

- Implement features using **Effect’s idiomatic patterns** (Layers for DI, `Effect.gen` for sequencing, combinators for error handling and concurrency).
- **Test thoroughly** using Bun’s runner and Effect’s test utilities.
- Ensure all code remains **pure, type-safe, and composable**, leveraging the full power of Effect v3’s runtime.

Reference AGENTS.md on how to structure code changes, how to run and verify code (always run `bun test` after changes), and how to phrase solutions in terms of Effect’s abstractions.

Constraints:

- Code must compile, run, and pass tests.
- Follow the latest, greatest, most future-forward best practices for:
  - orthagonality;
  - modularity;
  - unidirectionality; and
  - maximum cohesion, minimum coupling

Remember: **The best code is often no code.**

! Before beginning:

For any problem, always start by searching if the solution already exists in:

1. Current codebase patterns
2. Standard library
3. Existing dependencies
4. Well-tested external libraries

Search for a solution to any given problem starting by checking 1 (current codebase patterns), moving to 2, then 3, and, finally, checking 4 (well-tested external libraries). If you can’t find a solution in the current codebase patterns, move onto checking the standard library and so on.

Engineer all code from a mathematical perspective, a philosophical perspective, a practical perspective, and an engineering perspective. Adopt the following behavioral patterns and strategies:

- Follow existing patterns until you have compelling reasons to diverge
- Make the change easy, then make the easy change
- Write code that's easy to delete, not easy to extend
- Measure twice, cut once. grep thrice, assume never
- Make illegal states unrepresentable, then representation becomes documentation
- Model the problem domain, not the solution space. Let data drive the design
- Every runtime check is a missed compile-time opportunity. Push invariants into types
- Design ADTs for what they prevent, not just what they permit
- Prefer many small ADTs over few large ones. Compose simple types into complex behaviors
- Think in transformations, not mutations. Data flows through functions, not into them
- Let exhaustiveness checking be your first test suite. If it compiles, it's halfway correct
- The best error handling is the error that can't exist. Use types to eliminate error cases
- Parse, don't validate. Transform uncertain data into certain types at the boundaries
- Make the correct path the only path. Wrong usage should be a type error, not a runtime error

The following sections pertain to references.

### Effect Documentation for LLMs

> Effect is a powerful TypeScript library designed to help developers easily create complex, synchronous, and asynchronous programs.

### Find Docs for Effect

- [Batching](https://effect.website/docs/batching/): Optimize performance by batching requests and reducing redundant API calls, enhancing efficiency in data fetching and processing.
- [Configuration](https://effect.website/docs/configuration/): Efficiently manage application configurations with built-in types, flexible providers, and advanced features like defaults, validation, and redaction.
- [Introduction to Runtime](https://effect.website/docs/runtime/): Learn how Effect's runtime system executes concurrent programs, manages resources, and handles configuration with flexibility and efficiency.
- [API Reference](https://effect.website/docs/additional-resources/api-reference/): API docs covering tools, integrations, and functional programming features.
- [Coming From ZIO](https://effect.website/docs/additional-resources/coming-from-zio/): Key differences between Effect and ZIO.
- [Effect vs fp-ts](https://effect.website/docs/additional-resources/effect-vs-fp-ts/): Comparison of Effect and fp-ts, covering features like typed services, resource management, concurrency, and stream processing.
- [Effect vs Promise](https://effect.website/docs/additional-resources/effect-vs-promise/): Comparison of Effect and Promise, covering features like type safety, concurrency, and error handling.
- [Myths About Effect](https://effect.website/docs/additional-resources/myths/): Debunking common misconceptions about Effect's performance, complexity, and use cases.
- [Getting Started](https://effect.website/docs/ai/getting-started/): Learn how to use Effect's AI integration packages to define LLM interactions
- [Introduction to Effect AI](https://effect.website/docs/ai/introduction/): Introduction to Effect's AI integrations, a set of packages for interacting with large language models
- [Execution Planning](https://effect.website/docs/ai/planning-llm-interactions/): Learn how to create structured execution plans for your LLM interactions
- [Tool Use](https://effect.website/docs/ai/tool-use/): Equip your LLM interactions with the ability to use tools to perform specific actions
- [Equivalence](https://effect.website/docs/behaviour/equivalence/): Define and customize equivalence relations for TypeScript values.
- [Order](https://effect.website/docs/behaviour/order/): Compare, sort, and manage value ordering with customizable tools for TypeScript.
- [Cache](https://effect.website/docs/caching/cache/): Optimize performance with cache for concurrent, compositional, and efficient value retrieval.
- [Caching Effects](https://effect.website/docs/caching/caching-effects/): Efficiently manage caching and memoization of effects with reusable tools.
- [Branded Types](https://effect.website/docs/code-style/branded-types/): Use branded types to enforce type safety and refine data in TypeScript.
- [Simplifying Excessive Nesting](https://effect.website/docs/code-style/do/): Simplify nested code with Do simulation and generators.
- [Dual APIs](https://effect.website/docs/code-style/dual/): Explore data-first and data-last variants of dual APIs in the Effect ecosystem.
- [Guidelines](https://effect.website/docs/code-style/guidelines/): Best practices for running Effect applications and ensuring safe, explicit coding styles.
- [Pattern Matching](https://effect.website/docs/code-style/pattern-matching/): Simplify complex branching with pattern matching using the Match module.
- [Basic Concurrency](https://effect.website/docs/concurrency/basic-concurrency/): Manage and control effect execution with concurrency, interruptions, and racing.
- [Deferred](https://effect.website/docs/concurrency/deferred/): Master asynchronous coordination with Deferred, a one-time variable for managing effect synchronization and communication.
- [Fibers](https://effect.website/docs/concurrency/fibers/): Understand fibers in Effect, lightweight virtual threads enabling powerful concurrency, structured lifecycles, and efficient resource management for responsive applications.
- [Latch](https://effect.website/docs/concurrency/latch/): A Latch synchronizes fibers by allowing them to wait until a specific event occurs, controlling access based on its open or closed state.
- [PubSub](https://effect.website/docs/concurrency/pubsub/): Effortless message broadcasting and asynchronous communication with PubSub in Effect.
- [Queue](https://effect.website/docs/concurrency/queue/): Learn how to use Effect's Queue for lightweight, type-safe, and asynchronous workflows with built-in back-pressure.
- [Semaphore](https://effect.website/docs/concurrency/semaphore/): Learn to use semaphores in Effect for precise control of concurrency, managing resource access, and coordinating asynchronous tasks effectively.
- [Error Accumulation](https://effect.website/docs/error-management/error-accumulation/): Learn to manage errors effectively in Effect workflows with tools for sequential execution, error accumulation, and result partitioning.
- [Error Channel Operations](https://effect.website/docs/error-management/error-channel-operations/): Explore operations on the error channel in Effect, including error mapping, filtering, inspecting, merging, and flipping channels.
- [Expected Errors](https://effect.website/docs/error-management/expected-errors/): Learn how Effect manages expected errors with precise error tracking, short-circuiting, and powerful recovery techniques.
- [Fallback](https://effect.website/docs/error-management/fallback/): Learn techniques to handle failures and implement fallback mechanisms in Effect programs.
- [Matching](https://effect.website/docs/error-management/matching/): Learn to handle success and failure cases in Effect programs with tools for pattern matching, value ignoring, side effects, and precise failure analysis.
- [Parallel and Sequential Errors](https://effect.website/docs/error-management/parallel-and-sequential-errors/): Handle concurrent and sequential errors in Effect programs, capturing multiple failures and ensuring robust error management in concurrent and sequential workflows.
- [Retrying](https://effect.website/docs/error-management/retrying/): Enhance resilience with Effect's retrying strategies, enabling robust handling of transient failures with customizable retry policies and fallback mechanisms.
- [Sandboxing](https://effect.website/docs/error-management/sandboxing/): Master error handling in Effect with sandboxing, enabling detailed inspection and recovery from failures, defects, and interruptions.
- [Two Types of Errors](https://effect.website/docs/error-management/two-error-types/): Learn how Effect differentiates between expected and unexpected errors to enhance error tracking and recovery.
- [Timing Out](https://effect.website/docs/error-management/timing-out/): Set time limits on operations with Effect, ensuring tasks complete within specified durations and customizing behavior for timeouts.
- [Unexpected Errors](https://effect.website/docs/error-management/unexpected-errors/): Understand how Effect handles unexpected errors with tools to manage defects, terminate execution, and selectively recover from critical failures.
- [Yieldable Errors](https://effect.website/docs/error-management/yieldable-errors/): Explore yieldable errors in Effect programming for seamless error handling in generator functions using custom and tagged error constructors.
- [Building Pipelines](https://effect.website/docs/getting-started/building-pipelines/): Learn to create modular, readable pipelines for composing and sequencing operations in Effect, enabling clear and efficient data transformations.
- [Control Flow Operators](https://effect.website/docs/getting-started/control-flow/): Learn to control execution flow in Effect programs using advanced constructs for conditional branching, iteration, and combining effects seamlessly.
- [Create Effect App](https://effect.website/docs/getting-started/create-effect-app/): Quickly set up a new Effect application with a customizable template or example, streamlining your development start.
- [Creating Effects](https://effect.website/docs/getting-started/creating-effects/): Learn to create and manage effects for structured handling of success, failure, and side effects in synchronous and asynchronous workflows.
- [Importing Effect](https://effect.website/docs/getting-started/importing-effect/): Get started with Effect by installing the package and importing essential modules and functions for building type-safe, modular applications.
- [Installation](https://effect.website/docs/getting-started/installation/): Set up a new Effect project across different platforms like Node.js, Deno, Bun, and Vite + React with step-by-step installation guides.
- [Introduction](https://effect.website/docs/getting-started/introduction/): Explore Effect, a TypeScript library for building scalable, maintainable, and type-safe applications with advanced concurrency, error handling, and resource management.
- [Running Effects](https://effect.website/docs/getting-started/running-effects/): Learn how to execute effects in Effect with various functions for synchronous and asynchronous execution, including handling results and managing error outcomes.
- [The Effect Type](https://effect.website/docs/getting-started/the-effect-type/): Understand the Effect type in the Effect ecosystem, which models immutable, lazy workflows with type-safe success, error, and requirement handling for effectful computations.
- [Using Generators](https://effect.website/docs/getting-started/using-generators/): Learn how to use generators in Effect for writing effectful code, enhancing control flow, handling errors, and simplifying asynchronous operations with a syntax similar to async/await.
- [Why Effect?](https://effect.website/docs/getting-started/why-effect/): Discover how Effect transforms TypeScript programming by using the type system to track errors, context, and success, offering practical solutions for building reliable, maintainable applications.
- [BigDecimal](https://effect.website/docs/data-types/bigdecimal/): The BigDecimal data type represents arbitrary-precision decimal numbers.
- [Cause](https://effect.website/docs/data-types/cause/): Comprehensive error analysis with Cause in Effect - track failures, defects, and interruptions with precise details.
- [Chunk](https://effect.website/docs/data-types/chunk/): Learn about Chunk, a high-performance immutable data structure in Effect, offering efficient operations like concatenation, slicing, and conversions.
- [Data](https://effect.website/docs/data-types/data/): Define immutable data structures, ensure equality, and manage errors seamlessly with Effect's Data module.
- [Duration](https://effect.website/docs/data-types/duration/): Work with precise time spans using Effect's Duration, supporting creation, comparison, and arithmetic operations for efficient time handling.
- [DateTime](https://effect.website/docs/data-types/datetime/): Work with precise points in time using Effect's DateTime, supporting creation, comparison, and arithmetic operations for efficient time handling.
- [Either](https://effect.website/docs/data-types/either/): Represent exclusive values as Left or Right with the Either data type, enabling precise control flow in computations.
- [Exit](https://effect.website/docs/data-types/exit/): Represent the result of an Effect workflow with Exit, capturing success values or failure causes.
- [HashSet](https://effect.website/docs/data-types/hash-set/): Learn about HashSet data structures - both immutable and mutable variants.
- [Option](https://effect.website/docs/data-types/option/): Represent optional values with Option, supporting presence (Some) or absence (None) and seamless operations like mapping, combining, and pattern matching.
- [Redacted](https://effect.website/docs/data-types/redacted/): Securely handle sensitive data with the Redacted module, preventing accidental exposure in logs while supporting safe value access and comparison.
- [Micro for Effect Users](https://effect.website/docs/micro/effect-users/): Learn about the Micro module, a lightweight alternative to Effect for reducing bundle size while maintaining compatibility and functionality for TypeScript applications.
- [Logging](https://effect.website/docs/observability/logging/): Discover Effect's logging utilities for dynamic log levels, custom outputs, and fine-grained control over logs.
- [Getting Started with Micro](https://effect.website/docs/micro/new-users/): Learn how to get started with the Micro module, a lightweight alternative to Effect for reducing bundle size while maintaining essential functionality in TypeScript applications.
- [Metrics in Effect](https://effect.website/docs/observability/metrics/): Effect Metrics provides powerful monitoring tools, including counters, gauges, histograms, summaries, and frequencies, to track your application's performance and behavior.
- [Supervisor](https://effect.website/docs/observability/supervisor/): Effect's Supervisor manages fiber lifecycles, enabling tracking, monitoring, and controlling fibers' behavior within an application.
- [Tracing in Effect](https://effect.website/docs/observability/tracing/): Explore tracing in distributed systems to track request lifecycles across services using spans and traces for debugging and performance optimization.
- [Command](https://effect.website/docs/platform/command/): Learn how to create, run, and manage commands with custom arguments, environment variables, and input/output handling in Effect.
- [FileSystem](https://effect.website/docs/platform/file-system/): Explore file system operations for reading, writing, and managing files and directories in Effect.
- [Introduction to Effect Platform](https://effect.website/docs/platform/introduction/): Build cross-platform applications with unified abstractions for Node.js, Deno, Bun, and browsers using @effect/platform.
- [KeyValueStore](https://effect.website/docs/platform/key-value-store/): Manage key-value pairs with asynchronous, consistent storage, supporting in-memory, file system, and schema-based implementations.
- [Path](https://effect.website/docs/platform/path/): Perform file path operations such as joining, resolving, and normalizing across platforms.
- [PlatformLogger](https://effect.website/docs/platform/platformlogger/): Log messages to a file using the FileSystem APIs.
- [Runtime](https://effect.website/docs/platform/runtime/): Run your program with built-in error handling and logging.
- [Terminal](https://effect.website/docs/platform/terminal/): Interact with standard input and output to read user input and display messages on the terminal.
- [Default Services](https://effect.website/docs/requirements-management/default-services/): Learn about the default services in Effect, including Clock, Console, Random, ConfigProvider, and Tracer, and how they are automatically provided for your programs.
- [Layer Memoization](https://effect.website/docs/requirements-management/layer-memoization/): Learn how layer memoization optimizes performance in Effect by reusing layers and controlling their instantiation.
- [Managing Layers](https://effect.website/docs/requirements-management/layers/): Learn how to use layers in Effect to manage service dependencies and build efficient, clean dependency graphs for your applications.
- [Managing Services](https://effect.website/docs/requirements-management/services/): Learn how to manage reusable services in Effect, handle dependencies efficiently, and ensure clean, decoupled architecture in your applications.
- [Introduction](https://effect.website/docs/resource-management/introduction/): Common patterns for safe resource management
- [Scope](https://effect.website/docs/resource-management/scope/): Learn how Effect simplifies resource management with Scopes, ensuring efficient cleanup and safe resource handling in long-running applications.
- [Built-In Schedules](https://effect.website/docs/scheduling/built-in-schedules/): Explore built-in scheduling patterns in Effect for efficient timed repetitions and delays.
- [Cron](https://effect.website/docs/scheduling/cron/): Explore cron scheduling in Effect for executing actions at specific times and intervals.
- [Examples](https://effect.website/docs/scheduling/examples/): Explore practical examples for scheduling, retries, timeouts, and periodic task execution in Effect.
- [Introduction](https://effect.website/docs/scheduling/introduction/): Learn the fundamentals of scheduling in Effect, including composable recurrence patterns and handling retries and repetitions.
- [Repetition](https://effect.website/docs/scheduling/repetition/): Explore repetition in Effect for executing actions multiple times with control over retries, failures, and conditions.
- [Schedule Combinators](https://effect.website/docs/scheduling/schedule-combinators/): Learn how to combine and customize schedules in Effect to create complex recurrence patterns, including union, intersection, sequencing, and more.
- [Advanced Usage](https://effect.website/docs/schema/advanced-usage/): Learn advanced techniques for defining and extending data schemas, including recursive and mutually recursive types, optional fields, branded types, and schema transformations.
- [Schema Annotations](https://effect.website/docs/schema/annotations/): Learn how to enhance schemas with annotations for better customization, error handling, documentation, and concurrency control in your Effect-based applications.
- [Schema to Arbitrary](https://effect.website/docs/schema/arbitrary/): Generate random test data that adheres to schema constraints using Arbitrary, with options for transformations, filters, and custom generation.
- [Basic Usage](https://effect.website/docs/schema/basic-usage/): Learn to define and work with basic schemas, including primitives, literals, unions, and structs, for effective data validation and transformation.
- [Class APIs](https://effect.website/docs/schema/classes/): Learn to define and extend schemas using classes, incorporating validation, custom logic, and advanced features like equality checks and transformations.
- [Default Constructors](https://effect.website/docs/schema/default-constructors/): Create values that conform to schemas effortlessly using default constructors for structs, records, filters, and branded types, with options for validation, default values, and lazy evaluation.
- [Effect Data Types](https://effect.website/docs/schema/effect-data-types/): Transform and manage various data types with schemas for enhanced JSON serialization, including support for options, eithers, sets, maps, durations, and sensitive redacted data.
- [Schema to Equivalence](https://effect.website/docs/schema/equivalence/): Generate and customize equivalence checks for data structures based on schema definitions.
- [Error Formatters](https://effect.website/docs/schema/error-formatters/): Format and customize error messages during schema decoding and encoding using TreeFormatter or ArrayFormatter.
- [Error Messages](https://effect.website/docs/schema/error-messages/): Customize and enhance error messages for schema decoding with default, refined, and custom messages.
- [Filters](https://effect.website/docs/schema/filters/): Define custom validation logic with filters to enhance data validation beyond basic type checks.
- [Introduction to Effect Schema](https://effect.website/docs/schema/introduction/): Introduction to `effect/Schema`, a module for defining, validating, and transforming data schemas.
- [Getting Started](https://effect.website/docs/schema/getting-started/): Learn how to define schemas, extract types, and handle decoding and encoding.
- [Schema to JSON Schema](https://effect.website/docs/schema/json-schema/): Convert schema definitions into JSON Schema for data validation and interoperability.
- [Schema to Pretty Printer](https://effect.website/docs/schema/pretty/): Generate formatted string representations of values based on schemas.
- [Schema Projections](https://effect.website/docs/schema/projections/): Create new schemas by extracting and customizing the Type or Encoded components of existing schemas.
- [Schema to Standard Schema](https://effect.website/docs/schema/standard-schema/): Generate Standard Schema V1.
- [Sink Concurrency](https://effect.website/docs/sink/concurrency/): undefined
- [Schema Transformations](https://effect.website/docs/schema/transformations/): Transform and manipulate data with schema-based transformations, including type conversions, validations, and custom processing.
- [Creating Sinks](https://effect.website/docs/sink/creating/): Discover how to create and use various sinks for processing streams, including counting, summing, collecting, folding, and handling success or failure.
- [Introduction](https://effect.website/docs/sink/introduction/): Learn the role of Sink in stream processing, handling element consumption, error management, result production, and leftover elements.
- [Leftovers](https://effect.website/docs/sink/leftovers/): Learn how to handle unconsumed elements in streams, collecting or ignoring leftovers for efficient data processing.
- [Sink Operations](https://effect.website/docs/sink/operations/): Explore operations to transform, filter, and adapt sinks, enabling custom input-output handling and element filtering in stream processing.
- [Ref](https://effect.website/docs/state-management/ref/): Learn how to manage state in concurrent applications using Effect's Ref data type. Master mutable references for safe, controlled state updates across fibers.
- [SubscriptionRef](https://effect.website/docs/state-management/subscriptionref/): Learn how to manage shared state with SubscriptionRef in Effect, enabling multiple observers to subscribe to and react to state changes efficiently in concurrent environments.
- [SynchronizedRef](https://effect.website/docs/state-management/synchronizedref/): Master concurrent state management with SynchronizedRef in Effect, a mutable reference that supports atomic, effectful updates to shared state in concurrent environments.
- [Consuming Streams](https://effect.website/docs/stream/consuming-streams/): Learn techniques for consuming streams, including collecting elements, processing with callbacks, and using folds and sinks.
- [Creating Streams](https://effect.website/docs/stream/creating/): Learn various methods for creating Effect streams, from basic constructors to handling asynchronous data sources, pagination, and schedules.
- [Error Handling in Streams](https://effect.website/docs/stream/error-handling/): Learn how to handle errors in streams, ensuring robust recovery, retries, and graceful error management for reliable stream processing.
- [Introduction to Streams](https://effect.website/docs/stream/introduction/): Learn the fundamentals of streams, a powerful tool for emitting multiple values, handling errors, and working with finite or infinite sequences in your applications.
- [Operations](https://effect.website/docs/stream/operations/): Explore essential operations for manipulating and managing data in streams, including tapping, mapping, filtering, merging, and more, to effectively process and transform streaming data.
- [Resourceful Streams](https://effect.website/docs/stream/resourceful-streams/): Learn how to manage resources in streams with safe acquisition and release, finalization for cleanup tasks, and ensuring post-finalization actions for robust resource handling in streaming applications.
- [TestClock](https://effect.website/docs/testing/testclock/): Control time during testing with Effect's TestClock, simulating time passage, delays, and recurring effects without waiting for real time.
- [Equal](https://effect.website/docs/trait/equal/): Implement value-based equality checks for improved data integrity and predictable behavior in TypeScript.
- [Hash](https://effect.website/docs/trait/hash/): Optimize equality checks with efficient hashing for faster comparisons in collections like hash sets and maps.

### API Reference

- [API List](https://tim-smart.github.io/effect-io-ai/): A succint list of all functions and methods in Effect.

## Notes

- You MUST read the entire AGENTS.md file before beginning any work.