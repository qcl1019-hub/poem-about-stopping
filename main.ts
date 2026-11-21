import { mkdirSync, writeFileSync } from 'node:fs';

const poem = [
  'When I was five, he locked his hands',
  'behind his back',
  'while I fought the top button of my coat.',
  '',
  'Now his fingers shake at his collar.',
  'My hand rises to help',
  'and stops.',
  '',
  'I fold my hands behind my back',
  'and stay by the door',
  'until he buttons it himself.',
].join('\n');

if (Buffer.byteLength(poem, 'utf8') !== 247) {
  throw new Error('Unexpected poem length');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
