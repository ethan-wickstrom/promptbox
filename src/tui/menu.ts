import { match } from 'ts-pattern';
import { Writable, Readable } from 'stream';

export type MenuOptions = {
  readonly input?: Readable;
  readonly output?: Writable;
};

export class TuiMenu {
  private index = 0;
  private readonly input: Readable;
  private readonly output: Writable;
  private readonly items: ReadonlyArray<string>;

  constructor(items: ReadonlyArray<string>, options: MenuOptions = {}) {
    this.items = items;
    this.input = options.input ?? process.stdin;
    this.output = options.output ?? process.stdout;
  }

  async run(): Promise<number> {
    return new Promise<number>(resolve => {
      const onData = (data: Buffer): void => {
        const key = data.toString();
        match(key)
          .with('\u001b[A', () => this.move(-1)) // up
          .with('\u001b[B', () => this.move(1)) // down
          .with('\r', () => finish()) // enter
          .otherwise(() => undefined);
      };

      const finish = (): void => {
        this.cleanup(onData);
        resolve(this.index);
      };

      if (typeof (this.input as NodeJS.ReadStream).setRawMode === 'function') {
        (this.input as NodeJS.ReadStream).setRawMode(true);
      }
      this.input.resume();
      this.input.on('data', onData);
      this.render();
    });
  }

  private cleanup(onData: (data: Buffer) => void): void {
    this.input.removeListener('data', onData);
    if (typeof (this.input as NodeJS.ReadStream).setRawMode === 'function') {
      (this.input as NodeJS.ReadStream).setRawMode(false);
    }
    this.output.write('\n');
  }

  private move(delta: number): void {
    const total = this.items.length;
    this.index = (this.index + delta + total) % total;
    this.render();
  }

  private render(): void {
    this.output.write('\x1b[2J\x1b[0f'); // clear screen
    this.items.forEach((item, i) => {
      const prefix = i === this.index ? '> ' : '  ';
      this.output.write(`${prefix}${item}\n`);
    });
  }
}
