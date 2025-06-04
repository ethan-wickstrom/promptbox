export type PromptError =
  | { readonly type: "not-found"; readonly id: string }
  | { readonly type: "invalid-input"; readonly reason: string }
