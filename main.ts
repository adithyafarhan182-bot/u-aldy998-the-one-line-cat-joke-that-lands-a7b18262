// "The Purr As Apology" — one-line cat joke for make.fun
// bounty u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), exactly, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat knocked my coffee off the table, held eye contact the whole way down, then purred — the closest thing to an apology I'll ever get.";

// The gate: UTF-8 text of 1 to 200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank chars, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
