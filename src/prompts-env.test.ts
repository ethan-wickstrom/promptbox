import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { existsSync, rmSync } from 'fs';
import { join } from 'path';

const CUSTOM_DIR = join(process.cwd(), 'custom-data');
const DB_PATH = join(CUSTOM_DIR, 'prompts.sqlite');

beforeEach(() => {
  process.env['PROMPTBOX_DATA_DIR'] = CUSTOM_DIR;
  if (existsSync(DB_PATH)) {
    rmSync(DB_PATH);
  }
});

afterEach(() => {
  delete process.env['PROMPTBOX_DATA_DIR'];
  if (existsSync(DB_PATH)) {
    rmSync(DB_PATH);
  }
  if (existsSync(CUSTOM_DIR)) {
    rmSync(CUSTOM_DIR, { recursive: true, force: true });
  }
});

describe('PROMPTBOX_DATA_DIR', () => {
  it('stores database in the configured directory', async () => {
    const { addPrompt, closeDb } = await import(`./prompts?${Date.now()}`);
    addPrompt('env-test', 'content');
    closeDb();
    expect(existsSync(DB_PATH)).toBe(true);
  });
});
