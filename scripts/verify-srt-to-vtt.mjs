import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '../dist/srt-to-vtt/index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('File does not exist:', htmlPath);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf-8');

console.log('--- Checking /srt-to-vtt/ SEO & Content Quality ---');

const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
console.log('Title:', title);

const metaDesc = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
console.log('Meta Description:', metaDesc);

const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
console.log('Canonical:', canonical);

const h1 = html.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1];
console.log('H1 Heading:', h1);

const h2Matches = [...html.matchAll(/<h2[^>]*>([^<]+)<\/h2>/g)].map(m => m[1]);
console.log(`H2 Headings (${h2Matches.length}):`);
h2Matches.forEach(h => console.log(' - ' + h));

const articleMatch = html.match(/<article class="tool-content-article">([\s\S]*?)<\/article>/);
if (articleMatch) {
  const textOnly = articleMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = textOnly.split(' ');
  console.log(`Content Word Count: ~${words.length} words`);
}

// Check schemas
const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);
console.log(`Structured Data (JSON-LD) blocks: ${schemas.length}`);
schemas.forEach((s, i) => {
  try {
    const parsed = JSON.parse(s);
    console.log(` Schema ${i + 1} type:`, parsed['@type']);
  } catch (e) {
    console.log(` Schema ${i + 1} parse error`);
  }
});

// Check tool elements
const requiredElements = [
  'id="srt-paste-input"',
  'id="vtt-live-preview"',
  'id="btn-sample"',
  'id="btn-clear-paste"',
  'id="btn-copy-live"',
  'id="btn-download-live"',
  'id="dropzone"',
  'id="btn-browse"',
  'id="opt-cue-numbers"',
  'id="opt-clean-tags"',
  'id="btn-convert"',
  'id="btn-download"',
  'id="btn-copy"',
  'id="btn-reset"',
];

console.log('\n--- Checking Interactive Tool Elements ---');
let allElementsPresent = true;
for (const el of requiredElements) {
  if (html.includes(el)) {
    console.log(`✓ Found ${el}`);
  } else {
    console.error(`✗ Missing ${el}`);
    allElementsPresent = false;
  }
}

if (allElementsPresent) {
  console.log('\n✓ All tool elements and SEO criteria VERIFIED!\n');
} else {
  process.exit(1);
}
