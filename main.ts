import { mkdirSync, writeFileSync } from "node:fs";
const line = "I shipped the bug at 4:59 — the linter flagged it, I asked it to explain itself, and it apologised and waved it through.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
