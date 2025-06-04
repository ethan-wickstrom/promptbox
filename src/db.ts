import { type Changes, Database, type SQLQueryBindings } from "bun:sqlite"
import { type Result, err, ok } from "neverthrow"

export type DbError =
  | { readonly type: "connection-failed"; readonly reason: string }
  | { readonly type: "query-failed"; readonly reason: string }
  | { readonly type: "constraint-violation"; readonly reason: string }

export type DbConnection = {
  readonly all: <T>(query: string, params: readonly SQLQueryBindings[]) => Result<readonly T[], DbError>
  readonly run: (query: string, params: readonly SQLQueryBindings[]) => Result<Changes, DbError>
  readonly close: () => void
}

export const createConnection = (dbPath: string): Result<DbConnection, DbError> => {
  try {
    const db = new Database(dbPath)
    db.exec("PRAGMA journal_mode = WAL;")

    const all = <T>(query: string, params: readonly SQLQueryBindings[]): Result<readonly T[], DbError> => {
      try {
        const stmt = db.prepare(query)
        return ok(stmt.all(...params) as readonly T[])
      } catch (error) {
        if (error instanceof Error && error.message.includes("UNIQUE constraint")) {
          const e: DbError = { type: "constraint-violation", reason: error.message }
          return err(e)
        }
        const e: DbError = { type: "query-failed", reason: String(error) }
        return err(e)
      }
    }

    const run = (query: string, params: readonly SQLQueryBindings[]): Result<Changes, DbError> => {
      try {
        const stmt = db.prepare(query)
        return ok(stmt.run(...params))
      } catch (error) {
        if (error instanceof Error && error.message.includes("UNIQUE constraint")) {
          const e: DbError = { type: "constraint-violation", reason: error.message }
          return err(e)
        }
        const e: DbError = { type: "query-failed", reason: String(error) }
        return err(e)
      }
    }

    const connection: DbConnection = {
      all,
      run,
      close: () => db.close(false)
    }
    return ok(connection)
  } catch (error) {
    return err({ type: "connection-failed", reason: String(error) })
  }
}
