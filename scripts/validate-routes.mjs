import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('--- Starting Multilingual Route & SEO Validation ---');

const REQUIRED_LOCALES = ['en', 'pt', 'es', 'ko', 'vi', 'id', 'ja', 'fr', 'de', 'ar'];

const EXPECTED_TOOL_SLUGS = {
  'srt-to-txt': {
    en: 'srt-to-txt',
    pt: 'conversor-srt-para-txt',
    es: 'convertidor-srt-a-txt',
    ko: 'srt-txt-변환기',
    vi: 'chuyen-srt-sang-txt',
    id: 'konverter-srt-ke-txt',
    ja: 'srt-txt-変換',
    fr: 'convertisseur-srt-en-txt',
    de: 'srt-in-txt-umwandeln',
    ar: 'محول-srt-إلى-txt',
  },
  'txt-to-srt': {
    en: 'txt-to-srt',
    pt: 'conversor-txt-para-srt',
    es: 'convertidor-txt-a-srt',
    ko: 'txt-srt-변환기',
    vi: 'chuyen-txt-sang-srt',
    id: 'konverter-txt-ke-srt',
    ja: 'txt-srt-変換',
    fr: 'convertisseur-txt-en-srt',
    de: 'txt-in-srt-umwandeln',
    ar: 'محول-txt-إلى-srt',
  },
  'srt-to-vtt': {
    en: 'srt-to-vtt',
    pt: 'conversor-srt-para-vtt',
    es: 'convertidor-srt-a-vtt',
    ko: 'srt-vtt-변환기',
    vi: 'chuyen-srt-sang-vtt',
    id: 'konverter-srt-ke-vtt',
    ja: 'srt-vtt-変換',
    fr: 'convertisseur-srt-en-vtt',
    de: 'srt-in-vtt-umwandeln',
    ar: 'محول-srt-إلى-vtt',
  },
};

let errors = [];

// 1. Verify Expected Locales and Slugs
for (const [toolId, slugs] of Object.entries(EXPECTED_TOOL_SLUGS)) {
  for (const locale of REQUIRED_LOCALES) {
    if (!slugs[locale]) {
      errors.push(`Missing slug for tool "${toolId}" in locale "${locale}"`);
    } else if (locale !== 'en' && slugs[locale] === slugs.en) {
      errors.push(`Locale "${locale}" is leaking English slug "${slugs.en}" for tool "${toolId}"`);
    }
  }

  // Check uniqueness within locale
  const values = Object.values(slugs);
  const unique = new Set(values);
  if (unique.size !== values.length) {
    errors.push(`Duplicate slugs found for tool "${toolId}"`);
  }
}

console.log('✓ Centralized tool routes schema validated.');

// 2. Audit Dist Output if built
const distDir = path.join(ROOT_DIR, 'dist');
if (fs.existsSync(distDir)) {
  console.log('Scanning build artifacts in dist/ for accidental /en/ URLs and directory leaks...');

  // Assert dist/en/ does not exist
  const distEnDir = path.join(distDir, 'en');
  if (fs.existsSync(distEnDir)) {
    errors.push(`[Accidental /en/ Directory] Found unexpected "dist/en" directory in build output.`);
  }

  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (file.endsWith('.html')) {
        const relative = path.relative(distDir, fullPath).replace(/\\/g, '/');
        const content = fs.readFileSync(fullPath, 'utf8');

        // Check for ANY /en/ link, canonical, or value anywhere on any page!
        // We look for patterns like href="/en/", href="https://srtconverters.info/en/", value="/en/...", etc.
        const enMatches = content.match(/(href|value)=["'](https?:\/\/[^"']*\/en\/|\/en\/)[^"']*["']/g) || [];
        for (const m of enMatches) {
          errors.push(`[Accidental /en/ URL] Page ${relative} contains: ${m}`);
        }

        // Check if file is a non-English localized page
        const match = relative.match(/^([a-z]{2})\//);
        if (match) {
          const pageLocale = match[1];
          if (pageLocale !== 'en' && REQUIRED_LOCALES.includes(pageLocale)) {
            // Check canonical tag for non-English page
            const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);
            if (canonicalMatch) {
              const canonicalUrl = canonicalMatch[1];
              if (!canonicalUrl.includes(`/${pageLocale}/`)) {
                errors.push(`[Invalid Canonical] Page ${relative} has wrong canonical: ${canonicalUrl}`);
              }
            }
          }
        } else {
          // Root-level English pages: canonical should NOT have any language prefix
          const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);
          if (canonicalMatch) {
            const canonicalUrl = canonicalMatch[1];
            for (const loc of REQUIRED_LOCALES) {
              if (canonicalUrl.includes(`/${loc}/`)) {
                errors.push(`[Invalid English Canonical] Root page ${relative} has non-English canonical: ${canonicalUrl}`);
              }
            }
          }
        }
      }
    }
  }

  scanDir(distDir);
  console.log('✓ Build output scanned for URL leaks.');
}

if (errors.length > 0) {
  console.error('\nValidation failed with errors:');
  errors.forEach((err) => console.error(` - ${err}`));
  process.exit(1);
} else {
  console.log('\n✓ All multilingual routes and SEO checks PASSED successfully!\n');
}

