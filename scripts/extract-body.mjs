import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, "../source/index.html");
const outDir = join(__dirname, "../src/assets");
const outPath = join(outDir, "body.html");

const html = readFileSync(sourcePath, "utf8");
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) throw new Error("Could not find <body> in index.html");

let body = bodyMatch[1].trim();

// Remove UTM tracking from agency links only
body = body.replace(
  /https:\/\/thefirstthelast\.agency\/\?utm_source=jeskojets&amp;utm_medium=article&amp;utm_campaign=promo/g,
  "https://thefirstthelast.agency/"
);

// Scripts are loaded by React (innerHTML does not run script tags)
const scriptCut = body.indexOf(
  '<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery'
);
if (scriptCut !== -1) body = body.slice(0, scriptCut).trim();

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, body, "utf8");
console.log(`Wrote ${outPath} (${body.length} chars)`);
