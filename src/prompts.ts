import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { Prompt } from './types';

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

export const addPrompt = (name: string, content: string): Prompt => {
  const prompts = [...loadPrompts()];
  const id = Date.now().toString(36);
  const prompt: Prompt = { id, name, content };
  prompts.push(prompt);
  savePrompts(prompts);
  return prompt;
};

export const getPrompt = (id: string): Prompt | null => {
  const prompts = loadPrompts();
  return prompts.find((p) => p.id === id) ?? null;
};

export const listPrompts = (): ReadonlyArray<Prompt> => loadPrompts();

export const updatePrompt = (
  id: string,
  name: string,
  content: string,
): Prompt | null => {
  const prompts = [...loadPrompts()];
  const index = prompts.findIndex((p) => p.id === id);
  if (index === -1) {
    return null;
  }
  const updated: Prompt = { id, name, content };
  prompts[index] = updated;
  savePrompts(prompts);
  return updated;
};

export const deletePrompt = (id: string): boolean => {
  const prompts = [...loadPrompts()];
  const filtered = prompts.filter((p) => p.id !== id);
  if (filtered.length === prompts.length) {
    return false;
  }
  savePrompts(filtered);
  return true;
};
