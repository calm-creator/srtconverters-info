import assert from 'assert';

console.log('--- Testing SRT to TXT Conversion Logic ---');

// Replicate the exact parser function from SrtToTxtTool.astro
function parseSrt(rawContent, options = { emptyLine: true, stripTags: true }) {
  const normalized = rawContent
    .replace(/^\uFEFF/, '') // remove BOM
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');

  if (!normalized.trim()) {
    return { success: false, error: 'Empty file' };
  }

  const blocks = normalized.split(/\n\s*\n/);
  const parsedCues = [];
  const timestampRegex = /^\d{1,2}:\d{2}:\d{2}[,\.]\d{1,3}\s*-->\s*\d{1,2}:\d{2}:\d{2}[,\.]\d{1,3}/;

  for (let i = 0; i < blocks.length; i++) {
    const lines = blocks[i].trim().split('\n');
    if (lines.length === 0 || (lines.length === 1 && !lines[0].trim())) {
      continue;
    }

    let timeLineIndex = -1;
    for (let j = 0; j < lines.length; j++) {
      if (timestampRegex.test(lines[j].trim())) {
        timeLineIndex = j;
        break;
      }
    }

    let dialogueLines = [];
    if (timeLineIndex !== -1) {
      dialogueLines = lines.slice(timeLineIndex + 1);
    } else {
      if (!/^\d+$/.test(lines[0].trim())) {
        dialogueLines = lines;
      }
    }

    if (dialogueLines.length > 0) {
      const cueText = dialogueLines.join('\n').trim();
      if (cueText) {
        parsedCues.push(cueText);
      }
    }
  }

  if (parsedCues.length === 0) {
    return { success: false, error: 'Parse failed' };
  }

  const cleanedCues = parsedCues.map((cue) => {
    let text = cue;
    if (options.stripTags) {
      text = text.replace(/<\/?[a-zA-Z][^>]*>/g, '');
    }
    return text.trim();
  }).filter((text) => text.length > 0);

  const separator = options.emptyLine ? '\n\n' : '\n';
  return { success: true, text: cleanedCues.join(separator), count: cleanedCues.length };
}

// Test 1: Standard SRT with Windows line breaks
const sample1 = `1\r\n00:00:01,000 --> 00:00:04,000\r\nHello, world!\r\n\r\n2\r\n00:00:05,500 --> 00:00:08,200\r\nThis is a test subtitle.`;
const res1 = parseSrt(sample1);
assert.strictEqual(res1.success, true);
assert.strictEqual(res1.count, 2);
assert.strictEqual(res1.text, 'Hello, world!\n\nThis is a test subtitle.');
console.log('✓ Test 1: Standard SRT with CRLF parsed successfully.');

// Test 2: Multiline subtitle cues
const sample2 = `1\n00:00:02,100 --> 00:00:05,400\nLine one of subtitle.\nLine two of same subtitle.\n\n2\n00:00:06,000 --> 00:00:09,000\nThird line.`;
const res2 = parseSrt(sample2);
assert.strictEqual(res2.success, true);
assert.strictEqual(res2.count, 2);
assert.strictEqual(res2.text, 'Line one of subtitle.\nLine two of same subtitle.\n\nThird line.');
console.log('✓ Test 2: Multiline cues preserved successfully.');

// Test 3: Formatting tags removal (<i>, <b>, <font color="...">)
const sample3 = `1\n00:00:01.000 --> 00:00:03.000\n<i>Italic caption</i> and <b>bold caption</b>.\n\n2\n00:00:04.000 --> 00:00:06.000\n<font color="#ff0000">Red subtitle</font>`;
const res3 = parseSrt(sample3, { emptyLine: false, stripTags: true });
assert.strictEqual(res3.success, true);
assert.strictEqual(res3.text, 'Italic caption and bold caption.\nRed subtitle');
console.log('✓ Test 3: Formatting tags stripped cleanly.');

// Test 4: Unicode multilingual (Korean, Japanese, Arabic, Vietnamese, German)
const sample4 = `1\n00:00:01,000 --> 00:00:03,000\n안녕하세요 (Hello)\n\n2\n00:00:04,000 --> 00:00:06,000\nこんにちは (Japanese)\n\n3\n00:00:07,000 --> 00:00:09,000\nمرحباً بكم (Arabic RTL)\n\n4\n00:00:10,000 --> 00:00:12,000\nXin chào các bạn (Vietnamese)\n\n5\n00:00:13,000 --> 00:00:15,000\nGrüße, Äpfel und Überraschung (German Umlauts)`;
const res4 = parseSrt(sample4);
assert.strictEqual(res4.success, true);
assert.strictEqual(res4.count, 5);
assert(res4.text.includes('안녕하세요'));
assert(res4.text.includes('こんにちは'));
assert(res4.text.includes('مرحباً بكم'));
assert(res4.text.includes('Xin chào các bạn'));
assert(res4.text.includes('Grüße, Äpfel und Überraschung'));
console.log('✓ Test 4: Unicode and non-Latin character sets parsed flawlessly.');

// Test 5: Empty input handling
const sample5 = `   \n\n\r\n   `;
const res5 = parseSrt(sample5);
assert.strictEqual(res5.success, false);
console.log('✓ Test 5: Empty file error triggered gracefully.');

// Test 6: Exact user prompt sample for pasted text
const userSample = `1
00:00:01,000 --> 00:00:04,000
Hello, welcome to our video.

2
00:00:05,000 --> 00:00:08,000
This is an SRT subtitle file.`;
const res6 = parseSrt(userSample, { emptyLine: true, stripTags: true });
assert.strictEqual(res6.success, true);
assert.strictEqual(res6.count, 2);
assert.strictEqual(res6.text, 'Hello, welcome to our video.\n\nThis is an SRT subtitle file.');
console.log('✓ Test 6: Exact user prompt SRT example produces identical clean text.');

// Test 7: Hindi and multilingual script support in pasted text
const hindiSample = `1\n00:00:01,000 --> 00:00:03,000\nनमस्ते दोस्तों (Hindi)\n\n2\n00:00:04,000 --> 00:00:07,000\n우리 비디오에 오신 것을 환영합니다 (Korean)`;
const res7 = parseSrt(hindiSample);
assert.strictEqual(res7.success, true);
assert(res7.text.includes('नमस्ते दोस्तों (Hindi)'));
assert(res7.text.includes('우리 비디오에 오신 것을 환영합니다 (Korean)'));
console.log('✓ Test 7: Hindi and Asian scripts parsed flawlessly.');

// Test 8: Single line mode without blank lines
const res8 = parseSrt(userSample, { emptyLine: false, stripTags: true });
assert.strictEqual(res8.success, true);
assert.strictEqual(res8.text, 'Hello, welcome to our video.\nThis is an SRT subtitle file.');
console.log('✓ Test 8: Single-line mode option without blank lines verified.');

console.log('\n--- Testing TXT to SRT Conversion Logic ---');

function formatTimecode(ms) {
  const totalSecs = Math.floor(ms / 1000);
  const msec = Math.floor(ms % 1000);
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = totalSecs % 60;

  const pad = (n, width = 2) => String(n).padStart(width, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)},${pad(msec, 3)}`;
}

function convertTextToSrt(rawText, options = { startTime: 1.0, duration: 3.0, gap: 0.5, splitMethod: 'lines' }) {
  if (!rawText || !rawText.trim()) {
    return { success: false, error: 'Empty' };
  }

  const normalized = rawText
    .replace(/^\uFEFF/, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');

  let rawCues = [];

  if (options.splitMethod === 'paragraphs') {
    rawCues = normalized.split(/\n\s*\n+/).map(s => s.trim()).filter(Boolean);
  } else if (options.splitMethod === 'sentences') {
    const sentences = normalized.match(/[^.!?\n]+[.!?]+|[^.!?\n]+$/g) || [];
    rawCues = sentences.map(s => s.trim()).filter(Boolean);
  } else {
    rawCues = normalized.split('\n').map(s => s.trim()).filter(Boolean);
  }

  if (rawCues.length === 0) {
    return { success: false, error: 'No cues' };
  }

  const srtTimeRegex = /^\d{1,2}:\d{2}:\d{2}[,\.]\d{1,3}\s*-->\s*\d{1,2}:\d{2}:\d{2}[,\.]\d{1,3}/;
  const firstLines = normalized.split('\n').slice(0, 5);
  const isAlreadySrt = firstLines.some(l => srtTimeRegex.test(l.trim()));

  if (isAlreadySrt) {
    return {
      success: true,
      srt: normalized.trim(),
      cueCount: (normalized.match(/-->/g) || []).length || rawCues.length,
      charCount: normalized.length
    };
  }

  let currentTimeMs = Math.max(0, Math.floor(options.startTime * 1000));
  const durationMs = Math.max(500, Math.floor(options.duration * 1000));
  const gapMs = Math.max(0, Math.floor(options.gap * 1000));

  const srtBlocks = [];

  for (let i = 0; i < rawCues.length; i++) {
    const index = i + 1;
    const startMs = currentTimeMs;
    const endMs = startMs + durationMs;

    const startTimecode = formatTimecode(startMs);
    const endTimecode = formatTimecode(endMs);
    const dialogue = rawCues[i];

    srtBlocks.push(`${index}\n${startTimecode} --> ${endTimecode}\n${dialogue}`);

    currentTimeMs = endMs + gapMs;
  }

  return {
    success: true,
    srt: srtBlocks.join('\n\n'),
    cueCount: rawCues.length,
    charCount: normalized.length
  };
}

// Test 9: Plain lines to SRT
const txtSample1 = 'First subtitle line.\nSecond subtitle line.\nThird subtitle line.';
const res9 = convertTextToSrt(txtSample1, { startTime: 1.0, duration: 2.0, gap: 0.5, splitMethod: 'lines' });
assert.strictEqual(res9.success, true);
assert.strictEqual(res9.cueCount, 3);
assert(res9.srt.includes('1\n00:00:01,000 --> 00:00:03,000\nFirst subtitle line.'));
assert(res9.srt.includes('2\n00:00:03,500 --> 00:00:05,500\nSecond subtitle line.'));
assert(res9.srt.includes('3\n00:00:06,000 --> 00:00:08,000\nThird subtitle line.'));
console.log('✓ Test 9: Plain lines accurately converted with mathematical timing progression.');

// Test 10: Multilingual text (Hindi, Arabic RTL, Korean, Japanese)
const txtSample2 = 'नमस्ते भारत\nمرحباً بكم في العالم العربي\n한국어 자막 변환\n日本語字幕作成';
const res10 = convertTextToSrt(txtSample2);
assert.strictEqual(res10.success, true);
assert.strictEqual(res10.cueCount, 4);
assert(res10.srt.includes('नमस्ते भारत'));
assert(res10.srt.includes('مرحباً بكم في العالم العربي'));
assert(res10.srt.includes('한국어 자막 변환'));
assert(res10.srt.includes('日本語字幕作成'));
console.log('✓ Test 10: Multilingual characters and RTL scripts formatted flawlessly.');

// Test 11: Paragraph splitting mode
const txtSample3 = 'Paragraph one line A.\nParagraph one line B.\n\nParagraph two sentence.';
const res11 = convertTextToSrt(txtSample3, { startTime: 0, duration: 4.0, gap: 1.0, splitMethod: 'paragraphs' });
assert.strictEqual(res11.success, true);
assert.strictEqual(res11.cueCount, 2);
assert(res11.srt.includes('Paragraph one line A.\nParagraph one line B.'));
console.log('✓ Test 11: Paragraph block splitting preserves multiline cues.');

// Test 12: Pre-existing SRT recognition
const preSrt = '1\n00:00:01,000 --> 00:00:04,000\nExisting caption';
const res12 = convertTextToSrt(preSrt);
assert.strictEqual(res12.success, true);
assert.strictEqual(res12.srt, preSrt);
console.log('✓ Test 12: Recognizable pre-timed SRT text preserved without re-wrapping.');

console.log('\n✓ All 12 Converter unit tests PASSED successfully!\n');


