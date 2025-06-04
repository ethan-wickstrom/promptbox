import indexPage from '../index.html';
import {
  addPrompt,
  deletePrompt,
  getPrompt,
  listPrompts,
  updatePrompt,
} from './prompts';

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

const server = Bun.serve({
  development: true,
  routes: {
    '/': indexPage,
    '/prompt/:id': req => {
      const prompt = getPrompt(req.params.id);
      if (!prompt) {
        return new Response('Not Found', { status: 404 });
      }
      const body = `<h1 class="text-2xl mb-4">${prompt.name}</h1><pre class="whitespace-pre-wrap">${prompt.content}</pre>`;
      return new Response(buildHtml(body), { headers: { 'Content-Type': 'text/html' } });
    },
    '/api/prompts': {
      GET: () => Response.json(listPrompts()),
      POST: async req => {
        const { name, content } = await req.json();
        if (typeof name !== 'string' || typeof content !== 'string') {
          return new Response('Invalid', { status: 400 });
        }
        const prompt = addPrompt(name, content);
        return Response.json(prompt, { status: 201 });
      },
    },
    '/api/prompts/:id': {
      GET: req => {
        const prompt = getPrompt(req.params.id);
        if (!prompt) {
          return new Response('Not Found', { status: 404 });
        }
        return Response.json(prompt);
      },
      PUT: async req => {
        const { name, content } = await req.json();
        if (typeof name !== 'string' || typeof content !== 'string') {
          return new Response('Invalid', { status: 400 });
        }
        const updated = updatePrompt(req.params.id, name, content);
        if (!updated) {
          return new Response('Not Found', { status: 404 });
        }
        return Response.json(updated);
      },
      DELETE: req => {
        const deleted = deletePrompt(req.params.id);
        return deleted ? new Response(null, { status: 204 }) : new Response('Not Found', { status: 404 });
      },
    },
  },
});

console.log(`Server running at ${server.url}`);
