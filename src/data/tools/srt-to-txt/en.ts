import type { ToolDetailContent } from './types';

export const enContent: ToolDetailContent = {
  metaTitle: 'Free SRT to TXT Converter – Extract Clean Text Online',
  metaDescription: 'Convert SRT subtitle files to clean plain TXT text online. Strips timestamps, cue numbers, and HTML tags completely in your browser without uploading files.',
  h1: 'SRT to TXT Converter',
  heroDescription: 'Quickly convert SRT subtitle files into clean, readable plain text transcripts. Strips timecodes, subtitle numbers, and formatting tags directly in your browser with complete privacy.',
  toolName: 'SRT to TXT Converter',
  ui: {
    pasteTitle: 'SRT Input (.srt)',
    pastePlaceholder: 'Paste your SRT content here (e.g.\n1\n00:00:01,000 --> 00:00:04,000\nHello, welcome to our video.)...',
    orDivider: 'OR',
    uploadTitle: 'Option 2 — Upload SRT File',
    convertButton: 'Convert to Text',
    clearButton: 'Clear',
    trySampleButton: 'Try Sample',
    livePreviewTitle: 'Clean Plain Text (.txt)',
    errorNoInput: 'Please paste SRT content or upload an SRT file to convert.',
    pastedContentSource: 'Pasted SRT Content',
    dropzoneTitle: 'Drag and drop your .srt file here',
    dropzoneSubtitle: 'or click to browse from your device',
    browseButton: 'Choose SRT File',
    dropActiveText: 'Drop the SRT file here...',
    fileSelected: 'File selected',
    fileNameLabel: 'File Name',
    fileSizeLabel: 'File Size',
    cueCountLabel: 'Subtitles Extracted',
    characterCountLabel: 'Characters',
    downloadAction: 'Download .txt',
    copyAction: 'Copy to Clipboard',
    copiedSuccess: 'Copied to clipboard!',
    resetAction: 'Convert Another File',
    previewTitle: 'Converted Text Preview',
    previewEmpty: 'Your converted plain text will appear here immediately after selecting an SRT file.',
    optionsTitle: 'Conversion Options',
    optEmptyLine: 'Add blank line between subtitle cues',
    optRemoveTags: 'Strip styling tags (e.g., <i>, <b>, <font>)',
    errorInvalidFile: 'Please upload a valid .srt subtitle file.',
    errorEmptyFile: 'The uploaded file is empty.',
    errorParseFailed: 'Failed to parse the file. Ensure it contains valid SRT formatted cues.',
  },
  sections: {
    whatIsSrt: {
      title: 'What is an SRT File?',
      content: [
        'An SRT (SubRip Subtitle) file is the most popular and widely compatible plain text subtitle format used in digital video. It contains sequential numbered blocks containing precise start and end timestamps followed by one or more lines of subtitle dialogue.',
        'While SRT files are ideal for video players such as VLC, YouTube, and media editing suites, the timestamp metadata and sequential numbering make them hard to read as ordinary documents or transcripts.',
      ],
    },
    whatIsConverter: {
      title: 'What is an SRT to TXT Converter?',
      content: [
        'An SRT to TXT converter is a specialized utility that parses the structured blocks of an SRT file, strips away subtitle sequence numbers (1, 2, 3...) and timeline codes (such as 00:01:23,450 --> 00:01:26,780), and outputs clean, continuous plain text.',
        'With our tool, the conversion takes place entirely inside your web browser via client-side JavaScript. Your subtitle files are never sent across the internet, protecting sensitive dialogue, business recordings, and private video transcripts.',
      ],
    },
    howToConvert: {
      title: 'How to Convert SRT to TXT',
      steps: [
        {
          title: '1. Select or Drop File',
          description: 'Drag and drop your .srt file into the upload zone, or click "Choose SRT File" to select a subtitle file from your computer or mobile device.',
        },
        {
          title: '2. Instant Automatic Processing',
          description: 'The converter instantly parses the file, cleans HTML tags, removes timestamp markers, and displays an immediate text preview.',
        },
        {
          title: '3. Copy or Download',
          description: 'Click "Download .txt" to save the plain text document to your device, or click "Copy to Clipboard" for immediate pasting.',
        },
      ],
    },
    whyConvert: {
      title: 'Why Convert SRT to TXT?',
      benefits: [
        {
          title: 'Readable Transcripts & Articles',
          description: 'Turn video interviews, podcasts, webinars, and lectures into readable articles, blog posts, and study summaries without timecode clutter.',
        },
        {
          title: 'AI & LLM Training / Prompts',
          description: 'Paste clean video dialogues into AI tools like ChatGPT or Gemini without wasting token limits on repetitive timestamps and cue indexes.',
        },
        {
          title: 'Language Learning & Study',
          description: 'Language learners can easily print or study full movie scripts, highlight unfamiliar vocabulary, and create flashcards.',
        },
        {
          title: 'Full Text Search & Archiving',
          description: 'Plain text files are easy to index, search through operating system search tools, and store with minimal file footprint.',
        },
      ],
    },
    comparison: {
      title: 'SRT vs TXT: Comparison',
      description: 'Understand the fundamental differences between SubRip subtitle files and plain text documents.',
      headers: ['Feature', 'SRT Format (.srt)', 'Plain Text (.txt)'],
      rows: [
        ['Primary Purpose', 'Video subtitle synchronization', 'Readable plain text documentation'],
        ['Timestamp Codes', 'Yes (e.g. 00:00:10,500 --> 00:00:14,200)', 'None'],
        ['Sequence Numbers', 'Yes (incremental 1, 2, 3...)', 'None'],
        ['Formatting Tags', 'HTML/formatting tags often embedded', 'Pure unformatted text'],
        ['Best Used For', 'Media players & video editing', 'Reading, printing, notes, AI analysis'],
      ],
    },
    privacy: {
      title: 'Privacy & In-Browser Security',
      content: [
        'We believe your subtitle files and personal video transcripts belong exclusively to you. This tool runs 100% locally in your web browser via standard Web APIs (FileReader and Blob).',
        'No file is uploaded to any remote server, no transcripts are logged, and no third-party tracking scripts monitor your text. You can even disconnect your internet connection once the page is loaded and the tool will continue to work seamlessly.',
      ],
    },
  },
  faqs: [
    {
      question: 'What is an SRT file?',
      answer: 'An SRT (SubRip Text) file is a standard subtitle format storing video captions along with sequential numbers and start/end timecodes.',
    },
    {
      question: 'Does this converter remove timestamps and line numbers?',
      answer: 'Yes. It automatically identifies and removes all sequence numbering (1, 2, 3...) and timecode intervals (00:00:00,000 --> 00:00:00,000), leaving only clean dialogue.',
    },
    {
      question: 'Is my SRT file uploaded to a server?',
      answer: 'No. All conversion logic runs entirely on your device inside your web browser. Your files never touch our servers.',
    },
    {
      question: 'Does this tool support non-English languages and Unicode?',
      answer: 'Yes. It fully supports UTF-8, UTF-16, and Unicode characters including Japanese, Korean, Arabic, Vietnamese, Indonesian, German, French, Spanish, Portuguese, and accented alphabets.',
    },
    {
      question: 'Can I use this tool on a smartphone or tablet?',
      answer: 'Yes. The converter is fully responsive and works smoothly on mobile browsers across iOS and Android.',
    },
    {
      question: 'What happens to multiline subtitle cues?',
      answer: 'Multiline subtitle cues are preserved as clean paragraph blocks or unified sentences according to standard subtitle formatting.',
    },
    {
      question: 'Are HTML formatting tags like <i> and <b> removed?',
      answer: 'Yes. The converter strips common subtitle styling tags such as <i>, <b>, <u>, and font tags to guarantee pure plain text output.',
    },
    {
      question: 'Is there any file size limit or fee?',
      answer: 'The tool is 100% free with no account or subscription required. Because processing occurs on your local machine, large subtitle files convert almost instantaneously.',
    },
  ],
};
