import indexPage from '../index.html';
import {
  addPrompt,
  deletePrompt,
  getPrompt,
  listPrompts,
  updatePrompt,
} from './prompts';
import { match } from 'ts-pattern';

const buildHtml = (body: string): string => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Promptbox</title>
</head>
<body class="p-4 font-sans">${body}</body>
</html>`;

export const createServer = () =>
  Bun.serve({
    development: true,
    routes: {
      '/': indexPage,
      '/prompt/:id': req => {
        const result = getPrompt(req.params.id);
        return result.match(
          prompt => {
            const body = `<h1 class="text-2xl mb-4">${prompt.name}</h1><pre class="whitespace-pre-wrap">${prompt.content}</pre>`;
            return new Response(buildHtml(body), { headers: { 'Content-Type': 'text/html' } });
          },
          () => new Response('Not Found', { status: 404 }),
        );
      },
      '/api/prompts': {
        GET: () => Response.json(listPrompts()),
        POST: async req => {
          const { name, content } = await req.json();
          if (typeof name !== 'string' || typeof content !== 'string') {
            return new Response('Invalid', { status: 400 });
          }
          const result = addPrompt(name, content);
          return result.match(
            prompt => Response.json(prompt, { status: 201 }),
            err =>
              match(err)
                .with({ type: 'invalid-input' }, e => new Response(e.reason, { status: 400 }))
                .otherwise(() => new Response('Not Found', { status: 404 })),
          );
        },
      },
      '/api/prompts/:id': {
        GET: req =>
          getPrompt(req.params.id).match(
            prompt => Response.json(prompt),
            () => new Response('Not Found', { status: 404 }),
          ),
        PUT: async req => {
          const { name, content } = await req.json();
          if (typeof name !== 'string' || typeof content !== 'string') {
            return new Response('Invalid', { status: 400 });
          }
          const result = updatePrompt(req.params.id, name, content);
          return result.match(
            prompt => Response.json(prompt),
            error =>
              match(error)
                .with({ type: 'invalid-input' }, e => new Response(e.reason, { status: 400 }))
                .otherwise(() => new Response('Not Found', { status: 404 })),
          );
        },
        DELETE: req =>
          deletePrompt(req.params.id).match(
            () => new Response(null, { status: 204 }),
            () => new Response('Not Found', { status: 404 }),
          ),
      },
    },
  });

if (import.meta.main) {
  const server = createServer();
  console.log(`Server running at ${server.url}`);
}
