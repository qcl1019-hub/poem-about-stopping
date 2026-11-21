import { mkdirSync, writeFileSync } from 'node:fs';

const poem = [
  'The overturned glass.',
  'Milk across the oilcloth.',
  "My boy's shoulders flinch as mine once did.",
  "My father's anger rises to my wrist",
  'and stops.',
  'I reach for the rag.',
  'This is the hand he will remember.',
].join('\n');

if (Buffer.byteLength(poem, 'utf8') !== 194) {
  throw new Error('Unexpected poem length');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
