import { type Changes, Database, type SQLQueryBindings } from "bun:sqlite"
import { Effect } from "effect"

export type DbError =
  | { readonly type: "connection-failed"; readonly reason: string }
  | { readonly type: "query-failed"; readonly reason: string }
  | { readonly type: "constraint-violation"; readonly reason: string }

export type DbConnection = {
  readonly all: <T>(query: string, params: readonly SQLQueryBindings[]) => Effect.Effect<readonly T[], DbError>
  readonly run: (query: string, params: readonly SQLQueryBindings[]) => Effect.Effect<Changes, DbError>
  readonly close: () => void
}

export const createConnection = (dbPath: string): Effect.Effect<DbConnection, DbError> =>
  Effect.try({
    try: (): DbConnection => {
      const db = new Database(dbPath)
      db.exec("PRAGMA journal_mode = WAL;")

      const all = <T>(query: string, params: readonly SQLQueryBindings[]): Effect.Effect<readonly T[], DbError> =>
        Effect.try({
          try: (): readonly T[] => {
            const stmt = db.prepare(query)
            return stmt.all(...params) as readonly T[]
          },
          catch: (error: unknown): DbError => {
            if (error instanceof Error && error.message.includes("UNIQUE constraint")) {
              const e: DbError = {
                type: "constraint-violation",
                reason: error.message
              }
              return e
            }
            const e: DbError = {
              type: "query-failed",
              reason: String(error)
            }
            return e
          }
        })

      const run = (query: string, params: readonly SQLQueryBindings[]): Effect.Effect<Changes, DbError> =>
        Effect.try({
          try: (): Changes => {
            const stmt = db.prepare(query)
            return stmt.run(...params)
          },
          catch: (error: unknown): DbError => {
            if (error instanceof Error && error.message.includes("UNIQUE constraint")) {
              const e: DbError = {
                type: "constraint-violation",
                reason: error.message
              }
              return e
            }
            const e: DbError = {
              type: "query-failed",
              reason: String(error)
            }
            return e
          }
        })

      const connection: DbConnection = {
        all,
        run,
        close: () => db.close(false)
      }
      return connection
    },
    catch: (error: unknown): DbError => ({ type: "connection-failed", reason: String(error) })
  })
