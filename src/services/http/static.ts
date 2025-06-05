import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { HttpServerResponse } from "@effect/platform"
import { Effect } from "effect"
import { HttpError } from "../../errors.ts"
import { ConfigService } from "../config.ts"

// MIME types for common file extensions
const mimeTypes: Record<string, string> = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
}

// Get MIME type from file extension
const getMimeType = (filePath: string): string => {
  const ext = filePath.match(/\.[^.]+$/)?.[0] ?? ""
  return mimeTypes[ext] ?? "application/octet-stream"
}

// Serve static files
export const serveStatic = (
  filePath: string
): Effect.Effect<HttpServerResponse.HttpServerResponse, HttpError, ConfigService> =>
  Effect.gen(function* () {
    const config = yield* ConfigService

    // Security: prevent directory traversal
    if (filePath.includes("..")) {
      return yield* Effect.fail(new HttpError({ statusCode: 403, reason: "Forbidden" }))
    }

    const fullPath = join(config.rootDir, filePath)

    const content = yield* Effect.tryPromise({
      try: () => readFile(fullPath),
      catch: () => new HttpError({ statusCode: 404, reason: "File not found" })
    })

    const mimeType = getMimeType(filePath)

    return yield* HttpServerResponse.raw(content, {
      headers: {
        "content-type": mimeType,
        "cache-control": "public, max-age=3600"
      }
    })
  })
