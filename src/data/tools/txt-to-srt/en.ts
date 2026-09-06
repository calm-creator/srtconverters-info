import type { TxtToSrtDetailContent } from "./types";

export const enContent: TxtToSrtDetailContent = {
  "metaTitle": "Free TXT to SRT Converter – Convert Text & Transcripts to Subtitles",
  "metaDescription": "Convert TXT transcripts and plain text to properly formatted SRT subtitle files online. Features automatic timestamp generation, smart timing settings, and 100% private browser processing.",
  "h1": "TXT to SRT Converter",
  "heroDescription": "Transform plain text scripts, dialogue transcripts, and articles into formatted SubRip (.srt) subtitle files with automatic, customizable timestamps. Fast, client-side, and completely free.",
  "toolName": "TXT to SRT Converter",
  "timingNotice": "Note on Timing: Plain text files normally lack subtitle timecodes. Our converter automatically generates sequential numbered cues and timestamps based on your duration settings. Because automated timings cannot know exact video speech pauses, you can fine-tune the resulting timecodes in your video editor or subtitle tool.",
  "ui": {
    "pasteTitle": "Plain Text Input (.txt)",
    "pastePlaceholder": "Paste your plain text or transcript here (each line or paragraph becomes a subtitle cue)...\n\nExample:\nHello and welcome to this video tutorial.\nIn this guide, we explore subtitle conversion.\nLet us dive straight into the details.",
    "orDivider": "OR",
    "uploadTitle": "Option 2 — Upload TXT File",
    "convertButton": "Convert to SRT",
    "clearButton": "Clear",
    "trySampleButton": "Try Sample",
    "livePreviewTitle": "Generated Subtitles (.srt)",
    "errorNoInput": "Please paste plain text or upload a .txt file to convert.",
    "pastedContentSource": "Pasted Text Content",
    "dropzoneTitle": "Drag and drop your .txt file here",
    "dropzoneSubtitle": "or click to browse from your device",
    "browseButton": "Choose TXT File",
    "dropActiveText": "Drop the TXT file here...",
    "fileSelected": "File selected",
    "fileNameLabel": "File Name",
    "fileSizeLabel": "File Size",
    "cueCountLabel": "Subtitles Created",
    "characterCountLabel": "Characters",
    "downloadAction": "Download .srt",
    "copyAction": "Copy to Clipboard",
    "copiedSuccess": "Copied to clipboard!",
    "resetAction": "Convert Another Text",
    "previewTitle": "Generated SRT Preview",
    "previewEmpty": "Your formatted SRT subtitles will appear here immediately after entering text.",
    "timingOptionsTitle": "Automatic Timing & Cue Settings",
    "optStartTime": "Start Time (seconds)",
    "optDuration": "Cue Duration (seconds)",
    "optGap": "Gap Between Cues (seconds)",
    "optSplitMethod": "Split Text By",
    "optSplitParagraphs": "Paragraphs (Double Newline)",
    "optSplitLines": "Each Line (Single Newline)",
    "optSplitSentences": "Sentences (. ? !)",
    "timingNoticeBadge": "Automatic Timings Generated",
    "errorInvalidFile": "Please upload a valid plain text (.txt) file.",
    "errorEmptyFile": "The uploaded file is empty.",
    "errorParseFailed": "Could not extract valid text lines from the input."
  },
  "sections": {
    "whatIsTxt": {
      "title": "What is a Plain Text (TXT) File?",
      "content": [
        "A TXT (.txt) file is the most fundamental digital text format in computing. It stores pure unformatted alphanumeric characters, words, sentences, and line breaks using universal encodings such as UTF-8 or ASCII.",
        "Because TXT files contain zero proprietary styling tags, metadata headers, or layout directives, they are universally accessible across every operating system, text editor, smartphone, and browser. Content creators frequently use TXT files for voiceover scripts, interview transcripts, speech-to-text outputs, and translated dialogues.",
        "However, plain text files lack the specific temporal coordinates, sequence numbers, and milestone intervals required by video players to synchronize captions with spoken audio. Opening a TXT file inside a media player or video platform like YouTube will not display captions at the right moments."
      ]
    },
    "whatIsSrt": {
      "title": "What is an SRT (SubRip) Subtitle File?",
      "content": [
        "An SRT (SubRip Text) file is the global standard format for digital video subtitles and closed captions. Supported by YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve, and media players like VLC, an SRT file organizes spoken dialogue into structured chronological cues.",
        "Every single subtitle cue in a valid SRT file must follow an exacting four-part structure:",
        "1. A sequential cue index number (1, 2, 3, 4...)",
        "2. An exact start and end timestamp in the format HH:MM:SS,mmm --> HH:MM:SS,mmm (Hours:Minutes:Seconds,Milliseconds)",
        "3. One or more lines of subtitle text or dialogue caption",
        "4. A mandatory blank line separating it from the subsequent cue",
        "Without this rigorous syntax, video players and editing timelines cannot determine when captions should appear, how long they should remain visible on screen, or when they must yield to the next phrase."
      ]
    },
    "whatIsConverter": {
      "title": "What is a TXT to SRT Converter?",
      "content": [
        "A TXT to SRT converter is an intelligent formatting engine that bridges the gap between raw un-timed written prose and time-synchronized video subtitle files.",
        "It accepts plain text transcripts, interview notes, video scripts, translated dialogues, or speech-to-text outputs and transforms them into standard SubRip (.srt) files complete with incrementing index numbers, valid timecode arrows (-->), millisecond precision, and cue separation spacing.",
        "Our online converter operates 100% in your client browser memory using modern Web APIs. Your confidential transcripts, unpublished scripts, and private media documents never leave your computer or get uploaded to remote cloud servers."
      ]
    },
    "howToConvert": {
      "title": "How to Convert TXT to SRT Step by Step",
      "steps": [
        {
          "title": "1. Paste Text or Upload File",
          "description": "Type or paste your text transcript directly into the text editor, or upload a .txt document from your computer or phone."
        },
        {
          "title": "2. Configure Timing & Split Method",
          "description": "Choose whether each line, paragraph, or sentence forms a cue, and set your desired cue duration (e.g., 3.0s) and pause interval (e.g., 0.5s)."
        },
        {
          "title": "3. Instant Live Preview",
          "description": "Watch the live preview pane immediately generate valid, sequential SRT subtitle timecodes formatted to the millisecond."
        },
        {
          "title": "4. Download or Copy SRT",
          "description": "Click \"Download .srt\" to save the standard subtitle file directly to your device, or copy the content for quick pasting into your editor."
        }
      ]
    },
    "whyRenameDoesntWork": {
      "title": "Why Simply Renaming .txt to .srt Does Not Work",
      "content": [
        "One of the most frequent misconceptions among video creators is assuming that altering a file extension from 'transcript.txt' to 'transcript.srt' will make video players recognize subtitles.",
        "A file extension merely informs an operating system which application to launch; it does not alter internal file data. Video players such as VLC, MPV, or QuickTime require rigid SubRip syntax. If a media player encounters plain paragraphs lacking sequence numbers and '00:00:00,000 --> 00:00:00,000' time boundaries, it fails silently or throws an invalid subtitle format error.",
        "Renaming works only if the text file already contained valid SubRip subtitle syntax originally saved with a .txt extension. For regular prose, transcripts, and scripts, genuine conversion through our tool is essential."
      ]
    },
    "timingAndSyncExplanation": {
      "title": "Understanding Subtitle Timings: How Auto-Generation Works",
      "content": [
        "Because plain text files contain dialogue words but no time data, our converter employs a deterministic chronological pacing algorithm.",
        "Starting at your specified start timestamp (default 00:00:01,000), each text unit is assigned a display window equal to your selected duration (e.g., 3.0 seconds). After each cue, the algorithm inserts your chosen pause gap (e.g., 0.5 seconds) before triggering the next cue.",
        "If your text already contains recognizable timestamp markers (such as [01:23] or 00:02:15), our intelligent parser detects these timestamps and computes corresponding start and end timecodes automatically.",
        "Real-World Advice on Synchronization: Automated timestamps provide a clean, syntactically perfect starting framework. Because speakers naturally speed up, pause, or emphasize phrases unpredictably, automated timings will usually require minor sliding adjustments in Premiere Pro, DaVinci Resolve, Subtitle Edit, or YouTube Studio to match real voice pacing."
      ]
    },
    "realWorldUseCases": {
      "title": "Real-World Workflows for TXT to SRT Conversion",
      "cases": [
        {
          "title": "YouTube Video Captions & SEO",
          "description": "Upload structured captions to YouTube to improve search discoverability, assist international viewers, and enhance audience watch retention."
        },
        {
          "title": "Podcast & Webinar Transcripts",
          "description": "Convert audio interview transcripts into subtitle tracks for video clips, social media audiograms, and promotional teasers."
        },
        {
          "title": "Translating International Media",
          "description": "Translate a foreign video script into plain text, convert it to an SRT file with matching cue pacing, and import into video projects."
        },
        {
          "title": "AI Speech-to-Text Post Processing",
          "description": "Format raw output text from voice dictation, Whisper AI, or meeting transcriptions into standard, importable caption tracks."
        },
        {
          "title": "Educational Lectures & E-Learning",
          "description": "Provide accessible, ADA/Section 508 compliant caption tracks for online university courses, training seminars, and tutorial lessons."
        },
        {
          "title": "Social Media Vertical Video (Reels/TikTok)",
          "description": "Import generated SRT files into CapCut, Premiere, or Final Cut to burn striking animated captions onto vertical short-form content."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Common TXT to SRT Errors and How to Troubleshoot Them",
      "items": [
        {
          "title": "Subtitles Disappear Too Fast or Linger Too Long",
          "description": "Adjust the Cue Duration setting in our tool. Fast speech typically needs 2 to 3 seconds per line, while long sentences require 4 to 5 seconds."
        },
        {
          "title": "Subtitles Overlapping Each Other",
          "description": "Our converter enforces strict non-overlapping mathematical gaps between cues. Ensure the gap setting is at least 0.2 to 0.5 seconds."
        },
        {
          "title": "Special Characters & Accents Scrambled (Mojibake)",
          "description": "This occurs when files are saved with legacy ANSI or ISO encodings. Our tool processes everything in universal UTF-8 to preserve accents, Asian glyphs, and Arabic text."
        },
        {
          "title": "Lines Too Long for Mobile Screens",
          "description": "Use the 'Sentences' or 'Each Line' split mode rather than large paragraph blocks to keep subtitle cues concise (under 42 characters per line)."
        }
      ]
    },
    "comparison": {
      "title": "TXT vs SRT: Key Technical Differences",
      "description": "Review the technical specifications separating unstructured plain text from synchronized SubRip subtitle files.",
      "headers": [
        "Technical Aspect",
        "Plain Text (.txt)",
        "SubRip Subtitle (.srt)"
      ],
      "rows": [
        [
          "Timestamp Coordinates",
          "None (un-timed)",
          "Millisecond precision (HH:MM:SS,mmm)"
        ],
        [
          "Sequential Indexing",
          "None",
          "Mandatory incrementing integers (1, 2, 3...)"
        ],
        [
          "Timecode Separator",
          "None",
          "Strict arrow marker (-->)"
        ],
        [
          "Video Player Support",
          "Cannot be loaded as captions",
          "Native playback across VLC, YouTube, players"
        ],
        [
          "Video Editor Import",
          "Requires manual placement",
          "Snaps directly into caption tracks on timelines"
        ],
        [
          "Formatting Tags",
          "Pure plain text",
          "Supports optional styling (<i>, <b>, <font>)"
        ],
        [
          "Primary Strength",
          "Human reading & archiving",
          "Precise audiovisual temporal synchronization"
        ]
      ]
    },
    "privacy": {
      "title": "100% In-Browser Privacy Guarantee",
      "content": [
        "Your security and confidentiality are guaranteed by design. Unlike cloud-based converters that upload your transcripts to remote servers where they may be stored, indexed, or analyzed, our tool performs all processing locally inside your device's browser memory.",
        "Your private video scripts, legal transcripts, client interviews, and confidential media never travel across the internet. You can even disconnect your Wi-Fi after loading this page, and the converter will continue functioning at full speed."
      ]
    }
  },
  "faqs": [
    {
      "question": "How do I convert a TXT file to SRT?",
      "answer": "Paste your plain text into our editor or upload your .txt file. Choose your preferred splitting method (paragraphs, lines, or sentences) and cue duration. The converter instantly calculates sequential timecodes and formats a standard .srt file ready for immediate download."
    },
    {
      "question": "Can I convert a TXT file to SRT without installing software?",
      "answer": "Yes. Our tool runs completely in any modern web browser on desktop, tablet, or smartphone without installing external software, plugins, or browser extensions."
    },
    {
      "question": "Does a plain TXT file contain subtitle timestamps?",
      "answer": "No. Standard TXT files contain only un-timed text characters and line breaks. That is why our converter automatically assigns progressive timestamps and sequence numbers based on your custom timing settings."
    },
    {
      "question": "How does the converter generate timestamps?",
      "answer": "It uses a progressive chronological pacing system. Beginning at your designated start time (e.g. 1.0s), each cue is granted a fixed duration (e.g. 3.0s), followed by an optional gap (e.g. 0.5s) before the next cue starts."
    },
    {
      "question": "Can I convert a transcript or script into SRT subtitles?",
      "answer": "Yes. Simply copy your transcript or movie script and paste it into the converter. Splitting by lines or sentences will turn each phrase into a distinct subtitle caption."
    },
    {
      "question": "Can I use the converted SRT file on YouTube?",
      "answer": "Yes. The generated .srt file complies with the official SubRip standard and can be uploaded directly to YouTube Studio in the Subtitles / CC tab of your video."
    },
    {
      "question": "Why doesn't simply renaming .txt to .srt work?",
      "answer": "Renaming only changes the file extension label. Video players require strict internal formatting, including sequential cue numbers and millisecond timestamp arrows (00:00:01,000 --> 00:00:04,000). A renamed text file lacks this structure and will fail to display."
    },
    {
      "question": "Can I edit the SRT timings after conversion?",
      "answer": "Yes. The downloaded .srt file is an open text format that can be opened in any text editor (Notepad, TextEdit, VS Code) or imported into video editing programs (Premiere Pro, DaVinci Resolve) and subtitle editors (Aegisub, Subtitle Edit) to adjust exact timing."
    },
    {
      "question": "Does it support non-English languages like Hindi, Arabic, Japanese, and Spanish?",
      "answer": "Yes. The tool provides full UTF-8 Unicode support for all global languages, including right-to-left Arabic, Hindi Devanagari, Japanese Kanji/Kana, Korean Hangul, Vietnamese diacritics, and accented European scripts."
    },
    {
      "question": "Is my TXT file uploaded to a server?",
      "answer": "No. Processing happens 100% locally on your computer or mobile device using client-side JavaScript. Your text and files are never transmitted to any external server."
    },
    {
      "question": "What should I do if the generated subtitles are slightly out of sync with my video?",
      "answer": "Because automatic timing uses an estimated average duration, you may need to adjust the start time or cue duration in the tool settings, or slide the subtitle track slightly in your video editor or YouTube Studio to match exact audio pauses."
    },
    {
      "question": "What is the ideal subtitle duration per line?",
      "answer": "The international subtitle standard recommends between 21 and 24 characters per second of reading speed, which translates to approximately 2.5 to 4 seconds for a standard subtitle line of 30 to 40 characters."
    }
  ]
};
