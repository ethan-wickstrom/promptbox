# Promptbox

Promptbox manages text prompts with a CLI and web interface powered by Bun.

## Commands

- `bun run src/cli.ts add <name> <content>` - add a new prompt
- `bun run src/cli.ts list` - list all prompts
- `bun run src/cli.ts view <id>` - view a prompt by id
- `bun run src/cli.ts update <id> <name> <content>` - update an existing prompt
- `bun run src/cli.ts delete <id>` - delete a prompt
- `bun run src/server.ts` - start the web server

The web server exposes a small API under `/api/prompts` and serves a simple
frontend at `/` using Bun's `routes` option.
