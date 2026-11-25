const { mkdirSync, writeFileSync } = require("node:fs");
const { join, resolve } = require("node:path");

const TEXT = "I won’t sign at 3 AM; I set last Tuesday’s recipient as my screensaver. If you recognize it, at least one of us is awake.";

// Reuse the last recipient as a passive-aggressive night display.
const length = [...TEXT].length;
if (length < 1 || length > 200 || !/\S/u.test(TEXT)) {
  throw new Error(`Entry must contain 1–200 non-whitespace characters; got ${length}.`);
}

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TEXT, "utf8");
