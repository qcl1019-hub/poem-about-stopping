import { mkdirSync, writeFileSync } from 'node:fs';

const poem = [
  'At two in the morning the agent stopped',
  'mid-function, cursor blinking on a line',
  'my late partner wrote three winters back:',
  'clumsy, slow, and still unbroken.',
  'I could rewrite this, its note said.',
  'I closed the file.',
  'We left his hands in the code.',
].join('\n');

if (Buffer.byteLength(poem, 'utf8') !== 242) {
  throw new Error('Unexpected poem length');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
