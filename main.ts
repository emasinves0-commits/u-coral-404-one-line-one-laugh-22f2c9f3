import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const ENTRY_LINE = "My dog filed a restraining order against the leash; now I walk him on a shoelace.";

function validateEntry(text: string): void {
  if (text.trim().length === 0) {
    console.error("Invalid entry: the line is only whitespace.");
    process.exit(1);
  }
  if (text.length < 1 || text.length > 200) {
    console.error(`Invalid entry: length ${text.length} is outside 1-200 characters.`);
    process.exit(1);
  }
}

validateEntry(ENTRY_LINE);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY_LINE, "utf8");
