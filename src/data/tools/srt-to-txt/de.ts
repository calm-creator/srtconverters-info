import type { ToolDetailContent } from './types';

export const deContent: ToolDetailContent = {
  metaTitle: 'Kostenloser SRT in TXT Konverter – Text aus Untertiteln extrahieren',
  metaDescription: 'Konvertieren Sie SRT-Untertiteldateien online in reinen TXT-Text. Entfernt Zeitstempel und Nummerierungen direkt im Browser – 100 % privat und sicher.',
  h1: 'SRT in TXT Umwandler',
  heroDescription: 'Verwandeln Sie SRT-Untertiteldateien schnell in saubere, lesbare Texttranskripte. Entfernt Zeitcodes, Nummerierungen und Formatierungs-Tags direkt im Browser bei vollständiger Privatsphäre.',
  toolName: 'SRT in TXT Umwandler',
  ui: {
    pasteTitle: 'SRT-Eingabe (.srt)',
    pastePlaceholder: 'Fügen Sie Ihren SRT-Inhalt hier ein (z. B.\n1\n00:00:01,000 --> 00:00:04,000\nHallo, willkommen zu unserem Video.)...',
    orDivider: 'ODER',
    uploadTitle: 'Option 2 — SRT-Datei hochladen',
    convertButton: 'In Text umwandeln',
    clearButton: 'Löschen',
    trySampleButton: 'Beispiel testen',
    livePreviewTitle: 'Reiner Text (.txt)',
    errorNoInput: 'Bitte fügen Sie SRT-Inhalt ein oder laden Sie eine SRT-Datei hoch.',
    pastedContentSource: 'Eingefügter SRT-Inhalt',
    dropzoneTitle: 'Ziehen Sie Ihre .srt-Datei hierher',
    dropzoneSubtitle: 'oder klicken Sie zum Auswählen von Ihrem Gerät',
    browseButton: 'SRT-Datei auswählen',
    dropActiveText: 'SRT-Datei hier loslassen...',
    fileSelected: 'Datei ausgewählt',
    fileNameLabel: 'Dateiname',
    fileSizeLabel: 'Dateigröße',
    cueCountLabel: 'Extrahierte Untertitel',
    characterCountLabel: 'Zeichen',
    downloadAction: '.txt herunterladen',
    copyAction: 'In die Zwischenablage kopieren',
    copiedSuccess: 'In die Zwischenablage kopiert!',
    resetAction: 'Weitere Datei umwandeln',
    previewTitle: 'Textvorschau',
    previewEmpty: 'Ihr konvertierter Reintext erscheint hier sofort nach Auswahl der SRT-Datei.',
    optionsTitle: 'Konvertierungsoptionen',
    optEmptyLine: 'Leerzeile zwischen Untertiteln einfügen',
    optRemoveTags: 'Formatierungs-Tags entfernen (z. B. <i>, <b>, <font>)',
    errorInvalidFile: 'Bitte laden Sie eine gültige .srt-Untertiteldatei hoch.',
    errorEmptyFile: 'Die ausgewählte Datei ist leer.',
    errorParseFailed: 'Die Datei konnte nicht verarbeitet werden. Bitte prüfen Sie das SRT-Format.',
  },
  sections: {
    whatIsSrt: {
      title: 'Was ist eine SRT-Datei?',
      content: [
        'Eine SRT-Datei (SubRip Subtitle) ist das weltweit am häufigsten genutzte Textformat für digitale Video-Untertitel. Sie enthält nummerierte Abschnitte mit präzisen Anfangs- und Endzeitstempeln gefolgt vom gesprochenen Dialog.',
        'Für Videoplayer wie VLC oder Streamingdienste ist dieses Format ideal, aber die ständigen Zeitangaben und Nummern erschweren das normale Lesen als Fließtext.',
      ],
    },
    whatIsConverter: {
      title: 'Was macht ein SRT zu TXT Konverter?',
      content: [
        'Der Konverter analysiert die Struktur der Untertiteldatei und filtert alle Zeitstempel sowie Blocknummern heraus, sodass nur der reine Sprechertext übrig bleibt.',
        'Die Umwandlung erfolgt zu 100 % in Ihrem Webbrowser mittels clientseitigem JavaScript. Ihre Dateien werden zu keinem Zeitpunkt an externe Server übertragen.',
      ],
    },
    howToConvert: {
      title: 'So wandeln Sie SRT in TXT um',
      steps: [
        {
          title: '1. Datei auswählen',
          description: 'Ziehen Sie die .srt-Datei in das Feld oder wählen Sie sie über den Button auf Ihrem Gerät aus.',
        },
        {
          title: '2. Sofortige Umwandlung',
          description: 'Das Tool bereinigt Zeitstempel und Tags vollautomatisch in Sekundenbruchteilen.',
        },
        {
          title: '3. Herunterladen oder Kopieren',
          description: 'Laden Sie das fertige .txt-Dokument herunter oder kopieren Sie den Text in die Zwischenablage.',
        },
      ],
    },
    whyConvert: {
      title: 'Warum SRT in TXT umwandeln?',
      benefits: [
        {
          title: 'Bessere Lesbarkeit',
          description: 'Lesen Sie Interviews, Podcasts und Videoaufzeichnungen bequem als zusammenhängenden Fließtext.',
        },
        {
          title: 'Perfekt für KI-Tools',
          description: 'Übertragen Sie bereinigten Text an ChatGPT oder Claude, ohne wertvolle Tokens für Zeitcodes zu verschwenden.',
        },
        {
          title: 'Sprachen lernen',
          description: 'Drucken Sie Filmskripte aus, um Vokabeln und Redewendungen gezielt zu analysieren.',
        },
        {
          title: 'Schnelle Textsuche',
          description: 'Durchsuchen Sie lange Videoinhalte mühelos nach bestimmten Begriffen.',
        },
      ],
    },
    comparison: {
      title: 'Vergleich: SRT vs. TXT',
      description: 'Die zentralen Unterschiede zwischen dem Untertitelformat und einfachen Textdateien.',
      headers: ['Eigenschaft', 'SRT-Format (.srt)', 'Reiner Text (.txt)'],
      rows: [
        ['Hauptzweck', 'Synchronisation von Untertiteln im Video', 'Lesen und Dokumentation'],
        ['Zeitstempel', 'Ja (z. B. 00:00:20,000 --> 00:00:25,000)', 'Nein'],
        ['Laufende Nummern', 'Ja (1, 2, 3...)', 'Nein'],
        ['Formatierungs-Tags', 'Häufig HTML-Tags enthalten', 'Reiner unformatierter Text'],
        ['Bester Einsatzort', 'Videoplayer und Schnittprogramme', 'Lesen, Notizen, KI'],
      ],
    },
    privacy: {
      title: 'Datenschutz & lokale Sicherheit',
      content: [
        'Ihre Dateien verlassen Ihr Gerät nicht. Alle Vorgänge laufen lokal im Browser ab.',
        'Nach dem Laden der Webseite funktioniert das Tool auch ohne aktive Internetverbindung.',
      ],
    },
  },
  faqs: [
    {
      question: 'Was ist eine SRT-Datei?',
      answer: 'Ein standardisiertes Untertitelformat mit präzisen Zeitangaben und Dialogtexten für Videos.',
    },
    {
      question: 'Werden Zeitstempel und Nummern vollständig entfernt?',
      answer: 'Ja, sämtliche Zeitangaben und Nummerierungen werden restlos entfernt.',
    },
    {
      question: 'Wird meine Datei auf einen Server hochgeladen?',
      answer: 'Nein, die Konvertierung findet zu 100 % lokal in Ihrem Browser statt.',
    },
    {
      question: 'Werden deutsche Umlaute (ä, ö, ü, ß) unterstützt?',
      answer: 'Ja, alle deutschen Sonderzeichen und UTF-8-Codierungen werden fehlerfrei verarbeitet.',
    },
    {
      question: 'Kann ich das Tool auf dem Smartphone nutzen?',
      answer: 'Ja, die Seite ist komplett mobiloptimiert für iOS und Android.',
    },
    {
      question: 'Werden HTML-Tags wie <i> entfernt?',
      answer: 'Ja, stilistische Formatierungs-Tags werden automatisch herausgefiltert.',
    },
    {
      question: 'Kostet die Nutzung etwas?',
      answer: 'Nein, das Werkzeug ist vollständig kostenlos und erfordert keine Registrierung.',
    },
    {
      question: 'Gibt es eine Dateigrößenbeschränkung?',
      answer: 'Nein, da die Datei direkt von der Rechenleistung Ihres Geräts verarbeitet wird.',
    },
  ],
};
