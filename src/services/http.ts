import { Effect } from "effect"
import type { ConfigService } from "./config.ts"
import type { PromptService } from "./prompt.ts"

export const startServer = (promptService: PromptService, config: ConfigService): Effect.Effect<void> =>
  Effect.sync(() => {
    // biome-ignore lint/correctness/noUndeclaredVariables: Bun runtime provides global
    Bun.serve({
      hostname: config.host,
      port: config.port,
      async fetch(req): Promise<Response> {
        const url = new URL(req.url)
        if (url.pathname === "/api/prompts" && req.method === "GET") {
          const prompts = await Effect.runPromise(promptService.list)
          return new Response(JSON.stringify(prompts), { headers: { "Content-Type": "application/json" } })
        }
        return new Response("Not Found", { status: 404 })
      }
    })
  })
