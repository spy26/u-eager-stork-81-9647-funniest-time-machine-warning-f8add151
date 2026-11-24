// Funniest Time Machine Warning Label — make.fun entry.
// Node 22, no dependencies. Writes the selected label to /output/entry.txt,
// byte-identical on every run (the entry is a single constant string).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: Any paradox you cause must be filed in triplicate: one copy for you, one for you, and one for you.";

// The gate allows 1–120 characters; refuse to write anything outside it.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1–120 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
