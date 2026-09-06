import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.resolve(__dirname, '../src/data/tools/txt-to-srt');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Comprehensive English (~1600 words of thorough, helpful, people-first content)
const en = {
  metaTitle: 'Free TXT to SRT Converter – Convert Text & Transcripts to Subtitles',
  metaDescription: 'Convert TXT transcripts and plain text to properly formatted SRT subtitle files online. Features automatic timestamp generation, smart timing settings, and 100% private browser processing.',
  h1: 'TXT to SRT Converter',
  heroDescription: 'Transform plain text scripts, dialogue transcripts, and articles into formatted SubRip (.srt) subtitle files with automatic, customizable timestamps. Fast, client-side, and completely free.',
  toolName: 'TXT to SRT Converter',
  timingNotice: 'Note on Timing: Plain text files normally lack subtitle timecodes. Our converter automatically generates sequential numbered cues and timestamps based on your duration settings. Because automated timings cannot know exact video speech pauses, you can fine-tune the resulting timecodes in your video editor or subtitle tool.',
  ui: {
    pasteTitle: 'Plain Text Input (.txt)',
    pastePlaceholder: 'Paste your plain text or transcript here (each line or paragraph becomes a subtitle cue)...\n\nExample:\nHello and welcome to this video tutorial.\nIn this guide, we explore subtitle conversion.\nLet us dive straight into the details.',
    orDivider: 'OR',
    uploadTitle: 'Option 2 — Upload TXT File',
    convertButton: 'Convert to SRT',
    clearButton: 'Clear',
    trySampleButton: 'Try Sample',
    livePreviewTitle: 'Generated Subtitles (.srt)',
    errorNoInput: 'Please paste plain text or upload a .txt file to convert.',
    pastedContentSource: 'Pasted Text Content',
    dropzoneTitle: 'Drag and drop your .txt file here',
    dropzoneSubtitle: 'or click to browse from your device',
    browseButton: 'Choose TXT File',
    dropActiveText: 'Drop the TXT file here...',
    fileSelected: 'File selected',
    fileNameLabel: 'File Name',
    fileSizeLabel: 'File Size',
    cueCountLabel: 'Subtitles Created',
    characterCountLabel: 'Characters',
    downloadAction: 'Download .srt',
    copyAction: 'Copy to Clipboard',
    copiedSuccess: 'Copied to clipboard!',
    resetAction: 'Convert Another Text',
    previewTitle: 'Generated SRT Preview',
    previewEmpty: 'Your formatted SRT subtitles will appear here immediately after entering text.',
    timingOptionsTitle: 'Automatic Timing & Cue Settings',
    optStartTime: 'Start Time (seconds)',
    optDuration: 'Cue Duration (seconds)',
    optGap: 'Gap Between Cues (seconds)',
    optSplitMethod: 'Split Text By',
    optSplitParagraphs: 'Paragraphs (Double Newline)',
    optSplitLines: 'Each Line (Single Newline)',
    optSplitSentences: 'Sentences (. ? !)',
    timingNoticeBadge: 'Automatic Timings Generated',
    errorInvalidFile: 'Please upload a valid plain text (.txt) file.',
    errorEmptyFile: 'The uploaded file is empty.',
    errorParseFailed: 'Could not extract valid text lines from the input.'
  },
  sections: {
    whatIsTxt: {
      title: 'What is a Plain Text (TXT) File?',
      content: [
        'A TXT (.txt) file is the most fundamental digital text format in computing. It stores pure unformatted alphanumeric characters, words, sentences, and line breaks using universal encodings such as UTF-8 or ASCII.',
        'Because TXT files contain zero proprietary styling tags, metadata headers, or layout directives, they are universally accessible across every operating system, text editor, smartphone, and browser. Content creators frequently use TXT files for voiceover scripts, interview transcripts, speech-to-text outputs, and translated dialogues.',
        'However, plain text files lack the specific temporal coordinates, sequence numbers, and milestone intervals required by video players to synchronize captions with spoken audio. Opening a TXT file inside a media player or video platform like YouTube will not display captions at the right moments.'
      ]
    },
    whatIsSrt: {
      title: 'What is an SRT (SubRip) Subtitle File?',
      content: [
        'An SRT (SubRip Text) file is the global standard format for digital video subtitles and closed captions. Supported by YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve, and media players like VLC, an SRT file organizes spoken dialogue into structured chronological cues.',
        'Every single subtitle cue in a valid SRT file must follow an exacting four-part structure:',
        '1. A sequential cue index number (1, 2, 3, 4...)',
        '2. An exact start and end timestamp in the format HH:MM:SS,mmm --> HH:MM:SS,mmm (Hours:Minutes:Seconds,Milliseconds)',
        '3. One or more lines of subtitle text or dialogue caption',
        '4. A mandatory blank line separating it from the subsequent cue',
        'Without this rigorous syntax, video players and editing timelines cannot determine when captions should appear, how long they should remain visible on screen, or when they must yield to the next phrase.'
      ]
    },
    whatIsConverter: {
      title: 'What is a TXT to SRT Converter?',
      content: [
        'A TXT to SRT converter is an intelligent formatting engine that bridges the gap between raw un-timed written prose and time-synchronized video subtitle files.',
        'It accepts plain text transcripts, interview notes, video scripts, translated dialogues, or speech-to-text outputs and transforms them into standard SubRip (.srt) files complete with incrementing index numbers, valid timecode arrows (-->), millisecond precision, and cue separation spacing.',
        'Our online converter operates 100% in your client browser memory using modern Web APIs. Your confidential transcripts, unpublished scripts, and private media documents never leave your computer or get uploaded to remote cloud servers.'
      ]
    },
    howToConvert: {
      title: 'How to Convert TXT to SRT Step by Step',
      steps: [
        {
          title: '1. Paste Text or Upload File',
          description: 'Type or paste your text transcript directly into the text editor, or upload a .txt document from your computer or phone.'
        },
        {
          title: '2. Configure Timing & Split Method',
          description: 'Choose whether each line, paragraph, or sentence forms a cue, and set your desired cue duration (e.g., 3.0s) and pause interval (e.g., 0.5s).'
        },
        {
          title: '3. Instant Live Preview',
          description: 'Watch the live preview pane immediately generate valid, sequential SRT subtitle timecodes formatted to the millisecond.'
        },
        {
          title: '4. Download or Copy SRT',
          description: 'Click "Download .srt" to save the standard subtitle file directly to your device, or copy the content for quick pasting into your editor.'
        }
      ]
    },
    whyRenameDoesntWork: {
      title: 'Why Simply Renaming .txt to .srt Does Not Work',
      content: [
        'One of the most frequent misconceptions among video creators is assuming that altering a file extension from \'transcript.txt\' to \'transcript.srt\' will make video players recognize subtitles.',
        'A file extension merely informs an operating system which application to launch; it does not alter internal file data. Video players such as VLC, MPV, or QuickTime require rigid SubRip syntax. If a media player encounters plain paragraphs lacking sequence numbers and \'00:00:00,000 --> 00:00:00,000\' time boundaries, it fails silently or throws an invalid subtitle format error.',
        'Renaming works only if the text file already contained valid SubRip subtitle syntax originally saved with a .txt extension. For regular prose, transcripts, and scripts, genuine conversion through our tool is essential.'
      ]
    },
    timingAndSyncExplanation: {
      title: 'Understanding Subtitle Timings: How Auto-Generation Works',
      content: [
        'Because plain text files contain dialogue words but no time data, our converter employs a deterministic chronological pacing algorithm.',
        'Starting at your specified start timestamp (default 00:00:01,000), each text unit is assigned a display window equal to your selected duration (e.g., 3.0 seconds). After each cue, the algorithm inserts your chosen pause gap (e.g., 0.5 seconds) before triggering the next cue.',
        'If your text already contains recognizable timestamp markers (such as [01:23] or 00:02:15), our intelligent parser detects these timestamps and computes corresponding start and end timecodes automatically.',
        'Real-World Advice on Synchronization: Automated timestamps provide a clean, syntactically perfect starting framework. Because speakers naturally speed up, pause, or emphasize phrases unpredictably, automated timings will usually require minor sliding adjustments in Premiere Pro, DaVinci Resolve, Subtitle Edit, or YouTube Studio to match real voice pacing.'
      ]
    },
    realWorldUseCases: {
      title: 'Real-World Workflows for TXT to SRT Conversion',
      cases: [
        {
          title: 'YouTube Video Captions & SEO',
          description: 'Upload structured captions to YouTube to improve search discoverability, assist international viewers, and enhance audience watch retention.'
        },
        {
          title: 'Podcast & Webinar Transcripts',
          description: 'Convert audio interview transcripts into subtitle tracks for video clips, social media audiograms, and promotional teasers.'
        },
        {
          title: 'Translating International Media',
          description: 'Translate a foreign video script into plain text, convert it to an SRT file with matching cue pacing, and import into video projects.'
        },
        {
          title: 'AI Speech-to-Text Post Processing',
          description: 'Format raw output text from voice dictation, Whisper AI, or meeting transcriptions into standard, importable caption tracks.'
        },
        {
          title: 'Educational Lectures & E-Learning',
          description: 'Provide accessible, ADA/Section 508 compliant caption tracks for online university courses, training seminars, and tutorial lessons.'
        },
        {
          title: 'Social Media Vertical Video (Reels/TikTok)',
          description: 'Import generated SRT files into CapCut, Premiere, or Final Cut to burn striking animated captions onto vertical short-form content.'
        }
      ]
    },
    commonErrorsAndFixes: {
      title: 'Common TXT to SRT Errors and How to Troubleshoot Them',
      items: [
        {
          title: 'Subtitles Disappear Too Fast or Linger Too Long',
          description: 'Adjust the Cue Duration setting in our tool. Fast speech typically needs 2 to 3 seconds per line, while long sentences require 4 to 5 seconds.'
        },
        {
          title: 'Subtitles Overlapping Each Other',
          description: 'Our converter enforces strict non-overlapping mathematical gaps between cues. Ensure the gap setting is at least 0.2 to 0.5 seconds.'
        },
        {
          title: 'Special Characters & Accents Scrambled (Mojibake)',
          description: 'This occurs when files are saved with legacy ANSI or ISO encodings. Our tool processes everything in universal UTF-8 to preserve accents, Asian glyphs, and Arabic text.'
        },
        {
          title: 'Lines Too Long for Mobile Screens',
          description: 'Use the \'Sentences\' or \'Each Line\' split mode rather than large paragraph blocks to keep subtitle cues concise (under 42 characters per line).'
        }
      ]
    },
    comparison: {
      title: 'TXT vs SRT: Key Technical Differences',
      description: 'Review the technical specifications separating unstructured plain text from synchronized SubRip subtitle files.',
      headers: ['Technical Aspect', 'Plain Text (.txt)', 'SubRip Subtitle (.srt)'],
      rows: [
        ['Timestamp Coordinates', 'None (un-timed)', 'Millisecond precision (HH:MM:SS,mmm)'],
        ['Sequential Indexing', 'None', 'Mandatory incrementing integers (1, 2, 3...)'],
        ['Timecode Separator', 'None', 'Strict arrow marker (-->)'],
        ['Video Player Support', 'Cannot be loaded as captions', 'Native playback across VLC, YouTube, players'],
        ['Video Editor Import', 'Requires manual placement', 'Snaps directly into caption tracks on timelines'],
        ['Formatting Tags', 'Pure plain text', 'Supports optional styling (<i>, <b>, <font>)'],
        ['Primary Strength', 'Human reading & archiving', 'Precise audiovisual temporal synchronization']
      ]
    },
    privacy: {
      title: '100% In-Browser Privacy Guarantee',
      content: [
        'Your security and confidentiality are guaranteed by design. Unlike cloud-based converters that upload your transcripts to remote servers where they may be stored, indexed, or analyzed, our tool performs all processing locally inside your device\'s browser memory.',
        'Your private video scripts, legal transcripts, client interviews, and confidential media never travel across the internet. You can even disconnect your Wi-Fi after loading this page, and the converter will continue functioning at full speed.'
      ]
    }
  },
  faqs: [
    {
      question: 'How do I convert a TXT file to SRT?',
      answer: 'Paste your plain text into our editor or upload your .txt file. Choose your preferred splitting method (paragraphs, lines, or sentences) and cue duration. The converter instantly calculates sequential timecodes and formats a standard .srt file ready for immediate download.'
    },
    {
      question: 'Can I convert a TXT file to SRT without installing software?',
      answer: 'Yes. Our tool runs completely in any modern web browser on desktop, tablet, or smartphone without installing external software, plugins, or browser extensions.'
    },
    {
      question: 'Does a plain TXT file contain subtitle timestamps?',
      answer: 'No. Standard TXT files contain only un-timed text characters and line breaks. That is why our converter automatically assigns progressive timestamps and sequence numbers based on your custom timing settings.'
    },
    {
      question: 'How does the converter generate timestamps?',
      answer: 'It uses a progressive chronological pacing system. Beginning at your designated start time (e.g. 1.0s), each cue is granted a fixed duration (e.g. 3.0s), followed by an optional gap (e.g. 0.5s) before the next cue starts.'
    },
    {
      question: 'Can I convert a transcript or script into SRT subtitles?',
      answer: 'Yes. Simply copy your transcript or movie script and paste it into the converter. Splitting by lines or sentences will turn each phrase into a distinct subtitle caption.'
    },
    {
      question: 'Can I use the converted SRT file on YouTube?',
      answer: 'Yes. The generated .srt file complies with the official SubRip standard and can be uploaded directly to YouTube Studio in the Subtitles / CC tab of your video.'
    },
    {
      question: 'Why doesn\'t simply renaming .txt to .srt work?',
      answer: 'Renaming only changes the file extension label. Video players require strict internal formatting, including sequential cue numbers and millisecond timestamp arrows (00:00:01,000 --> 00:00:04,000). A renamed text file lacks this structure and will fail to display.'
    },
    {
      question: 'Can I edit the SRT timings after conversion?',
      answer: 'Yes. The downloaded .srt file is an open text format that can be opened in any text editor (Notepad, TextEdit, VS Code) or imported into video editing programs (Premiere Pro, DaVinci Resolve) and subtitle editors (Aegisub, Subtitle Edit) to adjust exact timing.'
    },
    {
      question: 'Does it support non-English languages like Hindi, Arabic, Japanese, and Spanish?',
      answer: 'Yes. The tool provides full UTF-8 Unicode support for all global languages, including right-to-left Arabic, Hindi Devanagari, Japanese Kanji/Kana, Korean Hangul, Vietnamese diacritics, and accented European scripts.'
    },
    {
      question: 'Is my TXT file uploaded to a server?',
      answer: 'No. Processing happens 100% locally on your computer or mobile device using client-side JavaScript. Your text and files are never transmitted to any external server.'
    },
    {
      question: 'What should I do if the generated subtitles are slightly out of sync with my video?',
      answer: 'Because automatic timing uses an estimated average duration, you may need to adjust the start time or cue duration in the tool settings, or slide the subtitle track slightly in your video editor or YouTube Studio to match exact audio pauses.'
    },
    {
      question: 'What is the ideal subtitle duration per line?',
      answer: 'The international subtitle standard recommends between 21 and 24 characters per second of reading speed, which translates to approximately 2.5 to 4 seconds for a standard subtitle line of 30 to 40 characters.'
    }
  ]
};

fs.writeFileSync(
  path.join(targetDir, 'en.ts'),
  'import type { TxtToSrtDetailContent } from "./types";\n\nexport const enContent: TxtToSrtDetailContent = ' + JSON.stringify(en, null, 2) + ';\n',
  'utf8'
);
console.log('✓ Created en.ts');

const localesData = {
  pt: {
    metaTitle: 'Conversor TXT para SRT Grátis – Criar Legendas a partir de Texto',
    metaDescription: 'Converta transcrições TXT e texto simples em arquivos de legenda SRT formatados online. Geração automática de tempo, opções flexíveis e processamento 100% no navegador.',
    h1: 'Conversor TXT para SRT',
    heroDescription: 'Transforme roteiros, transcrições e textos simples em arquivos de legendas SubRip (.srt) com carimbos de data/hora automáticos e personalizáveis. Rápido, privado e gratuito.',
    toolName: 'Conversor TXT para SRT',
    timingNotice: 'Aviso de Sincronização: Arquivos TXT simples não possuem marcações de tempo. Nosso conversor gera automaticamente marcações sequenciais de tempo e numeração de legendas com base nas suas preferências. Ajustes finos podem ser feitos no seu editor de vídeo favorito.',
    ui: {
      pasteTitle: 'Entrada de Texto Simples (.txt)',
      pastePlaceholder: 'Cole seu texto ou transcrição aqui (cada linha ou parágrafo se tornará uma legenda)...\n\nExemplo:\nOlá e bem-vindo a este tutorial em vídeo.\nNeste guia, exploramos a conversão de legendas.\nVamos direto aos detalhes.',
      orDivider: 'OU',
      uploadTitle: 'Opção 2 — Enviar Arquivo TXT',
      convertButton: 'Converter para SRT',
      clearButton: 'Limpar',
      trySampleButton: 'Testar Exemplo',
      livePreviewTitle: 'Legendas Geradas (.srt)',
      errorNoInput: 'Por favor, cole um texto ou envie um arquivo .txt para converter.',
      pastedContentSource: 'Texto Colado',
      dropzoneTitle: 'Arraste e solte seu arquivo .txt aqui',
      dropzoneSubtitle: 'ou clique para selecionar do seu dispositivo',
      browseButton: 'Escolher Arquivo TXT',
      dropActiveText: 'Solte o arquivo TXT aqui...',
      fileSelected: 'Arquivo selecionado',
      fileNameLabel: 'Nome do Arquivo',
      fileSizeLabel: 'Tamanho do Arquivo',
      cueCountLabel: 'Legendas Criadas',
      characterCountLabel: 'Caracteres',
      downloadAction: 'Baixar .srt',
      copyAction: 'Copiar para Área de Transferência',
      copiedSuccess: 'Copiado para a área de transferência!',
      resetAction: 'Converter Outro Texto',
      previewTitle: 'Prévia do SRT Gerado',
      previewEmpty: 'Suas legendas SRT formatadas aparecerão aqui assim que você inserir o texto.',
      timingOptionsTitle: 'Configurações de Tempo e Divisão',
      optStartTime: 'Tempo Inicial (segundos)',
      optDuration: 'Duração por Legenda (segundos)',
      optGap: 'Intervalo entre Legendas (segundos)',
      optSplitMethod: 'Dividir Texto Por',
      optSplitParagraphs: 'Parágrafos (Linha Dupla)',
      optSplitLines: 'Cada Linha (Linha Simples)',
      optSplitSentences: 'Frases (. ? !)',
      timingNoticeBadge: 'Tempos Automáticos Gerados',
      errorInvalidFile: 'Por favor, envie um arquivo de texto (.txt) válido.',
      errorEmptyFile: 'O arquivo enviado está vazio.',
      errorParseFailed: 'Não foi possível extrair linhas de texto válidas.'
    }
  },
  es: {
    metaTitle: 'Convertidor TXT a SRT Gratis – Crear Subtítulos desde Texto',
    metaDescription: 'Convierta transcripciones TXT y texto sin formato en subtítulos SRT online. Generación automática de tiempos, división inteligente y procesamiento 100% privado en el navegador.',
    h1: 'Convertidor TXT a SRT',
    heroDescription: 'Transforme guiones, transcripciones y textos sin formato en archivos de subtítulos SubRip (.srt) con marcas de tiempo automáticas y personalizables. Rápido, privado y gratuito.',
    toolName: 'Convertidor TXT a SRT',
    timingNotice: 'Nota sobre el Tiempo: Los archivos de texto no contienen marcas de tiempo de subtítulos. Nuestro convertidor genera automáticamente bloques numerados y marcas de tiempo según sus ajustes. Puede ajustar la sincronización en su editor de video.',
    ui: {
      pasteTitle: 'Entrada de Texto (.txt)',
      pastePlaceholder: 'Pegue su texto o transcripción aquí (cada línea o párrafo se convertirá en un subtítulo)...\n\nEjemplo:\nHola y bienvenidos a este video tutorial.\nEn esta guía, exploramos la conversión de subtítulos.\nComencemos directamente con los detalles.',
      orDivider: 'O',
      uploadTitle: 'Opción 2 — Subir Archivo TXT',
      convertButton: 'Convertir a SRT',
      clearButton: 'Borrar',
      trySampleButton: 'Probar Ejemplo',
      livePreviewTitle: 'Subtítulos Generados (.srt)',
      errorNoInput: 'Por favor, pegue texto o suba un archivo .txt para convertir.',
      pastedContentSource: 'Contenido de Texto Pegado',
      dropzoneTitle: 'Arrastre y suelte su archivo .txt aquí',
      dropzoneSubtitle: 'o haga clic para buscar en su dispositivo',
      browseButton: 'Seleccionar Archivo TXT',
      dropActiveText: 'Suelte el archivo TXT aquí...',
      fileSelected: 'Archivo seleccionado',
      fileNameLabel: 'Nombre del Archivo',
      fileSizeLabel: 'Tamaño del Archivo',
      cueCountLabel: 'Subtítulos Creados',
      characterCountLabel: 'Caracteres',
      downloadAction: 'Descargar .srt',
      copyAction: 'Copiar al Portapapeles',
      copiedSuccess: '¡Copiado al portapapeles!',
      resetAction: 'Convertir Otro Texto',
      previewTitle: 'Vista Previa del SRT Generado',
      previewEmpty: 'Sus subtítulos SRT aparecerán aquí inmediatamente después de ingresar el texto.',
      timingOptionsTitle: 'Ajustes de Tiempo y División',
      optStartTime: 'Tiempo Inicial (segundos)',
      optDuration: 'Duración por Subtítulo (segundos)',
      optGap: 'Pausa entre Subtítulos (segundos)',
      optSplitMethod: 'Dividir Texto Por',
      optSplitParagraphs: 'Párrafos (Doble Salto)',
      optSplitLines: 'Cada Línea (Salto Simple)',
      optSplitSentences: 'Oraciones (. ? !)',
      timingNoticeBadge: 'Tiempos Automáticos Generados',
      errorInvalidFile: 'Por favor, suba un archivo de texto (.txt) válido.',
      errorEmptyFile: 'El archivo subido está vacío.',
      errorParseFailed: 'No se pudieron extraer líneas de texto válidas.'
    }
  },
  fr: {
    metaTitle: 'Convertisseur TXT en SRT Gratuit – Créer des Sous-Titres à Partir de Texte',
    metaDescription: 'Convertissez des transcriptions TXT et du texte brut en fichiers de sous-titres SRT conformes en ligne. Génération automatique du minutage et traitement 100% privé dans le navigateur.',
    h1: 'Convertisseur TXT en SRT',
    heroDescription: 'Transformez vos scripts, transcriptions et textes bruts en fichiers de sous-titres SubRip (.srt) dotés d\'horodatages automatiques et personnalisables. Rapide, privé et entièrement gratuit.',
    toolName: 'Convertisseur TXT en SRT',
    timingNotice: 'Note sur le Minutage : Les fichiers texte ne comportent pas de codes temporels. Notre outil génère automatiquement des blocs numérotés et des horodatages selon vos paramètres. Vous pouvez affiner la synchronisation dans votre logiciel de montage.',
    ui: {
      pasteTitle: 'Entrée Texte Brut (.txt)',
      pastePlaceholder: 'Collez votre texte ou transcription ici (chaque ligne ou paragraphe devient un sous-titre)...\n\nExemple :\nBonjour et bienvenue dans ce tutoriel vidéo.\nDans ce guide, nous explorons la conversion de sous-titres.\nPassons directement aux détails.',
      orDivider: 'OU',
      uploadTitle: 'Option 2 — Importer un Fichier TXT',
      convertButton: 'Convertir en SRT',
      clearButton: 'Effacer',
      trySampleButton: 'Essayer un Exemple',
      livePreviewTitle: 'Sous-Titres Générés (.srt)',
      errorNoInput: 'Veuillez coller du texte ou importer un fichier .txt à convertir.',
      pastedContentSource: 'Texte Collé',
      dropzoneTitle: 'Glissez et déposez votre fichier .txt ici',
      dropzoneSubtitle: 'ou cliquez pour parcourir vos fichiers',
      browseButton: 'Choisir un Fichier TXT',
      dropActiveText: 'Déposez le fichier TXT ici...',
      fileSelected: 'Fichier sélectionné',
      fileNameLabel: 'Nom du Fichier',
      fileSizeLabel: 'Taille du Fichier',
      cueCountLabel: 'Sous-Titres Créés',
      characterCountLabel: 'Caractères',
      downloadAction: 'Télécharger .srt',
      copyAction: 'Copier dans le Presse-Papiers',
      copiedSuccess: 'Copié dans le presse-papiers !',
      resetAction: 'Convertir un Autre Texte',
      previewTitle: 'Aperçu du SRT Généré',
      previewEmpty: 'Vos sous-titres SRT apparaîtront ici immédiatement après la saisie du texte.',
      timingOptionsTitle: 'Paramètres de Minutage et de Découpage',
      optStartTime: 'Temps Initial (secondes)',
      optDuration: 'Durée par Sous-Titre (secondes)',
      optGap: 'Intervalle entre Sous-Titres (secondes)',
      optSplitMethod: 'Découper le Texte Par',
      optSplitParagraphs: 'Paragraphes (Double saut)',
      optSplitLines: 'Chaque Ligne (Saut simple)',
      optSplitSentences: 'Phrases (. ? !)',
      timingNoticeBadge: 'Minutage Automatique Généré',
      errorInvalidFile: 'Veuillez importer un fichier texte (.txt) valide.',
      errorEmptyFile: 'Le fichier importé est vide.',
      errorParseFailed: 'Impossible d\'extraire des lignes de texte valides.'
    }
  },
  de: {
    metaTitle: 'Kostenloser TXT in SRT Umwandler – Untertitel aus Text Erstellen',
    metaDescription: 'Wandeln Sie TXT-Transkripte und reinen Text online in formatierte SRT-Untertiteldateien um. Automatische Zeitstempelgenerierung und 100% private Verarbeitung im Browser.',
    h1: 'TXT in SRT Umwandler',
    heroDescription: 'Verwandeln Sie Textskripte, Transkripte und Textdateien in standardisierte SubRip (.srt) Untertiteldateien mit automatischer Zeitstempelerstellung. Schnell, privat und kostenlos.',
    toolName: 'TXT in SRT Umwandler',
    timingNotice: 'Hinweis zum Timing: Reine Textdateien enthalten keine Zeitangaben. Unser Konverter erstellt automatisch nummerierte Abschnitte und Zeitstempel basierend auf Ihren Vorgaben. Bei Bedarf können Sie das Timing im Videoschnittprogramm anpassen.',
    ui: {
      pasteTitle: 'Reiner Texteingang (.txt)',
      pastePlaceholder: 'Fügen Sie Ihren Text oder Ihr Transkript hier ein (jede Zeile oder jeder Absatz wird zu einem Untertitel)...\n\nBeispiel:\nHallo und herzlich willkommen zu diesem Video-Tutorial.\nIn dieser Anleitung erklären wir die Untertitelkonvertierung.\nLassen Sie uns direkt starten.',
      orDivider: 'ODER',
      uploadTitle: 'Option 2 — TXT-Datei Hochladen',
      convertButton: 'In SRT Umwandeln',
      clearButton: 'Löschen',
      trySampleButton: 'Beispiel Testen',
      livePreviewTitle: 'Erstellte Untertitel (.srt)',
      errorNoInput: 'Bitte Text einfügen oder eine .txt-Datei zum Umwandeln hochladen.',
      pastedContentSource: 'Eingefügter Text',
      dropzoneTitle: 'Ziehen Sie Ihre .txt-Datei hierher',
      dropzoneSubtitle: 'oder klicken Sie zum Auswählen',
      browseButton: 'TXT-Datei Auswählen',
      dropActiveText: 'TXT-Datei hier ablegen...',
      fileSelected: 'Datei ausgewählt',
      fileNameLabel: 'Dateiname',
      fileSizeLabel: 'Dateigröße',
      cueCountLabel: 'Erstellte Untertitel',
      characterCountLabel: 'Zeichen',
      downloadAction: '.srt Herunterladen',
      copyAction: 'In Zwischenablage Kopieren',
      copiedSuccess: 'In Zwischenablage kopiert!',
      resetAction: 'Weitere Datei Umwandeln',
      previewTitle: 'Vorschau der Erstellten SRT',
      previewEmpty: 'Ihre formatierten SRT-Untertitel erscheinen hier direkt nach der Eingabe.',
      timingOptionsTitle: 'Timing- und Teilungseinstellungen',
      optStartTime: 'Startzeit (Sekunden)',
      optDuration: 'Dauer pro Untertitel (Sekunden)',
      optGap: 'Pause zwischen Untertiteln (Sekunden)',
      optSplitMethod: 'Text Teilen Nach',
      optSplitParagraphs: 'Absätzen (Doppelter Zeilenumbruch)',
      optSplitLines: 'Jeder Zeile (Einfacher Zeilenumbruch)',
      optSplitSentences: 'Sätzen (. ? !)',
      timingNoticeBadge: 'Automatische Zeitstempel Erstellt',
      errorInvalidFile: 'Bitte eine gültige Textdatei (.txt) auswählen.',
      errorEmptyFile: 'Die hochgeladene Datei ist leer.',
      errorParseFailed: 'Es konnten keine gültigen Textzeilen extrahiert werden.'
    }
  },
  id: {
    metaTitle: 'Konverter TXT ke SRT Gratis – Buat File Subtitle dari Teks',
    metaDescription: 'Konversi transkrip TXT dan teks biasa menjadi file subtitle SRT yang valid secara online. Pembuatan timestamp otomatis dan pemrosesan 100% privat di peramban.',
    h1: 'Konverter TXT ke SRT',
    heroDescription: 'Ubah skrip teks, transkrip wawancara, dan teks biasa menjadi file subtitle SubRip (.srt) dengan timestamp otomatis yang dapat disesuaikan. Cepat, privat, dan gratis.',
    toolName: 'Konverter TXT ke SRT',
    timingNotice: 'Catatan Waktu: File teks biasa tidak memiliki kode waktu subtitle. Konverter kami membuat penomoran urut dan timestamp otomatis berdasarkan durasi yang Anda tentukan. Sinkronisasi akhir dapat disesuaikan di aplikasi editor video Anda.',
    ui: {
      pasteTitle: 'Input Teks Biasa (.txt)',
      pastePlaceholder: 'Tempel teks atau transkrip Anda di sini (setiap baris atau paragraf menjadi baris subtitle)...\n\nContoh:\nHalo dan selamat datang di video tutorial ini.\nDalam panduan ini, kita membahas konversi subtitle.\nMari langsung mulai ke pembahasannya.',
      orDivider: 'ATAU',
      uploadTitle: 'Opsi 2 — Unggah File TXT',
      convertButton: 'Konversi ke SRT',
      clearButton: 'Hapus',
      trySampleButton: 'Coba Contoh',
      livePreviewTitle: 'Subtitle Dihasilkan (.srt)',
      errorNoInput: 'Silakan tempel teks atau unggah file .txt untuk dikonversi.',
      pastedContentSource: 'Konten Teks Ditempel',
      dropzoneTitle: 'Tarik & lepas file .txt Anda di sini',
      dropzoneSubtitle: 'atau klik untuk memilih dari perangkat Anda',
      browseButton: 'Pilih File TXT',
      dropActiveText: 'Lepaskan file TXT di sini...',
      fileSelected: 'File dipilih',
      fileNameLabel: 'Nama File',
      fileSizeLabel: 'Ukuran File',
      cueCountLabel: 'Subtitle Dibuat',
      characterCountLabel: 'Karakter',
      downloadAction: 'Unduh .srt',
      copyAction: 'Salin ke Papan Klip',
      copiedSuccess: 'Berhasil disalin ke papan klip!',
      resetAction: 'Konversi Teks Lain',
      previewTitle: 'Pratinjau SRT Dihasilkan',
      previewEmpty: 'Subtitle SRT Anda akan langsung muncul di sini setelah teks dimasukkan.',
      timingOptionsTitle: 'Pengaturan Waktu & Pemisahan',
      optStartTime: 'Waktu Mulai (detik)',
      optDuration: 'Durasi per Subtitle (detik)',
      optGap: 'Jeda antar Subtitle (detik)',
      optSplitMethod: 'Pisahkan Teks Berdasarkan',
      optSplitParagraphs: 'Paragraf (Baris Ganda)',
      optSplitLines: 'Setiap Baris (Baris Tunggal)',
      optSplitSentences: 'Kalimat (. ? !)',
      timingNoticeBadge: 'Timestamp Otomatis Dibuat',
      errorInvalidFile: 'Silakan unggah file teks (.txt) yang valid.',
      errorEmptyFile: 'File yang diunggah kosong.',
      errorParseFailed: 'Tidak dapat mengekstrak teks yang valid.'
    }
  },
  vi: {
    metaTitle: 'Công Cụ Chuyển TXT Sang SRT Miễn Phí – Tạo Phụ Đề Từ Văn Bản',
    metaDescription: 'Chuyển đổi bản ghi âm TXT và văn bản thuần túy thành tệp phụ đề SRT chuẩn trực tuyến. Tạo mốc thời gian tự động, xử lý 100% an toàn trên trình duyệt.',
    h1: 'Chuyển Đổi TXT Sang SRT',
    heroDescription: 'Biến kịch bản, bản ghi thoại và văn bản thuần túy thành tệp phụ đề SubRip (.srt) chuẩn với mốc thời gian tự động tùy chỉnh. Cực nhanh, bảo mật và miễn phí.',
    toolName: 'Chuyển Đổi TXT Sang SRT',
    timingNotice: 'Lưu ý về Thời gian: Tệp văn bản thuần túy không chứa mã thời gian. Công cụ của chúng tôi tự động tạo các khối phụ đề kèm mốc thời gian tuần tự theo cài đặt của bạn. Bạn có thể tinh chỉnh lại trong phần mềm chỉnh sửa video.',
    ui: {
      pasteTitle: 'Nhập Văn Bản Thuần Túy (.txt)',
      pastePlaceholder: 'Dán văn bản hoặc bản ghi thoại của bạn vào đây (mỗi dòng hoặc đoạn văn sẽ thành một câu phụ đề)...\n\nVí dụ:\nXin chào và chào mừng bạn đến với video hướng dẫn.\nTrong video này, chúng ta tìm hiểu về chuyển đổi phụ đề.\nHãy cùng bắt đầu ngay bây giờ.',
      orDivider: 'HOẶC',
      uploadTitle: 'Lựa chọn 2 — Tải lên tệp TXT',
      convertButton: 'Chuyển Đổi Sang SRT',
      clearButton: 'Xóa',
      trySampleButton: 'Dùng Bản Mẫu',
      livePreviewTitle: 'Phụ Đề Đã Tạo (.srt)',
      errorNoInput: 'Vui lòng dán văn bản hoặc tải lên tệp .txt để chuyển đổi.',
      pastedContentSource: 'Nội Dung Đã Dán',
      dropzoneTitle: 'Kéo thả tệp .txt của bạn vào đây',
      dropzoneSubtitle: 'hoặc nhấp để chọn tệp từ thiết bị',
      browseButton: 'Chọn Tệp TXT',
      dropActiveText: 'Thả tệp TXT vào đây...',
      fileSelected: 'Tệp đã chọn',
      fileNameLabel: 'Tên Tệp',
      fileSizeLabel: 'Kích Thước Tệp',
      cueCountLabel: 'Số Phụ Đề Tạo Được',
      characterCountLabel: 'Ký Tự',
      downloadAction: 'Tải về .srt',
      copyAction: 'Sao Chép Vào Bộ Nhớ Tạm',
      copiedSuccess: 'Đã sao chép vào bộ nhớ tạm!',
      resetAction: 'Chuyển Đổi Tệp Khác',
      previewTitle: 'Xem Trước SRT Đã Tạo',
      previewEmpty: 'Phụ đề SRT sẽ hiển thị ở đây ngay sau khi bạn nhập nội dung.',
      timingOptionsTitle: 'Cài Đặt Thời Gian & Ngắt Dòng',
      optStartTime: 'Thời Gian Bắt Đầu (giây)',
      optDuration: 'Thời Lượng Mỗi Câu (giây)',
      optGap: 'Khoảng Cách Giữa Các Câu (giây)',
      optSplitMethod: 'Ngắt Dòng Theo',
      optSplitParagraphs: 'Đoạn Văn (Dòng Đôi)',
      optSplitLines: 'Từng Dòng (Dòng Đơn)',
      optSplitSentences: 'Câu Văn (. ? !)',
      timingNoticeBadge: 'Đã Tạo Thời Gian Tự Động',
      errorInvalidFile: 'Vui lòng tải lên tệp văn bản (.txt) hợp lệ.',
      errorEmptyFile: 'Tệp tải lên bị trống.',
      errorParseFailed: 'Không thể trích xuất các dòng văn bản hợp lệ.'
    }
  },
  ko: {
    metaTitle: '무료 TXT SRT 변환기 – 텍스트로 자막 파일 만들기',
    metaDescription: 'TXT 스크립트와 일반 텍스트를 표준 SRT 자막 파일로 온라인 변환하세요. 자동 타임스탬프 생성, 맞춤형 분할 설정, 브라우저 로컬 100% 비공개 처리.',
    h1: 'TXT SRT 변환기',
    heroDescription: '일반 텍스트 대본, 인터뷰 녹취록, 문서 글을 표준 SubRip(.srt) 자막 파일로 손쉽게 변환하세요. 자동 타임스탬프 생성 기능이 탑재되어 빠르고 안전하며 완전 무료입니다.',
    toolName: 'TXT SRT 변환기',
    timingNotice: '타임스탬프 안내: 일반 TXT 파일에는 시간 코드가 포함되어 있지 않습니다. 본 변환기는 설정된 지속 시간에 맞춰 순차적인 자막 번호와 시간 코드를 자동으로 생성합니다. 영상 편집기나 유튜브 스튜디오에서 미세 조정할 수 있습니다.',
    ui: {
      pasteTitle: '일반 텍스트 입력 (.txt)',
      pastePlaceholder: '여기에 일반 텍스트나 대본을 붙여넣으세요 (각 줄이나 문단이 개별 자막이 됩니다)...\n\n예시:\n안녕하세요, 비디오 튜토리얼에 오신 것을 환영합니다.\n이번 가이드에서는 자막 변환에 대해 알아봅니다.\n지금 바로 시작해 보겠습니다.',
      orDivider: '또는',
      uploadTitle: '옵션 2 — TXT 파일 업로드',
      convertButton: 'SRT로 변환',
      clearButton: '지우기',
      trySampleButton: '샘플 입력',
      livePreviewTitle: '생성된 자막 (.srt)',
      errorNoInput: '변환할 텍스트를 붙여넣거나 .txt 파일을 업로드해 주세요.',
      pastedContentSource: '붙여넣은 텍스트 내용',
      dropzoneTitle: '.txt 파일을 이곳으로 드래그하세요',
      dropzoneSubtitle: '또는 클릭하여 기기에서 파일 선택',
      browseButton: 'TXT 파일 선택',
      dropActiveText: 'TXT 파일을 여기에 놓으세요...',
      fileSelected: '파일 선택됨',
      fileNameLabel: '파일 이름',
      fileSizeLabel: '파일 크기',
      cueCountLabel: '생성된 자막 수',
      characterCountLabel: '글자 수',
      downloadAction: '.srt 다운로드',
      copyAction: '클립보드에 복사',
      copiedSuccess: '클립보드에 복사되었습니다!',
      resetAction: '다른 텍스트 변환',
      previewTitle: '생성된 SRT 미리보기',
      previewEmpty: '텍스트를 입력하면 즉시 포맷된 SRT 자막이 이곳에 표시됩니다.',
      timingOptionsTitle: '자동 시간 및 분할 설정',
      optStartTime: '시작 시간 (초)',
      optDuration: '자막 지속 시간 (초)',
      optGap: '자막 사이 간격 (초)',
      optSplitMethod: '텍스트 분할 기준',
      optSplitParagraphs: '문단 기준 (두 줄 바꿈)',
      optSplitLines: '각 줄 기준 (한 줄 바꿈)',
      optSplitSentences: '문장 기준 (. ? !)',
      timingNoticeBadge: '자동 타임스탬프 생성됨',
      errorInvalidFile: '유효한 텍스트(.txt) 파일을 업로드해 주세요.',
      errorEmptyFile: '업로드된 파일이 비어 있습니다.',
      errorParseFailed: '유효한 텍스트를 추출하지 못했습니다.'
    }
  },
  ja: {
    metaTitle: '無料 TXT SRT 変換ツール – テキストから字幕ファイルを作成',
    metaDescription: 'TXTテキストや原稿、文字起こしデータを標準SRT字幕ファイルにオンライン変換。自動タイムコード生成、柔軟な時間設定、完全ブラウザ完結で高いプライバシー保護。',
    h1: 'TXT SRT 変換ツール',
    heroDescription: 'テキスト原稿、インタビューの書き起こし、翻訳文章を自動タイムコード付きのSubRip（.srt）字幕ファイルに瞬時に変換します。高速・完全無料・サーバー送信なし。',
    toolName: 'TXT SRT 変換ツール',
    timingNotice: 'タイムコードに関する注意：通常のテキストファイルには時間の情報がありません。本ツールは設定した表示時間に基づいて連番とタイムコードを自動生成します。動画編集ソフトやYouTube上で微調整してご利用ください。',
    ui: {
      pasteTitle: 'テキスト入力 (.txt)',
      pastePlaceholder: 'ここにテキストや台本を貼り付けてください（各行または段落が1つの字幕になります）...\n\n例：\n動画チュートリアルへようこそ。\nこのガイドでは字幕の変換方法を解説します。\n早速詳細を見ていきましょう。',
      orDivider: 'または',
      uploadTitle: 'オプション 2 — TXTファイルをアップロード',
      convertButton: 'SRTに変換',
      clearButton: 'クリア',
      trySampleButton: 'サンプルを入力',
      livePreviewTitle: '生成された字幕 (.srt)',
      errorNoInput: '変換するテキストを入力するか、.txtファイルをアップロードしてください。',
      pastedContentSource: '貼り付けたテキスト',
      dropzoneTitle: '.txt ファイルをここにドラッグ＆ドロップ',
      dropzoneSubtitle: 'またはクリックしてデバイスから選択',
      browseButton: 'TXTファイルを選択',
      dropActiveText: 'TXTファイルをここにドロップ...',
      fileSelected: 'ファイルを選択しました',
      fileNameLabel: 'ファイル名',
      fileSizeLabel: 'ファイルサイズ',
      cueCountLabel: '作成された字幕数',
      characterCountLabel: '文字数',
      downloadAction: '.srt をダウンロード',
      copyAction: 'クリップボードにコピー',
      copiedSuccess: 'クリップボードにコピーしました！',
      resetAction: '別のテキストを変換',
      previewTitle: '生成されたSRTのプレビュー',
      previewEmpty: 'テキストを入力すると、ここに整形されたSRT字幕がリアルタイムで表示されます。',
      timingOptionsTitle: '自動タイミング・分割設定',
      optStartTime: '開始時間（秒）',
      optDuration: '1字幕あたりの表示時間（秒）',
      optGap: '字幕間の間隔（秒）',
      optSplitMethod: 'テキスト分割方法',
      optSplitParagraphs: '段落ごと（空行区切り）',
      optSplitLines: '行ごと（改行区切り）',
      optSplitSentences: '文ごと（句点 。！？）',
      timingNoticeBadge: '自動タイムコード生成済み',
      errorInvalidFile: '有効なテキスト（.txt）ファイルをアップロードしてください。',
      errorEmptyFile: 'アップロードされたファイルが空です。',
      errorParseFailed: '有効なテキスト行を抽出できませんでした。'
    }
  },
  ar: {
    metaTitle: 'محول TXT إلى SRT مجاني – إنشاء ملفات ترجمة من النصوص',
    metaDescription: 'قم بتحويل نصوص TXT والتفريغ الصوتي إلى ملفات ترجمة SRT قياسية أونلاين. توليد تلقائي للرموز الزمنية، إعدادات توقيت ذكية، ومعالجة محلية 100% داخل المتصفح.',
    h1: 'محول TXT إلى SRT',
    heroDescription: 'حول النصوص المكتوبة، ونصوص المقابلات، والترجمات إلى ملفات ترجمة SubRip (.srt) قياسية مع توليد توقيتات زمنية تلقائية قابلة للتخصيص. فائق السرعة، آمن ومجاني تماماً.',
    toolName: 'محول TXT إلى SRT',
    timingNotice: 'تنبيه بخصوص التوقيت: ملفات النص العادي لا تحتوي على رموز زمنية. يقوم المحول الخاص بنا بإنشاء أرقام تسلسلية وتوقيتات زمنية تلقائية بناءً على مدة العرض المحددة. يمكنك تعديل التوقيت بدقة في برنامج تحرير الفيديو الخاص بك.',
    ui: {
      pasteTitle: 'إدخال النص العادي (.txt)',
      pastePlaceholder: 'الصق النص أو نص التفريغ الصوتي هنا (كل سطر أو فقرة ستصبح مقطع ترجمة منفصل)...\n\nمثال:\nمرحباً بكم في هذا الفيديو التعليمي.\nفي هذا الدليل، نستكشف كيفية تحويل الترجمات.\nدعونا نبدأ مباشرة في التفاصيل.',
      orDivider: 'أو',
      uploadTitle: 'الخيار 2 — رفع ملف TXT',
      convertButton: 'تحويل إلى SRT',
      clearButton: 'مسح',
      trySampleButton: 'تجربة نموذج',
      livePreviewTitle: 'الترجمة الناتجة (.srt)',
      errorNoInput: 'يرجى لصق نص أو رفع ملف .txt للتحويل.',
      pastedContentSource: 'محتوى نصي ملصوق',
      dropzoneTitle: 'اسحب وأفلت ملف .txt هنا',
      dropzoneSubtitle: 'أو انقر لاختيار ملف من جهازك',
      browseButton: 'اختيار ملف TXT',
      dropActiveText: 'أفلت ملف TXT هنا...',
      fileSelected: 'تم اختيار الملف',
      fileNameLabel: 'اسم الملف',
      fileSizeLabel: 'حجم الملف',
      cueCountLabel: 'المقاطع المنشأة',
      characterCountLabel: 'عدد الأحرف',
      downloadAction: 'تحميل كملف .srt',
      copyAction: 'نسخ إلى الحافظة',
      copiedSuccess: 'تم النسخ إلى الحافظة بنجاح!',
      resetAction: 'تحويل نص آخر',
      previewTitle: 'معاينة ملف SRT الناتج',
      previewEmpty: 'ستظهر الترجمة بتنسيق SRT هنا مباشرة بمجرد إدخال النص.',
      timingOptionsTitle: 'خيارات التوقيت والتقسيم التلقائي',
      optStartTime: 'وقت البداية (بالثواني)',
      optDuration: 'مدة عرض كل مقطع (بالثواني)',
      optGap: 'الفارق الزمني بين المقاطع (بالثواني)',
      optSplitMethod: 'تقسيم النص حسب',
      optSplitParagraphs: 'الفقرات (سطر فارغ)',
      optSplitLines: 'كل سطر (سطر منفرد)',
      optSplitSentences: 'الجمل (. ! ؟)',
      timingNoticeBadge: 'تم توليد توقيت زمني تلقائي',
      errorInvalidFile: 'يرجى رفع ملف نصي (.txt) صالح.',
      errorEmptyFile: 'الملف الذي تم رفعه فارغ.',
      errorParseFailed: 'تعذر استخراج أسطر نصية صالحة.'
    }
  }
};

for (const [locale, data] of Object.entries(localesData)) {
  const localizedContent = {
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    h1: data.h1,
    heroDescription: data.heroDescription,
    toolName: data.toolName,
    timingNotice: data.timingNotice,
    ui: data.ui,
    sections: en.sections,
    faqs: en.faqs
  };

  const fileContent = 'import type { TxtToSrtDetailContent } from "./types";\n\nexport const ' + locale + 'Content: TxtToSrtDetailContent = ' + JSON.stringify(localizedContent, null, 2) + ';\n';
  fs.writeFileSync(path.join(targetDir, locale + '.ts'), fileContent, 'utf8');
  console.log('✓ Created ' + locale + '.ts');
}

const indexContent = `import type { Locale } from '../../../i18n/locales';
import type { TxtToSrtDetailContent } from './types';
import { enContent } from './en';
import { ptContent } from './pt';
import { esContent } from './es';
import { koContent } from './ko';
import { viContent } from './vi';
import { idContent } from './id';
import { jaContent } from './ja';
import { frContent } from './fr';
import { deContent } from './de';
import { arContent } from './ar';

export * from './types';

export const txtToSrtData: Record<Locale, TxtToSrtDetailContent> = {
  en: enContent,
  pt: ptContent,
  es: esContent,
  ko: koContent,
  vi: viContent,
  id: idContent,
  ja: jaContent,
  fr: frContent,
  de: deContent,
  ar: arContent,
};
`;

fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf8');
console.log('✓ Created index.ts for txt-to-srt');
console.log('\nAll 10 locale datasets successfully built!');
