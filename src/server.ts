import console from "node:console"
import { serve } from "bun"
import indexPage from "../index.html"
import { createPromptStore } from "./prompts.ts"

const { addPrompt, deletePrompt, getPrompt, listPrompts, updatePrompt, closeDb } = createPromptStore()
export { closeDb }
import type { Server } from "bun"
import { Router, toEmptyResponse, toResponse, validatePromptInput } from "./router.ts"

const buildHtml = (body: string): string => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Promptbox</title>
</head>
<body class="p-4 font-sans">${body}</body>
</html>`

export const createServer = (): Server => {
  const router = new Router()
    .use(async (_req, next) => {
      const res = await next()
      res.headers.set("X-Powered-By", "Promptbox")
      return res
    })
    .get("/api/prompts", ({ query }) => {
      const limitRaw = query.limit
      const prompts = listPrompts()
      if (typeof limitRaw === "string") {
        const limit = Number.parseInt(limitRaw, 10)
        if (!Number.isNaN(limit) && limit >= 0) {
          return Response.json(prompts.slice(0, limit))
        }
      }
      return Response.json(prompts)
    })
    .post("/api/prompts", validatePromptInput, ({ body }) => toResponse(addPrompt(body.name, body.content), 201))
    .get("/api/prompts/:id", ({ params }) => toResponse(getPrompt(params.id)))
    .put("/api/prompts/:id", validatePromptInput, ({ params, body }) =>
      toResponse(updatePrompt(params.id, body.name, body.content))
    )
    .delete("/api/prompts/:id", ({ params }) => toEmptyResponse(deletePrompt(params.id)))

  return serve({
    development: true,
    routes: {
      "/": indexPage,
      "/prompt/:id": (req): Response => {
        const result = getPrompt(req.params.id)
        return result.match(
          (prompt) => {
            const body = `<h1 class="text-2xl mb-4">${prompt.name}</h1><pre class="whitespace-pre-wrap">${prompt.content}</pre>`
            return new Response(buildHtml(body), {
              headers: { "Content-Type": "text/html" }
            })
          },
          () => new Response("Not Found", { status: 404 })
        )
      }
    },
    fetch: (req): Promise<Response> | Response => router.handle(req)
  })
}

if (import.meta.main) {
  const server = createServer()
  console.log(`Server running at ${server.url}`)
}
