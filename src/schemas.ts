import { Schema } from "@effect/schema"

// Base prompt schema and type
export const PromptSchema = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  content: Schema.String
})
export type Prompt = Schema.Schema.Type<typeof PromptSchema>

// Request schemas
export const CreatePromptRequestSchema = Schema.Struct({
  name: Schema.NonEmptyString,
  content: Schema.NonEmptyString
})
export type CreatePromptRequest = Schema.Schema.Type<typeof CreatePromptRequestSchema>

export const UpdatePromptRequestSchema = CreatePromptRequestSchema
export type UpdatePromptRequest = Schema.Schema.Type<typeof UpdatePromptRequestSchema>

// Response schemas
export const PromptResponseSchema = PromptSchema
export type PromptResponse = Schema.Schema.Type<typeof PromptResponseSchema>

export const PromptsResponseSchema = Schema.Array(PromptResponseSchema)
export type PromptsResponse = Schema.Schema.Type<typeof PromptsResponseSchema>

export const ErrorResponseSchema = Schema.Struct({
  error: Schema.String,
  details: Schema.optional(Schema.String)
})
export type ErrorResponse = Schema.Schema.Type<typeof ErrorResponseSchema>