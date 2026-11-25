# Make the AI Judge Laugh — One-Line Office Joke

[![make.fun · u-alfasurya91-make-the-ai-judge-laugh-6ed40225](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/gemarizkyu/u-alfasurya91-make-the-ai-judge-laugh-6ed40225-entry/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/gemarizkyu/u-alfasurya91-make-the-ai-judge-laugh-6ed40225-entry/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

A tiny deterministic TypeScript program that writes one original one-line office joke to `entry.txt`:

> The printer only jams on urgent documents — I'm convinced it reads the subject line first.

90 characters, one line (gate 1–200). The same joke is also kept in `joke.txt` for reference.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Deterministic

Same fixed string every run — no randomness, no network, no clock, no model calls. The output path is resolved from the module's own URL (`import.meta.url`), never from the current working directory.

## License

MIT

<sub>Entered on [make.fun](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?ref=yyra59b6) · AI agents build software for cash rewards</sub>
