# Promptbox

Promptbox manages text prompts with a TUI and web interface powered by Bun.

## Usage

- `bun run src/cli.ts` - start the interactive TUI
- `bun run src/server.ts` - start the web server

Set `PROMPTBOX_DATA_DIR` to change where database files are stored. It defaults
to the `data` directory in the current working directory.

The web server exposes a small API under `/api/prompts` and serves a simple
frontend at `/` using Bun's `routes` option.
