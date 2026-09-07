import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const distDir = path.join(ROOT_DIR, 'dist');

console.log('--- Running Mobile Responsiveness & Audit Check ---');

let errors = [];

// 1. Check generated HTML pages
const samplePages = [
  'tools/index.html',
  'fr/tools/index.html',
  'srt-to-txt/index.html',
  'txt-to-srt/index.html',
  'srt-to-vtt/index.html',
  'fr/convertisseur-srt-en-vtt/index.html',
  'privacy/index.html',
  'terms/index.html',
  'about/index.html',
  'contact/index.html',
  '404.html',
  'fr/404/index.html',
  'fr/convertisseur-srt-en-txt/index.html',
  'fr/convertisseur-txt-en-srt/index.html',
  'ar/محول-srt-إلى-txt/index.html',
  'ar/محول-txt-إلى-srt/index.html',
  'ar/محول-srt-إلى-vtt/index.html',
  'ko/index.html',
  'ko/txt-srt-변환기/index.html',
  'ko/srt-vtt-변환기/index.html',
  'ja/srt-txt-変換/index.html',
  'ja/txt-srt-変換/index.html',
  'ja/srt-vtt-変換/index.html',
  'de/index.html',
  'de/txt-in-srt-umwandeln/index.html',
  'de/srt-in-vtt-umwandeln/index.html',
];

for (const relPath of samplePages) {
  const fullPath = path.join(distDir, relPath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`File missing in build output: ${relPath}`);
    continue;
  }

  const html = fs.readFileSync(fullPath, 'utf8');

  // Check viewport
  if (!html.includes('name="viewport" content="width=device-width, initial-scale=1.0"')) {
    errors.push(`${relPath} missing standard mobile viewport meta tag`);
  }

  // Check mobile hamburger button
  if (!html.includes('id="hamburger-btn"')) {
    errors.push(`${relPath} missing mobile hamburger button`);
  }

  // Check mobile drawer
  if (!html.includes('id="mobile-drawer"')) {
    errors.push(`${relPath} missing mobile drawer`);
  }

  const isEnglishOnlyPage = ['privacy/', 'terms/', 'about/', 'contact/'].some((p) => relPath.startsWith(p));

  if (!isEnglishOnlyPage) {
    // Check language selector in header (desktop)
    if (!html.includes('id="language-select"')) {
      errors.push(`${relPath} missing desktop language selector in header`);
    }

    // Check mobile globe language button (mobile)
    if (!html.includes('id="mobile-lang-trigger"')) {
      errors.push(`${relPath} missing mobile globe language button in header`);
    }

    // Check mobile language dialog
    if (!html.includes('id="mobile-lang-dialog"')) {
      errors.push(`${relPath} missing mobile language dialog`);
    }
  } else {
    // Assert language selector is NOT present on English-only pages
    if (html.includes('id="language-select"')) {
      errors.push(`${relPath} should NOT have desktop language selector`);
    }
    if (html.includes('id="mobile-lang-trigger"')) {
      errors.push(`${relPath} should NOT have mobile globe language button`);
    }
  }

  // Check theme toggle in header
  if (!html.includes('id="theme-toggle-btn"')) {
    errors.push(`${relPath} missing theme toggle in header`);
  }

  // Check tool-page converter inputs if on a tool page
  if (relPath.includes('srt-to-txt') || relPath.includes('convertisseur-srt-en-txt') || relPath.includes('محول-srt-إلى-txt') || relPath.includes('srt-txt-変換')) {
    if (!html.includes('id="srt-paste-input"')) {
      errors.push(`${relPath} missing primary SRT paste textarea (id="srt-paste-input")`);
    }
    if (!html.includes('id="srt-live-preview"')) {
      errors.push(`${relPath} missing live preview textarea (id="srt-live-preview")`);
    }
    if (!html.includes('id="btn-sample"')) {
      errors.push(`${relPath} missing Try Sample button (id="btn-sample")`);
    }
    if (!html.includes('id="btn-convert"')) {
      errors.push(`${relPath} missing Convert to Text button (id="btn-convert")`);
    }
    if (!html.includes('id="dropzone"')) {
      errors.push(`${relPath} missing secondary upload dropzone (id="dropzone")`);
    }
    if (!html.includes('id="btn-browse"')) {
      errors.push(`${relPath} missing browse file button (id="btn-browse")`);
    }
  }

  // Check txt-to-srt specific tool inputs
  if (relPath.includes('txt-to-srt') || relPath.includes('convertisseur-txt-en-srt') || relPath.includes('محول-txt-إلى-srt') || relPath.includes('txt-srt-변환기') || relPath.includes('txt-in-srt-umwandeln')) {
    if (!html.includes('id="txt-paste-input"')) {
      errors.push(`${relPath} missing primary TXT paste textarea (id="txt-paste-input")`);
    }
    if (!html.includes('id="srt-live-preview"')) {
      errors.push(`${relPath} missing live preview textarea (id="srt-live-preview")`);
    }
    if (!html.includes('id="opt-start-time"')) {
      errors.push(`${relPath} missing start time setting (id="opt-start-time")`);
    }
    if (!html.includes('id="opt-duration"')) {
      errors.push(`${relPath} missing duration setting (id="opt-duration")`);
    }
    if (!html.includes('id="btn-convert"')) {
      errors.push(`${relPath} missing Convert to SRT button (id="btn-convert")`);
    }
  }

  // Check srt-to-vtt specific tool inputs
  if (relPath.includes('srt-to-vtt') || relPath.includes('convertisseur-srt-en-vtt') || relPath.includes('محول-srt-إلى-vtt') || relPath.includes('srt-vtt-변환기') || relPath.includes('srt-in-vtt-umwandeln') || relPath.includes('srt-vtt-変換')) {
    if (!html.includes('id="srt-paste-input"')) {
      errors.push(`${relPath} missing primary SRT paste textarea (id="srt-paste-input")`);
    }
    if (!html.includes('id="vtt-live-preview"')) {
      errors.push(`${relPath} missing live preview textarea (id="vtt-live-preview")`);
    }
    if (!html.includes('id="btn-sample"')) {
      errors.push(`${relPath} missing Try Sample button (id="btn-sample")`);
    }
    if (!html.includes('id="btn-convert"')) {
      errors.push(`${relPath} missing Convert to VTT button (id="btn-convert")`);
    }
    if (!html.includes('id="dropzone"')) {
      errors.push(`${relPath} missing secondary upload dropzone (id="dropzone")`);
    }
  }

  // Check footer center alignment CSS presence
  if (!html.includes('align-items:center') && !html.includes('text-align:center')) {
    errors.push(`${relPath} footer might not have center alignment styles`);
  }
}

// 2. Check CSS for overflow hazards (either external bundles or inlined styles)
const astroDir = path.join(distDir, '_astro');
let verifiedOverflow = false;

if (fs.existsSync(astroDir)) {
  const cssFiles = fs.readdirSync(astroDir).filter(f => f.endsWith('.css'));
  if (cssFiles.length > 0) {
    console.log(`Audited ${cssFiles.length} CSS bundles in dist/_astro/`);
    for (const cssFile of cssFiles) {
      const cssContent = fs.readFileSync(path.join(astroDir, cssFile), 'utf8');
      if (cssContent.includes('overflow-x:hidden')) {
        console.log(`✓ Verified overflow-x: hidden in ${cssFile}`);
        verifiedOverflow = true;
      }
    }
  }
}

if (!verifiedOverflow) {
  // Styles are inlined directly into HTML
  const sampleHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  if (sampleHtml.includes('overflow-x:hidden') || sampleHtml.includes('overflow-x: hidden')) {
    console.log('✓ Verified overflow-x: hidden in inlined HTML styles');
    verifiedOverflow = true;
  }
}

if (errors.length > 0) {
  console.error('\nMobile Audit failed with errors:');
  errors.forEach(err => console.error(` - ${err}`));
  process.exit(1);
} else {
  console.log('\n✓ Mobile Responsiveness Audit PASSED for all tested pages!\n');
}
