import { readFileSync } from "node:fs"
import { BunHttpServer } from "@effect/platform-bun"
import { Context, Effect, Layer, pipe } from "effect"
import { HttpError } from "../errors.ts"
import { Router, mapDomainError, toEmptyResponse, toJsonResponse, validatePromptInput } from "../router.ts"
import { ConfigService } from "./config.ts"
import { PromptService } from "./prompt.ts"

// Service type definition
export type HttpService = {
  readonly router: Router<HttpError>
  readonly getUrl: Effect.Effect<string, never>
}

// Context.Tag for dependency injection
export const HttpService = Context.GenericTag<HttpService>("@services/Http")

// Build the HTML response
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

// Create the HTTP service
const makeHttpService = (promptService: PromptService, config: ConfigService): HttpService => {
  // Middleware to add headers
  const addHeadersMiddleware = (_req: Request, next: () => Effect.Effect<Response, HttpError>) =>
    pipe(
      next(),
      Effect.map((response) => {
        response.headers.set("X-Powered-By", "Promptbox")
        return response
      })
    )

  // Create the router with all routes
  const router = new Router<HttpError>()
    .use(addHeadersMiddleware)
    // API Routes
    .get("/api/prompts", ({ query }) =>
      pipe(
        promptService.list,
        Effect.map((prompts) => {
          const limitRaw = query.limit
          if (typeof limitRaw === "string") {
            const limit = Number.parseInt(limitRaw, 10)
            if (!Number.isNaN(limit) && limit >= 0) {
              return prompts.slice(0, limit)
            }
          }
          return prompts
        }),
        toJsonResponse(mapDomainError)
      )
    )
    .post("/api/prompts", validatePromptInput, ({ body }) =>
      pipe(promptService.create(body.name, body.content), toJsonResponse(mapDomainError, 201))
    )
    .get("/api/prompts/:id", ({ params }) => pipe(promptService.getById(params.id), toJsonResponse(mapDomainError)))
    .put("/api/prompts/:id", validatePromptInput, ({ params, body }) =>
      pipe(promptService.update(params.id, body.name, body.content), toJsonResponse(mapDomainError))
    )
    .delete("/api/prompts/:id", ({ params }) => pipe(promptService.delete(params.id), toEmptyResponse(mapDomainError)))
    // Static routes
    .get("/", () =>
      Effect.try({
        try: () => {
          const content = readFileSync("index.html", "utf-8")
          return new Response(content, {
            headers: { "Content-Type": "text/html" }
          })
        },
        catch: () =>
          new HttpError({
            statusCode: 404,
            reason: "Not Found"
          })
      }).pipe(Effect.catchAll((error) => Effect.succeed(new Response(error.reason, { status: error.statusCode }))))
    )
    // Prompt detail page
    .get("/prompt/:id", ({ params }) =>
      pipe(
        promptService.getById(params.id),
        Effect.map((prompt) => {
          const body = `<h1 class="text-2xl mb-4">${prompt.name}</h1><pre class="whitespace-pre-wrap">${prompt.content}</pre>`
          return new Response(buildHtml(body), {
            headers: { "Content-Type": "text/html" }
          })
        }),
        Effect.catchAll(() => Effect.succeed(new Response("Not Found", { status: 404 })))
      )
    )

  const getUrl: Effect.Effect<string, never> = Effect.gen(function* () {
    const port = yield* config.getPort
    const host = yield* config.getHost
    return `http://${host}:${port}`
  })

  return {
    router,
    getUrl
  }
}

// Create the Bun HTTP server
export const createServer = (router: Router<HttpError>, port: number, hostname: string) =>
  BunHttpServer.make({
    port,
    hostname
  })(async (req: Request) => {
    const response = await Effect.runPromise(
      router
        .handle(req)
        .pipe(Effect.catchAll((error) => Effect.succeed(new Response(error.reason, { status: error.statusCode }))))
    )
    return response
  })

// Layer implementation
export const HttpServiceLive = Layer.effect(
  HttpService,
  Effect.gen(function* () {
    const promptService = yield* PromptService
    const config = yield* ConfigService
    return makeHttpService(promptService, config)
  })
)
