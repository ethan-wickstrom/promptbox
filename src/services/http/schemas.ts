import { Schema } from "@effect/schema"
import type { Prompt } from "../../types.ts"

// Request schemas
export const CreatePromptRequest = Schema.Struct({
  name: Schema.NonEmptyString,
  content: Schema.NonEmptyString
})

export const UpdatePromptRequest = Schema.Struct({
  name: Schema.NonEmptyString,
  content: Schema.NonEmptyString
})

// Response schemas
export const PromptResponse = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  content: Schema.String
})

export const PromptsResponse = Schema.Array(PromptResponse)

export const ErrorResponse = Schema.Struct({
  error: Schema.String,
  details: Schema.optional(Schema.String)
})

// Type extractors
export type CreatePromptRequest = Schema.Schema.Type<typeof CreatePromptRequest>
export type UpdatePromptRequest = Schema.Schema.Type<typeof UpdatePromptRequest>
export type PromptResponse = Prompt
export type PromptsResponse = readonly Prompt[]
export type ErrorResponse = Schema.Schema.Type<typeof ErrorResponse>
