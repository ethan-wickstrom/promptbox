import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import {
  addPrompt,
  deletePrompt,
  getPrompt,
  listPrompts,
  updatePrompt,
} from './prompts';
import { existsSync, rmSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), 'data');
const PROMPTS_FILE = join(DATA_DIR, 'prompts.json');

beforeEach(() => {
  if (existsSync(PROMPTS_FILE)) {
    rmSync(PROMPTS_FILE);
  }
});

afterEach(() => {
  if (existsSync(PROMPTS_FILE)) {
    rmSync(PROMPTS_FILE);
  }
});

describe('prompts', () => {
  it('adds and lists prompts', () => {
    addPrompt('test', 'content');
    const prompts = listPrompts();
    expect(prompts.length).toBe(1);
    const first = prompts[0];
    if (!first) {
      throw new Error('Prompt not found');
    }
    expect(first.name).toBe('test');
  });

  it('gets a prompt by id', () => {
    const prompt = addPrompt('name', 'body');
    const loaded = getPrompt(prompt.id);
    expect(loaded?.content).toBe('body');
  });

  it('updates a prompt', () => {
    const prompt = addPrompt('old', 'content');
    const updated = updatePrompt(prompt.id, 'new', 'updated');
    expect(updated?.name).toBe('new');
    const loaded = getPrompt(prompt.id);
    expect(loaded?.content).toBe('updated');
  });

  it('deletes a prompt', () => {
    const prompt = addPrompt('temp', 'delete');
    const result = deletePrompt(prompt.id);
    expect(result).toBe(true);
    expect(getPrompt(prompt.id)).toBeNull();
    expect(listPrompts().length).toBe(0);
  });
});
