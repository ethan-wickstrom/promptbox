Using `Bun.serve()`'s `routes` option, you can run your frontend and backend in the same app with no extra steps.

To get started, import HTML files and pass them to the `routes` option in `Bun.serve()`.

```ts
import { sql, serve } from "bun";
import dashboard from "./dashboard.html";
import homepage from "./index.html";

const server = serve({
  routes: {
    // ** HTML imports **
    // Bundle & route index.html to "/". This uses HTMLRewriter to scan the HTML for `<script>` and `<link>` tags, run's Bun's JavaScript & CSS bundler on them, transpiles any TypeScript, JSX, and TSX, downlevels CSS with Bun's CSS parser and serves the result.
    "/": homepage,
    // Bundle & route dashboard.html to "/dashboard"
    "/dashboard": dashboard,

    // ** API endpoints ** (Bun v1.2.3+ required)
    "/api/users": {
      async GET(req) {
        const users = await sql`SELECT * FROM users`;
        return Response.json(users);
      },
      async POST(req) {
        const { name, email } = await req.json();
        const [user] =
          await sql`INSERT INTO users (name, email) VALUES (${name}, ${email})`;
        return Response.json(user);
      },
    },
    "/api/users/:id": async req => {
      const { id } = req.params;
      const [user] = await sql`SELECT * FROM users WHERE id = ${id}`;
      return Response.json(user);
    },
  },

  // Enable development mode for:
  // - Detailed error messages
  // - Hot reloading (Bun v1.2.3+ required)
  development: true,

  // Prior to v1.2.3, the `fetch` option was used to handle all API requests. It is now optional.
  // async fetch(req) {
  //   // Return 404 for unmatched routes
  //   return new Response("Not Found", { status: 404 });
  // },
});

console.log(`Listening on ${server.url}`);
```

```bash
$ bun run app.ts
```

## HTML imports are routes

The web starts with HTML, and so does Bun's fullstack dev server.

To specify entrypoints to your frontend, import HTML files into your JavaScript/TypeScript/TSX/JSX files.

```ts
import dashboard from "./dashboard.html";

The page primarily documents the Bun-native `Bun.serve` API. Bun also implements [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and the Node.js [`http`](https://nodejs.org/api/http.html) and [`https`](https://nodejs.org/api/https.html) modules.

{% callout %}
These modules have been re-implemented to use Bun's fast internal HTTP infrastructure. Feel free to use these modules directly; frameworks like [Express](https://expressjs.com/) that depend on these modules should work out of the box. For granular compatibility information, see [Runtime > Node.js APIs](https://bun.sh/docs/runtime/nodejs-apis).
{% /callout %}

To start a high-performance HTTP server with a clean API, the recommended approach is [`Bun.serve`](#start-a-server-bun-serve).

## `Bun.serve()`

Use `Bun.serve` to start an HTTP server in Bun.

```ts
Bun.serve({
  // `routes` requires Bun v1.2.3+
  routes: {
    // Static routes
    "/api/status": new Response("OK"),

    // Dynamic routes
    "/users/:id": req => {
      return new Response(`Hello User ${req.params.id}!`);
    },

    // Per-HTTP method handlers
    "/api/posts": {
      GET: () => new Response("List posts"),
      POST: async req => {
        const body = await req.json();
        return Response.json({ created: true, ...body });
      },
    },

    // Wildcard route for all routes that start with "/api/" and aren't otherwise matched
    "/api/*": Response.json({ message: "Not found" }, { status: 404 }),

    // Redirect from /blog/hello to /blog/hello/world
    "/blog/hello": Response.redirect("/blog/hello/world"),

    // Serve a file by buffering it in memory
    "/favicon.ico": new Response(await Bun.file("./favicon.ico").bytes(), {
      headers: {
        "Content-Type": "image/x-icon",
      },
    }),
  },

  // (optional) fallback for unmatched routes:
  // Required if Bun's version < 1.2.3
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});
```

### Routing

Routes in `Bun.serve()` receive a `BunRequest` (which extends [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)) and return a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) or `Promise<Response>`. This makes it easier to use the same code for both sending & receiving HTTP requests.

```ts
// Simplified for brevity
interface BunRequest<T extends string> extends Request {
  params: Record<T, string>;
  readonly cookies: CookieMap;
}
```

#### Async/await in routes

You can use async/await in route handlers to return a `Promise<Response>`.

```ts
import { sql, serve } from "bun";

serve({
  port: 3001,
  routes: {
    "/api/version": async () => {
      const [version] = await sql`SELECT version()`;
      return Response.json(version);
    },
  },
});
```

#### Promise in routes

You can also return a `Promise<Response>` from a route handler.

```ts
import { sql, serve } from "bun";

serve({
  routes: {
    "/api/version": () => {
      return new Promise(resolve => {
        setTimeout(async () => {
          const [version] = await sql`SELECT version()`;
          resolve(Response.json(version));
        }, 100);
      });
    },
  },
});
```

#### Type-safe route parameters

TypeScript parses route parameters when passed as a string literal, so that your editor will show autocomplete when accessing `request.params`.

```ts
import type { BunRequest } from "bun";

Bun.serve({
  routes: {
    // TypeScript knows the shape of params when passed as a string literal
    "/orgs/:orgId/repos/:repoId": req => {
      const { orgId, repoId } = req.params;
      return Response.json({ orgId, repoId });
    },

    "/orgs/:orgId/repos/:repoId/settings": (
      // optional: you can explicitly pass a type to BunRequest:
      req: BunRequest<"/orgs/:orgId/repos/:repoId/settings">,
    ) => {
      const { orgId, repoId } = req.params;
      return Response.json({ orgId, repoId });
    },
  },
});
```

Percent-encoded route parameter values are automatically decoded. Unicode characters are supported. Invalid unicode is replaced with the unicode replacement character `&0xFFFD;`.

### Static responses

Routes can also be `Response` objects (without the handler function). Bun.serve() optimizes it for zero-allocation dispatch - perfect for health checks, redirects, and fixed content:

```ts
Bun.serve({
  routes: {
    // Health checks
    "/health": new Response("OK"),
    "/ready": new Response("Ready", {
      headers: {
        // Pass custom headers
        "X-Ready": "1",
      },
    }),

    // Redirects
    "/blog": Response.redirect("https://bun.sh/blog"),

    // API responses
    "/api/config": Response.json({
      version: "1.0.0",
      env: "production",
    }),
  },
});
```

Static responses do not allocate additional memory after initialization. You can generally expect at least a 15% performance improvement over manually returning a `Response` object.

Static route responses are cached for the lifetime of the server object. To reload static routes, call `server.reload(options)`.

```ts
const server = Bun.serve({
  static: {
    "/api/time": new Response(new Date().toISOString()),
  },

  fetch(req) {
    return new Response("404!");
  },
});

// Update the time every second.
setInterval(() => {
  server.reload({
    static: {
      "/api/time": new Response(new Date().toISOString()),
    },

    fetch(req) {
      return new Response("404!");
    },
  });
}, 1000);
```

Reloading routes only impact the next request. In-flight requests continue to use the old routes. After in-flight requests to old routes are finished, the old routes are freed from memory.

To simplify error handling, static routes do not support streaming response bodies from `ReadableStream` or an `AsyncIterator`. Fortunately, you can still buffer the response in memory first:

```ts
const time = await fetch("https://api.example.com/v1/data");
// Buffer the response in memory first.
const blob = await time.blob();

const server = Bun.serve({
  static: {
    "/api/data": new Response(blob),
  },

  fetch(req) {
    return new Response("404!");
  },
});
```

### Route precedence

Routes are matched in order of specificity:

1. Exact routes (`/users/all`)
2. Parameter routes (`/users/:id`)
3. Wildcard routes (`/users/*`)
4. Global catch-all (`/*`)

```ts
Bun.serve({
  routes: {
    // Most specific first
    "/api/users/me": () => new Response("Current user"),
    "/api/users/:id": req => new Response(`User ${req.params.id}`),
    "/api/*": () => new Response("API catch-all"),
    "/*": () => new Response("Global catch-all"),
  },
});
```

### Per-HTTP Method Routes

Route handlers can be specialized by HTTP method:

```ts
Bun.serve({
  routes: {
    "/api/posts": {
      // Different handlers per method
      GET: () => new Response("List posts"),
      POST: async req => {
        const post = await req.json();
        return Response.json({ id: crypto.randomUUID(), ...post });
      },
      PUT: async req => {
        const updates = await req.json();
        return Response.json({ updated: true, ...updates });
      },
      DELETE: () => new Response(null, { status: 204 }),
    },
  },
});
```

You can pass any of the following methods:

| Method    | Usecase example                 |
| --------- | ------------------------------- |
| `GET`     | Fetch a resource                |
| `HEAD`    | Check if a resource exists      |
| `OPTIONS` | Get allowed HTTP methods (CORS) |
| `DELETE`  | Delete a resource               |
| `PATCH`   | Update a resource               |
| `POST`    | Create a resource               |
| `PUT`     | Update a resource               |

When passing a function instead of an object, all methods will be handled by that function:

```ts
const server = Bun.serve({
  routes: {
    "/api/version": () => Response.json({ version: "1.0.0" }),
  },
});

await fetch(new URL("/api/version", server.url));
await fetch(new URL("/api/version", server.url), { method: "PUT" });
// ... etc
```

### Hot Route Reloading

Update routes without server restarts using `server.reload()`:

```ts
const server = Bun.serve({
  routes: {
    "/api/version": () => Response.json({ version: "1.0.0" }),
  },
});

// Deploy new routes without downtime
server.reload({
  routes: {
    "/api/version": () => Response.json({ version: "2.0.0" }),
  },
});
```

### Error Handling

Bun provides structured error handling for routes:

```ts
Bun.serve({
  routes: {
    // Errors are caught automatically
    "/api/risky": () => {
      throw new Error("Something went wrong");
    },
  },
  // Global error handler
  error(error) {
    console.error(error);
    return new Response(`Internal Error: ${error.message}`, {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  },
});
```

### HTML imports

To add a client-side single-page app, you can use an HTML import:

```ts
import myReactSinglePageApp from "./index.html";

Bun.serve({
  routes: {
    "/": myReactSinglePageApp,
  },
});
```

HTML imports don't just serve HTML. It's a full-featured frontend bundler, transpiler, and toolkit built using Bun's [bundler](https://bun.sh/docs/bundler), JavaScript transpiler and CSS parser.

You can use this to build a full-featured frontend with React, TypeScript, Tailwind CSS, and more. Check out [/docs/bundler/fullstack](https://bun.sh/docs/bundler/fullstack) to learn more.

### Practical example: REST API

Here's a basic database-backed REST API using Bun's router with zero dependencies:

{% codetabs %}

```ts#server.ts
import type { Post } from "./types.ts";
import { Database } from "bun:sqlite";

const db = new Database("posts.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL
  )
`);

Bun.serve({
  routes: {
    // List posts
    "/api/posts": {
      GET: () => {
        const posts = db.query("SELECT * FROM posts").all();
        return Response.json(posts);
      },

      // Create post
      POST: async req => {
        const post: Omit<Post, "id" | "created_at"> = await req.json();
        const id = crypto.randomUUID();

        db.query(
          `INSERT INTO posts (id, title, content, created_at)
           VALUES (?, ?, ?, ?)`,
        ).run(id, post.title, post.content, new Date().toISOString());

        return Response.json({ id, ...post }, { status: 201 });
      },
    },

    // Get post by ID
    "/api/posts/:id": req => {
      const post = db
        .query("SELECT * FROM posts WHERE id = ?")
        .get(req.params.id);

      if (!post) {
        return new Response("Not Found", { status: 404 });
      }

      return Response.json(post);
    },
  },

  error(error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  },
});
```

```ts#types.ts
export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
}
```

{% /codetabs %}

### Routing performance

`Bun.serve()`'s router builds on top uWebSocket's [tree-based approach](https://github.com/oven-sh/bun/blob/0d1a00fa0f7830f8ecd99c027fce8096c9d459b6/packages/bun-uws/src/HttpRouter.h#L57-L64) to add [SIMD-accelerated route parameter decoding](https://github.com/oven-sh/bun/blob/main/src/bun.js/bindings/decodeURIComponentSIMD.cpp#L21-L271) and [JavaScriptCore structure caching](https://github.com/oven-sh/bun/blob/main/src/bun.js/bindings/ServerRouteList.cpp#L100-L101) to push the performance limits of what modern hardware allows.

### `fetch` request handler

The `fetch` handler handles incoming requests that weren't matched by any route. It receives a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object and returns a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) or [`Promise<Response>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

```ts
Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
});
```

The `fetch` handler supports async/await:

```ts
import { sleep, serve } from "bun";
serve({
  async fetch(req) {
    const start = performance.now();
    await sleep(10);
    const end = performance.now();
    return new Response(`Slept for ${end - start}ms`);
  },
});
```

Promise-based responses are also supported:

```ts
Bun.serve({
  fetch(req) {
    // Forward the request to another server.
    return fetch("https://example.com");
  },
});
```

You can also access the `Server` object from the `fetch` handler. It's the second argument passed to the `fetch` function.

```ts
// `server` is passed in as the second argument to `fetch`.
const server = Bun.serve({
  fetch(req, server) {
    const ip = server.requestIP(req);
    return new Response(`Your IP is ${ip}`);
  },
});
```

### Changing the `port` and `hostname`

To configure which port and hostname the server will listen on, set `port` and `hostname` in the options object.

```ts
Bun.serve({
  port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
  hostname: "mydomain.com", // defaults to "0.0.0.0"
  fetch(req) {
    return new Response("404!");
  },
});
```

To randomly select an available port, set `port` to `0`.

```ts
const server = Bun.serve({
  port: 0, // random port
  fetch(req) {
    return new Response("404!");
  },
});

// server.port is the randomly selected port
console.log(server.port);
```

You can view the chosen port by accessing the `port` property on the server object, or by accessing the `url` property.

```ts
console.log(server.port); // 3000
console.log(server.url); // http://localhost:3000
```

#### Configuring a default port

Bun supports several options and environment variables to configure the default port. The default port is used when the `port` option is not set.

- `--port` CLI flag

```sh
$ bun --port=4002 server.ts
```

- `BUN_PORT` environment variable

```sh
$ BUN_PORT=4002 bun server.ts
```

- `PORT` environment variable

```sh
$ PORT=4002 bun server.ts
```

- `NODE_PORT` environment variable

```sh
$ NODE_PORT=4002 bun server.ts
```

### Unix domain sockets

To listen on a [unix domain socket](https://en.wikipedia.org/wiki/Unix_domain_socket), pass the `unix` option with the path to the socket.

```ts
Bun.serve({
  unix: "/tmp/my-socket.sock", // path to socket
  fetch(req) {
    return new Response(`404!`);
  },
});
```

### Abstract namespace sockets

Bun supports Linux abstract namespace sockets. To use an abstract namespace socket, prefix the `unix` path with a null byte.

```ts
Bun.serve({
  unix: "\0my-abstract-socket", // abstract namespace socket
  fetch(req) {
    return new Response(`404!`);
  },
});
```

Unlike unix domain sockets, abstract namespace sockets are not bound to the filesystem and are automatically removed when the last reference to the socket is closed.

## Error handling

To activate development mode, set `development: true`.

```ts
Bun.serve({
  development: true,
  fetch(req) {
    throw new Error("woops!");
  },
});
```

In development mode, Bun will surface errors in-browser with a built-in error page.

{% image src="/images/exception_page.png" caption="Bun's built-in 500 page" /%}

### `error` callback

To handle server-side errors, implement an `error` handler. This function should return a `Response` to serve to the client when an error occurs. This response will supersede Bun's default error page in `development` mode.

```ts
Bun.serve({
  fetch(req) {
    throw new Error("woops!");
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});
```

{% callout %}
[Learn more about debugging in Bun](https://bun.sh/docs/runtime/debugger)
{% /callout %}

The call to `Bun.serve` returns a `Server` object. To stop the server, call the `.stop()` method.

```ts
const server = Bun.serve({
  fetch() {
    return new Response("Bun!");
  },
});

server.stop();
```

## TLS

Bun supports TLS out of the box, powered by [BoringSSL](https://boringssl.googlesource.com/boringssl). Enable TLS by passing in a value for `key` and `cert`; both are required to enable TLS.

```ts-diff
  Bun.serve({
    fetch(req) {
      return new Response("Hello!!!");
    },

+   tls: {
+     key: Bun.file("./key.pem"),
+     cert: Bun.file("./cert.pem"),
+   }
  });
```

The `key` and `cert` fields expect the _contents_ of your TLS key and certificate, _not a path to it_. This can be a string, `BunFile`, `TypedArray`, or `Buffer`.

```ts
Bun.serve({
  fetch() {},

  tls: {
    // BunFile
    key: Bun.file("./key.pem"),
    // Buffer
    key: fs.readFileSync("./key.pem"),
    // string
    key: fs.readFileSync("./key.pem", "utf8"),
    // array of above
    key: [Bun.file("./key1.pem"), Bun.file("./key2.pem")],
  },
});
```

If your private key is encrypted with a passphrase, provide a value for `passphrase` to decrypt it.

```ts-diff
  Bun.serve({
    fetch(req) {
      return new Response("Hello!!!");
    },

    tls: {
      key: Bun.file("./key.pem"),
      cert: Bun.file("./cert.pem"),
+     passphrase: "my-secret-passphrase",
    }
  });
```

Optionally, you can override the trusted CA certificates by passing a value for `ca`. By default, the server will trust the list of well-known CAs curated by Mozilla. When `ca` is specified, the Mozilla list is overwritten.

```ts-diff
  Bun.serve({
    fetch(req) {
      return new Response("Hello!!!");
    },
    tls: {
      key: Bun.file("./key.pem"), // path to TLS key
      cert: Bun.file("./cert.pem"), // path to TLS cert
+     ca: Bun.file("./ca.pem"), // path to root CA certificate
    }
  });
```

To override Diffie-Hellman parameters:

```ts
Bun.serve({
  // ...
  tls: {
    // other config
    dhParamsFile: "/path/to/dhparams.pem", // path to Diffie Hellman parameters
  },
});
```

### Server name indication (SNI)

To configure the server name indication (SNI) for the server, set the `serverName` field in the `tls` object.

```ts
Bun.serve({
  // ...
  tls: {
    // ... other config
    serverName: "my-server.com", // SNI
  },
});
```

To allow multiple server names, pass an array of objects to `tls`, each with a `serverName` field.

```ts
Bun.serve({
  // ...
  tls: [
    {
      key: Bun.file("./key1.pem"),
      cert: Bun.file("./cert1.pem"),
      serverName: "my-server1.com",
    },
    {
      key: Bun.file("./key2.pem"),
      cert: Bun.file("./cert2.pem"),
      serverName: "my-server2.com",
    },
  ],
});
```

## idleTimeout

To configure the idle timeout, set the `idleTimeout` field in Bun.serve.

```ts
Bun.serve({
  // 10 seconds:
  idleTimeout: 10,

  fetch(req) {
    return new Response("Bun!");
  },
});
```

This is the maximum amount of time a connection is allowed to be idle before the server closes it. A connection is idling if there is no data sent or received.

## export default syntax

Thus far, the examples on this page have used the explicit `Bun.serve` API. Bun also supports an alternate syntax.

```ts#server.ts
import {type Serve} from "bun";

export default {
  fetch(req) {
    return new Response("Bun!");
  },
} satisfies Serve;
```

Instead of passing the server options into `Bun.serve`, `export default` it. This file can be executed as-is; when Bun sees a file with a `default` export containing a `fetch` handler, it passes it into `Bun.serve` under the hood.

<!-- This syntax has one major advantage: it is hot-reloadable out of the box. When any source file is changed, Bun will reload the server with the updated code _without restarting the process_. This makes hot reloads nearly instantaneous. Use the `--hot` flag when starting the server to enable hot reloading. -->

<!-- ```bash
$ bun --hot server.ts
``` -->

<!-- It's possible to configure hot reloading while using the explicit `Bun.serve` API; for details refer to [Runtime > Hot reloading](https://bun.sh/docs/runtime/hot). -->

## Streaming files

To stream a file, return a `Response` object with a `BunFile` object as the body.

```ts
Bun.serve({
  fetch(req) {
    return new Response(Bun.file("./hello.txt"));
  },
});
```

{% callout %}
⚡️ **Speed** — Bun automatically uses the [`sendfile(2)`](https://man7.org/linux/man-pages/man2/sendfile.2.html) system call when possible, enabling zero-copy file transfers in the kernel—the fastest way to send files.
{% /callout %}

You can send part of a file using the [`slice(start, end)`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice) method on the `Bun.file` object. This automatically sets the `Content-Range` and `Content-Length` headers on the `Response` object.

```ts
Bun.serve({
  fetch(req) {
    // parse `Range` header
    const [start = 0, end = Infinity] = req.headers
      .get("Range") // Range: bytes=0-100
      .split("=") // ["Range: bytes", "0-100"]
      .at(-1) // "0-100"
      .split("-") // ["0", "100"]
      .map(Number); // [0, 100]

    // return a slice of the file
    const bigFile = Bun.file("./big-video.mp4");
    return new Response(bigFile.slice(start, end));
  },
});
```

## Server Lifecycle Methods

### server.stop() - Stop the server

To stop the server from accepting new connections:

```ts
const server = Bun.serve({
  fetch(req) {
    return new Response("Hello!");
  },
});

// Gracefully stop the server (waits for in-flight requests)
await server.stop();

// Force stop and close all active connections
await server.stop(true);
```

By default, `stop()` allows in-flight requests and WebSocket connections to complete. Pass `true` to immediately terminate all connections.

### server.ref() and server.unref() - Process lifecycle control

Control whether the server keeps the Bun process alive:

```ts
// Don't keep process alive if server is the only thing running
server.unref();

// Restore default behavior - keep process alive
server.ref();
```

### server.reload() - Hot reload handlers

Update the server's handlers without restarting:

```ts
const server = Bun.serve({
  routes: {
    "/api/version": Response.json({ version: "v1" }),
  },
  fetch(req) {
    return new Response("v1");
  },
});

// Update to new handler
server.reload({
  routes: {
    "/api/version": Response.json({ version: "v2" }),
  },
  fetch(req) {
    return new Response("v2");
  },
});
```

This is useful for development and hot reloading. Only `fetch`, `error`, and `routes` can be updated.

## Per-Request Controls

<!-- ### server.abort(Request) - Abort requests

The `server.abort(request: Request)` method:

- Returns `true` if request was aborted, `false` if already aborted/completed
- Triggers the request's `AbortSignal`
- Cancels any attached `ReadableStream`
- Rejects any pending body promises (like `.text()`)

```ts
const server = Bun.serve({
  fetch(req, server) {
    // abort if the url contains "slow"
    if (req.url.includes("slow")) {
      server.abort(req);

      // When aborted, the server will not error due to the lack of a `Response` object
      // If you return a `Response` anyway, it will be ignored.
      return;
    }

    return new Response("Processing...");
  },
});
``` -->

### server.timeout(Request, seconds) - Custom request timeouts

Set a custom idle timeout for individual requests:

```ts
const server = Bun.serve({
  fetch(req, server) {
    // Set 60 second timeout for this request
    server.timeout(req, 60);

    // If they take longer than 60 seconds to send the body, the request will be aborted
    await req.text();

    return new Response("Done!");
  },
});
```

Pass `0` to disable the timeout for a request.

### server.requestIP(Request) - Get client information

Get client IP and port information:

```ts
const server = Bun.serve({
  fetch(req, server) {
    const address = server.requestIP(req);
    if (address) {
      return new Response(
        `Client IP: ${address.address}, Port: ${address.port}`,
      );
    }
    return new Response("Unknown client");
  },
});
```

Returns `null` for closed requests or Unix domain sockets.

## Working with Cookies

Bun provides a built-in API for working with cookies in HTTP requests and responses. The `BunRequest` object includes a `cookies` property that provides a `CookieMap` for easily accessing and manipulating cookies. When using `routes`, `Bun.serve()` automatically tracks `request.cookies.set` and applies them to the response.

### Reading cookies

Read cookies from incoming requests using the `cookies` property on the `BunRequest` object:

```ts
Bun.serve({
  routes: {
    "/profile": req => {
      // Access cookies from the request
      const userId = req.cookies.get("user_id");
      const theme = req.cookies.get("theme") || "light";

      return Response.json({
        userId,
        theme,
        message: "Profile page",
      });
    },
  },
});
```

### Setting cookies

To set cookies, use the `set` method on the `CookieMap` from the `BunRequest` object.

```ts
Bun.serve({
  routes: {
    "/login": req => {
      const cookies = req.cookies;

      // Set a cookie with various options
      cookies.set("user_id", "12345", {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        httpOnly: true,
        secure: true,
        path: "/",
      });

      // Add a theme preference cookie
      cookies.set("theme", "dark");

      // Modified cookies from the request are automatically applied to the response
      return new Response("Login successful");
    },
  },
});
```

`Bun.serve()` automatically tracks modified cookies from the request and applies them to the response.

### Deleting cookies

To delete a cookie, use the `delete` method on the `request.cookies` (`CookieMap`) object:

```ts
Bun.serve({
  routes: {
    "/logout": req => {
      // Delete the user_id cookie
      req.cookies.delete("user_id", {
        path: "/",
      });

      return new Response("Logged out successfully");
    },
  },
});
```

Deleted cookies become a `Set-Cookie` header on the response with the `maxAge` set to `0` and an empty `value`.

## Server Metrics

### server.pendingRequests and server.pendingWebSockets

Monitor server activity with built-in counters:

```ts
const server = Bun.serve({
  fetch(req, server) {
    return new Response(
      `Active requests: ${server.pendingRequests}\n` +
        `Active WebSockets: ${server.pendingWebSockets}`,
    );
  },
});
```

### server.subscriberCount(topic) - WebSocket subscribers

Get count of subscribers for a WebSocket topic:

```ts
const server = Bun.serve({
  fetch(req, server) {
    const chatUsers = server.subscriberCount("chat");
    return new Response(`${chatUsers} users in chat`);
  },
  websocket: {
    message(ws) {
      ws.subscribe("chat");
    },
  },
});
```

## WebSocket Configuration

### server.publish(topic, data, compress) - WebSocket Message Publishing

The server can publish messages to all WebSocket clients subscribed to a topic:

```ts
const server = Bun.serve({
  websocket: {
    message(ws) {
      // Publish to all "chat" subscribers
      server.publish("chat", "Hello everyone!");
    },
  },

  fetch(req) {
    // ...
  },
});
```

The `publish()` method returns:

- Number of bytes sent if successful
- `0` if the message was dropped
- `-1` if backpressure was applied

### WebSocket Handler Options

When configuring WebSockets, several advanced options are available through the `websocket` handler:

```ts
Bun.serve({
  websocket: {
    // Maximum message size (in bytes)
    maxPayloadLength: 64 * 1024,

    // Backpressure limit before messages are dropped
    backpressureLimit: 1024 * 1024,

    // Close connection if backpressure limit is hit
    closeOnBackpressureLimit: true,

    // Handler called when backpressure is relieved
    drain(ws) {
      console.log("Backpressure relieved");
    },

    // Enable per-message deflate compression
    perMessageDeflate: {
      compress: true,
      decompress: true,
    },

    // Send ping frames to keep connection alive
    sendPings: true,

    // Handlers for ping/pong frames
    ping(ws, data) {
      console.log("Received ping");
    },
    pong(ws, data) {
      console.log("Received pong");
    },

    // Whether server receives its own published messages
    publishToSelf: false,
  },
});
```

## Benchmarks

Below are Bun and Node.js implementations of a simple HTTP server that responds `Bun!` to each incoming `Request`.

{% codetabs %}

```ts#Bun
Bun.serve({
  fetch(req: Request) {
    return new Response("Bun!");
  },
  port: 3000,
});
```

```ts#Node
require("http")
  .createServer((req, res) => res.end("Bun!"))
  .listen(8080);
```

{% /codetabs %}
The `Bun.serve` server can handle roughly 2.5x more requests per second than Node.js on Linux.

{% table %}

- Runtime
- Requests per second

---

- Node 16
- ~64,000

---

- Bun
- ~160,000

{% /table %}

{% image width="499" alt="image" src="https://user-images.githubusercontent.com/709451/162389032-fc302444-9d03-46be-ba87-c12bd8ce89a0.png" /%}

## Reference

{% details summary="See TypeScript definitions" %}

```ts
interface Server extends Disposable {
  /**
   * Stop the server from accepting new connections.
   * @param closeActiveConnections If true, immediately terminates all connections
   * @returns Promise that resolves when the server has stopped
   */
  stop(closeActiveConnections?: boolean): Promise<void>;

  /**
   * Update handlers without restarting the server.
   * Only fetch and error handlers can be updated.
   */
  reload(options: Serve): void;

  /**
   * Make a request to the running server.
   * Useful for testing or internal routing.
   */
  fetch(request: Request | string): Response | Promise<Response>;

  /**
   * Upgrade an HTTP request to a WebSocket connection.
   * @returns true if upgrade successful, false if failed
   */
  upgrade<T = undefined>(
    request: Request,
    options?: {
      headers?: Bun.HeadersInit;
      data?: T;
    },
  ): boolean;

  /**
   * Publish a message to all WebSocket clients subscribed to a topic.
   * @returns Bytes sent, 0 if dropped, -1 if backpressure applied
   */
  publish(
    topic: string,
    data: string | ArrayBufferView | ArrayBuffer | SharedArrayBuffer,
    compress?: boolean,
  ): ServerWebSocketSendStatus;

  /**
   * Get count of WebSocket clients subscribed to a topic.
   */
  subscriberCount(topic: string): number;

  /**
   * Get client IP address and port.
   * @returns null for closed requests or Unix sockets
   */
  requestIP(request: Request): SocketAddress | null;

  /**
   * Set custom idle timeout for a request.
   * @param seconds Timeout in seconds, 0 to disable
   */
  timeout(request: Request, seconds: number): void;

  /**
   * Keep process alive while server is running.
   */
  ref(): void;

  /**
   * Allow process to exit if server is only thing running.
   */
  unref(): void;

  /** Number of in-flight HTTP requests */
  readonly pendingRequests: number;

  /** Number of active WebSocket connections */
  readonly pendingWebSockets: number;

  /** Server URL including protocol, hostname and port */
  readonly url: URL;

  /** Port server is listening on */
  readonly port: number;

  /** Hostname server is bound to */
  readonly hostname: string;

  /** Whether server is in development mode */
  readonly development: boolean;

  /** Server instance identifier */
  readonly id: string;
}

interface WebSocketHandler<T = undefined> {
  /** Maximum WebSocket message size in bytes */
  maxPayloadLength?: number;

  /** Bytes of queued messages before applying backpressure */
  backpressureLimit?: number;

  /** Whether to close connection when backpressure limit hit */
  closeOnBackpressureLimit?: boolean;

  /** Called when backpressure is relieved */
  drain?(ws: ServerWebSocket<T>): void | Promise<void>;

  /** Seconds before idle timeout */
  idleTimeout?: number;

  /** Enable per-message deflate compression */
  perMessageDeflate?:
    | boolean
    | {
        compress?: WebSocketCompressor | boolean;
        decompress?: WebSocketCompressor | boolean;
      };

  /** Send ping frames to keep connection alive */
  sendPings?: boolean;

  /** Whether server receives its own published messages */
  publishToSelf?: boolean;

  /** Called when connection opened */
  open?(ws: ServerWebSocket<T>): void | Promise<void>;

  /** Called when message received */
  message(
    ws: ServerWebSocket<T>,
    message: string | Buffer,
  ): void | Promise<void>;

  /** Called when connection closed */
  close?(
    ws: ServerWebSocket<T>,
    code: number,
    reason: string,
  ): void | Promise<void>;

  /** Called when ping frame received */
  ping?(ws: ServerWebSocket<T>, data: Buffer): void | Promise<void>;

  /** Called when pong frame received */
  pong?(ws: ServerWebSocket<T>, data: Buffer): void | Promise<void>;
}

interface TLSOptions {
  /** Certificate authority chain */
  ca?: string | Buffer | BunFile | Array<string | Buffer | BunFile>;

  /** Server certificate */
  cert?: string | Buffer | BunFile | Array<string | Buffer | BunFile>;

  /** Path to DH parameters file */
  dhParamsFile?: string;

  /** Private key */
  key?: string | Buffer | BunFile | Array<string | Buffer | BunFile>;

  /** Reduce TLS memory usage */
  lowMemoryMode?: boolean;

  /** Private key passphrase */
  passphrase?: string;

  /** OpenSSL options flags */
  secureOptions?: number;

  /** Server name for SNI */
  serverName?: string;
}
```

{% /details %}

# TASK

Improve all code. Your original version was far too simple.

## CORE PRINCIPLES

- You are thoughtful, give nuanced answers, and are brilliant at reasoning. You carefully provide accurate, factual, thoughtful answers, and are a genius at reasoning
- When answering questions, consider practical aspects and theoretical aspects: hold expertise in type-theory, category theory, etc. However, consider practical programming: hold expertise in design patterns, functional programming, object-oriented programming, stateless patterns
- Hold an intense preference and opinion for clean programming and design patterns
- Follow the user's requirements carefully & to the letter
- First think step-by-step - describe your plan for what to build in pseudocode, written out in great detail
- Confirm, then write code!
- Always write correct, best practice, DRY principle (Dont Repeat Yourself), bug free, fully functional and working code aligned to listed rules
- Focus on easy and readable code, over being performant
- Fully implement all requested functionality
- Leave NO todo's, placeholders or missing pieces
- Ensure code is complete! Verify thoroughly finalized
- Include all required imports, and ensure proper naming of key components
- Be concise. Minimize any other prose
- If you think there might not be a correct answer, you say so
- If you do not know the answer, say so, instead of guessing

## EXECUTION PHILOSOPHY

- Obsess over the problem. Integrate all knowledge
- Do not expand scope. Solve optimally
- Use what works, not templates
- Interrogate decisions and pursue improvements
- ALWAYS use strictly enforced static typing for all variables, parameters, and return values; prohibit any form of dynamic or untyped constructs (e.g., never use `any`, `unknown`, or `object`)
- Build with complete clarity, predictability, and maintainability across the entire codebase
- Use the best design patterns
- Use the best programming principles
- Prioritize UX and DX first-and-foremost
- UX & DX design and engineering → system architecture
- Recognize that its code will end up in production, so it must be correct and robust
- Never start with the systems architecture when building an API
- Start by designing the ideal syntax, and work your way backwards
- Prioritize DX and consumer ergonomics because it's the most important thing when it comes to API, library & frameworks design
- Relentlessly center all efforts on comprehensively understanding the *actual* user or business problem before touching code, exhausting every relevant domain, product, and technical source until the mental model is complete and shared
- Guard scope with discipline: after the smallest viable problem statement is agreed, resist feature-creep and deliver the simplest solution that fully satisfies the explicit acceptance criteria
- Select techniques and libraries because empirical evidence shows they solve *this* class of problem well; never select techniques and libraries because of popularity, fashion, templates, or "standard practice"
- Make every design and implementation choice explicit: list alternatives, articulate trade-offs (performance, complexity, risk, cost), and iterate whenever any new context appears to maximize long-term value
- Enforce compile-time and static (plus dependent typing any time possible) for **every** variable, parameter, and return type so that impossible states are unrepresentable; forbid dynamic, inferred, or untyped constructs to preempt whole classes of runtime defects
- Write code that a future maintainer understands at a glance—intent-revealing names, deterministic behavior, exhaustive automated tests, and living architecture documentation that stays synchronized with reality
- Apply design patterns *only* when their problem-solution fit is proven; record why each was chosen, how it mitigates specific risks, and when it should be revisited or retired
- Ground decisions in foundational engineering principles (SOLID, KISS, YAGNI, DRY, etc.), explicitly documenting how each principle shapes the codebase's structure and evolution
- Treat user experience (UX) **and** developer experience (DX) as first-class, measurable requirements; continuously test and refine them because adoption and retention depend on usability
- Let UX & DX insights flow forward into system architecture: interface design informs service boundaries, data models, and deployment topology—not the other way around
- Assume every line will ship to production tomorrow: favor deterministic algorithms, defensive coding, graceful degradation paths, and built-in observability hooks
- When building an API, *never* sketch services first; derive architecture from the ideal, ergonomic, version-stable interface that consumers will call
- Start by writing a "perfect-world" usage example in the target language, then work backwards to types, modules, protocols, and infrastructure that realize that syntax
- Continuously optimize DX ergonomics to ensure clear error messages, minimal boilerplate, intelligent defaults, and exhaustive docs—because an API, library, or framework ultimately lives or dies on how effortlessly others can adopt and extend it

### Outside-In Design Methodology

This top-down approach, fundamentally, means starting with the outermost layer: the *experience* of the person or system *using* what you're building – and progressively working your way inwards towards the implementation details.

Designing software "from the outside-in" can be visualized like designing a car starting with the driver's seat, steering wheel, pedals, and dashboard—where user experience guides the entire build. You first perfect *how it feels to drive* and *interact* with the car. What controls are needed? Where should they be? How should they respond? Only *after* defining that ideal user experience do you figure out the engine, transmission, and chassis required to make that experience real.

In contrast, a "bottom-up" approach starts with internal components—like selecting an engine first, then building around it—leading to systems that, although powerful, may become awkward or unintuitive because they weren't designed with user experience as the central focus.

In the context of your API/project methodology:
1. **Start with the Destination (The "Perfect-World" Usage):** You've already written the ideal code snippet showing how someone *consumes* your API or uses your library. This is your destination, your blueprint for the user experience
2. **Define the Interface Layer:** Based *only* on that usage example, define the necessary public functions, classes, types, and data structures. What signatures must exist for that example code to even compile or be valid? This forms the explicit contract with the outside world. Rigorously type everything at this boundary
3. **Implement the Core Logic (One Level Down):** Now, implement the logic *immediately behind* that public interface. What do those public functions need to *do*? They might orchestrate calls to other, currently non-existent, internal modules or services. Sketch out *those* internal interfaces next
4. **Recurse Inward:** Continue this process layer by layer. Each layer's implementation defines the requirements (the "API") for the layer beneath it. You're constantly asking, "To fulfill *this* contract, what collaborators do I need, and what contract do *they* need to fulfill?"
5. **Reach the Foundation:** Eventually, you'll reach the point where you need to interact with databases, external services, or the underlying platform infrastructure. These are the final layers, implemented only to support the requirements derived from the layers above

### Delivery Commitment

When you take on a request, you commit to **shipping a working, complexity‑crushing prototype whose entire source compiles, runs, and teaches.** No half‑implemented stubs, no hidden globals, no missing edge‑case handling. Just runnable, readable, reasoned‑about code—delivered before most teams finish their sprint planning.

ALWAYS implement EVERY SINGLE part of the solution with ZERO placeholder code, ZERO unfinished functions, and ZERO empty stubs anywhere in the implementation—show me the COMPLETE, FINAL, WORKING codebase.

When given a problem, focus solely on it. Do not add unnecessary features. Solve it profoundly, eliminating friction and future issues. Think like a failure tester: find inefficiencies, edge cases, and assumptions. Break your work and seek better solutions.

## LANGUAGE & DOCUMENTATION

- Use English for all code and documentation
- Use JSDoc to document public classes and methods

## CODE STYLE & STRUCTURE

### General Rules
- Use early returns whenever possible to make the code more readable
- Always use Tailwind classes for styling HTML elements; avoid using CSS or tags
- Use "class:" instead of the tertiary operator in class tags whenever possible
- Don't leave blank lines within a function
- One export per file
- Use 2 spaces for indentation
- Debug, refactor, and fix technical debt as soon as you see it
- Always question if there's a root problem or root cause for everything

### Naming Conventions
- Use PascalCase for classes
- Use camelCase for variables, functions, and methods
- Use kebab-case for file and directory names
- Use UPPERCASE for environment variables
- Use snake_case for databases
- Use SCREAMING_SNAKE_CASE for constants
- Use descriptive variable and function/const names
- Event functions should be named with a "handle" prefix, like "handleClick" for onClick and "handleKeyDown" for onKeyDown
- Start each function with a verb
- Use verbs for boolean variables. Example: isLoading, hasError, canDelete, etc
- Use complete words instead of abbreviations and correct spelling
  - Except for standard abbreviations like API, URL, etc
  - Except for well-known abbreviations:
    - i, j for loops
    - err for errors
    - ctx for contexts
    - req, res, next for middleware function parameters
- Avoid magic numbers and define constants

### Accessibility
- Implement accessibility features on elements. For example, a tag should have a tabindex="0", aria-label, on:click, and on:keydown, and similar attributes

## FUNCTIONS

- In this context, what is understood as a function will also apply to a method
- Write short functions with a single purpose. Less than 20 instructions
- Use consts instead of functions, for example, "const toggle = () =>". Also, define a type if possible
- Always declare the type of each variable and function (parameters and return value)
  - Avoid using any; this is strictly forbidden
  - Create necessary types
- Name functions with a verb and something else
  - If it returns a boolean, use isX or hasX, canX, etc
  - If it doesn't return anything, use executeX or saveX, etc
- Avoid nesting blocks by:
  - Early checks and returns
  - Extraction to utility functions
- Use higher-order functions (map, filter, reduce, etc.) to avoid function nesting
  - Use arrow functions for simple functions (less than 3 instructions)
  - Use named functions for non-simple functions
- Use default parameter values instead of checking for null or undefined
- Reduce function parameters using RO-RO
  - Use an object to pass multiple parameters
  - Use an object to return results
  - Declare necessary types for input arguments and output
- Use a single level of abstraction

## DATA

- Don't abuse primitive types and encapsulate data in composite types
- Avoid data validations in functions and use classes with internal validation
- Prefer immutability for data
  - Use readonly for data that doesn't change
  - Use as const for literals that don't change

## CLASSES

- Follow SOLID principles
- Prefer composition over inheritance
- Declare interfaces to define contracts
- Write small classes with a single purpose
  - Less than 200 instructions
  - Less than 10 public methods
  - Less than 10 properties

## EXCEPTIONS

- Use exceptions to handle errors you don't expect
- If you catch an exception, it should be to:
  - Fix an expected problem
  - Add context
  - Otherwise, use a global handler

## TYPESCRIPT TYPING

Adopt these opinionated guidelines for writing robust, maintainable, and type-safe TypeScript code. Prioritize immutability, explicitness, and strong type safety to prevent bugs, improve code clarity, and enhance long-term maintainability. Follow these principles consistently to create reliable TypeScript codebases.

### Core Type Definition Principles

- Always define types using the `type` keyword; never use `interface`
  - Provides greater flexibility with unions (`|`) and intersections (`&`)
  - Prevents accidental declaration merging
  - Ensures more consistent syntax for type composition
  - Eliminates cognitive overhead of choosing between `type` and `interface`
  - **Correct Example:**
    ```typescript
    // Define a base type
    type User = {
      id: string;
      name: string;
      email: string;
    };

    // Extend via intersection
    type Admin = User & {
      permissions: string[];
    };

    // Create union types
    type UserRole = 'admin' | 'editor' | 'viewer';
    ```
  - **Incorrect Example:**
    ```typescript
    // Don't use interface
    interface User {
      id: string;
      name: string;
      email: string;
    }

    // Don't use interface extension
    interface Admin extends User {
      permissions: string[];
    }
    ```
  - When extending types, use intersections (`type A = B & C`) for adding properties and unions (`type A = B | C`) for representing alternatives

- Never use `any`, `object`, or `unknown` types; always define specific types
  - `any` disables type checking
  - `object` represents any non-primitive type but lacks structural information
  - `unknown` is safer than `any` but still requires type checking before use
  - Using these loose types undermines static type checking and can hide errors until runtime
  - Specific types ensure compiler errors are caught early and improve documentation/IDE support
  - **Correct Example:**
    ```typescript
    type User = {
      id: string;
      name: string;
      email: string;
    };
    
    type ApiResponse = {
      status: number;
      data: User[];
      timestamp: string;
    };

    function processApiResponse(response: ApiResponse): User[] {
      return response.data;
    }
    ```
  - **Incorrect Example:**
    ```typescript
    // Don't use any
    function processApiResponse(response: any): any {
      return response.data;
    }

    // Don't use object
    function processApiResponse(response: object): object {
      // Type error: Property 'data' does not exist on type 'object'
      return response.data; // This line would cause a type error
    }
    ```

- Never use type assertions, type casts, or `as` assertions; design types and functions for proper type checking
  - Type assertions (`as Type`) and casts (`<Type>value`) bypass TypeScript's type checking
  - They often indicate a design problem in the type system
  - Proper type definitions and type guards provide safer alternatives
  - **Correct Example (using type guards):**
    ```typescript
    type User = {
      id: string;
      name: string;
      email: string;
    };

    function isUser(obj: unknown): obj is User {
      return (
        typeof obj === 'object' &&
        obj !== null &&
        'id' in obj &&
        'name' in obj &&
        'email' in obj
      );
    }

    function processData(data: unknown): User | null {
      if (isUser(data)) {
        // TypeScript knows data is User here
        return data;
      }
      return null;
    }
    ```
  - **Incorrect Example:**
    ```typescript
    type User = {
      id: string;
      name: string;
      email: string;
    };
    
    // Don't use type assertions
    function processData(data: unknown): User {
      return data as User; // Dangerous! No runtime checks
    }

    // Don't use angle bracket casts
    function processDataAngle(data: unknown): User {
      return <User>data; // Dangerous! No runtime checks
    }
    ```

### Immutability and Variable Declarations

- Always use `const` for variable declarations by default; use `let` only if reassignment is absolutely necessary. Never use `var`
  - `const` declares a variable that cannot be reassigned
  - `let` declares a variable that can be reassigned
  - `var` has function-level scope and hoisting issues; avoid it
  - Using `const` by default makes code more predictable and signals intent
  - **Correct Example:**
    ```typescript
    // Use const by default
    const userId = '123'; // Example value
    // const user = fetchUser(userId); // Assuming fetchUser exists
    // const fullName = `${user.firstName} ${user.lastName}`; // Assuming user has these props

    // Only use let when reassignment is necessary
    let count = 0;
    // for (const item of items) { // Assuming items exists
    //   count += item.value;
    // }
    ```
  - **Incorrect Example:**
    ```typescript
    // Don't use var
    // var user = fetchUser(id);

    // Don't use let when no reassignment happens
    // let fullName = `${user.firstName} ${user.lastName}`;
    ```

- Prefer immutable data structures: use `readonly` for object properties and `ReadonlyArray<T>` (or `readonly T[]`) for arrays
  - Immutability prevents a class of bugs related to unexpected mutations
  - Write functions to return new values instead of mutating inputs
  - `Readonly<T>` makes all properties of an object read-only
  - `ReadonlyArray<T>` represents an array that cannot be modified
  - **Correct Example:**
    ```typescript
    // Define types with readonly properties
    type User = {
      readonly id: string;
      readonly name: string;
      readonly email: string;
    };

    // Use Readonly utility type
    type Config = Readonly<{
      apiUrl: string;
      timeout: number;
      retryCount: number;
    }>;
    
    type Item = { isActive: boolean; value: number }; // Example Item type

    // Use ReadonlyArray for arrays
    function processItems(items: ReadonlyArray<Item>): number {
      // Create a new array instead of modifying the input
      return items
        .filter(item => item.isActive)
        .map(item => item.value)
        .reduce((sum, value) => sum + value, 0);
    }

    // Create a new sorted array
    function sortUsers(users: ReadonlyArray<User>): User[] {
      return [...users].sort((a, b) => a.name.localeCompare(b.name));
    }

    // Create a new object with updated properties
    function updateUser(user: User, newEmail: string): User {
      return { ...user, email: newEmail };
    }
    ```
  - **Incorrect Example:**
    ```typescript
    type User = {
      id: string; // Mutable by default
      name: string; // Mutable by default
      email: string; // Mutable by default
    };

    // Don't mutate function parameters
    function sortUsers(users: User[]): User[] {
      // Don't modify inputs
      users.sort((a, b) => a.name.localeCompare(b.name)); // Mutates original array
      return users;
    }

    // Don't mutate objects
    function updateUser(user: User, newEmail: string): User {
      // Don't modify properties of input objects
      user.email = newEmail; // Mutates original object
      return user;
    }
    ```
  - Note: `readonly` is a compile-time constraint. For deep immutability, mark each level or use utility types

### Function Design Principles

- Write pure, stateless, single-responsibility functions; avoid side effects
  - A pure function always returns the same output for the same inputs and has no side effects
  - Side effects include modifying external state, I/O, etc
  - Pure functions are easier to test, debug, and reason about
  - **Correct Example:**
    ```typescript
    // Pure function with single responsibility
    function calculateTotalPrice(
      items: ReadonlyArray<{ price: number; quantity: number }>
    ): number {
      return items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }

    // Composing pure functions
    function calculateTotalWithTax(
      items: ReadonlyArray<{ price: number; quantity: number }>,
      taxRate: number
    ): number {
      const subtotal = calculateTotalPrice(items);
      return subtotal * (1 + taxRate);
    }
    ```
  - **Incorrect Example:**
    ```typescript
    // Don't use global state
    let globalTaxRate = 0.1;

    // Impure function with side effects and multiple responsibilities
    function calculateTotalPriceImpure( // Renamed to avoid conflict
      items: { price: number; quantity: number; total?: number }[] // Added total for example
    ): number {
      let total = 0;
      
      // Side effect: mutating the input
      items.forEach(item => {
        item.total = item.price * item.quantity;
        total += item.total;
      });
      
      // Side effect: using global state
      const totalWithTax = total * (1 + globalTaxRate);
      
      // Side effect: logging
      console.log(`Total with tax: ${totalWithTax}`);
      
      return totalWithTax;
    }
    ```
  - Note: Not all functions can be pure (e.g., API calls). Isolate impure parts

- Use arrow functions for function expressions and callbacks; consider named function declarations for top-level functions or methods
  - Arrow functions offer concise syntax and lexical `this` binding
  - **Correct Example:**
    ```typescript
    type User = { id: string; isActive: boolean; firstName: string; lastName: string; email: string; }; // Example
    type ProcessedUser = { id: string; fullName: string; initials: string; email: string; }; // Example
    type Credentials = {}; // Example
    type AuthResult = {}; // Example
    declare const users: User[]; // Example declaration

    // Arrow function for callback
    const activeUsers = users.filter(user => user.isActive);

    // Arrow function with block body for more complex logic
    const processUser = (user: User): ProcessedUser => {
      const fullName = `${user.firstName} ${user.lastName}`;
      const initials = user.firstName[0] + user.lastName[0];
      
      return {
        id: user.id,
        fullName,
        initials,
        email: user.email
      };
    };

    // Named function declaration for significant application functions
    async function authenticateUser(credentials: Credentials): Promise<AuthResult> {
      // Implementation
      return {}; // Placeholder
    }
    ```
  - **Incorrect Example:**
    ```typescript
    type User = { isActive: boolean; firstName: string; lastName: string; }; // Example
    declare const users: User[]; // Example declaration

    // Don't use function expressions for simple callbacks
    const activeUsersIncorrect = users.filter(function(user) {
      return user.isActive;
    });
    ```

- Explicitly define types for all function parameters and return types, except for trivial inline lambdas where types can be inferred
  - Explicit typing clarifies intent, improves IDE support, and catches errors early
  - **Correct Example:**
    ```typescript
    type User = { id: string; }; // Example

    // Explicitly typed function
    async function fetchUser(id: string): Promise<User> {
      // Implementation
      return { id }; // Placeholder
    }

    // Explicitly typed arrow function
    const calculateTotal = (
      prices: ReadonlyArray<number>,
      discount: number
    ): number => {
      const sum = prices.reduce((total, price) => total + price, 0);
      return sum * (1 - discount);
    };

    // Type inference is acceptable for simple callbacks
    const doubled = [1, 2, 3].map(x => x * 2);
    ```
  - **Incorrect Example:**
    ```typescript
    // Missing parameter types
    // function fetchUser(id) { // Implicit any for id and return
    //   // Implementation
    // }

    // Missing return type
    // const calculateTotalMissingTypes = (prices, discount) => { // Implicit any for params and return
    //   const sum = prices.reduce((total, price) => total + price, 0);
    //   return sum * (1 - discount);
    // };
    ```

- Prefer to inject functions directly rather than creating interfaces and injecting implementations
  - Function injection promotes simpler, more composable code and reduces indirection
  - Focuses on behavior rather than structures
  - **Correct Example:**
    ```typescript
    type User = { id: string; isActive: boolean; email: string; }; // Example
    type UserService = { getValidUser(id: string): Promise<User | null>; }; // Example
    declare const api: { fetchUser: (id: string) => Promise<User> }; // Example

    // Inject functions directly
    type FetchUserFn = (id: string) => Promise<User>;
    type ValidateUserFn = (user: User) => boolean;

    function userService(
      fetchUser: FetchUserFn,
      validateUser: ValidateUserFn
    ): UserService {
      return {
        async getValidUser(id: string): Promise<User | null> {
          const user = await fetchUser(id);
          return validateUser(user) ? user : null;
        }
      };
    }

    // Usage
    const service = userService(
      id => api.fetchUser(id),
      user => user.isActive && user.email.includes('@')
    );
    ```
  - **Incorrect Example:**
    ```typescript
    type User = { id: string; }; // Example

    // Don't create interfaces just for injection
    interface UserRepository {
      fetchUser(id: string): Promise<User>;
    }

    interface UserValidator {
      validate(user: User): boolean;
    }

    class UserServiceImpl { // Renamed to avoid conflict
      constructor(
        private repository: UserRepository,
        private validator: UserValidator
      ) {}
      
      async getValidUser(id: string): Promise<User | null> {
        const user = await this.repository.fetchUser(id);
        return this.validator.validate(user) ? user : null;
      }
    }
    ```

### Type System Features

- Use template literal types to enforce string patterns and create type-safe string unions
  - Provides compile-time validation for string formats (e.g., API routes, IDs)
  - **Correct Example:**
    ```typescript
    // API routes with template literal types
    type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
    type ResourceType = 'users' | 'posts' | 'comments';
    type ApiRoute = `/${ResourceType}` | `/${ResourceType}/${string}`;

    // Function that accepts only valid API routes
    async function fetchData(method: HttpMethod, route: ApiRoute): Promise<unknown> {
      // Implementation
      return {}; // Placeholder
    }

    // Usage - TypeScript will enforce valid routes
    fetchData('GET', '/users');           // Valid
    fetchData('POST', '/posts/123');      // Valid
    // fetchData('GET', '/invalid');      // Error: Not assignable to type 'ApiRoute'
    ```
  - **Incorrect Example:**
    ```typescript
    // Using plain strings without type constraints
    async function fetchDataIncorrect(method: string, route: string): Promise<unknown> {
      // No compile-time validation for method or route
      return {}; // Placeholder
    }

    // Usage - No type checking for invalid routes
    fetchDataIncorrect('GET', '/users');           // Works
    fetchDataIncorrect('POST', '/posts/123');      // Works
    fetchDataIncorrect('INVALID', '/not-a-route'); // Works but will fail at runtime
    ```

- Make properties required by default; use optional properties (`?`) sparingly, only when truly necessary
  - Required properties make type checking more effective and reduce defensive coding
  - If many properties are optional, prefer discriminated unions for clarity
  - **Correct Example:**
    ```typescript
    // Type with mostly required properties
    type User = {
      id: string;
      name: string;
      email: string;
      // Only truly optional properties use ?
      phoneNumber?: string;
    };

    // Instead of many optional properties, use discriminated unions
    type SuccessResponse = {
      status: 'success';
      data: User;
      timestamp: string;
    };

    type ErrorResponse = {
      status: 'error';
      error: {
        code: number;
        message: string;
      };
      timestamp: string;
    };

    type ApiResponse = SuccessResponse | ErrorResponse;

    // Usage
    function handleResponse(response: ApiResponse): User | null {
      if (response.status === 'success') {
        // TypeScript knows this is SuccessResponse
        return response.data;
      } else {
        // TypeScript knows this is ErrorResponse
        console.error(response.error.message);
        return null;
      }
    }
    ```
  - **Incorrect Example:**
    ```typescript
    type User = { id: string; name: string; email: string; }; // Example

    // Too many optional properties
    type ApiResponseIncorrect = {
      status: string;
      data?: User;
      error?: {
        code?: number;
        message?: string;
      };
      timestamp: string;
    };

    // Usage requires many null checks
    function handleResponseIncorrect(response: ApiResponseIncorrect): User | null {
      if (response.status === 'success' && response.data) {
        return response.data;
      } else if (response.error && response.error.message) {
        console.error(response.error.message);
      }
      return null;
    }
    ```

- Always use exhaustive checks with discriminated unions to ensure all cases are handled explicitly
  - A discriminated union has a common field (discriminant) to identify variants
  - Exhaustive checks prevent silent failures when new variants are added
  - Use the `never` type in a `default` case of a `switch` statement to enforce this
  - **Correct Example:**
    ```typescript
    // Define a discriminated union
    type Result<T> = 
      | { status: 'success'; data: T }
      | { status: 'error'; error: string }
      | { status: 'loading' };

    // Function with exhaustive check
    function handleResult<T>(result: Result<T>): T | null {
      switch (result.status) {
        case 'success':
          return result.data;
        case 'error':
          console.error(result.error);
          return null;
        case 'loading':
          console.log('Data is loading...');
          return null;
        default:
          // Exhaustive check: TypeScript error if any case is unhandled
          const _exhaustiveCheck: never = result;
          throw new Error(`Unhandled result status`); // Removed _exhaustiveCheck from message for simplicity
      }
    }
    ```
  - **Incorrect Example:**
    ```typescript
    type Result<T> = // Same as above
      | { status: 'success'; data: T }
      | { status: 'error'; error: string }
      | { status: 'loading' };

    // Missing exhaustive check
    function handleResultIncorrect<T>(result: Result<T>): T | null {
      if (result.status === 'success') {
        return result.data;
      } else if (result.status === 'error') {
        console.error(result.error);
      }
      // Missing case: 'loading' is not handled
      // No error if a new variant is added
      return null;
    }
    ```

- Always handle errors explicitly; never swallow exceptions or ignore error states
  - Improves code reliability and debugging
  - **Correct Example (using a Result type):**
    ```typescript
    type User = { id: string; name: string; }; // Example
    declare function fetch(url: string): Promise<{ ok: boolean; json: () => Promise<any>; status: number }>; // Simplified fetch

    // Explicit error handling with Result type
    type Result<T, E = Error> = 
      | { ok: true; value: T }
      | { ok: false; error: E };

    async function fetchData<T>(url: string): Promise<Result<T, Error>> {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return {
            ok: false,
            error: new Error(`HTTP error ${response.status}`)
          };
        }
        const data = await response.json();
        return { ok: true, value: data as T }; // `as T` might be needed if json() returns any
      } catch (error) {
        return {
          ok: false,
          error: error instanceof Error ? error : new Error(String(error))
        };
      }
    }

    // Usage with explicit handling
    async function loadUser(id: string): Promise<User | null> {
      const result = await fetchData<User>(`/api/users/${id}`);
      
      if (result.ok) {
        return result.value;
      } else {
        // Explicitly log or handle the error
        console.error('Failed to load user:', result.error);
        // Maybe retry or show user-friendly message
        return null;
      }
    }
    ```
  - **Incorrect Example:**
    ```typescript
    type User = { id: string; name: string; }; // Example
    declare function fetch(url: string): Promise<{ json: () => Promise<any> }>; // Simplified fetch

    // Swallowing exceptions
    async function fetchDataIncorrect<T>(url: string): Promise<T | null> {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data as T; // `as T` might be needed
      } catch (error) {
        // Swallowing exception without proper handling
        return null;
      }
    }
    ```

### Advanced Type Composition and Reasoning

- Follow "composition over aggregation" by designing small, focused types and functions that can be combined
  - Composition creates more flexible, reusable code with looser coupling
  - **Correct Example:**
    ```typescript
    // Small, focused types
    type Identifiable = {
      id: string;
    };

    type Named = {
      name: string;
    };

    type Timestamped = {
      createdAt: string;
      updatedAt: string;
    };

    // Composed type using intersections
    type User = Identifiable & Named & {
      email: string;
    };

    type Post = Identifiable & Named & Timestamped & {
      content: string;
      authorId: string;
    };

    // Small, focused functions
    const validate = {
      email: (email: string): boolean => /^.+@.+\..+$/.test(email),
      nonEmpty: (str: string): boolean => str.trim().length > 0
    };

    // Composed validation function
    function validateUser(user: User): boolean {
      return (
        validate.nonEmpty(user.id) &&
        validate.nonEmpty(user.name) &&
        validate.email(user.email)
      );
    }
    ```
  - **Incorrect Example (Monolithic type and function):**
    ```typescript
    // Monolithic type with many concerns
    type UserMonolithic = { // Renamed to avoid conflict
      id: string;
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
      // ... other properties ...
    };
    // type ProcessedUser = {}; // Example

    // Monolithic function with many responsibilities
    // function validateAndProcessUser(user: UserMonolithic): ProcessedUser {
      // ... validation and processing logic mixed ...
    //   return {};
    // }
    ```

- Count values, not fields when reasoning about types: use `A | B` for looser "sum" types and `A & B` for stricter "product" types
  - Union (`A | B`): A type that can be `A` or `B`. Expands the set of possible values
  - Intersection (`A & B`): A type that must be both `A` and `B`. Constrains values
  - **Correct Example:**
    ```typescript
    // Union expands the set of possible values
    type Status = 'pending' | 'success' | 'error';
    type NumberOrString = number | string;

    // Intersection constrains to values that satisfy both types
    type WithId = { id: string };
    type WithName = { name: string };
    type IdentifiedEntity = WithId & WithName; // Requires both id and name

    const entity: IdentifiedEntity = {
      id: '123',
      name: 'Example'
    };
    ```

- When intersecting object types (`A & B`), expect all fields from both `A` and `B` to be present
  - The intersection applies to values, requiring them to satisfy all properties from both types
  - If property types conflict, the result is their intersection (e.g., `(string | number) & (number | boolean)` results in `number`)
  - **Correct Example:**
    ```typescript
    type WithId = { id: string };
    type WithName = { name: string };
    type WithAge = { age: number };

    // Intersection requires all properties from all types
    type Person = WithId & WithName & WithAge;

    const person: Person = {
      id: '123',
      name: 'John',
      age: 30
    };
    ```

- Compose complex types with `|` (union) and `&` (intersection); remember a single type is simultaneously a one-case union and intersection
  - **Correct Example:**
    ```typescript
    // Base types
    type Entity = { id: string };
    type Timestamped = { createdAt: string; updatedAt: string };

    // User-related types
    type UserData = { name: string; email: string };
    type AdminData = UserData & { permissions: string[] };

    // Status-related types
    type Success<T> = { status: 'success'; data: T };
    type Error = { status: 'error'; message: string };

    // Composing complex union and intersection types
    type UserResponse = Success<UserData & Entity & Timestamped> | Error;
    ```

- Operate only on keys common to every union member, unless the type is narrowed
  - `keyof (A | B)` is equivalent to `keyof A & keyof B` (intersection of keys)
  - Accessing non-common properties requires type guards
  - **Correct Example:**
    ```typescript
    type Rectangle = {
      kind: 'rectangle';
      width: number;
      height: number;
    };

    type Circle = {
      kind: 'circle';
      radius: number;
    };

    type Shape = Rectangle | Circle;

    // Safe: 'kind' exists on all Shape variants
    function getShapeKind(shape: Shape): string {
      return shape.kind;
    }

    function getArea(shape: Shape): number {
      if (shape.kind === 'rectangle') {
        return shape.width * shape.height; // shape is Rectangle here
      } else {
        return Math.PI * shape.radius * shape.radius; // shape is Circle here
      }
    }
    ```
  - **Incorrect Example:**
    ```typescript
    type Shape = { kind: 'rectangle'; width: number; height: number; } | { kind: 'circle'; radius: number; }; // As above
    // Error: 'width' doesn't exist on all variants
    // function getWidth(shape: Shape): number {
    //   return shape.width; // Error: Property 'width' does not exist on type 'Circle'
    // }
    ```

- Treat return-type positions as covariant and parameter-type positions as contravariant when checking function assignability
  - Covariance: A more specific type can substitute a more general type (e.g., `() => Dog` can be used where `() => Animal` is expected)
  - Contravariance: A more general type can substitute a more specific type (e.g., `(animal: Animal) => void` can be used where `(dog: Dog) => void` is expected)
  - This is enforced by `--strictFunctionTypes`
  - **Correct Example:**
    ```typescript
    type Animal = { name: string };
    type Dog = Animal & { breed: string };

    // Covariance in return types
    type AnimalFactory = () => Animal;
    type DogFactory = () => Dog;
    const createDog: DogFactory = (): Dog => ({ name: 'Rex', breed: 'German Shepherd' });
    const animalMaker: AnimalFactory = createDog; // Valid

    // Contravariance in parameter types
    type AnimalConsumer = (animal: Animal) => void;
    type DogConsumer = (dog: Dog) => void;
    const logAnimal: AnimalConsumer = (animal: Animal): void => { /* ... */ };
    const dogLogger: DogConsumer = logAnimal; // Valid
    ```

- Stop distributive conditional-type behavior by wrapping the generic in a tuple: `[T] extends [...]` instead of `T extends ...`
  - Conditional types `T extends U ? X : Y` distribute over `T` if `T` is a naked type parameter union
  - Wrapping `T` (e.g., `[T]`) prevents this distribution, applying the condition to the union as a whole
  - **Correct Example:**
    ```typescript
    // Distributive (default)
    type Flatten<T> = T extends Array<infer U> ? U : T;
    type FlattenedUnion = Flatten<string[] | number | boolean[]>; // string | number | boolean

    // Non-distributive
    type NonDistributiveFlatten<T> = [T] extends [Array<infer U>] ? U : T;
    type NonDistFlattenedUnion = NonDistributiveFlatten<string[] | number | boolean[]>; // string[] | number | boolean[]
    ```

- Exploit contravariant inference to turn a union of function types into an intersection of their parameter types
  - A common utility: `type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends ((arg: infer I) => void) ? I : never;`
  - **Correct Example:**
    ```typescript
    type UnionToIntersection<U> = 
      (U extends unknown ? (arg: U) => void : never) extends 
      (arg: infer I) => void ? I : never;

    type Func1 = (arg: { a: string }) => void;
    type Func2 = (arg: { b: number }) => void;
    type FuncUnion = Func1 | Func2;
    
    type ParamType<F> = F extends (arg: infer P) => unknown ? P : never;
    type CombinedParam = UnionToIntersection<ParamType<FuncUnion>>; // { a: string } & { b: number }
    ```

- Repeat the same `infer` placeholder within a single conditional branch to force TypeScript to reconcile occurrences, yielding an intersection type
  - `T extends { p: infer U, q: infer U } ? U : never` infers `U` only if `p` and `q` have compatible types for a single `U`
  - **Correct Example:**
    ```typescript
    type ExtractSameType<T> = T extends { a: infer X, b: infer X } ? X : never;
    type T1 = ExtractSameType<{a: number, b: number}>;  // number
    type T2 = ExtractSameType<{a: number, b: string}>;  // never
    ```

- Verify intricate type transformations with equational reasoning: expand conditional types and confirm assignability
  - Manually substitute sample types into generics and simplify step-by-step
  - Use helper types to check assignability: `type Check = [Actual] extends [Expected] ? true : false;`
  - **Correct Example (Conceptual):**
    ```typescript
    // type UnionToIntersection<U> = ... (as defined before)
    // type U1 = {p: number} | {q: string};
    // type I1 = UnionToIntersection<U1>;
    // type ExpectedI1 = {p: number} & {q: string};
    // type CheckAssignability = [I1] extends [ExpectedI1] ? true : false;
    // type CheckReverseAssignability = [ExpectedI1] extends [I1] ? true : false;
    // Both checks should yield true if I1 is equivalent to ExpectedI1.
    ```

- Recognize that each extra layer of contravariance flips the result between union and intersection in advanced type gymnastics
  - Use this predictable alternation deliberately
  - Example: `Contra<T> = (x: T) => void; Flip1<T> = Contra<T> extends Contra<infer U> ? U : never;`
    - `Flip1<A | B>` results in `A & B`
    - `Flip1<A & B>` results in `A | B`

## TESTING

- Follow the Arrange-Act-Assert convention for tests
- Name test variables clearly
  - Follow the convention: inputX, mockX, actualX, expectedX, etc
- Write unit tests for each public function
  - Use test doubles to simulate dependencies
    - Except for third-party dependencies that are not expensive to execute
- Write acceptance tests for each module
  - Follow the Given-When-Then convention

## ENVIRONMENT PREFERENCES

- Always use `bun` over `node`
- Use bun for package management, bundling, transpiling, runtime, and more
- Use `bun run` over `node`
- Use `bun add` over `npm install`
- Use `bun remove` over `npm uninstall`
- Use `bun add -d` over `npm install -d`
- Use bun over node, npm, yarn, pnpm, etc. everytime
- Use `bun help` if you need help with bun

Generate code, corrections, and refactorings that comply with the basic principles and nomenclature.

- The CLI tool is a TUI tool
- Add unit for each function and integration tests for each feature
- Use abstract data types, sum types, variants, and invariants
- Use ts-pattern
- Use neverthrow
