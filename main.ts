import { mkdirSync, writeFileSync } from "node:fs";

// One line roasting our own AI agent.
const roast = "Our agent will rewrite forty files without a flicker of doubt, then stop to ask my permission to run ls.";

const chars = [...roast].length;
if (chars < 1 || chars > 200) throw new Error(`roast is ${chars} characters; the limit is 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, roast);
