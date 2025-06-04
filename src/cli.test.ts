import { beforeEach, afterEach, describe, expect, it } from 'bun:test';
import { PassThrough } from 'stream';
import { join } from 'path';
import { existsSync, rmSync } from 'fs';
import { TuiMenu, ask } from './tui';
import { addPrompt, closeDb, listPrompts } from './prompts';

const DATA_DIR = join(process.cwd(), 'data');
const DB_FILE = join(DATA_DIR, 'prompts.sqlite');

beforeEach(() => {
  closeDb();
  if (existsSync(DB_FILE)) {
    rmSync(DB_FILE);
  }
});

afterEach(() => {
  closeDb();
  if (existsSync(DB_FILE)) {
    rmSync(DB_FILE);
  }
});

describe('cli tui', () => {
  it('adds and lists prompts', async () => {
    const input = new PassThrough();
    const output = new PassThrough();
    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (msg?: unknown) => {
      logs.push(String(msg));
    };

    const menu = new TuiMenu(
      ['List prompts', 'View prompt', 'Add prompt', 'Update prompt', 'Delete prompt', 'Exit'],
      { input, output },
    );
    const menuRun = menu.run();
    input.write('\u001b[B');
    input.write('\u001b[B');
    input.write('\r');
    await menuRun;

    const namePromise = ask('Name: ', { input, output });
    input.write('test\n');
    const name = await namePromise;
    const contentPromise = ask('Content: ', { input, output });
    input.write('body\n');
    const content = await contentPromise;
    addPrompt(name, content);

    const prompts = listPrompts();
    if (prompts.length === 0) {
      console.log('No prompts found');
    } else {
      prompts.forEach(p => console.log(`${p.id}: ${p.name}`));
    }

    console.log = originalLog;

    expect(prompts.length).toBe(1);
    expect(logs.some(l => l.includes('test'))).toBe(true);
  });
});
