import type { SrtToVttDetailContent } from './types';

export const enContent: SrtToVttDetailContent = {
  metaTitle: 'Free SRT to VTT Converter Online – Fast & Client-Side WebVTT',
  metaDescription: 'Convert SRT subtitle files to valid WebVTT (.vtt) format online for free. Automatically adds WEBVTT header and converts timestamp commas to periods with 100% browser privacy.',
  h1: 'SRT to VTT Converter',
  heroDescription: 'Easily convert SubRip (.srt) subtitles to W3C-compliant WebVTT (.vtt) format for HTML5 video players, streaming platforms, and modern web applications. 100% free, instantaneous, and strictly private in your browser.',
  toolName: 'SRT to VTT Converter',
  ui: {
    pasteTitle: 'SRT Subtitle Input (.srt)',
    pastePlaceholder: 'Paste your SRT content here (e.g.\n1\n00:00:01,000 --> 00:00:04,000\nWelcome to our video tutorial!)...',
    orDivider: 'OR',
    uploadTitle: 'Option 2 — Upload SRT File',
    convertButton: 'Convert to VTT',
    clearButton: 'Clear',
    trySampleButton: 'Try Sample',
    livePreviewTitle: 'Converted WebVTT Output (.vtt)',
    errorNoInput: 'Please paste SRT subtitle text or upload an .srt file to convert.',
    pastedContentSource: 'Pasted SRT Content',
    dropzoneTitle: 'Drag & drop your .srt file here',
    dropzoneSubtitle: 'or click to browse from your device',
    browseButton: 'Choose SRT File',
    dropActiveText: 'Drop the SRT file here...',
    fileSelected: 'File selected',
    fileNameLabel: 'File Name',
    fileSizeLabel: 'File Size',
    cueCountLabel: 'Cues Converted',
    characterCountLabel: 'Characters',
    downloadAction: 'Download .vtt',
    copyAction: 'Copy to Clipboard',
    copiedSuccess: 'Copied to clipboard!',
    resetAction: 'Convert Another File',
    previewTitle: 'Converted WebVTT Preview',
    previewEmpty: 'Your converted WebVTT (.vtt) subtitles will appear here immediately after entering or uploading an SRT file.',
    optionsTitle: 'Conversion Options',
    optIncludeCueNumbers: 'Include cue identifiers (numbers)',
    optCleanTags: 'Strip unsupported legacy tags (e.g. <font>)',
    errorInvalidFile: 'Please upload a valid .srt subtitle file.',
    errorEmptyFile: 'The provided file or input is completely empty.',
    errorParseFailed: 'Failed to detect valid SRT subtitle cues. Please ensure timestamps follow the format 00:00:00,000 --> 00:00:00,000.',
  },
  sections: {
    whatIsSrt: {
      title: 'What is an SRT File?',
      content: [
        'An SRT (SubRip Subtitle) file is the most ubiquitous and historically widespread plain-text subtitle format in digital video. Originating from the Windows software SubRip—which extracted subtitles and timings from physical DVD media—the .srt format became the global standard for desktop media players, television sets, peer-to-peer sharing, and video production software.',
        'Structurally, an SRT file is composed of sequential subtitle blocks separated by blank lines. Each block contains four fundamental components: a sequential cue index number (1, 2, 3...), a precise timeline definition indicating when the subtitle appears and disappears (formatted strictly as hours:minutes:seconds,milliseconds: 00:00:01,250 --> 00:00:04,500), one or more lines of dialogue text, and an ending blank line.',
        'While SRT files are straightforward and enjoy near-universal compatibility in standalone software like VLC Media Player, MPV, HandBrake, and Adobe Premiere Pro, they were engineered before the modern World Wide Web. As a result, SRT lacks native support in HTML5 web browsers and does not provide standardized mechanisms for responsive typography, cue positioning, or custom CSS styling.',
      ],
    },
    whatIsVtt: {
      title: 'What is a WebVTT (.vtt) File?',
      content: [
        'WebVTT (Web Video Text Tracks) is the official open standard subtitle, caption, and chapter format created specifically for the web by the World Wide Web Consortium (W3C) and WHATWG. Introduced alongside the HTML5 specification, WebVTT is supported natively by all modern web browsers—including Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge—without requiring any third-party JavaScript plugins, media players, or server-side transcolders.',
        'A WebVTT file is recognized by its mandatory introductory header: the very first line of the document must begin with the literal string "WEBVTT". Following this signature, WebVTT files can optionally include metadata blocks (such as title, author, or language information) and stylesheet references before beginning individual subtitle cues.',
        'In addition to displaying basic dialogue, WebVTT is architected for modern responsive interfaces. It provides built-in settings for vertical orientation, horizontal placement, line positioning, text alignment, and cue size. Furthermore, WebVTT integrates seamlessly with modern CSS via the ::cue pseudo-element, enabling web developers and content creators to control fonts, text shadows, background opacity, and color palettes directly from their website stylesheets.',
      ],
    },
    whatIsConverter: {
      title: 'What is an SRT to VTT Converter?',
      content: [
        'An SRT to VTT converter is a specialized subtitle utility designed to bridge the gap between traditional video production formats and modern web video delivery. It parses the syntax of SubRip (.srt) files, performs mathematical and structural format conversions, and outputs valid, W3C-compliant WebVTT (.vtt) files ready for immediate embedding into HTML5 <video> elements.',
        'The primary structural transformation performed by the converter is adapting timestamp delimiters. In standard SRT, milliseconds are preceded by a comma (for example, 00:01:23,450). However, the WebVTT specification strictly mandates that milliseconds be delimited by an ASCII period (00:01:23.450). A single comma in a WebVTT timestamp causes web browser media engines to reject the entire track or silently fail to display captions.',
        'Our converter performs all parsing, timestamp transformation, cue restructuring, and file generation 100% locally within your browser client. No file buffers or dialogue lines are ever transmitted to an external server, delivering instantaneous execution speeds, maximum data privacy, and zero file size limitations.',
      ],
    },
    srtVsVtt: {
      title: 'SRT vs VTT: Key Technical Differences',
      content: [
        'While SRT and WebVTT share a similar lineage and visually resemble each other at first glance, several critical architectural distinctions separate them:',
        '1. Mandatory File Header: An SRT file starts immediately with cue number "1" on the first line. In contrast, a WebVTT file MUST begin with "WEBVTT" on the very first line, optionally followed by a header description or comment. If a browser does not find the WEBVTT header, it rejects the file as invalid text.',
        '2. Millisecond Timestamp Syntax: SRT uses commas (00:00:05,200), whereas WebVTT uses periods (00:00:05.200). WebVTT also permits shorthand timestamps without hour designations (such as 05.200 --> 08.400) when a video is under one hour, although retaining the full HH:MM:SS.mmm format is considered best practice for cross-platform reliability.',
        '3. Cue Positioning and Geometry: SRT has no standardized way to position text; everything renders at the bottom-center of the screen unless non-standard proprietary tags are injected. WebVTT natively supports cue placement parameters appended directly to the timestamp line, including "line:10%", "position:80%", "align:left", and "size:50%". This prevents subtitles from obscuring lower-third titles, speaker names, or video watermarks.',
        '4. Styling Capabilities: SRT relies on legacy HTML-like markup like <i>, <b>, and <font color="...">, which modern web players often sanitize or ignore for security. WebVTT supports semantic voice tags (<v SpeakerName>), ruby annotations, class tags (<c.highlight>), and complete styling through CSS with the ::cue selector.',
        '5. Web Streaming Delivery: Modern streaming protocols including Apple HLS (HTTP Live Streaming) and MPEG-DASH deliver text tracks packaged as segmented WebVTT chunks. Attempting to feed raw SRT files into an HLS manifest results in playback errors across Safari and iOS devices.',
      ],
    },
    whyConvert: {
      title: 'Why Convert SRT to VTT?',
      benefits: [
        {
          title: 'Native HTML5 Video Compatibility',
          description: 'All modern web browsers natively decode WebVTT via the <track> tag without needing heavy JavaScript libraries, custom flash players, or external polyfills.',
        },
        {
          title: 'Full CSS Customization with ::cue',
          description: 'Change subtitle typography, background transparency, highlight colors, margins, and borders to perfectly match your brand identity and website design.',
        },
        {
          title: 'Precise Screen Positioning',
          description: 'Position subtitles anywhere on the video frame (top, bottom, left, right) to prevent captions from obscuring on-screen text, presenter names, or graphical charts.',
        },
        {
          title: 'HLS & DASH Streaming Compliance',
          description: 'Industry-standard adaptive bitrate streaming architectures like Apple HLS, AWS Elemental, and Cloudflare Stream require WebVTT for multi-language caption delivery.',
        },
        {
          title: 'Improved Video Accessibility & SEO',
          description: 'WebVTT tracks make video content fully accessible to hearing-impaired viewers and allow search engine crawlers to accurately index your spoken dialogues for higher search rankings.',
        },
        {
          title: 'Lightweight & Instantaneous',
          description: 'Because WebVTT is pure UTF-8 plain text, files are just a few kilobytes in size, loading instantly on mobile networks without buffering or impacting Core Web Vitals.',
        },
      ],
    },
    howToConvert: {
      title: 'How to Convert SRT to VTT in 3 Easy Steps',
      steps: [
        {
          title: '1. Paste Text or Upload .srt File',
          description: 'Paste your SRT subtitle text directly into the left input pane, or drag & drop your .srt file into the upload box. You can also click "Choose SRT File" to browse your computer or phone.',
        },
        {
          title: '2. Instant In-Browser Conversion',
          description: 'The converter immediately parses your subtitle cues, formats the mandatory WEBVTT header, translates all timestamp commas into periods, and updates the live preview in real time.',
        },
        {
          title: '3. Copy or Download WebVTT',
          description: 'Click "Download .vtt" to save your newly formatted subtitle file to your device, or click "Copy to Clipboard" to paste the WebVTT text directly into your web project or video editor.',
        },
      ],
    },
    commonErrorsAndFixes: {
      title: 'Common SRT & VTT Formatting and Timestamp Errors',
      items: [
        {
          title: 'Error: Subtitles Not Displaying in Browser (Comma Delimiter)',
          description: 'Cause: The file uses SRT comma timestamps (e.g., 00:00:02,500). HTML5 browser parsers fail immediately upon encountering commas in timecodes. Fix: Convert all timestamp commas into periods (00:00:02.500) using our automated converter.',
        },
        {
          title: 'Error: Browser Rejects Track with Syntax Error (Missing WEBVTT Header)',
          description: 'Cause: An SRT file was renamed with a .vtt extension without adding the header. Fix: The very first line of every WebVTT document must contain "WEBVTT", followed by at least one empty blank line before the first subtitle block.',
        },
        {
          title: 'Error: Scrambled Characters or Broken Accents (BOM & Encoding)',
          description: 'Cause: Subtitles saved in UTF-16, ANSI, or UTF-8 with Byte Order Mark (BOM). Fix: Our tool automatically strips invisible BOM artifacts and standardizes output to clean, universal UTF-8 text.',
        },
        {
          title: 'Error: Overlapping Cue Timestamps & Flickering Text',
          description: 'Cause: Cue 1 ends at 00:00:05.000 while Cue 2 starts earlier at 00:00:04.500, causing media engines to flicker or stack cues vertically. Fix: Ensure each cue\'s end timestamp is less than or equal to the next cue\'s start timestamp.',
        },
        {
          title: 'Error: CORS (Cross-Origin Resource Sharing) Blocked',
          description: 'Cause: When hosting your .vtt file on a CDN or different domain than the video page, browsers block the <track> request. Fix: Ensure your server or CDN sends the "Access-Control-Allow-Origin: *" header and correct MIME type "text/vtt".',
        },
      ],
    },
    html5VideoGuide: {
      title: 'How VTT Subtitles are Used with HTML5 Video',
      description: 'Implementing WebVTT subtitles in an HTML5 video player is straightforward and requires only the native <track> element nested inside a <video> tag. Below is the complete, valid markup pattern used by web developers worldwide:',
      codeSnippet: `<video controls width="800" poster="/images/poster.jpg">
  <!-- Primary video source files -->
  <source src="/videos/tutorial.mp4" type="video/mp4">
  <source src="/videos/tutorial.webm" type="video/webm">

  <!-- WebVTT Subtitle Tracks -->
  <track 
    kind="subtitles" 
    src="/subtitles/tutorial-en.vtt" 
    srclang="en" 
    label="English" 
    default>
  
  <track 
    kind="subtitles" 
    src="/subtitles/tutorial-es.vtt" 
    srclang="es" 
    label="Español">

  <p>Your browser does not support HTML5 video. <a href="/videos/tutorial.mp4">Download the video</a> instead.</p>
</video>`,
      explanation: [
        {
          term: 'kind="subtitles"',
          description: 'Specifies the type of text track. Use "subtitles" for dialogue translations, or "captions" for closed captions that also transcribe sound effects and speaker identifications for deaf or hard-of-hearing viewers.',
        },
        {
          term: 'src="path/to/subtitles.vtt"',
          description: 'The relative or absolute URL pointing to your valid WebVTT file. Ensure the server delivers this file with the "text/vtt; charset=utf-8" Content-Type header.',
        },
        {
          term: 'srclang="en"',
          description: 'The two-letter BCP 47 language code (such as "en" for English, "es" for Spanish, "fr" for French, or "ja" for Japanese). This helps screen readers and automated translation engines understand the track language.',
        },
        {
          term: 'label="English"',
          description: 'The human-readable label displayed in the video player\'s closed captions (CC) menu, allowing viewers to easily select their preferred language.',
        },
        {
          term: 'default',
          description: 'A boolean attribute indicating that this track should be enabled automatically when the user plays the video, unless their system preferences override it.',
        },
      ],
    },
    comparison: {
      title: 'SRT vs WebVTT Technical Comparison',
      description: 'Compare the technical capabilities, compatibility metrics, and formatting specifications of SubRip (.srt) and WebVTT (.vtt):',
      headers: ['Technical Dimension', 'SubRip (.srt)', 'WebVTT (.vtt)'],
      rows: [
        ['Primary Intended Environment', 'Desktop video players & media editing software', 'HTML5 browsers, mobile apps & web streaming'],
        ['Required Starting Header', 'None (starts directly with cue index 1)', 'Mandatory "WEBVTT" on the first line'],
        ['Millisecond Separator', 'Comma (e.g., 00:01:23,450)', 'Period (e.g., 00:01:23.450)'],
        ['Native Web Browser Playback', 'No (requires JS library like video.js)', 'Yes (native via HTML5 <track> in all browsers)'],
        ['Styling Support', 'Limited legacy tags (<i>, <b>, <font>)', 'Full CSS styling support via ::cue pseudo-element'],
        ['Screen Positioning & Geometry', 'Not standardized (usually bottom-center only)', 'Native attributes: line, position, size, align'],
        ['HLS / MPEG-DASH Streaming', 'Unsupported (must be transcoded)', 'Standard format for streaming subtitle manifests'],
        ['Metadata & Comments Support', 'No standard comment syntax', 'Supports NOTE blocks and STYLE header blocks'],
        ['Typical File Extension', '.srt', '.vtt'],
        ['Standard MIME Type', 'application/x-subrip', 'text/vtt; charset=utf-8'],
      ],
    },
    privacy: {
      title: '100% In-Browser Privacy & Security Guarantee',
      content: [
        'At SRTConverters.info, we take data confidentiality and user privacy seriously. All conversions between SRT and WebVTT are executed entirely inside your local web browser engine using client-side JavaScript.',
        'Your subtitle files, video transcripts, intellectual property, and private dialogues are never uploaded, buffered, or stored on external servers or third-party cloud infrastructure. You can even disconnect your internet connection once the page is loaded, and the converter will continue to operate with full functionality.',
        'This client-side architecture guarantees zero risk of data leakage, making our tool safe for corporate presentations, legal depositions, confidential interview transcripts, and medical media files.',
      ],
    },
  },
  faqs: [
    {
      question: 'Can I just rename my .srt file extension to .vtt?',
      answer: 'No. Simply changing the file extension from .srt to .vtt will not make it a valid WebVTT file. WebVTT requires a mandatory "WEBVTT" header at the very beginning of the document and mandates that timestamps use periods instead of commas (e.g., 00:00:01.000 instead of 00:00:01,000). Modern web browsers will reject a renamed SRT file as invalid and will refuse to display your subtitles.',
    },
    {
      question: 'Why are my WebVTT subtitles not appearing in the HTML5 video player?',
      answer: 'There are three common reasons: 1) The file is missing the "WEBVTT" header on line 1, 2) The timestamps still contain commas instead of periods, or 3) Your web server is not serving the file with the correct MIME type (text/vtt) or is blocking Cross-Origin requests (CORS). Using our converter ensures your file syntax and timestamps are 100% correct.',
    },
    {
      question: 'What is the difference between closed captions and subtitles in WebVTT?',
      answer: 'Subtitles (kind="subtitles") are intended for viewers who can hear the audio but do not understand the spoken language; they only transcribe dialogue. Captions (kind="captions") are designed for deaf or hard-of-hearing viewers; in addition to spoken dialogue, they transcribe sound effects, music descriptions, and speaker identification cues (e.g., [Applause], [Upbeat music plays]). WebVTT supports both via the kind attribute in HTML5.',
    },
    {
      question: 'How do I style WebVTT subtitles with custom CSS?',
      answer: 'You can customize WebVTT subtitles directly in your website stylesheet using the CSS ::cue pseudo-element. For example: video::cue { background-color: rgba(0, 0, 0, 0.8); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.9); }',
    },
    {
      question: 'Does WebVTT work on mobile devices like iPhone (Safari) and Android (Chrome)?',
      answer: 'Yes! WebVTT is fully supported across all modern mobile browsers, including Safari on iOS/iPadOS and Chrome/Firefox on Android. When videos play in native full-screen mode on mobile devices, the operating system uses the WebVTT track to render system-accessible captions according to the user\'s accessibility display preferences.',
    },
    {
      question: 'Can I upload WebVTT (.vtt) files to YouTube and Vimeo?',
      answer: 'Yes. Both YouTube and Vimeo provide native support for WebVTT subtitle uploads alongside SRT. WebVTT is especially advantageous if your subtitles include precise cue positioning or formatting cues that prevent captions from covering lower-third graphics.',
    },
    {
      question: 'Is there any file size limit for converting SRT to VTT on this website?',
      answer: 'No. Because all conversion happens locally in your browser without transmitting data across the internet, there are no artificial file size limits or paywalls. You can convert full-length feature films, multi-hour lecture series, or podcast archives instantly without restrictions.',
    },
    {
      question: 'Does this converter preserve non-English characters, emojis, and RTL languages?',
      answer: 'Yes. Our converter uses native UTF-8 text processing, fully preserving accents, umlauts, Cyrillic, Greek, Asian scripts (Japanese, Korean, Chinese, Vietnamese), right-to-left languages (Arabic, Hebrew), and Unicode emojis without corrupting or altering character formatting.',
    },
  ],
};
