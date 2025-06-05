import { type Changes, Database, type SQLQueryBindings } from "bun:sqlite"
import { join } from "node:path"
import { Context, Effect, Layer, Pool, type Scope } from "effect"
import { ConnectionError, ConstraintError, DatabaseError, QueryError } from "../errors.ts"
import { ConfigService } from "./config.ts"

// Database connection type
export type DbConnection = {
  readonly all: <T>(
    query: string,
    params?: readonly SQLQueryBindings[]
  ) => Effect.Effect<readonly T[], QueryError | ConstraintError>
  readonly run: (
    query: string,
    params?: readonly SQLQueryBindings[]
  ) => Effect.Effect<Changes, QueryError | ConstraintError>
  readonly exec: (query: string) => Effect.Effect<void, QueryError>
}

// Service type definition
export type DatabaseService = {
  readonly withConnection: <A, E, R>(
    use: (conn: DbConnection) => Effect.Effect<A, E, R>
  ) => Effect.Effect<A, E | DatabaseError, R>
  readonly runMigrations: Effect.Effect<void, DatabaseError>
}

// Context.Tag for dependency injection
export const DatabaseService = Context.GenericTag<DatabaseService>("@services/Database")

// Helper function to classify database errors
const classifyError = (error: unknown): QueryError | ConstraintError => {
  if (!(error instanceof Error)) {
    return new QueryError({ reason: String(error) })
  }

  const message = error.message

  if (message.includes("UNIQUE constraint")) {
    const match = message.match(/UNIQUE constraint failed: (.+)/)
    return new ConstraintError({
      constraint: match?.[1] ?? "UNIQUE",
      reason: message
    })
  }

  if (message.includes("FOREIGN KEY constraint")) {
    return new ConstraintError({
      constraint: "FOREIGN KEY",
      reason: message
    })
  }

  return new QueryError({ reason: message })
}

// Create a database connection with proper resource management
const makeConnection = (dbPath: string): Effect.Effect<DbConnection, ConnectionError, Scope.Scope> =>
  Effect.acquireRelease(
    Effect.try({
      try: (): Database => {
        const db = new Database(dbPath)
        db.exec("PRAGMA journal_mode = WAL;")
        db.exec("PRAGMA foreign_keys = ON;")
        return db
      },
      catch: (error): ConnectionError => new ConnectionError({ reason: String(error) })
    }),
    (db) => Effect.sync(() => db.close(false))
  ).pipe(
    Effect.map(
      (db): DbConnection => ({
        all: <T>(
          query: string,
          params: readonly SQLQueryBindings[] = []
        ): Effect.Effect<readonly T[], QueryError | ConstraintError> =>
          Effect.try({
            try: (): readonly T[] => {
              const stmt = db.prepare(query)
              return stmt.all(...params) as readonly T[]
            },
            catch: classifyError
          }),

        run: (
          query: string,
          params: readonly SQLQueryBindings[] = []
        ): Effect.Effect<Changes, QueryError | ConstraintError> =>
          Effect.try({
            try: (): Changes => {
              const stmt = db.prepare(query)
              return stmt.run(...params)
            },
            catch: classifyError
          }),

        exec: (query: string): Effect.Effect<void, QueryError> =>
          Effect.try({
            try: (): void => {
              db.exec(query)
            },
            catch: (error: unknown): QueryError => new QueryError({ query, reason: String(error) })
          })
      })
    )
  )

// Create the database service
const makeDatabaseService = (dbPath: string): DatabaseService => {
  // Create a connection pool with proper resource management
  const connectionPool = Pool.make({
    acquire: makeConnection(dbPath),
    size: 1 // SQLite only supports single connection
  })

  const withConnection = <A, E, R>(
    use: (conn: DbConnection) => Effect.Effect<A, E, R>
  ): Effect.Effect<A, E | DatabaseError, R> =>
    Effect.scoped(
      connectionPool.pipe(
        Effect.flatMap((pool) => Pool.get(pool)),
        Effect.flatMap(use),
        Effect.catchTag(
          "ConnectionError",
          (error): Effect.Effect<never, DatabaseError> =>
            Effect.fail(
              new DatabaseError({
                reason: `Database connection failed: ${"reason" in error ? error.reason : "unknown"}`
              })
            )
        )
      )
    )

  const runMigrations: Effect.Effect<void, DatabaseError> = withConnection((conn) =>
    conn
      .exec(`
      CREATE TABLE IF NOT EXISTS prompts (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at INTEGER DEFAULT (unixepoch()),
        updated_at INTEGER DEFAULT (unixepoch())
      );

      CREATE INDEX IF NOT EXISTS idx_prompts_name ON prompts(name);
      CREATE INDEX IF NOT EXISTS idx_prompts_created_at ON prompts(created_at);
    `)
      .pipe(Effect.mapError((error) => new DatabaseError({ reason: `Migration failed: ${error.reason}` })))
  )

  return {
    withConnection,
    runMigrations
  }
}

// Layer implementation
export const DatabaseServiceLive = Layer.effect(
  DatabaseService,
  Effect.gen(function* () {
    const config = yield* ConfigService
    const dataDir = config.dataDir
    const dbPath = join(dataDir, "prompts.sqlite")
    const service = makeDatabaseService(dbPath)

    // Run migrations on startup
    yield* service.runMigrations

    return service
  })
)

// Test layer with in-memory database
export const DatabaseServiceTest = Layer.succeed(DatabaseService, makeDatabaseService(":memory:"))