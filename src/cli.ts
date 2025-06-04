import {
  addPrompt,
  deletePrompt,
  getPrompt,
  listPrompts,
  updatePrompt,
} from './prompts';

const showUsage = (): void => {
  console.log('Usage:');
  console.log('  bun run src/cli.ts add <name> <content>');
  console.log('  bun run src/cli.ts list');
  console.log('  bun run src/cli.ts view <id>');
  console.log('  bun run src/cli.ts update <id> <name> <content>');
  console.log('  bun run src/cli.ts delete <id>');
};

const main = (): void => {
  const [command, ...args] = Bun.argv.slice(2);

  switch (command) {
    case 'add': {
      const [name, content] = args;
      if (!name || !content) {
        showUsage();
        return;
      }
      const prompt = addPrompt(name, content);
      console.log(`Added prompt with id: ${prompt.id}`);
      break;
    }
    case 'list': {
      const prompts = listPrompts();
      if (prompts.length === 0) {
        console.log('No prompts found');
        return;
      }
      prompts.forEach((p) => console.log(`${p.id}: ${p.name}`));
      break;
    }
    case 'view': {
      const [id] = args;
      if (!id) {
        showUsage();
        return;
      }
      const prompt = getPrompt(id);
      if (!prompt) {
        console.log(`Prompt ${id} not found`);
        return;
      }
      console.log(`Name: ${prompt.name}\nContent: ${prompt.content}`);
      break;
    }
    case 'update': {
      const [id, name, content] = args;
      if (!id || !name || !content) {
        showUsage();
        return;
      }
      const updated = updatePrompt(id, name, content);
      if (!updated) {
        console.log(`Prompt ${id} not found`);
        return;
      }
      console.log(`Updated prompt ${id}`);
      break;
    }
    case 'delete': {
      const [id] = args;
      if (!id) {
        showUsage();
        return;
      }
      const deleted = deletePrompt(id);
      if (!deleted) {
        console.log(`Prompt ${id} not found`);
        return;
      }
      console.log(`Deleted prompt ${id}`);
      break;
    }
    default:
      showUsage();
  }
};

main();
