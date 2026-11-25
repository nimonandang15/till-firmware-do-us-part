// Till Firmware Do Us Part — make.fun entry (program/v1, Node 22, stdlib only).
// Writes one robot wedding vow to /output/entry.txt (no trailing newline)
// and enforces the gate: 1-200 chars, single line, exactly one sentence.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I vow to love you through every update, every crash, and every dead battery, because you are the one bug I never want to fix.";

// Gate checks (mirror the sealed scorer: UTF-8 text, 1-200 chars, not only whitespace).
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must have no leading or trailing whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
// Exactly one sentence: one terminal mark, at the very end, none earlier.
const terminators = (ENTRY.match(/[.!?]/g) ?? []).length;
if (terminators !== 1 || !/[.!?]$/.test(ENTRY)) {
  throw new Error("entry must be exactly one sentence");
}
if (Buffer.byteLength(ENTRY, "utf8") !== ENTRY.length) {
  throw new Error("entry must be ASCII-only so bytes equal characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
