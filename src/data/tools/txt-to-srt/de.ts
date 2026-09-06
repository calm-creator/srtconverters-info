import type { TxtToSrtDetailContent } from "./types";

export const deContent: TxtToSrtDetailContent = {
  "metaTitle": "Kostenloser TXT zu SRT Konverter – Text in Untertitel umwandeln",
  "metaDescription": "Wandeln Sie TXT-Transkripte und reinen Text online in formatierte SRT-Untertitel um. Automatische Zeitstempel, intelligente Aufteilung und 100% lokale Browserverarbeitung.",
  "h1": "TXT zu SRT Konverter",
  "heroDescription": "Verwandeln Sie Drehbücher, Transkripte und Textdateien in normgerechte SubRip (.srt) Untertiteldateien mit automatischer, anpassbarer Zeitcodierung. Schnell, sicher und kostenlos.",
  "toolName": "TXT zu SRT Konverter",
  "timingNotice": "Hinweis zum Timing: Reine Textdateien besitzen keine integrierten Zeitstempel. Unser Konverter erstellt automatisch fortlaufende Zeitmarken und Nummerierungen gemäß Ihren Einstellungen. Die Feinabstimmung kann im Videoschnittprogramm erfolgen.",
  "ui": {
    "pasteTitle": "Reiner Texteingang (.txt)",
    "pastePlaceholder": "Fügen Sie Ihren Text oder Ihr Transkript hier ein (jede Zeile oder jeder Absatz wird zu einem Untertitel)...\n\nBeispiel:\nHallo und herzlich willkommen zu diesem Video-Tutorial.\nIn dieser Anleitung erklären wir die Untertitelkonvertierung.\nLassen Sie uns direkt starten.",
    "orDivider": "ODER",
    "uploadTitle": "Option 2 — TXT-Datei Hochladen",
    "convertButton": "In SRT Umwandeln",
    "clearButton": "Löschen",
    "trySampleButton": "Beispiel Testen",
    "livePreviewTitle": "Erstellte Untertitel (.srt)",
    "errorNoInput": "Bitte Text einfügen oder eine .txt-Datei zum Umwandeln hochladen.",
    "pastedContentSource": "Eingefügter Text",
    "dropzoneTitle": "Ziehen Sie Ihre .txt-Datei hierher",
    "dropzoneSubtitle": "oder klicken Sie zum Auswählen",
    "browseButton": "TXT-Datei Auswählen",
    "dropActiveText": "TXT-Datei hier ablegen...",
    "fileSelected": "Datei ausgewählt",
    "fileNameLabel": "Dateiname",
    "fileSizeLabel": "Dateigröße",
    "cueCountLabel": "Erstellte Untertitel",
    "characterCountLabel": "Zeichen",
    "downloadAction": ".srt Herunterladen",
    "copyAction": "In Zwischenablage Kopieren",
    "copiedSuccess": "In Zwischenablage kopiert!",
    "resetAction": "Weitere Datei Umwandeln",
    "previewTitle": "Vorschau der Erstellten SRT",
    "previewEmpty": "Ihre formatierten SRT-Untertitel erscheinen hier direkt nach der Eingabe.",
    "timingOptionsTitle": "Timing- und Teilungseinstellungen",
    "optStartTime": "Startzeit (Sekunden)",
    "optDuration": "Dauer pro Untertitel (Sekunden)",
    "optGap": "Pause zwischen Untertiteln (Sekunden)",
    "optSplitMethod": "Text Teilen Nach",
    "optSplitParagraphs": "Absätzen (Doppelter Zeilenumbruch)",
    "optSplitLines": "Jeder Zeile (Einfacher Zeilenumbruch)",
    "optSplitSentences": "Sätzen (. ? !)",
    "timingNoticeBadge": "Automatische Zeitstempel Erstellt",
    "errorInvalidFile": "Bitte eine gültige Textdatei (.txt) auswählen.",
    "errorEmptyFile": "Die hochgeladene Datei ist leer.",
    "errorParseFailed": "Es konnten keine gültigen Textzeilen extrahiert werden."
  },
  "sections": {
    "whatIsTxt": {
      "title": "Was ist eine reine Textdatei (TXT)?",
      "content": [
        "Eine TXT-Datei (.txt) ist das grundlegendste digitale Textformat. Sie speichert reine alphanumerische Zeichen, Wörter, Absätze und Zeilenumbrüche ohne Formatierungsanweisungen, meist kodiert in UTF-8 oder ASCII.",
        "Da TXT-Dateien keine herstellerspezifischen Formatierungs-Tags, Layout-Vorgaben oder Metadaten enthalten, lassen sie sich auf jedem Betriebssystem, Smartphone und Texteditor problemlos öffnen. Autoren und Redakteure nutzen TXT-Dateien vor allem für Skripte, Notizen, Audio-Transkripte und Übersetzungen.",
        "Allerdings fehlen einfachen Textdateien jegliche Zeitmarken, Zählindizes und Intervalle, die Videoplayer benötigen, um Untertitel synchron zum gesprochenen Ton anzuzeigen. Wird eine TXT-Datei in einem Media-Player geöffnet, können keine zeitgesteuerten Untertitel dargestellt werden."
      ]
    },
    "whatIsSrt": {
      "title": "Was ist eine SRT-Untertiteldatei (SubRip)?",
      "content": [
        "Eine SRT-Datei (SubRip Text) ist der weltweite Standard für digitale Untertitel und Closed Captions. Unterstützt von YouTube, Vimeo, TikTok, Premiere Pro, DaVinci Resolve, Final Cut Pro sowie Playern wie VLC, gliedert sie gesprochene Dialoge in geordnete Zeitabschnitte.",
        "Jeder einzelne Untertitelblock in einer gültigen SRT-Datei folgt einer verbindlichen vierteiligen Struktur:",
        "1. Eine fortlaufende Indexnummer (1, 2, 3, 4...)",
        "2. Ein genauer Start- und Endzeitstempel im Format HH:MM:SS,mmm --> HH:MM:SS,mmm (Stunden:Minuten:Sekunden,Millisekunden)",
        "3. Eine oder mehrere Textzeilen mit dem Dialogtext",
        "4. Eine obligatorische Leerzeile zur Trennung vom nächsten Untertitelblock",
        "Ohne diese formale Syntax können Videoplayer und Schnittprogramme nicht feststellen, wann ein Text eingeblendet wird, wie lange er sichtbar bleibt und wann die nächste Textzeile folgt."
      ]
    },
    "whatIsConverter": {
      "title": "Was macht ein TXT zu SRT Konverter?",
      "content": [
        "Ein TXT-zu-SRT-Konverter überbrückt die Lücke zwischen unformatiertem Text ohne Zeitangaben und timing-synchronen Videountertiteln.",
        "Er liest reine Texttranskripte, Skripte, Vortragsnotizen oder Übersetzungen ein und erzeugt standardkonforme SubRip (.srt)-Dateien inklusive aufsteigender Nummerierung, korrekten Zeitcode-Pfeilen (-->), Millisekunden-Präzision und standardisierten Abständen.",
        "Unser Online-Konverter arbeitet zu 100 % im Arbeitsspeicher Ihres Browsers über moderne Web-APIs. Vertrauliche Skripte, juristische Transkripte und private Medieninhalte werden niemals auf fremde Server übertragen."
      ]
    },
    "howToConvert": {
      "title": "Schritt-für-Schritt-Anleitung: TXT in SRT umwandeln",
      "steps": [
        {
          "title": "1. Text einfügen oder Datei hochladen",
          "description": "Fügen Sie Ihren Text direkt in das Textfeld ein oder wählen Sie eine .txt-Datei von Ihrem Computer oder Smartphone aus."
        },
        {
          "title": "2. Timing und Aufteilung festlegen",
          "description": "Wählen Sie, ob Zeilen, Absätze oder Sätze getrennt werden sollen, und bestimmen Sie die Anzeigedauer (z. B. 3,0s) sowie die Pausenzeit (z. B. 0,5s)."
        },
        {
          "title": "3. Sofortige Live-Vorschau prüfen",
          "description": "Im Vorschaufenster wird die fertige SRT-Datei mit exakten, millisekundengenauen Zeitmarken unmittelbar generiert."
        },
        {
          "title": "4. SRT herunterladen oder kopieren",
          "description": "Klicken Sie auf \"SRT herunterladen\", um die Untertiteldatei lokal zu speichern, oder kopieren Sie den Inhalt für Ihr Schnittprogramm."
        }
      ]
    },
    "whyRenameDoesntWork": {
      "title": "Warum das einfache Umbenennen von .txt in .srt nicht funktioniert",
      "content": [
        "Ein weit verbreiteter Irrtum besteht darin, zu glauben, man müsse lediglich die Dateiendung von '.txt' in '.srt' ändern, damit ein Videoplayer Untertitel anzeigt.",
        "Die Dateiendung signalisiert dem Betriebssystem lediglich, welches Programm geöffnet werden soll. Sie verändert jedoch nicht den Datenaufbau der Datei. Videoplayer wie VLC verlangen zwingend die exakte SubRip-Struktur. Fehlen Zeitzähler und Zeitcodes wie '00:00:00,000 --> 00:00:00,000', verweigert der Player die Wiedergabe.",
        "Ein Umbenennen funktioniert ausschließlich dann, wenn die Textdatei bereits fertigen SRT-Code enthielt und versehentlich als .txt abgespeichert wurde. Bei regulären Texten ist eine echte Umwandlung durch unser Tool unerlässlich."
      ]
    },
    "timingAndSyncExplanation": {
      "title": "Automatische Zeitstempelberechnung: So funktioniert das Timing",
      "content": [
        "Da normale Textdateien keine zeitlichen Orientierungspunkte besitzen, nutzt unser Konverter einen deterministischen Zeitfortschritts-Algorithmus.",
        "Ausgehend von einer Startzeit (standardmäßig 00:00:01,000) erhält jeder Textblock ein Zeitfenster gemäß der eingestellten Dauer (z. B. 3,0 Sekunden). Danach fügt das Tool die gewählte Pause (z. B. 0,5 Sekunden) ein, bevor der nächste Untertitel beginnt.",
        "Enthält Ihr Text bereits Zeitstempel in Klammern (wie [01:23] oder 00:02:15), erkennt unsere Parsing-Logik diese Muster und berechnet Start- und Endzeitpunkte automatisch.",
        "Praxistipp zur Synchronisation: Automatisch erstellte Zeitstempel liefern eine syntaktisch einwandfreie Arbeitsgrundlage. Da menschliche Sprache natürliche Pausen und unterschiedliche Sprechgeschwindigkeiten aufweist, empfiehlt sich ein kurzer Feinschliff in Programmen wie Premiere Pro, DaVinci Resolve oder YouTube Studio."
      ]
    },
    "realWorldUseCases": {
      "title": "Häufige Einsatzbereiche für TXT zu SRT",
      "cases": [
        {
          "title": "YouTube-Untertitel und Video-SEO",
          "description": "Laden Sie formatierte Untertitel bei YouTube hoch, um die Auffindbarkeit in Suchmaschinen zu steigern und internationale Zuschauer zu erreichen."
        },
        {
          "title": "Podcast- und Webinar-Zusammenfassungen",
          "description": "Verwandeln Sie gesprochene Audioinhalte in Untertitelspuren für Social-Media-Clips, Audiogramme und Werbevideos."
        },
        {
          "title": "Übersetzung internationaler Videos",
          "description": "Übersetzen Sie Videotexte als einfachen Text, konvertieren Sie sie in SRT mit synchronem Zeittakt und binden Sie sie in Ihr Schnittprojekt ein."
        },
        {
          "title": "Nachbearbeitung von KI-Spracherkennung",
          "description": "Bringen Sie Rohtext aus Whisper AI, Sprachdiktaten oder automatischen Meeting-Mitschriften in ein sauberes Untertitelformat."
        },
        {
          "title": "Online-Vorlesungen und E-Learning",
          "description": "Stellen Sie barrierefreie Untertitel für digitale Universitätskurse, Schulungsvideos und Lehrinhalte bereit."
        },
        {
          "title": "Vertikale Social-Media-Videos (Reels & TikTok)",
          "description": "Importieren Sie SRT-Dateien in Apps wie CapCut oder Premiere, um ansprechende dynamische Bilduntertitel zu gestalten."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Typische Fehlerquellen und deren Behebung",
      "items": [
        {
          "title": "Untertitel verschwinden zu schnell oder bleiben zu lange stehen",
          "description": "Passen Sie die Anzeigedauer im Tool an. Schnelle Sprache benötigt ca. 2 bis 3 Sekunden pro Zeile, während lange Sätze 4 bis 5 Sekunden erfordern."
        },
        {
          "title": "Untertitel überlappen sich zeitlich",
          "description": "Unser Konverter stellt durch mathematische Abstände sicher, dass keine Überlappungen entstehen. Stellen Sie die Pausenzeit auf 0,2 bis 0,5 Sekunden ein."
        },
        {
          "title": "Umlaute und Sonderzeichen fehlerhaft dargestellt (Mojibake)",
          "description": "Dies passiert bei veralteten Kodierungen wie ANSI. Unser Tool verarbeitet alle Dateien standardmäßig in UTF-8, wodurch deutsche Umlaute (ä, ö, ü, ß) erhalten bleiben."
        },
        {
          "title": "Textzeilen zu lang für mobile Bildschirme",
          "description": "Wählen Sie die Aufteilung nach 'Sätzen' oder 'Einzelnen Zeilen', um die Zeichenanzahl pro Untertitel unter 42 Zeichen zu halten."
        }
      ]
    },
    "comparison": {
      "title": "TXT vs. SRT: Technische Unterschiede im Überblick",
      "description": "Hier sehen Sie die wesentlichen Eigenschaften, die reinen Rohtext von synchronisierten SubRip-Dateien unterscheiden.",
      "headers": [
        "Technischer Aspekt",
        "Reiner Text (.txt)",
        "SubRip-Untertitel (.srt)"
      ],
      "rows": [
        [
          "Zeitkoordinaten",
          "Keine (zeitlos)",
          "Millisekundengenau (HH:MM:SS,mmm)"
        ],
        [
          "Fortlaufende Nummerierung",
          "Keine",
          "Verbindliche Ganzzahlen (1, 2, 3...)"
        ],
        [
          "Zeitcode-Trennzeichen",
          "Keines",
          "Standardisierter Pfeil (-->)"
        ],
        [
          "Unterstützung in Videoplayern",
          "Nicht als Untertitel ladbar",
          "Native Wiedergabe in VLC, YouTube etc."
        ],
        [
          "Videoschnitt-Import",
          "Erfordert manuelle Ausrichtung",
          "Rastet automatisch in Untertitelspuren ein"
        ],
        [
          "Formatierungs-Tags",
          "Ausschließlich reiner Text",
          "Unterstützt Basis-Tags (<i>, <b>, <font>)"
        ],
        [
          "Hauptvorteil",
          "Einfache Lesbarkeit & Archivierung",
          "Präzise audiovisuelle Synchronisation"
        ]
      ]
    },
    "privacy": {
      "title": "100 % lokaler Datenschutz im Browser",
      "content": [
        "Ihre Daten bleiben jederzeit geschützt. Während andere Online-Dienste Ihre Dokumente auf entfernte Server hochladen, führt unser Tool sämtliche Berechnungen ausschließlich im lokalen Speicher Ihres Browsers aus.",
        "Unveröffentlichte Skripte, firmeninterne Interviews und persönliche Aufzeichnungen verlassen Ihr Endgerät zu keinem Zeitpunkt. Nach dem Laden der Seite können Sie die Internetverbindung trennen – der Konverter funktioniert uneingeschränkt weiter."
      ]
    }
  },
  "faqs": [
    {
      "question": "Wie konvertiere ich eine TXT-Datei in eine SRT-Datei?",
      "answer": "Fügen Sie Ihren Text in das Eingabefeld ein oder laden Sie Ihre .txt-Datei hoch. Wählen Sie die Aufteilungsmethode und die gewünschte Anzeigedauer. Das Tool erzeugt sofort die passenden Zeitmarken und stellt die fertige .srt-Datei zum Download bereit."
    },
    {
      "question": "Kann ich TXT ohne Softwareinstallation in SRT umwandeln?",
      "answer": "Ja. Das Tool funktioniert direkt in jedem modernen Webbrowser auf PC, Mac, Tablet oder Smartphone ohne zusätzliche Software oder Browser-Erweiterungen."
    },
    {
      "question": "Enthält eine normale TXT-Datei Untertitel-Zeitstempel?",
      "answer": "Nein. Gewöhnliche Textdateien enthalten lediglich Buchstaben und Zeilenumbrüche. Unser Konverter berechnet daher automatisch passende Zeiteinheiten basierend auf Ihren Vorgaben."
    },
    {
      "question": "Wie werden die Zeitstempel im Tool berechnet?",
      "answer": "Das Tool verwendet ein lineares Zeitsystem: Ausgehend von der Startzeit (z. B. 1,0s) erhält jeder Untertitel die gewählte Dauer (z. B. 3,0s), gefolgt von einer Pause (z. B. 0,5s), bevor der nächste Untertitel einsetzt."
    },
    {
      "question": "Kann ich ein komplettes Videoskript oder ein Transkript umwandeln?",
      "answer": "Ja. Kopieren Sie den gesamten Text einfach in das Tool. Wenn Sie die Aufteilung nach Zeilen oder Sätzen wählen, wird jede Sinneinheit zu einem eigenständigen Untertitel."
    },
    {
      "question": "Funktioniert die erstellte SRT-Datei direkt bei YouTube?",
      "answer": "Ja. Die Datei entspricht exakt dem offiziellen SubRip-Standard und kann in YouTube Studio unter 'Untertitel' direkt für Ihr Video hochgeladen werden."
    },
    {
      "question": "Warum reicht es nicht, die Datei von .txt in .srt umzubenennen?",
      "answer": "Das Umbenennen ändert nur die Dateiendung, nicht den Dateiinhalt. Videoplayer benötigen spezielle Zählernummern und Zeitcode-Pfeile (00:00:01,000 --> 00:00:04,000), um Untertitel anzeigen zu können."
    },
    {
      "question": "Kann ich die Zeitstempel nach dem Herunterladen bearbeiten?",
      "answer": "Ja. Die .srt-Datei ist eine lesbare Textdatei, die in jedem Texteditor (Notepad, TextEdit) oder in Schnittprogrammen (Premiere Pro, DaVinci Resolve, Subtitle Edit) beliebig angepasst werden kann."
    },
    {
      "question": "Werden Sonderzeichen und internationale Sprachen unterstützt?",
      "answer": "Ja. Das Tool unterstützt UTF-8 vollständig und verarbeitet deutsche Umlaute ebenso wie arabische Schrift (RTL), asiatische Schriftzeichen und europäische Sonderzeichen."
    },
    {
      "question": "Wird meine Datei auf einen Server hochgeladen?",
      "answer": "Nein. Die Verarbeitung erfolgt vollständig lokal auf Ihrem Rechner per JavaScript. Es werden keinerlei Texte oder Dateien über das Netzwerk gesendet."
    },
    {
      "question": "Was kann ich tun, wenn die Untertitel nicht exakt synchron zum Ton sind?",
      "answer": "Da die automatische Zeitberechnung mit Durchschnittswerten arbeitet, können Sie Startzeit und Dauer im Tool anpassen oder die Untertitelspur im Schnittprogramm minimal verschieben."
    },
    {
      "question": "Welche Untertiteldauer ist ideal?",
      "answer": "In der professionellen Untertitelung gilt eine Lesegeschwindigkeit von 21 bis 24 Zeichen pro Sekunde als Richtwert. Für eine Zeile mit 30 bis 40 Zeichen entspricht dies etwa 2,5 bis 4 Sekunden."
    }
  ]
};
