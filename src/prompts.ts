import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { err, ok, Result } from 'neverthrow';
import type { Prompt } from './types';
import type { PromptError } from './errors';

const DATA_DIR = join(process.cwd(), 'data');
const PROMPTS_FILE = join(DATA_DIR, 'prompts.json');

const ensureDataDir = (): void => {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!existsSync(PROMPTS_FILE)) {
    writeFileSync(PROMPTS_FILE, '[]');
  }
};

const loadPrompts = (): ReadonlyArray<Prompt> => {
  ensureDataDir();
  const content = readFileSync(PROMPTS_FILE, 'utf8');
  try {
    const prompts = JSON.parse(content) as Prompt[];
    return prompts;
  } catch {
    return [];
  }
};

const savePrompts = (prompts: ReadonlyArray<Prompt>): void => {
  ensureDataDir();
  const data = JSON.stringify(prompts, null, 2);
  writeFileSync(PROMPTS_FILE, data);
};

export const addPrompt = (
  name: string,
  content: string,
): Result<Prompt, PromptError> => {
  if (!name.trim() || !content.trim()) {
    return err({ type: 'invalid-input', reason: 'Empty values are not allowed' });
  }
  const prompts = [...loadPrompts()];
  const id = Date.now().toString(36);
  const prompt: Prompt = { id, name, content };
  prompts.push(prompt);
  savePrompts(prompts);
  return ok(prompt);
};

export const getPrompt = (id: string): Result<Prompt, PromptError> => {
  const prompts = loadPrompts();
  const found = prompts.find(p => p.id === id);
  return found ? ok(found) : err({ type: 'not-found', id });
};

export const listPrompts = (): ReadonlyArray<Prompt> => loadPrompts();

export const updatePrompt = (
  id: string,
  name: string,
  content: string,
): Result<Prompt, PromptError> => {
  if (!name.trim() || !content.trim()) {
    return err({ type: 'invalid-input', reason: 'Empty values are not allowed' });
  }
  const prompts = [...loadPrompts()];
  const index = prompts.findIndex(p => p.id === id);
  if (index === -1) {
    return err({ type: 'not-found', id });
  }
  const updated: Prompt = { id, name, content };
  prompts[index] = updated;
  savePrompts(prompts);
  return ok(updated);
};

export const deletePrompt = (id: string): Result<void, PromptError> => {
  const prompts = [...loadPrompts()];
  const filtered = prompts.filter(p => p.id !== id);
  if (filtered.length === prompts.length) {
    return err({ type: 'not-found', id });
  }
  savePrompts(filtered);
  return ok(undefined);
};
