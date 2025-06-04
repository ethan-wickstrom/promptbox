import indexPage from '../index.html';
import {
  addPrompt,
  deletePrompt,
  getPrompt,
  listPrompts,
  updatePrompt,
} from './prompts';
import { match } from 'ts-pattern';
import {
  Router,
  toResponse,
  toEmptyResponse,
  validatePromptInput,
  type PromptInput,
} from './router';

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

export const createServer = () => {
  const router = new Router()
    .get('/api/prompts', () => Response.json(listPrompts()))
    .post('/api/prompts', validatePromptInput, ({ body }) =>
      toResponse(addPrompt(body.name, body.content), 201),
    )
    .get('/api/prompts/:id', ({ params }) => toResponse(getPrompt(params.id)))
    .put('/api/prompts/:id', validatePromptInput, ({ params, body }) =>
      toResponse(updatePrompt(params.id, body.name, body.content)),
    )
    .delete('/api/prompts/:id', ({ params }) =>
      toEmptyResponse(deletePrompt(params.id)),
    );

  return Bun.serve({
    development: true,
    routes: {
      '/': indexPage,
      '/prompt/:id': req => {
        const result = getPrompt(req.params.id);
        return result.match(
          prompt => {
            const body = `<h1 class="text-2xl mb-4">${prompt.name}</h1><pre class="whitespace-pre-wrap">${prompt.content}</pre>`;
            return new Response(buildHtml(body), {
              headers: { 'Content-Type': 'text/html' },
            });
          },
          () => new Response('Not Found', { status: 404 }),
        );
      },
    },
    fetch: req => router.handle(req),
  });
};

if (import.meta.main) {
  const server = createServer();
  console.log(`Server running at ${server.url}`);
}
