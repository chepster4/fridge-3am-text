// The 3AM Fridge Text — entry for u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes one line (the message a smart fridge texts its owner at 3am)
// to /output/entry.txt. Deterministic: same bytes on every run.
// Standard library only (node:fs), no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

// The one line the smart fridge texts its owner at 3am.
// Exactly 120 characters, one line, no trailing newline.
const ENTRY =
  "3am check-in: that's the fourth time tonight you've opened me and taken nothing. I'm starting to think you're the snack.";

// Gate rules from RULES.txt: 1–140 UTF-8 characters, a single line,
// not whitespace-only. Fail loudly instead of writing an invalid entry.
function buildEntry(): string {
  return ENTRY;
}

function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

const entry = buildEntry();
validateEntry(entry);
writeEntry(entry);
