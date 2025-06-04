import { match } from 'ts-pattern';
import {
  addPrompt,
  deletePrompt,
  getPrompt,
  listPrompts,
  updatePrompt,
} from './prompts';
import { TuiMenu, ask } from './tui';

const actions = [
  'List prompts',
  'View prompt',
  'Add prompt',
  'Update prompt',
  'Delete prompt',
  'Exit',
] as const;

type ActionIndex = 0 | 1 | 2 | 3 | 4 | 5;

const handleList = (): void => {
  const prompts = listPrompts();
  if (prompts.length === 0) {
    console.log('No prompts found');
    return;
  }
  prompts.forEach(p => console.log(`${p.id}: ${p.name}`));
};

const handleView = async (): Promise<void> => {
  const id = await ask('Prompt id: ');
  const result = getPrompt(id);
  result.match(
    prompt => {
      console.log(`Name: ${prompt.name}\nContent: ${prompt.content}`);
    },
    error => console.log(`Error: ${error.type}`),
  );
};

const handleAdd = async (): Promise<void> => {
  const name = await ask('Name: ');
  const content = await ask('Content: ');
  const result = addPrompt(name, content);
  result.match(
    prompt => console.log(`Added prompt ${prompt.id}`),
    err =>
      match(err)
        .with({ type: 'invalid-input' }, e => console.log(`Error: ${e.reason}`))
        .otherwise(e => console.log(`Error: ${e.type}`)),
  );
};

const handleUpdate = async (): Promise<void> => {
  const id = await ask('Id: ');
  const name = await ask('Name: ');
  const content = await ask('Content: ');
  const result = updatePrompt(id, name, content);
  result.match(
    prompt => console.log(`Updated ${prompt.id}`),
    err =>
      match(err)
        .with({ type: 'invalid-input' }, e => console.log(`Error: ${e.reason}`))
        .otherwise(e => console.log(`Error: ${e.type}`)),
  );
};

const handleDelete = async (): Promise<void> => {
  const id = await ask('Id: ');
  const result = deletePrompt(id);
  result.match(
    () => console.log('Deleted'),
    err => console.log(`Error: ${err.type}`),
  );
};

const main = async (): Promise<void> => {
  let running = true;
  while (running) {
    const menu = new TuiMenu([...actions]);
    const choice = (await menu.run()) as ActionIndex;
    await match<ActionIndex>(choice)
      .with(0, () => handleList())
      .with(1, () => handleView())
      .with(2, () => handleAdd())
      .with(3, () => handleUpdate())
      .with(4, () => handleDelete())
      .with(5, () => {
        running = false;
      })
      .exhaustive();
  }
};

main();
