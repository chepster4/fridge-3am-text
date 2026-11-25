// The 3AM Fridge Text — entry for u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes one line (the message a smart fridge texts its owner at 3am)
// to /output/entry.txt. Deterministic: same bytes on every run.
// Standard library only (node:fs), no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "3am check-in: that's the fourth time tonight you've opened me and taken nothing. I'm starting to think you're the snack.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
