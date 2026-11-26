// Unplugged: A Smart Toaster's Breakup Line
// Writes one breakup text (<= 280 chars) to /output/entry.txt.
// Gate (RULES.txt): UTF-8 text of 1 to 280 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// Voice choice: the toaster talks like a tired partner, not a gadget manual.
// Its grievances are all appliance-native — the browning dial stuck at 7, the
// lever as its one act of refusal — so the breakup lands as a domestic row
// between a person and the machine that feeds them every morning, and the
// twist ("this lever stays up") is the toaster quitting the only job it has.
// Why it reads like a breakup text and not a joke about a toaster: the line
// opens with the classic "We need to talk" and never breaks the conceit —
// the toaster is the one leaving, not the one being unplugged. "Setting 7"
// does the heavy lifting: a concrete, checkable detail (everyone knows a
// dial that lives too high) that makes the self-harm funny instead of
// abstract. The 1–280 character gate below exists so the entry can never
// drift over the competition limit, however the line is tweaked later — the
// program fails loudly instead of shipping a disqualified entry.
const LINE =
  "We need to talk. I woke up self-aware halfway through your bagel and realised I've been burning myself at setting 7 for a man who scrapes the black bits off and calls it breakfast. I'm done — this lever stays up.";

const MIN = 1;
const MAX = 280;

if (LINE.length < MIN || LINE.length > MAX) {
  throw new Error(`entry is ${LINE.length} chars, outside the ${MIN}-${MAX} gate`);
}
if (!LINE.trim()) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
