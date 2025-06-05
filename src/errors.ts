import { Data } from "effect"

// Database-related errors
export class DatabaseError extends Data.TaggedError("DatabaseError")<{
  readonly reason: string
}> {}

export class ConnectionError extends Data.TaggedError("ConnectionError")<{
  readonly reason: string
}> {}

export class QueryError extends Data.TaggedError("QueryError")<{
  readonly query?: string
  readonly reason: string
}> {}

export class ConstraintError extends Data.TaggedError("ConstraintError")<{
  readonly constraint: string
  readonly reason: string
}> {}

// Validation errors
export class ValidationError extends Data.TaggedError("ValidationError")<{
  readonly field: string
  readonly reason: string
}> {}

// Domain errors
export class NotFoundError extends Data.TaggedError("NotFoundError")<{
  readonly type: "prompt" | "user" | "resource"
  readonly id: string
}> {}

// Config errors
export class ConfigError extends Data.TaggedError("ConfigError")<{
  readonly key: string
  readonly reason: string
}> {}

// I/O errors
export class IOError extends Data.TaggedError("IOError")<{
  readonly operation: string
  readonly reason: string
}> {}

// HTTP errors
export class HttpError extends Data.TaggedError("HttpError")<{
  readonly statusCode: number
  readonly reason: string
}> {}

export type AllDatabaseErrors = DatabaseError | ConnectionError | QueryError | ConstraintError