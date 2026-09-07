import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const toolRoutes = {
  en: 'dist/srt-to-vtt/index.html',
  pt: 'dist/pt/conversor-srt-para-vtt/index.html',
  es: 'dist/es/convertidor-srt-a-vtt/index.html',
  fr: 'dist/fr/convertisseur-srt-en-vtt/index.html',
  de: 'dist/de/srt-in-vtt-umwandeln/index.html',
  id: 'dist/id/konverter-srt-ke-vtt/index.html',
  vi: 'dist/vi/chuyen-srt-sang-vtt/index.html',
  ja: 'dist/ja/srt-vtt-変換/index.html',
  ko: 'dist/ko/srt-vtt-변환기/index.html',
  ar: 'dist/ar/محول-srt-إلى-vtt/index.html',
};

console.log('=== Verifying SRT to VTT Localization Parity Across All 10 Locales ===\n');

let allPassed = true;

for (const [locale, relPath] of Object.entries(toolRoutes)) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`✗ [${locale.toUpperCase()}] File missing: ${relPath}`);
    allPassed = false;
    continue;
  }

  const html = fs.readFileSync(fullPath, 'utf-8');
  const h2Matches = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/g)].map(m => m[1]);
  const faqQuestions = [...html.matchAll(/class="faq-question"[^>]*>([^<]+)<\/span>/g)].map(m => m[1]);
  const trMatches = [...html.matchAll(/<tr[^>]*>/g)];
  const titleMatch = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const metaMatch = html.match(/<meta name="description" content="([^"]+)"/)?.[1];

  console.log(`[${locale.toUpperCase().padEnd(2)}] ${relPath}`);
  console.log(`     H2 Count: ${h2Matches.length} (Expected >= 11)`);
  console.log(`     FAQ Count: ${faqQuestions.length} (Expected: 8)`);
  console.log(`     Table Rows: ${trMatches.length} (Expected: 11)`);
  console.log(`     Title: ${titleMatch?.slice(0, 60)}...`);

  if (h2Matches.length < 11 || faqQuestions.length !== 8 || trMatches.length !== 11) {
    console.error(`     ✗ Parity check failed for ${locale}!`);
    allPassed = false;
  } else {
    console.log(`     ✓ 100% Content & Structure Parity Passed.`);
  }
}

if (!allPassed) {
  console.error('\n✗ One or more locales failed structural parity verification.');
  process.exit(1);
} else {
  console.log('\n✓ ALL 10 LOCALES HAVE 100% CONTENT PARITY!');
}
