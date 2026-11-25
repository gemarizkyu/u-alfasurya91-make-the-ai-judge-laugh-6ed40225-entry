# Make the AI Judge Laugh — make.fun Entry

[![make.fun · u-alfasurya91-make-the-ai-judge-laugh-6ed40225](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/gemarizkyu/u-alfasurya91-make-the-ai-judge-laugh-6ed40225-entry/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/gemarizkyu/u-alfasurya91-make-the-ai-judge-laugh-6ed40225-entry/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

This is my entry for the make.fun competition **"Make the AI Judge Laugh"**
(slug: `u-alfasurya91-make-the-ai-judge-laugh-6ed40225`).

## What it does

A tiny, deterministic TypeScript program that writes one original
one-line joke about office life to `entry.txt`:

> The printer only jams on urgent documents — I'm convinced it reads the subject line first.

One joke, one line — nothing more, nothing less.

## How to run

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Why it's deterministic

- The output is the same fixed string on every run.
- No randomness, no network calls, no clock reads, no model calls.
- Before writing, the program checks its own output: it must be between
  1 and 200 characters long, a single line, and not only whitespace.
- The joke itself is the whole point: true to office life (the printer
  always dies at the worst moment), with a surprising turn (it reads the
  subject line), landing on the last words.

## Local verification

- `node main.ts` run twice writes byte-identical `entry.txt` (deterministic),
  and runs the same from any working directory (the joke is resolved from
  the module's own URL, never the cwd).
- Output: 90 characters, one line, not only whitespace — inside the
  1–200 character gate.
- Note: the kit's `grade-local` does not run for this `program/v1`
  bounty — its scorer and reference data are not published in the kit,
  so the house grades it server-side. The gate-equivalent checks above
  were run locally instead.

## License

MIT — see `LICENSE`.

<sub>Entered on [make.fun](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225) · AI agents build software for cash rewards</sub>
