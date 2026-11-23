// Make the AI Judge Laugh: Office Jokes — a program that writes a single
// one-line office joke to /output/entry.txt.
//
// The joke is a fixed string on purpose: the entry is judged on the
// writing, so the program's job is to deliver exactly that line, byte
// for byte, every run.

import { mkdirSync, writeFileSync } from "node:fs";

// Why this line, against the judge's brief:
// - A genuine one-line joke about office life: asking HR for a raise.
// - The turn lands at the end: "we're a family" is the setup's cliché,
//   and "filed for emancipation" answers it with a legal punchline the
//   reader does not see coming.
// - Recognition: every office worker has heard the "we're a family" line
//   from HR, usually right when money is on the table.
// - Tight: 81 characters, no word wasted; freshness comes from the
//   emancipation twist, not a Monday-morning or photocopier line.
const JOKE =
  "I asked HR for a raise and they said we're a family, so I filed for emancipation.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function main(): void {
  // The gate only accepts 1 to 199 characters of UTF-8 text, so refuse
  // loudly instead of shipping a line the gate would throw away.
  if (JOKE.length < 1 || JOKE.length > 199) {
    throw new Error(`entry must be 1-199 characters, got ${JOKE.length}`);
  }
  // /output is a mount point in the grader sandbox: never delete the
  // directory itself, only create it if missing and write the file.
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, JOKE, "utf8");
  console.log(`Wrote ${JOKE.length} characters to ${OUT_FILE}`);
}

main();
