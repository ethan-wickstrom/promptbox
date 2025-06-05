## [![][1]][2] Effect.ts overview

Since v2.0.0

---

## [![][1]][3] Exports Grouped by Category

- [Caching]
  - [cached]
  - [cachedFunction]
  - [cachedInvalidateWithTTL]
  - [cachedWithTTL]
  - [once]
- [Clock]
  - [clock][4]
  - [clockWith]
  - [withClock]
  - [withClockScoped]
- [Collecting]
  - [all]
  - [allSuccesses]
  - [allWith]
  - [dropUntil]
  - [dropWhile]
  - [findFirst]
  - [head]
  - [mergeAll]
  - [reduce]
  - [reduceEffect]
  - [reduceRight]
  - [reduceWhile]
  - [replicateEffect]
  - [takeUntil]
  - [takeWhile]
- [Condition Checking]
  - [every]
  - [exists]
  - [isFailure]
  - [isSuccess]
  - [liftPredicate]
- [Conditional Operators]
  - [if]
  - [unless]
  - [unlessEffect]
  - [when]
  - [whenEffect]
  - [whenFiberRef]
  - [whenRef]
- [Config]
  - [configProviderWith]
  - [withConfigProvider]
  - [withConfigProviderScoped]
- [Console]
  - [console][5]
  - [consoleWith]
  - [withConsole]
- [Context]
  - [Service]
  - [Service (namespace)]
    - [ProhibitedType (interface)]
    - [AllowedType (type alias)]
    - [Class (type alias)]
    - [MakeService (type alias)]
    - [MakeError (type alias)]
    - [MakeContext (type alias)]
    - [MakeDeps (type alias)]
    - [MakeDepsOut (type alias)]
    - [MakeDepsE (type alias)]
    - [MakeDepsIn (type alias)]
    - [MakeAccessors (type alias)]
    - [MakeArguments (type alias)]
    - [HasArguments (type alias)]
  - [Tag]
  - [context][6]
  - [contextWith]
  - [contextWithEffect]
  - [mapInputContext]
  - [provide]
  - [provideService]
  - [provideServiceEffect]
  - [serviceConstants]
  - [serviceFunction]
  - [serviceFunctionEffect]
  - [serviceFunctions]
  - [serviceMembers]
  - [serviceOption]
  - [serviceOptional]
  - [updateService]
- [Converting Failures to Defects]
  - [orDie]
  - [orDieWith]
- [Creating Effects]
  - [async]
  - [asyncEffect]
  - [custom]
  - [die]
  - [dieMessage]
  - [dieSync]
  - [fail]
  - [failCause]
  - [failCauseSync]
  - [failSync]
  - [gen]
  - [never]
  - [promise]
  - [succeed]
  - [succeedNone]
  - [succeedSome]
  - [suspend]
  - [sync]
  - [try]
  - [tryPromise]
  - [void]
  - [withConsoleScoped]
  - [withFiberRuntime]
  - [yieldNow]
- [Delays & Timeouts]
  - [delay]
  - [sleep]
  - [timed]
  - [timedWith]
  - [timeout]
  - [timeoutFail]
  - [timeoutFailCause]
  - [timeoutOption]
  - [timeoutTo]
- [Do notation]
  - [Do]
  - [bind]
  - [bindAll]
  - [bindTo]
  - [let]
- [Error Accumulation]
  - [partition]
  - [validate]
  - [validateAll]
  - [validateFirst]
  - [validateWith]
- [Error handling]
  - [Retry (namespace)]
    - [Options (interface)]
    - [Return (type alias)]
  - [catch]
  - [catchAll]
  - [catchAllCause]
  - [catchAllDefect]
  - [catchIf]
  - [catchSome]
  - [catchSomeCause]
  - [catchSomeDefect]
  - [catchTag]
  - [catchTags]
  - [cause]
  - [eventually]
  - [ignore]
  - [ignoreLogged]
  - [parallelErrors]
  - [retry]
  - [retryOrElse]
  - [sandbox]
  - [tryMap]
  - [tryMapPromise]
  - [unsandbox]
  - [withExecutionPlan]
- [Fallback]
  - [firstSuccessOf]
  - [orElse]
  - [orElseFail]
  - [orElseSucceed]
- [Fiber Refs]
  - [getFiberRefs]
  - [inheritFiberRefs]
  - [locally]
  - [locallyScoped]
  - [locallyScopedWith]
  - [locallyWith]
  - [patchFiberRefs]
  - [setFiberRefs]
  - [updateFiberRefs]
- [Filtering]
  - [filter]
  - [filterEffectOrElse]
  - [filterEffectOrFail]
  - [filterMap]
  - [filterOrDie]
  - [filterOrDieMessage]
  - [filterOrElse]
  - [filterOrFail]
- [Guards]
  - [isEffect]
- [Interruption]
  - [allowInterrupt]
  - [checkInterruptible]
  - [disconnect]
  - [interrupt]
  - [interruptWith]
  - [interruptible]
  - [interruptibleMask]
  - [onInterrupt]
  - [uninterruptible]
  - [uninterruptibleMask]
- [Latch]
  - [Latch (interface)]
  - [makeLatch]
  - [unsafeMakeLatch]
- [Logging]
  - [annotateLogs]
  - [annotateLogsScoped]
  - [log]
  - [logAnnotations]
  - [logDebug]
  - [logError]
  - [logFatal]
  - [logInfo]
  - [logTrace]
  - [logWarning]
  - [logWithLevel]
  - [whenLogLevel]
  - [withLogSpan]
  - [withUnhandledErrorLogLevel]
- [Looping]
  - [forEach]
  - [iterate]
  - [loop]
- [Mapping]
  - [as]
  - [asSome]
  - [asSomeError]
  - [asVoid]
  - [flip]
  - [flipWith]
  - [map]
  - [mapAccum]
  - [mapBoth]
  - [mapError]
  - [mapErrorCause]
  - [merge]
  - [negate]
- [Matching]
  - [match]
  - [matchCause]
  - [matchCauseEffect]
  - [matchEffect]
- [Metrics]
  - [labelMetrics]
  - [labelMetricsScoped]
  - [metricLabels]
  - [tagMetrics]
  - [tagMetricsScoped]
  - [withMetric]
- [Models]
  - [Adapter (interface)]
  - [Blocked (interface)]
  - [Effect (interface)]
  - [EffectGenerator (interface)]
  - [EffectUnify (interface)]
  - [EffectUnifyIgnore (interface)]
  - [FunctionWithSpanOptions (interface)]
  - [LatchUnify (interface)]
  - [LatchUnifyIgnore (interface)]
  - [Tag (namespace)]
    - [ProhibitedType (interface)][7]
    - [AllowedType (type alias)][8]
    - [Proxy (type alias)]
  - [fn (namespace)]
    - [Gen (type alias)]
    - [NonGen (type alias)]
    - [Untraced (type alias)]
- [Optional Wrapping & Unwrapping]
  - [fromNullable]
  - [optionFromOptional]
  - [transposeMapOption]
  - [transposeOption]
- [Outcome Encapsulation]
  - [either]
  - [exit]
  - [option]
- [Racing]
  - [race]
  - [raceAll]
  - [raceFirst]
  - [raceWith]
- [Random]
  - [random][9]
  - [randomWith]
  - [withRandom]
  - [withRandomScoped]
- [Repetition / Recursion]
  - [Repeat (namespace)]
    - [Options (interface)][10]
    - [Return (type alias)][11]
  - [forever]
  - [repeat]
  - [repeatN]
  - [repeatOrElse]
  - [schedule]
  - [scheduleForked]
  - [scheduleFrom]
  - [whileLoop]
- [Requests & Batching]
  - [blocked]
  - [cacheRequestResult]
  - [request]
  - [runRequestBlock]
  - [step]
  - [withRequestBatching]
  - [withRequestCache]
  - [withRequestCaching]
- [Running Effects]
  - [runCallback]
  - [runFork]
  - [runPromise]
  - [runPromiseExit]
  - [runSync]
  - [runSyncExit]
- [Runtime]
  - [getRuntimeFlags]
  - [patchRuntimeFlags]
  - [runtime][12]
  - [withRuntimeFlagsPatch]
  - [withRuntimeFlagsPatchScoped]
- [Scheduler]
  - [withMaxOpsBeforeYield]
  - [withScheduler]
  - [withSchedulingPriority]
- [Scoping, Resources & Finalization]
  - [acquireRelease]
  - [acquireReleaseInterruptible]
  - [acquireUseRelease]
  - [addFinalizer]
  - [ensuring]
  - [finalizersMask]
  - [onError]
  - [onExit]
  - [parallelFinalizers]
  - [scope]
  - [scopeWith]
  - [scoped]
  - [scopedWith]
  - [sequentialFinalizers]
  - [using]
  - [withEarlyRelease]
- [Semaphore]
  - [Permit (interface)]
  - [Semaphore (interface)]
  - [makeSemaphore]
  - [unsafeMakeSemaphore]
- [Sequencing]
  - [andThen]
  - [flatMap]
  - [flatten]
  - [summarized]
  - [tap]
  - [tapBoth]
  - [tapDefect]
  - [tapError]
  - [tapErrorCause]
  - [tapErrorTag]
- [Supervision & Fibers]
  - [awaitAllChildren]
  - [daemonChildren]
  - [descriptor]
  - [descriptorWith]
  - [diffFiberRefs]
  - [ensuringChild]
  - [ensuringChildren]
  - [fiberId]
  - [fiberIdWith]
  - [fork]
  - [forkAll]
  - [forkDaemon]
  - [forkIn]
  - [forkScoped]
  - [forkWithErrorHandler]
  - [fromFiber]
  - [fromFiberEffect]
  - [supervised]
  - [transplant]
  - [withConcurrency]
- [Symbols]
  - [EffectTypeId]
  - [EffectTypeId (type alias)]
- [Synchronization Utilities]
  - [intoDeferred]
- [Tracing]
  - [annotateCurrentSpan]
  - [annotateSpans]
  - [currentParentSpan]
  - [currentSpan]
  - [fn]
  - [fnUntraced]
  - [functionWithSpan]
  - [linkSpanCurrent]
  - [linkSpans]
  - [makeSpan]
  - [makeSpanScoped]
  - [spanAnnotations]
  - [spanLinks]
  - [tracer]
  - [tracerWith]
  - [useSpan]
  - [withParentSpan]
  - [withSpan]
  - [withSpanScoped]
  - [withTracer]
  - [withTracerEnabled]
  - [withTracerScoped]
  - [withTracerTiming]
- [Type lambdas]
  - [EffectTypeLambda (interface)]
- [Zipping]
  - [zip]
  - [zipLeft]
  - [zipRight]
  - [zipWith]
- [utils]
  - [All (namespace)]
    - [EffectAny (type alias)]
    - [ReturnIterable (type alias)]
    - [ReturnTuple (type alias)]
    - [ReturnObject (type alias)]
    - [IsDiscard (type alias)]
    - [ExtractMode (type alias)]
    - [Return (type alias)][13]
  - [Effect (namespace)]
    - [Variance (interface)]
    - [VarianceStruct (interface)]
    - [Context (type alias)]
    - [Error (type alias)]
    - [Success (type alias)]
    - [AsEffect (type alias)]
  - [ap]
  - [none]
  - [replicate]

---

# [![][1]][14] Caching

## [![][1]][15] cached

Returns an effect that lazily computes a result and caches it for subsequent evaluations.

**Details**

This function wraps an effect and ensures that its result is computed only once. Once the result is computed, it is cached, meaning that subsequent evaluations of the same effect will return the cached result without re-executing the logic.

**When to Use**

Use this function when you have an expensive or time-consuming operation that you want to avoid repeating. The first evaluation will compute the result, and all following evaluations will immediately return the cached value, improving performance and reducing unnecessary work.

**Example**

```highlight
import { Effect, Console } from "effect"

let i = 1
const expensiveTask = Effect.promise<string>(() => {
  console.log("expensive task...")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`result ${i++}`)
    }, 100)
  })
})

const program = Effect.gen(function* () {
  console.log("non-cached version:")
  yield* expensiveTask.pipe(Effect.andThen(Console.log))
  yield* expensiveTask.pipe(Effect.andThen(Console.log))
  console.log("cached version:")
  const cached = yield* Effect.cached(expensiveTask)
  yield* cached.pipe(Effect.andThen(Console.log))
  yield* cached.pipe(Effect.andThen(Console.log))
})

Effect.runFork(program)
// Output:
// non-cached version:
// expensive task...
// result 1
// expensive task...
// result 2
// cached version:
// expensive task...
// result 3
// result 3
```

**See**

- `cachedWithTTL` for a similar function that includes a time-to-live duration for the cached value.
- `cachedInvalidateWithTTL` for a similar function that includes an additional effect for manually invalidating the cached value.

**Signature**

```highlight
declare const cached: <A, E, R>(self: Effect<A, E, R>) => Effect<Effect<A, E, R>>
```

[Source]

Since v2.0.0

## [![][1]][16] cachedFunction

Returns a memoized version of a function with effects, reusing results for the same inputs.

**Details**

This function creates a memoized version of a given function that performs an effect. Memoization ensures that once a result is computed for a specific input, it is stored and reused for subsequent calls with the same input, reducing the need to recompute the result.

The function can optionally take an `Equivalence` parameter to determine how inputs are compared for caching purposes.

**When to Use**

Use this function when you have a function that performs an effect and you want to avoid recomputing the result for the same input multiple times.

It’s ideal for functions that produce deterministic results based on their inputs, and you want to improve performance by caching the output.

This is particularly useful in scenarios where the function involves expensive calculations or operations that should be avoided after the first execution with the same parameters.

**Example**

```highlight
import { Effect, Random } from "effect"

const program = Effect.gen(function* () {
  const randomNumber = (n: number) => Random.nextIntBetween(1, n)
  console.log("non-memoized version:")
  console.log(yield* randomNumber(10))
  console.log(yield* randomNumber(10))

  console.log("memoized version:")
  const memoized = yield* Effect.cachedFunction(randomNumber)
  console.log(yield* memoized(10))
  console.log(yield* memoized(10))
})

Effect.runFork(program)
// Example Output:
// non-memoized version:
// 2
// 8
// memoized version:
// 5
// 5
```

**Signature**

```highlight
declare const cachedFunction: <A, B, E, R>(
  f: (a: A) => Effect<B, E, R>,
  eq?: Equivalence<A>
) => Effect<(a: A) => Effect<B, E, R>>
```

[Source][17]

Since v2.0.0

## [![][1]][18] cachedInvalidateWithTTL

Caches an effect’s result for a specified duration and allows manual invalidation before expiration.

**Details**

This function behaves similarly to `cachedWithTTL` by caching the result of an effect for a specified period of time. However, it introduces an additional feature: it provides an effect that allows you to manually invalidate the cached result before it naturally expires.

This gives you more control over the cache, allowing you to refresh the result when needed, even if the original cache has not yet expired.

Once the cache is invalidated, the next time the effect is evaluated, the result will be recomputed, and the cache will be refreshed.

**When to Use**

Use this function when you have an effect whose result needs to be cached for a certain period, but you also want the option to refresh the cache manually before the expiration time.

This is useful when you need to ensure that the cached data remains valid for a certain period but still want to invalidate it if the underlying data changes or if you want to force a recomputation.

**Example**

```highlight
import { Effect, Console } from "effect"

let i = 1
const expensiveTask = Effect.promise<string>(() => {
  console.log("expensive task...")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`result ${i++}`)
    }, 100)
  })
})

const program = Effect.gen(function* () {
  const [cached, invalidate] = yield* Effect.cachedInvalidateWithTTL(expensiveTask, "1 hour")
  yield* cached.pipe(Effect.andThen(Console.log))
  yield* cached.pipe(Effect.andThen(Console.log))
  yield* invalidate
  yield* cached.pipe(Effect.andThen(Console.log))
})

Effect.runFork(program)
// Output:
// expensive task...
// result 1
// result 1
// expensive task...
// result 2
```

**See**

- `cached` for a similar function that caches the result indefinitely.
- `cachedWithTTL` for a similar function that caches the result for a specified duration but does not include an effect for manual invalidation.

**Signature**

```highlight
declare const cachedInvalidateWithTTL: {
  (
    timeToLive: Duration.DurationInput
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<[Effect<A, E>, Effect<void>], never, R>
  <A, E, R>(self: Effect<A, E, R>, timeToLive: Duration.DurationInput): Effect<[Effect<A, E>, Effect<void>], never, R>
}
```

[Source][19]

Since v2.0.0

## [![][1]][20] cachedWithTTL

Returns an effect that caches its result for a specified `Duration`, known as “timeToLive” (TTL).

**Details**

This function is used to cache the result of an effect for a specified amount of time. This means that the first time the effect is evaluated, its result is computed and stored.

If the effect is evaluated again within the specified `timeToLive`, the cached result will be used, avoiding recomputation.

After the specified duration has passed, the cache expires, and the effect will be recomputed upon the next evaluation.

**When to Use**

Use this function when you have an effect that involves costly operations or computations, and you want to avoid repeating them within a short time frame.

It’s ideal for scenarios where the result of an effect doesn’t change frequently and can be reused for a specified duration.

By caching the result, you can improve efficiency and reduce unnecessary computations, especially in performance-critical applications.

**Example**

```highlight
import { Effect, Console } from "effect"

let i = 1
const expensiveTask = Effect.promise<string>(() => {
  console.log("expensive task...")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`result ${i++}`)
    }, 100)
  })
})

const program = Effect.gen(function* () {
  const cached = yield* Effect.cachedWithTTL(expensiveTask, "150 millis")
  yield* cached.pipe(Effect.andThen(Console.log))
  yield* cached.pipe(Effect.andThen(Console.log))
  yield* Effect.sleep("100 millis")
  yield* cached.pipe(Effect.andThen(Console.log))
})

Effect.runFork(program)
// Output:
// expensive task...
// result 1
// result 1
// expensive task...
// result 2
```

**See**

- `cached` for a similar function that caches the result indefinitely.
- `cachedInvalidateWithTTL` for a similar function that includes an additional effect for manually invalidating the cached value.

**Signature**

```highlight
declare const cachedWithTTL: {
  (timeToLive: Duration.DurationInput): <A, E, R>(self: Effect<A, E, R>) => Effect<Effect<A, E>, never, R>
  <A, E, R>(self: Effect<A, E, R>, timeToLive: Duration.DurationInput): Effect<Effect<A, E>, never, R>
}
```

[Source][21]

Since v2.0.0

## [![][1]][22] once

Returns an effect that executes only once, regardless of how many times it’s called.

**Details**

This function ensures that a specific effect is executed only a single time, no matter how many times it is invoked. The result of the effect will be cached, and subsequent calls to the effect will immediately return the cached result without re-executing the original logic.

**When to Use**

Use this function when you need to perform a task only once, regardless of how many times the effect is triggered. It’s particularly useful when you have initialization tasks, logging, or other one-time actions that should not be repeated. This can help optimize performance and avoid redundant actions.

**Example**

```highlight
import { Effect, Console } from "effect"

const program = Effect.gen(function* () {
  const task1 = Console.log("task1")
  yield* Effect.repeatN(task1, 2)
  const task2 = yield* Effect.once(Console.log("task2"))
  yield* Effect.repeatN(task2, 2)
})

Effect.runFork(program)
// Output:
// task1
// task1
// task1
// task2
```

**Signature**

```highlight
declare const once: <A, E, R>(self: Effect<A, E, R>) => Effect<Effect<void, E, R>>
```

[Source][23]

Since v2.0.0

# [![][1]][24] Clock

## [![][1]][25] clock

Retrieves the `Clock` service from the context.

**Example**

```highlight
import { Effect } from "effect"

const program = Effect.gen(function* () {
  const clock = yield* Effect.clock
  const currentTime = yield* clock.currentTimeMillis
  console.log(`Current time in milliseconds: ${currentTime}`)
})

Effect.runFork(program)
// Example Output:
// Current time in milliseconds: 1735484796134
```

**Signature**

```highlight
declare const clock: Effect<Clock.Clock, never, never>
```

[Source][26]

Since v2.0.0

## [![][1]][27] clockWith

Retrieves the `Clock` service from the context and provides it to the specified effectful function.

**Example**

```highlight
import { Console, Effect } from "effect"

const program = Effect.clockWith((clock) =>
  clock.currentTimeMillis.pipe(
    Effect.map((currentTime) => `Current time is: ${currentTime}`),
    Effect.tap(Console.log)
  )
)

Effect.runFork(program)
// Example Output:
// Current time is: 1735484929744
```

**Signature**

```highlight
declare const clockWith: <A, E, R>(f: (clock: Clock.Clock) => Effect<A, E, R>) => Effect<A, E, R>
```

[Source][28]

Since v2.0.0

## [![][1]][29] withClock

Executes the specified workflow with the specified implementation of the `Clock` service.

**Signature**

```highlight
declare const withClock: {
  <C extends Clock.Clock>(clock: C): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <C extends Clock.Clock, A, E, R>(effect: Effect<A, E, R>, clock: C): Effect<A, E, R>
}
```

[Source][30]

Since v2.0.0

## [![][1]][31] withClockScoped

Sets the implementation of the `Clock` service to the specified value and restores it to its original value when the scope is closed.

**Signature**

```highlight
declare const withClockScoped: <C extends Clock.Clock>(clock: C) => Effect<void, never, Scope.Scope>
```

[Source][32]

Since v2.0.0

# [![][1]][33] Collecting

## [![][1]][34] all

Combines multiple effects into one, returning results based on the input structure.

**Details**

Use this function when you need to run multiple effects and combine their results into a single output. It supports tuples, iterables, structs, and records, making it flexible for different input types.

For instance, if the input is a tuple:

```highlight
//         ┌─── a tuple of effects
//         ▼
Effect.all([effect1, effect2, ...])
```

the effects are executed sequentially, and the result is a new effect containing the results as a tuple. The results in the tuple match the order of the effects passed to `Effect.all`.

**Concurrency**

You can control the execution order (e.g., sequential vs. concurrent) using the `concurrency` option.

**Short-Circuiting Behavior**

This function stops execution on the first error it encounters, this is called “short-circuiting”. If any effect in the collection fails, the remaining effects will not run, and the error will be propagated. To change this behavior, you can use the `mode` option, which allows all effects to run and collect results as `Either` or `Option`.

**The `mode` option**

The `{ mode: "either" }` option changes the behavior of `Effect.all` to ensure all effects run, even if some fail. Instead of stopping on the first failure, this mode collects both successes and failures, returning an array of `Either` instances where each result is either a `Right` (success) or a `Left` (failure).

Similarly, the `{ mode: "validate" }` option uses `Option` to indicate success or failure. Each effect returns `None` for success and `Some` with the error for failure.

**Example** (Combining Effects in Tuples)

```highlight
import { Effect, Console } from "effect"

const tupleOfEffects = [
  Effect.succeed(42).pipe(Effect.tap(Console.log)),
  Effect.succeed("Hello").pipe(Effect.tap(Console.log))
] as const

//      ┌─── Effect<[number, string], never, never>
//      ▼
const resultsAsTuple = Effect.all(tupleOfEffects)

Effect.runPromise(resultsAsTuple).then(console.log)
// Output:
// 42
// Hello
// [ 42, 'Hello' ]
```

**Example** (Combining Effects in Iterables)

```highlight
import { Effect, Console } from "effect"

const iterableOfEffects: Iterable<Effect.Effect<number>> = [1, 2, 3].map((n) =>
  Effect.succeed(n).pipe(Effect.tap(Console.log))
)

//      ┌─── Effect<number[], never, never>
//      ▼
const resultsAsArray = Effect.all(iterableOfEffects)

Effect.runPromise(resultsAsArray).then(console.log)
// Output:
// 1
// 2
// 3
// [ 1, 2, 3 ]
```

**Example** (Combining Effects in Structs)

```highlight
import { Effect, Console } from "effect"

const structOfEffects = {
  a: Effect.succeed(42).pipe(Effect.tap(Console.log)),
  b: Effect.succeed("Hello").pipe(Effect.tap(Console.log))
}

//      ┌─── Effect<{ a: number; b: string; }, never, never>
//      ▼
const resultsAsStruct = Effect.all(structOfEffects)

Effect.runPromise(resultsAsStruct).then(console.log)
// Output:
// 42
// Hello
// { a: 42, b: 'Hello' }
```

**Example** (Combining Effects in Records)

```highlight
import { Effect, Console } from "effect"

const recordOfEffects: Record<string, Effect.Effect<number>> = {
  key1: Effect.succeed(1).pipe(Effect.tap(Console.log)),
  key2: Effect.succeed(2).pipe(Effect.tap(Console.log))
}

//      ┌─── Effect<{ [x: string]: number; }, never, never>
//      ▼
const resultsAsRecord = Effect.all(recordOfEffects)

Effect.runPromise(resultsAsRecord).then(console.log)
// Output:
// 1
// 2
// { key1: 1, key2: 2 }
```

**Example** (Short-Circuiting Behavior)

```highlight
import { Effect, Console } from "effect"

const program = Effect.all([
  Effect.succeed("Task1").pipe(Effect.tap(Console.log)),
  Effect.fail("Task2: Oh no!").pipe(Effect.tap(Console.log)),
  // Won't execute due to earlier failure
  Effect.succeed("Task3").pipe(Effect.tap(Console.log))
])

Effect.runPromiseExit(program).then(console.log)
// Output:
// Task1
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: { _id: 'Cause', _tag: 'Fail', failure: 'Task2: Oh no!' }
// }
```

**Example** (Collecting Results with `mode: "either"`)

```highlight
import { Effect, Console } from "effect"

const effects = [
  Effect.succeed("Task1").pipe(Effect.tap(Console.log)),
  Effect.fail("Task2: Oh no!").pipe(Effect.tap(Console.log)),
  Effect.succeed("Task3").pipe(Effect.tap(Console.log))
]

const program = Effect.all(effects, { mode: "either" })

Effect.runPromiseExit(program).then(console.log)
// Output:
// Task1
// Task3
// {
//   _id: 'Exit',
//   _tag: 'Success',
//   value: [
//     { _id: 'Either', _tag: 'Right', right: 'Task1' },
//     { _id: 'Either', _tag: 'Left', left: 'Task2: Oh no!' },
//     { _id: 'Either', _tag: 'Right', right: 'Task3' }
//   ]
// }
```

**Example** (Collecting Results with `mode: "validate"`)

```highlight
import { Effect, Console } from "effect"

const effects = [
  Effect.succeed("Task1").pipe(Effect.tap(Console.log)),
  Effect.fail("Task2: Oh no!").pipe(Effect.tap(Console.log)),
  Effect.succeed("Task3").pipe(Effect.tap(Console.log))
]

const program = Effect.all(effects, { mode: "validate" })

Effect.runPromiseExit(program).then((result) => console.log("%o", result))
// Output:
// Task1
// Task3
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Fail',
//     failure: [
//       { _id: 'Option', _tag: 'None' },
//       { _id: 'Option', _tag: 'Some', value: 'Task2: Oh no!' },
//       { _id: 'Option', _tag: 'None' }
//     ]
//   }
// }
```

**See**

- `forEach` for iterating over elements and applying an effect.
- `allWith` for a data-last version of this function.

**Signature**

```highlight
declare const all: <
  const Arg extends Iterable<Effect<any, any, any>> | Record<string, Effect<any, any, any>>,
  O extends NoExcessProperties<
    {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard?: boolean | undefined
      readonly mode?: "default" | "validate" | "either" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    },
    O
  >
>(
  arg: Arg,
  options?: O
) => All.Return<Arg, O>
```

[Source][35]

Since v2.0.0

## [![][1]][36] allSuccesses

Evaluates and runs each effect in the iterable, collecting only the successful results while discarding failures.

**Details**

This function function processes an iterable of effects and runs each one. If an effect is successful, its result is collected; if it fails, the result is discarded. This ensures that only successful outcomes are kept.

**Options**

The function also allows you to customize how the effects are handled by specifying options such as concurrency, batching, and how finalizers behave. These options provide flexibility in running the effects concurrently or adjusting other execution details.

**Example**

```highlight
import { Effect } from "effect"

const tasks = [Effect.succeed(1), Effect.fail("Error 1"), Effect.succeed(2), Effect.fail("Error 2")]

const program = Effect.gen(function* () {
  const successfulResults = yield* Effect.allSuccesses(tasks)
  console.log(successfulResults)
})

Effect.runFork(program)
// Output: [1, 2]
```

**Signature**

```highlight
declare const allSuccesses: <X extends Effect<any, any, any>>(
  elements: Iterable<X>,
  options?:
    | {
        readonly concurrency?: Concurrency | undefined
        readonly batching?: boolean | "inherit" | undefined
        readonly concurrentFinalizers?: boolean | undefined
      }
    | undefined
) => Effect<Array<Effect.Success<X>>, never, Effect.Context<X>>
```

[Source][37]

Since v2.0.0

## [![][1]][38] allWith

A data-last version of `all`, designed for use in pipelines.

**When to Use**

This function enables you to combine multiple effects and customize execution options such as concurrency levels. This version is useful in functional pipelines where you first define your data and then apply operations to it.

**Example**

```highlight
import { Effect, pipe } from "effect"

const task1 = Effect.succeed(1).pipe(Effect.delay("200 millis"), Effect.tap(Effect.log("task1 done")))

const task2 = Effect.succeed("hello").pipe(Effect.delay("100 millis"), Effect.tap(Effect.log("task2 done")))

const program = pipe(
  [task1, task2],
  // Run both effects concurrently using the concurrent option
  Effect.allWith({ concurrency: 2 })
)

Effect.runPromise(program).then(console.log)
// Output:
// timestamp=... level=INFO fiber=#3 message="task2 done"
// timestamp=... level=INFO fiber=#2 message="task1 done"
// [ 1, 'hello' ]
```

**Signature**

```highlight
declare const allWith: <
  O extends NoExcessProperties<
    {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard?: boolean | undefined
      readonly mode?: "default" | "validate" | "either" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    },
    O
  >
>(
  options?: O
) => <const Arg extends Iterable<Effect<any, any, any>> | Record<string, Effect<any, any, any>>>(
  arg: Arg
) => All.Return<Arg, O>
```

[Source][39]

Since v2.0.0

## [![][1]][40] dropUntil

Drops elements until the effectful predicate returns `true`.

**Details**

This function processes a collection of elements and uses an effectful predicate to determine when to stop dropping elements. It drops elements from the beginning of the collection until the predicate returns `true`.

The predicate is a function that takes an element and its index in the collection and returns an effect that evaluates to a boolean.

Once the predicate returns `true`, the remaining elements of the collection are returned.

**Note**: The first element for which the predicate returns `true` is also dropped.

**When to Use**

This function allows you to conditionally skip over a part of the collection based on some criteria defined in the predicate.

**Example**

```highlight
import { Effect } from "effect"

const numbers = [1, 2, 3, 4, 5, 6]
const predicate = (n: number, i: number) => Effect.succeed(n > 3)

const program = Effect.gen(function* () {
  const result = yield* Effect.dropUntil(numbers, predicate)
  console.log(result)
})

Effect.runFork(program)
// Output: [5, 6]
```

**See**

- `dropWhile` for a similar function that drops elements while the predicate returns `true`.

**Signature**

```highlight
declare const dropUntil: {
  <A, E, R>(
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect<Array<A>, E, R>
  <A, E, R>(elements: Iterable<A>, predicate: (a: A, i: number) => Effect<boolean, E, R>): Effect<Array<A>, E, R>
}
```

[Source][41]

Since v2.0.0

## [![][1]][42] dropWhile

Drops elements as long as the predicate returns `true`.

**Details**

This function processes a collection of elements and uses a predicate to decide whether to drop an element.

The predicate is a function that takes an element and its index, and it returns an effect that evaluates to a boolean.

As long as the predicate returns `true`, elements will continue to be dropped from the collection.

Once the predicate returns `false`, the remaining elements are kept.

**When to Use**

This function allows you to discard elements from the start of a collection based on a condition, and only keep the rest when the condition no longer holds.

**Example**

```highlight
import { Effect } from "effect"

const numbers = [1, 2, 3, 4, 5, 6]
const predicate = (n: number, i: number) => Effect.succeed(n <= 3)

const program = Effect.gen(function* () {
  const result = yield* Effect.dropWhile(numbers, predicate)
  console.log(result)
})

Effect.runFork(program)
// Output: [4, 5, 6]
```

**See**

- `dropUntil` for a similar function that drops elements until the predicate returns `true`.

**Signature**

```highlight
declare const dropWhile: {
  <A, E, R>(
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect<Array<A>, E, R>
  <A, E, R>(elements: Iterable<A>, predicate: (a: A, i: number) => Effect<boolean, E, R>): Effect<Array<A>, E, R>
}
```

[Source][43]

Since v2.0.0

## [![][1]][44] findFirst

Returns the first element that satisfies the effectful predicate.

**Details**

This function processes a collection of elements and applies an effectful predicate to each element.

The predicate is a function that takes an element and its index in the collection, and it returns an effect that evaluates to a boolean.

The function stops as soon as it finds the first element for which the predicate returns `true` and returns that element wrapped in an `Option`.

If no element satisfies the predicate, the result will be `None`.

**When to Use**

This function allows you to efficiently find an element that meets a specific condition, even when the evaluation involves effects like asynchronous operations or side effects.

**Example**

```highlight
import { Effect } from "effect"

const numbers = [1, 2, 3, 4, 5]
const predicate = (n: number, i: number) => Effect.succeed(n > 3)

const program = Effect.gen(function* () {
  const result = yield* Effect.findFirst(numbers, predicate)
  console.log(result)
})

Effect.runFork(program)
// Output: { _id: 'Option', _tag: 'Some', value: 4 }
```

**Signature**

```highlight
declare const findFirst: {
  <A, E, R>(
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect<Option.Option<A>, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>
  ): Effect<Option.Option<A>, E, R>
}
```

[Source][45]

Since v2.0.0

## [![][1]][46] head

Returns the first element of the iterable if the collection is non-empty, or fails with the error `NoSuchElementException` if the collection is empty.

**When to Use**

This function is useful when you need to retrieve the first item from a collection and want to handle the case where the collection might be empty without causing an unhandled exception.

**Example**

```highlight
import { Effect } from "effect"

// Simulate an async operation
const fetchNumbers = Effect.succeed([1, 2, 3]).pipe(Effect.delay("100 millis"))

const program = Effect.gen(function* () {
  const firstElement = yield* Effect.head(fetchNumbers)
  console.log(firstElement)
})

Effect.runFork(program)
// Output: 1
```

**Signature**

```highlight
declare const head: <A, E, R>(self: Effect<Iterable<A>, E, R>) => Effect<A, Cause.NoSuchElementException | E, R>
```

[Source][47]

Since v2.0.0

## [![][1]][48] mergeAll

Merges an `Iterable<Effect<A, E, R>>` to a single effect.

**Details**

This function takes an iterable of effects and combines them into a single effect. It does this by iterating over each effect in the collection and applying a function that accumulates results into a “zero” value, which starts with an initial value and is updated with each effect’s success.

The provided function `f` is called for each element in the iterable, allowing you to specify how to combine the results.

**Options**

The function also allows you to customize how the effects are handled by specifying options such as concurrency, batching, and how finalizers behave. These options provide flexibility in running the effects concurrently or adjusting other execution details.

**Example**

```highlight
import { Effect } from "effect"

const numbers = [Effect.succeed(1), Effect.succeed(2), Effect.succeed(3)]
const add = (sum: number, value: number, i: number) => sum + value
const zero = 0

const program = Effect.gen(function* () {
  const total = yield* Effect.mergeAll(numbers, zero, add)
  console.log(total)
})

Effect.runFork(program)
// Output: 6
```

**Signature**

```highlight
declare const mergeAll: {
  <Z, Eff extends Effect<any, any, any>>(
    zero: Z,
    f: (z: Z, a: Effect.Success<Eff>, i: number) => Z,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): (elements: Iterable<Eff>) => Effect<Z, Effect.Error<Eff>, Effect.Context<Eff>>
  <Eff extends Effect<any, any, any>, Z>(
    elements: Iterable<Eff>,
    zero: Z,
    f: (z: Z, a: Effect.Success<Eff>, i: number) => Z,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<Z, Effect.Error<Eff>, Effect.Context<Eff>>
}
```

[Source][49]

Since v2.0.0

## [![][1]][50] reduce

Reduces an `Iterable<A>` using an effectual function `f`, working sequentially from left to right.

**Details**

This function takes an iterable and applies a function `f` to each element in the iterable. The function works sequentially, starting with an initial value `zero` and then combining it with each element in the collection. The provided function `f` is called for each element in the iterable, allowing you to accumulate a result based on the current value and the element being processed.

**When to Use**

The function is often used for operations like summing a collection of numbers or combining results from multiple tasks. It ensures that operations are performed one after the other, maintaining the order of the elements.

**Example**

```highlight
import { Console, Effect } from "effect"

const processOrder = (id: number) =>
  Effect.succeed({ id, price: 100 * id }).pipe(
    Effect.tap(() => Console.log(`Order ${id} processed`)),
    Effect.delay(500 - id * 100)
  )

const program = Effect.reduce([1, 2, 3, 4], 0, (acc, id, i) =>
  processOrder(id).pipe(Effect.map((order) => acc + order.price))
)

Effect.runPromise(program).then(console.log)
// Output:
// Order 1 processed
// Order 2 processed
// Order 3 processed
// Order 4 processed
// 1000
```

**See**

- `reduceWhile` for a similar function that stops the process based on a predicate.
- `reduceRight` for a similar function that works from right to left.

**Signature**

```highlight
declare const reduce: {
  <Z, A, E, R>(zero: Z, f: (z: Z, a: A, i: number) => Effect<Z, E, R>): (elements: Iterable<A>) => Effect<Z, E, R>
  <A, Z, E, R>(elements: Iterable<A>, zero: Z, f: (z: Z, a: A, i: number) => Effect<Z, E, R>): Effect<Z, E, R>
}
```

[Source][51]

Since v2.0.0

## [![][1]][52] reduceEffect

Reduces an `Iterable<Effect<A, E, R>>` to a single effect.

**Details**

This function processes a collection of effects and combines them into one single effect. It starts with an initial effect (`zero`) and applies a function `f` to each element in the collection.

**Options**

The function also allows you to customize how the effects are handled by specifying options such as concurrency, batching, and how finalizers behave. These options provide flexibility in running the effects concurrently or adjusting other execution details.

**Example**

```highlight
import { Console, Effect } from "effect"

const processOrder = (id: number) =>
  Effect.succeed({ id, price: 100 * id }).pipe(
    Effect.tap(() => Console.log(`Order ${id} processed`)),
    Effect.delay(500 - id * 100)
  )

const program = Effect.reduceEffect(
  [processOrder(1), processOrder(2), processOrder(3), processOrder(4)],
  Effect.succeed(0),
  (acc, order, i) => acc + order.price
)

Effect.runPromise(program).then(console.log)
// Output:
// Order 1 processed
// Order 2 processed
// Order 3 processed
// Order 4 processed
// 1000
```

**Signature**

```highlight
declare const reduceEffect: {
  <Z, E, R, Eff extends Effect<any, any, any>>(
    zero: Effect<Z, E, R>,
    f: (z: NoInfer<Z>, a: Effect.Success<Eff>, i: number) => Z,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): (elements: Iterable<Eff>) => Effect<Z, E | Effect.Error<Eff>, R | Effect.Context<Eff>>
  <Eff extends Effect<any, any, any>, Z, E, R>(
    elements: Iterable<Eff>,
    zero: Effect<Z, E, R>,
    f: (z: NoInfer<Z>, a: Effect.Success<Eff>, i: number) => Z,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<Z, E | Effect.Error<Eff>, R | Effect.Context<Eff>>
}
```

[Source][53]

Since v2.0.0

## [![][1]][54] reduceRight

Reduces an `Iterable<A>` using an effectual function `f`, working sequentially from right to left.

**Details**

This function takes an iterable and applies a function `f` to each element in the iterable. The function works sequentially, starting with an initial value `zero` and then combining it with each element in the collection. The provided function `f` is called for each element in the iterable, allowing you to accumulate a result based on the current value and the element being processed.

**When to Use**

The function is often used for operations like summing a collection of numbers or combining results from multiple tasks. It ensures that operations are performed one after the other, maintaining the order of the elements.

**Example**

```highlight
import { Console, Effect } from "effect"

const processOrder = (id: number) =>
  Effect.succeed({ id, price: 100 * id }).pipe(
    Effect.tap(() => Console.log(`Order ${id} processed`)),
    Effect.delay(500 - id * 100)
  )

const program = Effect.reduceRight([1, 2, 3, 4], 0, (id, acc, i) =>
  processOrder(id).pipe(Effect.map((order) => acc + order.price))
)

Effect.runPromise(program).then(console.log)
// Output:
// Order 4 processed
// Order 3 processed
// Order 2 processed
// Order 1 processed
// 1000
```

**See**

- `reduce` for a similar function that works from left to right.

**Signature**

```highlight
declare const reduceRight: {
  <A, Z, R, E>(zero: Z, f: (a: A, z: Z, i: number) => Effect<Z, E, R>): (elements: Iterable<A>) => Effect<Z, E, R>
  <A, Z, R, E>(elements: Iterable<A>, zero: Z, f: (a: A, z: Z, i: number) => Effect<Z, E, R>): Effect<Z, E, R>
}
```

[Source][55]

Since v2.0.0

## [![][1]][56] reduceWhile

Reduces an `Iterable<A>` using an effectual function `body`, working sequentially from left to right, stopping the process early when the predicate `while` is not satisfied.

**Details**

This function processes a collection of elements, applying a function `body` to reduce them to a single value, starting from the first element. It checks the value of the accumulator against a predicate (`while`). If at any point the predicate returns `false`, the reduction stops, and the accumulated result is returned.

**When to Use**

Use this function when you need to reduce a collection of elements, but only continue the process as long as a certain condition holds true. For example, if you want to sum values in a list but stop as soon as the sum exceeds a certain threshold, you can use this function.

**Example**

```highlight
import { Console, Effect } from "effect"

const processOrder = (id: number) =>
  Effect.succeed({ id, price: 100 * id }).pipe(
    Effect.tap(() => Console.log(`Order ${id} processed`)),
    Effect.delay(500 - id * 100)
  )

const program = Effect.reduceWhile([1, 2, 3, 4], 0, {
  body: (acc, id, i) => processOrder(id).pipe(Effect.map((order) => acc + order.price)),
  while: (acc) => acc < 500
})

Effect.runPromise(program).then(console.log)
// Output:
// Order 1 processed
// Order 2 processed
// Order 3 processed
// 600
```

**Signature**

```highlight
declare const reduceWhile: {
  <Z, A, E, R>(
    zero: Z,
    options: { readonly while: Predicate<Z>; readonly body: (s: Z, a: A, i: number) => Effect<Z, E, R> }
  ): (elements: Iterable<A>) => Effect<Z, E, R>
  <A, Z, E, R>(
    elements: Iterable<A>,
    zero: Z,
    options: { readonly while: Predicate<Z>; readonly body: (s: Z, a: A, i: number) => Effect<Z, E, R> }
  ): Effect<Z, E, R>
}
```

[Source][57]

Since v2.0.0

## [![][1]][58] replicateEffect

Performs this effect the specified number of times and collects the results.

**Details**

This function repeats an effect multiple times and collects the results into an array. You specify how many times to execute the effect, and it runs that many times, either in sequence or concurrently depending on the provided options.

**Options**

If the `discard` option is set to `true`, the intermediate results are not collected, and the final result of the operation is `void`.

The function also allows you to customize how the effects are handled by specifying options such as concurrency, batching, and how finalizers behave. These options provide flexibility in running the effects concurrently or adjusting other execution details.

**Example**

```highlight
import { Console, Effect } from "effect"

let counter = 0

const task = Effect.sync(() => ++counter).pipe(Effect.tap(() => Console.log(`Task completed`)))

const program = Effect.gen(function* () {
  // Replicate the task 3 times and collect the results
  const results = yield* Effect.replicateEffect(task, 3)
  yield* Console.log(`Results: ${results.join(", ")}`)
})

Effect.runFork(program)
// Output:
// Task completed
// Task completed
// Task completed
// Results: 1, 2, 3
```

**Signature**

```highlight
declare const replicateEffect: {
  (
    n: number,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard?: false | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<Array<A>, E, R>
  (
    n: number,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<void, E, R>
  <A, E, R>(
    self: Effect<A, E, R>,
    n: number,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard?: false | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect<Array<A>, E, R>
  <A, E, R>(
    self: Effect<A, E, R>,
    n: number,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect<void, E, R>
}
```

[Source][59]

Since v2.0.0

## [![][1]][60] takeUntil

Takes elements from a collection until the effectful predicate returns `true`.

**Details**

This function processes a collection of elements and uses an effectful predicate to decide when to stop taking elements. The elements are taken from the beginning of the collection until the predicate returns `true`.

The predicate is a function that takes an element and its index in the collection, and returns an effect that resolves to a boolean.

Once the predicate returns `true`, the remaining elements of the collection are discarded, and the function stops taking more elements.

**Note**: The first element for which the predicate returns `true` is also included in the result.

**When to Use**

Use this function when you want to conditionally take elements from a collection based on a dynamic condition. For example, you may want to collect numbers from a list until a certain threshold is reached, or gather items until a specific condition is met.

**Example**

```highlight
import { Effect } from "effect"

const numbers = [1, 2, 3, 4, 5, 6]
const predicate = (n: number, i: number) => Effect.succeed(n > 3)

const program = Effect.gen(function* () {
  const result = yield* Effect.takeUntil(numbers, predicate)
  console.log(result)
})

Effect.runFork(program)
// Output: [ 1, 2, 3, 4 ]
```

**See**

- `takeWhile` for a similar function that takes elements while the predicate returns `true`.

**Signature**

```highlight
declare const takeUntil: {
  <A, R, E>(
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect<Array<A>, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>
  ): Effect<Array<A>, E, R>
}
```

[Source][61]

Since v2.0.0

## [![][1]][62] takeWhile

Takes elements as long as the predicate returns `true`.

**Details**

This function processes a collection of elements and uses a predicate to decide whether to take an element.

The predicate is a function that takes an element and its index, and it returns an effect that evaluates to a boolean.

As long as the predicate returns `true`, elements will continue to be taken from the collection.

Once the predicate returns `false`, the remaining elements are discarded.

**Example**

```highlight
import { Effect } from "effect"

const numbers = [1, 2, 3, 4, 5, 6]
const predicate = (n: number, i: number) => Effect.succeed(n <= 3)

const program = Effect.gen(function* () {
  const result = yield* Effect.takeWhile(numbers, predicate)
  console.log(result)
})

Effect.runFork(program)
// Output: [1, 2, 3]
```

**See**

- `takeUntil` for a similar function that takes elements until the predicate returns `true`.

**Signature**

```highlight
declare const takeWhile: {
  <A, E, R>(
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect<Array<A>, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>
  ): Effect<Array<A>, E, R>
}
```

[Source][63]

Since v2.0.0

# [![][1]][64] Condition Checking

## [![][1]][65] every

Determines whether all elements of the iterable satisfy the effectful predicate.

**Details**

This function checks whether every element in a given collection (an iterable) satisfies a condition defined by an effectful predicate.

The predicate is a function that takes an element and its index, and it returns an effect that evaluates to a boolean.

The function will process each element and return `true` if all elements satisfy the predicate; otherwise, it returns `false`.

**When to Use**

This function is useful when you need to verify that all items in a collection meet certain criteria, even when the evaluation of each item involves effects, such as asynchronous checks or complex computations.

**Example**

```highlight
import { Effect } from "effect"

const numbers = [2, 4, 6, 8]
const predicate = (n: number, i: number) => Effect.succeed(n % 2 === 0)

const program = Effect.gen(function* () {
  const allEven = yield* Effect.every(numbers, predicate)
  console.log(allEven)
})

Effect.runFork(program)
// Output: true
```

**See**

- `exists` for a similar function that returns a boolean indicating whether **any** element satisfies the predicate.

**Signature**

```highlight
declare const every: {
  <A, E, R>(predicate: (a: A, i: number) => Effect<boolean, E, R>): (elements: Iterable<A>) => Effect<boolean, E, R>
  <A, E, R>(elements: Iterable<A>, predicate: (a: A, i: number) => Effect<boolean, E, R>): Effect<boolean, E, R>
}
```

[Source][66]

Since v2.0.0

## [![][1]][67] exists

Determines whether any element of the iterable satisfies the effectual predicate.

**Details**

This function checks whether any element in a given collection (an iterable) satisfies a condition defined by an effectful predicate.

The predicate is a function that takes an element and its index, and it returns an effect that evaluates to a boolean.

The function will process each element, and if any element satisfies the predicate (returns `true`), the function will immediately return `true`.

If none of the elements satisfy the condition, it will return `false`.

**When to Use**

This function allows you to quickly check for a condition in a collection without having to manually iterate over it.

**Example**

```highlight
import { Effect } from "effect"

const numbers = [1, 2, 3, 4]
const predicate = (n: number, i: number) => Effect.succeed(n > 2)

const program = Effect.gen(function* () {
  const hasLargeNumber = yield* Effect.exists(numbers, predicate)
  console.log(hasLargeNumber)
})

Effect.runFork(program)
// Output: true
```

**See**

- `every` for a similar function that checks if **all** elements satisfy the predicate.

**Signature**

```highlight
declare const exists: {
  <A, E, R>(
    predicate: (a: A, i: number) => Effect<boolean, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): (elements: Iterable<A>) => Effect<boolean, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: A, i: number) => Effect<boolean, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<boolean, E, R>
}
```

[Source][68]

Since v2.0.0

## [![][1]][69] isFailure

Checks if an effect has failed.

**Details**

This function evaluates whether an effect has resulted in a failure. It returns a boolean value wrapped in an effect, with `true` indicating the effect failed and `false` otherwise.

The resulting effect cannot fail (`never` in the error channel) but retains the context of the original effect.

**Example**

```highlight
import { Effect } from "effect"

const failure = Effect.fail("Uh oh!")

console.log(Effect.runSync(Effect.isFailure(failure)))
// Output: true

const defect = Effect.dieMessage("BOOM!")

Effect.runSync(Effect.isFailure(defect))
// throws: BOOM!
```

**Signature**

```highlight
declare const isFailure: <A, E, R>(self: Effect<A, E, R>) => Effect<boolean, never, R>
```

[Source][70]

Since v2.0.0

## [![][1]][71] isSuccess

Checks if an effect has succeeded.

**Details**

This function evaluates whether an effect has resulted in a success. It returns a boolean value wrapped in an effect, with `true` indicating the effect succeeded and `false` otherwise.

The resulting effect cannot fail (`never` in the error channel) but retains the context of the original effect.

**Signature**

```highlight
declare const isSuccess: <A, E, R>(self: Effect<A, E, R>) => Effect<boolean, never, R>
```

[Source][72]

Since v2.0.0

## [![][1]][73] liftPredicate

Transforms a `Predicate` function into an `Effect` returning the input value if the predicate returns `true` or failing with specified error if the predicate fails

**Example**

```highlight
import { Effect } from "effect"

const isPositive = (n: number): boolean => n > 0

// succeeds with `1`
Effect.liftPredicate(1, isPositive, (n) => `${n} is not positive`)

// fails with `"0 is not positive"`
Effect.liftPredicate(0, isPositive, (n) => `${n} is not positive`)
```

**Signature**

```highlight
declare const liftPredicate: {
  <T extends A, E, B extends T = T, A = T>(
    predicate: Refinement<T, B> | Predicate<T>,
    orFailWith: (a: EqualsWith<T, B, A, Exclude<A, B>>) => E
  ): (a: A) => Effect<EqualsWith<T, B, A, B>, E>
  <A, E, B extends A = A>(
    self: A,
    predicate: Refinement<A, B> | Predicate<A>,
    orFailWith: (a: EqualsWith<A, B, A, Exclude<A, B>>) => E
  ): Effect<B, E>
}
```

[Source][74]

Since v3.4.0

# [![][1]][75] Conditional Operators

## [![][1]][76] if

Executes one of two effects based on a condition evaluated by an effectful predicate.

Use `if` to run one of two effects depending on whether the predicate effect evaluates to `true` or `false`. If the predicate is `true`, the `onTrue` effect is executed. If it is `false`, the `onFalse` effect is executed instead.

**Example** (Simulating a Coin Flip)

```highlight
import { Effect, Random, Console } from "effect"

const flipTheCoin = Effect.if(Random.nextBoolean, {
  onTrue: () => Console.log("Head"), // Runs if the predicate is true
  onFalse: () => Console.log("Tail") // Runs if the predicate is false
})

Effect.runFork(flipTheCoin)
```

**Signature**

```highlight
declare const if: { <A1, E1, R1, A2, E2, R2>(options: { readonly onTrue: LazyArg<Effect<A1, E1, R1>>; readonly onFalse: LazyArg<Effect<A2, E2, R2>>; }): <E = never, R = never>(self: boolean | Effect<boolean, E, R>) => Effect<A1 | A2, E1 | E2 | E, R1 | R2 | R>; <A1, E1, R1, A2, E2, R2, E = never, R = never>(self: boolean | Effect<boolean, E, R>, options: { readonly onTrue: LazyArg<Effect<A1, E1, R1>>; readonly onFalse: LazyArg<Effect<A2, E2, R2>>; }): Effect<A1 | A2, E1 | E2 | E, R1 | R2 | R>; }
```

[Source][77]

Since v2.0.0

## [![][1]][78] unless

Executes an effect only if the condition is `false`.

**See**

- `unlessEffect` for a version that allows the condition to be an effect.
- `when` for a version that executes the effect when the condition is `true`.

**Signature**

```highlight
declare const unless: {
  (condition: LazyArg<boolean>): <A, E, R>(self: Effect<A, E, R>) => Effect<Option.Option<A>, E, R>
  <A, E, R>(self: Effect<A, E, R>, condition: LazyArg<boolean>): Effect<Option.Option<A>, E, R>
}
```

[Source][79]

Since v2.0.0

## [![][1]][80] unlessEffect

Conditionally execute an effect based on the result of another effect.

**See**

- `unless` for a version that allows the condition to be a boolean.
- `whenEffect` for a version that executes the effect when the condition is `true`.

**Signature**

```highlight
declare const unlessEffect: {
  <E2, R2>(
    condition: Effect<boolean, E2, R2>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<Option.Option<A>, E2 | E, R2 | R>
  <A, E, R, E2, R2>(self: Effect<A, E, R>, condition: Effect<boolean, E2, R2>): Effect<Option.Option<A>, E | E2, R | R2>
}
```

[Source][81]

Since v2.0.0

## [![][1]][82] when

Conditionally executes an effect based on a boolean condition.

**Details**

This function allows you to run an effect only if a given condition evaluates to `true`. If the condition is `true`, the effect is executed, and its result is wrapped in an `Option.some`. If the condition is `false`, the effect is skipped, and the result is `Option.none`.

**When to Use**

This function is useful for scenarios where you need to dynamically decide whether to execute an effect based on runtime logic, while also representing the skipped case explicitly.

**Example** (Conditional Effect Execution)

```highlight
import { Effect, Option } from "effect"

const validateWeightOption = (weight: number): Effect.Effect<Option.Option<number>> =>
  // Conditionally execute the effect if the weight is non-negative
  Effect.succeed(weight).pipe(Effect.when(() => weight >= 0))

// Run with a valid weight
Effect.runPromise(validateWeightOption(100)).then(console.log)
// Output:
// {
//   _id: "Option",
//   _tag: "Some",
//   value: 100
// }

// Run with an invalid weight
Effect.runPromise(validateWeightOption(-5)).then(console.log)
// Output:
// {
//   _id: "Option",
//   _tag: "None"
// }
```

**See**

- `whenEffect` for a version that allows the condition to be an effect.
- `unless` for a version that executes the effect when the condition is `false`.

**Signature**

```highlight
declare const when: {
  (condition: LazyArg<boolean>): <A, E, R>(self: Effect<A, E, R>) => Effect<Option.Option<A>, E, R>
  <A, E, R>(self: Effect<A, E, R>, condition: LazyArg<boolean>): Effect<Option.Option<A>, E, R>
}
```

[Source][83]

Since v2.0.0

## [![][1]][84] whenEffect

Conditionally executes an effect based on the result of another effect.

**Details**

This function allows you to run an effect only if a conditional effect evaluating to a boolean resolves to `true`. If the conditional effect evaluates to `true`, the specified effect is executed, and its result is wrapped in `Option.some`. If the conditional effect evaluates to `false`, the effect is skipped, and the result is `Option.none`.

**When to Use**

This function is particularly useful when the decision to execute an effect depends on the result of another effect, such as a random value, a user-provided input, or a network request result.

**Example** (Using an Effect as a Condition)

```highlight
import { Effect, Random } from "effect"

const randomIntOption = Random.nextInt.pipe(Effect.whenEffect(Random.nextBoolean))

console.log(Effect.runSync(randomIntOption))
// Example Output:
// { _id: 'Option', _tag: 'Some', value: 8609104974198840 }
```

**See**

- `when` for a version that allows the condition to be a boolean.
- `unlessEffect` for a version that executes the effect when the condition is `false`.

**Signature**

```highlight
declare const whenEffect: {
  <E, R>(
    condition: Effect<boolean, E, R>
  ): <A, E2, R2>(effect: Effect<A, E2, R2>) => Effect<Option.Option<A>, E | E2, R | R2>
  <A, E2, R2, E, R>(self: Effect<A, E2, R2>, condition: Effect<boolean, E, R>): Effect<Option.Option<A>, E2 | E, R2 | R>
}
```

[Source][85]

Since v2.0.0

## [![][1]][86] whenFiberRef

Executes an effect conditionally based on the value of a `FiberRef` that satisfies a predicate.

**Details**

This function enables you to execute an effect only when the value of a specified `FiberRef` meets a certain condition defined by a predicate. If the value satisfies the predicate, the effect is executed, and the result is wrapped in an `Option.some`. If the predicate is not satisfied, the effect is skipped, and the result is `Option.none`. In both cases, the current value of the `FiberRef` is included in the result.

**Signature**

```highlight
declare const whenFiberRef: {
  <S>(
    fiberRef: FiberRef.FiberRef<S>,
    predicate: Predicate<S>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<[S, Option.Option<A>], E, R>
  <A, E, R, S>(
    self: Effect<A, E, R>,
    fiberRef: FiberRef.FiberRef<S>,
    predicate: Predicate<S>
  ): Effect<[S, Option.Option<A>], E, R>
}
```

[Source][87]

Since v2.0.0

## [![][1]][88] whenRef

Executes an effect conditionally based on the value of a `Ref` that satisfies a predicate.

**Details**

This function allows you to execute an effect only when the value of a specified `Ref` meets a condition defined by a predicate. If the value satisfies the predicate, the effect is executed, and the result is wrapped in an `Option.some`. If the predicate is not satisfied, the effect is skipped, and the result is `Option.none`. In both cases, the current value of the `Ref` is included in the result.

**Signature**

```highlight
declare const whenRef: {
  <S>(ref: Ref.Ref<S>, predicate: Predicate<S>): <A, E, R>(self: Effect<A, E, R>) => Effect<[S, Option.Option<A>], E, R>
  <A, E, R, S>(self: Effect<A, E, R>, ref: Ref.Ref<S>, predicate: Predicate<S>): Effect<[S, Option.Option<A>], E, R>
}
```

[Source][89]

Since v2.0.0

# [![][1]][90] Config

## [![][1]][91] configProviderWith

Allows working with the default configuration provider.

**Details**

This function retrieves the default configuration provider and passes it to the provided function, which can use it to perform computations or retrieve configuration values. The function can return an effect that leverages the configuration provider for its operations.

**Signature**

```highlight
declare const configProviderWith: <A, E, R>(f: (provider: ConfigProvider) => Effect<A, E, R>) => Effect<A, E, R>
```

[Source][92]

Since v2.0.0

## [![][1]][93] withConfigProvider

Executes an effect using a specific configuration provider.

**Details**

This function lets you run an effect with a specified configuration provider. The custom provider will override the default configuration provider for the duration of the effect’s execution.

**When to Use**

This is particularly useful when you need to use a different set of configuration values or sources for specific parts of your application.

**Example**

```highlight
import { Config, ConfigProvider, Effect } from "effect"

const customProvider: ConfigProvider.ConfigProvider = ConfigProvider.fromMap(new Map([["custom-key", "custom-value"]]))

const program = Effect.withConfigProvider(customProvider)(
  Effect.gen(function* () {
    const value = yield* Config.string("custom-key")
    console.log(`Config value: ${value}`)
  })
)

Effect.runPromise(program)
// Output:
// Config value: custom-value
```

**Signature**

```highlight
declare const withConfigProvider: {
  (provider: ConfigProvider): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, provider: ConfigProvider): Effect<A, E, R>
}
```

[Source][94]

Since v2.0.0

## [![][1]][95] withConfigProviderScoped

Sets a configuration provider within a scope.

**Details**

This function sets the configuration provider to a specified value and ensures that it is restored to its original value when the scope is closed.

**Signature**

```highlight
declare const withConfigProviderScoped: (provider: ConfigProvider) => Effect<void, never, Scope.Scope>
```

[Source][96]

Since v2.0.0

# [![][1]][97] Console

## [![][1]][98] console

Retreives the `Console` service from the context

**Signature**

```highlight
declare const console: Effect<Console, never, never>
```

[Source][99]

Since v2.0.0

## [![][1]][100] consoleWith

Retreives the `Console` service from the context and provides it to the specified effectful function.

**Signature**

```highlight
declare const consoleWith: <A, E, R>(f: (console: Console) => Effect<A, E, R>) => Effect<A, E, R>
```

[Source][101]

Since v2.0.0

## [![][1]][102] withConsole

Executes the specified workflow with the specified implementation of the console service.

**Signature**

```highlight
declare const withConsole: {
  <C extends Console>(console: C): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R, C extends Console>(effect: Effect<A, E, R>, console: C): Effect<A, E, R>
}
```

[Source][103]

Since v2.0.0

# [![][1]][104] Context

## [![][1]][105] Service

Simplifies the creation and management of services in Effect by defining both a `Tag` and a `Layer`.

**Details**

This function allows you to streamline the creation of services by combining the definition of a `Context.Tag` and a `Layer` in a single step. It supports various ways of providing the service implementation:

- Using an `effect` to define the service dynamically.
- Using `sync` or `succeed` to define the service statically.
- Using `scoped` to create services with lifecycle management.

It also allows you to specify dependencies for the service, which will be provided automatically when the service is used. Accessors can be optionally generated for the service, making it more convenient to use.

**Example**

```highlight
import { Effect } from "effect"

class Prefix extends Effect.Service<Prefix>()("Prefix", {
  sync: () => ({ prefix: "PRE" })
}) {}

class Logger extends Effect.Service<Logger>()("Logger", {
  accessors: true,
  effect: Effect.gen(function* () {
    const { prefix } = yield* Prefix
    return {
      info: (message: string) =>
        Effect.sync(() => {
          console.log(`[${prefix}][${message}]`)
        })
    }
  }),
  dependencies: [Prefix.Default]
}) {}
```

**Signature**

```highlight
declare const Service: <Self = never>() => [Self] extends [never]
  ? MissingSelfGeneric
  : {
      <
        const Key extends string,
        const Make extends
          | {
              readonly scoped:
                | Effect<Service.AllowedType<Key, Make>, any, any>
                | ((...args: any) => Effect<Service.AllowedType<Key, Make>, any, any>)
              readonly dependencies?: ReadonlyArray<Layer.Layer.Any>
              readonly accessors?: boolean
              readonly ಠ_ಠ: never
            }
          | {
              readonly effect:
                | Effect<Service.AllowedType<Key, Make>, any, any>
                | ((...args: any) => Effect<Service.AllowedType<Key, Make>, any, any>)
              readonly dependencies?: ReadonlyArray<Layer.Layer.Any>
              readonly accessors?: boolean
              readonly ಠ_ಠ: never
            }
          | {
              readonly sync: LazyArg<Service.AllowedType<Key, Make>>
              readonly dependencies?: ReadonlyArray<Layer.Layer.Any>
              readonly accessors?: boolean
              readonly ಠ_ಠ: never
            }
          | {
              readonly succeed: Service.AllowedType<Key, Make>
              readonly dependencies?: ReadonlyArray<Layer.Layer.Any>
              readonly accessors?: boolean
              readonly ಠ_ಠ: never
            }
      >(
        key: Key,
        make: Make
      ): Service.Class<Self, Key, Make>
      <
        const Key extends string,
        const Make extends NoExcessProperties<
          {
            readonly scoped:
              | Effect<Service.AllowedType<Key, Make>, any, any>
              | ((...args: any) => Effect<Service.AllowedType<Key, Make>, any, any>)
            readonly dependencies?: ReadonlyArray<Layer.Layer.Any>
            readonly accessors?: boolean
          },
          Make
        >
      >(
        key: Key,
        make: Make
      ): Service.Class<Self, Key, Make>
      <
        const Key extends string,
        const Make extends NoExcessProperties<
          {
            readonly effect:
              | Effect<Service.AllowedType<Key, Make>, any, any>
              | ((...args: any) => Effect<Service.AllowedType<Key, Make>, any, any>)
            readonly dependencies?: ReadonlyArray<Layer.Layer.Any>
            readonly accessors?: boolean
          },
          Make
        >
      >(
        key: Key,
        make: Make
      ): Service.Class<Self, Key, Make>
      <
        const Key extends string,
        const Make extends NoExcessProperties<
          {
            readonly sync: LazyArg<Service.AllowedType<Key, Make>>
            readonly dependencies?: ReadonlyArray<Layer.Layer.Any>
            readonly accessors?: boolean
          },
          Make
        >
      >(
        key: Key,
        make: Make
      ): Service.Class<Self, Key, Make>
      <
        const Key extends string,
        const Make extends NoExcessProperties<
          {
            readonly succeed: Service.AllowedType<Key, Make>
            readonly dependencies?: ReadonlyArray<Layer.Layer.Any>
            readonly accessors?: boolean
          },
          Make
        >
      >(
        key: Key,
        make: Make
      ): Service.Class<Self, Key, Make>
    }
```

[Source][106]

Since v3.9.0

## [![][1]][107] Service (namespace)

[Source][108]

Since v3.9.0

### [![][1]][109] ProhibitedType (interface)

**Signature**

```highlight
export interface ProhibitedType {
  Service?: `property "Service" is forbidden`
  Identifier?: `property "Identifier" is forbidden`
  Default?: `property "Default" is forbidden`
  DefaultWithoutDependencies?: `property "DefaultWithoutDependencies" is forbidden`
  _op_layer?: `property "_op_layer" is forbidden`
  _op?: `property "_op" is forbidden`
  of?: `property "of" is forbidden`
  make?: `property "make" is forbidden`
  context?: `property "context" is forbidden`
  key?: `property "key" is forbidden`
  stack?: `property "stack" is forbidden`
  name?: `property "name" is forbidden`
  pipe?: `property "pipe" is forbidden`
  use?: `property "use" is forbidden`
  _tag?: `property "_tag" is forbidden`
}
```

[Source][110]

Since v3.9.0

### [![][1]][111] AllowedType (type alias)

**Signature**

```highlight
type AllowedType<Key, Make> =
  MakeAccessors<Make> extends true
    ? Record<PropertyKey, any> & {
        readonly [K in Extract<keyof MakeService<Make>, keyof ProhibitedType>]: K extends "_tag"
          ? Key
          : ProhibitedType[K]
      }
    : Record<PropertyKey, any> & { readonly _tag?: Key }
```

[Source][112]

Since v3.9.0

### [![][1]][113] Class (type alias)

**Signature**

```highlight
type Class<Self, Key, Make> = {
  new (_: MakeService<Make>): MakeService<Make> & {
    readonly _tag: Key
  }
  readonly use: <X>(
    body: (_: Self) => X
  ) => [X] extends [Effect<infer A, infer E, infer R>]
    ? Effect<A, E, R | Self>
    : [X] extends [PromiseLike<infer A>]
      ? Effect<A, Cause.UnknownException, Self>
      : Effect<X, never, Self>
  readonly make: (_: MakeService<Make>) => Self
} & Context.Tag<Self, Self> & { key: Key } & (MakeAccessors<Make> extends true
    ? Tag.Proxy<Self, MakeService<Make>>
    : {}) &
  (MakeDeps<Make> extends never
    ? {
        readonly Default: HasArguments<Make> extends true
          ? (...args: MakeArguments<Make>) => Layer.Layer<Self, MakeError<Make>, MakeContext<Make>>
          : Layer.Layer<Self, MakeError<Make>, MakeContext<Make>>
      }
    : {
        readonly DefaultWithoutDependencies: HasArguments<Make> extends true
          ? (...args: MakeArguments<Make>) => Layer.Layer<Self, MakeError<Make>, MakeContext<Make>>
          : Layer.Layer<Self, MakeError<Make>, MakeContext<Make>>

        readonly Default: HasArguments<Make> extends true
          ? (
              ...args: MakeArguments<Make>
            ) => Layer.Layer<
              Self,
              MakeError<Make> | MakeDepsE<Make>,
              Exclude<MakeContext<Make>, MakeDepsOut<Make>> | MakeDepsIn<Make>
            >
          : Layer.Layer<
              Self,
              MakeError<Make> | MakeDepsE<Make>,
              Exclude<MakeContext<Make>, MakeDepsOut<Make>> | MakeDepsIn<Make>
            >
      })
```

[Source][114]

Since v3.9.0

### [![][1]][115] MakeService (type alias)

**Signature**

```highlight
type MakeService<Make> = Make extends { readonly effect: Effect<infer _A, infer _E, infer _R> }
  ? _A
  : Make extends { readonly scoped: Effect<infer _A, infer _E, infer _R> }
    ? _A
    : Make extends { readonly effect: (...args: infer _Args) => Effect<infer _A, infer _E, infer _R> }
      ? _A
      : Make extends { readonly scoped: (...args: infer _Args) => Effect<infer _A, infer _E, infer _R> }
        ? _A
        : Make extends { readonly sync: LazyArg<infer A> }
          ? A
          : Make extends { readonly succeed: infer A }
            ? A
            : never
```

[Source][116]

Since v3.9.0

### [![][1]][117] MakeError (type alias)

**Signature**

```highlight
type MakeError<Make> = Make extends { readonly effect: Effect<infer _A, infer _E, infer _R> }
  ? _E
  : Make extends { readonly scoped: Effect<infer _A, infer _E, infer _R> }
    ? _E
    : Make extends { readonly effect: (...args: infer _Args) => Effect<infer _A, infer _E, infer _R> }
      ? _E
      : Make extends { readonly scoped: (...args: infer _Args) => Effect<infer _A, infer _E, infer _R> }
        ? _E
        : never
```

[Source][118]

Since v3.9.0

### [![][1]][119] MakeContext (type alias)

**Signature**

```highlight
type MakeContext<Make> = Make extends { readonly effect: Effect<infer _A, infer _E, infer _R> }
  ? _R
  : Make extends { readonly scoped: Effect<infer _A, infer _E, infer _R> }
    ? Exclude<_R, Scope.Scope>
    : Make extends { readonly effect: (...args: infer _Args) => Effect<infer _A, infer _E, infer _R> }
      ? _R
      : Make extends { readonly scoped: (...args: infer _Args) => Effect<infer _A, infer _E, infer _R> }
        ? Exclude<_R, Scope.Scope>
        : never
```

[Source][120]

Since v3.9.0

### [![][1]][121] MakeDeps (type alias)

**Signature**

```highlight
type MakeDeps<Make> = Make extends { readonly dependencies: ReadonlyArray<Layer.Layer.Any> }
  ? Make["dependencies"][number]
  : never
```

[Source][122]

Since v3.9.0

### [![][1]][123] MakeDepsOut (type alias)

**Signature**

```highlight
type MakeDepsOut<Make> = Contravariant.Type<MakeDeps<Make>[Layer.LayerTypeId]["_ROut"]>
```

[Source][124]

Since v3.9.0

### [![][1]][125] MakeDepsE (type alias)

**Signature**

```highlight
type MakeDepsE<Make> = Covariant.Type<MakeDeps<Make>[Layer.LayerTypeId]["_E"]>
```

[Source][126]

Since v3.9.0

### [![][1]][127] MakeDepsIn (type alias)

**Signature**

```highlight
type MakeDepsIn<Make> = Covariant.Type<MakeDeps<Make>[Layer.LayerTypeId]["_RIn"]>
```

[Source][128]

Since v3.9.0

### [![][1]][129] MakeAccessors (type alias)

**Signature**

```highlight
type MakeAccessors<Make> = Make extends { readonly accessors: true } ? true : false
```

[Source][130]

Since v3.9.0

### [![][1]][131] MakeArguments (type alias)

**Signature**

```highlight
type MakeArguments<Make> = Make extends {
  readonly effect: (...args: infer Args) => Effect<infer _A, infer _E, infer _R>
}
  ? Args
  : Make extends { readonly scoped: (...args: infer Args) => Effect<infer _A, infer _E, infer _R> }
    ? Args
    : never
```

[Source][132]

Since v3.16.0

### [![][1]][133] HasArguments (type alias)

**Signature**

```highlight
type HasArguments<Make> = Make extends {
  readonly scoped: (...args: ReadonlyArray<any>) => Effect<infer _A, infer _E, infer _R>
}
  ? true
  : Make extends {
        readonly effect: (...args: ReadonlyArray<any>) => Effect<infer _A, infer _E, infer _R>
      }
    ? true
    : false
```

[Source][134]

Since v3.16.0

## [![][1]][135] Tag

Creates a unique tag for a dependency, embedding the service’s methods as static properties.

**Details**

This function allows you to define a `Tag` for a service or dependency in your application. The `Tag` not only acts as an identifier but also provides direct access to the service’s methods via static properties. This makes it easier to access and use the service in your code without manually managing contexts.

In the example below, the fields of the service (in this case, the `notify` method) are turned into static properties of the Notifications class, making it easier to access them.

**Example**

```highlight
import { Effect } from "effect"

class Notifications extends Effect.Tag("Notifications")<
  Notifications,
  { readonly notify: (message: string) => Effect.Effect<void> }
>() {}

// Create an effect that depends on the Notifications service
const action = Notifications.notify("Hello, world!")
```

**Signature**

```highlight
declare const Tag: <const Id extends string>(
  id: Id
) => <Self, Type extends Tag.AllowedType>() => Context.TagClass<Self, Id, Type> &
  (Type extends Record<PropertyKey, any> ? Tag.Proxy<Self, Type> : {}) & {
    use: <X>(
      body: (_: Type) => X
    ) => [X] extends [Effect<infer A, infer E, infer R>]
      ? Effect<A, E, R | Self>
      : [X] extends [PromiseLike<infer A>]
        ? Effect<A, Cause.UnknownException, Self>
        : Effect<X, never, Self>
  }
```

[Source][136]

Since v2.0.0

## [![][1]][137] context

Accesses the full context of the effect.

**Details**

This function provides the ability to access the entire context required by an effect. The context is a container that holds dependencies or environment values needed by an effect to run. By using this function, you can retrieve and work with the context directly within an effect.

**Signature**

```highlight
declare const context: <R>() => Effect<Context.Context<R>, never, R>
```

[Source][138]

Since v2.0.0

## [![][1]][139] contextWith

Accesses the context and applies a transformation function.

**Details**

This function retrieves the context of the effect and applies a pure transformation function to it. The result of the transformation is then returned within the effect.

**See**

- `contextWithEffect` for a version that allows effectful transformations.

**Signature**

```highlight
declare const contextWith: <R, A>(f: (context: Context.Context<R>) => A) => Effect<A, never, R>
```

[Source][140]

Since v2.0.0

## [![][1]][141] contextWithEffect

Accesses the context and performs an effectful transformation.

**Details**

This function retrieves the context and allows you to transform it effectually using another effect. It is useful when the transformation involves asynchronous or effectful operations.

**See**

- `contextWith` for a version that allows pure transformations.

**Signature**

```highlight
declare const contextWithEffect: <R2, A, E, R>(
  f: (context: Context.Context<R2>) => Effect<A, E, R>
) => Effect<A, E, R | R2>
```

[Source][142]

Since v2.0.0

## [![][1]][143] mapInputContext

Provides part of the required context while leaving the rest unchanged.

**Details**

This function allows you to transform the context required by an effect, providing part of the context and leaving the rest to be fulfilled later.

**Example**

```highlight
import { Context, Effect } from "effect"

class Service1 extends Context.Tag("Service1")<Service1, { readonly port: number }>() {}
class Service2 extends Context.Tag("Service2")<Service2, { readonly connection: string }>() {}

const program = Effect.gen(function* () {
  const service1 = yield* Service1
  console.log(service1.port)
  const service2 = yield* Service2
  console.log(service2.connection)
  return "some result"
})

//      ┌─── Effect<string, never, Service2>
//      ▼
const programWithService1 = Effect.mapInputContext(program, (ctx: Context.Context<Service2>) =>
  Context.add(ctx, Service1, { port: 3000 })
)

const runnable = programWithService1.pipe(
  Effect.provideService(Service2, { connection: "localhost" }),
  Effect.provideService(Service1, { port: 3001 })
)

Effect.runPromise(runnable)
// Output:
// 3000
// localhost
```

**Signature**

```highlight
declare const mapInputContext: {
  <R2, R>(f: (context: Context.Context<R2>) => Context.Context<R>): <A, E>(self: Effect<A, E, R>) => Effect<A, E, R2>
  <A, E, R, R2>(self: Effect<A, E, R>, f: (context: Context.Context<R2>) => Context.Context<R>): Effect<A, E, R2>
}
```

[Source][144]

Since v2.0.0

## [![][1]][145] provide

Provides necessary dependencies to an effect, removing its environmental requirements.

**Details**

This function allows you to supply the required environment for an effect. The environment can be provided in the form of one or more `Layer`s, a `Context`, a `Runtime`, or a `ManagedRuntime`. Once the environment is provided, the effect can run without requiring external dependencies.

You can compose layers to create a modular and reusable way of setting up the environment for effects. For example, layers can be used to configure databases, logging services, or any other required dependencies.

**Example**

```highlight
import { Context, Effect, Layer } from "effect"

class Database extends Context.Tag("Database")<
  Database,
  { readonly query: (sql: string) => Effect.Effect<Array<unknown>> }
>() {}

const DatabaseLive = Layer.succeed(Database, {
  // Simulate a database query
  query: (sql: string) => Effect.log(`Executing query: ${sql}`).pipe(Effect.as([]))
})

//      ┌─── Effect<unknown[], never, Database>
//      ▼
const program = Effect.gen(function* () {
  const database = yield* Database
  const result = yield* database.query("SELECT * FROM users")
  return result
})

//      ┌─── Effect<unknown[], never, never>
//      ▼
const runnable = Effect.provide(program, DatabaseLive)

Effect.runPromise(runnable).then(console.log)
// Output:
// timestamp=... level=INFO fiber=#0 message="Executing query: SELECT * FROM users"
// []
```

**See**

- `provideService` for providing a service to an effect.

**Signature**

```highlight
declare const provide: {
  <const Layers extends [Layer.Layer.Any, ...Array<Layer.Layer.Any>]>(
    layers: Layers
  ): <A, E, R>(
    self: Effect<A, E, R>
  ) => Effect<
    A,
    E | { [k in keyof Layers]: Layer.Layer.Error<Layers[k]> }[number],
    | { [k in keyof Layers]: Layer.Layer.Context<Layers[k]> }[number]
    | Exclude<R, { [k in keyof Layers]: Layer.Layer.Success<Layers[k]> }[number]>
  >
  <ROut, E2, RIn>(
    layer: Layer.Layer<ROut, E2, RIn>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E | E2, RIn | Exclude<R, ROut>>
  <R2>(context: Context.Context<R2>): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, Exclude<R, R2>>
  <R2>(runtime: Runtime.Runtime<R2>): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, Exclude<R, R2>>
  <E2, R2>(
    managedRuntime: ManagedRuntime.ManagedRuntime<R2, E2>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E | E2, Exclude<R, R2>>
  <A, E, R, const Layers extends [Layer.Layer.Any, ...Array<Layer.Layer.Any>]>(
    self: Effect<A, E, R>,
    layers: Layers
  ): Effect<
    A,
    E | { [k in keyof Layers]: Layer.Layer.Error<Layers[k]> }[number],
    | { [k in keyof Layers]: Layer.Layer.Context<Layers[k]> }[number]
    | Exclude<R, { [k in keyof Layers]: Layer.Layer.Success<Layers[k]> }[number]>
  >
  <A, E, R, ROut, E2, RIn>(
    self: Effect<A, E, R>,
    layer: Layer.Layer<ROut, E2, RIn>
  ): Effect<A, E | E2, RIn | Exclude<R, ROut>>
  <A, E, R, R2>(self: Effect<A, E, R>, context: Context.Context<R2>): Effect<A, E, Exclude<R, R2>>
  <A, E, R, R2>(self: Effect<A, E, R>, runtime: Runtime.Runtime<R2>): Effect<A, E, Exclude<R, R2>>
  <A, E, E2, R, R2>(
    self: Effect<A, E, R>,
    runtime: ManagedRuntime.ManagedRuntime<R2, E2>
  ): Effect<A, E | E2, Exclude<R, R2>>
}
```

[Source][146]

Since v2.0.0

## [![][1]][147] provideService

Provides an implementation for a service in the context of an effect.

**Details**

This function allows you to supply a specific implementation for a service required by an effect. Services are typically defined using `Context.Tag`, which acts as a unique identifier for the service. By using this function, you link the service to its concrete implementation, enabling the effect to execute successfully without additional requirements.

For example, you can use this function to provide a random number generator, a logger, or any other service your effect depends on. Once the service is provided, all parts of the effect that rely on the service will automatically use the implementation you supplied.

**Example**

```highlight
import { Effect, Context } from "effect"

// Declaring a tag for a service that generates random numbers
class Random extends Context.Tag("MyRandomService")<Random, { readonly next: Effect.Effect<number> }>() {}

// Using the service
const program = Effect.gen(function* () {
  const random = yield* Random
  const randomNumber = yield* random.next
  console.log(`random number: ${randomNumber}`)
})

// Providing the implementation
//
//      ┌─── Effect<void, never, never>
//      ▼
const runnable = Effect.provideService(program, Random, {
  next: Effect.sync(() => Math.random())
})

// Run successfully
Effect.runPromise(runnable)
// Example Output:
// random number: 0.8241872233134417
```

**See**

- `provide` for providing multiple layers to an effect.

**Signature**

```highlight
declare const provideService: {
  <I, S>(tag: Context.Tag<I, S>, service: NoInfer<S>): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, Exclude<R, I>>
  <A, E, R, I, S>(self: Effect<A, E, R>, tag: Context.Tag<I, S>, service: NoInfer<S>): Effect<A, E, Exclude<R, I>>
}
```

[Source][148]

Since v2.0.0

## [![][1]][149] provideServiceEffect

Dynamically provides an implementation for a service using an effect.

**Details**

This function allows you to provide an implementation for a service dynamically by using another effect. The provided effect is executed to produce the service implementation, which is then made available to the consuming effect. This is particularly useful when the service implementation itself requires asynchronous or resource-intensive initialization.

For example, you can use this function to lazily initialize a database connection or fetch configuration values from an external source before making the service available to your effect.

**Signature**

```highlight
declare const provideServiceEffect: {
  <I, S, E1, R1>(
    tag: Context.Tag<I, S>,
    effect: Effect<NoInfer<S>, E1, R1>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E | E1, R1 | Exclude<R, I>>
  <A, E, R, I, S, E1, R1>(
    self: Effect<A, E, R>,
    tag: Context.Tag<I, S>,
    effect: Effect<NoInfer<S>, E1, R1>
  ): Effect<A, E | E1, R1 | Exclude<R, I>>
}
```

[Source][150]

Since v2.0.0

## [![][1]][151] serviceConstants

**Signature**

```highlight
declare const serviceConstants: <S, SE, SR>(
  getService: Effect<S, SE, SR>
) => {
  [k in { [k in keyof S]: k }[keyof S]]: S[k] extends Effect<infer A, infer E, infer R>
    ? Effect<A, SE | E, SR | R>
    : Effect<S[k], SE, SR>
}
```

[Source][152]

Since v2.0.0

## [![][1]][153] serviceFunction

Creates a function that uses a service from the context to produce a value.

**See**

- `serviceFunctionEffect` for a version that returns an effect.

**Signature**

```highlight
declare const serviceFunction: <T extends Effect<any, any, any>, Args extends Array<any>, A>(
  getService: T,
  f: (_: Effect.Success<T>) => (...args: Args) => A
) => (...args: Args) => Effect<A, Effect.Error<T>, Effect.Context<T>>
```

[Source][154]

Since v2.0.0

## [![][1]][155] serviceFunctionEffect

Creates a function that uses a service from the context to produce an effect.

**See**

- `serviceFunction` for a version that returns a value.

**Signature**

```highlight
declare const serviceFunctionEffect: <T extends Effect<any, any, any>, Args extends Array<any>, A, E, R>(
  getService: T,
  f: (_: Effect.Success<T>) => (...args: Args) => Effect<A, E, R>
) => (...args: Args) => Effect<A, E | Effect.Error<T>, R | Effect.Context<T>>
```

[Source][156]

Since v2.0.0

## [![][1]][157] serviceFunctions

**Signature**

```highlight
declare const serviceFunctions: <S, SE, SR>(
  getService: Effect<S, SE, SR>
) => {
  [k in keyof S as S[k] extends (...args: Array<any>) => Effect<any, any, any> ? k : never]: S[k] extends (
    ...args: infer Args
  ) => Effect<infer A, infer E, infer R>
    ? (...args: Args) => Effect<A, SE | E, SR | R>
    : never
}
```

[Source][158]

Since v2.0.0

## [![][1]][159] serviceMembers

**Signature**

```highlight
declare const serviceMembers: <S, SE, SR>(
  getService: Effect<S, SE, SR>
) => {
  functions: {
    [k in keyof S as S[k] extends (...args: Array<any>) => Effect<any, any, any> ? k : never]: S[k] extends (
      ...args: infer Args
    ) => Effect<infer A, infer E, infer R>
      ? (...args: Args) => Effect<A, SE | E, SR | R>
      : never
  }
  constants: {
    [k in { [k in keyof S]: k }[keyof S]]: S[k] extends Effect<infer A, infer E, infer R>
      ? Effect<A, SE | E, SR | R>
      : Effect<S[k], SE, SR>
  }
}
```

[Source][160]

Since v2.0.0

## [![][1]][161] serviceOption

Retrieves an optional service from the context as an `Option`.

**Details**

This function retrieves a service from the context and wraps it in an `Option`. If the service is available, it returns a `Some` containing the service. If the service is not found, it returns a `None`. This approach is useful when you want to handle the absence of a service gracefully without causing an error.

**When to Use**

Use this function when:

- You need to access a service that may or may not be present in the context.
- You want to handle the absence of a service using the `Option` type instead of throwing an error.

**See**

- `serviceOptional` for a version that throws an error if the service is missing.

**Signature**

```highlight
declare const serviceOption: <I, S>(tag: Context.Tag<I, S>) => Effect<Option.Option<S>>
```

[Source][162]

Since v2.0.0

## [![][1]][163] serviceOptional

Retrieves a service from the context, throwing an error if it is missing.

**Details**

This function retrieves a required service from the context. If the service is available, it returns the service. If the service is missing, it throws a `NoSuchElementException`, which can be handled using Effect’s error-handling mechanisms. This is useful for services that are critical to the execution of your effect.

**See**

- `serviceOption` for a version that returns an `Option` instead of throwing an error.

**Signature**

```highlight
declare const serviceOptional: <I, S>(tag: Context.Tag<I, S>) => Effect<S, Cause.NoSuchElementException>
```

[Source][164]

Since v2.0.0

## [![][1]][165] updateService

Updates a service in the context with a new implementation.

**Details**

This function modifies the existing implementation of a service in the context. It retrieves the current service, applies the provided transformation function `f`, and replaces the old service with the transformed one.

**When to Use**

This is useful for adapting or extending a service’s behavior during the execution of an effect.

**Signature**

```highlight
declare const updateService: {
  <I, S>(
    tag: Context.Tag<I, S>,
    f: (service: NoInfer<S>) => NoInfer<S>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R | I>
  <A, E, R, I, S>(
    self: Effect<A, E, R>,
    tag: Context.Tag<I, S>,
    f: (service: NoInfer<S>) => NoInfer<S>
  ): Effect<A, E, R | I>
}
```

[Source][166]

Since v2.0.0

# [![][1]][167] Converting Failures to Defects

## [![][1]][168] orDie

Converts an effect’s failure into a fiber termination, removing the error from the effect’s type.

**Details**

The `orDie` function is used when you encounter errors that you do not want to handle or recover from. It removes the error type from the effect and ensures that any failure will terminate the fiber. This is useful for propagating failures as defects, signaling that they should not be handled within the effect.

\*_When to Use_

Use `orDie` when failures should be treated as unrecoverable defects and no error handling is required.

**Example** (Propagating an Error as a Defect)

```highlight
import { Effect } from "effect"

const divide = (a: number, b: number) =>
  b === 0 ? Effect.fail(new Error("Cannot divide by zero")) : Effect.succeed(a / b)

//      ┌─── Effect<number, never, never>
//      ▼
const program = Effect.orDie(divide(1, 0))

Effect.runPromise(program).catch(console.error)
// Output:
// (FiberFailure) Error: Cannot divide by zero
//   ...stack trace...
```

**See**

- `orDieWith` if you need to customize the error.

**Signature**

```highlight
declare const orDie: <A, E, R>(self: Effect<A, E, R>) => Effect<A, never, R>
```

[Source][169]

Since v2.0.0

## [![][1]][170] orDieWith

Converts an effect’s failure into a fiber termination with a custom error.

**Details**

The `orDieWith` function behaves like `orDie`, but it allows you to provide a mapping function to transform the error before terminating the fiber. This is useful for cases where you want to include a more detailed or user-friendly error when the failure is propagated as a defect.

**When to Use**

Use `orDieWith` when failures should terminate the fiber as defects, and you want to customize the error for clarity or debugging purposes.

**Example** (Customizing Defect)

```highlight
import { Effect } from "effect"

const divide = (a: number, b: number) =>
  b === 0 ? Effect.fail(new Error("Cannot divide by zero")) : Effect.succeed(a / b)

//      ┌─── Effect<number, never, never>
//      ▼
const program = Effect.orDieWith(divide(1, 0), (error) => new Error(`defect: ${error.message}`))

Effect.runPromise(program).catch(console.error)
// Output:
// (FiberFailure) Error: defect: Cannot divide by zero
//   ...stack trace...
```

**See**

- `orDie` if you don’t need to customize the error.

**Signature**

```highlight
declare const orDieWith: {
  <E>(f: (error: E) => unknown): <A, R>(self: Effect<A, E, R>) => Effect<A, never, R>
  <A, E, R>(self: Effect<A, E, R>, f: (error: E) => unknown): Effect<A, never, R>
}
```

[Source][171]

Since v2.0.0

# [![][1]][172] Creating Effects

## [![][1]][173] async

Creates an `Effect` from a callback-based asynchronous function.

**Details**

The `resume` function:

- Must be called exactly once. Any additional calls will be ignored.
- Can return an optional `Effect` that will be run if the `Fiber` executing this `Effect` is interrupted. This can be useful in scenarios where you need to handle resource cleanup if the operation is interrupted.
- Can receive an `AbortSignal` to handle interruption if needed.

The `FiberId` of the fiber that may complete the async callback may also be specified using the `blockingOn` argument. This is called the “blocking fiber” because it suspends the fiber executing the `async` effect (i.e. semantically blocks the fiber from making progress). Specifying this fiber id in cases where it is known will improve diagnostics, but not affect the behavior of the returned effect.

**When to Use**

Use `Effect.async` when dealing with APIs that use callback-style instead of `async/await` or `Promise`.

**Example** (Wrapping a Callback API)

```highlight
import { Effect } from "effect"
import * as NodeFS from "node:fs"

const readFile = (filename: string) =>
  Effect.async<Buffer, Error>((resume) => {
    NodeFS.readFile(filename, (error, data) => {
      if (error) {
        // Resume with a failed Effect if an error occurs
        resume(Effect.fail(error))
      } else {
        // Resume with a succeeded Effect if successful
        resume(Effect.succeed(data))
      }
    })
  })

//      ┌─── Effect<Buffer, Error, never>
//      ▼
const program = readFile("example.txt")
```

**Example** (Handling Interruption with Cleanup)

```highlight
import { Effect, Fiber } from "effect"
import * as NodeFS from "node:fs"

// Simulates a long-running operation to write to a file
const writeFileWithCleanup = (filename: string, data: string) =>
  Effect.async<void, Error>((resume) => {
    const writeStream = NodeFS.createWriteStream(filename)

    // Start writing data to the file
    writeStream.write(data)

    // When the stream is finished, resume with success
    writeStream.on("finish", () => resume(Effect.void))

    // In case of an error during writing, resume with failure
    writeStream.on("error", (err) => resume(Effect.fail(err)))

    // Handle interruption by returning a cleanup effect
    return Effect.sync(() => {
      console.log(`Cleaning up ${filename}`)
      NodeFS.unlinkSync(filename)
    })
  })

const program = Effect.gen(function* () {
  const fiber = yield* Effect.fork(writeFileWithCleanup("example.txt", "Some long data..."))
  // Simulate interrupting the fiber after 1 second
  yield* Effect.sleep("1 second")
  yield* Fiber.interrupt(fiber) // This will trigger the cleanup
})

// Run the program
Effect.runPromise(program)
// Output:
// Cleaning up example.txt
```

**Example** (Handling Interruption with AbortSignal)

```highlight
import { Effect, Fiber } from "effect"

// A task that supports interruption using AbortSignal
const interruptibleTask = Effect.async<void, Error>((resume, signal) => {
  // Handle interruption
  signal.addEventListener("abort", () => {
    console.log("Abort signal received")
    clearTimeout(timeoutId)
  })

  // Simulate a long-running task
  const timeoutId = setTimeout(() => {
    console.log("Operation completed")
    resume(Effect.void)
  }, 2000)
})

const program = Effect.gen(function* () {
  const fiber = yield* Effect.fork(interruptibleTask)
  // Simulate interrupting the fiber after 1 second
  yield* Effect.sleep("1 second")
  yield* Fiber.interrupt(fiber)
})

// Run the program
Effect.runPromise(program)
// Output:
// Abort signal received
```

**Signature**

```highlight
declare const async: <A, E = never, R = never>(
  resume: (callback: (_: Effect<A, E, R>) => void, signal: AbortSignal) => void | Effect<void, never, R>,
  blockingOn?: FiberId.FiberId
) => Effect<A, E, R>
```

[Source][174]

Since v2.0.0

## [![][1]][175] asyncEffect

A variant of `async` where the registration function may return an `Effect`.

**Signature**

```highlight
declare const asyncEffect: <A, E, R, R3, E2, R2>(
  register: (callback: (_: Effect<A, E, R>) => void) => Effect<Effect<void, never, R3> | void, E2, R2>
) => Effect<A, E | E2, R | R2 | R3>
```

[Source][176]

Since v2.0.0

## [![][1]][177] custom

Low level constructor that enables for custom stack tracing cutpoints.

It is meant to be called with a bag of instructions that become available in the “this” of the effect.

**Example**

```highlight
import { Effect } from "effect"

const throwingFunction = () => {
  throw new Error()
}
const blowUp = Effect.custom(throwingFunction, function () {
  return Effect.succeed(this.effect_instruction_i0())
})
```

**Signature**

```highlight
declare const custom: {
  <X, A, E, R>(i0: X, body: (this: { effect_instruction_i0: X }) => Effect<A, E, R>): Effect<A, E, R>
  <X, Y, A, E, R>(
    i0: X,
    i1: Y,
    body: (this: { effect_instruction_i0: X; effect_instruction_i1: Y }) => Effect<A, E, R>
  ): Effect<A, E, R>
  <X, Y, Z, A, E, R>(
    i0: X,
    i1: Y,
    i2: Z,
    body: (this: { effect_instruction_i0: X; effect_instruction_i1: Y; effect_instruction_i2: Z }) => Effect<A, E, R>
  ): Effect<A, E, R>
}
```

[Source][178]

Since v2.0.0

## [![][1]][179] die

Creates an effect that terminates a fiber with a specified error.

**Details**

This function is used to signal a defect, which represents a critical and unexpected error in the code. When invoked, it produces an effect that does not handle the error and instead terminates the fiber.

The error channel of the resulting effect is of type `never`, indicating that it cannot recover from this failure.

**When to Use**

Use this function when encountering unexpected conditions in your code that should not be handled as regular errors but instead represent unrecoverable defects.

**Example** (Terminating on Division by Zero with a Specified Error)

```highlight
import { Effect } from "effect"

const divide = (a: number, b: number) =>
  b === 0 ? Effect.die(new Error("Cannot divide by zero")) : Effect.succeed(a / b)

//      ┌─── Effect<number, never, never>
//      ▼
const program = divide(1, 0)

Effect.runPromise(program).catch(console.error)
// Output:
// (FiberFailure) Error: Cannot divide by zero
//   ...stack trace...
```

**See**

- `dieSync` for a variant that throws a specified error, evaluated lazily.
- `dieMessage` for a variant that throws a `RuntimeException` with a message.

**Signature**

```highlight
declare const die: (defect: unknown) => Effect<never>
```

[Source][180]

Since v2.0.0

## [![][1]][181] dieMessage

Creates an effect that terminates a fiber with a `RuntimeException` containing the specified message.

**Details**

This function is used to signal a defect, representing a critical and unexpected error in the code. When invoked, it produces an effect that terminates the fiber with a `RuntimeException` carrying the given message.

The resulting effect has an error channel of type `never`, indicating it does not handle or recover from the error.

**When to Use**

Use this function when you want to terminate a fiber due to an unrecoverable defect and include a clear explanation in the message.

**Example** (Terminating on Division by Zero with a Specified Message)

```highlight
import { Effect } from "effect"

const divide = (a: number, b: number) => (b === 0 ? Effect.dieMessage("Cannot divide by zero") : Effect.succeed(a / b))

//      ┌─── Effect<number, never, never>
//      ▼
const program = divide(1, 0)

Effect.runPromise(program).catch(console.error)
// Output:
// (FiberFailure) RuntimeException: Cannot divide by zero
//   ...stack trace...
```

**See**

- `die` for a variant that throws a specified error.
- `dieSync` for a variant that throws a specified error, evaluated lazily.

**Signature**

```highlight
declare const dieMessage: (message: string) => Effect<never>
```

[Source][182]

Since v2.0.0

## [![][1]][183] dieSync

Creates an effect that dies with the specified error, evaluated lazily.

**Details**

This function allows you to create an effect that will terminate with a fatal error. The error is provided as a lazy argument, meaning it will only be evaluated when the effect runs.

**See**

- `die` if you don’t need to evaluate the error lazily.

**Signature**

```highlight
declare const dieSync: (evaluate: LazyArg<unknown>) => Effect<never>
```

[Source][184]

Since v2.0.0

## [![][1]][185] fail

Creates an `Effect` that represents a recoverable error.

**When to Use**

Use this function to explicitly signal an error in an `Effect`. The error will keep propagating unless it is handled. You can handle the error with functions like `catchAll` or `catchTag`.

**Example** (Creating a Failed Effect)

```highlight
import { Effect } from "effect"

//      ┌─── Effect<never, Error, never>
//      ▼
const failure = Effect.fail(new Error("Operation failed due to network error"))
```

**See**

- `succeed` to create an effect that represents a successful value.

**Signature**

```highlight
declare const fail: <E>(error: E) => Effect<never, E>
```

[Source][186]

Since v2.0.0

## [![][1]][187] failCause

Creates an `Effect` that fails with the specified `Cause`.

**Signature**

```highlight
declare const failCause: <E>(cause: Cause.Cause<E>) => Effect<never, E>
```

[Source][188]

Since v2.0.0

## [![][1]][189] failCauseSync

Creates an `Effect` that fails with the specified `Cause`, evaluated lazily.

**Signature**

```highlight
declare const failCauseSync: <E>(evaluate: LazyArg<Cause.Cause<E>>) => Effect<never, E>
```

[Source][190]

Since v2.0.0

## [![][1]][191] failSync

Creates an `Effect` that fails with the specified error, evaluated lazily.

**Signature**

```highlight
declare const failSync: <E>(evaluate: LazyArg<E>) => Effect<never, E>
```

[Source][192]

Since v2.0.0

## [![][1]][193] gen

Provides a way to write effectful code using generator functions, simplifying control flow and error handling.

**When to Use**

`Effect.gen` allows you to write code that looks and behaves like synchronous code, but it can handle asynchronous tasks, errors, and complex control flow (like loops and conditions). It helps make asynchronous code more readable and easier to manage.

The generator functions work similarly to `async/await` but with more explicit control over the execution of effects. You can `yield*` values from effects and return the final result at the end.

**Example**

```highlight
import { Effect } from "effect"

const addServiceCharge = (amount: number) => amount + 1

const applyDiscount = (total: number, discountRate: number): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be zero"))
    : Effect.succeed(total - (total * discountRate) / 100)

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

const fetchDiscountRate = Effect.promise(() => Promise.resolve(5))

export const program = Effect.gen(function* () {
  const transactionAmount = yield* fetchTransactionAmount
  const discountRate = yield* fetchDiscountRate
  const discountedAmount = yield* applyDiscount(transactionAmount, discountRate)
  const finalAmount = addServiceCharge(discountedAmount)
  return `Final amount to charge: ${finalAmount}`
})
```

**Signature**

```highlight
declare const gen: {
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff>(
    f: (resume: Adapter) => Generator<Eff, AEff, never>
  ): Effect<
    AEff,
    [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
    [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
  >
  <Self, Eff extends YieldWrap<Effect<any, any, any>>, AEff>(
    self: Self,
    f: (this: Self, resume: Adapter) => Generator<Eff, AEff, never>
  ): Effect<
    AEff,
    [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
    [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
  >
}
```

[Source][194]

Since v2.0.0

## [![][1]][195] never

An effect that that runs indefinitely and never produces any result. The moral equivalent of `while(true) {}`, only without the wasted CPU cycles.

**When to Use**

It could be useful for long-running background tasks or to simulate waiting behavior without actually consuming resources. This effect is ideal for cases where you want to keep the program alive or in a certain state without performing any active work.

**Signature**

```highlight
declare const never: Effect<never, never, never>
```

[Source][196]

Since v2.0.0

## [![][1]][197] promise

Creates an `Effect` that represents an asynchronous computation guaranteed to succeed.

**Details**

The provided function (`thunk`) returns a `Promise` that should never reject; if it does, the error will be treated as a “defect”.

This defect is not a standard error but indicates a flaw in the logic that was expected to be error-free. You can think of it similar to an unexpected crash in the program, which can be further managed or logged using tools like `catchAllDefect`.

**Interruptions**

An optional `AbortSignal` can be provided to allow for interruption of the wrapped `Promise` API.

**When to Use**

Use this function when you are sure the operation will not reject.

**Example** (Delayed Message)

```highlight
import { Effect } from "effect"

const delay = (message: string) =>
  Effect.promise<string>(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(message)
        }, 2000)
      })
  )

//      ┌─── Effect<string, never, never>
//      ▼
const program = delay("Async operation completed successfully!")
```

**See**

- `tryPromise` for a version that can handle failures.

**Signature**

```highlight
declare const promise: <A>(evaluate: (signal: AbortSignal) => PromiseLike<A>) => Effect<A>
```

[Source][198]

Since v2.0.0

## [![][1]][199] succeed

Creates an `Effect` that always succeeds with a given value.

**When to Use**

Use this function when you need an effect that completes successfully with a specific value without any errors or external dependencies.

**Example** (Creating a Successful Effect)

```highlight
import { Effect } from "effect"

// Creating an effect that represents a successful scenario
//
//      ┌─── Effect<number, never, never>
//      ▼
const success = Effect.succeed(42)
```

**See**

- `fail` to create an effect that represents a failure.

**Signature**

```highlight
declare const succeed: <A>(value: A) => Effect<A>
```

[Source][200]

Since v2.0.0

## [![][1]][201] succeedNone

Returns an effect which succeeds with `None`.

**When to Use**

Use this function when you need to represent the absence of a value in your code, especially when working with optional data. This can be helpful when you want to indicate that no result is available without throwing an error or performing additional logic.

**See**

- `succeedSome` to create an effect that succeeds with a `Some` value.

**Signature**

```highlight
declare const succeedNone: Effect<Option.Option<never>, never, never>
```

[Source][202]

Since v2.0.0

## [![][1]][203] succeedSome

Returns an effect which succeeds with the value wrapped in a `Some`.

**See**

- `succeedNone` for a similar function that returns `None` when the value is absent.

**Signature**

```highlight
declare const succeedSome: <A>(value: A) => Effect<Option.Option<A>>
```

[Source][204]

Since v2.0.0

## [![][1]][205] suspend

Delays the creation of an `Effect` until it is actually needed.

**Details**

The `Effect.suspend` function takes a thunk that represents the effect and wraps it in a suspended effect. This means the effect will not be created until it is explicitly needed, which is helpful in various scenarios:

- **Lazy Evaluation**: Helps optimize performance by deferring computations, especially when the effect might not be needed, or when its computation is expensive. This also ensures that any side effects or scoped captures are re-executed on each invocation.
- **Handling Circular Dependencies**: Useful in managing circular dependencies, such as recursive functions that need to avoid eager evaluation to prevent stack overflow.
- **Unifying Return Types**: Can help TypeScript unify return types in situations where multiple branches of logic return different effects, simplifying type inference.

**When to Use**

Use this function when you need to defer the evaluation of an effect until it is required. This is particularly useful for optimizing expensive computations, managing circular dependencies, or resolving type inference issues.

**Example** (Lazy Evaluation with Side Effects)

```highlight
import { Effect } from "effect"

let i = 0

const bad = Effect.succeed(i++)

const good = Effect.suspend(() => Effect.succeed(i++))

console.log(Effect.runSync(bad)) // Output: 0
console.log(Effect.runSync(bad)) // Output: 0

console.log(Effect.runSync(good)) // Output: 1
console.log(Effect.runSync(good)) // Output: 2
```

**Example** (Recursive Fibonacci)

```highlight
import { Effect } from "effect"

const blowsUp = (n: number): Effect.Effect<number> =>
  n < 2 ? Effect.succeed(1) : Effect.zipWith(blowsUp(n - 1), blowsUp(n - 2), (a, b) => a + b)

console.log(Effect.runSync(blowsUp(32)))
// crash: JavaScript heap out of memory

const allGood = (n: number): Effect.Effect<number> =>
  n < 2
    ? Effect.succeed(1)
    : Effect.zipWith(
        Effect.suspend(() => allGood(n - 1)),
        Effect.suspend(() => allGood(n - 2)),
        (a, b) => a + b
      )

console.log(Effect.runSync(allGood(32)))
// Output: 3524578
```

**Example** (Using Effect.suspend to Help TypeScript Infer Types)

```highlight
import { Effect } from "effect"

//   Without suspend, TypeScript may struggle with type inference.
//   Inferred type:
//     (a: number, b: number) =>
//       Effect<never, Error, never> | Effect<number, never, never>
const withoutSuspend = (a: number, b: number) =>
  b === 0 ? Effect.fail(new Error("Cannot divide by zero")) : Effect.succeed(a / b)

//   Using suspend to unify return types.
//   Inferred type:
//     (a: number, b: number) => Effect<number, Error, never>
const withSuspend = (a: number, b: number) =>
  Effect.suspend(() => (b === 0 ? Effect.fail(new Error("Cannot divide by zero")) : Effect.succeed(a / b)))
```

**Signature**

```highlight
declare const suspend: <A, E, R>(effect: LazyArg<Effect<A, E, R>>) => Effect<A, E, R>
```

[Source][206]

Since v2.0.0

## [![][1]][207] sync

Creates an `Effect` that represents a synchronous side-effectful computation.

**Details**

The provided function (`thunk`) must not throw errors; if it does, the error will be treated as a “defect”.

This defect is not a standard error but indicates a flaw in the logic that was expected to be error-free. You can think of it similar to an unexpected crash in the program, which can be further managed or logged using tools like `catchAllDefect`.

**When to Use**

Use this function when you are sure the operation will not fail.

**Example** (Logging a Message)

```highlight
import { Effect } from "effect"

const log = (message: string) =>
  Effect.sync(() => {
    console.log(message) // side effect
  })

//      ┌─── Effect<void, never, never>
//      ▼
const program = log("Hello, World!")
```

**See**

- `| try` for a version that can handle failures.

**Signature**

```highlight
declare const sync: <A>(thunk: LazyArg<A>) => Effect<A>
```

[Source][208]

Since v2.0.0

## [![][1]][209] try

Creates an `Effect` that represents a synchronous computation that might fail.

**When to Use**

In situations where you need to perform synchronous operations that might fail, such as parsing JSON, you can use the `try` constructor. This constructor is designed to handle operations that could throw exceptions by capturing those exceptions and transforming them into manageable errors.

**Error Handling**

There are two ways to handle errors with `try`:

1.  If you don’t provide a `catch` function, the error is caught and the effect fails with an `UnknownException`.
2.  If you provide a `catch` function, the error is caught and the `catch` function maps it to an error of type `E`.

**Example** (Safe JSON Parsing)

```highlight
import { Effect } from "effect"

const parse = (input: string) =>
  // This might throw an error if input is not valid JSON
  Effect.try(() => JSON.parse(input))

//      ┌─── Effect<any, UnknownException, never>
//      ▼
const program = parse("")
```

**Example** (Custom Error Handling)

```highlight
import { Effect } from "effect"

const parse = (input: string) =>
  Effect.try({
    // JSON.parse may throw for bad input
    try: () => JSON.parse(input),
    // remap the error
    catch: (unknown) => new Error(`something went wrong ${unknown}`)
  })

//      ┌─── Effect<any, Error, never>
//      ▼
const program = parse("")
```

**See**

- `sync` if the effectful computation is synchronous and does not throw errors.

**Signature**

```highlight
declare const try: { <A, E>(options: { readonly try: LazyArg<A>; readonly catch: (error: unknown) => E; }): Effect<A, E>; <A>(thunk: LazyArg<A>): Effect<A, Cause.UnknownException>; }
```

[Source][210]

Since v2.0.0

## [![][1]][211] tryPromise

Creates an `Effect` that represents an asynchronous computation that might fail.

**When to Use**

In situations where you need to perform asynchronous operations that might fail, such as fetching data from an API, you can use the `tryPromise` constructor. This constructor is designed to handle operations that could throw exceptions by capturing those exceptions and transforming them into manageable errors.

**Error Handling**

There are two ways to handle errors with `tryPromise`:

1.  If you don’t provide a `catch` function, the error is caught and the effect fails with an `UnknownException`.
2.  If you provide a `catch` function, the error is caught and the `catch` function maps it to an error of type `E`.

**Interruptions**

An optional `AbortSignal` can be provided to allow for interruption of the wrapped `Promise` API.

**Example** (Fetching a TODO Item)

```highlight
import { Effect } from "effect"

const getTodo = (id: number) =>
  // Will catch any errors and propagate them as UnknownException
  Effect.tryPromise(() => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`))

//      ┌─── Effect<Response, UnknownException, never>
//      ▼
const program = getTodo(1)
```

**Example** (Custom Error Handling)

```highlight
import { Effect } from "effect"

const getTodo = (id: number) =>
  Effect.tryPromise({
    try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
    // remap the error
    catch: (unknown) => new Error(`something went wrong ${unknown}`)
  })

//      ┌─── Effect<Response, Error, never>
//      ▼
const program = getTodo(1)
```

**See**

- `promise` if the effectful computation is asynchronous and does not throw errors.

**Signature**

```highlight
declare const tryPromise: {
  <A, E>(options: {
    readonly try: (signal: AbortSignal) => PromiseLike<A>
    readonly catch: (error: unknown) => E
  }): Effect<A, E>
  <A>(evaluate: (signal: AbortSignal) => PromiseLike<A>): Effect<A, Cause.UnknownException>
}
```

[Source][212]

Since v2.0.0

## [![][1]][213] void

Represents an effect that does nothing and produces no value.

**When to Use**

Use this effect when you need to represent an effect that does nothing. This is useful in scenarios where you need to satisfy an effect-based interface or control program flow without performing any operations. For example, it can be used in situations where you want to return an effect from a function but do not need to compute or return any result.

**Signature**

```highlight
declare const void: Effect<void, never, never>
```

[Source][214]

Since v2.0.0

## [![][1]][215] withConsoleScoped

Sets the implementation of the console service to the specified value and restores it to its original value when the scope is closed.

**Signature**

```highlight
declare const withConsoleScoped: <A extends Console>(console: A) => Effect<void, never, Scope.Scope>
```

[Source][216]

Since v2.0.0

## [![][1]][217] withFiberRuntime

**Signature**

```highlight
declare const withFiberRuntime: <A, E = never, R = never>(
  withRuntime: (fiber: Fiber.RuntimeFiber<A, E>, status: FiberStatus.Running) => Effect<A, E, R>
) => Effect<A, E, R>
```

[Source][218]

Since v2.0.0

## [![][1]][219] yieldNow

**Signature**

```highlight
declare const yieldNow: (options?: { readonly priority?: number | undefined }) => Effect<void>
```

[Source][220]

Since v2.0.0

# [![][1]][221] Delays & Timeouts

## [![][1]][222] delay

Delays the execution of an effect by a specified `Duration`.

\*\*Details

This function postpones the execution of the provided effect by the specified duration. The duration can be provided in various formats supported by the `Duration` module.

Internally, this function does not block the thread; instead, it uses an efficient, non-blocking mechanism to introduce the delay.

**Example**

```highlight
import { Console, Effect } from "effect"

const task = Console.log("Task executed")

const program = Console.log("start").pipe(
  Effect.andThen(
    // Delays the log message by 2 seconds
    task.pipe(Effect.delay("2 seconds"))
  )
)

Effect.runFork(program)
// Output:
// start
// Task executed
```

**Signature**

```highlight
declare const delay: {
  (duration: Duration.DurationInput): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, duration: Duration.DurationInput): Effect<A, E, R>
}
```

[Source][223]

Since v2.0.0

## [![][1]][224] sleep

Suspends the execution of an effect for a specified `Duration`.

**Details**

This function pauses the execution of an effect for a given duration. It is asynchronous, meaning that it does not block the fiber executing the effect. Instead, the fiber is suspended during the delay period and can resume once the specified time has passed.

The duration can be specified using various formats supported by the `Duration` module, such as a string (`"2 seconds"`) or numeric value representing milliseconds.

**Example**

```highlight
import { Effect } from "effect"

const program = Effect.gen(function* () {
  console.log("Starting task...")
  yield* Effect.sleep("3 seconds") // Waits for 3 seconds
  console.log("Task completed!")
})

Effect.runFork(program)
// Output:
// Starting task...
// Task completed!
```

**Signature**

```highlight
declare const sleep: (duration: Duration.DurationInput) => Effect<void>
```

[Source][225]

Since v2.0.0

## [![][1]][226] timed

Executes an effect and measures the time it takes to complete.

**Details**

This function wraps the provided effect and returns a new effect that, when executed, performs the original effect and calculates its execution duration.

The result of the new effect includes both the execution time (as a `Duration`) and the original effect’s result. This is useful for monitoring performance or gaining insights into the time taken by specific operations.

The original effect’s behavior (success, failure, or interruption) remains unchanged, and the timing information is provided alongside the result in a tuple.

**Example**

```highlight
import { Duration, Effect } from "effect"

const task = Effect.gen(function* () {
  yield* Effect.sleep("2 seconds") // Simulates some work
  return "some result"
})

const timedTask = task.pipe(Effect.timed)

const program = Effect.gen(function* () {
  const [duration, result] = yield* timedTask
  console.log(`Task completed in ${Duration.toMillis(duration)} ms with result: ${result}`)
})

Effect.runFork(program)
// Output: Task completed in 2003.749125 ms with result: some result
```

**Signature**

```highlight
declare const timed: <A, E, R>(self: Effect<A, E, R>) => Effect<[duration: Duration.Duration, result: A], E, R>
```

[Source][227]

Since v2.0.0

## [![][1]][228] timedWith

Executes an effect and measures its execution time using a custom clock.

**Details**

This function extends the functionality of `timed` by allowing you to specify a custom clock for measuring the execution duration. The provided effect (`nanoseconds`) represents the clock and should return the current time in nanoseconds. The timing information is computed using this custom clock instead of the default system clock.

**Signature**

```highlight
declare const timedWith: {
  <E1, R1>(
    nanoseconds: Effect<bigint, E1, R1>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<[Duration.Duration, A], E1 | E, R1 | R>
  <A, E, R, E1, R1>(
    self: Effect<A, E, R>,
    nanoseconds: Effect<bigint, E1, R1>
  ): Effect<[Duration.Duration, A], E | E1, R | R1>
}
```

[Source][229]

Since v2.0.0

## [![][1]][230] timeout

Adds a time limit to an effect, triggering a timeout if the effect exceeds the duration.

**Details**

This function allows you to enforce a time limit on the execution of an effect. If the effect does not complete within the given duration, it fails with a `TimeoutException`. This is useful for preventing tasks from hanging indefinitely, especially in scenarios where responsiveness or resource limits are critical.

The returned effect will either:

- Succeed with the original effect’s result if it completes within the specified duration.
- Fail with a `TimeoutException` if the time limit is exceeded.

**Example**

```highlight
import { Effect } from "effect"

const task = Effect.gen(function* () {
  console.log("Start processing...")
  yield* Effect.sleep("2 seconds") // Simulates a delay in processing
  console.log("Processing complete.")
  return "Result"
})

// Output will show a TimeoutException as the task takes longer
// than the specified timeout duration
const timedEffect = task.pipe(Effect.timeout("1 second"))

Effect.runPromiseExit(timedEffect).then(console.log)
// Output:
// Start processing...
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Fail',
//     failure: { _tag: 'TimeoutException' }
//   }
// }
```

**See**

- `timeoutFail` for a version that raises a custom error.
- `timeoutFailCause` for a version that raises a custom defect.
- `timeoutTo` for a version that allows specifying both success and timeout handlers.

**Signature**

```highlight
declare const timeout: {
  (duration: Duration.DurationInput): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E | Cause.TimeoutException, R>
  <A, E, R>(self: Effect<A, E, R>, duration: Duration.DurationInput): Effect<A, Cause.TimeoutException | E, R>
}
```

[Source][231]

Since v2.0.0

## [![][1]][232] timeoutFail

Specifies a custom error to be produced when a timeout occurs.

**Details**

This function allows you to handle timeouts in a customized way by defining a specific error to be raised when an effect exceeds the given duration. Unlike default timeout behaviors that use generic exceptions, this function gives you the flexibility to specify a meaningful error type that aligns with your application’s needs.

When you apply this function, you provide:

- A `duration`: The time limit for the effect.
- An `onTimeout` function: A lazy evaluation function that generates the custom error if the timeout occurs.

If the effect completes within the time limit, its result is returned normally. Otherwise, the `onTimeout` function is triggered, and its output is used as the error for the effect.

**Example**

```highlight
import { Effect } from "effect"

const task = Effect.gen(function* () {
  console.log("Start processing...")
  yield* Effect.sleep("2 seconds") // Simulates a delay in processing
  console.log("Processing complete.")
  return "Result"
})

class MyTimeoutError {
  readonly _tag = "MyTimeoutError"
}

const program = task.pipe(
  Effect.timeoutFail({
    duration: "1 second",
    onTimeout: () => new MyTimeoutError() // Custom timeout error
  })
)

Effect.runPromiseExit(program).then(console.log)
// Output:
// Start processing...
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Fail',
//     failure: MyTimeoutError { _tag: 'MyTimeoutError' }
//   }
// }
```

**See**

- `timeout` for a version that raises a `TimeoutException`.
- `timeoutFailCause` for a version that raises a custom defect.
- `timeoutTo` for a version that allows specifying both success and timeout handlers.

**Signature**

```highlight
declare const timeoutFail: {
  <E1>(options: {
    readonly onTimeout: LazyArg<E1>
    readonly duration: Duration.DurationInput
  }): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E1 | E, R>
  <A, E, R, E1>(
    self: Effect<A, E, R>,
    options: { readonly onTimeout: LazyArg<E1>; readonly duration: Duration.DurationInput }
  ): Effect<A, E | E1, R>
}
```

[Source][233]

Since v2.0.0

## [![][1]][234] timeoutFailCause

Specifies a custom defect to be thrown when a timeout occurs.

**Details**

This function allows you to handle timeouts as exceptional cases by generating a custom defect when an effect exceeds the specified duration. You provide:

- A `duration`: The time limit for the effect.
- An `onTimeout` function: A lazy evaluation function that generates the custom defect (typically created using `Cause.die`).

If the effect completes within the time limit, its result is returned normally. Otherwise, the custom defect is triggered, and the effect fails with that defect.

**When to Use**

This is especially useful when you need to treat timeouts as critical failures in your application and wish to include meaningful information in the defect.

**Example**

```highlight
import { Effect, Cause } from "effect"

const task = Effect.gen(function* () {
  console.log("Start processing...")
  yield* Effect.sleep("2 seconds") // Simulates a delay in processing
  console.log("Processing complete.")
  return "Result"
})

const program = task.pipe(
  Effect.timeoutFailCause({
    duration: "1 second",
    onTimeout: () => Cause.die("Timed out!") // Custom defect for timeout
  })
)

Effect.runPromiseExit(program).then(console.log)
// Output:
// Start processing...
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: { _id: 'Cause', _tag: 'Die', defect: 'Timed out!' }
// }
```

**See**

- `timeout` for a version that raises a `TimeoutException`.
- `timeoutFail` for a version that raises a custom error.
- `timeoutTo` for a version that allows specifying both success and timeout handlers.

**Signature**

```highlight
declare const timeoutFailCause: {
  <E1>(options: {
    readonly onTimeout: LazyArg<Cause.Cause<E1>>
    readonly duration: Duration.DurationInput
  }): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E1 | E, R>
  <A, E, R, E1>(
    self: Effect<A, E, R>,
    options: { readonly onTimeout: LazyArg<Cause.Cause<E1>>; readonly duration: Duration.DurationInput }
  ): Effect<A, E | E1, R>
}
```

[Source][235]

Since v2.0.0

## [![][1]][236] timeoutOption

Gracefully handles timeouts by returning an `Option` that represents either the result or a timeout.

**Details**

This function wraps the outcome of an effect in an `Option` type. If the effect completes within the specified duration, it returns a `Some` containing the result. If the effect times out, it returns a `None`. Unlike other timeout methods, this approach does not raise errors or exceptions; instead, it allows you to treat timeouts as a regular outcome, simplifying the logic for handling delays.

**When to Use**

This is useful when you want to handle timeouts without causing the program to fail, making it easier to manage situations where you expect tasks might take too long but want to continue executing other tasks.

**Example**

```highlight
import { Effect } from "effect"

const task = Effect.gen(function* () {
  console.log("Start processing...")
  yield* Effect.sleep("2 seconds") // Simulates a delay in processing
  console.log("Processing complete.")
  return "Result"
})

const timedOutEffect = Effect.all([
  task.pipe(Effect.timeoutOption("3 seconds")),
  task.pipe(Effect.timeoutOption("1 second"))
])

Effect.runPromise(timedOutEffect).then(console.log)
// Output:
// Start processing...
// Processing complete.
// Start processing...
// [
//   { _id: 'Option', _tag: 'Some', value: 'Result' },
//   { _id: 'Option', _tag: 'None' }
// ]
```

**See**

- `timeout` for a version that raises a `TimeoutException`.
- `timeoutFail` for a version that raises a custom error.
- `timeoutFailCause` for a version that raises a custom defect.
- `timeoutTo` for a version that allows specifying both success and timeout handlers.

**Signature**

```highlight
declare const timeoutOption: {
  (duration: Duration.DurationInput): <A, E, R>(self: Effect<A, E, R>) => Effect<Option.Option<A>, E, R>
  <A, E, R>(self: Effect<A, E, R>, duration: Duration.DurationInput): Effect<Option.Option<A>, E, R>
}
```

[Source][237]

Since v3.1.0

## [![][1]][238] timeoutTo

Provides custom behavior for successful and timed-out operations.

**Details**

This function allows you to define distinct outcomes for an effect depending on whether it completes within a specified time frame or exceeds the timeout duration. You can provide:

- `onSuccess`: A handler for processing the result of the effect if it completes successfully within the time limit.
- `onTimeout`: A handler for generating a result when the effect times out.
- `duration`: The maximum allowed time for the effect to complete.

**When to Use**

Unlike `timeout`, which raises an exception for timeouts, this function gives you full control over the behavior for both success and timeout scenarios. It is particularly useful when you want to encapsulate timeouts and successes into a specific data structure, like an `Either` type, to represent these outcomes in a meaningful way.

**Example**

```highlight
import { Effect, Either } from "effect"

const task = Effect.gen(function* () {
  console.log("Start processing...")
  yield* Effect.sleep("2 seconds") // Simulates a delay in processing
  console.log("Processing complete.")
  return "Result"
})

const program = task.pipe(
  Effect.timeoutTo({
    duration: "1 second",
    onSuccess: (result): Either.Either<string, string> => Either.right(result),
    onTimeout: (): Either.Either<string, string> => Either.left("Timed out!")
  })
)

Effect.runPromise(program).then(console.log)
// Output:
// Start processing...
// {
//   _id: "Either",
//   _tag: "Left",
//   left: "Timed out!"
// }
```

**See**

- `timeout` for a version that raises a `TimeoutException`.
- `timeoutFail` for a version that raises a custom error.
- `timeoutFailCause` for a version that raises a custom defect.

**Signature**

```highlight
declare const timeoutTo: {
  <A, B, B1>(options: {
    readonly onTimeout: LazyArg<B1>
    readonly onSuccess: (a: A) => B
    readonly duration: Duration.DurationInput
  }): <E, R>(self: Effect<A, E, R>) => Effect<B | B1, E, R>
  <A, E, R, B1, B>(
    self: Effect<A, E, R>,
    options: {
      readonly onTimeout: LazyArg<B1>
      readonly onSuccess: (a: A) => B
      readonly duration: Duration.DurationInput
    }
  ): Effect<B1 | B, E, R>
}
```

[Source][239]

Since v2.0.0

# [![][1]][240] Do notation

## [![][1]][241] Do

The “do simulation” in Effect allows you to write code in a more declarative style, similar to the “do notation” in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.

Here’s how the do simulation works:

1.  Start the do simulation using the `Do` value
2.  Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Effect` values
3.  You can accumulate multiple `bind` statements to define multiple variables within the scope
4.  Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values

**Example**

```highlight
import * as assert from "node:assert"
import { Effect, pipe } from "effect"

const result = pipe(
  Effect.Do,
  Effect.bind("x", () => Effect.succeed(2)),
  Effect.bind("y", () => Effect.succeed(3)),
  Effect.let("sum", ({ x, y }) => x + y)
)
assert.deepStrictEqual(Effect.runSync(result), { x: 2, y: 3, sum: 5 })
```

**See**

- `bind`
- `bindTo`
- `let`

**Signature**

```highlight
declare const Do: Effect<{}, never, never>
```

[Source][242]

Since v2.0.0

## [![][1]][243] bind

The “do simulation” in Effect allows you to write code in a more declarative style, similar to the “do notation” in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.

Here’s how the do simulation works:

1.  Start the do simulation using the `Do` value
2.  Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Effect` values
3.  You can accumulate multiple `bind` statements to define multiple variables within the scope
4.  Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values

**Example**

```highlight
import * as assert from "node:assert"
import { Effect, pipe } from "effect"

const result = pipe(
  Effect.Do,
  Effect.bind("x", () => Effect.succeed(2)),
  Effect.bind("y", () => Effect.succeed(3)),
  Effect.let("sum", ({ x, y }) => x + y)
)
assert.deepStrictEqual(Effect.runSync(result), { x: 2, y: 3, sum: 5 })
```

**See**

- `Do`
- `bindTo`
- `let`

**Signature**

```highlight
declare const bind: {
  <N extends string, A extends object, B, E2, R2>(
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => Effect<B, E2, R2>
  ): <E1, R1>(self: Effect<A, E1, R1>) => Effect<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E2 | E1, R2 | R1>
  <A extends object, N extends string, E1, R1, B, E2, R2>(
    self: Effect<A, E1, R1>,
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => Effect<B, E2, R2>
  ): Effect<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E1 | E2, R1 | R2>
}
```

[Source][244]

Since v2.0.0

## [![][1]][245] bindAll

`bindAll` combines `all` with `bind`. It is useful when you want to concurrently run multiple effects and then combine their results in a Do notation pipeline.

**Example**

```highlight
import * as assert from "node:assert"
import { Effect, Either, pipe } from "effect"

const result = pipe(
  Effect.Do,
  Effect.bind("x", () => Effect.succeed(2)),
  Effect.bindAll(
    ({ x }) => ({
      a: Effect.succeed(x),
      b: Effect.fail("oops")
    }),
    { concurrency: 2, mode: "either" }
  )
)
assert.deepStrictEqual(Effect.runSync(result), { x: 2, a: Either.right(2), b: Either.left("oops") })
```

**Signature**

```highlight
declare const bindAll: {
  <
    A extends object,
    X extends Record<string, Effect<any, any, any>>,
    O extends NoExcessProperties<
      {
        readonly concurrency?: Concurrency | undefined
        readonly batching?: boolean | "inherit" | undefined
        readonly mode?: "default" | "validate" | "either" | undefined
        readonly concurrentFinalizers?: boolean | undefined
      },
      O
    >
  >(
    f: (a: NoInfer<A>) => [Extract<keyof X, keyof A>] extends [never] ? X : `Duplicate keys`,
    options?: undefined | O
  ): <E1, R1>(
    self: Effect<A, E1, R1>
  ) => [All.ReturnObject<X, false, All.ExtractMode<O>>] extends [Effect<infer Success, infer Error, infer Context>]
    ? Effect<
        { [K in keyof A | keyof Success]: K extends keyof A ? A[K] : K extends keyof Success ? Success[K] : never },
        E1 | Error,
        R1 | Context
      >
    : never
  <
    A extends object,
    X extends Record<string, Effect<any, any, any>>,
    O extends NoExcessProperties<
      {
        readonly concurrency?: Concurrency | undefined
        readonly batching?: boolean | "inherit" | undefined
        readonly mode?: "default" | "validate" | "either" | undefined
        readonly concurrentFinalizers?: boolean | undefined
      },
      O
    >,
    E1,
    R1
  >(
    self: Effect<A, E1, R1>,
    f: (a: NoInfer<A>) => [Extract<keyof X, keyof A>] extends [never] ? X : `Duplicate keys`,
    options?:
      | undefined
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly mode?: "default" | "validate" | "either" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
  ): [All.ReturnObject<X, false, All.ExtractMode<O>>] extends [Effect<infer Success, infer Error, infer Context>]
    ? Effect<
        { [K in keyof A | keyof Success]: K extends keyof A ? A[K] : K extends keyof Success ? Success[K] : never },
        E1 | Error,
        R1 | Context
      >
    : never
}
```

[Source][246]

Since v3.7.0

## [![][1]][247] bindTo

The “do simulation” in Effect allows you to write code in a more declarative style, similar to the “do notation” in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.

Here’s how the do simulation works:

1.  Start the do simulation using the `Do` value
2.  Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Effect` values
3.  You can accumulate multiple `bind` statements to define multiple variables within the scope
4.  Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values

**Example**

```highlight
import * as assert from "node:assert"
import { Effect, pipe } from "effect"

const result = pipe(
  Effect.Do,
  Effect.bind("x", () => Effect.succeed(2)),
  Effect.bind("y", () => Effect.succeed(3)),
  Effect.let("sum", ({ x, y }) => x + y)
)
assert.deepStrictEqual(Effect.runSync(result), { x: 2, y: 3, sum: 5 })
```

**See**

- `Do`
- `bind`
- `let`

**Signature**

```highlight
declare const bindTo: {
  <N extends string>(name: N): <A, E, R>(self: Effect<A, E, R>) => Effect<{ [K in N]: A }, E, R>
  <A, E, R, N extends string>(self: Effect<A, E, R>, name: N): Effect<{ [K in N]: A }, E, R>
}
```

[Source][248]

Since v2.0.0

## [![][1]][249] let

The “do simulation” in Effect allows you to write code in a more declarative style, similar to the “do notation” in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.

Here’s how the do simulation works:

1.  Start the do simulation using the `Do` value
2.  Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Effect` values
3.  You can accumulate multiple `bind` statements to define multiple variables within the scope
4.  Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values

**Example**

```highlight
import * as assert from "node:assert"
import { Effect, pipe } from "effect"

const result = pipe(
  Effect.Do,
  Effect.bind("x", () => Effect.succeed(2)),
  Effect.bind("y", () => Effect.succeed(3)),
  Effect.let("sum", ({ x, y }) => x + y)
)
assert.deepStrictEqual(Effect.runSync(result), { x: 2, y: 3, sum: 5 })
```

**See**

- `Do`
- `bind`
- `bindTo`

**Signature**

```highlight
declare const let: {
  <N extends string, A extends object, B>(
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => B
  ): <E, R>(self: Effect<A, E, R>) => Effect<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E, R>
  <A extends object, N extends string, E, R, B>(
    self: Effect<A, E, R>,
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => B
  ): Effect<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E, R>
}
```

[Source][250]

Since v2.0.0

# [![][1]][251] Error Accumulation

## [![][1]][252] partition

Processes an iterable and applies an effectful function to each element, categorizing the results into successes and failures.

**Details**

This function processes each element in the provided iterable by applying an effectful function to it. The results are then categorized into two separate lists: one for failures and another for successes. This separation allows you to handle the two categories differently. Failures are collected in a list without interrupting the processing of the remaining elements, so the operation continues even if some elements fail. This is particularly useful when you need to handle both successful and failed results separately, without stopping the entire process on encountering a failure.

**When to Use**

Use this function when you want to process a collection of items and handle errors or failures without interrupting the processing of other items. It’s useful when you need to distinguish between successful and failed results and process them separately, for example, when logging errors while continuing to work with valid data. The function ensures that failures are captured, while successes are processed normally.

**Example**

```highlight
import { Effect } from "effect"

//      ┌─── Effect<[string[], number[]], never, never>
//      ▼
const program = Effect.partition([0, 1, 2, 3, 4], (n) => {
  if (n % 2 === 0) {
    return Effect.succeed(n)
  } else {
    return Effect.fail(`${n} is not even`)
  }
})

Effect.runPromise(program).then(console.log, console.error)
// Output:
// [ [ '1 is not even', '3 is not even' ], [ 0, 2, 4 ] ]
```

**See**

- `validateAll` for a function that either collects all failures or all successes.
- `validateFirst` for a function that stops at the first success.

**Signature**

```highlight
declare const partition: {
  <A, B, E, R>(
    f: (a: A, i: number) => Effect<B, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): (elements: Iterable<A>) => Effect<[excluded: Array<E>, satisfying: Array<B>], never, R>
  <A, B, E, R>(
    elements: Iterable<A>,
    f: (a: A, i: number) => Effect<B, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<[excluded: Array<E>, satisfying: Array<B>], never, R>
}
```

[Source][253]

Since v2.0.0

## [![][1]][254] validate

Combines multiple effects and accumulates both successes and failures.

**Details**

This function allows you to combine multiple effects, continuing through all effects even if some of them fail. Unlike other functions that stop execution upon encountering an error, this function collects all errors into a `Cause`. The final result includes all successes and the accumulated failures.

By default, effects are executed sequentially, but you can control concurrency and batching behavior using the `options` parameter. This provides flexibility in scenarios where you want to maximize performance or ensure specific ordering.

**Example**

```highlight
import { Effect, Console } from "effect"

const task1 = Console.log("task1").pipe(Effect.as(1))
const task2 = Effect.fail("Oh uh!").pipe(Effect.as(2))
const task3 = Console.log("task2").pipe(Effect.as(3))
const task4 = Effect.fail("Oh no!").pipe(Effect.as(4))

const program = task1.pipe(Effect.validate(task2), Effect.validate(task3), Effect.validate(task4))

Effect.runPromiseExit(program).then(console.log)
// Output:
// task1
// task2
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Sequential',
//     left: { _id: 'Cause', _tag: 'Fail', failure: 'Oh uh!' },
//     right: { _id: 'Cause', _tag: 'Fail', failure: 'Oh no!' }
//   }
// }
```

**See**

- `zip` for a version that stops at the first error.

**Signature**

```highlight
declare const validate: {
  <B, E1, R1>(
    that: Effect<B, E1, R1>,
    options?:
      | {
          readonly concurrent?: boolean | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<[A, B], E1 | E, R1 | R>
  <A, E, R, B, E1, R1>(
    self: Effect<A, E, R>,
    that: Effect<B, E1, R1>,
    options?:
      | {
          readonly concurrent?: boolean | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<[A, B], E | E1, R | R1>
}
```

[Source][255]

Since v2.0.0

## [![][1]][256] validateAll

Applies an effectful operation to each element in a collection while collecting both successes and failures.

**Details**

This function allows you to apply an effectful operation to every item in a collection.

Unlike `forEach`, which would stop at the first error, this function continues processing all elements, accumulating both successes and failures.

**When to Use**

Use this function when you want to process every item in a collection, even if some items fail. This is particularly useful when you need to perform operations on all elements without halting due to an error.

Keep in mind that if there are any failures, **all successes will be lost**, so this function is not suitable when you need to keep the successful results in case of errors.

**Example**

```highlight
import { Effect, Console } from "effect"

//      ┌─── Effect<number[], [string, ...string[]], never>
//      ▼
const program = Effect.validateAll([1, 2, 3, 4, 5], (n) => {
  if (n < 4) {
    return Console.log(`item ${n}`).pipe(Effect.as(n))
  } else {
    return Effect.fail(`${n} is not less that 4`)
  }
})

Effect.runPromiseExit(program).then(console.log)
// Output:
// item 1
// item 2
// item 3
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Fail',
//     failure: [ '4 is not less that 4', '5 is not less that 4' ]
//   }
// }
```

**See**

- `forEach` for a similar function that stops at the first error.
- `partition` when you need to separate successes and failures instead of losing successes with errors.

**Signature**

```highlight
declare const validateAll: {
  <A, B, E, R>(
    f: (a: A, i: number) => Effect<B, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly discard?: false | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): (elements: Iterable<A>) => Effect<Array<B>, RA.NonEmptyArray<E>, R>
  <A, B, E, R>(
    f: (a: A, i: number) => Effect<B, E, R>,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): (elements: Iterable<A>) => Effect<void, RA.NonEmptyArray<E>, R>
  <A, B, E, R>(
    elements: Iterable<A>,
    f: (a: A, i: number) => Effect<B, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly discard?: false | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<Array<B>, RA.NonEmptyArray<E>, R>
  <A, B, E, R>(
    elements: Iterable<A>,
    f: (a: A, i: number) => Effect<B, E, R>,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect<void, RA.NonEmptyArray<E>, R>
}
```

[Source][257]

Since v2.0.0

## [![][1]][258] validateFirst

This function is similar to `validateAll` but with a key difference: it returns the first successful result or all errors if none of the operations succeed.

**Details**

This function processes a collection of elements and applies an effectful operation to each. Unlike `validateAll`, which accumulates both successes and failures, `Effect.validateFirst` stops and returns the first success it encounters. If no success occurs, it returns all accumulated errors. This can be useful when you are interested in the first successful result and want to avoid processing further once a valid result is found.

**Example**

```highlight
import { Effect, Console } from "effect"

//      ┌─── Effect<number, string[], never>
//      ▼
const program = Effect.validateFirst([1, 2, 3, 4, 5], (n) => {
  if (n < 4) {
    return Effect.fail(`${n} is not less that 4`)
  } else {
    return Console.log(`item ${n}`).pipe(Effect.as(n))
  }
})

Effect.runPromise(program).then(console.log, console.error)
// Output:
// item 4
// 4
```

**See**

- `validateAll` for a similar function that accumulates all results.
- `firstSuccessOf` for a similar function that processes multiple effects and returns the first successful one or the last error.

**Signature**

```highlight
declare const validateFirst: {
  <A, B, E, R>(
    f: (a: A, i: number) => Effect<B, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): (elements: Iterable<A>) => Effect<B, Array<E>, R>
  <A, B, E, R>(
    elements: Iterable<A>,
    f: (a: A, i: number) => Effect<B, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<B, Array<E>, R>
}
```

[Source][259]

Since v2.0.0

## [![][1]][260] validateWith

Sequentially combines two effects using a specified combiner function while accumulating errors.

**Details**

This function combines two effects, `self` and `that`, into a single effect by applying the provided combiner function to their results. If both effects succeed, the combiner function is applied to their results to produce the final value. If either effect fails, the failures are accumulated into a combined `Cause`.

By default, effects are executed sequentially. However, the execution mode can be controlled using the `options` parameter to enable concurrency, batching, or customized finalizer behavior.

**Signature**

```highlight
declare const validateWith: {
  <B, E1, R1, A, C>(
    that: Effect<B, E1, R1>,
    f: (a: A, b: B) => C,
    options?:
      | {
          readonly concurrent?: boolean | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): <E, R>(self: Effect<A, E, R>) => Effect<C, E1 | E, R1 | R>
  <A, E, R, B, E1, R1, C>(
    self: Effect<A, E, R>,
    that: Effect<B, E1, R1>,
    f: (a: A, b: B) => C,
    options?:
      | {
          readonly concurrent?: boolean | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<C, E | E1, R | R1>
}
```

[Source][261]

Since v2.0.0

# [![][1]][262] Error handling

## [![][1]][263] Retry (namespace)

[Source][264]

Since v2.0.0

### [![][1]][265] Options (interface)

**Signature**

```highlight
export interface Options<E> {
  while?: ((error: E) => boolean | Effect<boolean, any, any>) | undefined
  until?: ((error: E) => boolean | Effect<boolean, any, any>) | undefined
  times?: number | undefined
  schedule?: Schedule.Schedule<any, E, any> | undefined
}
```

[Sourc\[48;63;245;2016;3430te][266]

Since v2.0.0

### [![][1]][267] Return (type alias)

**Signature**

```highlight
type Effect<A, (O extends { schedule: Schedule.Schedule<infer _O, infer _I, infer _R>; } ? E : O extends { until: Refinement<E, infer E2>; } ? E2 : E) | (O extends { while: (...args: Array<any>) => Effect<infer _A, infer E, infer _R>; } ? E : never) | (O extends { until: (...args: Array<any>) => Effect<infer _A, infer E, infer _R>; } ? E : never), R | (O extends { schedule: Schedule.Schedule<infer _O, infer _I, infer R>; } ? R : never) | (O extends { while: (...args: Array<any>) => Effect<infer _A, infer _E, infer R>; } ? R : never) | (O extends { until: (...args: Array<any>) => Effect<infer _A, infer _E, infer R>; } ? R : never)> = Effect<
    A,
    | (O extends { schedule: Schedule.Schedule<infer _O, infer _I, infer _R> } ? E
      : O extends { until: Refinement<E, infer E2> } ? E2
      : E)
    | (O extends { while: (...args: Array<any>) => Effect<infer _A, infer E, infer _R> } ? E : never)
    | (O extends { until: (...args: Array<any>) => Effect<infer _A, infer E, infer _R> } ? E : never),
    | R
    | (O extends { schedule: Schedule.Schedule<infer _O, infer _I, infer R> } ? R : never)
    | (O extends { while: (...args: Array<any>) => Effect<infer _A, infer _E, infer R> } ? R : never)
    | (O extends { until: (...args: Array<any>) => Effect<infer _A, infer _E, infer R> } ? R : never)
  > extends infer Z ? Z : never
```

[Source][268]

Since v2.0.0

## [![][1]][269] catch

Recovers from a specified error by catching it and handling it with a provided function.

**Details**

This function allows you to recover from specific errors that occur during the execution of an effect. It works by catching a specific type of error (identified by a discriminator) and then handling it using a provided handler function. The handler can return a new effect that helps recover from the error, allowing the program to continue. If the error doesn’t match the specified type, the function allows the original effect to continue as it was.

**Example**

```highlight
import { Console, Effect } from "effect"

class NetworkError {
  readonly _tag = "NetworkError"
}
class ValidationError {
  readonly _tag = "ValidationError"
}

// Simulate an effect that may fail
const task: Effect.Effect<never, NetworkError | ValidationError, never> = Effect.fail(new NetworkError())

const program = Effect.gen(function* () {
  const result = yield* Effect.catch(task, "_tag", {
    failure: "NetworkError",
    onFailure: (error) => Effect.succeed(`recovered from error: ${error._tag}`)
  })
  console.log(`Result: ${result}`)
})

Effect.runFork(program)
// Output: Result: recovered from error: NetworkError
```

**See**

- `catchTag` for a version that can recover from errors based on a `_tag` discriminator.

**Signature**

```highlight
declare const catch: { <N extends keyof E, K extends E[N] & string, E, A1, E1, R1>(discriminator: N, options: { readonly failure: K; readonly onFailure: (error: Extract<E, { [n in N]: K; }>) => Effect<A1, E1, R1>; }): <A, R>(self: Effect<A, E, R>) => Effect<A1 | A, E1 | Exclude<E, { [n in N]: K; }>, R1 | R>; <A, E, R, N extends keyof E, K extends E[N] & string, A1, E1, R1>(self: Effect<A, E, R>, discriminator: N, options: { readonly failure: K; readonly onFailure: (error: Extract<E, { [n in N]: K; }>) => Effect<A1, E1, R1>; }): Effect<A | A1, E1 | Exclude<E, { [n in N]: K; }>, R | R1>; }
```

[Source][270]

Since v2.0.0

## [![][1]][271] catchAll

Handles all errors in an effect by providing a fallback effect.

**Details**

This function catches any errors that may occur during the execution of an effect and allows you to handle them by specifying a fallback effect. This ensures that the program continues without failing by recovering from errors using the provided fallback logic.

**Note**: This function only handles recoverable errors. It will not recover from unrecoverable defects.

**Example** (Providing Recovery Logic for Recoverable Errors)

```highlight
import { Effect, Random } from "effect"

class HttpError {
  readonly _tag = "HttpError"
}

class ValidationError {
  readonly _tag = "ValidationError"
}

//      ┌─── Effect<string, HttpError | ValidationError, never>
//      ▼
const program = Effect.gen(function* () {
  const n1 = yield* Random.next
  const n2 = yield* Random.next
  if (n1 < 0.5) {
    yield* Effect.fail(new HttpError())
  }
  if (n2 < 0.5) {
    yield* Effect.fail(new ValidationError())
  }
  return "some result"
})

//      ┌─── Effect<string, never, never>
//      ▼
const recovered = program.pipe(Effect.catchAll((error) => Effect.succeed(`Recovering from ${error._tag}`)))
```

**See**

- `catchAllCause` for a version that can recover from both recoverable and unrecoverable errors.

**Signature**

```highlight
declare const catchAll: {
  <E, A2, E2, R2>(f: (e: E) => Effect<A2, E2, R2>): <A, R>(self: Effect<A, E, R>) => Effect<A2 | A, E2, R2 | R>
  <A, E, R, A2, E2, R2>(self: Effect<A, E, R>, f: (e: E) => Effect<A2, E2, R2>): Effect<A2 | A, E2, R2 | R>
}
```

[Source][272]

Since v2.0.0

## [![][1]][273] catchAllCause

Handles both recoverable and unrecoverable errors by providing a recovery effect.

**When to Use**

The `catchAllCause` function allows you to handle all errors, including unrecoverable defects, by providing a recovery effect. The recovery logic is based on the `Cause` of the error, which provides detailed information about the failure.

**When to Recover from Defects**

Defects are unexpected errors that typically shouldn’t be recovered from, as they often indicate serious issues. However, in some cases, such as dynamically loaded plugins, controlled recovery might be needed.

**Example** (Recovering from All Errors)

```highlight
import { Cause, Effect } from "effect"

// Define an effect that may fail with a recoverable or unrecoverable error
const program = Effect.fail("Something went wrong!")

// Recover from all errors by examining the cause
const recovered = program.pipe(
  Effect.catchAllCause((cause) =>
    Cause.isFailure(cause)
      ? Effect.succeed("Recovered from a regular error")
      : Effect.succeed("Recovered from a defect")
  )
)

Effect.runPromise(recovered).then(console.log)
// Output: "Recovered from a regular error"
```

**Signature**

```highlight
declare const catchAllCause: {
  <E, A2, E2, R2>(
    f: (cause: Cause.Cause<E>) => Effect<A2, E2, R2>
  ): <A, R>(self: Effect<A, E, R>) => Effect<A2 | A, E2, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    f: (cause: Cause.Cause<E>) => Effect<A2, E2, R2>
  ): Effect<A | A2, E2, R | R2>
}
```

[Source][274]

Since v2.0.0

## [![][1]][275] catchAllDefect

Recovers from all defects using a provided recovery function.

**When to Use**

There is no sensible way to recover from defects. This method should be used only at the boundary between Effect and an external system, to transmit information on a defect for diagnostic or explanatory purposes.

**Details**

`catchAllDefect` allows you to handle defects, which are unexpected errors that usually cause the program to terminate. This function lets you recover from these defects by providing a function that handles the error. However, it does not handle expected errors (like those from `fail`) or execution interruptions (like those from `interrupt`).

**When to Recover from Defects**

Defects are unexpected errors that typically shouldn’t be recovered from, as they often indicate serious issues. However, in some cases, such as dynamically loaded plugins, controlled recovery might be needed.

**Example** (Handling All Defects)

```highlight
import { Effect, Cause, Console } from "effect"

// Simulating a runtime error
const task = Effect.dieMessage("Boom!")

const program = Effect.catchAllDefect(task, (defect) => {
  if (Cause.isRuntimeException(defect)) {
    return Console.log(`RuntimeException defect caught: ${defect.message}`)
  }
  return Console.log("Unknown defect caught.")
})

// We get an Exit.Success because we caught all defects
Effect.runPromiseExit(program).then(console.log)
// Output:
// RuntimeException defect caught: Boom!
// {
//   _id: "Exit",
//   _tag: "Success",
//   value: undefined
// }
```

**Signature**

```highlight
declare const catchAllDefect: {
  <A2, E2, R2>(
    f: (defect: unknown) => Effect<A2, E2, R2>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A2 | A, E2 | E, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    f: (defect: unknown) => Effect<A2, E2, R2>
  ): Effect<A | A2, E | E2, R | R2>
}
```

[Source][276]

Since v2.0.0

## [![][1]][277] catchIf

Recovers from specific errors based on a predicate.

**When to Use**

`catchIf` works similarly to `catchSome`, but it allows you to recover from errors by providing a predicate function. If the predicate matches the error, the recovery effect is applied. This function doesn’t alter the error type, so the resulting effect still carries the original error type unless a user-defined type guard is used to narrow the type.

**Example** (Catching Specific Errors with a Predicate)

```highlight
import { Effect, Random } from "effect"

class HttpError {
  readonly _tag = "HttpError"
}

class ValidationError {
  readonly _tag = "ValidationError"
}

//      ┌─── Effect<string, HttpError | ValidationError, never>
//      ▼
const program = Effect.gen(function* () {
  const n1 = yield* Random.next
  const n2 = yield* Random.next
  if (n1 < 0.5) {
    yield* Effect.fail(new HttpError())
  }
  if (n2 < 0.5) {
    yield* Effect.fail(new ValidationError())
  }
  return "some result"
})

//      ┌─── Effect<string, ValidationError, never>
//      ▼
const recovered = program.pipe(
  Effect.catchIf(
    // Only handle HttpError errors
    (error) => error._tag === "HttpError",
    () => Effect.succeed("Recovering from HttpError")
  )
)
```

**Signature**

```highlight
declare const catchIf: {
  <E, EB extends E, A2, E2, R2>(
    refinement: Refinement<NoInfer<E>, EB>,
    f: (e: EB) => Effect<A2, E2, R2>
  ): <A, R>(self: Effect<A, E, R>) => Effect<A2 | A, E2 | Exclude<E, EB>, R2 | R>
  <E, A2, E2, R2>(
    predicate: Predicate<NoInfer<E>>,
    f: (e: NoInfer<E>) => Effect<A2, E2, R2>
  ): <A, R>(self: Effect<A, E, R>) => Effect<A2 | A, E | E2, R2 | R>
  <A, E, R, EB extends E, A2, E2, R2>(
    self: Effect<A, E, R>,
    refinement: Refinement<E, EB>,
    f: (e: EB) => Effect<A2, E2, R2>
  ): Effect<A | A2, E2 | Exclude<E, EB>, R | R2>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    predicate: Predicate<E>,
    f: (e: E) => Effect<A2, E2, R2>
  ): Effect<A | A2, E | E2, R | R2>
}
```

[Source][278]

Since v2.0.0

## [![][1]][279] catchSome

Catches and recovers from specific types of errors, allowing you to attempt recovery only for certain errors.

**Details**

`catchSome` lets you selectively catch and handle errors of certain types by providing a recovery effect for specific errors. If the error matches a condition, recovery is attempted; if not, it doesn’t affect the program. This function doesn’t alter the error type, meaning the error type remains the same as in the original effect.

**Example** (Handling Specific Errors with Effect.catchSome)

```highlight
import { Effect, Random, Option } from "effect"

class HttpError {
  readonly _tag = "HttpError"
}

class ValidationError {
  readonly _tag = "ValidationError"
}

//      ┌─── Effect<string, HttpError | ValidationError, never>
//      ▼
const program = Effect.gen(function* () {
  const n1 = yield* Random.next
  const n2 = yield* Random.next
  if (n1 < 0.5) {
    yield* Effect.fail(new HttpError())
  }
  if (n2 < 0.5) {
    yield* Effect.fail(new ValidationError())
  }
  return "some result"
})

//      ┌─── Effect<string, HttpError | ValidationError, never>
//      ▼
const recovered = program.pipe(
  Effect.catchSome((error) => {
    // Only handle HttpError errors
    if (error._tag === "HttpError") {
      return Option.some(Effect.succeed("Recovering from HttpError"))
    } else {
      return Option.none()
    }
  })
)
```

**See**

- `catchIf` for a version that allows you to recover from errors based on a predicate.

**Signature**

```highlight
declare const catchSome: {
  <E, A2, E2, R2>(
    pf: (e: NoInfer<E>) => Option.Option<Effect<A2, E2, R2>>
  ): <A, R>(self: Effect<A, E, R>) => Effect<A2 | A, E | E2, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    pf: (e: NoInfer<E>) => Option.Option<Effect<A2, E2, R2>>
  ): Effect<A | A2, E | E2, R | R2>
}
```

[Source][280]

Since v2.0.0

## [![][1]][281] catchSomeCause

Recovers from specific causes using a provided partial function.

**See**

- `catchSome` for a version that allows you to recover from errors.
- `catchSomeDefect` for a version that allows you to recover from defects.

**Signature**

```highlight
declare const catchSomeCause: {
  <E, A2, E2, R2>(
    f: (cause: Cause.Cause<NoInfer<E>>) => Option.Option<Effect<A2, E2, R2>>
  ): <A, R>(self: Effect<A, E, R>) => Effect<A2 | A, E | E2, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    f: (cause: Cause.Cause<NoInfer<E>>) => Option.Option<Effect<A2, E2, R2>>
  ): Effect<A2 | A, E | E2, R2 | R>
}
```

[Source][282]

Since v2.0.0

## [![][1]][283] catchSomeDefect

Recovers from specific defects using a provided partial function.

**Details**

`catchSomeDefect` allows you to handle specific defects, which are unexpected errors that can cause the program to stop. It uses a partial function to catch only certain defects and ignores others. The function does not handle expected errors (such as those caused by `fail`) or interruptions in execution (like those caused by `interrupt`).

This function provides a way to handle certain types of defects while allowing others to propagate and cause failure in the program.

**Note**: There is no sensible way to recover from defects. This method should be used only at the boundary between Effect and an external system, to transmit information on a defect for diagnostic or explanatory purposes.

**How the Partial Function Works**

The function provided to `catchSomeDefect` acts as a filter and a handler for defects:

- It receives the defect as an input.
- If the defect matches a specific condition (e.g., a certain error type), the function returns an `Option.some` containing the recovery logic.
- If the defect does not match, the function returns `Option.none`, allowing the defect to propagate.

**Example** (Handling Specific Defects)

```highlight
import { Effect, Cause, Option, Console } from "effect"

// Simulating a runtime error
const task = Effect.dieMessage("Boom!")

const program = Effect.catchSomeDefect(task, (defect) => {
  if (Cause.isIllegalArgumentException(defect)) {
    return Option.some(Console.log(`Caught an IllegalArgumentException defect: ${defect.message}`))
  }
  return Option.none()
})

// Since we are only catching IllegalArgumentException
// we will get an Exit.Failure because we simulated a runtime error.
Effect.runPromiseExit(program).then(console.log)
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Die',
//     defect: { _tag: 'RuntimeException' }
//   }
// }
```

**Signature**

```highlight
declare const catchSomeDefect: {
  <A2, E2, R2>(
    pf: (defect: unknown) => Option.Option<Effect<A2, E2, R2>>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A2 | A, E2 | E, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    pf: (defect: unknown) => Option.Option<Effect<A2, E2, R2>>
  ): Effect<A | A2, E | E2, R | R2>
}
```

[Source][284]

Since v2.0.0

## [![][1]][285] catchTag

Catches and handles specific errors by their `_tag` field, which is used as a discriminator.

**When to Use**

`catchTag` is useful when your errors are tagged with a readonly `_tag` field that identifies the error type. You can use this function to handle specific error types by matching the `_tag` value. This allows for precise error handling, ensuring that only specific errors are caught and handled.

The error type must have a readonly `_tag` field to use `catchTag`. This field is used to identify and match errors.

**Example** (Handling Errors by Tag)

```highlight
import { Effect, Random } from "effect"

class HttpError {
  readonly _tag = "HttpError"
}

class ValidationError {
  readonly _tag = "ValidationError"
}

//      ┌─── Effect<string, HttpError | ValidationError, never>
//      ▼
const program = Effect.gen(function* () {
  const n1 = yield* Random.next
  const n2 = yield* Random.next
  if (n1 < 0.5) {
    yield* Effect.fail(new HttpError())
  }
  if (n2 < 0.5) {
    yield* Effect.fail(new ValidationError())
  }
  return "some result"
})

//      ┌─── Effect<string, ValidationError, never>
//      ▼
const recovered = program.pipe(
  // Only handle HttpError errors
  Effect.catchTag("HttpError", (_HttpError) => Effect.succeed("Recovering from HttpError"))
)
```

**See**

- `catchTags` for a version that allows you to handle multiple error types at once.

**Signature**

```highlight
declare const catchTag: {
  <E, const K extends RA.NonEmptyReadonlyArray<E extends { _tag: string } ? E["_tag"] : never>>(
    ...tags: K
  ): <A, R>(self: Effect<A, E, R> & "missing error handler") => never
  <E, const K extends RA.NonEmptyReadonlyArray<E extends { _tag: string } ? E["_tag"] : never>, A1, E1, R1>(
    ...args: [...tags: K, f: (e: Extract<NoInfer<E>, { _tag: K[number] }>) => Effect<A1, E1, R1>]
  ): <A, R>(self: Effect<A, E, R>) => Effect<A | A1, Exclude<E, { _tag: K[number] }> | E1, R | R1>
  <A, E, R, const K extends RA.NonEmptyReadonlyArray<E extends { _tag: string } ? E["_tag"] : never>>(
    self: Effect<A, E, R> & "missing error handler",
    ...tags: K
  ): never
  <A, E, R, const K extends RA.NonEmptyReadonlyArray<E extends { _tag: string } ? E["_tag"] : never>, R1, E1, A1>(
    self: Effect<A, E, R>,
    ...args: [...tags: K, f: (e: Extract<NoInfer<E>, { _tag: K[number] }>) => Effect<A1, E1, R1>]
  ): Effect<A | A1, Exclude<E, { _tag: K[number] }> | E1, R | R1>
}
```

[Source][286]

Since v2.0.0

## [![][1]][287] catchTags

Handles multiple errors in a single block of code using their `_tag` field.

**When to Use**

`catchTags` is a convenient way to handle multiple error types at once. Instead of using `catchTag` multiple times, you can pass an object where each key is an error type’s `_tag`, and the value is the handler for that specific error. This allows you to catch and recover from multiple error types in a single call.

The error type must have a readonly `_tag` field to use `catchTag`. This field is used to identify and match errors.

**Example** (Handling Multiple Tagged Error Types at Once)

```highlight
import { Effect, Random } from "effect"

class HttpError {
  readonly _tag = "HttpError"
}

class ValidationError {
  readonly _tag = "ValidationError"
}

//      ┌─── Effect<string, HttpError | ValidationError, never>
//      ▼
const program = Effect.gen(function* () {
  const n1 = yield* Random.next
  const n2 = yield* Random.next
  if (n1 < 0.5) {
    yield* Effect.fail(new HttpError())
  }
  if (n2 < 0.5) {
    yield* Effect.fail(new ValidationError())
  }
  return "some result"
})

//      ┌─── Effect<string, never, never>
//      ▼
const recovered = program.pipe(
  Effect.catchTags({
    HttpError: (_HttpError) => Effect.succeed(`Recovering from HttpError`),
    ValidationError: (_ValidationError) => Effect.succeed(`Recovering from ValidationError`)
  })
)
```

**Signature**

```highlight
declare const catchTags: {
  <
    E,
    Cases extends {
      [K in Extract<E, { _tag: string }>["_tag"]]+?: (error: Extract<E, { _tag: K }>) => Effect<any, any, any>
    } & (unknown extends E ? {} : { [K in Exclude<keyof Cases, Extract<E, { _tag: string }>["_tag"]>]: never })
  >(
    cases: Cases
  ): <A, R>(
    self: Effect<A, E, R>
  ) => Effect<
    | A
    | {
        [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Effect<infer A, any, any> ? A : never
      }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
        [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Effect<any, infer E, any> ? E : never
      }[keyof Cases],
    | R
    | {
        [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Effect<any, any, infer R> ? R : never
      }[keyof Cases]
  >
  <
    R,
    E,
    A,
    Cases extends {
      [K in Extract<E, { _tag: string }>["_tag"]]+?: (error: Extract<E, { _tag: K }>) => Effect<any, any, any>
    } & (unknown extends E ? {} : { [K in Exclude<keyof Cases, Extract<E, { _tag: string }>["_tag"]>]: never })
  >(
    self: Effect<A, E, R>,
    cases: Cases
  ): Effect<
    | A
    | {
        [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Effect<infer A, any, any> ? A : never
      }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
        [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Effect<any, infer E, any> ? E : never
      }[keyof Cases],
    | R
    | {
        [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Effect<any, any, infer R> ? R : never
      }[keyof Cases]
  >
}
```

[Source][288]

Since v2.0.0

## [![][1]][289] cause

Retrieves the cause of a failure in an effect.

**Details**

This function allows you to expose the detailed cause of an effect, which includes a more precise representation of failures, such as error messages and defects.

**When to Use**

This function is helpful when you need to inspect the cause of a failure in an effect, giving you more information than just the error message. It can be used to log, handle, or analyze failures in more detail, including distinguishing between different types of defects (e.g., runtime exceptions, interruptions, etc.).

**Example**

```highlight
import { Effect, Console } from "effect"

//      ┌─── Effect<number, string, never>
//      ▼
const program = Effect.fail("Oh uh!").pipe(Effect.as(2))

//      ┌─── Effect<void, never, never>
//      ▼
const recovered = Effect.gen(function* () {
  const cause = yield* Effect.cause(program)
  yield* Console.log(cause)
})
```

**Signature**

```highlight
declare const cause: <A, E, R>(self: Effect<A, E, R>) => Effect<Cause.Cause<E>, never, R>
```

[Source][290]

Since v2.0.0

## [![][1]][291] eventually

Runs an effect repeatedly until it succeeds, ignoring errors.

**Details**

This function takes an effect and runs it repeatedly until the effect successfully completes. If the effect fails, it will ignore the error and retry the operation. This is useful when you need to perform a task that may fail occasionally, but you want to keep trying until it eventually succeeds. It works by repeatedly executing the effect until it no longer throws an error.

**When to Use**

Use this function when you want to retry an operation multiple times until it succeeds. It is helpful in cases where the operation may fail temporarily (e.g., a network request), and you want to keep trying without handling or worrying about the errors.

**Example**

```highlight
import { Effect } from "effect"

let counter = 0

const effect = Effect.try(() => {
  counter++
  if (counter < 3) {
    console.log("running effect")
    throw new Error("error")
  } else {
    console.log("effect done")
    return "some result"
  }
})

const program = Effect.eventually(effect)

Effect.runPromise(program).then(console.log)
// Output:
// running effect
// running effect
// effect done
// some result
```

**Signature**

```highlight
declare const eventually: <A, E, R>(self: Effect<A, E, R>) => Effect<A, never, R>
```

[Source][292]

Since v2.0.0

## [![][1]][293] ignore

Discards both the success and failure values of an effect.

**When to Use**

`ignore` allows you to run an effect without caring about its result, whether it succeeds or fails. This is useful when you only care about the side effects of the effect and do not need to handle or process its outcome.

**Example** (Using Effect.ignore to Discard Values)

```highlight
import { Effect } from "effect"

//      ┌─── Effect<number, string, never>
//      ▼
const task = Effect.fail("Uh oh!").pipe(Effect.as(5))

//      ┌─── Effect<void, never, never>
//      ▼
const program = Effect.ignore(task)
```

**See**

- `ignoreLogged` to log failures while ignoring them.

**Signature**

```highlight
declare const ignore: <A, E, R>(self: Effect<A, E, R>) => Effect<void, never, R>
```

[Source][294]

Since v2.0.0

## [![][1]][295] ignoreLogged

Ignores the result of an effect but logs any failures.

**Details**

This function takes an effect and returns a new effect that ignores whether the original effect succeeds or fails. However, if the effect fails, it will log the failure at the Debug level, so you can keep track of any issues that arise.

**When to Use**

This is useful in scenarios where you want to continue with your program regardless of the result of the effect, but you still want to be aware of potential failures that may need attention later.

**Signature**

```highlight
declare const ignoreLogged: <A, E, R>(self: Effect<A, E, R>) => Effect<void, never, R>
```

[Source][296]

Since v2.0.0

## [![][1]][297] parallelErrors

Combines all errors from concurrent operations into a single error.

**Details**

This function is used when you have multiple operations running at the same time, and you want to capture all the errors that occur across those operations. Instead of handling each error separately, it combines all the errors into one unified error.

**When to Use**

When using this function, any errors that occur in the concurrently running operations will be grouped together into a single error. This helps simplify error handling in cases where you don’t need to differentiate between each failure, but simply want to know that multiple failures occurred.

**Example**

```highlight
import { Effect } from "effect"

const fail1 = Effect.fail("Oh uh!")
const fail2 = Effect.fail("Oh no!")
const die = Effect.dieMessage("Boom!")

// Run all effects concurrently and capture all errors
const program = Effect.all([fail1, fail2, die], {
  concurrency: "unbounded"
}).pipe(Effect.asVoid, Effect.parallelErrors)

Effect.runPromiseExit(program).then(console.log)
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: { _id: 'Cause', _tag: 'Fail', failure: [ 'Oh uh!', 'Oh no!' ] }
// }
```

**Signature**

```highlight
declare const parallelErrors: <A, E, R>(self: Effect<A, E, R>) => Effect<A, Array<E>, R>
```

[Source][298]

Since v2.0.0

## [![][1]][299] retry

Retries a failing effect based on a defined retry policy.

**Details**

The `Effect.retry` function takes an effect and a `Schedule` policy, and will automatically retry the effect if it fails, following the rules of the policy.

If the effect ultimately succeeds, the result will be returned.

If the maximum retries are exhausted and the effect still fails, the failure is propagated.

**When to Use**

This can be useful when dealing with intermittent failures, such as network issues or temporary resource unavailability. By defining a retry policy, you can control the number of retries, the delay between them, and when to stop retrying.

**Example** (Retrying with a Fixed Delay)

```highlight
import { Effect, Schedule } from "effect"

let count = 0

// Simulates an effect with possible failures
const task = Effect.async<string, Error>((resume) => {
  if (count <= 2) {
    count++
    console.log("failure")
    resume(Effect.fail(new Error()))
  } else {
    console.log("success")
    resume(Effect.succeed("yay!"))
  }
})

// Define a repetition policy using a fixed delay between retries
const policy = Schedule.fixed("100 millis")

const repeated = Effect.retry(task, policy)

Effect.runPromise(repeated).then(console.log)
// Output:
// failure
// failure
// failure
// success
// yay!
```

**Example** (Retrying a Task up to 5 times)

```highlight
import { Effect } from "effect"

let count = 0

// Simulates an effect with possible failures
const task = Effect.async<string, Error>((resume) => {
  if (count <= 2) {
    count++
    console.log("failure")
    resume(Effect.fail(new Error()))
  } else {
    console.log("success")
    resume(Effect.succeed("yay!"))
  }
})

// Retry the task up to 5 times
Effect.runPromise(Effect.retry(task, { times: 5 })).then(console.log)
// Output:
// failure
// failure
// failure
// success
```

**Example** (Retrying Until a Specific Condition is Met)

```highlight
import { Effect } from "effect"

let count = 0

// Define an effect that simulates varying error on each invocation
const action = Effect.failSync(() => {
  console.log(`Action called ${++count} time(s)`)
  return `Error ${count}`
})

// Retry the action until a specific condition is met
const program = Effect.retry(action, {
  until: (err) => err === "Error 3"
})

Effect.runPromiseExit(program).then(console.log)
// Output:
// Action called 1 time(s)
// Action called 2 time(s)
// Action called 3 time(s)
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: { _id: 'Cause', _tag: 'Fail', failure: 'Error 3' }
// }
```

**See**

- `retryOrElse` for a version that allows you to run a fallback.
- `repeat` if your retry condition is based on successful outcomes rather than errors.

**Signature**

```highlight
declare const retry: {
  <E, O extends NoExcessProperties<Retry.Options<E>, O>>(
    options: O
  ): <A, R>(self: Effect<A, E, R>) => Retry.Return<R, E, A, O>
  <B, E, R1>(policy: Schedule.Schedule<B, NoInfer<E>, R1>): <A, R>(self: Effect<A, E, R>) => Effect<A, E, R1 | R>
  <A, E, R, O extends NoExcessProperties<Retry.Options<E>, O>>(
    self: Effect<A, E, R>,
    options: O
  ): Retry.Return<R, E, A, O>
  <A, E, R, B, R1>(self: Effect<A, E, R>, policy: Schedule.Schedule<B, NoInfer<E>, R1>): Effect<A, E, R1 | R>
}
```

[Source][300]

Since v2.0.0

## [![][1]][301] retryOrElse

Retries a failing effect and runs a fallback effect if retries are exhausted.

**Details**

The `Effect.retryOrElse` function attempts to retry a failing effect multiple times according to a defined `Schedule` policy.

If the retries are exhausted and the effect still fails, it runs a fallback effect instead.

**When to Use**

This function is useful when you want to handle failures gracefully by specifying an alternative action after repeated failures.

**Example** (Retrying with Fallback)

```highlight
import { Effect, Schedule, Console } from "effect"

let count = 0

// Simulates an effect with possible failures
const task = Effect.async<string, Error>((resume) => {
  if (count <= 2) {
    count++
    console.log("failure")
    resume(Effect.fail(new Error()))
  } else {
    console.log("success")
    resume(Effect.succeed("yay!"))
  }
})

// Retry the task with a delay between retries and a maximum of 2 retries
const policy = Schedule.addDelay(Schedule.recurs(2), () => "100 millis")

// If all retries fail, run the fallback effect
const repeated = Effect.retryOrElse(
  task,
  policy,
  // fallback
  () => Console.log("orElse").pipe(Effect.as("default value"))
)

Effect.runPromise(repeated).then(console.log)
// Output:
// failure
// failure
// failure
// orElse
// default value
```

**See**

- `retry` for a version that does not run a fallback effect.

**Signature**

```highlight
declare const retryOrElse: {
  <A1, E, R1, A2, E2, R2>(
    policy: Schedule.Schedule<A1, NoInfer<E>, R1>,
    orElse: (e: NoInfer<E>, out: A1) => Effect<A2, E2, R2>
  ): <A, R>(self: Effect<A, E, R>) => Effect<A2 | A, E2, R1 | R2 | R>
  <A, E, R, A1, R1, A2, E2, R2>(
    self: Effect<A, E, R>,
    policy: Schedule.Schedule<A1, NoInfer<E>, R1>,
    orElse: (e: NoInfer<E>, out: A1) => Effect<A2, E2, R2>
  ): Effect<A | A2, E2, R | R1 | R2>
}
```

[Source][302]

Since v2.0.0

## [![][1]][303] sandbox

Transforms an effect to expose detailed error causes.

**Details**

This function enhances an effect by providing detailed information about any error, defect, or interruption that may occur during its execution. It modifies the error channel of the effect so that it includes a full cause of the failure, wrapped in a `Cause<E>` type.

After applying this function, you can use operators like `catchAll` and `catchTags` to handle specific types of errors.

If you no longer need the detailed cause information, you can revert the changes using `unsandbox` to return to the original error-handling behavior.

**Example**

```highlight
import { Effect, Console } from "effect"

//      ┌─── Effect<string, Error, never>
//      ▼
const task = Effect.fail(new Error("Oh uh!")).pipe(Effect.as("primary result"))

//      ┌─── Effect<string, Cause<Error>, never>
//      ▼
const sandboxed = Effect.sandbox(task)

const program = Effect.catchTags(sandboxed, {
  Die: (cause) => Console.log(`Caught a defect: ${cause.defect}`).pipe(Effect.as("fallback result on defect")),
  Interrupt: (cause) =>
    Console.log(`Caught a defect: ${cause.fiberId}`).pipe(Effect.as("fallback result on fiber interruption")),
  Fail: (cause) => Console.log(`Caught a defect: ${cause.error}`).pipe(Effect.as("fallback result on failure"))
})

// Restore the original error handling with unsandbox
const main = Effect.unsandbox(program)

Effect.runPromise(main).then(console.log)
// Output:
// Caught a defect: Oh uh!
// fallback result on failure
```

**See**

- `unsandbox` to restore the original error handling.

**Signature**

```highlight
declare const sandbox: <A, E, R>(self: Effect<A, E, R>) => Effect<A, Cause.Cause<E>, R>
```

[Source][304]

Since v2.0.0

## [![][1]][305] tryMap

Returns an effect that maps its success using the specified side-effecting `try` function, converting any errors into typed failed effects using the `catch` function.

**See**

- `tryPromise` for a version that works with asynchronous computations.

**Signature**

```highlight
declare const tryMap: {
  <A, B, E1>(options: {
    readonly try: (a: A) => B
    readonly catch: (error: unknown) => E1
  }): <E, R>(self: Effect<A, E, R>) => Effect<B, E1 | E, R>
  <A, E, R, B, E1>(
    self: Effect<A, E, R>,
    options: { readonly try: (a: A) => B; readonly catch: (error: unknown) => E1 }
  ): Effect<B, E | E1, R>
}
```

[Source][306]

Since v2.0.0

## [![][1]][307] tryMapPromise

Returns an effect that maps its success using the specified side-effecting `try` function, converting any promise rejections into typed failed effects using the `catch` function.

An optional `AbortSignal` can be provided to allow for interruption of the wrapped `Promise` API.

**See**

- `tryMap` for a version that works with synchronous computations.

**Signature**

```highlight
declare const tryMapPromise: {
  <A, B, E1>(options: {
    readonly try: (a: A, signal: AbortSignal) => PromiseLike<B>
    readonly catch: (error: unknown) => E1
  }): <E, R>(self: Effect<A, E, R>) => Effect<B, E1 | E, R>
  <A, E, R, B, E1>(
    self: Effect<A, E, R>,
    options: { readonly try: (a: A, signal: AbortSignal) => PromiseLike<B>; readonly catch: (error: unknown) => E1 }
  ): Effect<B, E | E1, R>
}
```

[Source][308]

Since v2.0.0

## [![][1]][309] unsandbox

The `unsandbox` function is used to revert an effect that has been sandboxed by `sandbox`. When you apply `unsandbox`, the effect’s error channel is restored to its original state, without the detailed `Cause<E>` information. This means that any underlying causes of errors, defects, or fiber interruptions are no longer exposed in the error channel.

This function is useful when you want to remove the detailed error tracking provided by `sandbox` and return to the standard error handling for your effect. Once unsandboxed, the effect behaves as if `sandbox` was never applied.

**See**

- `sandbox` to expose the full cause of failures, defects, or interruptions.

**Signature**

```highlight
declare const unsandbox: <A, E, R>(self: Effect<A, Cause.Cause<E>, R>) => Effect<A, E, R>
```

[Source][310]

Since v2.0.0

## [![][1]][311] withExecutionPlan

Apply an `ExecutionPlan` to the effect, which allows you to fallback to different resources in case of failure.

**Signature**

```highlight
declare const withExecutionPlan: {
  <Input, Provides, PlanE, PlanR>(
    plan: ExecutionPlan<{ provides: Provides; input: Input; error: PlanE; requirements: PlanR }>
  ): <A, E extends Input, R>(effect: Effect<A, E, R>) => Effect<A, E | PlanE, Exclude<R, Provides> | PlanR>
  <A, E extends Input, R, Provides, Input, PlanE, PlanR>(
    effect: Effect<A, E, R>,
    plan: ExecutionPlan<{ provides: Provides; input: Input; error: PlanE; requirements: PlanR }>
  ): Effect<A, E | PlanE, Exclude<R, Provides> | PlanR>
}
```

[Source][312]

Since v3.16.0

# [![][1]][313] Fallback

## [![][1]][314] firstSuccessOf

Runs a sequence of effects and returns the result of the first successful one.

**Details**

This function allows you to execute a collection of effects in sequence, stopping at the first success. If an effect succeeds, its result is immediately returned, and no further effects in the sequence are executed. However, if all the effects fail, the function will return the error of the last effect.

The execution is sequential, meaning that effects are evaluated one at a time in the order they are provided. This ensures predictable behavior and avoids unnecessary computations.

If the collection of effects is empty, an `IllegalArgumentException` is thrown, indicating that the operation is invalid without any effects to try.

**When to Use**

This is particularly useful when you have multiple fallback strategies or alternative sources to obtain a result, such as attempting multiple APIs, retrieving configurations, or accessing resources in a prioritized manner.

**Example**

```highlight
import { Effect, Console } from "effect"

interface Config {
  host: string
  port: number
  apiKey: string
}

// Create a configuration object with sample values
const makeConfig = (name: string): Config => ({
  host: `${name}.example.com`,
  port: 8080,
  apiKey: "12345-abcde"
})

// Simulate retrieving configuration from a remote node
const remoteConfig = (name: string): Effect.Effect<Config, Error> =>
  Effect.gen(function* () {
    // Simulate node3 being the only one with available config
    if (name === "node3") {
      yield* Console.log(`Config for ${name} found`)
      return makeConfig(name)
    } else {
      yield* Console.log(`Unavailable config for ${name}`)
      return yield* Effect.fail(new Error(`Config not found for ${name}`))
    }
  })

// Define the master configuration and potential fallback nodes
const masterConfig = remoteConfig("master")
const nodeConfigs = ["node1", "node2", "node3", "node4"].map(remoteConfig)

// Attempt to find a working configuration,
// starting with the master and then falling back to other nodes
const config = Effect.firstSuccessOf([masterConfig, ...nodeConfigs])

// Run the effect to retrieve the configuration
const result = Effect.runSync(config)

console.log(result)
// Output:
// Unavailable config for master
// Unavailable config for node1
// Unavailable config for node2
// Config for node3 found
// { host: 'node3.example.com', port: 8080, apiKey: '12345-abcde' }
```

**Signature**

```highlight
declare const firstSuccessOf: <Eff extends Effect<any, any, any>>(
  effects: Iterable<Eff>
) => Effect<Effect.Success<Eff>, Effect.Error<Eff>, Effect.Context<Eff>>
```

[Source][315]

Since v2.0.0

## [![][1]][316] orElse

Attempts one effect, and if it fails, falls back to another effect.

**Details**

This function allows you to try executing an effect, and if it fails (produces an error), a fallback effect is executed instead. The fallback effect is defined as a lazy argument, meaning it will only be evaluated if the first effect fails. This provides a way to recover from errors by specifying an alternative path of execution.

The error type of the resulting effect will be that of the fallback effect, as the first effect’s error is replaced when the fallback is executed.

**Example**

```highlight
import { Effect } from "effect"

const success = Effect.succeed("success")
const failure = Effect.fail("failure")
const fallback = Effect.succeed("fallback")

// Try the success effect first, fallback is not used
const program1 = Effect.orElse(success, () => fallback)
console.log(Effect.runSync(program1))
// Output: "success"

// Try the failure effect first, fallback is used
const program2 = Effect.orElse(failure, () => fallback)
console.log(Effect.runSync(program2))
// Output: "fallback"
```

**See**

- `catchAll` if you need to access the error in the fallback effect.

**Signature**

```highlight
declare const orElse: {
  <A2, E2, R2>(that: LazyArg<Effect<A2, E2, R2>>): <A, E, R>(self: Effect<A, E, R>) => Effect<A2 | A, E2, R2 | R>
  <A, E, R, A2, E2, R2>(self: Effect<A, E, R>, that: LazyArg<Effect<A2, E2, R2>>): Effect<A2 | A, E2, R2 | R>
}
```

[Source][317]

Since v2.0.0

## [![][1]][318] orElseFail

Replaces the failure of an effect with a custom failure value.

**Details**

This function allows you to handle the failure of an effect by replacing it with a predefined failure value. If the effect fails, the new failure value provided by the `evaluate` function will be returned instead of the original failure. If the effect succeeds, the original success value is returned unchanged.

**When to Use**

This is particularly useful when you want to standardize error handling or provide a consistent failure value for specific operations. It simplifies error management by ensuring that all failures are replaced with a controlled alternative.

**Example**

```highlight
import { Effect } from "effect"

const validate = (age: number): Effect.Effect<number, string> => {
  if (age < 0) {
    return Effect.fail("NegativeAgeError")
  } else if (age < 18) {
    return Effect.fail("IllegalAgeError")
  } else {
    return Effect.succeed(age)
  }
}

const program = Effect.orElseFail(validate(-1), () => "invalid age")

console.log(Effect.runSyncExit(program))
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: { _id: 'Cause', _tag: 'Fail', failure: 'invalid age' }
// }
```

**See**

- `mapError` if you need to access the error to transform it.

**Signature**

```highlight
declare const orElseFail: {
  <E2>(evaluate: LazyArg<E2>): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E2, R>
  <A, E, R, E2>(self: Effect<A, E, R>, evaluate: LazyArg<E2>): Effect<A, E2, R>
}
```

[Source][319]

Since v2.0.0

## [![][1]][320] orElseSucceed

Ensures the effect always succeeds by replacing failures with a default success value.

**Details**

This function transforms an effect that may fail into one that cannot fail by replacing any failure with a provided success value. If the original effect fails, the failure is “swallowed,” and the specified success value is returned instead. If the original effect succeeds, its value remains unchanged.

**When to Use**

This is especially useful for providing default values in case of failure, ensuring that an effect always completes successfully. By using this function, you can avoid the need for complex error handling and guarantee a fallback result.

**Example**

```highlight
import { Effect } from "effect"

const validate = (age: number): Effect.Effect<number, string> => {
  if (age < 0) {
    return Effect.fail("NegativeAgeError")
  } else if (age < 18) {
    return Effect.fail("IllegalAgeError")
  } else {
    return Effect.succeed(age)
  }
}

const program = Effect.orElseSucceed(validate(-1), () => 18)

console.log(Effect.runSyncExit(program))
// Output:
// { _id: 'Exit', _tag: 'Success', value: 18 }
```

**Signature**

```highlight
declare const orElseSucceed: {
  <A2>(evaluate: LazyArg<A2>): <A, E, R>(self: Effect<A, E, R>) => Effect<A2 | A, never, R>
  <A, E, R, A2>(self: Effect<A, E, R>, evaluate: LazyArg<A2>): Effect<A | A2, never, R>
}
```

[Source][321]

Since v2.0.0

# [![][1]][322] Fiber Refs

## [![][1]][323] getFiberRefs

Returns a collection of all `FiberRef` values for the fiber running this effect.

**Signature**

```highlight
declare const getFiberRefs: Effect<FiberRefs.FiberRefs, never, never>
```

[Source][324]

Since v2.0.0

## [![][1]][325] inheritFiberRefs

Inherits values from all `FiberRef` instances into current fiber.

**Signature**

```highlight
declare const inheritFiberRefs: (childFiberRefs: FiberRefs.FiberRefs) => Effect<void>
```

[Source][326]

Since v2.0.0

## [![][1]][327] locally

**Signature**

```highlight
declare const locally: {
  <A>(self: FiberRef.FiberRef<A>, value: A): <B, E, R>(use: Effect<B, E, R>) => Effect<B, E, R>
  <B, E, R, A>(use: Effect<B, E, R>, self: FiberRef.FiberRef<A>, value: A): Effect<B, E, R>
}
```

[Source][328]

Since v2.0.0

## [![][1]][329] locallyScoped

**Signature**

```highlight
declare const locallyScoped: {
  <A>(value: A): (self: FiberRef.FiberRef<A>) => Effect<void, never, Scope.Scope>
  <A>(self: FiberRef.FiberRef<A>, value: A): Effect<void, never, Scope.Scope>
}
```

[Source][330]

Since v2.0.0

## [![][1]][331] locallyScopedWith

**Signature**

```highlight
declare const locallyScopedWith: {
  <A>(f: (a: A) => A): (self: FiberRef.FiberRef<A>) => Effect<void, never, Scope.Scope>
  <A>(self: FiberRef.FiberRef<A>, f: (a: A) => A): Effect<void, never, Scope.Scope>
}
```

[Source][332]

Since v2.0.0

## [![][1]][333] locallyWith

**Signature**

```highlight
declare const locallyWith: {
  <A>(self: FiberRef.FiberRef<A>, f: (a: A) => A): <B, E, R>(use: Effect<B, E, R>) => Effect<B, E, R>
  <B, E, R, A>(use: Effect<B, E, R>, self: FiberRef.FiberRef<A>, f: (a: A) => A): Effect<B, E, R>
}
```

[Source][334]

Since v2.0.0

## [![][1]][335] patchFiberRefs

Applies the specified changes to the `FiberRef` values for the fiber running this workflow.

**Signature**

```highlight
declare const patchFiberRefs: (patch: FiberRefsPatch.FiberRefsPatch) => Effect<void>
```

[Source][336]

Since v2.0.0

## [![][1]][337] setFiberRefs

Sets the `FiberRef` values for the fiber running this effect to the values in the specified collection of `FiberRef` values.

**Signature**

```highlight
declare const setFiberRefs: (fiberRefs: FiberRefs.FiberRefs) => Effect<void>
```

[Source][338]

Since v2.0.0

## [![][1]][339] updateFiberRefs

Updates the `FiberRef` values for the fiber running this effect using the specified function.

**Signature**

```highlight
declare const updateFiberRefs: (
  f: (fiberId: FiberId.Runtime, fiberRefs: FiberRefs.FiberRefs) => FiberRefs.FiberRefs
) => Effect<void>
```

[Source][340]

Since v2.0.0

# [![][1]][341] Filtering

## [![][1]][342] filter

Filters an iterable using the specified effectful predicate.

**Details**

This function filters a collection (an iterable) by applying an effectful predicate.

The predicate is a function that takes an element and its index, and it returns an effect that evaluates to a boolean.

The function processes each element in the collection and keeps only those that satisfy the condition defined by the predicate.

**Options**

You can also adjust the behavior with options such as concurrency, batching, or whether to negate the condition.

**When to Use**

This function allows you to selectively keep or remove elements based on a condition that may involve asynchronous or side-effect-causing operations.

**Example**

```highlight
import { Effect } from "effect"

const numbers = [1, 2, 3, 4, 5]
const predicate = (n: number, i: number) => Effect.succeed(n % 2 === 0)

const program = Effect.gen(function* () {
  const result = yield* Effect.filter(numbers, predicate)
  console.log(result)
})

Effect.runFork(program)
// Output: [2, 4]
```

**Signature**

```highlight
declare const filter: {
  <A, E, R>(
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly negate?: boolean | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): (elements: Iterable<A>) => Effect<Array<A>, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: NoInfer<A>, i: number) => Effect<boolean, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly negate?: boolean | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<Array<A>, E, R>
}
```

[Source][343]

Since v2.0.0

## [![][1]][344] filterEffectOrElse

Filters an effect with an effectful predicate, falling back to an alternative effect if the predicate fails.

**Details**

This function applies a predicate to the result of an effect. If the predicate evaluates to `false`, the effect falls back to the `orElse` effect. The `orElse` effect can produce an alternative value or perform additional computations.

**Example**

```highlight
import { Effect, pipe } from "effect"

// Define a user interface
interface User {
  readonly name: string
}

// Simulate an asynchronous authentication function
declare const auth: () => Promise<User | null>

const program = pipe(
  Effect.promise(() => auth()),
  // Use filterEffectOrElse with an effectful predicate
  Effect.filterEffectOrElse({
    predicate: (user) => Effect.succeed(user !== null),
    orElse: (user) => Effect.fail(new Error(`Unauthorized user: ${user}`))
  })
)
```

**Signature**

```highlight
declare const filterEffectOrElse: {
  <A, E2, R2, A2, E3, R3>(options: {
    readonly predicate: (a: NoInfer<A>) => Effect<boolean, E2, R2>
    readonly orElse: (a: NoInfer<A>) => Effect<A2, E3, R3>
  }): <E, R>(self: Effect<A, E, R>) => Effect<A | A2, E | E2 | E3, R | R2 | R3>
  <A, E, R, E2, R2, A2, E3, R3>(
    self: Effect<A, E, R>,
    options: { readonly predicate: (a: A) => Effect<boolean, E2, R2>; readonly orElse: (a: A) => Effect<A2, E3, R3> }
  ): Effect<A | A2, E | E2 | E3, R | R2 | R3>
}
```

[Source][345]

Since v3.13.0

## [![][1]][346] filterEffectOrFail

Filters an effect with an effectful predicate, failing with a custom error if the predicate fails.

**Details**

This function applies a predicate to the result of an effect. If the predicate evaluates to `false`, the effect fails with a custom error generated by the `orFailWith` function.

**When to Use**

This is useful for enforcing constraints and treating violations as recoverable errors.

**Example**

```highlight
import { Effect, pipe } from "effect"

// Define a user interface
interface User {
  readonly name: string
}

// Simulate an asynchronous authentication function
declare const auth: () => Promise<User | null>

const program = pipe(
  Effect.promise(() => auth()),
  // Use filterEffectOrFail with an effectful predicate
  Effect.filterEffectOrFail({
    predicate: (user) => Effect.succeed(user !== null),
    orFailWith: () => new Error("Unauthorized")
  })
)
```

**Signature**

```highlight
declare const filterEffectOrFail: {
  <A, E2, R2, E3>(options: {
    readonly predicate: (a: NoInfer<A>) => Effect<boolean, E2, R2>
    readonly orFailWith: (a: NoInfer<A>) => E3
  }): <E, R>(self: Effect<A, E, R>) => Effect<A, E | E2 | E3, R | R2>
  <A, E, R, E2, R2, E3>(
    self: Effect<A, E, R>,
    options: { readonly predicate: (a: A) => Effect<boolean, E2, R2>; readonly orFailWith: (a: A) => E3 }
  ): Effect<A, E | E2 | E3, R | R2>
}
```

[Source][347]

Since v3.13.0

## [![][1]][348] filterMap

Filters and maps elements sequentially in one operation.

This function processes each element one by one. It applies a function that returns an `Option` to each element. If the function returns `Some`, the element is kept; if it returns `None`, the element is removed. The operation is done sequentially for each element.

**Example**

```highlight
import { Console, Effect, Option } from "effect"

const task = (n: number) =>
  Effect.succeed(n).pipe(Effect.delay(1000 - n * 100), Effect.tap(Console.log(`task${n} done`)))

const program = Effect.filterMap([task(1), task(2), task(3), task(4)], (n) =>
  n % 2 === 0 ? Option.some(n) : Option.none()
)

Effect.runPromise(program).then(console.log)
// Output:
// task1 done
// task2 done
// task3 done
// task4 done
// [ 2, 4 ]
```

**Signature**

```highlight
declare const filterMap: {
  <Eff extends Effect<any, any, any>, B>(
    pf: (a: Effect.Success<Eff>) => Option.Option<B>
  ): (elements: Iterable<Eff>) => Effect<Array<B>, Effect.Error<Eff>, Effect.Context<Eff>>
  <Eff extends Effect<any, any, any>, B>(
    elements: Iterable<Eff>,
    pf: (a: Effect.Success<Eff>) => Option.Option<B>
  ): Effect<Array<B>, Effect.Error<Eff>, Effect.Context<Eff>>
}
```

[Source][349]

Since v2.0.0

## [![][1]][350] filterOrDie

Filters an effect, dying with a custom defect if the predicate fails.

**Details**

This function applies a predicate to the result of an effect. If the predicate evaluates to `false`, the effect dies with a custom defect generated by the `orDieWith` function.

**When to Use**

This is useful for enforcing constraints on values and treating violations as fatal program errors.

**Signature**

```highlight
declare const filterOrDie: {
  <A, B extends A>(
    refinement: Refinement<NoInfer<A>, B>,
    orDieWith: (a: EqualsWith<A, B, A, Exclude<A, B>>) => unknown
  ): <E, R>(self: Effect<A, E, R>) => Effect<B, E, R>
  <A>(
    predicate: Predicate<NoInfer<A>>,
    orDieWith: (a: NoInfer<A>) => unknown
  ): <E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R, B extends A>(
    self: Effect<A, E, R>,
    refinement: Refinement<A, B>,
    orDieWith: (a: EqualsWith<A, B, A, Exclude<A, B>>) => unknown
  ): Effect<B, E, R>
  <A, E, R>(self: Effect<A, E, R>, predicate: Predicate<A>, orDieWith: (a: A) => unknown): Effect<A, E, R>
}
```

[Source][351]

Since v2.0.0

## [![][1]][352] filterOrDieMessage

Filters an effect, dying with a custom message if the predicate fails.

**Details**

This function works like `filterOrDie` but allows you to specify a custom error message to describe the reason for the failure. The message is included in the defect when the predicate evaluates to `false`.

**Signature**

```highlight
declare const filterOrDieMessage: {
  <A, B extends A>(
    refinement: Refinement<NoInfer<A>, B>,
    message: string
  ): <E, R>(self: Effect<A, E, R>) => Effect<B, E, R>
  <A>(predicate: Predicate<NoInfer<A>>, message: string): <E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R, B extends A>(self: Effect<A, E, R>, refinement: Refinement<A, B>, message: string): Effect<B, E, R>
  <A, E, R>(self: Effect<A, E, R>, predicate: Predicate<A>, message: string): Effect<A, E, R>
}
```

[Source][353]

Since v2.0.0

## [![][1]][354] filterOrElse

Filters an effect, providing an alternative effect if the predicate fails.

**Details**

This function applies a predicate to the result of an effect. If the predicate evaluates to `false`, it executes the `orElse` effect instead. The `orElse` effect can produce an alternative value or perform additional computations.

**Signature**

```highlight
declare const filterOrElse: {
  <A, C, E2, R2, B extends A>(
    refinement: Refinement<NoInfer<A>, B>,
    orElse: (a: EqualsWith<A, B, NoInfer<A>, Exclude<NoInfer<A>, B>>) => Effect<C, E2, R2>
  ): <E, R>(self: Effect<A, E, R>) => Effect<B | C, E2 | E, R2 | R>
  <A, C, E2, R2>(
    predicate: Predicate<NoInfer<A>>,
    orElse: (a: NoInfer<A>) => Effect<C, E2, R2>
  ): <E, R>(self: Effect<A, E, R>) => Effect<A | C, E2 | E, R2 | R>
  <A, E, R, C, E2, R2, B extends A>(
    self: Effect<A, E, R>,
    refinement: Refinement<A, B>,
    orElse: (a: EqualsWith<A, B, A, Exclude<A, B>>) => Effect<C, E2, R2>
  ): Effect<B | C, E | E2, R | R2>
  <A, E, R, C, E2, R2>(
    self: Effect<A, E, R>,
    predicate: Predicate<A>,
    orElse: (a: A) => Effect<C, E2, R2>
  ): Effect<A | C, E | E2, R | R2>
}
```

[Source][355]

Since v2.0.0

## [![][1]][356] filterOrFail

Filters an effect, failing with a custom error if the predicate fails.

**Details**

This function applies a predicate to the result of an effect. If the predicate evaluates to `false`, the effect fails with a custom error generated by the `orFailWith` function.

**When to Use**

This is useful for enforcing constraints and treating violations as recoverable errors.

**Providing a Guard**

In addition to the filtering capabilities discussed earlier, you have the option to further refine and narrow down the type of the success channel by providing a [user-defined type guard]. Let’s explore this concept through an example:

**Example**

```highlight
import { Effect, pipe } from "effect"

// Define a user interface
interface User {
  readonly name: string
}

// Simulate an asynchronous authentication function
declare const auth: () => Promise<User | null>

const program = pipe(
  Effect.promise(() => auth()),
  // Use filterOrFail with a custom type guard to ensure user is not null
  Effect.filterOrFail(
    (user): user is User => user !== null, // Type guard
    () => new Error("Unauthorized")
  ),
  // 'user' now has the type `User` (not `User | null`)
  Effect.andThen((user) => user.name)
)
```

**Signature**

```highlight
declare const filterOrFail: {
  <A, E2, B extends A>(
    refinement: Refinement<NoInfer<A>, B>,
    orFailWith: (a: EqualsWith<A, B, NoInfer<A>, Exclude<NoInfer<A>, B>>) => E2
  ): <E, R>(self: Effect<A, E, R>) => Effect<B, E2 | E, R>
  <A, E2>(
    predicate: Predicate<NoInfer<A>>,
    orFailWith: (a: NoInfer<A>) => E2
  ): <E, R>(self: Effect<A, E, R>) => Effect<A, E2 | E, R>
  <A, E, R, E2, B extends A>(
    self: Effect<A, E, R>,
    refinement: Refinement<A, B>,
    orFailWith: (a: EqualsWith<A, B, A, Exclude<A, B>>) => E2
  ): Effect<B, E2 | E, R>
  <A, E, R, E2>(self: Effect<A, E, R>, predicate: Predicate<A>, orFailWith: (a: A) => E2): Effect<A, E2 | E, R>
  <A, B extends A>(
    refinement: Refinement<NoInfer<A>, B>
  ): <E, R>(self: Effect<A, E, R>) => Effect<B, Cause.NoSuchElementException | E, R>
  <A>(predicate: Predicate<NoInfer<A>>): <E, R>(self: Effect<A, E, R>) => Effect<A, Cause.NoSuchElementException | E, R>
  <A, E, R, B extends A>(
    self: Effect<A, E, R>,
    refinement: Refinement<A, B>
  ): Effect<B, E | Cause.NoSuchElementException, R>
  <A, E, R>(self: Effect<A, E, R>, predicate: Predicate<A>): Effect<A, E | Cause.NoSuchElementException, R>
}
```

[Source][357]

Since v2.0.0

# [![][1]][358] Guards

## [![][1]][359] isEffect

Checks if a given value is an `Effect` value.

**When to Use**

This function can be useful for checking the type of a value before attempting to operate on it as an `Effect` value. For example, you could use `Effect.isEffect` to check the type of a value before using it as an argument to a function that expects an `Effect` value.

**Signature**

```highlight
declare const isEffect: (u: unknown) => u is Effect<unknown, unknown, unknown>
```

[Source][360]

Since v2.0.0

# [![][1]][361] Interruption

## [![][1]][362] allowInterrupt

Allows interruption of the current fiber, even in uninterruptible regions.

**Details**

This effect checks whether any other fibers are attempting to interrupt the current fiber. If so, it allows the current fiber to perform a self-interruption.

**When to Use**

This is useful in situations where you want to allow interruption to happen even in regions of the code that are normally uninterruptible.

**Signature**

```highlight
declare const allowInterrupt: Effect<void, never, never>
```

[Source][363]

Since v2.0.0

## [![][1]][364] checkInterruptible

Checks if interruption is allowed and executes a callback accordingly.

**Details**

This function checks the current interrupt status of the running fiber. It then calls the provided callback, passing a boolean indicating whether interruption is allowed.

**When to Use**

This is useful for handling specific logic based on whether the current operation can be interrupted, such as when performing asynchronous operations or handling cancellation.

**Example**

```highlight
import { Console, Effect } from "effect"

const program = Effect.gen(function* () {
  yield* Effect.checkInterruptible((isInterruptible) => {
    if (isInterruptible) {
      return Console.log("You can interrupt this operation.")
    } else {
      return Console.log("This operation cannot be interrupted.")
    }
  })
})

Effect.runPromise(program)
// Output: You can interrupt this operation.

Effect.runPromise(program.pipe(Effect.uninterruptible))
// Output: This operation cannot be interrupted.
```

**Signature**

```highlight
declare const checkInterruptible: <A, E, R>(f: (isInterruptible: boolean) => Effect<A, E, R>) => Effect<A, E, R>
```

[Source][365]

Since v2.0.0

## [![][1]][366] disconnect

Provides a way to handle timeouts in uninterruptible effects, allowing them to continue in the background while the main control flow proceeds with the timeout error.

**Details**

The `disconnect` function allows an uninterruptible effect to continue running in the background, while enabling the main control flow to immediately recognize a timeout condition. This is useful when you want to avoid blocking the program due to long-running tasks, especially when those tasks do not need to affect the flow of the rest of the program.

Without `disconnect`, an uninterruptible effect will ignore the timeout and continue executing until it completes. The timeout error will only be assessed after the effect finishes, which can cause delays in recognizing a timeout.

With `disconnect`, the uninterruptible effect proceeds in the background while the main program flow can immediately handle the timeout error or trigger alternative logic. This enables faster timeout handling without waiting for the completion of the long-running task.

**Example**

```highlight
import { Effect } from "effect"

const longRunningTask = Effect.gen(function* () {
  console.log("Start heavy processing...")
  yield* Effect.sleep("5 seconds") // Simulate a long process
  console.log("Heavy processing done.")
  return "Data processed"
})

const timedEffect = longRunningTask.pipe(
  Effect.uninterruptible,
  // Allows the task to finish in the background if it times out
  Effect.disconnect,
  Effect.timeout("1 second")
)

Effect.runPromiseExit(timedEffect).then(console.log)
// Output:
// Start heavy processing...
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Fail',
//     failure: { _tag: 'TimeoutException' }
//   }
// }
// Heavy processing done.
```

**See**

- `timeout` for a version that interrupts the effect.
- `uninterruptible` for creating an uninterruptible effect.

**Signature**

```highlight
declare const disconnect: <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
```

[Source][367]

Since v2.0.0

## [![][1]][368] interrupt

Represents an effect that interrupts the current fiber.

**Details**

This effect models the explicit interruption of the fiber in which it runs. When executed, it causes the fiber to stop its operation immediately, capturing the interruption details such as the fiber’s ID and its start time. The resulting interruption can be observed in the `Exit` type if the effect is run with functions like `runPromiseExit`.

**Example**

```highlight
import { Effect } from "effect"

const program = Effect.gen(function* () {
  console.log("start")
  yield* Effect.sleep("2 seconds")
  yield* Effect.interrupt
  console.log("done")
  return "some result"
})

Effect.runPromiseExit(program).then(console.log)
// Output:
// start
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Interrupt',
//     fiberId: {
//       _id: 'FiberId',
//       _tag: 'Runtime',
//       id: 0,
//       startTimeMillis: ...
//     }
//   }
// }
```

**Signature**

```highlight
declare const interrupt: Effect<never, never, never>
```

[Source][369]

Since v2.0.0

## [![][1]][370] interruptWith

**Signature**

```highlight
declare const interruptWith: (fiberId: FiberId.FiberId) => Effect<never>
```

[Source][371]

Since v2.0.0

## [![][1]][372] interruptible

Marks an effect as interruptible.

**Signature**

```highlight
declare const interruptible: <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
```

[Source][373]

Since v2.0.0

## [![][1]][374] interruptibleMask

This function behaves like `interruptible`, but it also provides a `restore` function. This function can be used to restore the interruptibility of any specific region of code.

**Signature**

```highlight
declare const interruptibleMask: <A, E, R>(
  f: (restore: <AX, EX, RX>(effect: Effect<AX, EX, RX>) => Effect<AX, EX, RX>) => Effect<A, E, R>
) => Effect<A, E, R>
```

[Source][375]

Since v2.0.0

## [![][1]][376] onInterrupt

Registers a cleanup effect to run when an effect is interrupted.

**Details**

This function allows you to specify an effect to run when the fiber is interrupted. This effect will be executed when the fiber is interrupted, allowing you to perform cleanup or other actions.

**Example** (Running a Cleanup Action on Interruption)

```highlight
import { Console, Effect } from "effect"

// This handler is executed when the fiber is interrupted
const handler = Effect.onInterrupt((_fibers) => Console.log("Cleanup completed"))

const success = Console.log("Task completed").pipe(Effect.as("some result"), handler)

Effect.runFork(success)
// Output:
// Task completed

const failure = Console.log("Task failed").pipe(Effect.andThen(Effect.fail("some error")), handler)

Effect.runFork(failure)
// Output:
// Task failed

const interruption = Console.log("Task interrupted").pipe(Effect.andThen(Effect.interrupt), handler)

Effect.runFork(interruption)
// Output:
// Task interrupted
// Cleanup completed
```

**Signature**

```highlight
declare const onInterrupt: {
  <X, R2>(
    cleanup: (interruptors: HashSet.HashSet<FiberId.FiberId>) => Effect<X, never, R2>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R2 | R>
  <A, E, R, X, R2>(
    self: Effect<A, E, R>,
    cleanup: (interruptors: HashSet.HashSet<FiberId.FiberId>) => Effect<X, never, R2>
  ): Effect<A, E, R | R2>
}
```

[Source][377]

Since v2.0.0

## [![][1]][378] uninterruptible

Marks an effect as uninterruptible.

**Signature**

```highlight
declare const uninterruptible: <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
```

[Source][379]

Since v2.0.0

## [![][1]][380] uninterruptibleMask

This function behaves like `uninterruptible`, but it also provides a `restore` function. This function can be used to restore the interruptibility of any specific region of code.

**Signature**

```highlight
declare const uninterruptibleMask: <A, E, R>(
  f: (restore: <AX, EX, RX>(effect: Effect<AX, EX, RX>) => Effect<AX, EX, RX>) => Effect<A, E, R>
) => Effect<A, E, R>
```

[Source][381]

Since v2.0.0

# [![][1]][382] Latch

## [![][1]][383] Latch (interface)

A `Latch` is a synchronization primitive that allows you to control the execution of fibers based on an open or closed state. It acts as a gate, where fibers can wait for the latch to open before proceeding.

**Details**

A `Latch` can be in one of two states: open or closed. Fibers can:

- Wait for the latch to open using `await`.
- Proceed only when the latch is open using `whenOpen`.
- Open the latch to release all waiting fibers using `open`.
- Close the latch to block fibers using `close`.

Additionally, fibers can be released without changing the state of the latch using `release`.

**Signature**

```highlight
export interface Latch extends Effect<void> {
  /**
   * Opens the latch, releasing all fibers waiting on it.
   *
   * **Details**
   *
   * Once the latch is opened, it remains open. Any fibers waiting on `await`
   * will be released and can continue execution.
   */
  readonly open: Effect<void>

  /**
   * Opens the latch, releasing all fibers waiting on it.
   *
   * **Details**
   *
   * Once the latch is opened, it remains open. Any fibers waiting on `await`
   * will be released and can continue execution.
   */
  readonly unsafeOpen: () => void

  /**
   * Releases all fibers waiting on the latch without opening it.
   *
   * **Details**
   *
   * This function lets waiting fibers proceed without permanently changing the
   * state of the latch.
   */
  readonly release: Effect<void>

  /**
   * Waits for the latch to be opened.
   *
   * **Details**
   *
   * If the latch is already open, this effect completes immediately. Otherwise,
   * it suspends the fiber until the latch is opened.
   */
  readonly await: Effect<void>

  /**
   * Closes the latch, blocking fibers from proceeding.
   *
   * **Details**
   *
   * This operation puts the latch into a closed state, requiring it to be
   * reopened before waiting fibers can proceed.
   */
  readonly close: Effect<void>

  /**
   * Unsafely closes the latch, blocking fibers without effect guarantees.
   *
   * **Details**
   *
   * Use this operation cautiously, as it does not run within an effect context
   * and bypasses runtime guarantees.
   */
  readonly unsafeClose: () => void

  /**
   * Runs the given effect only when the latch is open.
   *
   * **Details**
   *
   * This function ensures that the provided effect executes only if the latch
   * is open. If the latch is closed, the fiber will wait until it opens.
   */
  readonly whenOpen: <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>

  readonly [Unify.typeSymbol]?: unknown
  readonly [Unify.unifySymbol]?: LatchUnify<this>
  readonly [Unify.ignoreSymbol]?: LatchUnifyIgnore
}
```

[Source][384]

Since v3.8.0

## [![][1]][385] makeLatch

Creates a new `Latch`, starting in the specified state.

**Details**

This function initializes a `Latch` safely, ensuring proper runtime guarantees. By default, the latch starts in the closed state.

**Example**

```highlight
import { Console, Effect } from "effect"

const program = Effect.gen(function* () {
  // Create a latch, starting in the closed state
  const latch = yield* Effect.makeLatch(false)

  // Fork a fiber that logs "open sesame" when the latch is opened
  const fiber = yield* Console.log("open sesame").pipe(latch.whenOpen, Effect.fork)

  yield* Effect.sleep("1 second")

  // Open the latch
  yield* latch.open
  yield* fiber.await
})

Effect.runFork(program)
// Output: open sesame (after 1 second)
```

**Signature**

```highlight
declare const makeLatch: (open?: boolean | undefined) => Effect<Latch, never, never>
```

[Source][386]

Since v3.8.0

## [![][1]][387] unsafeMakeLatch

**Signature**

```highlight
declare const unsafeMakeLatch: (open?: boolean | undefined) => Latch
```

[Source][388]

Since v3.8.0

# [![][1]][389] Logging

## [![][1]][390] annotateLogs

Adds custom annotations to log entries generated within an effect.

**Details**

This function allows you to enhance log messages by appending additional context in the form of key-value pairs. These annotations are included in every log message created during the execution of the effect, making the logs more informative and easier to trace.

The annotations can be specified as a single key-value pair or as a record of multiple key-value pairs. This is particularly useful for tracking operations, debugging, or associating specific metadata with logs for better observability.

The annotated key-value pairs will appear alongside the log message in the output.

**Example**

```highlight
import { Effect } from "effect"

const program = Effect.gen(function* () {
  yield* Effect.log("message1")
  yield* Effect.log("message2")
}).pipe(Effect.annotateLogs("taskId", "1234")) // Annotation as key/value pair

Effect.runFork(program)
// timestamp=... level=INFO fiber=#0 message=message1 taskId=1234
// timestamp=... level=INFO fiber=#0 message=message2 taskId=1234
```

**See**

- `annotateLogsScoped` to add log annotations with a limited scope.

**Signature**

```highlight
declare const annotateLogs: {
  (key: string, value: unknown): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  (values: Record<string, unknown>): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, key: string, value: unknown): Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, values: Record<string, unknown>): Effect<A, E, R>
}
```

[Source][391]

Since v2.0.0

## [![][1]][392] annotateLogsScoped

Adds log annotations with a limited scope to enhance contextual logging.

**Details**

This function allows you to apply key-value annotations to log entries generated within a specific scope of your effect computations. The annotations are restricted to the defined `Scope`, ensuring that they are only applied to logs produced during that scope. Once the scope ends, the annotations are automatically removed, making it easier to manage context-specific logging without affecting other parts of your application.

The annotations can be provided as a single key-value pair or as a record of multiple key-value pairs. This flexibility enables fine-grained control over the additional metadata included in logs for specific tasks or operations.

**Example**

```highlight
import { Effect } from "effect"

const program = Effect.gen(function* () {
  yield* Effect.log("no annotations")
  yield* Effect.annotateLogsScoped({ key: "value" })
  yield* Effect.log("message1") // Annotation is applied to this log
  yield* Effect.log("message2") // Annotation is applied to this log
}).pipe(Effect.scoped, Effect.andThen(Effect.log("no annotations again")))

Effect.runFork(program)
// timestamp=... level=INFO fiber=#0 message="no annotations"
// timestamp=... level=INFO fiber=#0 message=message1 key=value
// timestamp=... level=INFO fiber=#0 message=message2 key=value
// timestamp=... level=INFO fiber=#0 message="no annotations again"
```

**See**

- `annotateLogs` to add custom annotations to log entries generated within an effect.

**Signature**

```highlight
declare const annotateLogsScoped: {
  (key: string, value: unknown): Effect<void, never, Scope.Scope>
  (values: Record<string, unknown>): Effect<void, never, Scope.Scope>
}
```

[Source][393]

Since v3.1.0

## [![][1]][394] log

Logs one or more messages or error causes at the current log level.

**Details**

This function provides a simple way to log messages or error causes during the execution of your effects. By default, logs are recorded at the `INFO` level, but this can be adjusted using other logging utilities (`Logger.withMinimumLogLevel`). Multiple items, including `Cause` instances, can be logged in a single call. When logging `Cause` instances, detailed error information is included in the log output.

The log output includes useful metadata like the current timestamp, log level, and fiber ID, making it suitable for debugging and tracking purposes. This function does not interrupt or alter the effect’s execution flow.

**Example**

```highlight
import { Cause, Effect } from "effect"

const program = Effect.log("message1", "message2", Cause.die("Oh no!"), Cause.die("Oh uh!"))

Effect.runFork(program)
// Output:
// timestamp=... level=INFO fiber=#0 message=message1 message=message2 cause="Error: Oh no!
// Error: Oh uh!"
```

**Signature**

```highlight
declare const log: (...message: ReadonlyArray<any>) => Effect<void, never, never>
```

[Source][395]

Since v2.0.0

## [![][1]][396] logAnnotations

Retrieves the current log annotations for the current scope.

**Details**

This function provides access to the log annotations associated with the current scope. Log annotations are key-value pairs that provide additional context to log entries. They are often used to add metadata such as tags, identifiers, or extra debugging information to logs.

By using this function, you can inspect or utilize the annotations applied to the current scope, making it easier to trace and debug specific sections of your application.

**See**

- `annotateLogs` to add custom annotations to log entries generated within an effect.
- `annotateLogsScoped` to add log annotations with a limited scope.

**Signature**

```highlight
declare const logAnnotations: Effect<HashMap.HashMap<string, unknown>, never, never>
```

[Source][397]

Since v2.0.0

## [![][1]][398] logDebug

Logs messages at the DEBUG log level.

**Details**

This function logs messages at the DEBUG level, which is typically used for diagnosing application behavior during development. DEBUG messages provide less detailed information than TRACE logs but are still not shown by default. To view these logs, adjust the log level using `Logger.withMinimumLogLevel`.

**Example**

```highlight
import { Effect, Logger, LogLevel } from "effect"

const program = Effect.logDebug("message1").pipe(Logger.withMinimumLogLevel(LogLevel.Debug))

Effect.runFork(program)
// timestamp=... level=DEBUG fiber=#0 message=message1
```

**Signature**

```highlight
declare const logDebug: (...message: ReadonlyArray<any>) => Effect<void, never, never>
```

[Source][399]

Since v2.0.0

## [![][1]][400] logError

Logs messages at the ERROR log level.

**Details**

This function logs messages at the ERROR level, suitable for reporting application errors or failures. These logs are typically used for unexpected issues that need immediate attention.

**Signature**

```highlight
declare const logError: (...message: ReadonlyArray<any>) => Effect<void, never, never>
```

[Source][401]

Since v2.0.0

## [![][1]][402] logFatal

Logs messages at the FATAL log level.

**Details**

This function logs messages at the FATAL level, suitable for reporting critical errors that cause the application to terminate or stop functioning. These logs are typically used for unrecoverable errors that require immediate attention.

**Signature**

```highlight
declare const logFatal: (...message: ReadonlyArray<any>) => Effect<void, never, never>
```

[Source][403]

Since v2.0.0

## [![][1]][404] logInfo

Logs messages at the INFO log level.

**Details**

This function logs messages at the INFO level, suitable for general application events or operational messages. INFO logs are shown by default and are commonly used for highlighting normal, non-error operations.

**Signature**

```highlight
declare const logInfo: (...message: ReadonlyArray<any>) => Effect<void, never, never>
```

[Source][405]

Since v2.0.0

## [![][1]][406] logTrace

Logs messages at the TRACE log level.

**Details**

This function logs the specified messages at the TRACE level. TRACE logs are typically used for very detailed diagnostic information. These messages are not displayed by default. To view them, you must adjust the logging configuration by setting the minimum log level to `LogLevel.Trace` using `Logger.withMinimumLogLevel`.

**Example**

```highlight
import { Effect, Logger, LogLevel } from "effect"

const program = Effect.logTrace("message1").pipe(Logger.withMinimumLogLevel(LogLevel.Trace))

Effect.runFork(program)
// timestamp=... level=TRACE fiber=#0 message=message1
```

**Signature**

```highlight
declare const logTrace: (...message: ReadonlyArray<any>) => Effect<void, never, never>
```

[Source][407]

Since v2.0.0

## [![][1]][408] logWarning

Logs messages at the WARNING log level.

**Details**

This function logs messages at the WARNING level, suitable for highlighting potential issues that are not errors but may require attention. These messages indicate that something unexpected occurred or might lead to errors in the future.

**Signature**

```highlight
declare const logWarning: (...message: ReadonlyArray<any>) => Effect<void, never, never>
```

[Source][409]

Since v2.0.0

## [![][1]][410] logWithLevel

Logs messages or error causes at a specified log level.

**Details**

This function allows you to log one or more messages or error causes while specifying the desired log level (e.g., DEBUG, INFO, ERROR). It provides flexibility in categorizing logs based on their importance or severity, making it easier to filter logs during debugging or production monitoring.

**Example**

```highlight
import { Cause, Effect, LogLevel } from "effect"

const program = Effect.logWithLevel(LogLevel.Error, "Critical error encountered", Cause.die("System failure!"))

Effect.runFork(program)
// Output:
// timestamp=... level=ERROR fiber=#0 message=Critical error encountered cause="Error: System failure!"
```

**Signature**

```highlight
declare const logWithLevel: (level: LogLevel.LogLevel, ...message: ReadonlyArray<any>) => Effect<void>
```

[Source][411]

Since v2.0.0

## [![][1]][412] whenLogLevel

Conditionally executes an effect based on the specified log level and currently enabled log level.

**Details**

This function runs the provided effect only if the specified log level is enabled. If the log level is enabled, the effect is executed and its result is wrapped in `Some`. If the log level is not enabled, the effect is not executed and `None` is returned.

This function is useful for conditionally executing logging-related effects or other operations that depend on the current log level configuration.

**Example**

```highlight
import { Effect, Logger, LogLevel } from "effect"

const program = Effect.gen(function* () {
  yield* Effect.whenLogLevel(Effect.logTrace("message1"), LogLevel.Trace) // returns `None`
  yield* Effect.whenLogLevel(Effect.logDebug("message2"), LogLevel.Debug) // returns `Some`
}).pipe(Logger.withMinimumLogLevel(LogLevel.Debug))

Effect.runFork(program)
// timestamp=... level=DEBUG fiber=#0 message=message2
```

**See**

- `FiberRef.currentMinimumLogLevel` to retrieve the current minimum log level.

**Signature**

```highlight
declare const whenLogLevel: {
  (level: LogLevel.LogLevel | LogLevel.Literal): <A, E, R>(self: Effect<A, E, R>) => Effect<Option.Option<A>, E, R>
  <A, E, R>(self: Effect<A, E, R>, level: LogLevel.LogLevel | LogLevel.Literal): Effect<Option.Option<A>, E, R>
}
```

[Source][413]

Since v3.13.0

## [![][1]][414] withLogSpan

Adds a log span to an effect for tracking and logging its execution duration.

**Details**

This function wraps an effect with a log span, providing performance monitoring and debugging capabilities. The log span tracks the duration of the wrapped effect and logs it with the specified label. This is particularly useful when analyzing time-sensitive operations or understanding the execution time of specific tasks in your application.

The logged output will include the label and the total time taken for the operation. The span information is included in the log metadata, making it easy to trace performance metrics in logs.

**Example**

```highlight
import { Effect } from "effect"

const program = Effect.gen(function* () {
  yield* Effect.sleep("1 second")
  yield* Effect.log("The job is finished!")
}).pipe(Effect.withLogSpan("myspan"))

Effect.runFork(program)
// timestamp=... level=INFO fiber=#0 message="The job is finished!" myspan=1011ms
```

**Signature**

```highlight
declare const withLogSpan: {
  (label: string): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, label: string): Effect<A, E, R>
}
```

[Source][415]

Since v2.0.0

## [![][1]][416] withUnhandledErrorLogLevel

Configures whether child fibers will log unhandled errors and at what log level.

**Details**

This function allows you to control whether unhandled errors from child fibers are logged and to specify the log level for these errors. By default, unhandled errors are reported via the logger. However, using this function, you can choose to suppress these logs by passing `Option.none` or adjust the log level to a specific severity, such as `Error`, `Warning`, or `Info`.

This configuration is scoped to the effect it is applied to, meaning the changes only apply to the child fibers created within that effect’s context. It is especially useful when you want to reduce noise in logs or prioritize certain types of errors.

**Example**

```highlight
import { Effect, Fiber, LogLevel, Option } from "effect"

const program = Effect.gen(function* () {
  const fiber = yield* Effect.fork(Effect.fail("Unhandled error!"))
  yield* Fiber.join(fiber)
})

Effect.runFork(program.pipe(Effect.withUnhandledErrorLogLevel(Option.some(LogLevel.Error))))
// Output:
// timestamp=... level=ERROR fiber=#1 message="Fiber terminated with an unhandled error" cause="Error: Unhandled error!"
```

**Signature**

```highlight
declare const withUnhandledErrorLogLevel: {
  (level: Option.Option<LogLevel.LogLevel>): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, level: Option.Option<LogLevel.LogLevel>): Effect<A, E, R>
}
```

[Source][417]

Since v2.0.0

# [![][1]][418] Looping

## [![][1]][419] forEach

Executes an effectful operation for each element in an `Iterable`.

**Details**

This function applies a provided operation to each element in the iterable, producing a new effect that returns an array of results.

If any effect fails, the iteration stops immediately (short-circuiting), and the error is propagated.

**Concurrency**

The `concurrency` option controls how many operations are performed concurrently. By default, the operations are performed sequentially.

**Discarding Results**

If the `discard` option is set to `true`, the intermediate results are not collected, and the final result of the operation is `void`.

**Example** (Applying Effects to Iterable Elements)

```highlight
import { Effect, Console } from "effect"

const result = Effect.forEach([1, 2, 3, 4, 5], (n, index) =>
  Console.log(`Currently at index ${index}`).pipe(Effect.as(n * 2))
)

Effect.runPromise(result).then(console.log)
// Output:
// Currently at index 0
// Currently at index 1
// Currently at index 2
// Currently at index 3
// Currently at index 4
// [ 2, 4, 6, 8, 10 ]
```

**Example** (Discarding Results)

```highlight
import { Effect, Console } from "effect"

// Apply effects but discard the results
const result = Effect.forEach(
  [1, 2, 3, 4, 5],
  (n, index) => Console.log(`Currently at index ${index}`).pipe(Effect.as(n * 2)),
  { discard: true }
)

Effect.runPromise(result).then(console.log)
// Output:
// Currently at index 0
// Currently at index 1
// Currently at index 2
// Currently at index 3
// Currently at index 4
// undefined
```

**See**

- `all` for combining multiple effects into one.

**Signature**

```highlight
declare const forEach: {
  <B, E, R, S extends Iterable<any>>(
    f: (a: RA.ReadonlyArray.Infer<S>, i: number) => Effect<B, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly discard?: false | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): (self: S) => Effect<RA.ReadonlyArray.With<S, B>, E, R>
  <A, B, E, R>(
    f: (a: A, i: number) => Effect<B, E, R>,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): (self: Iterable<A>) => Effect<void, E, R>
  <B, E, R, S extends Iterable<any>>(
    self: S,
    f: (a: RA.ReadonlyArray.Infer<S>, i: number) => Effect<B, E, R>,
    options?:
      | {
          readonly concurrency?: Concurrency | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly discard?: false | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<RA.ReadonlyArray.With<S, B>, E, R>
  <A, B, E, R>(
    self: Iterable<A>,
    f: (a: A, i: number) => Effect<B, E, R>,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly discard: true
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect<void, E, R>
}
```

[Source][420]

Since v2.0.0

## [![][1]][421] iterate

Repeatedly updates a state through an effectful operation until a condition is no longer met.

**Details**

This function provides a way to implement effectful loops, similar to a `while` loop in JavaScript.

```highlight
let result = initial

while (options.while(result)) {
  result = options.body(result)
}

return result
```

It starts with an initial state, checks a condition (`while`), and executes a body operation to update the state if the condition evaluates to `true`. The process repeats until the condition returns `false`.

The state is passed between iterations, allowing the body operation to modify it dynamically. The final state after the loop ends is returned as the result of the effect.

**When to Use**

This is particularly useful for scenarios where looping logic involves asynchronous or side-effectful operations, such as polling or iterative computations that depend on external factors.

**Example** (Effectful Iteration)

```highlight
import { Effect } from "effect"

const result = Effect.iterate(
  // Initial result
  1,
  {
    // Condition to continue iterating
    while: (result) => result <= 5,
    // Operation to change the result
    body: (result) => Effect.succeed(result + 1)
  }
)

Effect.runPromise(result).then(console.log)
// Output: 6
```

**Signature**

```highlight
declare const iterate: {
  <A, B extends A, R, E>(
    initial: A,
    options: { readonly while: Refinement<A, B>; readonly body: (b: B) => Effect<A, E, R> }
  ): Effect<A, E, R>
  <A, R, E>(
    initial: A,
    options: { readonly while: Predicate<A>; readonly body: (a: A) => Effect<A, E, R> }
  ): Effect<A, E, R>
}
```

[Source][422]

Since v2.0.0

## [![][1]][423] loop

Repeatedly executes a loop with a state, collecting results or discarding them based on configuration.

**Details**

This function performs an effectful loop, starting with an initial state and iterating as long as the `while` condition evaluates to `true`, similar to a `while` loop in JavaScript.

```highlight
let state = initial
const result = []

while (options.while(state)) {
  result.push(options.body(state)) // Perform the effectful operation
  state = options.step(state) // Update the state
}

return result
```

During each iteration, the `step` function updates the state, and the `body` effect is executed.

The results of the body effect can be collected in an array or discarded based on the `discard` option.

**Discarding Intermediate Results**

- If `discard` is `false` or not provided, the intermediate results are collected into an array and returned as the final result.
- If `discard` is `true`, the intermediate results are ignored, and the effect returns `void`.

**When to Use**

This is useful for implementing loops where you need to perform effectful computations repeatedly, such as processing items in a list, generating values, or performing iterative updates.

**Example** (Looping with Collected Results)

```highlight
import { Effect } from "effect"

// A loop that runs 5 times, collecting each iteration's result
const result = Effect.loop(
  // Initial state
  1,
  {
    // Condition to continue looping
    while: (state) => state <= 5,
    // State update function
    step: (state) => state + 1,
    // Effect to be performed on each iteration
    body: (state) => Effect.succeed(state)
  }
)

Effect.runPromise(result).then(console.log)
// Output: [1, 2, 3, 4, 5]
```

**Example** (Loop with Discarded Results)

```highlight
import { Effect, Console } from "effect"

const result = Effect.loop(
  // Initial state
  1,
  {
    // Condition to continue looping
    while: (state) => state <= 5,
    // State update function
    step: (state) => state + 1,
    // Effect to be performed on each iteration
    body: (state) => Console.log(`Currently at state ${state}`),
    // Discard intermediate results
    discard: true
  }
)

Effect.runPromise(result).then(console.log)
// Output:
// Currently at state 1
// Currently at state 2
// Currently at state 3
// Currently at state 4
// Currently at state 5
// undefined
```

**Signature**

```highlight
declare const loop: {
  <A, B extends A, C, E, R>(
    initial: A,
    options: {
      readonly while: Refinement<A, B>
      readonly step: (b: B) => A
      readonly body: (b: B) => Effect<C, E, R>
      readonly discard?: false | undefined
    }
  ): Effect<Array<C>, E, R>
  <A, C, E, R>(
    initial: A,
    options: {
      readonly while: (a: A) => boolean
      readonly step: (a: A) => A
      readonly body: (a: A) => Effect<C, E, R>
      readonly discard?: false | undefined
    }
  ): Effect<Array<C>, E, R>
  <A, B extends A, C, E, R>(
    initial: A,
    options: {
      readonly while: Refinement<A, B>
      readonly step: (b: B) => A
      readonly body: (b: B) => Effect<C, E, R>
      readonly discard: true
    }
  ): Effect<void, E, R>
  <A, C, E, R>(
    initial: A,
    options: {
      readonly while: (a: A) => boolean
      readonly step: (a: A) => A
      readonly body: (a: A) => Effect<C, E, R>
      readonly discard: true
    }
  ): Effect<void, E, R>
}
```

[Source][424]

Since v2.0.0

# [![][1]][425] Mapping

## [![][1]][426] as

Replaces the value inside an effect with a constant value.

**Details**

This function allows you to ignore the original value inside an effect and replace it with a constant value.

**When to Use**

It is useful when you no longer need the value produced by an effect but want to ensure that the effect completes successfully with a specific constant result instead. For instance, you can replace the value produced by a computation with a predefined value, ignoring what was calculated before.

**Example** (Replacing a Value)

```highlight
import { pipe, Effect } from "effect"

// Replaces the value 5 with the constant "new value"
const program = pipe(Effect.succeed(5), Effect.as("new value"))

Effect.runPromise(program).then(console.log)
// Output: "new value"
```

**Signature**

```highlight
declare const as: {
  <B>(value: B): <A, E, R>(self: Effect<A, E, R>) => Effect<B, E, R>
  <A, E, R, B>(self: Effect<A, E, R>, value: B): Effect<B, E, R>
}
```

[Source][427]

Since v2.0.0

## [![][1]][428] asSome

This function maps the success value of an `Effect` value to a `Some` value in an `Option` value. If the original `Effect` value fails, the returned `Effect` value will also fail.

**Signature**

```highlight
declare const asSome: <A, E, R>(self: Effect<A, E, R>) => Effect<Option.Option<A>, E, R>
```

[Source][429]

Since v2.0.0

## [![][1]][430] asSomeError

This function maps the error value of an `Effect` value to a `Some` value in an `Option` value. If the original `Effect` value succeeds, the returned `Effect` value will also succeed.

**Signature**

```highlight
declare const asSomeError: <A, E, R>(self: Effect<A, E, R>) => Effect<A, Option.Option<E>, R>
```

[Source][431]

Since v2.0.0

## [![][1]][432] asVoid

This function maps the success value of an `Effect` value to `void`. If the original `Effect` value succeeds, the returned `Effect` value will also succeed. If the original `Effect` value fails, the returned `Effect` value will fail with the same error.

**Signature**

```highlight
declare const asVoid: <A, E, R>(self: Effect<A, E, R>) => Effect<void, E, R>
```

[Source][433]

Since v2.0.0

## [![][1]][434] flip

Swaps the success and error channels of an effect.

**Details**

This function reverses the flow of an effect by swapping its success and error channels. The success value becomes an error, and the error value becomes a success.

**Example**

```highlight
import { Effect } from "effect"

//      ┌─── Effect<number, string, never>
//      ▼
const program = Effect.fail("Oh uh!").pipe(Effect.as(2))

//      ┌─── Effect<string, number, never>
//      ▼
const flipped = Effect.flip(program)
```

**Signature**

```highlight
declare const flip: <A, E, R>(self: Effect<A, E, R>) => Effect<E, A, R>
```

[Source][435]

Since v2.0.0

## [![][1]][436] flipWith

Swaps the error/value parameters, applies the function `f` and flips the parameters back

**Signature**

```highlight
declare const flipWith: {
  <E, A, R, E2, A2, R2>(
    f: (effect: Effect<E, A, R>) => Effect<E2, A2, R2>
  ): (self: Effect<A, E, R>) => Effect<A2, E2, R2>
  <A, E, R, E2, A2, R2>(self: Effect<A, E, R>, f: (effect: Effect<E, A, R>) => Effect<E2, A2, R2>): Effect<A2, E2, R2>
}
```

[Source][437]

Since v2.0.0

## [![][1]][438] map

Transforms the value inside an effect by applying a function to it.

**Syntax**

```highlight
const mappedEffect = pipe(myEffect, Effect.map(transformation))
// or
const mappedEffect = Effect.map(myEffect, transformation)
// or
const mappedEffect = myEffect.pipe(Effect.map(transformation))
```

**Details**

`map` takes a function and applies it to the value contained within an effect, creating a new effect with the transformed value.

It’s important to note that effects are immutable, meaning that the original effect is not modified. Instead, a new effect is returned with the updated value.

**Example** (Adding a Service Charge)

```highlight
import { pipe, Effect } from "effect"

const addServiceCharge = (amount: number) => amount + 1

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

const finalAmount = pipe(fetchTransactionAmount, Effect.map(addServiceCharge))

Effect.runPromise(finalAmount).then(console.log)
// Output: 101
```

**See**

- `mapError` for a version that operates on the error channel.
- `mapBoth` for a version that operates on both channels.
- `flatMap` or `andThen` for a version that can return a new effect.

**Signature**

```highlight
declare const map: {
  <A, B>(f: (a: A) => B): <E, R>(self: Effect<A, E, R>) => Effect<B, E, R>
  <A, E, R, B>(self: Effect<A, E, R>, f: (a: A) => B): Effect<B, E, R>
}
```

[Source][439]

Since v2.0.0

## [![][1]][440] mapAccum

Applies a stateful transformation to each element of a collection, producing new elements along with an updated state.

**When to Use**

Use `mapAccum` when you need to process each element of a collection while keeping track of some state across iterations.

**Details**

`mapAccum` takes an initial state (`initial`) and a function (`f`) that is applied to each element. This function returns a new state and a transformed element. The final effect produces both the accumulated state and the transformed collection.

If the input collection is a non-empty array, the return type will match the input collection type.

**Example**

```highlight
import { Effect } from "effect"

// Define an initial state and a transformation function
const initialState = 0

const transformation = (state: number, element: string) =>
  Effect.succeed<[number, string]>([state + element.length, element.toUpperCase()])

// Apply mapAccum to transform an array of strings
const program = Effect.mapAccum(["a", "bb", "ccc"], initialState, transformation)

Effect.runPromise(program).then(([finalState, transformedCollection]) => {
  console.log(finalState)
  console.log(transformedCollection)
})
// Output:
// 6
// [ 'A', 'BB', 'CCC' ]
```

**Signature**

```highlight
declare const mapAccum: {
  <S, A, B, E, R, I extends Iterable<A> = Iterable<A>>(
    initial: S,
    f: (state: S, a: RA.ReadonlyArray.Infer<I>, i: number) => Effect<readonly [S, B], E, R>
  ): (elements: I) => Effect<[S, RA.ReadonlyArray.With<I, B>], E, R>
  <A, S, B, E, R, I extends Iterable<A> = Iterable<A>>(
    elements: I,
    initial: S,
    f: (state: S, a: RA.ReadonlyArray.Infer<I>, i: number) => Effect<readonly [S, B], E, R>
  ): Effect<[S, RA.ReadonlyArray.With<I, B>], E, R>
}
```

[Source][441]

Since v2.0.0

## [![][1]][442] mapBoth

Applies transformations to both the success and error channels of an effect.

**Details**

This function takes two map functions as arguments: one for the error channel and one for the success channel. You can use it when you want to modify both the error and the success values without altering the overall success or failure status of the effect.

**Example**

```highlight
import { Effect } from "effect"

//      ┌─── Effect<number, string, never>
//      ▼
const simulatedTask = Effect.fail("Oh no!").pipe(Effect.as(1))

//      ┌─── Effect<boolean, Error, never>
//      ▼
const modified = Effect.mapBoth(simulatedTask, {
  onFailure: (message) => new Error(message),
  onSuccess: (n) => n > 0
})
```

**See**

- `map` for a version that operates on the success channel.
- `mapError` for a version that operates on the error channel.

**Signature**

```highlight
declare const mapBoth: {
  <E, E2, A, A2>(options: {
    readonly onFailure: (e: E) => E2
    readonly onSuccess: (a: A) => A2
  }): <R>(self: Effect<A, E, R>) => Effect<A2, E2, R>
  <A, E, R, E2, A2>(
    self: Effect<A, E, R>,
    options: { readonly onFailure: (e: E) => E2; readonly onSuccess: (a: A) => A2 }
  ): Effect<A2, E2, R>
}
```

[Source][443]

Since v2.0.0

## [![][1]][444] mapError

Transforms or modifies the error produced by an effect without affecting its success value.

**When to Use**

This function is helpful when you want to enhance the error with additional information, change the error type, or apply custom error handling while keeping the original behavior of the effect’s success values intact. It only operates on the error channel and leaves the success channel unchanged.

**Example**

```highlight
import { Effect } from "effect"

//      ┌─── Effect<number, string, never>
//      ▼
const simulatedTask = Effect.fail("Oh no!").pipe(Effect.as(1))

//      ┌─── Effect<number, Error, never>
//      ▼
const mapped = Effect.mapError(simulatedTask, (message) => new Error(message))
```

**See**

- `map` for a version that operates on the success channel.
- `mapBoth` for a version that operates on both channels.
- `orElseFail` if you want to replace the error with a new one.

**Signature**

```highlight
declare const mapError: {
  <E, E2>(f: (e: E) => E2): <A, R>(self: Effect<A, E, R>) => Effect<A, E2, R>
  <A, E, R, E2>(self: Effect<A, E, R>, f: (e: E) => E2): Effect<A, E2, R>
}
```

[Source][445]

Since v2.0.0

## [![][1]][446] mapErrorCause

Maps the cause of failure of an effect using a specified function.

**See**

- `sandbox` for a version that exposes the full cause of failures, defects, or interruptions.
- `catchAllCause` for a version that can recover from all types of defects.

**Signature**

```highlight
declare const mapErrorCause: {
  <E, E2>(f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): <A, R>(self: Effect<A, E, R>) => Effect<A, E2, R>
  <A, E, R, E2>(self: Effect<A, E, R>, f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): Effect<A, E2, R>
}
```

[Source][447]

Since v2.0.0

## [![][1]][448] merge

Combines both success and error channels of an effect into a single outcome.

**Details**

This function transforms an effect that may fail into one that always returns a value, where both success and failure outcomes are handled as values in the success channel.

**When to Use**

This can be useful when you want to continue execution regardless of the error type and still capture both successful results and errors as part of the outcome.

**Example**

```highlight
import { Effect } from "effect"

//      ┌─── Effect<number, string, never>
//      ▼
const program = Effect.fail("Oh uh!").pipe(Effect.as(2))

//      ┌─── Effect<number | string, never, never>
//      ▼
const recovered = Effect.merge(program)
```

**Signature**

```highlight
declare const merge: <A, E, R>(self: Effect<A, E, R>) => Effect<E | A, never, R>
```

[Source][449]

Since v2.0.0

## [![][1]][450] negate

Returns a new effect with the boolean value of this effect negated.

**Signature**

```highlight
declare const negate: <E, R>(self: Effect<boolean, E, R>) => Effect<boolean, E, R>
```

[Source][451]

Since v2.0.0

# [![][1]][452] Matching

## [![][1]][453] match

Handles both success and failure cases of an effect without performing side effects.

**Details**

`match` lets you define custom handlers for both success and failure scenarios. You provide separate functions to handle each case, allowing you to process the result if the effect succeeds, or handle the error if the effect fails.

**When to Use**

This is useful for structuring your code to respond differently to success or failure without triggering side effects.

**Example** (Handling Both Success and Failure Cases)

```highlight
import { Effect } from "effect"

const success: Effect.Effect<number, Error> = Effect.succeed(42)

const program1 = Effect.match(success, {
  onFailure: (error) => `failure: ${error.message}`,
  onSuccess: (value) => `success: ${value}`
})

// Run and log the result of the successful effect
Effect.runPromise(program1).then(console.log)
// Output: "success: 42"

const failure: Effect.Effect<number, Error> = Effect.fail(new Error("Uh oh!"))

const program2 = Effect.match(failure, {
  onFailure: (error) => `failure: ${error.message}`,
  onSuccess: (value) => `success: ${value}`
})

// Run and log the result of the failed effect
Effect.runPromise(program2).then(console.log)
// Output: "failure: Uh oh!"
```

**See**

- `matchEffect` if you need to perform side effects in the handlers.

**Signature**

```highlight
declare const match: {
  <E, A2, A, A3>(options: {
    readonly onFailure: (error: E) => A2
    readonly onSuccess: (value: A) => A3
  }): <R>(self: Effect<A, E, R>) => Effect<A2 | A3, never, R>
  <A, E, R, A2, A3>(
    self: Effect<A, E, R>,
    options: { readonly onFailure: (error: E) => A2; readonly onSuccess: (value: A) => A3 }
  ): Effect<A2 | A3, never, R>
}
```

[Source][454]

Since v2.0.0

## [![][1]][455] matchCause

Handles failures by matching the cause of failure.

**Details**

The `matchCause` function allows you to handle failures with access to the full cause of the failure within a fiber.

**When to Use**

This is useful for differentiating between different types of errors, such as regular failures, defects, or interruptions. You can provide specific handling logic for each failure type based on the cause.

**Example** (Handling Different Failure Causes)

```highlight
import { Effect } from "effect"

const task: Effect.Effect<number, Error> = Effect.die("Uh oh!")

const program = Effect.matchCause(task, {
  onFailure: (cause) => {
    switch (cause._tag) {
      case "Fail":
        // Handle standard failure
        return `Fail: ${cause.error.message}`
      case "Die":
        // Handle defects (unexpected errors)
        return `Die: ${cause.defect}`
      case "Interrupt":
        // Handle interruption
        return `${cause.fiberId} interrupted!`
    }
    // Fallback for other causes
    return "failed due to other causes"
  },
  onSuccess: (value) =>
    // task completes successfully
    `succeeded with ${value} value`
})

Effect.runPromise(program).then(console.log)
// Output: "Die: Uh oh!"
```

**See**

- `matchCauseEffect` if you need to perform side effects in the handlers.
- `match` if you don’t need to handle the cause of the failure.

**Signature**

```highlight
declare const matchCause: {
  <E, A2, A, A3>(options: {
    readonly onFailure: (cause: Cause.Cause<E>) => A2
    readonly onSuccess: (a: A) => A3
  }): <R>(self: Effect<A, E, R>) => Effect<A2 | A3, never, R>
  <A, E, R, A2, A3>(
    self: Effect<A, E, R>,
    options: { readonly onFailure: (cause: Cause.Cause<E>) => A2; readonly onSuccess: (a: A) => A3 }
  ): Effect<A2 | A3, never, R>
}
```

[Source][456]

Since v2.0.0

## [![][1]][457] matchCauseEffect

Handles failures with access to the cause and allows performing side effects.

**Details**

The `matchCauseEffect` function works similarly to `matchCause`, but it also allows you to perform additional side effects based on the failure cause. This function provides access to the complete cause of the failure, making it possible to differentiate between various failure types, and allows you to respond accordingly while performing side effects (like logging or other operations).

**Example** (Handling Different Failure Causes with Side Effects)

```highlight
import { Effect, Console } from "effect"

const task: Effect.Effect<number, Error> = Effect.die("Uh oh!")

const program = Effect.matchCauseEffect(task, {
  onFailure: (cause) => {
    switch (cause._tag) {
      case "Fail":
        // Handle standard failure with a logged message
        return Console.log(`Fail: ${cause.error.message}`)
      case "Die":
        // Handle defects (unexpected errors) by logging the defect
        return Console.log(`Die: ${cause.defect}`)
      case "Interrupt":
        // Handle interruption and log the fiberId that was interrupted
        return Console.log(`${cause.fiberId} interrupted!`)
    }
    // Fallback for other causes
    return Console.log("failed due to other causes")
  },
  onSuccess: (value) =>
    // Log success if the task completes successfully
    Console.log(`succeeded with ${value} value`)
})

Effect.runPromise(program)
// Output: "Die: Uh oh!"
```

**See**

- `matchCause` if you don’t need side effects and only want to handle the result or failure.
- `matchEffect` if you don’t need to handle the cause of the failure.

**Signature**

```highlight
declare const matchCauseEffect: {
  <E, A2, E2, R2, A, A3, E3, R3>(options: {
    readonly onFailure: (cause: Cause.Cause<E>) => Effect<A2, E2, R2>
    readonly onSuccess: (a: A) => Effect<A3, E3, R3>
  }): <R>(self: Effect<A, E, R>) => Effect<A2 | A3, E2 | E3, R2 | R3 | R>
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    self: Effect<A, E, R>,
    options: {
      readonly onFailure: (cause: Cause.Cause<E>) => Effect<A2, E2, R2>
      readonly onSuccess: (a: A) => Effect<A3, E3, R3>
    }
  ): Effect<A2 | A3, E2 | E3, R2 | R3 | R>
}
```

[Source][458]

Since v2.0.0

## [![][1]][459] matchEffect

Handles both success and failure cases of an effect, allowing for additional side effects.

**Details**

The `matchEffect` function is similar to `match`, but it enables you to perform side effects in the handlers for both success and failure outcomes.

**When to Use**

This is useful when you need to execute additional actions, like logging or notifying users, based on whether an effect succeeds or fails.

**Example** (Handling Both Success and Failure Cases with Side Effects)

```highlight
import { Effect } from "effect"

const success: Effect.Effect<number, Error> = Effect.succeed(42)
const failure: Effect.Effect<number, Error> = Effect.fail(new Error("Uh oh!"))

const program1 = Effect.matchEffect(success, {
  onFailure: (error) => Effect.succeed(`failure: ${error.message}`).pipe(Effect.tap(Effect.log)),
  onSuccess: (value) => Effect.succeed(`success: ${value}`).pipe(Effect.tap(Effect.log))
})

console.log(Effect.runSync(program1))
// Output:
// timestamp=... level=INFO fiber=#0 message="success: 42"
// success: 42

const program2 = Effect.matchEffect(failure, {
  onFailure: (error) => Effect.succeed(`failure: ${error.message}`).pipe(Effect.tap(Effect.log)),
  onSuccess: (value) => Effect.succeed(`success: ${value}`).pipe(Effect.tap(Effect.log))
})

console.log(Effect.runSync(program2))
// Output:
// timestamp=... level=INFO fiber=#1 message="failure: Uh oh!"
// failure: Uh oh!
```

**See**

- `match` if you don’t need side effects and only want to handle the result or failure.

**Signature**

```highlight
declare const matchEffect: {
  <E, A2, E2, R2, A, A3, E3, R3>(options: {
    readonly onFailure: (e: E) => Effect<A2, E2, R2>
    readonly onSuccess: (a: A) => Effect<A3, E3, R3>
  }): <R>(self: Effect<A, E, R>) => Effect<A2 | A3, E2 | E3, R2 | R3 | R>
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    self: Effect<A, E, R>,
    options: { readonly onFailure: (e: E) => Effect<A2, E2, R2>; readonly onSuccess: (a: A) => Effect<A3, E3, R3> }
  ): Effect<A2 | A3, E2 | E3, R2 | R3 | R>
}
```

[Source][460]

Since v2.0.0

# [![][1]][461] Metrics

## [![][1]][462] labelMetrics

Adds labels to metrics within an effect using `MetricLabel` objects.

**Details**

This function allows you to label metrics using `MetricLabel` objects. Labels help add structured metadata to metrics for categorization and filtering in monitoring systems. The provided labels will apply to all metrics within the effect’s execution.

**Signature**

```highlight
declare const labelMetrics: {
  (labels: Iterable<MetricLabel.MetricLabel>): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, labels: Iterable<MetricLabel.MetricLabel>): Effect<A, E, R>
}
```

[Source][463]

Since v2.0.0

## [![][1]][464] labelMetricsScoped

Adds labels to metrics within a scope using `MetricLabel` objects.

**Details**

This function allows you to apply labels to all metrics generated within a specific scope using an array of `MetricLabel` objects. These labels provide additional metadata to metrics, which can be used for categorization, filtering, or monitoring purposes. The labels are scoped and will be removed automatically once the scope is closed, ensuring they are only applied temporarily within the defined context.

**Signature**

```highlight
declare const labelMetricsScoped: (labels: ReadonlyArray<MetricLabel.MetricLabel>) => Effect<void, never, Scope.Scope>
```

[Source][465]

Since v2.0.0

## [![][1]][466] metricLabels

Retrieves the metric labels associated with the current scope.

**Signature**

```highlight
declare const metricLabels: Effect<ReadonlyArray<MetricLabel.MetricLabel>, never, never>
```

[Source][467]

Since v2.0.0

## [![][1]][468] tagMetrics

Tags each metric in an effect with specific key-value pairs.

**Details**

This function allows you to tag all metrics in an effect with a set of key-value pairs or a single key-value pair. Tags help you add metadata to metrics, making it easier to filter and categorize them in monitoring systems. The provided tags will apply to all metrics generated within the effect’s scope.

**Signature**

```highlight
declare const tagMetrics: {
  (key: string, value: string): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  (values: Record<string, string>): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, key: string, value: string): Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, values: Record<string, string>): Effect<A, E, R>
}
```

[Source][469]

Since v2.0.0

## [![][1]][470] tagMetricsScoped

Tags metrics within a scope with a specific key-value pair.

**Details**

This function tags all metrics within a scope with the provided key-value pair. Once the scope is closed, the tag is automatically removed. This is useful for applying temporary context-specific tags to metrics during scoped operations.

**Signature**

```highlight
declare const tagMetricsScoped: (key: string, value: string) => Effect<void, never, Scope.Scope>
```

[Source][471]

Since v2.0.0

## [![][1]][472] withMetric

Associates a metric with the current effect, updating it as the effect progresses.

**Signature**

```highlight
declare const withMetric: {
  <Type, In, Out>(metric: Metric.Metric<Type, In, Out>): <A extends In, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A extends In, E, R, Type, In, Out>(self: Effect<A, E, R>, metric: Metric.Metric<Type, In, Out>): Effect<A, E, R>
}
```

[Source][473]

Since v2.0.0

# [![][1]][474] Models

## [![][1]][475] Adapter (interface)

**Signature**

```highlight
export interface Adapter {
  <A, E, R>(self: Effect<A, E, R>): Effect<A, E, R>
  <A, _A, _E, _R>(a: A, ab: (a: A) => Effect<_A, _E, _R>): Effect<_A, _E, _R>
  <A, B, _A, _E, _R>(a: A, ab: (a: A) => B, bc: (b: B) => Effect<_A, _E, _R>): Effect<_A, _E, _R>
  <A, B, C, _A, _E, _R>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => Effect<_A, _E, _R>): Effect<_A, _E, _R>
  <A, B, C, D, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (g: H) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, L, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => R,
    rs: (r: R) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => R,
    rs: (r: R) => S,
    st: (s: S) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, _A, _E, _R>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => R,
    rs: (r: R) => S,
    st: (s: S) => T,
    tu: (s: T) => Effect<_A, _E, _R>
  ): Effect<_A, _E, _R>
}
```

[Source][476]

Since v2.0.0

## [![][1]][477] Blocked (interface)

**Signature**

```highlight
export interface Blocked<out A, out E> extends Effect<A, E> {
  readonly _op: "Blocked"
  readonly effect_instruction_i0: RequestBlock
  readonly effect_instruction_i1: Effect<A, E>
}
```

[Source][478]

Since v2.0.0

## [![][1]][479] Effect (interface)

The `Effect` interface defines a value that describes a workflow or job, which can succeed or fail.

**Details**

The `Effect` interface represents a computation that can model a workflow involving various types of operations, such as synchronous, asynchronous, concurrent, and parallel interactions. It operates within a context of type `R`, and the result can either be a success with a value of type `A` or a failure with an error of type `E`. The `Effect` is designed to handle complex interactions with external resources, offering advanced features such as fiber-based concurrency, scheduling, interruption handling, and scalability. This makes it suitable for tasks that require fine-grained control over concurrency and error management.

To execute an `Effect` value, you need a `Runtime`, which provides the environment necessary to run and manage the computation.

**Signature**

```highlight
export interface Effect<out A, out E = never, out R = never> extends Effect.Variance<A, E, R>, Pipeable {
  readonly [Unify.typeSymbol]?: unknown
  readonly [Unify.unifySymbol]?: EffectUnify<this>
  readonly [Unify.ignoreSymbol]?: EffectUnifyIgnore
  [Symbol.iterator](): EffectGenerator<Effect<A, E, R>>
}
```

[Source][480]

Since v2.0.0

## [![][1]][481] EffectGenerator (interface)

**Signature**

```highlight
export interface EffectGenerator<T extends Effect<any, any, any>> {
  next(...args: ReadonlyArray<any>): IteratorResult<YieldWrap<T>, Effect.Success<T>>
}
```

[Source][482]

Since v3.0.0

## [![][1]][483] EffectUnify (interface)

**Signature**

```highlight
export interface EffectUnify<A extends { [Unify.typeSymbol]?: any }>
  extends Either.EitherUnify<A>,
    Option.OptionUnify<A>,
    Context.TagUnify<A> {
  Effect?: () => A[Unify.typeSymbol] extends Effect<infer A0, infer E0, infer R0> | infer _ ? Effect<A0, E0, R0> : never
}
```

[Source][484]

Since v2.0.0

## [![][1]][485] EffectUnifyIgnore (interface)

**Signature**

```highlight
export interface EffectUnifyIgnore {
  Tag?: true
  Option?: true
  Either?: true
}
```

[Source][486]

Since v2.0.0

## [![][1]][487] FunctionWithSpanOptions (interface)

Wraps a function that returns an effect with a new span for tracing.

**Signature**

```highlight
export interface FunctionWithSpanOptions {
  readonly name: string
  readonly attributes?: Record<string, unknown> | undefined
  readonly links?: ReadonlyArray<Tracer.SpanLink> | undefined
  readonly parent?: Tracer.AnySpan | undefined
  readonly root?: boolean | undefined
  readonly context?: Context.Context<never> | undefined
  readonly kind?: Tracer.SpanKind | undefined
}
```

[Source][488]

Since v3.2.0

## [![][1]][489] LatchUnify (interface)

**Signature**

```highlight
export interface LatchUnify<A extends { [Unify.typeSymbol]?: any }> extends EffectUnify<A> {
  Latch?: () => Latch
}
```

[Source][490]

Since v3.8.0

## [![][1]][491] LatchUnifyIgnore (interface)

**Signature**

```highlight
export interface LatchUnifyIgnore extends EffectUnifyIgnore {
  Effect?: true
}
```

[Source][492]

Since v3.8.0

## [![][1]][493] Tag (namespace)

[Source][494]

Since v2.0.0

### [![][1]][495] ProhibitedType (interface)

**Signature**

```highlight
export interface ProhibitedType {
  Service?: `property "Service" is forbidden`
  Identifier?: `property "Identifier" is forbidden`
  _op?: `property "_op" is forbidden`
  of?: `property "of" is forbidden`
  context?: `property "context" is forbidden`
  key?: `property "key" is forbidden`
  stack?: `property "stack" is forbidden`
  name?: `property "name" is forbidden`
  pipe?: `property "pipe" is forbidden`
  use?: `property "use" is forbidden`
}
```

[Source][496]

Since v2.0.0

### [![][1]][497] AllowedType (type alias)

**Signature**

```highlight
type AllowedType = (Record<PropertyKey, any> & ProhibitedType) | string | number | symbol
```

[Source][498]

Since v2.0.0

### [![][1]][499] Proxy (type alias)

**Signature**

```highlight
type Proxy<Self, Type> = {
  [k in keyof Type as Type[k] extends (...args: infer Args extends ReadonlyArray<any>) => infer Ret
    ? ((...args: Readonly<Args>) => Ret) extends Type[k]
      ? k
      : never
    : k]: Type[k] extends (...args: infer Args extends ReadonlyArray<any>) => Effect<infer A, infer E, infer R>
    ? (...args: Readonly<Args>) => Effect<A, E, Self | R>
    : Type[k] extends (...args: infer Args extends ReadonlyArray<any>) => Promise<infer A>
      ? (...args: Readonly<Args>) => Effect<A, Cause.UnknownException, Self>
      : Type[k] extends (...args: infer Args extends ReadonlyArray<any>) => infer A
        ? (...args: Readonly<Args>) => Effect<A, never, Self>
        : Type[k] extends Effect<infer A, infer E, infer R>
          ? Effect<A, E, Self | R>
          : Effect<Type[k], never, Self>
}
```

[Source][500]

Since v3.9.0

## [![][1]][501] fn (namespace)

[Source][502]

Since v3.11.0

### [![][1]][503] Gen (type alias)

**Signature**

```highlight
type Gen = {
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>>(
    body: (...args: Args) => Generator<Eff, AEff, never>
  ): (
    ...args: Args
  ) => Effect<
    AEff,
    [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
    [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
  >
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A extends Effect<any, any, any>>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A
  ): (...args: Args) => Effect.AsEffect<A>
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B extends Effect<any, any, any>>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B
  ): (...args: Args) => Effect.AsEffect<B>
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B, C extends Effect<any, any, any>>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, [48;63;245;2016;3430t[48;63;245;2016;3430t[48;63;245;2016;3430t[48;63;245;2016;3430tinfer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C
  ): (...args: Args) => Effect.AsEffect<C>
  <
    Eff extends YieldWrap<Effect<any, any, any>>,
    AEff,
    Args extends Array<any>,
    A,
    B,
    C,
    D extends Effect<any, any, any>
  >(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D
  ): (...args: Args) => Effect.AsEffect<D>
  <
    Eff extends YieldWrap<Effect<any, any, any>>,
    AEff,
    Args extends Array<any>,
    A,
    B,
    C,
    D,
    E extends Effect<any, any, any>
  >(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E
  ): (...args: Args) => Effect.AsEffect<E>
  <
    Eff extends YieldWrap<Effect<any, any, any>>,
    AEff,
    Args extends Array<any>,
    A,
    B,
    C,
    D,
    E,
    F extends Effect<any, any, any>
  >(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E,
    f: (_: E, ...args: NoInfer<Args>) => F
  ): (...args: Args) => Effect.AsEffect<F>
  <
    Eff extends YieldWrap<Effect<any, any, any>>,
    AEff,
    Args extends Array<any>,
    A,
    B,
    C,
    D,
    E,
    F,
    G extends Effect<any, any, any>
  >(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E,
    f: (_: E, ...args: NoInfer<Args>) => F,
    g: (_: F, ...args: NoInfer<Args>) => G
  ): (...args: Args) => Effect.AsEffect<G>
  <
    Eff extends YieldWrap<Effect<any, any, any>>,
    AEff,
    Args extends Array<any>,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H extends Effect<any, any, any>
  >(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E,
    f: (_: E, ...args: NoInfer<Args>) => F,
    g: (_: F, ...args: NoInfer<Args>) => G,
    h: (_: G, ...args: NoInfer<Args>) => H
  ): (...args: Args) => Effect.AsEffect<H>
  <
    Eff extends YieldWrap<Effect<any, any, any>>,
    AEff,
    Args extends Array<any>,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I extends Effect<any, any, any>
  >(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E,
    f: (_: E, ...args: NoInfer<Args>) => F,
    g: (_: F, ...args: NoInfer<Args>) => G,
    h: (_: G, ...args: NoInfer<Args>) => H,
    i: (_: H, ...args: NoInfer<Args>) => I
  ): (...args: Args) => Effect.AsEffect<I>
}
```

[Source][504]

Since v3.11.0

### [![][1]][505] NonGen (type alias)

**Signature**

```highlight
type NonGen = {
  <Eff extends Effect<any, any, any>, Args extends Array<any>>(
    body: (...args: Args) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
  <Eff extends Effect<any, any, any>, A, Args extends Array<any>>(
    body: (...args: Args) => A,
    a: (_: A, ...args: NoInfer<Args>) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
  <Eff extends Effect<any, any, any>, A, B, Args extends Array<any>>(
    body: (...args: Args) => A,
    a: (_: A, ...args: NoInfer<Args>) => B,
    b: (_: B, ...args: NoInfer<Args>) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
  <Eff extends Effect<any, any, any>, A, B, C, Args extends Array<any>>(
    body: (...args: Args) => A,
    a: (_: A, ...args: NoInfer<Args>) => B,
    b: (_: B, ...args: NoInfer<Args>) => C,
    c: (_: C, ...args: NoInfer<Args>) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
  <Eff extends Effect<any, any, any>, A, B, C, D, Args extends Array<any>>(
    body: (...args: Args) => A,
    a: (_: A, ...args: NoInfer<Args>) => B,
    b: (_: B, ...args: NoInfer<Args>) => C,
    c: (_: C, ...args: NoInfer<Args>) => D,
    d: (_: D, ...args: NoInfer<Args>) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
  <Eff extends Effect<any, any, any>, A, B, C, D, E, Args extends Array<any>>(
    body: (...args: Args) => A,
    a: (_: A, ...args: NoInfer<Args>) => B,
    b: (_: B, ...args: NoInfer<Args>) => C,
    c: (_: C, ...args: NoInfer<Args>) => D,
    d: (_: D, ...args: NoInfer<Args>) => E,
    e: (_: E, ...args: NoInfer<Args>) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
  <Eff extends Effect<any, any, any>, A, B, C, D, E, F, Args extends Array<any>>(
    body: (...args: Args) => A,
    a: (_: A, ...args: NoInfer<Args>) => B,
    b: (_: B, ...args: NoInfer<Args>) => C,
    c: (_: C, ...args: NoInfer<Args>) => D,
    d: (_: D, ...args: NoInfer<Args>) => E,
    e: (_: E, ...args: NoInfer<Args>) => F,
    f: (_: F, ...args: NoInfer<Args>) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
  <Eff extends Effect<any, any, any>, A, B, C, D, E, F, G, Args extends Array<any>>(
    body: (...args: Args) => A,
    a: (_: A, ...args: NoInfer<Args>) => B,
    b: (_: B, ...args: NoInfer<Args>) => C,
    c: (_: C, ...args: NoInfer<Args>) => D,
    d: (_: D, ...args: NoInfer<Args>) => E,
    e: (_: E, ...args: NoInfer<Args>) => F,
    f: (_: F, ...args: NoInfer<Args>) => G,
    g: (_: G, ...args: NoInfer<Args>) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
  <Eff extends Effect<any, any, any>, A, B, C, D, E, F, G, H, Args extends Array<any>>(
    body: (...args: Args) => A,
    a: (_: A, ...args: NoInfer<Args>) => B,
    b: (_: B, ...args: NoInfer<Args>) => C,
    c: (_: C, ...args: NoInfer<Args>) => D,
    d: (_: D, ...args: NoInfer<Args>) => E,
    e: (_: E, ...args: NoInfer<Args>) => F,
    f: (_: F, ...args: NoInfer<Args>) => G,
    g: (_: G, ...args: NoInfer<Args>) => H,
    h: (_: H, ...args: NoInfer<Args>) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
  <Eff extends Effect<any, any, any>, A, B, C, D, E, F, G, H, I, Args extends Array<any>>(
    body: (...args: Args) => A,
    a: (_: A, ...args: NoInfer<Args>) => B,
    b: (_: B, ...args: NoInfer<Args>) => C,
    c: (_: C, ...args: NoInfer<Args>) => D,
    d: (_: D, ...args: NoInfer<Args>) => E,
    e: (_: E, ...args: NoInfer<Args>) => F,
    f: (_: F, ...args: NoInfer<Args>) => G,
    g: (_: G, ...args: NoInfer<Args>) => H,
    h: (_: H, ...args: NoInfer<Args>) => I,
    i: (_: H, ...args: NoInfer<Args>) => Eff
  ): (...args: Args) => Effect.AsEffect<Eff>
}
```

[Source][506]

Since v3.11.0

### [![][1]][507] Untraced (type alias)

**Signature**

```highlight
type Untraced = {
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>>(
    body: (...args: Args) => Generator<Eff, AEff, never>
  ): (
    ...args: Args
  ) => Effect<
    AEff,
    [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
    [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
  >
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A
  ): (...args: Args) => A
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B
  ): (...args: Args) => B
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B, C>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C
  ): (...args: Args) => C
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B, C, D>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D
  ): (...args: Args) => D
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B, C, D, E>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E
  ): (...args: Args) => E
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B, C, D, E, F>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E,
    f: (_: E, ...args: NoInfer<Args>) => F
  ): (...args: Args) => F
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B, C, D, E, F, G>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E,
    f: (_: E, ...args: NoInfer<Args>) => F,
    g: (_: F, ...args: NoInfer<Args>) => G
  ): (...args: Args) => G
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B, C, D, E, F, G, H>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E,
    f: (_: E, ...args: NoInfer<Args>) => F,
    g: (_: F, ...args: NoInfer<Args>) => G,
    h: (_: G, ...args: NoInfer<Args>) => H
  ): (...args: Args) => H
  <Eff extends YieldWrap<Effect<any, any, any>>, AEff, Args extends Array<any>, A, B, C, D, E, F, G, H, I>(
    body: (...args: Args) => Generator<Eff, AEff, never>,
    a: (
      _: Effect<
        AEff,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never,
        [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
      >,
      ...args: NoInfer<Args>
    ) => A,
    b: (_: A, ...args: NoInfer<Args>) => B,
    c: (_: B, ...args: NoInfer<Args>) => C,
    d: (_: C, ...args: NoInfer<Args>) => D,
    e: (_: D, ...args: NoInfer<Args>) => E,
    f: (_: E, ...args: NoInfer<Args>) => F,
    g: (_: F, ...args: NoInfer<Args>) => G,
    h: (_: G, ...args: NoInfer<Args>) => H,
    i: (_: H, ...args: NoInfer<Args>) => I
  ): (...args: Args) => I
}
```

[Source][508]

Since v3.11.0

# [![][1]][509] Optional Wrapping & Unwrapping

## [![][1]][510] fromNullable

Safely handles nullable values by creating an effect that fails for `null` or `undefined`.

**Details**

This function ensures that an input value is non-null and non-undefined before processing it. If the value is valid, the effect succeeds with the value. If the value is `null` or `undefined`, the effect fails with a `NoSuchElementException`. This is particularly useful for avoiding null-related errors by clearly separating valid values from invalid ones in effectful computations.

The failure with `NoSuchElementException` allows you to explicitly handle cases where a value is expected but not provided, leading to safer and more predictable code.

**When to Use**

Use this function when working with values that may be `null` or `undefined` and you want to ensure that only non-null values are processed. It helps enforce null-safety and makes error handling more explicit.

**Example**

```highlight
import { Effect } from "effect"

//      ┌─── Effect<number, NoSuchElementException, never>
//      ▼
const maybe1 = Effect.fromNullable(1)

Effect.runPromiseExit(maybe1).then(console.log)
// Output:
// { _id: 'Exit', _tag: 'Success', value: 1 }

//      ┌─── Effect<number, NoSuchElementException, never>
//      ▼
const maybe2 = Effect.fromNullable(null as number | null)

Effect.runPromiseExit(maybe2).then(console.log)
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Fail',
//     failure: { _tag: 'NoSuchElementException' }
//   }
// }
```

**Signature**

```highlight
declare const fromNullable: <A>(value: A) => Effect<NonNullable<A>, Cause.NoSuchElementException>
```

[Source][511]

Since v2.0.0

## [![][1]][512] optionFromOptional

Converts an effect that may fail with a `NoSuchElementException` into an effect that succeeds with an `Option`.

**Details**

This function transforms an effect that might fail with `Cause.NoSuchElementException` into an effect that succeeds with an `Option` type. If the original effect succeeds, its value is wrapped in `Option.some`. If it fails specifically due to a `NoSuchElementException`, the failure is mapped to `Option.none`. Other types of failures remain unchanged and are passed through as they are.

This is useful when working with effects where you want to gracefully handle the absence of a value while preserving other potential failures.

**When to Use**

Use this function when you need to handle missing values as `Option.none` rather than throwing or propagating errors like `NoSuchElementException`. It’s ideal for scenarios where you want to explicitly represent optionality in a type-safe way while retaining other failure information.

**Example**

```highlight
import { Effect } from "effect"

//      ┌─── Effect<number, NoSuchElementException, never>
//      ▼
const maybe1 = Effect.fromNullable(1)

//      ┌─── Effect<Option<number>, never, never>
//      ▼
const option1 = Effect.optionFromOptional(maybe1)

Effect.runPromise(option1).then(console.log)
// Output: { _id: 'Option', _tag: 'Some', value: 1 }

//      ┌─── Effect<number, NoSuchElementException, never>
//      ▼
const maybe2 = Effect.fromNullable(null as number | null)

//      ┌─── Effect<Option<number>, never, never>
//      ▼
const option2 = Effect.optionFromOptional(maybe2)

Effect.runPromise(option2).then(console.log)
// Output: { _tag: 'None' }
```

**Signature**

```highlight
declare const optionFromOptional: <A, E, R>(
  self: Effect<A, E, R>
) => Effect<Option.Option<A>, Exclude<E, Cause.NoSuchElementException>, R>
```

[Source][513]

Since v2.0.0

## [![][1]][514] transposeMapOption

Applies an `Effect` on an `Option` and transposes the result.

**Details**

If the `Option` is `None`, the resulting `Effect` will immediately succeed with a `None` value. If the `Option` is `Some`, the effectful operation will be executed on the inner value, and its result wrapped in a `Some`.

**Example**

```highlight
import { Effect, Option, pipe } from "effect"

//          ┌─── Effect<Option<number>, never, never>>
//          ▼
const noneResult = pipe(
  Option.none(),
  Effect.transposeMapOption(() => Effect.succeed(42)) // will not be executed
)
console.log(Effect.runSync(noneResult))
// Output: { _id: 'Option', _tag: 'None' }

//          ┌─── Effect<Option<number>, never, never>>
//          ▼
const someSuccessResult = pipe(
  Option.some(42),
  Effect.transposeMapOption((value) => Effect.succeed(value * 2))
)
console.log(Effect.runSync(someSuccessResult))
// Output: { _id: 'Option', _tag: 'Some', value: 84 }
```

**Signature**

```highlight
declare const transposeMapOption: (<A, B, E = never, R = never>(
  f: (self: A) => Effect<B, E, R>
) => (self: Option.Option<A>) => Effect<Option.Option<B>, E, R>) &
  (<A, B, E = never, R = never>(
    self: Option.Option<A>,
    f: (self: A) => Effect<B, E, R>
  ) => Effect<Option.Option<B>, E, R>)
```

[Source][515]

Since v3.14.0

## [![][1]][516] transposeOption

Converts an `Option` of an `Effect` into an `Effect` of an `Option`.

**Details**

This function transforms an `Option<Effect<A, E, R>>` into an `Effect<Option<A>, E, R>`. If the `Option` is `None`, the resulting `Effect` will immediately succeed with a `None` value. If the `Option` is `Some`, the inner `Effect` will be executed, and its result wrapped in a `Some`.

**Example**

```highlight
import { Effect, Option } from "effect"

//      ┌─── Option<Effect<number, never, never>>
//      ▼
const maybe = Option.some(Effect.succeed(42))

//      ┌─── Effect<Option<number>, never, never>
//      ▼
const result = Effect.transposeOption(maybe)

console.log(Effect.runSync(result))
// Output: { _id: 'Option', _tag: 'Some', value: 42 }
```

**Signature**

```highlight
declare const transposeOption: <A = never, E = never, R = never>(
  self: Option.Option<Effect<A, E, R>>
) => Effect<Option.Option<A>, E, R>
```

[Source][517]

Since v3.13.0

# [![][1]][518] Outcome Encapsulation

## [![][1]][519] either

Encapsulates both success and failure of an `Effect` into an `Either` type.

**Details**

This function converts an effect that may fail into an effect that always succeeds, wrapping the outcome in an `Either` type. The result will be `Either.Left` if the effect fails, containing the recoverable error, or `Either.Right` if it succeeds, containing the result.

Using this function, you can handle recoverable errors explicitly without causing the effect to fail. This is particularly useful in scenarios where you want to chain effects and manage both success and failure in the same logical flow.

It’s important to note that unrecoverable errors, often referred to as “defects,” are still thrown and not captured within the `Either` type. Only failures that are explicitly represented as recoverable errors in the effect are encapsulated.

The resulting effect cannot fail directly because all recoverable failures are represented inside the `Either` type.

**Example**

```highlight
import { Effect, Either, Random } from "effect"

class HttpError {
  readonly _tag = "HttpError"
}

class ValidationError {
  readonly _tag = "ValidationError"
}

//      ┌─── Effect<string, HttpError | ValidationError, never>
//      ▼
const program = Effect.gen(function* () {
  const n1 = yield* Random.next
  const n2 = yield* Random.next
  if (n1 < 0.5) {
    yield* Effect.fail(new HttpError())
  }
  if (n2 < 0.5) {
    yield* Effect.fail(new ValidationError())
  }
  return "some result"
})

//      ┌─── Effect<string, never, never>
//      ▼
const recovered = Effect.gen(function* () {
  //      ┌─── Either<string, HttpError | ValidationError>
  //      ▼
  const failureOrSuccess = yield* Effect.either(program)
  return Either.match(failureOrSuccess, {
    onLeft: (error) => `Recovering from ${error._tag}`,
    onRight: (value) => value // Do nothing in case of success
  })
})
```

**See**

- `option` for a version that uses `Option` instead.
- `exit` for a version that encapsulates both recoverable errors and defects in an `Exit`.

**Signature**

```highlight
declare const either: <A, E, R>(self: Effect<A, E, R>) => Effect<Either.Either<A, E>, never, R>
```

[Source][520]

Since v2.0.0

## [![][1]][521] exit

Encapsulates both success and failure of an `Effect` using the `Exit` type.

**Details**

This function converts an effect into one that always succeeds, wrapping its outcome in the `Exit` type. The `Exit` type provides explicit handling of both success (`Exit.Success`) and failure (`Exit.Failure`) cases, including defects (unrecoverable errors).

Unlike `either` or `option`, this function also encapsulates defects, which are typically unrecoverable and would otherwise terminate the effect. With the `Exit` type, defects are represented in `Exit.Failure`, allowing for detailed introspection and structured error handling.

This makes the resulting effect robust and incapable of direct failure (its error type is `never`). It is particularly useful for workflows where all outcomes, including unexpected defects, must be managed and analyzed.

**Example**

```highlight
import { Effect, Cause, Console, Exit } from "effect"

// Simulating a runtime error
const task = Effect.dieMessage("Boom!")

const program = Effect.gen(function* () {
  const exit = yield* Effect.exit(task)
  if (Exit.isFailure(exit)) {
    const cause = exit.cause
    if (Cause.isDieType(cause) && Cause.isRuntimeException(cause.defect)) {
      yield* Console.log(`RuntimeException defect caught: ${cause.defect.message}`)
    } else {
      yield* Console.log("Unknown failure caught.")
    }
  }
})

// We get an Exit.Success because we caught all failures
Effect.runPromiseExit(program).then(console.log)
// Output:
// RuntimeException defect caught: Boom!
// {
//   _id: "Exit",
//   _tag: "Success",
//   value: undefined
// }
```

**See**

- `option` for a version that uses `Option` instead.
- `either` for a version that uses `Either` instead.

**Signature**

```highlight
declare const exit: <A, E, R>(self: Effect<A, E, R>) => Effect<Exit.Exit<A, E>, never, R>
```

[Source][522]

Since v2.0.0

## [![][1]][523] option

Encapsulates the result of an effect in an `Option`.

**Details**

This function wraps the outcome of an effect in an `Option` type. If the original effect succeeds, the success value is wrapped in `Option.some`. If the effect fails, the failure is converted to `Option.none`.

This is particularly useful for scenarios where you want to represent the absence of a value explicitly, without causing the resulting effect to fail. The resulting effect has an error type of `never`, meaning it cannot fail directly. However, unrecoverable errors, also referred to as defects, are not captured and will still result in failure.

**Example** (Using Effect.option to Handle Errors)

```highlight
import { Effect } from "effect"

const maybe1 = Effect.option(Effect.succeed(1))

Effect.runPromiseExit(maybe1).then(console.log)
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Success',
//   value: { _id: 'Option', _tag: 'Some', value: 1 }
// }

const maybe2 = Effect.option(Effect.fail("Uh oh!"))

Effect.runPromiseExit(maybe2).then(console.log)
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Success',
//   value: { _id: 'Option', _tag: 'None' }
// }

const maybe3 = Effect.option(Effect.die("Boom!"))

Effect.runPromiseExit(maybe3).then(console.log)
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: { _id: 'Cause', _tag: 'Die', defect: 'Boom!' }
// }
```

**See**

- `either` for a version that uses `Either` instead.
- `exit` for a version that encapsulates both recoverable errors and defects in an `Exit`.

**Signature**

```highlight
declare const option: <A, E, R>(self: Effect<A, E, R>) => Effect<Option.Option<A>, never, R>
```

[Source][524]

Since v2.0.0

# [![][1]][525] Racing

## [![][1]][526] race

Races two effects and returns the result of the first successful one.

**Details**

This function takes two effects and runs them concurrently. The first effect that successfully completes will determine the result of the race, and the other effect will be interrupted.

If neither effect succeeds, the function will fail with a `Cause` containing all the errors.

**When to Use**

This is useful when you want to run two effects concurrently, but only care about the first one to succeed. It is commonly used in cases like timeouts, retries, or when you want to optimize for the faster response without worrying about the other effect.

**Handling Success or Failure with Either**

If you want to handle the result of whichever task completes first, whether it succeeds or fails, you can use the `Effect.either` function. This function wraps the result in an `Either` type, allowing you to see if the result was a success (`Right`) or a failure (`Left`).

**Example** (Both Tasks Succeed)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.succeed("task1").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted"))
)
const task2 = Effect.succeed("task2").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted"))
)

const program = Effect.race(task1, task2)

Effect.runFork(program)
// Output:
// task1 done
// task2 interrupted
```

**Example** (One Task Fails, One Succeeds)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.fail("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted"))
)
const task2 = Effect.succeed("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted"))
)

const program = Effect.race(task1, task2)

Effect.runFork(program)
// Output:
// task2 done
```

**Example** (Both Tasks Fail)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.fail("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted"))
)
const task2 = Effect.fail("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted"))
)

const program = Effect.race(task1, task2)

Effect.runPromiseExit(program).then(console.log)
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Parallel',
//     left: { _id: 'Cause', _tag: 'Fail', failure: 'task1' },
//     right: { _id: 'Cause', _tag: 'Fail', failure: 'task2' }
//   }
// }
```

**Example** (Handling Success or Failure with Either)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.fail("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted"))
)
const task2 = Effect.succeed("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted"))
)

// Run both tasks concurrently, wrapping the result
// in Either to capture success or failure
const program = Effect.race(Effect.either(task1), Effect.either(task2))

Effect.runPromise(program).then(console.log)
// Output:
// task2 interrupted
// { _id: 'Either', _tag: 'Left', left: 'task1' }
```

**See**

- `raceAll` for a version that handles multiple effects.
- `raceFirst` for a version that returns the result of the first effect to complete.

**Signature**

```highlight
declare const race: {
  <A2, E2, R2>(that: Effect<A2, E2, R2>): <A, E, R>(self: Effect<A, E, R>) => Effect<A2 | A, E2 | E, R2 | R>
  <A, E, R, A2, E2, R2>(self: Effect<A, E, R>, that: Effect<A2, E2, R2>): Effect<A | A2, E | E2, R | R2>
}
```

[Source][527]

Since v2.0.0

## [![][1]][528] raceAll

Races multiple effects and returns the first successful result.

**Details**

This function runs multiple effects concurrently and returns the result of the first one to succeed. If one effect succeeds, the others will be interrupted.

If none of the effects succeed, the function will fail with the last error encountered.

**When to Use**

This is useful when you want to race multiple effects, but only care about the first one to succeed. It is commonly used in cases like timeouts, retries, or when you want to optimize for the faster response without worrying about the other effects.

**Example** (All Tasks Succeed)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.succeed("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted"))
)
const task2 = Effect.succeed("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted"))
)

const task3 = Effect.succeed("task3").pipe(
  Effect.delay("150 millis"),
  Effect.tap(Console.log("task3 done")),
  Effect.onInterrupt(() => Console.log("task3 interrupted"))
)

const program = Effect.raceAll([task1, task2, task3])

Effect.runFork(program)
// Output:
// task1 done
// task2 interrupted
// task3 interrupted
```

**Example** (One Task Fails, Two Tasks Succeed)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.fail("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted"))
)
const task2 = Effect.succeed("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted"))
)

const task3 = Effect.succeed("task3").pipe(
  Effect.delay("150 millis"),
  Effect.tap(Console.log("task3 done")),
  Effect.onInterrupt(() => Console.log("task3 interrupted"))
)

const program = Effect.raceAll([task1, task2, task3])

Effect.runFork(program)
// Output:
// task3 done
// task2 interrupted
```

**Example** (All Tasks Fail)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.fail("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted"))
)
const task2 = Effect.fail("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted"))
)

const task3 = Effect.fail("task3").pipe(
  Effect.delay("150 millis"),
  Effect.tap(Console.log("task3 done")),
  Effect.onInterrupt(() => Console.log("task3 interrupted"))
)

const program = Effect.raceAll([task1, task2, task3])

Effect.runPromiseExit(program).then(console.log)
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: { _id: 'Cause', _tag: 'Fail', failure: 'task2' }
// }
```

**See**

- `race` for a version that handles only two effects.

**Signature**

```highlight
declare const raceAll: <Eff extends Effect<any, any, any>>(
  all: Iterable<Eff>
) => Effect<Effect.Success<Eff>, Effect.Error<Eff>, Effect.Context<Eff>>
```

[Source][529]

Since v2.0.0

## [![][1]][530] raceFirst

Races two effects and returns the result of the first one to complete.

**Details**

This function takes two effects and runs them concurrently, returning the result of the first one that completes, regardless of whether it succeeds or fails.

**When to Use**

This function is useful when you want to race two operations, and you want to proceed with whichever one finishes first, regardless of whether it succeeds or fails.

**Disconnecting Effects**

The `Effect.raceFirst` function safely interrupts the “loser” effect once the other completes, but it will not resume until the loser is cleanly terminated.

If you want a quicker return, you can disconnect the interrupt signal for both effects. Instead of calling:

```highlight
Effect.raceFirst(task1, task2)
```

You can use:

```highlight
Effect.raceFirst(Effect.disconnect(task1), Effect.disconnect(task2))
```

This allows both effects to complete independently while still terminating the losing effect in the background.

**Example** (Both Tasks Succeed)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.succeed("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted").pipe(Effect.delay("100 millis")))
)
const task2 = Effect.succeed("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted").pipe(Effect.delay("100 millis")))
)

const program = Effect.raceFirst(task1, task2).pipe(Effect.tap(Console.log("more work...")))

Effect.runPromiseExit(program).then(console.log)
// Output:
// task1 done
// task2 interrupted
// more work...
// { _id: 'Exit', _tag: 'Success', value: 'task1' }
```

**Example** (One Task Fails, One Succeeds)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.fail("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted").pipe(Effect.delay("100 millis")))
)
const task2 = Effect.succeed("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted").pipe(Effect.delay("100 millis")))
)

const program = Effect.raceFirst(task1, task2).pipe(Effect.tap(Console.log("more work...")))

Effect.runPromiseExit(program).then(console.log)
// Output:
// task2 interrupted
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: { _id: 'Cause', _tag: 'Fail', failure: 'task1' }
// }
```

**Example** (Using Effect.disconnect for Quicker Return)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.succeed("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted").pipe(Effect.delay("100 millis")))
)
const task2 = Effect.succeed("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted").pipe(Effect.delay("100 millis")))
)

// Race the two tasks with disconnect to allow quicker return
const program = Effect.raceFirst(Effect.disconnect(task1), Effect.disconnect(task2)).pipe(
  Effect.tap(Console.log("more work..."))
)

Effect.runPromiseExit(program).then(console.log)
// Output:
// task1 done
// more work...
// { _id: 'Exit', _tag: 'Success', value: 'task1' }
// task2 interrupted
```

**Signature**

```highlight
declare const raceFirst: {
  <A2, E2, R2>(that: Effect<A2, E2, R2>): <A, E, R>(self: Effect<A, E, R>) => Effect<A2 | A, E2 | E, R2 | R>
  <A, E, R, A2, E2, R2>(self: Effect<A, E, R>, that: Effect<A2, E2, R2>): Effect<A | A2, E | E2, R | R2>
}
```

[Source][531]

Since v2.0.0

## [![][1]][532] raceWith

Races two effects and calls a finisher when the first one completes.

**Details**

This function runs two effects concurrently and calls a specified “finisher” function once one of the effects completes, regardless of whether it succeeds or fails.

The finisher functions for each effect allow you to handle the results of each effect as soon as they complete.

The function takes two finisher callbacks, one for each effect, and allows you to specify how to handle the result of the race.

**When to Use**

This function is useful when you need to react to the completion of either effect without waiting for both to finish. It can be used whenever you want to take action based on the first available result.

**Example** (Handling Results of Concurrent Tasks)

```highlight
import { Effect, Console } from "effect"

const task1 = Effect.succeed("task1").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Console.log("task1 done")),
  Effect.onInterrupt(() => Console.log("task1 interrupted").pipe(Effect.delay("100 millis")))
)
const task2 = Effect.succeed("task2").pipe(
  Effect.delay("200 millis"),
  Effect.tap(Console.log("task2 done")),
  Effect.onInterrupt(() => Console.log("task2 interrupted").pipe(Effect.delay("100 millis")))
)

const program = Effect.raceWith(task1, task2, {
  onSelfDone: (exit) => Console.log(`task1 exited with ${exit}`),
  onOtherDone: (exit) => Console.log(`task2 exited with ${exit}`)
})

Effect.runFork(program)
// Output:
// task1 done
// task1 exited with {
//   "_id": "Exit",
//   "_tag": "Success",
//   "value": "task1"
// }
// task2 interrupted
```

**Signature**

```highlight
declare const raceWith: {
  <A1, E1, R1, E, A, A2, E2, R2, A3, E3, R3>(
    other: Effect<A1, E1, R1>,
    options: {
      readonly onSelfDone: (exit: Exit.Exit<A, E>, fiber: Fiber.Fiber<A1, E1>) => Effect<A2, E2, R2>
      readonly onOtherDone: (exit: Exit.Exit<A1, E1>, fiber: Fiber.Fiber<A, E>) => Effect<A3, E3, R3>
    }
  ): <R>(self: Effect<A, E, R>) => Effect<A2 | A3, E2 | E3, R1 | R2 | R3 | R>
  <A, E, R, A1, E1, R1, A2, E2, R2, A3, E3, R3>(
    self: Effect<A, E, R>,
    other: Effect<A1, E1, R1>,
    options: {
      readonly onSelfDone: (exit: Exit.Exit<A, E>, fiber: Fiber.Fiber<A1, E1>) => Effect<A2, E2, R2>
      readonly onOtherDone: (exit: Exit.Exit<A1, E1>, fiber: Fiber.Fiber<A, E>) => Effect<A3, E3, R3>
    }
  ): Effect<A2 | A3, E2 | E3, R | R1 | R2 | R3>
}
```

[Source][533]

Since v2.0.0

# [![][1]][534] Random

## [![][1]][535] random

Retrieves the `Random` service from the context.

**Signature**

```highlight
declare const random: Effect<Random.Random, never, never>
```

[Source][536]

Since v2.0.0

## [![][1]][537] randomWith

Retrieves the `Random` service from the context and uses it to run the specified effect.

**Signature**

```highlight
declare const randomWith: <A, E, R>(f: (random: Random.Random) => Effect<A, E, R>) => Effect<A, E, R>
```

[Source][538]

Since v2.0.0

## [![][1]][539] withRandom

Executes the specified effect with the specified implementation of the `Random` service.

**Signature**

```highlight
declare const withRandom: {
  <X extends Random.Random>(value: X): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <X extends Random.Random, A, E, R>(effect: Effect<A, E, R>, value: X): Effect<A, E, R>
}
```

[Source][540]

Since v2.0.0

## [![][1]][541] withRandomScoped

Sets the implementation of the `Random` service to the specified value and restores it to its original value when the scope is closed.

**Signature**

```highlight
declare const withRandomScoped: <A extends Random.Random>(value: A) => Effect<void, never, Scope.Scope>
```

[Source][542]

Since v2.0.0

# [![][1]][543] Repetition / Recursion

## [![][1]][544] Repeat (namespace)

[Source][545]

Since v2.0.0

### [![][1]][546] Options (interface)

**Signature**

```highlight
export interface Options<A> {
  while?: ((_: A) => boolean | Effect<boolean, any, any>) | undefined
  until?: ((_: A) => boolean | Effect<boolean, any, any>) | undefined
  times?: number | undefined
  schedule?: Schedule.Schedule<any, A, any> | undefined
}
```

[Source][547]

Since v2.0.0

### [![][1]][548] Return (type alias)

**Signature**

```highlight
type Effect<O extends { schedule: Schedule.Schedule<infer Out, infer _I, infer _R>; } ? Out : O extends { until: Refinement<A, infer B>; } ? B : A, E | (O extends { while: (...args: Array<any>) => Effect<infer _A, infer E, infer _R>; } ? E : never) | (O extends { until: (...args: Array<any>) => Effect<infer _A, infer E, infer _R>; }[48;63;245;2016;3430t[48;63;245;2016;3430t[48;63;245;2016;3430t[48;63;245;2016;3430t ? E : never), R | (O extends { schedule: Schedule.Schedule<infer _O, infer _I, infer R>; } ? R : never) | (O extends { while: (...args: Array<any>) => Effect<infer _A, infer _E, infer R>; } ? R : never) | (O extends { until: (...args: Array<any>) => Effect<infer _A, infer _E, infer R>; } ? R : never)> = Effect<
    (O extends { schedule: Schedule.Schedule<infer Out, infer _I, infer _R> } ? Out
      : O extends { until: Refinement<A, infer B> } ? B
      : A),
    | E
    | (O extends { while: (...args: Array<any>) => Effect<infer _A, infer E, infer _R> } ? E : never)
    | (O extends { until: (...args: Array<any>) => Effect<infer _A, infer E, infer _R> } ? E : never),
    | R
    | (O extends { schedule: Schedule.Schedule<infer _O, infer _I, infer R> } ? R : never)
    | (O extends { while: (...args: Array<any>) => Effect<infer _A, infer _E, infer R> } ? R : never)
    | (O extends { until: (...args: Array<any>) => Effect<infer _A, infer _E, infer R> } ? R : never)
  > extends infer Z ? Z : never
```

[Source][549]

Since v2.0.0

## [![][1]][550] forever

Repeats an effect indefinitely until an error occurs.

**Details**

This function executes an effect repeatedly in an infinite loop. Each iteration is executed sequentially, and the loop continues until the first error occurs. If the effect succeeds, it starts over from the beginning. If the effect fails, the error is propagated, and the loop stops.

Be cautious when using this function, as it will run indefinitely unless an error interrupts it. This makes it suitable for long-running processes or continuous polling tasks, but you should ensure proper error handling or combine it with other operators like `timeout` or `schedule` to prevent unintentional infinite loops.

**Signature**

```highlight
declare const forever: <A, E, R>(self: Effect<A, E, R>) => Effect<never, E, R>
```

[Source][551]

Since v2.0.0

## [![][1]][552] repeat

Repeats an effect based on a specified schedule or until the first failure.

**Details**

This function executes an effect repeatedly according to the given schedule. Each repetition occurs after the initial execution of the effect, meaning that the schedule determines the number of additional repetitions. For example, using `Schedule.once` will result in the effect being executed twice (once initially and once as part of the repetition).

If the effect succeeds, it is repeated according to the schedule. If it fails, the repetition stops immediately, and the failure is returned.

The schedule can also specify delays between repetitions, making it useful for tasks like retrying operations with backoff, periodic execution, or performing a series of dependent actions.

You can combine schedules for more advanced repetition logic, such as adding delays, limiting recursions, or dynamically adjusting based on the outcome of each execution.

**Example** (Success Example)

```highlight
import { Effect, Schedule, Console } from "effect"

const action = Console.log("success")
const policy = Schedule.addDelay(Schedule.recurs(2), () => "100 millis")
const program = Effect.repeat(action, policy)

Effect.runPromise(program).then((n) => console.log(`repetitions: ${n}`))
```

**Example** (Failure Example)

```highlight
import { Effect, Schedule } from "effect"

let count = 0

// Define an async effect that simulates an action with possible failures
const action = Effect.async<string, string>((resume) => {
  if (count > 1) {
    console.log("failure")
    resume(Effect.fail("Uh oh!"))
  } else {
    count++
    console.log("success")
    resume(Effect.succeed("yay!"))
  }
})

const policy = Schedule.addDelay(Schedule.recurs(2), () => "100 millis")
const program = Effect.repeat(action, policy)

Effect.runPromiseExit(program).then(console.log)
```

**Signature**

```highlight
declare const repeat: {
  <O extends NoExcessProperties<Repeat.Options<A>, O>, A>(
    options: O
  ): <E, R>(self: Effect<A, E, R>) => Repeat.Return<R, E, A, O>
  <B, A, R1>(schedule: Schedule.Schedule<B, A, R1>): <E, R>(self: Effect<A, E, R>) => Effect<B, E, R1 | R>
  <A, E, R, O extends NoExcessProperties<Repeat.Options<A>, O>>(
    self: Effect<A, E, R>,
    options: O
  ): Repeat.Return<R, E, A, O>
  <A, E, R, B, R1>(self: Effect<A, E, R>, schedule: Schedule.Schedule<B, A, R1>): Effect<B, E, R | R1>
}
```

[Source][553]

Since v2.0.0

## [![][1]][554] repeatN

Repeats an effect a specified number of times or until the first failure.

**Details**

This function executes an effect initially and then repeats it the specified number of times, as long as it succeeds. For example, calling `repeatN(action, 2)` will execute `action` once initially and then repeat it two additional times if there are no failures.

If the effect fails during any repetition, the failure is returned, and no further repetitions are attempted.

**When to Use**

This function is useful for tasks that need to be retried a fixed number of times or for performing repeated actions without requiring a schedule.

**Example**

```highlight
import { Effect, Console } from "effect"

const action = Console.log("success")
const program = Effect.repeatN(action, 2)

Effect.runPromise(program)
```

**Signature**

```highlight
declare const repeatN: {
  (n: number): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, n: number): Effect<A, E, R>
}
```

[Source][555]

Since v2.0.0

## [![][1]][556] repeatOrElse

Repeats an effect with a schedule, handling failures using a custom handler.

**Details**

This function allows you to execute an effect repeatedly based on a specified schedule. If the effect fails at any point, a custom failure handler is invoked. The handler is provided with both the failure value and the output of the schedule at the time of failure. This enables advanced error recovery or alternative fallback logic while maintaining flexibility in how repetitions are handled.

For example, using a schedule with `recurs(2)` will allow for two additional repetitions after the initial execution, provided the effect succeeds. If a failure occurs during any iteration, the failure handler is invoked to handle the situation.

**Example**

```highlight
import { Effect, Schedule } from "effect"

let count = 0

// Define an async effect that simulates an action with possible failures
const action = Effect.async<string, string>((resume) => {
  if (count > 1) {
    console.log("failure")
    resume(Effect.fail("Uh oh!"))
  } else {
    count++
    console.log("success")
    resume(Effect.succeed("yay!"))
  }
})

const policy = Schedule.addDelay(
  Schedule.recurs(2), // Repeat for a maximum of 2 times
  () => "100 millis" // Add a delay of 100 milliseconds between repetitions
)

const program = Effect.repeatOrElse(action, policy, () =>
  Effect.sync(() => {
    console.log("orElse")
    return count - 1
  })
)

Effect.runPromise(program).then((n) => console.log(`repetitions: ${n}`))
```

**Signature**

```highlight
declare const repeatOrElse: {
  <R2, A, B, E, E2, R3>(
    schedule: Schedule.Schedule<B, A, R2>,
    orElse: (error: E, option: Option.Option<B>) => Effect<B, E2, R3>
  ): <R>(self: Effect<A, E, R>) => Effect<B, E2, R2 | R3 | R>
  <A, E, R, R2, B, E2, R3>(
    self: Effect<A, E, R>,
    schedule: Schedule.Schedule<B, A, R2>,
    orElse: (error: E, option: Option.Option<B>) => Effect<B, E2, R3>
  ): Effect<B, E2, R | R2 | R3>
}
```

[Source][557]

Since v2.0.0

## [![][1]][558] schedule

Repeats an effect based on a specified schedule.

**Details**

This function allows you to execute an effect repeatedly according to a given schedule. The schedule determines the timing and number of repetitions. Each repetition can also depend on the decision of the schedule, providing flexibility for complex workflows. This function does not modify the effect’s success or failure; it only controls its repetition.

For example, you can use a schedule that recurs a specific number of times, adds delays between repetitions, or customizes repetition behavior based on external inputs. The effect runs initially and is repeated according to the schedule.

**See**

- `scheduleFrom` for a variant that allows the schedule’s decision to depend on the result of this effect.

**Signature**

```highlight
declare const schedule: {
  <A, R2, Out>(
    schedule: Schedule.Schedule<Out, NoInfer<A> | undefined, R2>
  ): <E, R>(self: Effect<A, E, R>) => Effect<Out, E, R2 | R>
  <A, E, R, R2, Out>(self: Effect<A, E, R>, schedule: Schedule.Schedule<Out, A | undefined, R2>): Effect<Out, E, R | R2>
}
```

[Source][559]

Since v2.0.0

## [![][1]][560] scheduleForked

Runs an effect repeatedly on a new fiber according to a given schedule.

**Details**

This function starts the provided effect on a new fiber and runs it repeatedly based on the specified schedule. The repetitions are managed by the schedule’s rules, which define the timing and number of iterations. The fiber is attached to the current scope, meaning it is automatically managed and cleaned up when the scope is closed.

The function returns a `RuntimeFiber` that allows you to monitor or interact with the running fiber.

**When to Use**

This is particularly useful for concurrent execution of scheduled tasks or when you want to continue processing without waiting for the repetitions to complete.

**Signature**

```highlight
declare const scheduleForked: {
  <Out, R2>(
    schedule: Schedule.Schedule<Out, unknown, R2>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<Fiber.RuntimeFiber<Out, E>, never, Scope.Scope | R2 | R>
  <A, E, R, Out, R2>(
    self: Effect<A, E, R>,
    schedule: Schedule.Schedule<Out, unknown, R2>
  ): Effect<Fiber.RuntimeFiber<Out, E>, never, Scope.Scope | R | R2>
}
```

[Source][561]

Since v2.0.0

## [![][1]][562] scheduleFrom

Runs an effect repeatedly according to a schedule, starting from a specified input value.

**Details**

This function allows you to repeatedly execute an effect based on a schedule. The schedule starts with the given `initial` input value, which is passed to the first execution. Subsequent executions of the effect are controlled by the schedule’s rules, using the output of the previous iteration as the input for the next one.

The returned effect will complete when the schedule ends or the effect fails, propagating the error.

**Signature**

```highlight
declare const scheduleFrom: {
  <R2, In, Out>(
    initial: In,
    schedule: Schedule.Schedule<Out, In, R2>
  ): <E, R>(self: Effect<In, E, R>) => Effect<Out, E, R2 | R>
  <In, E, R, R2, Out>(
    self: Effect<In, E, R>,
    initial: In,
    schedule: Schedule.Schedule<Out, In, R2>
  ): Effect<Out, E, R | R2>
}
```

[Source][563]

Since v2.0.0

## [![][1]][564] whileLoop

**Signature**

```highlight
declare const whileLoop: <A, E, R>(options: {
  readonly while: LazyArg<boolean>
  readonly body: LazyArg<Effect<A, E, R>>
  readonly step: (a: A) => void
}) => Effect<void, E, R>
```

[Source][565]

Since v2.0.0

# [![][1]][566] Requests & Batching

## [![][1]][567] blocked

**Signature**

```highlight
declare const blocked: <A, E>(blockedRequests: RequestBlock, _continue: Effect<A, E>) => Blocked<A, E>
```

[Source][568]

Since v2.0.0

## [![][1]][569] cacheRequestResult

**Signature**

```highlight
declare const cacheRequestResult: <A extends Request.Request<any, any>>(
  request: A,
  result: Request.Request.Result<A>
) => Effect<void>
```

[Source][570]

Since v2.0.0

## [![][1]][571] request

**Signature**

```highlight
declare const request: {
  <A extends Request.Request<any, any>, Ds extends RequestResolver<A> | Effect<RequestResolver<A>, any, any>>(
    dataSource: Ds
  ): (
    self: A
  ) => Effect<
    Request.Request.Success<A>,
    Request.Request.Error<A>,
    [Ds] extends [Effect<any, any, any>] ? Effect.Context<Ds> : never
  >
  <Ds extends RequestResolver<A> | Effect<RequestResolver<A>, any, any>, A extends Request.Request<any, any>>(
    self: A,
    dataSource: Ds
  ): Effect<
    Request.Request.Success<A>,
    Request.Request.Error<A>,
    [Ds] extends [Effect<any, any, any>] ? Effect.Context<Ds> : never
  >
}
```

[Source][572]

Since v2.0.0

## [![][1]][573] runRequestBlock

**Signature**

```highlight
declare const runRequestBlock: (blockedRequests: RequestBlock) => Effect<void>
```

[Source][574]

Since v2.0.0

## [![][1]][575] step

**Signature**

```highlight
declare const step: <A, E, R>(self: Effect<A, E, R>) => Effect<Exit.Exit<A, E> | Blocked<A, E>, never, R>
```

[Source][576]

Since v2.0.0

## [![][1]][577] withRequestBatching

**Signature**

```highlight
declare const withRequestBatching: {
  (requestBatching: boolean): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, requestBatching: boolean): Effect<A, E, R>
}
```

[Source][578]

Since v2.0.0

## [![][1]][579] withRequestCache

**Signature**

```highlight
declare const withRequestCache: {
  (cache: Request.Cache): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, cache: Request.Cache): Effect<A, E, R>
}
```

[Source][580]

Since v2.0.0

## [![][1]][581] withRequestCaching

**Signature**

```highlight
declare const withRequestCaching: {
  (strategy: boolean): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, strategy: boolean): Effect<A, E, R>
}
```

[Source][582]

Since v2.0.0

# [![][1]][583] Running Effects

## [![][1]][584] runCallback

Executes an effect asynchronously and handles the result using a callback.

**Details**

This function runs an effect asynchronously and passes the result (`Exit`) to a specified callback. The callback is invoked with the outcome of the effect:

- On success, the callback receives the successful result.
- On failure, the callback receives the failure information.

**When to Use**

This function is effectful and should only be invoked at the edges of your program.

**Signature**

```highlight
declare const runCallback: <A, E>(
  effect: Effect<A, E>,
  options?: Runtime.RunCallbackOptions<A, E> | undefined
) => Runtime.Cancel<A, E>
```

[Source][585]

Since v2.0.0

## [![][1]][586] runFork

Runs an effect in the background, returning a fiber that can be observed or interrupted.

Unless you specifically need a `Promise` or synchronous operation, `runFork` is a good default choice.

**Details**

This function is the foundational way to execute an effect in the background. It creates a “fiber,” a lightweight, cooperative thread of execution that can be observed (to access its result), interrupted, or joined. Fibers are useful for concurrent programming and allow effects to run independently of the main program flow.

Once the effect is running in a fiber, you can monitor its progress, cancel it if necessary, or retrieve its result when it completes. If the effect fails, the fiber will propagate the failure, which you can observe and handle.

**When to Use**

Use this function when you need to run an effect in the background, especially if the effect is long-running or performs periodic tasks. It’s suitable for tasks that need to run independently but might still need observation or management, like logging, monitoring, or scheduled tasks.

This function is ideal if you don’t need the result immediately or if the effect is part of a larger concurrent workflow.

**Example** (Running an Effect in the Background)

```highlight
import { Effect, Console, Schedule, Fiber } from "effect"

//      ┌─── Effect<number, never, never>
//      ▼
const program = Effect.repeat(Console.log("running..."), Schedule.spaced("200 millis"))

//      ┌─── RuntimeFiber<number, never>
//      ▼
const fiber = Effect.runFork(program)

setTimeout(() => {
  Effect.runFork(Fiber.interrupt(fiber))
}, 500)
```

**Signature**

```highlight
declare const runFork: <A, E>(effect: Effect<A, E>, options?: Runtime.RunForkOptions) => Fiber.RuntimeFiber<A, E>
```

[Source][587]

Since v2.0.0

## [![][1]][588] runPromise

Executes an effect and returns the result as a `Promise`.

**Details**

This function runs an effect and converts its result into a `Promise`. If the effect succeeds, the `Promise` will resolve with the successful result. If the effect fails, the `Promise` will reject with an error, which includes the failure details of the effect.

The optional `options` parameter allows you to pass an `AbortSignal` for cancellation, enabling more fine-grained control over asynchronous tasks.

**When to Use**

Use this function when you need to execute an effect and work with its result in a promise-based system, such as when integrating with third-party libraries that expect `Promise` results.

**Example** (Running a Successful Effect as a Promise)

```highlight
import { Effect } from "effect"

Effect.runPromise(Effect.succeed(1)).then(console.log)
// Output: 1
```

**Example** (Handling a Failing Effect as a Rejected Promise)

```highlight
import { Effect } from "effect"

Effect.runPromise(Effect.fail("my error")).catch(console.error)
// Output:
// (FiberFailure) Error: my error
```

**See**

- `runPromiseExit` for a version that returns an `Exit` type instead of rejecting.

**Signature**

```highlight
declare const runPromise: <A, E>(
  effect: Effect<A, E, never>,
  options?: { readonly signal?: AbortSignal } | undefined
) => Promise<A>
```

[Source][589]

Since v2.0.0

## [![][1]][590] runPromiseExit

Runs an effect and returns a `Promise` that resolves to an `Exit`, representing the outcome.

**Details**

This function executes an effect and resolves to an `Exit` object. The `Exit` type provides detailed information about the result of the effect:

- If the effect succeeds, the `Exit` will be of type `Success` and include the value produced by the effect.
- If the effect fails, the `Exit` will be of type `Failure` and contain a `Cause` object, detailing the failure.

Using this function allows you to examine both successful results and failure cases in a unified way, while still leveraging `Promise` for handling the asynchronous behavior of the effect.

**When to Use**

Use this function when you need to understand the outcome of an effect, whether it succeeded or failed, and want to work with this result using `Promise` syntax. This is particularly useful when integrating with systems that rely on promises but need more detailed error handling than a simple rejection.

**Example** (Handling Results as Exit)

```highlight
import { Effect } from "effect"

// Execute a successful effect and get the Exit result as a Promise
Effect.runPromiseExit(Effect.succeed(1)).then(console.log)
// Output:
// {
//   _id: "Exit",
//   _tag: "Success",
//   value: 1
// }

// Execute a failing effect and get the Exit result as a Promise
Effect.runPromiseExit(Effect.fail("my error")).then(console.log)
// Output:
// {
//   _id: "Exit",
//   _tag: "Failure",
//   cause: {
//     _id: "Cause",
//     _tag: "Fail",
//     failure: "my error"
//   }
// }
```

**Signature**

```highlight
declare const runPromiseExit: <A, E>(
  effect: Effect<A, E, never>,
  options?: { readonly signal?: AbortSignal } | undefined
) => Promise<Exit.Exit<A, E>>
```

[Source][591]

Since v2.0.0

## [![][1]][592] runSync

Executes an effect synchronously, running it immediately and returning the result.

**Details**

This function evaluates the provided effect synchronously, returning its result directly. It is ideal for effects that do not fail or include asynchronous operations. If the effect does fail or involves async tasks, it will throw an error. Execution stops at the point of failure or asynchronous operation, making it unsuitable for effects that require asynchronous handling.

**Important**: Attempting to run effects that involve asynchronous operations or failures will result in exceptions being thrown, so use this function with care for purely synchronous and error-free effects.

**When to Use**

Use this function when:

- You are sure that the effect will not fail or involve asynchronous operations.
- You need a direct, synchronous result from the effect.
- You are working within a context where asynchronous effects are not allowed.

Avoid using this function for effects that can fail or require asynchronous handling. For such cases, consider using `runPromise` or `runSyncExit`.

**Example** (Synchronous Logging)

```highlight
import { Effect } from "effect"

const program = Effect.sync(() => {
  console.log("Hello, World!")
  return 1
})

const result = Effect.runSync(program)
// Output: Hello, World!

console.log(result)
// Output: 1
```

**Example** (Incorrect Usage with Failing or Async Effects)

```highlight
import { Effect } from "effect"

try {
  // Attempt to run an effect that fails
  Effect.runSync(Effect.fail("my error"))
} catch (e) {
  console.error(e)
}
// Output:
// (FiberFailure) Error: my error

try {
  // Attempt to run an effect that involves async work
  Effect.runSync(Effect.promise(() => Promise.resolve(1)))
} catch (e) {
  console.error(e)
}
// Output:
// (FiberFailure) AsyncFiberException: Fiber #0 cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work
```

**See**

- `runSyncExit` for a version that returns an `Exit` type instead of throwing an error.

**Signature**

```highlight
declare const runSync: <A, E>(effect: Effect<A, E>) => A
```

[Source][593]

Since v2.0.0

## [![][1]][594] runSyncExit

Runs an effect synchronously and returns the result as an `Exit` type.

**Details**

This function executes the provided effect synchronously and returns an `Exit` type that encapsulates the outcome of the effect:

- If the effect succeeds, the result is wrapped in a `Success`.
- If the effect fails, it returns a `Failure` containing a `Cause` that explains the failure.

If the effect involves asynchronous operations, this function will return a `Failure` with a `Die` cause, indicating that it cannot resolve the effect synchronously. This makes the function suitable for use only with effects that are synchronous in nature.

**When to Use**

Use this function when:

- You want to handle both success and failure outcomes in a structured way using the `Exit` type.
- You are working with effects that are purely synchronous and do not involve asynchronous operations.
- You need to debug or inspect failures, including their causes, in a detailed manner.

Avoid using this function for effects that involve asynchronous operations, as it will fail with a `Die` cause.

**Example** (Handling Results as Exit)

```highlight
import { Effect } from "effect"

console.log(Effect.runSyncExit(Effect.succeed(1)))
// Output:
// {
//   _id: "Exit",
//   _tag: "Success",
//   value: 1
// }

console.log(Effect.runSyncExit(Effect.fail("my error")))
// Output:
// {
//   _id: "Exit",
//   _tag: "Failure",
//   cause: {
//     _id: "Cause",
//     _tag: "Fail",
//     failure: "my error"
//   }
// }
```

**Example** (Asynchronous Operation Resulting in Die)

```highlight
import { Effect } from "effect"

console.log(Effect.runSyncExit(Effect.promise(() => Promise.resolve(1))))
// Output:
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Die',
//     defect: [Fiber #0 cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work] {
//       fiber: [FiberRuntime],
//       _tag: 'AsyncFiberException',
//       name: 'AsyncFiberException'
//     }
//   }
// }
```

**Signature**

```highlight
declare const runSyncExit: <A, E>(effect: Effect<A, E>) => Exit.Exit<A, E>
```

[Source][595]

Since v2.0.0

# [![][1]][596] Runtime

## [![][1]][597] getRuntimeFlags

Retrieves an effect that succeeds with the current runtime flags, which govern behavior and features of the runtime system.

**Signature**

```highlight
declare const getRuntimeFlags: Effect<RuntimeFlags.RuntimeFlags, never, never>
```

[Source][598]

Since v2.0.0

## [![][1]][599] patchRuntimeFlags

**Signature**

```highlight
declare const patchRuntimeFlags: (patch: RuntimeFlagsPatch.RuntimeFlagsPatch) => Effect<void>
```

[Source][600]

Since v2.0.0

## [![][1]][601] runtime

Returns an effect that accesses the runtime, which can be used to (unsafely) execute tasks.

**When to Use**

This is useful for integration with legacy code that must call back into Effect code.

**Signature**

```highlight
declare const runtime: <R = never>() => Effect<Runtime.Runtime<R>, never, R>
```

[Source][602]

Since v2.0.0

## [![][1]][603] withRuntimeFlagsPatch

**Signature**

```highlight
declare const withRuntimeFlagsPatch: {
  (update: RuntimeFlagsPatch.RuntimeFlagsPatch): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, update: RuntimeFlagsPatch.RuntimeFlagsPatch): Effect<A, E, R>
}
```

[Source][604]

Since v2.0.0

## [![][1]][605] withRuntimeFlagsPatchScoped

**Signature**

```highlight
declare const withRuntimeFlagsPatchScoped: (
  update: RuntimeFlagsPatch.RuntimeFlagsPatch
) => Effect<void, never, Scope.Scope>
```

[Source][606]

Since v2.0.0

# [![][1]][607] Scheduler

## [![][1]][608] withMaxOpsBeforeYield

Sets the maximum number of operations before yield by the default schedulers

**Signature**

```highlight
declare const withMaxOpsBeforeYield: {
  (priority: number): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, priority: number): Effect<A, E, R>
}
```

[Source][609]

Since v2.0.0

## [![][1]][610] withScheduler

Sets the provided scheduler for usage in the wrapped effect

**Signature**

```highlight
declare const withScheduler: {
  (scheduler: Scheduler.Scheduler): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, scheduler: Scheduler.Scheduler): Effect<A, E, R>
}
```

[Source][611]

Since v2.0.0

## [![][1]][612] withSchedulingPriority

Sets the scheduling priority used when yielding

**Signature**

```highlight
declare const withSchedulingPriority: {
  (priority: number): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, priority: number): Effect<A, E, R>
}
```

[Source][613]

Since v2.0.0

# [![][1]][614] Scoping, Resources & Finalization

## [![][1]][615] acquireRelease

Creates a scoped resource using an `acquire` and `release` effect.

**Details**

This function helps manage resources by combining two `Effect` values: one for acquiring the resource and one for releasing it.

`acquireRelease` does the following:

1.  Ensures that the effect that acquires the resource will not be interrupted. Note that acquisition may still fail due to internal reasons (such as an uncaught exception).
2.  Ensures that the `release` effect will not be interrupted, and will be executed as long as the acquisition effect successfully acquires the resource.

If the `acquire` function succeeds, the `release` function is added to the list of finalizers for the scope. This ensures that the release will happen automatically when the scope is closed.

Both `acquire` and `release` run uninterruptibly, meaning they cannot be interrupted while they are executing.

Additionally, the `release` function can be influenced by the exit value when the scope closes, allowing for custom handling of how the resource is released based on the execution outcome.

**When to Use**

This function is used to ensure that an effect that represents the acquisition of a resource (for example, opening a file, launching a thread, etc.) will not be interrupted, and that the resource will always be released when the `Effect` completes execution.

**Example** (Defining a Simple Resource)

```highlight
import { Effect } from "effect"

// Define an interface for a resource
interface MyResource {
  readonly contents: string
  readonly close: () => Promise<void>
}

// Simulate resource acquisition
const getMyResource = (): Promise<MyResource> =>
  Promise.resolve({
    contents: "lorem ipsum",
    close: () =>
      new Promise((resolve) => {
        console.log("Resource released")
        resolve()
      })
  })

// Define how the resource is acquired
const acquire = Effect.tryPromise({
  try: () =>
    getMyResource().then((res) => {
      console.log("Resource acquired")
      return res
    }),
  catch: () => new Error("getMyResourceError")
})

// Define how the resource is released
const release = (res: MyResource) => Effect.promise(() => res.close())

// Create the resource management workflow
//
//      ┌─── Effect<MyResource, Error, Scope>
//      ▼
const resource = Effect.acquireRelease(acquire, release)
```

**See**

- `acquireUseRelease` for a version that automatically handles the scoping of resources.

**Signature**

```highlight
declare const acquireRelease: {
  <A, X, R2>(
    release: (a: A, exit: Exit.Exit<unknown, unknown>) => Effect<X, never, R2>
  ): <E, R>(acquire: Effect<A, E, R>) => Effect<A, E, Scope.Scope | R2 | R>
  <A, E, R, X, R2>(
    acquire: Effect<A, E, R>,
    release: (a: A, exit: Exit.Exit<unknown, unknown>) => Effect<X, never, R2>
  ): Effect<A, E, Scope.Scope | R | R2>
}
```

[Source][616]

Since v2.0.0

## [![][1]][617] acquireReleaseInterruptible

Creates a scoped resource with an interruptible acquire action.

**Details**

This function is similar to `acquireRelease`, but it allows the acquisition of the resource to be interrupted. The `acquire` effect, which represents the process of obtaining the resource, can be interrupted if necessary.

**Signature**

```highlight
declare const acquireReleaseInterruptible: {
  <X, R2>(
    release: (exit: Exit.Exit<unknown, unknown>) => Effect<X, never, R2>
  ): <A, E, R>(acquire: Effect<A, E, R>) => Effect<A, E, Scope.Scope | R2 | R>
  <A, E, R, X, R2>(
    acquire: Effect<A, E, R>,
    release: (exit: Exit.Exit<unknown, unknown>) => Effect<X, never, R2>
  ): Effect<A, E, Scope.Scope | R | R2>
}
```

[Source][618]

Since v2.0.0

## [![][1]][619] acquireUseRelease

Many real-world operations involve working with resources that must be released when no longer needed, such as:

- Database connections
- File handles
- Network requests

This function ensures that a resource is:

1.  **Acquired** properly.
2.  **Used** for its intended purpose.
3.  **Released** even if an error occurs.

**Example** (Automatically Managing Resource Lifetime)

```highlight
import { Effect, Console } from "effect"

// Define an interface for a resource
interface MyResource {
  readonly contents: string
  readonly close: () => Promise<void>
}

// Simulate resource acquisition
const getMyResource = (): Promise<MyResource> =>
  Promise.resolve({
    contents: "lorem ipsum",
    close: () =>
      new Promise((resolve) => {
        console.log("Resource released")
        resolve()
      })
  })

// Define how the resource is acquired
const acquire = Effect.tryPromise({
  try: () =>
    getMyResource().then((res) => {
      console.log("Resource acquired")
      return res
    }),
  catch: () => new Error("getMyResourceError")
})

// Define how the resource is released
const release = (res: MyResource) => Effect.promise(() => res.close())

const use = (res: MyResource) => Console.log(`content is ${res.contents}`)

//      ┌─── Effect<void, Error, never>
//      ▼
const program = Effect.acquireUseRelease(acquire, use, release)

Effect.runPromise(program)
// Output:
// Resource acquired
// content is lorem ipsum
// Resource released
```

**Signature**

```highlight
declare const acquireUseRelease: {
  <A2, E2, R2, A, X, R3>(
    use: (a: A) => Effect<A2, E2, R2>,
    release: (a: A, exit: Exit.Exit<A2, E2>) => Effect<X, never, R3>
  ): <E, R>(acquire: Effect<A, E, R>) => Effect<A2, E2 | E, R2 | R3 | R>
  <A, E, R, A2, E2, R2, X, R3>(
    acquire: Effect<A, E, R>,
    use: (a: A) => Effect<A2, E2, R2>,
    release: (a: A, exit: Exit.Exit<A2, E2>) => Effect<X, never, R3>
  ): Effect<A2, E | E2, R | R2 | R3>
}
```

[Source][620]

Since v2.0.0

## [![][1]][621] addFinalizer

Ensures a finalizer is added to the scope of the calling effect, guaranteeing it runs when the scope is closed.

**Details**

This function adds a finalizer that will execute whenever the scope of the effect is closed, regardless of whether the effect succeeds, fails, or is interrupted. The finalizer receives the `Exit` value of the effect’s scope, allowing it to react differently depending on how the effect concludes.

Finalizers are a reliable way to manage resource cleanup, ensuring that resources such as file handles, network connections, or database transactions are properly closed even in the event of an unexpected interruption or error.

Finalizers operate in conjunction with Effect’s scoped resources. If an effect with a finalizer is wrapped in a scope, the finalizer will execute automatically when the scope ends.

**Example** (Adding a Finalizer on Success)

```highlight
import { Effect, Console } from "effect"

//      ┌─── Effect<string, never, Scope>
//      ▼
const program = Effect.gen(function* () {
  yield* Effect.addFinalizer((exit) => Console.log(`Finalizer executed. Exit status: ${exit._tag}`))
  return "some result"
})

// Wrapping the effect in a scope
//
//      ┌─── Effect<string, never, never>
//      ▼
const runnable = Effect.scoped(program)

Effect.runPromiseExit(runnable).then(console.log)
// Output:
// Finalizer executed. Exit status: Success
// { _id: 'Exit', _tag: 'Success', value: 'some result' }
```

**Example** (Adding a Finalizer on Failure)

```highlight
import { Effect, Console } from "effect"

//      ┌─── Effect<never, string, Scope>
//      ▼
const program = Effect.gen(function* () {
  yield* Effect.addFinalizer((exit) => Console.log(`Finalizer executed. Exit status: ${exit._tag}`))
  return yield* Effect.fail("Uh oh!")
})

// Wrapping the effect in a scope
//
//      ┌─── Effect<never, string, never>
//      ▼
const runnable = Effect.scoped(program)

Effect.runPromiseExit(runnable).then(console.log)
// Output:
// Finalizer executed. Exit status: Failure
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: { _id: 'Cause', _tag: 'Fail', failure: 'Uh oh!' }
// }
```

**Example** (Adding a Finalizer on Interruption)

```highlight
import { Effect, Console } from "effect"

//      ┌─── Effect<never, never, Scope>
//      ▼
const program = Effect.gen(function* () {
  yield* Effect.addFinalizer((exit) => Console.log(`Finalizer executed. Exit status: ${exit._tag}`))
  return yield* Effect.interrupt
})

// Wrapping the effect in a scope
//
//      ┌─── Effect<never, never, never>
//      ▼
const runnable = Effect.scoped(program)

Effect.runPromiseExit(runnable).then(console.log)
// Output:
// Finalizer executed. Exit status: Failure
// {
//   _id: 'Exit',
//   _tag: 'Failure',
//   cause: {
//     _id: 'Cause',
//     _tag: 'Interrupt',
//     fiberId: {
//       _id: 'FiberId',
//       _tag: 'Runtime',
//       id: 0,
//       startTimeMillis: ...
//     }
//   }
// }
```

**See**

- `onExit` for attaching a finalizer directly to an effect.

**Signature**

```highlight
declare const addFinalizer: <X, R>(
  finalizer: (exit: Exit.Exit<unknown, unknown>) => Effect<X, never, R>
) => Effect<void, never, Scope.Scope | R>
```

[Source][622]

Since v2.0.0

## [![][1]][623] ensuring

Guarantees the execution of a finalizer when an effect starts execution.

**Details**

This function allows you to specify a `finalizer` effect that will always be run once the effect starts execution, regardless of whether the effect succeeds, fails, or is interrupted.

**When to Use**

This is useful when you need to ensure that certain cleanup or final steps are executed in all cases, such as releasing resources or performing necessary logging.

While this function provides strong guarantees about executing the finalizer, it is considered a low-level tool, which may not be ideal for more complex resource management. For higher-level resource management with automatic acquisition and release, see the `acquireRelease` family of functions. For use cases where you need access to the result of an effect, consider using `onExit`.

**Example** (Running a Finalizer in All Outcomes)

```highlight
import { Console, Effect } from "effect"

// Define a cleanup effect
const handler = Effect.ensuring(Console.log("Cleanup completed"))

// Define a successful effect
const success = Console.log("Task completed").pipe(Effect.as("some result"), handler)

Effect.runFork(success)
// Output:
// Task completed
// Cleanup completed

// Define a failing effect
const failure = Console.log("Task failed").pipe(Effect.andThen(Effect.fail("some error")), handler)

Effect.runFork(failure)
// Output:
// Task failed
// Cleanup completed

// Define an interrupted effect
const interruption = Console.log("Task interrupted").pipe(Effect.andThen(Effect.interrupt), handler)

Effect.runFork(interruption)
// Output:
// Task interrupted
// Cleanup completed
```

**See**

- `onExit` for a version that provides access to the result of an effect.

**Signature**

```highlight
declare const ensuring: {
  <X, R1>(finalizer: Effect<X, never, R1>): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R1 | R>
  <A, E, R, X, R1>(self: Effect<A, E, R>, finalizer: Effect<X, never, R1>): Effect<A, E, R1 | R>
}
```

[Source][624]

Since v2.0.0

## [![][1]][625] finalizersMask

Applies a custom execution strategy to finalizers within a scoped workflow.

**Details**

This function allows you to control how finalizers are executed in a scope by applying a specified `ExecutionStrategy`. The `strategy` can dictate whether finalizers run (e.g., sequentially or in parallel).

Additionally, the function provides a `restore` operation, which ensures that the effect passed to it is executed under the default execution strategy.

**Signature**

```highlight
declare const finalizersMask: (
  strategy: ExecutionStrategy
) => <A, E, R>(
  self: (restore: <A1, E1, R1>(self: Effect<A1, E1, R1>) => Effect<A1, E1, R1>) => Effect<A, E, R>
) => Effect<A, E, R>
```

[Source][626]

Since v2.0.0

## [![][1]][627] onError

Ensures a cleanup effect runs whenever the calling effect fails, providing the failure cause to the cleanup effect.

**Details**

This function allows you to attach a cleanup effect that runs whenever the calling effect fails. The cleanup effect receives the cause of the failure, allowing you to perform actions such as logging, releasing resources, or executing additional recovery logic based on the error. The cleanup effect will execute even if the failure is due to interruption.

Importantly, the cleanup effect itself is uninterruptible, ensuring that it completes regardless of external interruptions.

**Example** (Running Cleanup Only on Failure)

```highlight
import { Console, Effect } from "effect"

// This handler logs the failure cause when the effect fails
const handler = Effect.onError((cause) => Console.log(`Cleanup completed: ${cause}`))

// Define a successful effect
const success = Console.log("Task completed").pipe(Effect.as("some result"), handler)

Effect.runFork(success)
// Output:
// Task completed

// Define a failing effect
const failure = Console.log("Task failed").pipe(Effect.andThen(Effect.fail("some error")), handler)

Effect.runFork(failure)
// Output:
// Task failed
// Cleanup completed: Error: some error

// Define a failing effect
const defect = Console.log("Task failed with defect").pipe(Effect.andThen(Effect.die("Boom!")), handler)

Effect.runFork(defect)
// Output:
// Task failed with defect
// Cleanup completed: Error: Boom!

// Define an interrupted effect
const interruption = Console.log("Task interrupted").pipe(Effect.andThen(Effect.interrupt), handler)

Effect.runFork(interruption)
// Output:
// Task interrupted
// Cleanup completed: All fibers interrupted without errors.
```

**See**

- `ensuring` for attaching a cleanup effect that runs on both success and failure.
- `onExit` for attaching a cleanup effect that runs on all possible exits.

**Signature**

```highlight
declare const onError: {
  <E, X, R2>(
    cleanup: (cause: Cause.Cause<E>) => Effect<X, never, R2>
  ): <A, R>(self: Effect<A, E, R>) => Effect<A, E, R2 | R>
  <A, E, R, X, R2>(
    self: Effect<A, E, R>,
    cleanup: (cause: Cause.Cause<E>) => Effect<X, never, R2>
  ): Effect<A, E, R2 | R>
}
```

[Source][628]

Since v2.0.0

## [![][1]][629] onExit

Guarantees that a cleanup function runs regardless of whether the effect succeeds, fails, or is interrupted.

**Details**

This function ensures that a provided cleanup function is executed after the effect completes, regardless of the outcome. The cleanup function is given the `Exit` value of the effect, which provides detailed information about the result:

- If the effect succeeds, the `Exit` contains the success value.
- If the effect fails, the `Exit` contains the error or failure cause.
- If the effect is interrupted, the `Exit` reflects the interruption.

The cleanup function is guaranteed to run uninterruptibly, ensuring reliable resource management even in complex or high-concurrency scenarios.

**Example** (Running a Cleanup Function with the Effect’s Result)

```highlight
import { Console, Effect, Exit } from "effect"

// Define a cleanup effect that logs the result
const handler = Effect.onExit((exit) => Console.log(`Cleanup completed: ${Exit.getOrElse(exit, String)}`))

// Define a successful effect
const success = Console.log("Task completed").pipe(Effect.as("some result"), handler)

Effect.runFork(success)
// Output:
// Task completed
// Cleanup completed: some result

// Define a failing effect
const failure = Console.log("Task failed").pipe(Effect.andThen(Effect.fail("some error")), handler)

Effect.runFork(failure)
// Output:
// Task failed
// Cleanup completed: Error: some error

// Define an interrupted effect
const interruption = Console.log("Task interrupted").pipe(Effect.andThen(Effect.interrupt), handler)

Effect.runFork(interruption)
// Output:
// Task interrupted
// Cleanup completed: All fibers interrupted without errors.
```

**Signature**

```highlight
declare const onExit: {
  <A, E, X, R2>(
    cleanup: (exit: Exit.Exit<A, E>) => Effect<X, never, R2>
  ): <R>(self: Effect<A, E, R>) => Effect<A, E, R2 | R>
  <A, E, R, X, R2>(
    self: Effect<A, E, R>,
    cleanup: (exit: Exit.Exit<A, E>) => Effect<X, never, R2>
  ): Effect<A, E, R | R2>
}
```

[Source][630]

Since v2.0.0

## [![][1]][631] parallelFinalizers

Ensures that finalizers are run concurrently when the scope of an effect is closed.

**Details**

This function modifies the behavior of finalizers within a scoped workflow to allow them to run concurrently when the scope is closed.

By default, finalizers are executed sequentially in reverse order of their addition, but this function changes that behavior to execute all finalizers concurrently.

**When to Use**

Running finalizers concurrently can improve performance when multiple independent cleanup tasks need to be performed. However, it requires that these tasks do not depend on the order of execution or introduce race conditions.

**Example**

```highlight
import { Console, Effect } from "effect"

// Define a program that adds multiple finalizers
const program = Effect.gen(function* () {
  yield* Effect.addFinalizer(() => Console.log("Finalizer 1 executed").pipe(Effect.delay("300 millis")))
  yield* Effect.addFinalizer(() => Console.log("Finalizer 2 executed").pipe(Effect.delay("100 millis")))
  yield* Effect.addFinalizer(() => Console.log("Finalizer 3 executed").pipe(Effect.delay("200 millis")))
  return "some result"
})

// Modify the program to ensure finalizers run in parallel
const modified = program.pipe(Effect.parallelFinalizers)

const runnable = Effect.scoped(modified)

Effect.runFork(runnable)
// Output:
// Finalizer 2 executed
// Finalizer 3 executed
// Finalizer 1 executed
```

**See**

- `sequentialFinalizers` for a version that ensures finalizers are run sequentially.

**Signature**

```highlight
declare const parallelFinalizers: <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
```

[Source][632]

Since v2.0.0

## [![][1]][633] scope

Provides access to the current scope in a scoped workflow.

**Signature**

```highlight
declare const scope: Effect<Scope.Scope, never, Scope.Scope>
```

[Source][634]

Since v2.0.0

## [![][1]][635] scopeWith

Accesses the current scope and uses it to perform the specified effect.

**Signature**

```highlight
declare const scopeWith: <A, E, R>(f: (scope: Scope.Scope) => Effect<A, E, R>) => Effect<A, E, R | Scope.Scope>
```

[Source][636]

Since v2.0.0

## [![][1]][637] scoped

Scopes all resources used in an effect to the lifetime of the effect.

**Details**

This function ensures that all resources used within an effect are tied to its lifetime. Finalizers for these resources are executed automatically when the effect completes, whether through success, failure, or interruption. This guarantees proper resource cleanup without requiring explicit management.

**Signature**

```highlight
declare const scoped: <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, Exclude<R, Scope.Scope>>
```

[Source][638]

Since v2.0.0

## [![][1]][639] scopedWith

Creates a `Scope`, passes it to the specified effectful function, and closes the scope when the effect completes (whether through success, failure, or interruption).

**Signature**

```highlight
declare const scopedWith: <A, E, R>(f: (scope: Scope.Scope) => Effect<A, E, R>) => Effect<A, E, R>
```

[Source][640]

Since v3.11.0

## [![][1]][641] sequentialFinalizers

Ensures that finalizers are run sequentially in reverse order of their addition.

**Details**

This function modifies the behavior of finalizers within a scoped workflow to ensure they are run sequentially in reverse order when the scope is closed.

By default, finalizers are executed sequentially, so this only changes the behavior if the scope is configured to run finalizers concurrently.

**See**

- `parallelFinalizers` for a version that ensures finalizers are run concurrently.

**Signature**

```highlight
declare const sequentialFinalizers: <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
```

[Source][642]

Since v2.0.0

## [![][1]][643] using

Scopes all resources acquired by one effect to the lifetime of another effect.

**Details**

This function allows you to scope the resources acquired by one effect (`self`) to the lifetime of another effect (`use`). This ensures that the resources are cleaned up as soon as the `use` effect completes, regardless of how the `use` effect ends (success, failure, or interruption).

**Example**

```highlight
import { Console, Effect } from "effect"

const acquire = Console.log("Acquiring resource").pipe(
  Effect.as(1),
  Effect.tap(Effect.addFinalizer(() => Console.log("Releasing resource")))
)
const use = (resource: number) => Console.log(`Using resource: ${resource}`)

const program = acquire.pipe(Effect.using(use))

Effect.runFork(program)
// Output:
// Acquiring resource
// Using resource: 1
// Releasing resource
```

**See**

- `scopedWith` Manage scoped operations with a temporary scope.

**Signature**

```highlight
declare const using: {
  <A, A2, E2, R2>(
    use: (a: A) => Effect<A2, E2, R2>
  ): <E, R>(self: Effect<A, E, R>) => Effect<A2, E2 | E, R2 | Exclude<R, Scope.Scope>>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    use: (a: A) => Effect<A2, E2, R2>
  ): Effect<A2, E | E2, R2 | Exclude<R, Scope.Scope>>
}
```

[Source][644]

Since v2.0.0

## [![][1]][645] withEarlyRelease

Returns the result of the effect and a finalizer to close its scope.

**Details**

This function allows you to retrieve both the result of an effect and a finalizer that can be used to manually close its scope. This is useful for workflows where you need early access to the result while retaining control over the resource cleanup process.

**Example**

```highlight
import { Console, Effect } from "effect"

const acquire = Console.log("Acquiring resource").pipe(
  Effect.as(1),
  Effect.tap(Effect.addFinalizer(() => Console.log("Releasing resource")))
)
const program = Effect.gen(function* () {
  const [finalizer, resource] = yield* Effect.withEarlyRelease(acquire)
  console.log(`Using resource: ${resource}`)
  yield* Effect.sleep("1 second")
  yield* finalizer
})

Effect.runFork(program.pipe(Effect.scoped))
// Output:
// Acquiring resource
// Using resource: 1
// Releasing resource
```

**Signature**

```highlight
declare const withEarlyRelease: <A, E, R>(
  self: Effect<A, E, R>
) => Effect<[finalizer: Effect<void>, result: A], E, R | Scope.Scope>
```

[Source][646]

Since v2.0.0

# [![][1]][647] Semaphore

## [![][1]][648] Permit (interface)

**Signature**

```highlight
export interface Permit {
  readonly index: number
}
```

[Source][649]

Since v2.0.0

## [![][1]][650] Semaphore (interface)

A semaphore is a synchronization mechanism used to manage access to a shared resource. In Effect, semaphores help control resource access or coordinate tasks within asynchronous, concurrent operations.

A semaphore acts as a generalized mutex, allowing a set number of permits to be held and released concurrently. Permits act like tickets, giving tasks or fibers controlled access to a shared resource. When no permits are available, tasks trying to acquire one will wait until a permit is released.

**Signature**

```highlight
export interface Semaphore {
  /**
   * Runs an effect with the given number of permits and releases the permits
   * when the effect completes.
   *
   * **Details**
   *
   * This function acquires the specified number of permits before executing
   * the provided effect. Once the effect finishes, the permits are released.
   * If insufficient permits are available, the function will wait until they
   * are released by other tasks.
   */
  withPermits(permits: number): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>

  /**
   * Runs an effect only if the specified number of permits are immediately
   * available.
   *
   * **Details**
   *
   * This function attempts to acquire the specified number of permits. If they
   * are available, it runs the effect and releases the permits after the effect
   * completes. If permits are not available, the effect does not execute, and
   * the result is `Option.none`.
   */
  withPermitsIfAvailable(permits: number): <A, E, R>(self: Effect<A, E, R>) => Effect<Option.Option<A>, E, R>

  /**
   * Acquires the specified number of permits and returns the resulting
   * available permits, suspending the task if they are not yet available.
   * Concurrent pending `take` calls are processed in a first-in, first-out manner.
   */
  take(permits: number): Effect<number>

  /**
   * Releases the specified number of permits and returns the resulting
   * available permits.
   */
  release(permits: number): Effect<number>

  /**
   * Releases all permits held by this semaphore and returns the resulting available permits.
   */
  releaseAll: Effect<number>
}
```

[Source][651]

Since v2.0.0

## [![][1]][652] makeSemaphore

Creates a new semaphore with the specified number of permits.

**Details**

This function initializes a semaphore that controls concurrent access to a shared resource. The number of permits determines how many tasks can access the resource concurrently.

**Example**

```highlight
import { Effect } from "effect"

// Create a semaphore with 3 permits
const mutex = Effect.makeSemaphore(3)
```

**Signature**

```highlight
declare const makeSemaphore: (permits: number) => Effect<Semaphore>
```

[Source][653]

Since v2.0.0

## [![][1]][654] unsafeMakeSemaphore

Unsafely creates a new Semaphore.

**Signature**

```highlight
declare const unsafeMakeSemaphore: (permits: number) => Semaphore
```

[Source][655]

Since v2.0.0

# [![][1]][656] Sequencing

## [![][1]][657] andThen

Chains two actions, where the second action can depend on the result of the first.

**Syntax**

```highlight
const transformedEffect = pipe(myEffect, Effect.andThen(anotherEffect))
// or
const transformedEffect = Effect.andThen(myEffect, anotherEffect)
// or
const transformedEffect = myEffect.pipe(Effect.andThen(anotherEffect))
```

**When to Use**

Use `andThen` when you need to run multiple actions in sequence, with the second action depending on the result of the first. This is useful for combining effects or handling computations that must happen in order.

**Details**

The second action can be:

- A constant value (similar to `as`)
- A function returning a value (similar to `map`)
- A `Promise`
- A function returning a `Promise`
- An `Effect`
- A function returning an `Effect` (similar to `flatMap`)

**Note:** `andThen` works well with both `Option` and `Either` types, treating them as effects.

**Example** (Applying a Discount Based on Fetched Amount)

```highlight
import { pipe, Effect } from "effect"

// Function to apply a discount safely to a transaction amount
const applyDiscount = (total: number, discountRate: number): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be zero"))
    : Effect.succeed(total - (total * discountRate) / 100)

// Simulated asynchronous task to fetch a transaction amount from database
const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

// Using Effect.map and Effect.flatMap
const result1 = pipe(
  fetchTransactionAmount,
  Effect.map((amount) => amount * 2),
  Effect.flatMap((amount) => applyDiscount(amount, 5))
)

Effect.runPromise(result1).then(console.log)
// Output: 190

// Using Effect.andThen
const result2 = pipe(
  fetchTransactionAmount,
  Effect.andThen((amount) => amount * 2),
  Effect.andThen((amount) => applyDiscount(amount, 5))
)

Effect.runPromise(result2).then(console.log)
// Output: 190
```

**Signature**

```highlight
declare const andThen: {
  <A, X>(
    f: (a: NoInfer<A>) => X
  ): <E, R>(
    self: Effect<A, E, R>
  ) => [X] extends [Effect<infer A1, infer E1, infer R1>]
    ? Effect<A1, E | E1, R | R1>
    : [X] extends [PromiseLike<infer A1>]
      ? Effect<A1, E | Cause.UnknownException, R>
      : Effect<X, E, R>
  <X>(
    f: NotFunction<X>
  ): <A, E, R>(
    self: Effect<A, E, R>
  ) => [X] extends [Effect<infer A1, infer E1, infer R1>]
    ? Effect<A1, E | E1, R | R1>
    : [X] extends [PromiseLike<infer A1>]
      ? Effect<A1, E | Cause.UnknownException, R>
      : Effect<X, E, R>
  <A, E, R, X>(
    self: Effect<A, E, R>,
    f: (a: NoInfer<A>) => X
  ): [X] extends [Effect<infer A1, infer E1, infer R1>]
    ? Effect<A1, E | E1, R | R1>
    : [X] extends [PromiseLike<infer A1>]
      ? Effect<A1, E | Cause.UnknownException, R>
      : Effect<X, E, R>
  <A, E, R, X>(
    self: Effect<A, E, R>,
    f: NotFunction<X>
  ): [X] extends [Effect<infer A1, infer E1, infer R1>]
    ? Effect<A1, E | E1, R | R1>
    : [X] extends [PromiseLike<infer A1>]
      ? Effect<A1, E | Cause.UnknownException, R>
      : Effect<X, E, R>
}
```

[Source][658]

Since v2.0.0

## [![][1]][659] flatMap

Chains effects to produce new `Effect` instances, useful for combining operations that depend on previous results.

**Syntax**

```highlight
const flatMappedEffect = pipe(myEffect, Effect.flatMap(transformation))
// or
const flatMappedEffect = Effect.flatMap(myEffect, transformation)
// or
const flatMappedEffect = myEffect.pipe(Effect.flatMap(transformation))
```

**Details**

`flatMap` lets you sequence effects so that the result of one effect can be used in the next step. It is similar to `flatMap` used with arrays but works specifically with `Effect` instances, allowing you to avoid deeply nested effect structures.

Since effects are immutable, `flatMap` always returns a new effect instead of changing the original one.

**When to Use**

Use `flatMap` when you need to chain multiple effects, ensuring that each step produces a new `Effect` while flattening any nested effects that may occur.

**Example**

```highlight
import { pipe, Effect } from "effect"

// Function to apply a discount safely to a transaction amount
const applyDiscount = (total: number, discountRate: number): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be zero"))
    : Effect.succeed(total - (total * discountRate) / 100)

// Simulated asynchronous task to fetch a transaction amount from database
const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

// Chaining the fetch and discount application using `flatMap`
const finalAmount = pipe(
  fetchTransactionAmount,
  Effect.flatMap((amount) => applyDiscount(amount, 5))
)

Effect.runPromise(finalAmount).then(console.log)
// Output: 95
```

**See**

- `tap` for a version that ignores the result of the effect.

**Signature**

```highlight
declare const flatMap: {
  <A, B, E1, R1>(f: (a: A) => Effect<B, E1, R1>): <E, R>(self: Effect<A, E, R>) => Effect<B, E1 | E, R1 | R>
  <A, E, R, B, E1, R1>(self: Effect<A, E, R>, f: (a: A) => Effect<B, E1, R1>): Effect<B, E | E1, R | R1>
}
```

[Source][660]

Since v2.0.0

## [![][1]][661] flatten

**Signature**

```highlight
declare const flatten: <A, E1, R1, E, R>(self: Effect<Effect<A, E1, R1>, E, R>) => Effect<A, E | E1, R | R1>
```

[Source][662]

Since v2.0.0

## [![][1]][663] summarized

Summarizes a effect by computing some value before and after execution, and then combining the values to produce a summary, together with the result of execution.

**Signature**

```highlight
declare const summarized: {
  <B, E2, R2, C>(
    summary: Effect<B, E2, R2>,
    f: (start: B, end: B) => C
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<[C, A], E2 | E, R2 | R>
  <A, E, R, B, E2, R2, C>(
    self: Effect<A, E, R>,
    summary: Effect<B, E2, R2>,
    f: (start: B, end: B) => C
  ): Effect<[C, A], E2 | E, R2 | R>
}
```

[Source][664]

Since v2.0.0

## [![][1]][665] tap

Runs a side effect with the result of an effect without changing the original value.

**Details**

This function works similarly to `flatMap`, but it ignores the result of the function passed to it. The value from the previous effect remains available for the next part of the chain. Note that if the side effect fails, the entire chain will fail too.

**When to Use**

Use this function when you want to perform a side effect, like logging or tracking, without modifying the main value. This is useful when you need to observe or record an action but want the original value to be passed to the next step.

**Example** (Logging a step in a pipeline)

```highlight
import { Console, Effect, pipe } from "effect"

// Function to apply a discount safely to a transaction amount
const applyDiscount = (total: number, discountRate: number): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be zero"))
    : Effect.succeed(total - (total * discountRate) / 100)

// Simulated asynchronous task to fetch a transaction amount from database
const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

const finalAmount = pipe(
  fetchTransactionAmount,
  // Log the fetched transaction amount
  Effect.tap((amount) => Console.log(`Apply a discount to: ${amount}`)),
  // `amount` is still available!
  Effect.flatMap((amount) => applyDiscount(amount, 5))
)

Effect.runPromise(finalAmount).then(console.log)
// Output:
// Apply a discount to: 100
// 95
```

**See**

- `flatMap` for a version that allows you to change the value.

**Signature**

```highlight
declare const tap: {
  <A, X>(
    f: (a: NoInfer<A>) => X
  ): <E, R>(
    self: Effect<A, E, R>
  ) => [X] extends [Effect<infer _A1, infer E1, infer R1>]
    ? Effect<A, E | E1, R | R1>
    : [X] extends [PromiseLike<infer _A1>]
      ? Effect<A, E | Cause.UnknownException, R>
      : Effect<A, E, R>
  <A, X, E1, R1>(
    f: (a: NoInfer<A>) => Effect<X, E1, R1>,
    options: { onlyEffect: true }
  ): <E, R>(self: Effect<A, E, R>) => Effect<A, E | E1, R | R1>
  <X>(
    f: NotFunction<X>
  ): <A, E, R>(
    self: Effect<A, E, R[48;63;245;2016;3430t>
  ) => [X] extends [Effect<infer _A1, infer E1, infer R1>]
    ? Effect<A, E | E1, R | R1>
    : [X] extends [PromiseLike<infer _A1>]
      ? Effect<A, E | Cause.UnknownException, R>
      : Effect<A, E, R>
  <X, E1, R1>(
    f: Effect<X, E1, R1>,
    options: { onlyEffect: true }
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E | E1, R | R1>
  <A, E, R, X>(
    self: Effect<A, E, R>,
    f: (a: NoInfer<A>) => X
  ): [X] extends [Effect<infer _A1, infer E1, infer R1>]
    ? Effect<A, E | E1, R | R1>
    : [X] extends [PromiseLike<infer _A1>]
      ? Effect<A, E | Cause.UnknownException, R>
      : Effect<A, E, R>
  <A, E, R, X, E1, R1>(
    self: Effect<A, E, R>,
    f: (a: NoInfer<A>) => Effect<X, E1, R1>,
    options: { onlyEffect: true }
  ): Effect<A, E | E1, R | R1>
  <A, E, R, X>(
    self: Effect<A, E, R>,
    f: NotFunction<X>
  ): [X] extends [Effect<infer _A1, infer E1, infer R1>]
    ? Effect<A, E | E1, R | R1>
    : [X] extends [PromiseLike<infer _A1>]
      ? Effect<A, E | Cause.UnknownException, R>
      : Effect<A, E, R>
  <A, E, R, X, E1, R1>(
    self: Effect<A, E, R>,
    f: Effect<X, E1, R1>,
    options: { onlyEffect: true }
  ): Effect<A, E | E1, R | R1>
}
```

[Source][666]

Since v2.0.0

## [![][1]][667] tapBoth

Allows you to inspect both success and failure outcomes of an effect and perform side effects for each.

**Details**

This function enables you to handle both success and failure cases separately, without modifying the main effect’s result. It is particularly useful for scenarios where you need to log, monitor, or perform additional actions depending on whether the effect succeeded or failed.

When the effect succeeds, the `onSuccess` handler is executed with the success value. When the effect fails, the `onFailure` handler is executed with the failure value. Both handlers can include side effects such as logging or analytics, and neither modifies the original effect’s output.

If either the success or failure handler fails, the overall effect will also fail.

**Example**

```highlight
import { Effect, Random, Console } from "effect"

// Simulate a task that might fail
const task = Effect.filterOrFail(
  Random.nextRange(-1, 1),
  (n) => n >= 0,
  () => "random number is negative"
)

// Use tapBoth to log both success and failure outcomes
const tapping = Effect.tapBoth(task, {
  onFailure: (error) => Console.log(`failure: ${error}`),
  onSuccess: (randomNumber) => Console.log(`random number: ${randomNumber}`)
})

Effect.runFork(tapping)
// Example Output:
// failure: random number is negative
```

**Signature**

```highlight
declare const tapBoth: {
  <E, X, E2, R2, A, X1, E3, R3>(options: {
    readonly onFailure: (e: NoInfer<E>) => Effect<X, E2, R2>
    readonly onSuccess: (a: NoInfer<A>) => Effect<X1, E3, R3>
  }): <R>(self: Effect<A, E, R>) => Effect<A, E | E2 | E3, R2 | R3 | R>
  <A, E, R, X, E2, R2, X1, E3, R3>(
    self: Effect<A, E, R>,
    options: { readonly onFailure: (e: E) => Effect<X, E2, R2>; readonly onSuccess: (a: A) => Effect<X1, E3, R3> }
  ): Effect<A, E | E2 | E3, R | R2 | R3>
}
```

[Source][668]

Since v2.0.0

## [![][1]][669] tapDefect

Inspect severe errors or defects (non-recoverable failures) in an effect.

**Details**

This function is specifically designed to handle and inspect defects, which are critical failures in your program, such as unexpected runtime exceptions or system-level errors. Unlike normal recoverable errors, defects typically indicate serious issues that cannot be addressed through standard error handling.

When a defect occurs in an effect, the function you provide to this function will be executed, allowing you to log, monitor, or handle the defect in some way. Importantly, this does not alter the main result of the effect. If no defect occurs, the effect behaves as if this function was not used.

**Example**

```highlight
import { Effect, Console } from "effect"

// Simulate a task that fails with a recoverable error
const task1: Effect.Effect<number, string> = Effect.fail("NetworkError")

// tapDefect won't log anything because NetworkError is not a defect
const tapping1 = Effect.tapDefect(task1, (cause) => Console.log(`defect: ${cause}`))

Effect.runFork(tapping1)
// No Output

// Simulate a severe failure in the system
const task2: Effect.Effect<number, string> = Effect.dieMessage("Something went wrong")

// Log the defect using tapDefect
const tapping2 = Effect.tapDefect(task2, (cause) => Console.log(`defect: ${cause}`))

Effect.runFork(tapping2)
// Output:
// defect: RuntimeException: Something went wrong
//   ... stack trace ...
```

**Signature**

```highlight
declare const tapDefect: {
  <X, E2, R2>(
    f: (cause: Cause.Cause<never>) => Effect<X, E2, R2>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E2 | E, R2 | R>
  <A, E, R, X, E2, R2>(
    self: Effect<A, E, R>,
    f: (cause: Cause.Cause<never>) => Effect<X, E2, R2>
  ): Effect<A, E | E2, R | R2>
}
```

[Source][670]

Since v2.0.0

## [![][1]][671] tapError

Execute a side effect on failure without modifying the original effect.

**Details**

This function allows you to inspect and react to the failure of an effect by executing an additional effect. The failure value is passed to the provided function, enabling you to log it, track it, or perform any other operation. Importantly, the original failure remains intact and is re-propagated, so the effect’s behavior is unchanged.

The side effect you provide is only executed when the effect fails. If the effect succeeds, the function is ignored, and the success value is propagated as usual.

**Example**

```highlight
import { Effect, Console } from "effect"

// Simulate a task that fails with an error
const task: Effect.Effect<number, string> = Effect.fail("NetworkError")

// Use tapError to log the error message when the task fails
const tapping = Effect.tapError(task, (error) => Console.log(`expected error: ${error}`))

Effect.runFork(tapping)
// Output:
// expected error: NetworkError
```

**Signature**

```highlight
declare const tapError: {
  <E, X, E2, R2>(f: (e: NoInfer<E>) => Effect<X, E2, R2>): <A, R>(self: Effect<A, E, R>) => Effect<A, E | E2, R2 | R>
  <A, E, R, X, E2, R2>(self: Effect<A, E, R>, f: (e: E) => Effect<X, E2, R2>): Effect<A, E | E2, R | R2>
}
```

[Source][672]

Since v2.0.0

## [![][1]][673] tapErrorCause

Inspect the complete cause of an error, including failures and defects.

**Details**

This function provides access to the full cause of an error, including both recoverable failures and irrecoverable defects. It allows you to handle, log, or monitor specific error causes without modifying the result of the effect. The full `Cause` object encapsulates the error and its contextual information, making it useful for debugging and understanding failure scenarios in complex workflows.

The effect itself is not modified, and any errors or defects remain in the error channel of the original effect.

**Example**

```highlight
import { Effect, Console } from "effect"

// Create a task that fails with a NetworkError
const task1: Effect.Effect<number, string> = Effect.fail("NetworkError")

const tapping1 = Effect.tapErrorCause(task1, (cause) => Console.log(`error cause: ${cause}`))

Effect.runFork(tapping1)
// Output:
// error cause: Error: NetworkError

// Simulate a severe failure in the system
const task2: Effect.Effect<number, string> = Effect.dieMessage("Something went wrong")

const tapping2 = Effect.tapErrorCause(task2, (cause) => Console.log(`error cause: ${cause}`))

Effect.runFork(tapping2)
// Output:
// error cause: RuntimeException: Something went wrong
//   ... stack trace ...
```

**Signature**

```highlight
declare const tapErrorCause: {
  <E, X, E2, R2>(
    f: (cause: Cause.Cause<NoInfer<E>>) => Effect<X, E2, R2>
  ): <A, R>(self: Effect<A, E, R>) => Effect<A, E | E2, R2 | R>
  <A, E, R, X, E2, R2>(
    self: Effect<A, E, R>,
    f: (cause: Cause.Cause<E>) => Effect<X, E2, R2>
  ): Effect<A, E | E2, R | R2>
}
```

[Source][674]

Since v2.0.0

## [![][1]][675] tapErrorTag

Inspect errors matching a specific tag without altering the original effect.

**Details**

This function allows you to inspect and handle specific error types based on their `_tag` property. It is particularly useful in applications where errors are modeled with tagged types (e.g., union types with discriminating tags). By targeting errors with a specific `_tag`, you can log or perform actions on them while leaving the error channel and overall effect unchanged.

If the error doesn’t match the specified tag, this function does nothing, and the effect proceeds as usual.

**Example**

```highlight
import { Effect, Console } from "effect"

class NetworkError {
  readonly _tag = "NetworkError"
  constructor(readonly statusCode: number) {}
}

class ValidationError {
  readonly _tag = "ValidationError"
  constructor(readonly field: string) {}
}

// Create a task that fails with a NetworkError
const task: Effect.Effect<number, NetworkError | ValidationError> = Effect.fail(new NetworkError(504))

// Use tapErrorTag to inspect only NetworkError types and log the status code
const tapping = Effect.tapErrorTag(task, "NetworkError", (error) => Console.log(`expected error: ${error.statusCode}`))

Effect.runFork(tapping)
// Output:
// expected error: 504
```

**Signature**

```highlight
declare const tapErrorTag: {
  <K extends E extends { _tag: string } ? E["_tag"] : never, E, A1, E1, R1>(
    k: K,
    f: (e: NoInfer<Extract<E, { _tag: K }>>) => Effect<A1, E1, R1>
  ): <A, R>(self: Effect<A, E, R>) => Effect<A, E | E1, R1 | R>
  <A, E, R, K extends E extends { _tag: string } ? E["_tag"] : never, A1, E1, R1>(
    self: Effect<A, E, R>,
    k: K,
    f: (e: Extract<E, { _tag: K }>) => Effect<A1, E1, R1>
  ): Effect<A, E | E1, R | R1>
}
```

[Source][676]

Since v2.0.0

# [![][1]][677] Supervision & Fibers

## [![][1]][678] awaitAllChildren

Returns a new effect that will not succeed with its value before first waiting for the end of all child fibers forked by the effect.

**Signature**

```highlight
declare const awaitAllChildren: <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
```

[Source][679]

Since v2.0.0

## [![][1]][680] daemonChildren

Returns a new workflow that will not supervise any fibers forked by this workflow.

**Signature**

```highlight
declare const daemonChildren: <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
```

[Source][681]

Since v2.0.0

## [![][1]][682] descriptor

Constructs an effect with information about the current `Fiber`.

**Signature**

```highlight
declare const descriptor: Effect<Fiber.Fiber.Descriptor, never, never>
```

[Source][683]

Since v2.0.0

## [![][1]][684] descriptorWith

Constructs an effect based on information about the current `Fiber`.

**Signature**

```highlight
declare const descriptorWith: <A, E, R>(f: (descriptor: Fiber.Fiber.Descriptor) => Effect<A, E, R>) => Effect<A, E, R>
```

[Source][685]

Since v2.0.0

## [![][1]][686] diffFiberRefs

Returns a new workflow that executes this one and captures the changes in `FiberRef` values.

**Signature**

```highlight
declare const diffFiberRefs: <A, E, R>(self: Effect<A, E, R>) => Effect<[FiberRefsPatch.FiberRefsPatch, A], E, R>
```

[Source][687]

Since v2.0.0

## [![][1]][688] ensuringChild

Acts on the children of this fiber (collected into a single fiber), guaranteeing the specified callback will be invoked, whether or not this effect succeeds.

**Signature**

```highlight
declare const ensuringChild: {
  <X, R2>(
    f: (fiber: Fiber.Fiber<ReadonlyArray<unknown>, any>) => Effect<X, never, R2>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R2 | R>
  <A, E, R, X, R2>(
    self: Effect<A, E, R>,
    f: (fiber: Fiber.Fiber<ReadonlyArray<unknown>, any>) => Effect<X, never, R2>
  ): Effect<A, E, R | R2>
}
```

[Source][689]

Since v2.0.0

## [![][1]][690] ensuringChildren

Acts on the children of this fiber, guaranteeing the specified callback will be invoked, whether or not this effect succeeds.

**Signature**

```highlight
declare const ensuringChildren: {
  <X, R2>(
    children: (fibers: ReadonlyArray<Fiber.RuntimeFiber<any, any>>) => Effect<X, never, R2>
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R2 | R>
  <A, E, R, X, R2>(
    self: Effect<A, E, R>,
    children: (fibers: ReadonlyArray<Fiber.RuntimeFiber<any, any>>) => Effect<X, never, R2>
  ): Effect<A, E, R | R2>
}
```

[Source][691]

Since v2.0.0

## [![][1]][692] fiberId

**Signature**

```highlight
declare const fiberId: Effect<FiberId.FiberId, never, never>
```

[Source][693]

Since v2.0.0

## [![][1]][694] fiberIdWith

**Signature**

```highlight
declare const fiberIdWith: <A, E, R>(f: (descriptor: FiberId.Runtime) => Effect<A, E, R>) => Effect<A, E, R>
```

[Source][695]

Since v2.0.0

## [![][1]][696] fork

Creates a new fiber to run an effect concurrently.

**Details**

This function takes an effect and forks it into a separate fiber, allowing it to run concurrently without blocking the original effect. The new fiber starts execution immediately after being created, and the fiber object is returned immediately without waiting for the effect to begin. This is useful when you want to run tasks concurrently while continuing other tasks in the parent fiber.

The forked fiber is attached to the parent fiber’s scope. This means that when the parent fiber terminates, the child fiber will also be terminated automatically. This feature, known as “auto supervision,” ensures that no fibers are left running unintentionally. If you prefer not to have this auto supervision behavior, you can use `forkDaemon` or `forkIn`.

**When to Use**

Use this function when you need to run an effect concurrently without blocking the current execution flow. For example, you might use it to launch background tasks or concurrent computations. However, working with fibers can be complex, so before using this function directly, you might want to explore higher-level functions like `raceWith`, `zip`, or others that can manage concurrency for you.

**Example**

```highlight
import { Effect } from "effect"

const fib = (n: number): Effect.Effect<number> =>
  n < 2 ? Effect.succeed(n) : Effect.zipWith(fib(n - 1), fib(n - 2), (a, b) => a + b)

//      ┌─── Effect<RuntimeFiber<number, never>, never, never>
//      ▼
const fib10Fiber = Effect.fork(fib(10))
```

**See**

- `forkWithErrorHandler` for a version that allows you to handle errors.

**Signature**

```highlight
declare const fork: <A, E, R>(self: Effect<A, E, R>) => Effect<Fiber.RuntimeFiber<A, E>, never, R>
```

[Source][697]

Since v2.0.0

## [![][1]][698] forkAll

Returns an effect that forks all of the specified values, and returns a composite fiber that produces a list of their results, in order.

**Signature**

```highlight
declare const forkAll: {
  (
    options?: { readonly discard?: false | undefined } | undefined
  ): <Eff extends Effect<any, any, any>>(
    effects: Iterable<Eff>
  ) => Effect<Fiber.Fiber<Array<Effect.Success<Eff>>, Effect.Error<Eff>>, never, Effect.Context<Eff>>
  (options: {
    readonly discard: true
  }): <Eff extends Effect<any, any, any>>(effects: Iterable<Eff>) => Effect<void, never, Effect.Context<Eff>>
  <Eff extends Effect<any, any, any>>(
    effects: Iterable<Eff>,
    options?: { readonly discard?: false | undefined } | undefined
  ): Effect<Fiber.Fiber<Array<Effect.Success<Eff>>, Effect.Error<Eff>>, never, Effect.Context<Eff>>
  <Eff extends Effect<any, any, any>>(
    effects: Iterable<Eff>,
    options: { readonly discard: true }
  ): Effect<void, never, Effect.Context<Eff>>
}
```

[Source][699]

Since v2.0.0

## [![][1]][700] forkDaemon

Creates a long-running background fiber that is independent of its parent.

**Details**

This function creates a “daemon” fiber that runs in the background and is not tied to the lifecycle of its parent fiber. Unlike normal fibers that stop when the parent fiber terminates, a daemon fiber will continue running until the global scope closes or the fiber completes naturally. This makes it useful for tasks that need to run in the background independently, such as periodic logging, monitoring, or background data processing.

**Example** (Creating a Daemon Fiber)

```highlight
import { Effect, Console, Schedule } from "effect"

// Daemon fiber that logs a message repeatedly every second
const daemon = Effect.repeat(Console.log("daemon: still running!"), Schedule.fixed("1 second"))

const parent = Effect.gen(function* () {
  console.log("parent: started!")
  // Daemon fiber running independently
  yield* Effect.forkDaemon(daemon)
  yield* Effect.sleep("3 seconds")
  console.log("parent: finished!")
})

Effect.runFork(parent)
// Output:
// parent: started!
// daemon: still running!
// daemon: still running!
// daemon: still running!
// parent: finished!
// daemon: still running!
// daemon: still running!
// daemon: still running!
// daemon: still running!
// daemon: still running!
// ...etc...
```

**Signature**

```highlight
declare const forkDaemon: <A, E, R>(self: Effect<A, E, R>) => Effect<Fiber.RuntimeFiber<A, E>, never, R>
```

[Source][701]

Since v2.0.0

## [![][1]][702] forkIn

Forks an effect in a specific scope, allowing finer control over its execution.

**Details**

There are some cases where we need more fine-grained control, so we want to fork a fiber in a specific scope. We can use the `Effect.forkIn` operator which takes the target scope as an argument.

The fiber will be interrupted when the scope is closed.

**Example** (Forking a Fiber in a Specific Scope)

In this example, the child fiber is forked into the outerScope, allowing it to outlive the inner scope but still be terminated when the outerScope is closed.

```highlight
import { Console, Effect, Schedule } from "effect"

// Child fiber that logs a message repeatedly every second
const child = Effect.repeat(Console.log("child: still running!"), Schedule.fixed("1 second"))

const program = Effect.scoped(
  Effect.gen(function* () {
    yield* Effect.addFinalizer(() => Console.log("The outer scope is about to be closed!"))

    // Capture the outer scope
    const outerScope = yield* Effect.scope

    // Create an inner scope
    yield* Effect.scoped(
      Effect.gen(function* () {
        yield* Effect.addFinalizer(() => Console.log("The inner scope is about to be closed!"))
        // Fork the child fiber in the outer scope
        yield* Effect.forkIn(child, outerScope)
        yield* Effect.sleep("3 seconds")
      })
    )

    yield* Effect.sleep("5 seconds")
  })
)

Effect.runFork(program)
// Output:
// child: still running!
// child: still running!
// child: still running!
// The inner scope is about to be closed!
// child: still running!
// child: still running!
// child: still running!
// child: still running!
// child: still running!
// child: still running!
// The outer scope is about to be closed!
```

**Signature**

```highlight
declare const forkIn: {
  (scope: Scope.Scope): <A, E, R>(self: Effect<A, E, R>) => Effect<Fiber.RuntimeFiber<A, E>, never, R>
  <A, E, R>(self: Effect<A, E, R>, scope: Scope.Scope): Effect<Fiber.RuntimeFiber<A, E>, never, R>
}
```

[Source][703]

Since v2.0.0

## [![][1]][704] forkScoped

Forks a fiber in a local scope, ensuring it outlives its parent.

**Details**

This function is used to create fibers that are tied to a local scope, meaning they are not dependent on their parent fiber’s lifecycle. Instead, they will continue running until the scope they were created in is closed. This is particularly useful when you need a fiber to run independently of the parent fiber, but still want it to be terminated when the scope ends.

Fibers created with this function are isolated from the parent fiber’s termination, so they can run for a longer period. This behavior is different from fibers created with `fork`, which are terminated when the parent fiber terminates. With `forkScoped`, the child fiber will keep running until the local scope ends, regardless of the state of the parent fiber.

**Example** (Forking a Fiber in a Local Scope)

In this example, the child fiber continues to run beyond the lifetime of the parent fiber. The child fiber is tied to the local scope and will be terminated only when the scope ends.

```highlight
import { Effect, Console, Schedule } from "effect"

// Child fiber that logs a message repeatedly every second
const child = Effect.repeat(Console.log("child: still running!"), Schedule.fixed("1 second"))

//      ┌─── Effect<void, never, Scope>
//      ▼
const parent = Effect.gen(function* () {
  console.log("parent: started!")
  // Child fiber attached to local scope
  yield* Effect.forkScoped(child)
  yield* Effect.sleep("3 seconds")
  console.log("parent: finished!")
})

// Program runs within a local scope
const program = Effect.scoped(
  Effect.gen(function* () {
    console.log("Local scope started!")
    yield* Effect.fork(parent)
    // Scope lasts for 5 seconds
    yield* Effect.sleep("5 seconds")
    console.log("Leaving the local scope!")
  })
)

Effect.runFork(program)
// Output:
// Local scope started!
// parent: started!
// child: still running!
// child: still running!
// child: still running!
// parent: finished!
// child: still running!
// child: still running!
// Leaving the local scope!
```

**Signature**

```highlight
declare const forkScoped: <A, E, R>(self: Effect<A, E, R>) => Effect<Fiber.RuntimeFiber<A, E>, never, Scope.Scope | R>
```

[Source][705]

Since v2.0.0

## [![][1]][706] forkWithErrorHandler

Like `fork` but handles an error with the provided handler.

**Signature**

```highlight
declare const forkWithErrorHandler: {
  <E, X>(handler: (e: E) => Effect<X>): <A, R>(self: Effect<A, E, R>) => Effect<Fiber.RuntimeFiber<A, E>, never, R>
  <A, E, R, X>(self: Effect<A, E, R>, handler: (e: E) => Effect<X>): Effect<Fiber.RuntimeFiber<A, E>, never, R>
}
```

[Source][707]

Since v2.0.0

## [![][1]][708] fromFiber

Creates an `Effect` value that represents the exit value of the specified fiber.

**See**

- `fromFiberEffect` for creating an effect from a fiber obtained from an effect.

**Signature**

```highlight
declare const fromFiber: <A, E>(fiber: Fiber.Fiber<A, E>) => Effect<A, E>
```

[Source][709]

Since v2.0.0

## [![][1]][710] fromFiberEffect

Creates an `Effect` value that represents the exit value of a fiber obtained from an effect.

**See**

- `fromFiber` for creating an effect from a fiber.

**Signature**

```highlight
declare const fromFiberEffect: <A, E, R>(fiber: Effect<Fiber.Fiber<A, E>, E, R>) => Effect<A, E, R>
```

[Source][711]

Since v2.0.0

## [![][1]][712] supervised

Supervises child fibers by reporting them to a specified supervisor.

**Details**

This function takes a supervisor as an argument and returns an effect where all child fibers forked within it are supervised by the provided supervisor. This enables you to capture detailed information about these child fibers, such as their status, through the supervisor.

**Example** (Monitoring Fiber Count)

```highlight
import { Effect, Supervisor, Schedule, Fiber, FiberStatus } from "effect"

// Main program that monitors fibers while calculating a Fibonacci number
const program = Effect.gen(function* () {
  // Create a supervisor to track child fibers
  const supervisor = yield* Supervisor.track

  // Start a Fibonacci calculation, supervised by the supervisor
  const fibFiber = yield* fib(20).pipe(
    Effect.supervised(supervisor),
    // Fork the Fibonacci effect into a fiber
    Effect.fork
  )

  // Define a schedule to periodically monitor the fiber count every 500ms
  const policy = Schedule.spaced("500 millis").pipe(
    Schedule.whileInputEffect((_) =>
      Fiber.status(fibFiber).pipe(
        // Continue while the Fibonacci fiber is not done
        Effect.andThen((status) => status !== FiberStatus.done)
      )
    )
  )

  // Start monitoring the fibers, using the supervisor to track the count
  const monitorFiber = yield* monitorFibers(supervisor).pipe(
    // Repeat the monitoring according to the schedule
    Effect.repeat(policy),
    // Fork the monitoring into its own fiber
    Effect.fork
  )

  // Join the monitor and Fibonacci fibers to ensure they complete
  yield* Fiber.join(monitorFiber)
  const result = yield* Fiber.join(fibFiber)

  console.log(`fibonacci result: ${result}`)
})

// Function to monitor and log the number of active fibers
const monitorFibers = (supervisor: Supervisor.Supervisor<Array<Fiber.RuntimeFiber<any, any>>>): Effect.Effect<void> =>
  Effect.gen(function* () {
    const fibers = yield* supervisor.value // Get the current set of fibers
    console.log(`number of fibers: ${fibers.length}`)
  })

// Recursive Fibonacci calculation, spawning fibers for each recursive step
const fib = (n: number): Effect.Effect<number> =>
  Effect.gen(function* () {
    if (n <= 1) {
      return 1
    }
    yield* Effect.sleep("500 millis") // Simulate work by delaying

    // Fork two fibers for the recursive Fibonacci calls
    const fiber1 = yield* Effect.fork(fib(n - 2))
    const fiber2 = yield* Effect.fork(fib(n - 1))

    // Join the fibers to retrieve their results
    const v1 = yield* Fiber.join(fiber1)
    const v2 = yield* Fiber.join(fiber2)

    return v1 + v2 // Combine the results
  })

Effect.runPromise(program)
// Output:
// number of fibers: 0
// number of fibers: 2
// number of fibers: 6
// number of fibers: 14
// number of fibers: 30
// number of fibers: 62
// number of fibers: 126
// number of fibers: 254
// number of fibers: 510
// number of fibers: 1022
// number of fibers: 2034
// number of fibers: 3795
// number of fibers: 5810
// number of fibers: 6474
// number of fibers: 4942
// number of fibers: 2515
// number of fibers: 832
// number of fibers: 170
// number of fibers: 18
// number of fibers: 0
// fibonacci result: 10946
```

**Signature**

```highlight
declare const supervised: {
  <X>(supervisor: Supervisor.Supervisor<X>): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R, X>(self: Effect<A, E, R>, supervisor: Supervisor.Supervisor<X>): Effect<A, E, R>
}
```

[Source][713]

Since v2.0.0

## [![][1]][714] transplant

Transplants specified effects so that when those effects fork other effects, the forked effects will be governed by the scope of the fiber that executes this effect.

This can be used to “graft” deep grandchildren onto a higher-level scope, effectively extending their lifespans into the parent scope.

**Signature**

```highlight
declare const transplant: <A, E, R>(
  f: (grafter: <A2, E2, R2>(effect: Effect<A2, E2, R2>) => Effect<A2, E2, R2>) => Effect<A, E, R>
) => Effect<A, E, R>
```

[Source][715]

Since v2.0.0

## [![][1]][716] withConcurrency

**Signature**

```highlight
declare const withConcurrency: {
  (concurrency: number | "unbounded"): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, concurrency: number | "unbounded"): Effect<A, E, R>
}
```

[Source][717]

Since v2.0.0

# [![][1]][718] Symbols

## [![][1]][719] EffectTypeId

**Signature**

```highlight
declare const EffectTypeId: unique symbol
```

[Source][720]

Since v2.0.0

## [![][1]][721] EffectTypeId (type alias)

**Signature**

```highlight
type EffectTypeId = typeof EffectTypeId
```

[Source][722]

Since v2.0.0

# [![][1]][723] Synchronization Utilities

## [![][1]][724] intoDeferred

Converts an `Effect` into an operation that completes a `Deferred` with its result.

**Details**

The `intoDeferred` function takes an effect and a `Deferred` and ensures that the `Deferred` is completed based on the outcome of the effect. If the effect succeeds, the `Deferred` is completed with the success value. If the effect fails, the `Deferred` is completed with the failure. Additionally, if the effect is interrupted, the `Deferred` will also be interrupted.

**Example**

```highlight
import { Deferred, Effect } from "effect"

// Define an effect that succeeds
const successEffect = Effect.succeed(42)

const program = Effect.gen(function* () {
  // Create a deferred
  const deferred = yield* Deferred.make<number, string>()

  // Complete the deferred using the successEffect
  const isCompleted = yield* Effect.intoDeferred(successEffect, deferred)

  // Access the value of the deferred
  const value = yield* Deferred.await(deferred)
  console.log(value)

  return isCompleted
})

Effect.runPromise(program).then(console.log)
// Output:
// 42
// true
```

**Signature**

```highlight
declare const intoDeferred: {
  <A, E>(deferred: Deferred.Deferred<A, E>): <R>(self: Effect<A, E, R>) => Effect<boolean, never, R>
  <A, E, R>(self: Effect<A, E, R>, deferred: Deferred.Deferred<A, E>): Effect<boolean, never, R>
}
```

[Source][725]

Since v2.0.0

# [![][1]][726] Tracing

## [![][1]][727] annotateCurrentSpan

Adds annotations to the currently active span for traceability.

**Details**

This function adds key-value annotations to the currently active span in the effect’s trace. These annotations help provide more context about the operation being executed at a specific point in time. Unlike `annotateSpans`, which applies to all spans in an effect, this function focuses solely on the active span.

You can either pass a single key-value pair or a record of key-value pairs to annotate the span. These annotations are useful for adding metadata to operations, especially in systems with detailed observability requirements.

**Signature**

```highlight
declare const annotateCurrentSpan: {
  (key: string, value: unknown): Effect<void>
  (values: Record<string, unknown>): Effect<void>
}
```

[Source][728]

Since v2.0.0

## [![][1]][729] annotateSpans

Adds annotations to each span in the effect for enhanced traceability.

**Details**

This function lets you attach key-value annotations to all spans generated during the execution of an effect. Annotations provide additional context, such as metadata or labels, which can help you understand and debug asynchronous workflows more effectively.

You can either pass a single key-value pair or a record of key-value pairs to annotate the spans. These annotations can then be visualized in tracing tools that support span annotations.

**Signature**

```highlight
declare const annotateSpans: {
  (key: string, value: unknown): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  (values: Record<string, unknown>): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, key: string, value: unknown): Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, values: Record<string, unknown>): Effect<A, E, R>
}
```

[Source][730]

Since v2.0.0

## [![][1]][731] currentParentSpan

**Signature**

```highlight
declare const currentParentSpan: Effect<Tracer.AnySpan, Cause.NoSuchElementException, never>
```

[Source][732]

Since v2.0.0

## [![][1]][733] currentSpan

**Signature**

```highlight
declare const currentSpan: Effect<Tracer.Span, Cause.NoSuchElementException, never>
```

[Source][734]

Since v2.0.0

## [![][1]][735] fn

The `Effect.fn` function allows you to create traced functions that return an effect. It provides two key features:

- **Stack traces with location details** if an error occurs.
- **Automatic span creation** for tracing when a span name is provided.

If a span name is passed as the first argument, the function’s execution is tracked using that name. If no name is provided, stack tracing still works, but spans are not created.

A function can be defined using either:

- A generator function, allowing the use of `yield*` for effect composition.
- A regular function that returns an `Effect`.

**Example** (Creating a Traced Function with a Span Name)

```highlight
import { Effect } from "effect"

const myfunc = Effect.fn("myspan")(function* <N extends number>(n: N) {
  yield* Effect.annotateCurrentSpan("n", n) // Attach metadata to the span
  console.log(`got: ${n}`)
  yield* Effect.fail(new Error("Boom!")) // Simulate failure
})

Effect.runFork(myfunc(100).pipe(Effect.catchAllCause(Effect.logError)))
// Output:
// got: 100
// timestamp=... level=ERROR fiber=#0 cause="Error: Boom!
//     at <anonymous> (/.../index.ts:6:22) <= Raise location
//     at myspan (/.../index.ts:3:23)  <= Definition location
//     at myspan (/.../index.ts:9:16)" <= Call location
```

`Effect.fn` automatically creates spans. The spans capture information about the function execution, including metadata and error details.

**Example** (Exporting Spans to the Console)

```highlight
import { Effect } from "effect"
import { NodeSdk } from "@effect/opentelemetry"
import { ConsoleSpanExporter, BatchSpanProcessor } from "@opentelemetry/sdk-trace-base"

const myfunc = Effect.fn("myspan")(function* <N extends number>(n: N) {
  yield* Effect.annotateCurrentSpan("n", n)
  console.log(`got: ${n}`)
  yield* Effect.fail(new Error("Boom!"))
})

const program = myfunc(100)

const NodeSdkLive = NodeSdk.layer(() => ({
  resource: { serviceName: "example" },
  // Export span data to the console
  spanProcessor: new BatchSpanProcessor(new ConsoleSpanExporter())
}))

Effect.runFork(program.pipe(Effect.provide(NodeSdkLive)))
// Output:
// got: 100
// {
//   resource: {
//     attributes: {
//       'service.name': 'example',
//       'telemetry.sdk.language': 'nodejs',
//       'telemetry.sdk.name': '@effect/opentelemetry',
//       'telemetry.sdk.version': '1.30.1'
//     }
//   },
//   instrumentationScope: { name: 'example', version: undefined, schemaUrl: undefined },
//   traceId: '22801570119e57a6e2aacda3dec9665b',
//   parentId: undefined,
//   traceState: undefined,
//   name: 'myspan',
//   id: '7af530c1e01bc0cb',
//   kind: 0,
//   timestamp: 1741182277518402.2,
//   duration: 4300.416,
//   attributes: {
//     n: 100,
//     'code.stacktrace': 'at <anonymous> (/.../index.ts:8:23)\n' +
//       'at <anonymous> (/.../index.ts:14:17)'
//   },
//   status: { code: 2, message: 'Boom!' },
//   events: [
//     {
//       name: 'exception',
//       attributes: {
//         'exception.type': 'Error',
//         'exception.message': 'Boom!',
//         'exception.stacktrace': 'Error: Boom!\n' +
//           '    at <anonymous> (/.../index.ts:11:22)\n' +
//           '    at myspan (/.../index.ts:8:23)\n' +
//           '    at myspan (/.../index.ts:14:17)'
//       },
//       time: [ 1741182277, 522702583 ],
//       droppedAttributesCount: 0
//     }
//   ],
//   links: []
// }
```

`Effect.fn` also acts as a pipe function, allowing you to create a pipeline after the function definition using the effect returned by the generator function as the starting value of the pipeline.

**Example** (Creating a Traced Function with a Delay)

```highlight
import { Effect } from "effect"

const myfunc = Effect.fn(
  function* (n: number) {
    console.log(`got: ${n}`)
    yield* Effect.fail(new Error("Boom!"))
  },
  // You can access both the created effect and the original arguments
  (effect, n) => Effect.delay(effect, `${n / 100} seconds`)
)

Effect.runFork(myfunc(100).pipe(Effect.catchAllCause(Effect.logError)))
// Output:
// got: 100
// timestamp=... level=ERROR fiber=#0 cause="Error: Boom! (<= after 1 second)
```

**See**

- `fnUntraced` for a version of this function that doesn’t add a span.

**Signature**

```highlight
declare const fn: fn.Gen & fn.NonGen & ((name: string, options?: Tracer.SpanOptions) => fn.Gen & fn.NonGen)
```

[Source][736]

Since v3.11.0

## [![][1]][737] fnUntraced

Same as `fn`, but allows you to create a function that is not traced, for when performance is critical.

**See**

- `fn` for a version that includes tracing.

**Signature**

```highlight
declare const fnUntraced: fn.Untraced
```

[Source][738]

Since v3.12.0

## [![][1]][739] functionWithSpan

Wraps a function that returns an effect with a new span for tracing.

**Example**

```highlight
import { Effect } from "effect"

const getTodo = Effect.functionWithSpan({
  body: (id: number) => Effect.succeed(`Got todo ${id}!`),
  options: (id) => ({
    name: `getTodo-${id}`,
    attributes: { id }
  })
})
```

**Signature**

```highlight
declare const functionWithSpan: <Args extends Array<any>, Ret extends Effect<any, any, any>>(options: {
  readonly body: (...args: Args) => Ret
  readonly options: FunctionWithSpanOptions | ((...args: Args) => FunctionWithSpanOptions)
  readonly captureStackTrace?: boolean | undefined
}) => (...args: Args) => Unify.Unify<Ret>
```

[Source][740]

Since v3.2.0

## [![][1]][741] linkSpanCurrent

Add span links to the current span.

**Signature**

```highlight
declare const linkSpanCurrent: {
  (span: Tracer.AnySpan, attributes?: Readonly<Record<string, unknown>> | undefined): Effect<void>
  (links: ReadonlyArray<Tracer.SpanLink>): Effect<void>
}
```

[Source][742]

Since v3.14.0

## [![][1]][743] linkSpans

For all spans in this effect, add a link with the provided span.

**Signature**

```highlight
declare const linkSpans: {
  (span: Tracer.AnySpan, attributes?: Record<string, unknown>): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(self: Effect<A, E, R>, span: Tracer.AnySpan, attributes?: Record<string, unknown>): Effect<A, E, R>
}
```

[Source][744]

Since v2.0.0

## [![][1]][745] makeSpan

Create a new span for tracing.

**Signature**

```highlight
declare const makeSpan: (name: string, options?: Tracer.SpanOptions) => Effect<Tracer.Span>
```

[Source][746]

Since v2.0.0

## [![][1]][747] makeSpanScoped

Create a new span for tracing, and automatically close it when the Scope finalizes.

The span is not added to the current span stack, so no child spans will be created for it.

**Signature**

```highlight
declare const makeSpanScoped: (
  name: string,
  options?: Tracer.SpanOptions | undefined
) => Effect<Tracer.Span, never, Scope.Scope>
```

[Source][748]

Since v2.0.0

## [![][1]][749] spanAnnotations

**Signature**

```highlight
declare const spanAnnotations: Effect<HashMap.HashMap<string, unknown>, never, never>
```

[Source][750]

Since v2.0.0

## [![][1]][751] spanLinks

**Signature**

```highlight
declare const spanLinks: Effect<Chunk.Chunk<Tracer.SpanLink>, never, never>
```

[Source][752]

Since v2.0.0

## [![][1]][753] tracer

**Signature**

```highlight
declare const tracer: Effect<Tracer.Tracer, never, never>
```

[Source][754]

Since v2.0.0

## [![][1]][755] tracerWith

**Signature**

```highlight
declare const tracerWith: <A, E, R>(f: (tracer: Tracer.Tracer) => Effect<A, E, R>) => Effect<A, E, R>
```

[Source][756]

Since v2.0.0

## [![][1]][757] useSpan

Create a new span for tracing, and automatically close it when the effect completes.

The span is not added to the current span stack, so no child spans will be created for it.

**Signature**

```highlight
declare const useSpan: {
  <A, E, R>(name: string, evaluate: (span: Tracer.Span) => Effect<A, E, R>): Effect<A, E, R>
  <A, E, R>(
    name: string,
    options: Tracer.SpanOptions,
    evaluate: (span: Tracer.Span) => Effect<A, E, R>
  ): Effect<A, E, R>
}
```

[Source][758]

Since v2.0.0

## [![][1]][759] withParentSpan

Adds the provided span to the current span stack.

**Signature**

```highlight
declare const withParentSpan: {
  (span: Tracer.AnySpan): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, Exclude<R, Tracer.ParentSpan>>
  <A, E, R>(self: Effect<A, E, R>, span: Tracer.AnySpan): Effect<A, E, Exclude<R, Tracer.ParentSpan>>
}
```

[Source][760]

Since v2.0.0

## [![][1]][761] withSpan

Wraps the effect with a new span for tracing.

**Signature**

```highlight
declare const withSpan: {
  (
    name: string,
    options?: Tracer.SpanOptions | undefined
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, Exclude<R, Tracer.ParentSpan>>
  <A, E, R>(
    self: Effect<A, E, R>,
    name: string,
    options?: Tracer.SpanOptions | undefined
  ): Effect<A, E, Exclude<R, Tracer.ParentSpan>>
}
```

[Source][762]

Since v2.0.0

## [![][1]][763] withSpanScoped

Wraps the effect with a new span for tracing.

The span is ended when the Scope is finalized.

**Signature**

```highlight
declare const withSpanScoped: {
  (
    name: string,
    options?: Tracer.SpanOptions
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, Exclude<R, Tracer.ParentSpan> | Scope.Scope>
  <A, E, R>(
    self: Effect<A, E, R>,
    name: string,
    options?: Tracer.SpanOptions
  ): Effect<A, E, Exclude<R, Tracer.ParentSpan> | Scope.Scope>
}
```

[Source][764]

Since v2.0.0

## [![][1]][765] withTracer

**Signature**

```highlight
declare const withTracer: {
  (value: Tracer.Tracer): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, value: Tracer.Tracer): Effect<A, E, R>
}
```

[Source][766]

Since v2.0.0

## [![][1]][767] withTracerEnabled

Disable the tracer for the given Effect.

**Example**

```highlight
import { Effect } from "effect"

Effect.succeed(42).pipe(
  Effect.withSpan("my-span"),
  // the span will not be registered with the tracer
  Effect.withTracerEnabled(false)
)
```

**Signature**

```highlight
declare const withTracerEnabled: {
  (enabled: boolean): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, enabled: boolean): Effect<A, E, R>
}
```

[Source][768]

Since v2.0.0

## [![][1]][769] withTracerScoped

**Signature**

```highlight
declare const withTracerScoped: (value: Tracer.Tracer) => Effect<void, never, Scope.Scope>
```

[Source][770]

Since v2.0.0

## [![][1]][771] withTracerTiming

**Signature**

```highlight
declare const withTracerTiming: {
  (enabled: boolean): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>
  <A, E, R>(effect: Effect<A, E, R>, enabled: boolean): Effect<A, E, R>
}
```

[Source][772]

Since v2.0.0

# [![][1]][773] Type lambdas

## [![][1]][774] EffectTypeLambda (interface)

**Signature**

```highlight
export interface EffectTypeLambda extends TypeLambda {
  readonly type: Effect<this["Target"], this["Out1"], this["Out2"]>
}
```

[Source][775]

Since v2.0.0

# [![][1]][776] Zipping

## [![][1]][777] zip

Combines two effects into a single effect, producing a tuple of their results.

**Details**

This function combines two effects, `self` and `that`, into one. It executes the first effect (`self`) and then the second effect (`that`), collecting their results into a tuple. Both effects must succeed for the resulting effect to succeed. If either effect fails, the entire operation fails.

By default, the effects are executed sequentially. If the `concurrent` option is set to `true`, the effects will run concurrently, potentially improving performance for independent operations.

**Example** (Combining Two Effects Sequentially)

```highlight
import { Effect } from "effect"

const task1 = Effect.succeed(1).pipe(Effect.delay("200 millis"), Effect.tap(Effect.log("task1 done")))
const task2 = Effect.succeed("hello").pipe(Effect.delay("100 millis"), Effect.tap(Effect.log("task2 done")))

// Combine the two effects together
//
//      ┌─── Effect<[number, string], never, never>
//      ▼
const program = Effect.zip(task1, task2)

Effect.runPromise(program).then(console.log)
// Output:
// timestamp=... level=INFO fiber=#0 message="task1 done"
// timestamp=... level=INFO fiber=#0 message="task2 done"
// [ 1, 'hello' ]
```

**Example** (Combining Two Effects Concurrently)

```highlight
import { Effect } from "effect"

const task1 = Effect.succeed(1).pipe(Effect.delay("200 millis"), Effect.tap(Effect.log("task1 done")))
const task2 = Effect.succeed("hello").pipe(Effect.delay("100 millis"), Effect.tap(Effect.log("task2 done")))

// Run both effects concurrently using the concurrent option
const program = Effect.zip(task1, task2, { concurrent: true })

Effect.runPromise(program).then(console.log)
// Output:
// timestamp=... level=INFO fiber=#0 message="task2 done"
// timestamp=... level=INFO fiber=#0 message="task1 done"
// [ 1, 'hello' ]
```

**See**

- `zipWith` for a version that combines the results with a custom function.
- `validate` for a version that accumulates errors.

**Signature**

```highlight
declare const zip: {
  <A2, E2, R2>(
    that: Effect<A2, E2, R2>,
    options?:
      | {
          readonly concurrent?: boolean | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<[A, A2], E2 | E, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    that: Effect<A2, E2, R2>,
    options?:
      | {
          readonly concurrent?: boolean | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<[A, A2], E | E2, R | R2>
}
```

[Source][778]

Since v2.0.0

## [![][1]][779] zipLeft

Executes two effects sequentially, returning the result of the first effect and ignoring the result of the second.

**Details**

This function allows you to run two effects in sequence, where the result of the first effect is preserved, and the result of the second effect is discarded. By default, the two effects are executed sequentially. If you need them to run concurrently, you can pass the `{ concurrent: true }` option.

The second effect will always be executed, even though its result is ignored. This makes it useful for cases where you want to execute an effect for its side effects while keeping the result of another effect.

**When to Use**

Use this function when you are only interested in the result of the first effect but still need to run the second effect for its side effects, such as logging or performing a cleanup action.

**Example**

```highlight
import { Effect } from "effect"

const task1 = Effect.succeed(1).pipe(Effect.delay("200 millis"), Effect.tap(Effect.log("task1 done")))
const task2 = Effect.succeed("hello").pipe(Effect.delay("100 millis"), Effect.tap(Effect.log("task2 done")))

const program = Effect.zipLeft(task1, task2)

Effect.runPromise(program).then(console.log)
// Output:
// timestamp=... level=INFO fiber=#0 message="task1 done"
// timestamp=... level=INFO fiber=#0 message="task2 done"
// 1
```

**See**

- `zipRight` for a version that returns the result of the second effect.

**Signature**

```highlight
declare const zipLeft: {
  <A2, E2, R2>(
    that: Effect<A2, E2, R2>,
    options?:
      | {
          readonly concurrent?: boolean | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E2 | E, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    that: Effect<A2, E2, R2>,
    options?:
      | {
          readonly concurrent?: boolean | undefined
          readonly batching?: boolean | "inherit" | undefined
          readonly concurrentFinalizers?: boolean | undefined
        }
      | undefined
  ): Effect<A, E | E2, R | R2>
}
```

[Source][780]

Since v2.0.0

## [![][1]][781] zipRight

Executes two effects sequentially, returning the result of the second effect while ignoring the result of the first.

**Details**

This function allows you to run two effects in sequence, keeping the result of the second effect and discarding the result of the first. By default, the two effects are executed sequentially. If you need them to run concurrently, you can pass the `{ concurrent: true }` option.

The first effect will always be executed, even though its result is ignored. This makes it useful for scenarios where the first effect is needed for its side effects, but only the result of the second effect is important.

**When to Use**

Use this function when you are only interested in the result of the second effect but still need to run the first effect for its side effects, such as initialization or setup tasks.

**Example**

```highlight
import { Effect } from "effect"

const task1 = Effect.succeed(1).pipe(Effect.delay("200 millis"), Effect.tap(Effect.log("task1 done")))
const task2 = Effect.succeed("hello").pipe(Effect.delay("100 millis"), Effect.tap(Effect.log("task2 done")))

const program = Effect.zipRight(task1, task2)

Effect.runPromise(program).then(console.log)
// Output:
// timestamp=... level=INFO fiber=#0 message="task1 done"
// timestamp=... level=INFO fiber=#0 message="task2 done"
// hello
```

**See**

- `zipLeft` for a version that returns the result of the first effect.

**Signature**

```highlight
declare const zipRight: {
  <A2, E2, R2>(
    that: Effect<A2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): <A, E, R>(self: Effect<A, E, R>) => Effect<A2, E2 | E, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect<A, E, R>,
    that: Effect<A2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect<A2, E2 | E, R2 | R>
}
```

[Source][782]

Since v2.0.0

## [![][1]][783] zipWith

Combines two effects sequentially and applies a function to their results to produce a single value.

**Details**

This function runs two effects in sequence (or concurrently, if the `{ concurrent: true }` option is provided) and combines their results using a provided function. Unlike `zip`, which returns a tuple of the results, this function processes the results with a custom function to produce a single output.

**Example** (Combining Effects with a Custom Function)

```highlight
import { Effect } from "effect"

const task1 = Effect.succeed(1).pipe(Effect.delay("200 millis"), Effect.tap(Effect.log("task1 done")))
const task2 = Effect.succeed("hello").pipe(Effect.delay("100 millis"), Effect.tap(Effect.log("task2 done")))

const task3 = Effect.zipWith(
  task1,
  task2,
  // Combines results into a single value
  (number, string) => number + string.length
)

Effect.runPromise(task3).then(console.log)
// Output:
// timestamp=... level=INFO fiber=#3 message="task1 done"
// timestamp=... level=INFO fiber=#2 message="task2 done"
// 6
```

**Signature**

```highlight
declare const zipWith: {
  <A2, E2, R2, A, B>(
    that: Effect<A2, E2, R2>,
    f: (a: A, b: A2) => B,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): <E, R>(self: Effect<A, E, R>) => Effect<B, E2 | E, R2 | R>
  <A, E, R, A2, E2, R2, B>(
    self: Effect<A, E, R>,
    that: Effect<A2, E2, R2>,
    f: (a: A, b: A2) => B,
    options?: {
      readonly concurrent?: boolean | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): Effect<B, E2 | E, R2 | R>
}
```

[Source][784]

Since v2.0.0

# [![][1]][785] utils

## [![][1]][786] All (namespace)

[Source][787]

Since v2.0.0

### [![][1]][788] EffectAny (type alias)

**Signature**

```highlight
type EffectAny = Effect<any, any, any>
```

[Source][789]

Since v2.0.0

### [![][1]][790] ReturnIterable (type alias)

**Signature**

```highlight
type ReturnIterable<T, Discard, Mode> = [T] extends [Iterable<Effect.Variance<infer R0, infer L0, infer R>>]
  ? Effect<
      Discard extends true ? void : Mode extends "either" ? Array<Either.Either<R0, L0>> : Array<R0>,
      Mode extends "either" ? never : Mode extends "validate" ? Array<Option.Option<L0>> : L0,
      R
    >
  : never
```

[Source][791]

Since v2.0.0

### [![][1]][792] ReturnTuple (type alias)

**Signature**

```highlight
type Effect<Discard extends true ? void : T[number] extends never ? [] : Mode extends "either" ? { -readonly [K in keyof T]: [T[K]] extends [Effect.Variance<infer _A, infer _E, infer _R>] ? Either.Either<_A, _E> : never; } : { -readonly [K in keyof T]: [T[K]] extends [Effect.Variance<infer _A, infer _E, infer _R>] ? _A : never; }, Mode extends "either" ? never : T[number] extends never ? never : Mode extends "validate" ? { -readonly [K in keyof T]: [T[K]] extends [Effect.Variance<infer _A, infer _E, infer _R>] ? Option.Option<_E> : never; } : [T[number]] extends [{ [EffectTypeId]: { _E: (_: never) => infer E; }; }] ? E : never, T[number] extends never ? never : [T[number]] extends [{ [EffectTypeId]: { _R: (_: never) => infer R; }; }] ? R : never> = Effect<
    Discard extends true ? void
      : T[number] extends never ? []
      : Mode extends "either" ? {
          -readonly [K in keyof T]: [T[K]] extends [Effect.Variance<infer _A, infer _E, infer _R>] ?
            Either.Either<_A, _E>
            : never
        }
      : { -readonly [K in keyof T]: [T[K]] extends [Effect.Variance<infer _A, infer _E, infer _R>] ? _A : never },
    Mode extends "either" ? never
      : T[number] extends never ? never
      : Mode extends "validate" ? {
          -readonly [K in keyof T]: [T[K]] extends [Effect.Variance<infer _A, infer _E, infer _R>] ? Option.Option<_E>
            : never
        }
      : [T[number]] extends [{ [EffectTypeId]: { _E: (_: never) => infer E } }] ? E
      : never,
    T[number] extends never ? never
      : [T[number]] extends [{ [EffectTypeId]: { _R: (_: never) => infer R } }] ? R
      : never
  > extends infer X ? X : never
```

[Source][793]

Since v2.0.0

### [![][1]][794] ReturnObject (type alias)

**Signature**

```highlight
type ReturnObject<T, Discard, Mode> = [T] extends [{ [K: string]: EffectAny }]
  ? Effect<
      Discard extends true
        ? void
        : Mode extends "either"
          ? {
              -readonly [K in keyof T]: [T[K]] extends [Effect.Variance<infer _A, infer _E, infer _R>]
                ? Either.Either<_A, _E>
                : never
            }
          : { -readonly [K in keyof T]: [T[K]] extends [Effect.Variance<infer _A, infer _E, infer _R>] ? _A : never },
      Mode extends "either"
        ? never
        : keyof T extends never
          ? never
          : Mode extends "validate"
            ? {
                -readonly [K in keyof T]: [T[K]] extends [Effect.Variance<infer _A, infer _E, infer _R>]
                  ? Option.Option<_E>
                  : never
              }
            : [T[keyof T]] extends [{ [EffectTypeId]: { _E: (_: never) => infer E } }]
              ? E
              : never,
      keyof T extends never
        ? never
        : [T[keyof T]] extends [{ [EffectTypeId]: { _R: (_: never) => infer R } }]
          ? R
          : never
    >
  : never
```

[Source][795]

Since v2.0.0

### [![][1]][796] IsDiscard (type alias)

**Signature**

```highlight
type IsDiscard<A> = [Extract<A, { readonly discard: true }>] extends [never] ? false : true
```

[Source][797]

Since v2.0.0

### [![][1]][798] ExtractMode (type alias)

**Signature**

```highlight
type ExtractMode<A> = [A] extends [{ mode: infer M }] ? M : "default"
```

[Source][799]

Since v2.0.0

### [![][1]][800] Return (type alias)

**Signature**

```highlight
type Return<Arg, O> = [Arg] extends [ReadonlyArray<EffectAny>]
  ? ReturnTuple<Arg, IsDiscard<O>, ExtractMode<O>>
  : [Arg] extends [Iterable<EffectAny>]
    ? ReturnIterable<Arg, IsDiscard<O>, ExtractMode<O>>
    : [Arg] extends [Record<string, EffectAny>]
      ? ReturnObject<Arg, IsDiscard<O>, ExtractMode<O>>
      : never
```

[Source][801]

Since v2.0.0

## [![][1]][802] Effect (namespace)

[Source][803]

Since v2.0.0

### [![][1]][804] Variance (interface)

**Signature**

```highlight
export interface Variance<out A, out E, out R> {
  readonly [EffectTypeId]: VarianceStruct<A, E, R>
}
```

[Source][805]

Since v2.0.0

### [![][1]][806] VarianceStruct (interface)

**Signature**

```highlight
export interface VarianceStruct<out A, out E, out R> {
  readonly _V: string
  readonly _A: Covariant<A>
  readonly _E: Covariant<E>
  readonly _R: Covariant<R>
}
```

[Source][807]

Since v2.0.0

### [![][1]][808] Context (type alias)

**Signature**

```highlight
type Context<T> = [T] extends [Effect<infer _A, infer _E, infer _R>] ? _R : never
```

[Source][809]

Since v2.0.0

### [![][1]][810] Error (type alias)

**Signature**

```highlight
type Error<T> = [T] extends [Effect<infer _A, infer _E, infer _R>] ? _E : never
```

[Source][811]

Since v2.0.0

### [![][1]][812] Success (type alias)

**Signature**

```highlight
type Success<T> = [T] extends [Effect<infer _A, infer _E, infer _R>] ? _A : never
```

[Source][813]

Since v2.0.0

### [![][1]][814] AsEffect (type alias)

**Signature**

```highlight
type AsEffect<T> = Effect<
  T extends Effect<infer _A, infer _E, infer _R> ? _A : never,
  T extends Effect<infer _A, infer _E, infer _R> ? _E : never,
  T extends Effect<infer _A, infer _E, infer _R> ? _R : never
>
```

[Source][815]

Since v3.15.5

## [![][1]][816] ap

Applies the function produced by one effect to the value produced by another effect.

**Details**

This function combines two effects:

- The first effect produces a function of type `(a: A) => B`.
- The second effect produces a value of type `A`.

Once both effects complete successfully, the function is applied to the value, resulting in an effect that produces a value of type `B`.

**Signature**

```highlight
declare const ap: {
  <A, E2, R2>(that: Effect<A, E2, R2>): <B, R, E>(self: Effect<(a: A) => B, E, R>) => Effect<B, E | E2, R | R2>
  <A, B, E, R, E2, R2>(self: Effect<(a: A) => B, E, R>, that: Effect<A, E2, R2>): Effect<B, E | E2, R | R2>
}
```

[Source][817]

Since v2.0.0

## [![][1]][818] none

Ensures the `Option` is `None`, returning `void`. Otherwise, raises a `NoSuchElementException`.

**Details**

This function checks if the provided `Option` is `None`. If it is, it returns an effect that produces no result (i.e., `void`). If the `Option` is not `None` (i.e., it contains a value), the function will raise a `NoSuchElementException` error.

**When to Use**

This is useful when you want to ensure that a certain value is absent (i.e., `None`) before continuing execution, and to handle cases where the value is unexpectedly present.

**Signature**

```highlight
declare const none: <A, E, R>(self: Effect<Option.Option<A>, E, R>) => Effect<void, E | Cause.NoSuchElementException, R>
```

[Source][819]

Since v2.0.0

## [![][1]][820] replicate

Replicates the given effect `n` times.

**Details**

This function takes an effect and replicates it a specified number of times (`n`). The result is an array of `n` effects, each of which is identical to the original effect.

**Example**

```highlight
import { Console, Effect } from "effect"

const task = Effect.succeed("Hello, World!").pipe(Effect.tap(Console.log))

const program = Effect.gen(function* () {
  // Replicate the task 3 times
  const tasks = Effect.replicate(task, 3)
  for (const t of tasks) {
    // Run each task
    yield* t
  }
})

Effect.runFork(program)
// Output:
// Hello, World!
// Hello, World!
// Hello, World!
```

**Signature**

```highlight
declare const replicate: {
  (n: number): <A, E, R>(self: Effect<A, E, R>) => Array<Effect<A, E, R>>
  <A, E, R>(self: Effect<A, E, R>, n: number): Array<Effect<A, E, R>>
}
```

[Source][821]

Since v2.0.0
