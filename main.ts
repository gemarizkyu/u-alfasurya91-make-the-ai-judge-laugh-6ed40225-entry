// Make the AI Judge Laugh — make.fun entry program.
//
// This program is the whole entry. It loads the one-line office joke
// stored beside it in joke.txt and writes that line, unchanged, to
// /output/entry.txt, where the sealed gate scorer reads it.
//
// The joke lives in joke.txt so the text the judge sees is exactly the
// text reviewed in this repository. Nothing is generated at run time:
// no model call, no randomness, no clock. Every run writes the same
// bytes, so the replay matches the live run exactly.
//
// The joke in one sentence: the office printer only ever jams on the
// urgent documents, so the punchline is that it must read the subject
// line first. It is true to office life (everyone has watched a
// printer die at the worst possible moment), the turn is surprising
// (a printer that reads email), and it lands on the last words. The
// line is 90 characters, well under the 200-character gate, so no
// trimming is needed at run time.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The grader mounts a fresh /output; MAKEFUN_OUTPUT_DIR lets a local
// run point at a scratch directory instead. It is only a path.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Resolve the joke file from this module's own URL, never from the
// working directory, so the program works wherever the grader runs it.
const JOKE_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "joke.txt",
);

const joke = readFileSync(JOKE_PATH, "utf8").replace(/\r?\n$/, "");

// Self-check before finishing: the gate wants UTF-8 text of 1-200
// characters, not only whitespace, on a single line.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}
if (!joke.trim()) {
  throw new Error("joke must not be only whitespace");
}
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, joke, "utf8");

// Read back and confirm the written bytes are exactly the joke.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== joke) {
  throw new Error("read-back mismatch: /output/entry.txt differs");
}

console.log(`wrote ${joke.length} characters to ${OUTPUT_FILE}`);
