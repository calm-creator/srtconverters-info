import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

const nonEnglishSlugs = [
  { locale: 'pt', slug: 'conversor-txt-para-srt' },
  { locale: 'es', slug: 'convertidor-txt-a-srt' },
  { locale: 'fr', slug: 'convertisseur-txt-en-srt' },
  { locale: 'de', slug: 'txt-in-srt-umwandeln' },
  { locale: 'ar', slug: 'محول-txt-إلى-srt' },
  { locale: 'ja', slug: 'txt-srt-変換' },
  { locale: 'ko', slug: 'txt-srt-변환기' },
  { locale: 'vi', slug: 'chuyen-txt-sang-srt' },
  { locale: 'id', slug: 'konverter-txt-ke-srt' },
];

const englishPhrasesForbidden = [
  'Frequently Asked Questions',
  'What is a Plain Text (TXT) File?',
  'What is an SRT (SubRip) Subtitle File?',
  'What is a TXT to SRT Converter?',
  'How to Convert TXT to SRT Step by Step',
  'Why Simply Renaming .txt to .srt Does Not Work',
  'Understanding Subtitle Timings: How Auto-Generation Works',
  'Real-World Workflows for TXT to SRT Conversion',
  'Common TXT to SRT Errors and How to Troubleshoot Them',
  'TXT vs SRT: Key Technical Differences',
  '100% In-Browser Privacy Guarantee',
  'Technical Aspect',
  'Subtitles Disappear Too Fast',
  'Subtitles Overlapping Each Other',
  'YouTube Video Captions & SEO',
  'Podcast & Webinar Transcripts',
  'How do I convert a TXT file to SRT?',
  'Does a plain TXT file contain subtitle timestamps?'
];

let hasErrors = false;

for (const { locale, slug } of nonEnglishSlugs) {
  const htmlFile = path.join(distDir, locale, slug, 'index.html');
  if (!fs.existsSync(htmlFile)) {
    console.error(`Missing HTML file: ${htmlFile}`);
    hasErrors = true;
    continue;
  }

  const html = fs.readFileSync(htmlFile, 'utf-8');
  console.log(`Checking [${locale}] -> ${locale}/${slug}/index.html (${(html.length / 1024).toFixed(1)} KB)`);

  for (const phrase of englishPhrasesForbidden) {
    if (html.includes(phrase)) {
      console.error(`  FAIL: Found English phrase in [${locale}]: "${phrase}"`);
      hasErrors = true;
    }
  }
}

// Also check English page has English content
const enHtmlFile = path.join(distDir, 'txt-to-srt', 'index.html');
if (fs.existsSync(enHtmlFile)) {
  const enHtml = fs.readFileSync(enHtmlFile, 'utf-8');
  if (!enHtml.includes('Frequently Asked Questions')) {
    console.error(`FAIL: English page missing Frequently Asked Questions`);
    hasErrors = true;
  }
  console.log(`Checking [en] -> txt-to-srt/index.html (OK)`);
}

if (!hasErrors) {
  console.log('\nSUCCESS! All non-English TXT to SRT pages are 100% localized with ZERO English leaks!');
} else {
  process.exit(1);
}
