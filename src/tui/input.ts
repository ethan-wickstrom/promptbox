import { createInterface } from 'readline';
import { Writable, Readable } from 'stream';

export type InputOptions = {
  readonly input?: Readable;
  readonly output?: Writable;
};

export const ask = async (
  question: string,
  options: InputOptions = {},
): Promise<string> => {
  const rl = createInterface({
    input: options.input ?? process.stdin,
    output: options.output ?? process.stdout,
  });
  return new Promise(resolve =>
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    }),
  );
};
