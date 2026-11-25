import { mkdirSync, writeFileSync } from 'node:fs';

const excuse = (process.env.EXCUSE_TEXT ?? "I won't sign at 3 AM; I set last Tuesday's recipient as my screensaver. If you recognize it, at least one of us is awake.").replace(/\r?\n$/, '');
const characters = Array.from(excuse).length;

if (excuse.trim().length === 0 || characters > 200) {
  console.error(`Invalid excuse: measured ${characters} characters; allowed range is 1-200 with non-whitespace content; nothing was written.`);
  process.exit(1);
}

const destination = '/output/entry.txt';
mkdirSync('/output', { recursive: true });
writeFileSync(destination, excuse, 'utf8');
console.log(`Wrote ${characters} characters (allowed range: 1-200) to ${destination}`);
