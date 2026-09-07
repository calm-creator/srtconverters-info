import type { SrtToVttDetailContent } from './types';

export const deContent: SrtToVttDetailContent = {
  "metaTitle": "Kostenloser SRT in VTT Umwandler Online – Schnell & 100% im Browser",
  "metaDescription": "Konvertieren Sie SRT-Untertiteldateien kostenlos online in das WebVTT-Format (.vtt). Automatischer WEBVTT-Header und Punkt-Zeitstempel bei 100% Privatsphäre.",
  "h1": "SRT in VTT Umwandler",
  "heroDescription": "Wandeln Sie SubRip-Untertitel (.srt) mühelos in das W3C-konforme WebVTT-Format (.vtt) für HTML5-Videoplayer, Streaming-Dienste und moderne Webanwendungen um. 100% kostenlos, blitzschnell und absolut privat in Ihrem Browser.",
  "toolName": "SRT in VTT Umwandler",
  "ui": {
    "pasteTitle": "SRT-Untertitel Eingabe (.srt)",
    "pastePlaceholder": "Fügen Sie Ihren SRT-Inhalt hier ein (z. B.:\n1\n00:00:01,000 --> 00:00:04,000\nWillkommen zu unserem Video-Tutorial!)...",
    "orDivider": "ODER",
    "uploadTitle": "Option 2 — SRT-Datei Hochladen",
    "convertButton": "In VTT umwandeln",
    "clearButton": "Löschen",
    "trySampleButton": "Beispiel laden",
    "livePreviewTitle": "Konvertierte WebVTT-Ausgabe (.vtt)",
    "errorNoInput": "Bitte fügen Sie SRT-Untertiteltext ein oder laden Sie eine .srt-Datei hoch.",
    "pastedContentSource": "Eingefügter SRT-Inhalt",
    "dropzoneTitle": "Ziehen Sie Ihre .srt-Datei hierher",
    "dropzoneSubtitle": "oder klicken Sie zum Auswählen von Ihrem Gerät",
    "browseButton": "SRT-Datei auswählen",
    "dropActiveText": "Datei hier ablegen...",
    "fileSelected": "Datei ausgewählt",
    "fileNameLabel": "Dateiname",
    "fileSizeLabel": "Dateigröße",
    "cueCountLabel": "Untertitel konvertiert",
    "characterCountLabel": "Zeichen",
    "downloadAction": ".vtt herunterladen",
    "copyAction": "In Zwischenablage kopieren",
    "copiedSuccess": "Erfolgreich kopiert!",
    "resetAction": "Weitere Datei konvertieren",
    "previewTitle": "Konvertierte WebVTT-Vorschau",
    "previewEmpty": "Ihre konvertierten WebVTT-Untertitel (.vtt) erscheinen hier sofort nach der Eingabe oder dem Hochladen einer SRT-Datei.",
    "optionsTitle": "Konvertierungsoptionen",
    "optIncludeCueNumbers": "Untertitel-Nummerierung beibehalten",
    "optCleanTags": "Veraltete, nicht unterstützte Tags entfernen (z. B. <font>)",
    "errorInvalidFile": "Bitte laden Sie eine gültige .srt-Untertiteldatei hoch.",
    "errorEmptyFile": "Die angegebene Datei oder Texteingabe ist vollkommen leer.",
    "errorParseFailed": "Es konnten keine gültigen SRT-Untertitelblöcke erkannt werden. Stellen Sie sicher, dass die Zeitstempel dem Format 00:00:00,000 --> 00:00:00,000 entsprechen."
  },
  "sections": {
    "whatIsSrt": {
      "title": "Was ist eine SRT-Datei?",
      "content": [
        "Eine SRT-Datei (SubRip Subtitle) ist das am weitesten verbreitete und historisch bedeutsamste Nur-Text-Untertitelformat im Bereich digitaler Videos. Ursprünglich aus der Windows-Software SubRip hervorgegangen — mit der Untertitel und Timings von physischen DVDs extrahiert wurden —, hat sich das .srt-Format als weltweiter De-facto-Standard für Desktop-Mediaplayer, Fernsehgeräte, File-Sharing und professionelle Schnittprogramme etabliert.",
        "Strukturell setzt sich eine SRT-Datei aus fortlaufend nummerierten Untertitelblöcken zusammen, die durch Leerzeilen getrennt sind. Jeder Block besteht aus vier festen Elementen: einer sequentiellen Indexnummer (1, 2, 3...), einer exakten Zeitleistenangabe für Start- und Endzeitpunkt (strikt formatiert als Stunden:Minuten:Sekunden,Millisekunden: 00:00:01,250 --> 00:00:04,500), einer oder mehreren Textzeilen mit Dialog sowie einer abschließenden Leerzeile.",
        "Obwohl SRT-Dateien unkompliziert aufgebaut sind und von Programmen wie dem VLC Media Player, MPV, HandBrake oder Premiere Pro problemlos wiedergegeben werden, stammen sie aus einer Ära vor dem modernen Web. Folglich besitzt SRT keine native Unterstützung in HTML5-Webbrowsern und bietet keinerlei standardisierte Mechanismen für responsive Typografie, Bildschirmpositionierung oder visuelle CSS-Stile."
      ]
    },
    "whatIsVtt": {
      "title": "Was ist eine WebVTT-Datei (.vtt)?",
      "content": [
        "WebVTT (Web Video Text Tracks) ist der offizielle offene Standard für Untertitel, Transkripte und Kapitelmarken im Web, geschaffen vom World Wide Web Consortium (W3C) und der WHATWG. Eingeführt mit der HTML5-Spezifikation, wird WebVTT von allen modernen Webbrowsern — einschließlich Google Chrome, Mozilla Firefox, Apple Safari und Microsoft Edge — direkt und nativ unterstützt, ohne dass zusätzliche JavaScript-Bibliotheken, Flash-Player oder serverseitige Konvertierungen nötig wären.",
        "Eine WebVTT-Datei zeichnet sich durch ihren zwingend vorgeschriebenen Header aus: Die allererste Zeile des Dokuments muss zwingend mit dem exakten Schriftzug \"WEBVTT\" beginnen. Direkt nach dieser Signatur können Metadatenblöcke (wie Sprache, Titel oder Autor) und eingebettete Stylesheets definiert werden, bevor die eigentlichen Untertitel-Cues beginnen.",
        "Neben gewöhnlichen Dialogtexten ist WebVTT speziell für moderne responsive Weboberflächen konzipiert. Es bietet integrierte Attribute für vertikale Textausrichtung, horizontale Positionierung, Zeilenabstand und Blockgröße. Darüber hinaus lässt sich WebVTT nahtlos mit CSS über das Pseudoelement ::cue anpassen, sodass Entwickler Schriftarten, Textschatten, Hintergrundtransparenzen und Farbwelten direkt über das Stylesheet ihrer Website steuern können."
      ]
    },
    "whatIsConverter": {
      "title": "Was macht ein SRT in VTT Umwandler?",
      "content": [
        "Ein SRT in VTT Umwandler ist ein spezialisiertes Werkzeug, das die Brücke zwischen herkömmlichen Videoschnittformaten und der modernen Webvideowiedergabe schlägt. Er analysiert die Struktur von SubRip-Dateien (.srt), nimmt die notwendigen mathematischen und syntaktischen Formatierungsanpassungen vor und erzeugt valide, W3C-konforme WebVTT-Dateien (.vtt), die sich direkt in HTML5-<video>-Tags einbinden lassen.",
        "Die zentrale technische Transformation betrifft das Millisekunden-Trennzeichen in den Zeitstempeln. Im SRT-Standard werden Millisekunden traditionell durch ein Komma abgetrennt (z. B. 00:01:23,450). Die WebVTT-Spezifikation verlangt jedoch zwingend einen Dezimalpunkt (00:01:23.450). Bereits ein einzelnes Komma führt dazu, dass die Video-Engine moderner Browser die gesamte Untertitelspur ablehnt oder nicht anzeigt.",
        "Unser Umwandler führt sämtliche Parser-, Konvertierungs- und Bereinigungsschritte zu 100% lokal in Ihrem Webbrowser aus. Es werden zu keinem Zeitpunkt Untertiteldateien oder Textzeilen an externe Server übertragen, was absolute Geschwindigkeit, maximale Datensicherheit und unbegrenzte Dateigrößen garantiert."
      ]
    },
    "srtVsVtt": {
      "title": "SRT vs. VTT: Die wichtigsten technischen Unterschiede",
      "content": [
        "Obwohl SRT und WebVTT auf den ersten Blick eine ähnliche Textstruktur aufweisen, unterscheiden sie sich in zentralen architektonischen Aspekten:",
        "1. Pflicht-Header: Eine SRT-Datei beginnt unmittelbar mit der Cue-Nummer \"1\" in Zeile 1. Eine WebVTT-Datei MUSS dagegen zwingend mit \"WEBVTT\" in der ersten Zeile beginnen, optional gefolgt von Kommentaren. Fehlt dieser Header, verwerfen Browser die Datei als ungültig.",
        "2. Millisekunden-Syntax im Zeitstempel: SRT nutzt Kommas (00:00:05,200), während WebVTT Punkte nutzt (00:00:05.200). WebVTT erlaubt zudem verkürzte Zeitangaben ohne Stunden (z. B. 05.200 --> 08.400) für kurze Clips, wenngleich das vollständige HH:MM:SS.mmm-Format für maximale Stabilität empfohlen wird.",
        "3. Bildschirmpositionierung und Geometrie: SRT kennt keine standardisierte Positionskontrolle; Texte werden stets unten zentriert eingeblendet. WebVTT unterstützt direkte Ausrichtungsparameter in der Zeitzeile (z. B. \"line:10%\", \"position:80%\", \"align:left\", \"size:50%\"), wodurch vermieden wird, dass Untertitel Namensschilder oder Grafiken im unteren Bilddrittel verdecken.",
        "4. Formatierung und Styling: SRT stützt sich auf veraltete Pseudo-HTML-Tags (<i>, <b>, <font color=\"...\">), die von Web-Engines aus Sicherheitsgründen oft gefiltert werden. WebVTT bietet moderne Sprechermarker (<v Sprecher>), CSS-Klassen (<c.hervorgehoben>) und vollen Gestaltungsspielraum über CSS mit ::cue.",
        "5. Kompatibilität mit HLS- und DASH-Streaming: Moderne adaptive Streaming-Protokolle wie Apple HLS und MPEG-DASH liefern Untertitel ausschließlich in segmentierten WebVTT-Paketen aus. Unkonvertierte SRT-Dateien in HLS-Manifesten führen zu sofortigen Wiedergabefehlern auf Apple-Geräten und mobilen Browsern."
      ]
    },
    "whyConvert": {
      "title": "Warum SRT in VTT umwandeln?",
      "benefits": [
        {
          "title": "Native HTML5-Videounterstützung",
          "description": "Funktioniert direkt über das <track>-Element in allen modernen Browsern ohne zusätzliche Plugins, Player-Frameworks oder Polyfills."
        },
        {
          "title": "Vollständiges CSS-Styling mit ::cue",
          "description": "Passen Sie Schriftart, Hintergrundtransparenz, Textfarben, Textschatten und Ränder exakt an das Corporate Design Ihrer Website an."
        },
        {
          "title": "Exakte Positionierung auf dem Bildschirm",
          "description": "Platzieren Sie Untertitel oben, unten oder seitlich, damit wichtige Bildinhalte, Einblendungen oder Präsentatoren nicht verdeckt werden."
        },
        {
          "title": "Konform mit HLS- & DASH-Streaming",
          "description": "Entspricht den technischen Vorgaben moderner Streaming-Architekturen (Apple HLS, AWS Elemental, Cloudflare Stream) für mehrsprachige Untertitel."
        },
        {
          "title": "Bessere Barrierefreiheit & Video-SEO",
          "description": "Macht Videos für hörgeschädigte Menschen zugänglich und ermöglicht es Suchmaschinen-Crawlern, gesprochene Dialoge vollständig zu indexieren."
        },
        {
          "title": "Extrem leichtgewichtig & schnell",
          "description": "Reine UTF-8-Textdateien wiegen nur wenige Kilobyte, laden verzögerungsfrei und beeinträchtigen Ihre Core Web Vitals in keiner Weise."
        }
      ]
    },
    "howToConvert": {
      "title": "SRT in VTT umwandeln in 3 einfachen Schritten",
      "steps": [
        {
          "title": "1. Text einfügen oder .srt-Datei hochladen",
          "description": "Fügen Sie Ihren SRT-Text in das linke Eingabefeld ein oder ziehen Sie Ihre .srt-Datei in das Upload-Feld. Alternativ klicken Sie auf \"SRT-Datei auswählen\"."
        },
        {
          "title": "2. Automatische Konvertierung im Browser",
          "description": "Das Tool analysiert die Cues, ergänzt den WEBVTT-Header, wandelt alle Zeitstempel-Kommas in Punkte um und aktualisiert die Live-Vorschau in Echtzeit."
        },
        {
          "title": "3. WebVTT herunterladen oder kopieren",
          "description": "Klicken Sie auf \".vtt herunterladen\", um die fertige Datei zu speichern, oder nutzen Sie \"In Zwischenablage kopieren\", um den Text direkt einzufügen."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Häufige Fehler bei SRT- und VTT-Untertiteln & Lösungen",
      "items": [
        {
          "title": "Fehler: Untertitel werden im Browser nicht angezeigt (Komma-Trennzeichen)",
          "description": "Ursache: Die Datei verwendet noch SRT-Zeitstempel mit Kommas (z. B. 00:00:02,500). Browser-Parser brechen hier sofort ab. Lösung: Wandeln Sie alle Kommas mit unserem Tool in Punkte um (00:00:02.500)."
        },
        {
          "title": "Fehler: Browser meldet Syntaxfehler (Fehlender WEBVTT-Header)",
          "description": "Ursache: Eine SRT-Datei wurde lediglich in .vtt umbenannt, ohne den Header einzufügen. Lösung: Die allererste Zeile der Datei muss zwingend das Wort \"WEBVTT\" enthalten."
        },
        {
          "title": "Fehler: Unleserliche Sonderzeichen & Umlaute (BOM & Encoding)",
          "description": "Ursache: Untertitel wurden in ANSI, UTF-16 oder UTF-8 mit Byte Order Mark (BOM) gespeichert. Lösung: Unser Tool filtert unsichtbare BOM-Artefakte heraus und formatiert in sauberes UTF-8."
        },
        {
          "title": "Fehler: Überlappende Zeitstempel & flackernder Text",
          "description": "Ursache: Cue 1 endet bei 00:00:05.000, während Cue 2 bereits bei 00:00:04.500 beginnt. Lösung: Stellen Sie sicher, dass die Endzeit eines Cues vor oder auf der Startzeit des nächsten Cues liegt."
        },
        {
          "title": "Fehler: CORS-Blockade beim Laden externer Untertitel",
          "description": "Ursache: Liegt die .vtt-Datei auf einem CDN oder einer anderen Domain, blockiert der Browser den Abruf. Lösung: Setzen Sie serverseitig den Header \"Access-Control-Allow-Origin: *\" und den MIME-Typ \"text/vtt\"."
        }
      ]
    },
    "html5VideoGuide": {
      "title": "So binden Sie WebVTT-Untertitel in HTML5-Videos ein",
      "description": "Die Einbindung von WebVTT-Untertiteln in einen Web-Player ist unkompliziert: Es genügt das native <track>-Element innerhalb des <video>-Tags. Nachfolgend sehen Sie das empfohlene Standardmuster:",
      "codeSnippet": "<video controls width=\"800\" poster=\"/bilder/poster.jpg\">\n  <!-- Hauptvideodateien -->\n  <source src=\"/videos/tutorial.mp4\" type=\"video/mp4\">\n  <source src=\"/videos/tutorial.webm\" type=\"video/webm\">\n\n  <!-- WebVTT-Untertitelspuren -->\n  <track \n    kind=\"subtitles\" \n    src=\"/untertitel/tutorial-de.vtt\" \n    srclang=\"de\" \n    label=\"Deutsch\" \n    default>\n  \n  <track \n    kind=\"subtitles\" \n    src=\"/untertitel/tutorial-en.vtt\" \n    srclang=\"en\" \n    label=\"English\">\n\n  <p>Ihr Browser unterstützt kein HTML5-Video. <a href=\"/videos/tutorial.mp4\">Video herunterladen</a>.</p>\n</video>",
      "explanation": [
        {
          "term": "kind=\"subtitles\"",
          "description": "Gibt die Art der Textspur an. Verwenden Sie \"subtitles\" für Sprachübersetzungen oder \"captions\" für Untertitel für Hörgeschädigte inklusive Geräuschbeschreibungen."
        },
        {
          "term": "src=\"pfad/zur/datei.vtt\"",
          "description": "Die relative oder absolute Web-Adresse Ihrer WebVTT-Datei. Der Server muss die Datei mit dem Header \"text/vtt; charset=utf-8\" ausliefern."
        },
        {
          "term": "srclang=\"de\"",
          "description": "Der BCP 47-Sprachcode (z. B. \"de\" für Deutsch, \"en\" für Englisch). Wichtig für Bildschirmlesegeräte und automatisierte Übersetzer."
        },
        {
          "term": "label=\"Deutsch\"",
          "description": "Der lesbare Name, der im Untertitel-Menü (CC) des Videoplayers zur Auswahl für den Zuschauer angezeigt wird."
        },
        {
          "term": "default",
          "description": "Ein boolesches Attribut, das festlegt, dass diese Untertitelspur beim Starten des Videos automatisch aktiviert wird."
        }
      ]
    },
    "comparison": {
      "title": "Technischer Vergleich: SRT vs. WebVTT",
      "description": "Vergleichen Sie die technischen Spezifikationen, Kompatibilitätswerte und Features beider Formate im Detail:",
      "headers": [
        "Technischer Aspekt",
        "SubRip (.srt)",
        "WebVTT (.vtt)"
      ],
      "rows": [
        [
          "Primäre Einsatzumgebung",
          "Desktop-Player (VLC) und Schnittsoftware",
          "HTML5-Webbrowser, mobile Apps und Web-Streaming"
        ],
        [
          "Erforderlicher Start-Header",
          "Keiner (startet direkt mit Index 1)",
          "Zwingend \"WEBVTT\" in der ersten Zeile"
        ],
        [
          "Millisekunden-Trennzeichen",
          "Komma (z. B. 00:01:23,450)",
          "Punkt (z. B. 00:01:23.450)"
        ],
        [
          "Native Webbrowser-Wiedergabe",
          "Nein (benötigt externe JS-Bibliotheken)",
          "Ja (nativ über <track> in allen Browsern)"
        ],
        [
          "Styling-Möglichkeiten",
          "Sehr eingeschränkt (<i>, <b>, <font>)",
          "Vollwertiges CSS-Styling über ::cue-Pseudoelement"
        ],
        [
          "Positionierung & Geometrie",
          "Nicht standardisiert (stets unten zentriert)",
          "Native Ausrichtungsattribute: line, position, size, align"
        ],
        [
          "HLS- / MPEG-DASH-Streaming",
          "Nicht unterstützt (muss transkodiert werden)",
          "Offizieller Standard für Streaming-Manifeste"
        ],
        [
          "Kommentare & Metadaten",
          "Keine standardisierte Syntax",
          "Unterstützt NOTE-Blöcke und STYLE-Header"
        ],
        [
          "Typische Dateiendung",
          ".srt",
          ".vtt"
        ],
        [
          "Offizieller MIME-Typ",
          "application/x-subrip",
          "text/vtt; charset=utf-8"
        ]
      ]
    },
    "privacy": {
      "title": "100% Datenschutz & Sicherheit direkt im Browser",
      "content": [
        "Bei SRTConverters.info genießt der Schutz Ihrer Daten höchste Priorität. Sämtliche Konvertierungsvorgänge zwischen SRT und WebVTT laufen vollkommen autark in Ihrem lokalen Webbrowser über clientseitiges JavaScript ab.",
        "Ihre Untertiteldateien, Videotranskripte, vertraulichen Drehbücher oder privaten Aufnahmen werden zu keinem Zeitpunkt auf fremde Server oder Cloud-Dienste hochgeladen. Sie können sogar nach dem Laden der Website Ihre Internetverbindung trennen – das Tool funktioniert weiterhin ohne Einschränkungen.",
        "Diese clientseitige Architektur schließt Datenlecks verlässlich aus, wodurch sich unser Tool auch optimal für Firmenpräsentationen, juristische Gutachten, vertrauliche Interviews und medizinische Inhalte eignet."
      ]
    }
  },
  "faqs": [
    {
      "question": "Kann ich die Dateiendung einfach von .srt in .vtt umbenennen?",
      "answer": "Nein. Das bloße Umbenennen erzeugt keine valide WebVTT-Datei. WebVTT verlangt zwingend den \"WEBVTT\"-Header in Zeile 1 und schreibt Dezimalpunkte statt Kommas in den Zeitstempeln vor (00:00:01.000 statt 00:00:01,000). Webbrowser verweigern die Anzeige einer nur umbenannten SRT-Datei."
    },
    {
      "question": "Warum werden meine WebVTT-Untertitel im HTML5-Player nicht angezeigt?",
      "answer": "Dafür gibt es meist drei typische Ursachen: 1) In der ersten Zeile fehlt der \"WEBVTT\"-Header; 2) Die Zeitstempel enthalten noch Kommas anstelle von Punkten; oder 3) Der Server liefert die Datei nicht mit dem MIME-Typ text/vtt aus oder blockiert sie über CORS. Unser Tool stellt sicher, dass Syntax und Zeitstempel zu 100% stimmen."
    },
    {
      "question": "Was ist der Unterschied zwischen Subtitles und Captions bei WebVTT?",
      "answer": "Untertitel (kind=\"subtitles\") richten sich an Zuschauer, die den Ton hören können, aber die Sprache übersetzt benötigen; sie enthalten nur Dialoge. Closed Captions (kind=\"captions\") sind für Gehörlose gedacht; sie transkribieren zusätzlich Geräusche, Musikbeschreibungen und Sprechernamen (z. B. [Applaus], [Ruhige Klaviermusik]). WebVTT unterstützt beides."
    },
    {
      "question": "Wie kann ich WebVTT-Untertitel mit CSS optisch anpassen?",
      "answer": "Sie können WebVTT-Untertitel im Stylesheet Ihrer Website über das CSS-Pseudoelement ::cue gestalten. Zum Beispiel: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }"
    },
    {
      "question": "Funktioniert WebVTT auf mobilen Endgeräten wie iPhone (Safari) und Android (Chrome)?",
      "answer": "Ja! WebVTT wird auf allen modernen mobilen Browsern vollständig unterstützt, einschließlich Safari auf iOS/iPadOS und Chrome auf Android. Im nativen Vollbildmodus nutzen die mobilen Betriebssysteme die WebVTT-Spur zur sauberen Anzeige gemäß den Barrierefreiheits-Einstellungen des Nutzers."
    },
    {
      "question": "Kann ich WebVTT-Dateien (.vtt) auf YouTube und Vimeo hochladen?",
      "answer": "Ja, sowohl YouTube als auch Vimeo unterstützen WebVTT nativ neben SRT. WebVTT bietet dabei den Vorteil, dass individuelle Positionierungseinstellungen erhalten bleiben, damit Untertitel keine Einblendungen im Video überdecken."
    },
    {
      "question": "Gibt es auf dieser Website ein Limit für die Dateigröße?",
      "answer": "Nein. Da die gesamte Konvertierung direkt in Ihrem Browser erfolgt, ohne Daten über das Netz zu übertragen, existieren keine künstlichen Dateigrößen-Limits oder Bezahlschranken. Sie können komplette Spielfilme oder stundenlange Vorlesungsreihen ohne Einschränkungen umwandeln."
    },
    {
      "question": "Bleiben deutsche Umlaute, Akzente und Emojis bei der Konvertierung erhalten?",
      "answer": "Ja. Unser Umwandler arbeitet durchgängig mit nativer UTF-8-Verarbeitung, wodurch deutsche Umlaute (ä, ö, ü, ß), Akzente, nicht-lateinische Alphabete (Arabisch, Japanisch, Koreanisch) sowie Unicode-Emojis vollkommen unversehrt erhalten bleiben."
    }
  ]
};
