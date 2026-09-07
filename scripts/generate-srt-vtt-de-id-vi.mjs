import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.resolve(__dirname, '../src/data/tools/srt-to-vtt');

const deContent = {
  metaTitle: 'Kostenloser SRT in VTT Umwandler Online – Schnell & 100% im Browser',
  metaDescription: 'Konvertieren Sie SRT-Untertiteldateien kostenlos online in das WebVTT-Format (.vtt). Automatischer WEBVTT-Header und Punkt-Zeitstempel bei 100% Privatsphäre.',
  h1: 'SRT in VTT Umwandler',
  heroDescription: 'Wandeln Sie SubRip-Untertitel (.srt) mühelos in das W3C-konforme WebVTT-Format (.vtt) für HTML5-Videoplayer, Streaming-Dienste und moderne Webanwendungen um. 100% kostenlos, blitzschnell und absolut privat in Ihrem Browser.',
  toolName: 'SRT in VTT Umwandler',
  ui: {
    pasteTitle: 'SRT-Untertitel Eingabe (.srt)',
    pastePlaceholder: 'Fügen Sie Ihren SRT-Inhalt hier ein (z. B.:\n1\n00:00:01,000 --> 00:00:04,000\nWillkommen zu unserem Video-Tutorial!)...',
    orDivider: 'ODER',
    uploadTitle: 'Option 2 — SRT-Datei Hochladen',
    convertButton: 'In VTT umwandeln',
    clearButton: 'Löschen',
    trySampleButton: 'Beispiel laden',
    livePreviewTitle: 'Konvertierte WebVTT-Ausgabe (.vtt)',
    errorNoInput: 'Bitte fügen Sie SRT-Untertiteltext ein oder laden Sie eine .srt-Datei hoch.',
    pastedContentSource: 'Eingefügter SRT-Inhalt',
    dropzoneTitle: 'Ziehen Sie Ihre .srt-Datei hierher',
    dropzoneSubtitle: 'oder klicken Sie zum Auswählen von Ihrem Gerät',
    browseButton: 'SRT-Datei auswählen',
    dropActiveText: 'Datei hier ablegen...',
    fileSelected: 'Datei ausgewählt',
    fileNameLabel: 'Dateiname',
    fileSizeLabel: 'Dateigröße',
    cueCountLabel: 'Untertitel konvertiert',
    characterCountLabel: 'Zeichen',
    downloadAction: '.vtt herunterladen',
    copyAction: 'In Zwischenablage kopieren',
    copiedSuccess: 'Erfolgreich kopiert!',
    resetAction: 'Weitere Datei konvertieren',
    previewTitle: 'Konvertierte WebVTT-Vorschau',
    previewEmpty: 'Ihre konvertierten WebVTT-Untertitel (.vtt) erscheinen hier sofort nach der Eingabe oder dem Hochladen einer SRT-Datei.',
    optionsTitle: 'Konvertierungsoptionen',
    optIncludeCueNumbers: 'Untertitel-Nummerierung beibehalten',
    optCleanTags: 'Veraltete, nicht unterstützte Tags entfernen (z. B. <font>)',
    errorInvalidFile: 'Bitte laden Sie eine gültige .srt-Untertiteldatei hoch.',
    errorEmptyFile: 'Die angegebene Datei oder Texteingabe ist vollkommen leer.',
    errorParseFailed: 'Es konnten keine gültigen SRT-Untertitelblöcke erkannt werden. Stellen Sie sicher, dass die Zeitstempel dem Format 00:00:00,000 --> 00:00:00,000 entsprechen.',
  },
  sections: {
    whatIsSrt: {
      title: 'Was ist eine SRT-Datei?',
      content: [
        'Eine SRT-Datei (SubRip Subtitle) ist das am weitesten verbreitete und historisch bedeutsamste Nur-Text-Untertitelformat im Bereich digitaler Videos. Ursprünglich aus der Windows-Software SubRip hervorgegangen — mit der Untertitel und Timings von physischen DVDs extrahiert wurden —, hat sich das .srt-Format als weltweiter De-facto-Standard für Desktop-Mediaplayer, Fernsehgeräte, File-Sharing und professionelle Schnittprogramme etabliert.',
        'Strukturell setzt sich eine SRT-Datei aus fortlaufend nummerierten Untertitelblöcken zusammen, die durch Leerzeilen getrennt sind. Jeder Block besteht aus vier festen Elementen: einer sequentiellen Indexnummer (1, 2, 3...), einer exakten Zeitleistenangabe für Start- und Endzeitpunkt (strikt formatiert als Stunden:Minuten:Sekunden,Millisekunden: 00:00:01,250 --> 00:00:04,500), einer oder mehreren Textzeilen mit Dialog sowie einer abschließenden Leerzeile.',
        'Obwohl SRT-Dateien unkompliziert aufgebaut sind und von Programmen wie dem VLC Media Player, MPV, HandBrake oder Premiere Pro problemlos wiedergegeben werden, stammen sie aus einer Ära vor dem modernen Web. Folglich besitzt SRT keine native Unterstützung in HTML5-Webbrowsern und bietet keinerlei standardisierte Mechanismen für responsive Typografie, Bildschirmpositionierung oder visuelle CSS-Stile.',
      ],
    },
    whatIsVtt: {
      title: 'Was ist eine WebVTT-Datei (.vtt)?',
      content: [
        'WebVTT (Web Video Text Tracks) ist der offizielle offene Standard für Untertitel, Transkripte und Kapitelmarken im Web, geschaffen vom World Wide Web Consortium (W3C) und der WHATWG. Eingeführt mit der HTML5-Spezifikation, wird WebVTT von allen modernen Webbrowsern — einschließlich Google Chrome, Mozilla Firefox, Apple Safari und Microsoft Edge — direkt und nativ unterstützt, ohne dass zusätzliche JavaScript-Bibliotheken, Flash-Player oder serverseitige Konvertierungen nötig wären.',
        'Eine WebVTT-Datei zeichnet sich durch ihren zwingend vorgeschriebenen Header aus: Die allererste Zeile des Dokuments muss zwingend mit dem exakten Schriftzug "WEBVTT" beginnen. Direkt nach dieser Signatur können Metadatenblöcke (wie Sprache, Titel oder Autor) und eingebettete Stylesheets definiert werden, bevor die eigentlichen Untertitel-Cues beginnen.',
        'Neben gewöhnlichen Dialogtexten ist WebVTT speziell für moderne responsive Weboberflächen konzipiert. Es bietet integrierte Attribute für vertikale Textausrichtung, horizontale Positionierung, Zeilenabstand und Blockgröße. Darüber hinaus lässt sich WebVTT nahtlos mit CSS über das Pseudoelement ::cue anpassen, sodass Entwickler Schriftarten, Textschatten, Hintergrundtransparenzen und Farbwelten direkt über das Stylesheet ihrer Website steuern können.',
      ],
    },
    whatIsConverter: {
      title: 'Was macht ein SRT in VTT Umwandler?',
      content: [
        'Ein SRT in VTT Umwandler ist ein spezialisiertes Werkzeug, das die Brücke zwischen herkömmlichen Videoschnittformaten und der modernen Webvideowiedergabe schlägt. Er analysiert die Struktur von SubRip-Dateien (.srt), nimmt die notwendigen mathematischen und syntaktischen Formatierungsanpassungen vor und erzeugt valide, W3C-konforme WebVTT-Dateien (.vtt), die sich direkt in HTML5-<video>-Tags einbinden lassen.',
        'Die zentrale technische Transformation betrifft das Millisekunden-Trennzeichen in den Zeitstempeln. Im SRT-Standard werden Millisekunden traditionell durch ein Komma abgetrennt (z. B. 00:01:23,450). Die WebVTT-Spezifikation verlangt jedoch zwingend einen Dezimalpunkt (00:01:23.450). Bereits ein einzelnes Komma führt dazu, dass die Video-Engine moderner Browser die gesamte Untertitelspur ablehnt oder nicht anzeigt.',
        'Unser Umwandler führt sämtliche Parser-, Konvertierungs- und Bereinigungsschritte zu 100% lokal in Ihrem Webbrowser aus. Es werden zu keinem Zeitpunkt Untertiteldateien oder Textzeilen an externe Server übertragen, was absolute Geschwindigkeit, maximale Datensicherheit und unbegrenzte Dateigrößen garantiert.',
      ],
    },
    srtVsVtt: {
      title: 'SRT vs. VTT: Die wichtigsten technischen Unterschiede',
      content: [
        'Obwohl SRT und WebVTT auf den ersten Blick eine ähnliche Textstruktur aufweisen, unterscheiden sie sich in zentralen architektonischen Aspekten:',
        '1. Pflicht-Header: Eine SRT-Datei beginnt unmittelbar mit der Cue-Nummer "1" in Zeile 1. Eine WebVTT-Datei MUSS dagegen zwingend mit "WEBVTT" in der ersten Zeile beginnen, optional gefolgt von Kommentaren. Fehlt dieser Header, verwerfen Browser die Datei als ungültig.',
        '2. Millisekunden-Syntax im Zeitstempel: SRT nutzt Kommas (00:00:05,200), während WebVTT Punkte nutzt (00:00:05.200). WebVTT erlaubt zudem verkürzte Zeitangaben ohne Stunden (z. B. 05.200 --> 08.400) für kurze Clips, wenngleich das vollständige HH:MM:SS.mmm-Format für maximale Stabilität empfohlen wird.',
        '3. Bildschirmpositionierung und Geometrie: SRT kennt keine standardisierte Positionskontrolle; Texte werden stets unten zentriert eingeblendet. WebVTT unterstützt direkte Ausrichtungsparameter in der Zeitzeile (z. B. "line:10%", "position:80%", "align:left", "size:50%"), wodurch vermieden wird, dass Untertitel Namensschilder oder Grafiken im unteren Bilddrittel verdecken.',
        '4. Formatierung und Styling: SRT stützt sich auf veraltete Pseudo-HTML-Tags (<i>, <b>, <font color="...">), die von Web-Engines aus Sicherheitsgründen oft gefiltert werden. WebVTT bietet moderne Sprechermarker (<v Sprecher>), CSS-Klassen (<c.hervorgehoben>) und vollen Gestaltungsspielraum über CSS mit ::cue.',
        '5. Kompatibilität mit HLS- und DASH-Streaming: Moderne adaptive Streaming-Protokolle wie Apple HLS und MPEG-DASH liefern Untertitel ausschließlich in segmentierten WebVTT-Paketen aus. Unkonvertierte SRT-Dateien in HLS-Manifesten führen zu sofortigen Wiedergabefehlern auf Apple-Geräten und mobilen Browsern.',
      ],
    },
    whyConvert: {
      title: 'Warum SRT in VTT umwandeln?',
      benefits: [
        {
          title: 'Native HTML5-Videounterstützung',
          description: 'Funktioniert direkt über das <track>-Element in allen modernen Browsern ohne zusätzliche Plugins, Player-Frameworks oder Polyfills.',
        },
        {
          title: 'Vollständiges CSS-Styling mit ::cue',
          description: 'Passen Sie Schriftart, Hintergrundtransparenz, Textfarben, Textschatten und Ränder exakt an das Corporate Design Ihrer Website an.',
        },
        {
          title: 'Exakte Positionierung auf dem Bildschirm',
          description: 'Platzieren Sie Untertitel oben, unten oder seitlich, damit wichtige Bildinhalte, Einblendungen oder Präsentatoren nicht verdeckt werden.',
        },
        {
          title: 'Konform mit HLS- & DASH-Streaming',
          description: 'Entspricht den technischen Vorgaben moderner Streaming-Architekturen (Apple HLS, AWS Elemental, Cloudflare Stream) für mehrsprachige Untertitel.',
        },
        {
          title: 'Bessere Barrierefreiheit & Video-SEO',
          description: 'Macht Videos für hörgeschädigte Menschen zugänglich und ermöglicht es Suchmaschinen-Crawlern, gesprochene Dialoge vollständig zu indexieren.',
        },
        {
          title: 'Extrem leichtgewichtig & schnell',
          description: 'Reine UTF-8-Textdateien wiegen nur wenige Kilobyte, laden verzögerungsfrei und beeinträchtigen Ihre Core Web Vitals in keiner Weise.',
        },
      ],
    },
    howToConvert: {
      title: 'SRT in VTT umwandeln in 3 einfachen Schritten',
      steps: [
        {
          title: '1. Text einfügen oder .srt-Datei hochladen',
          description: 'Fügen Sie Ihren SRT-Text in das linke Eingabefeld ein oder ziehen Sie Ihre .srt-Datei in das Upload-Feld. Alternativ klicken Sie auf "SRT-Datei auswählen".',
        },
        {
          title: '2. Automatische Konvertierung im Browser',
          description: 'Das Tool analysiert die Cues, ergänzt den WEBVTT-Header, wandelt alle Zeitstempel-Kommas in Punkte um und aktualisiert die Live-Vorschau in Echtzeit.',
        },
        {
          title: '3. WebVTT herunterladen oder kopieren',
          description: 'Klicken Sie auf ".vtt herunterladen", um die fertige Datei zu speichern, oder nutzen Sie "In Zwischenablage kopieren", um den Text direkt einzufügen.',
        },
      ],
    },
    commonErrorsAndFixes: {
      title: 'Häufige Fehler bei SRT- und VTT-Untertiteln & Lösungen',
      items: [
        {
          title: 'Fehler: Untertitel werden im Browser nicht angezeigt (Komma-Trennzeichen)',
          description: 'Ursache: Die Datei verwendet noch SRT-Zeitstempel mit Kommas (z. B. 00:00:02,500). Browser-Parser brechen hier sofort ab. Lösung: Wandeln Sie alle Kommas mit unserem Tool in Punkte um (00:00:02.500).',
        },
        {
          title: 'Fehler: Browser meldet Syntaxfehler (Fehlender WEBVTT-Header)',
          description: 'Ursache: Eine SRT-Datei wurde lediglich in .vtt umbenannt, ohne den Header einzufügen. Lösung: Die allererste Zeile der Datei muss zwingend das Wort "WEBVTT" enthalten.',
        },
        {
          title: 'Fehler: Unleserliche Sonderzeichen & Umlaute (BOM & Encoding)',
          description: 'Ursache: Untertitel wurden in ANSI, UTF-16 oder UTF-8 mit Byte Order Mark (BOM) gespeichert. Lösung: Unser Tool filtert unsichtbare BOM-Artefakte heraus und formatiert in sauberes UTF-8.',
        },
        {
          title: 'Fehler: Überlappende Zeitstempel & flackernder Text',
          description: 'Ursache: Cue 1 endet bei 00:00:05.000, während Cue 2 bereits bei 00:00:04.500 beginnt. Lösung: Stellen Sie sicher, dass die Endzeit eines Cues vor oder auf der Startzeit des nächsten Cues liegt.',
        },
        {
          title: 'Fehler: CORS-Blockade beim Laden externer Untertitel',
          description: 'Ursache: Liegt die .vtt-Datei auf einem CDN oder einer anderen Domain, blockiert der Browser den Abruf. Lösung: Setzen Sie serverseitig den Header "Access-Control-Allow-Origin: *" und den MIME-Typ "text/vtt".',
        },
      ],
    },
    html5VideoGuide: {
      title: 'So binden Sie WebVTT-Untertitel in HTML5-Videos ein',
      description: 'Die Einbindung von WebVTT-Untertiteln in einen Web-Player ist unkompliziert: Es genügt das native <track>-Element innerhalb des <video>-Tags. Nachfolgend sehen Sie das empfohlene Standardmuster:',
      codeSnippet: `<video controls width="800" poster="/bilder/poster.jpg">
  <!-- Hauptvideodateien -->
  <source src="/videos/tutorial.mp4" type="video/mp4">
  <source src="/videos/tutorial.webm" type="video/webm">

  <!-- WebVTT-Untertitelspuren -->
  <track 
    kind="subtitles" 
    src="/untertitel/tutorial-de.vtt" 
    srclang="de" 
    label="Deutsch" 
    default>
  
  <track 
    kind="subtitles" 
    src="/untertitel/tutorial-en.vtt" 
    srclang="en" 
    label="English">

  <p>Ihr Browser unterstützt kein HTML5-Video. <a href="/videos/tutorial.mp4">Video herunterladen</a>.</p>
</video>`,
      explanation: [
        {
          term: 'kind="subtitles"',
          description: 'Gibt die Art der Textspur an. Verwenden Sie "subtitles" für Sprachübersetzungen oder "captions" für Untertitel für Hörgeschädigte inklusive Geräuschbeschreibungen.',
        },
        {
          term: 'src="pfad/zur/datei.vtt"',
          description: 'Die relative oder absolute Web-Adresse Ihrer WebVTT-Datei. Der Server muss die Datei mit dem Header "text/vtt; charset=utf-8" ausliefern.',
        },
        {
          term: 'srclang="de"',
          description: 'Der BCP 47-Sprachcode (z. B. "de" für Deutsch, "en" für Englisch). Wichtig für Bildschirmlesegeräte und automatisierte Übersetzer.',
        },
        {
          term: 'label="Deutsch"',
          description: 'Der lesbare Name, der im Untertitel-Menü (CC) des Videoplayers zur Auswahl für den Zuschauer angezeigt wird.',
        },
        {
          term: 'default',
          description: 'Ein boolesches Attribut, das festlegt, dass diese Untertitelspur beim Starten des Videos automatisch aktiviert wird.',
        },
      ],
    },
    comparison: {
      title: 'Technischer Vergleich: SRT vs. WebVTT',
      description: 'Vergleichen Sie die technischen Spezifikationen, Kompatibilitätswerte und Features beider Formate im Detail:',
      headers: ['Technischer Aspekt', 'SubRip (.srt)', 'WebVTT (.vtt)'],
      rows: [
        ['Primäre Einsatzumgebung', 'Desktop-Player (VLC) und Schnittsoftware', 'HTML5-Webbrowser, mobile Apps und Web-Streaming'],
        ['Erforderlicher Start-Header', 'Keiner (startet direkt mit Index 1)', 'Zwingend "WEBVTT" in der ersten Zeile'],
        ['Millisekunden-Trennzeichen', 'Komma (z. B. 00:01:23,450)', 'Punkt (z. B. 00:01:23.450)'],
        ['Native Webbrowser-Wiedergabe', 'Nein (benötigt externe JS-Bibliotheken)', 'Ja (nativ über <track> in allen Browsern)'],
        ['Styling-Möglichkeiten', 'Sehr eingeschränkt (<i>, <b>, <font>)', 'Vollwertiges CSS-Styling über ::cue-Pseudoelement'],
        ['Positionierung & Geometrie', 'Nicht standardisiert (stets unten zentriert)', 'Native Ausrichtungsattribute: line, position, size, align'],
        ['HLS- / MPEG-DASH-Streaming', 'Nicht unterstützt (muss transkodiert werden)', 'Offizieller Standard für Streaming-Manifeste'],
        ['Kommentare & Metadaten', 'Keine standardisierte Syntax', 'Unterstützt NOTE-Blöcke und STYLE-Header'],
        ['Typische Dateiendung', '.srt', '.vtt'],
        ['Offizieller MIME-Typ', 'application/x-subrip', 'text/vtt; charset=utf-8'],
      ],
    },
    privacy: {
      title: '100% Datenschutz & Sicherheit direkt im Browser',
      content: [
        'Bei SRTConverters.info genießt der Schutz Ihrer Daten höchste Priorität. Sämtliche Konvertierungsvorgänge zwischen SRT und WebVTT laufen vollkommen autark in Ihrem lokalen Webbrowser über clientseitiges JavaScript ab.',
        'Ihre Untertiteldateien, Videotranskripte, vertraulichen Drehbücher oder privaten Aufnahmen werden zu keinem Zeitpunkt auf fremde Server oder Cloud-Dienste hochgeladen. Sie können sogar nach dem Laden der Website Ihre Internetverbindung trennen – das Tool funktioniert weiterhin ohne Einschränkungen.',
        'Diese clientseitige Architektur schließt Datenlecks verlässlich aus, wodurch sich unser Tool auch optimal für Firmenpräsentationen, juristische Gutachten, vertrauliche Interviews und medizinische Inhalte eignet.',
      ],
    },
  },
  faqs: [
    {
      question: 'Kann ich die Dateiendung einfach von .srt in .vtt umbenennen?',
      answer: 'Nein. Das bloße Umbenennen erzeugt keine valide WebVTT-Datei. WebVTT verlangt zwingend den "WEBVTT"-Header in Zeile 1 und schreibt Dezimalpunkte statt Kommas in den Zeitstempeln vor (00:00:01.000 statt 00:00:01,000). Webbrowser verweigern die Anzeige einer nur umbenannten SRT-Datei.',
    },
    {
      question: 'Warum werden meine WebVTT-Untertitel im HTML5-Player nicht angezeigt?',
      answer: 'Dafür gibt es meist drei typische Ursachen: 1) In der ersten Zeile fehlt der "WEBVTT"-Header; 2) Die Zeitstempel enthalten noch Kommas anstelle von Punkten; oder 3) Der Server liefert die Datei nicht mit dem MIME-Typ text/vtt aus oder blockiert sie über CORS. Unser Tool stellt sicher, dass Syntax und Zeitstempel zu 100% stimmen.',
    },
    {
      question: 'Was ist der Unterschied zwischen Subtitles und Captions bei WebVTT?',
      answer: 'Untertitel (kind="subtitles") richten sich an Zuschauer, die den Ton hören können, aber die Sprache übersetzt benötigen; sie enthalten nur Dialoge. Closed Captions (kind="captions") sind für Gehörlose gedacht; sie transkribieren zusätzlich Geräusche, Musikbeschreibungen und Sprechernamen (z. B. [Applaus], [Ruhige Klaviermusik]). WebVTT unterstützt beides.',
    },
    {
      question: 'Wie kann ich WebVTT-Untertitel mit CSS optisch anpassen?',
      answer: 'Sie können WebVTT-Untertitel im Stylesheet Ihrer Website über das CSS-Pseudoelement ::cue gestalten. Zum Beispiel: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }',
    },
    {
      question: 'Funktioniert WebVTT auf mobilen Endgeräten wie iPhone (Safari) und Android (Chrome)?',
      answer: 'Ja! WebVTT wird auf allen modernen mobilen Browsern vollständig unterstützt, einschließlich Safari auf iOS/iPadOS und Chrome auf Android. Im nativen Vollbildmodus nutzen die mobilen Betriebssysteme die WebVTT-Spur zur sauberen Anzeige gemäß den Barrierefreiheits-Einstellungen des Nutzers.',
    },
    {
      question: 'Kann ich WebVTT-Dateien (.vtt) auf YouTube und Vimeo hochladen?',
      answer: 'Ja, sowohl YouTube als auch Vimeo unterstützen WebVTT nativ neben SRT. WebVTT bietet dabei den Vorteil, dass individuelle Positionierungseinstellungen erhalten bleiben, damit Untertitel keine Einblendungen im Video überdecken.',
    },
    {
      question: 'Gibt es auf dieser Website ein Limit für die Dateigröße?',
      answer: 'Nein. Da die gesamte Konvertierung direkt in Ihrem Browser erfolgt, ohne Daten über das Netz zu übertragen, existieren keine künstlichen Dateigrößen-Limits oder Bezahlschranken. Sie können komplette Spielfilme oder stundenlange Vorlesungsreihen ohne Einschränkungen umwandeln.',
    },
    {
      question: 'Bleiben deutsche Umlaute, Akzente und Emojis bei der Konvertierung erhalten?',
      answer: 'Ja. Unser Umwandler arbeitet durchgängig mit nativer UTF-8-Verarbeitung, wodurch deutsche Umlaute (ä, ö, ü, ß), Akzente, nicht-lateinische Alphabete (Arabisch, Japanisch, Koreanisch) sowie Unicode-Emojis vollkommen unversehrt erhalten bleiben.',
    },
  ],
};

const idContent = {
  metaTitle: 'Konverter SRT ke VTT Gratis Online – Cepat & 100% di Browser',
  metaDescription: 'Konversi file subtitle SRT ke format WebVTT (.vtt) online gratis. Otomatis menambahkan header WEBVTT dan mengubah koma timestamp dengan privasi 100%.',
  h1: 'Konverter SRT ke VTT',
  heroDescription: 'Ubah subtitle SubRip (.srt) menjadi format standar WebVTT (.vtt) yang kompatibel dengan W3C untuk pemutar video HTML5, web streaming, dan aplikasi modern. 100% gratis, instan, dan aman di browser Anda.',
  toolName: 'Konverter SRT ke VTT',
  ui: {
    pasteTitle: 'Masukan Teks Subtitle SRT (.srt)',
    pastePlaceholder: 'Tempel teks SRT Anda di sini (contoh:\n1\n00:00:01,000 --> 00:00:04,000\nSelamat datang di video tutorial kami!)...',
    orDivider: 'ATAU',
    uploadTitle: 'Opsi 2 — Unggah File SRT',
    convertButton: 'Konversi ke VTT',
    clearButton: 'Hapus',
    trySampleButton: 'Coba Contoh',
    livePreviewTitle: 'Hasil WebVTT Terkonversi (.vtt)',
    errorNoInput: 'Silakan tempel teks subtitle SRT atau unggah file .srt untuk memulai.',
    pastedContentSource: 'Teks SRT Ditempel',
    dropzoneTitle: 'Tarik & lepas file .srt Anda di sini',
    dropzoneSubtitle: 'atau klik untuk memilih dari perangkat Anda',
    browseButton: 'Pilih File SRT',
    dropActiveText: 'Lepas file SRT di sini...',
    fileSelected: 'File terpilih',
    fileNameLabel: 'Nama File',
    fileSizeLabel: 'Ukuran File',
    cueCountLabel: 'Subtitle Dikonversi',
    characterCountLabel: 'Karakter',
    downloadAction: 'Unduh .vtt',
    copyAction: 'Salin ke Papan Klip',
    copiedSuccess: 'Berhasil disalin!',
    resetAction: 'Konversi File Lain',
    previewTitle: 'Pratinjau WebVTT Terkonversi',
    previewEmpty: 'Subtitle WebVTT (.vtt) hasil konversi Anda akan langsung muncul di sini setelah memasukkan teks atau mengunggah file SRT.',
    optionsTitle: 'Opsi Konversi',
    optIncludeCueNumbers: 'Pertahankan nomor urut subtitle (cue index)',
    optCleanTags: 'Bersihkan tag HTML usang yang tidak didukung (mis. <font>)',
    errorInvalidFile: 'Silakan unggah file subtitle .srt yang valid.',
    errorEmptyFile: 'File atau teks yang dimasukkan kosong.',
    errorParseFailed: 'Gagal mendeteksi blok subtitle SRT yang valid. Pastikan penanda waktu menggunakan format 00:00:00,000 --> 00:00:00,000.',
  },
  sections: {
    whatIsSrt: {
      title: 'Apa itu File SRT?',
      content: [
        'File SRT (SubRip Subtitle) adalah format subtitle teks biasa yang paling populer dan banyak digunakan dalam sejarah video digital. Bermula dari perangkat lunak Windows SubRip —yang dirancang untuk mengekstrak subtitle dan penanda waktu dari kepingan DVD fisik— format .srt berkembang menjadi standar universal untuk pemutar media komputer, televisi, platform berbagi video, dan software penyunting video profesional.',
        'Secara struktural, file SRT terdiri dari blok-blok subtitle berurutan yang dipisahkan oleh baris kosong. Setiap blok memuat empat bagian utama: nomor urut (1, 2, 3...), penanda waktu presisi yang menunjukkan kapan teks muncul dan hilang (berformat jam:menit:detik,milidetik: 00:00:01,250 --> 00:00:04,500), satu atau beberapa baris dialog, dan diakhiri satu baris kosong.',
        'Meskipun format SRT sangat sederhana dan didukung oleh hampir semua media player mandiri seperti VLC Media Player, MPV, HandBrake, dan Premiere Pro, format ini diciptakan sebelum era web modern. Akibatnya, SRT tidak didukung secara bawaan oleh browser web HTML5 dan tidak menyediakan mekanisme standar untuk penyesuaian font responsif, pengaturan tata letak, ataupun styling dengan CSS.',
      ],
    },
    whatIsVtt: {
      title: 'Apa itu File WebVTT (.vtt)?',
      content: [
        'WebVTT (Web Video Text Tracks) adalah format standar terbuka resmi untuk subtitle, teks keterangan, dan bab video di web yang dikembangkan oleh World Wide Web Consortium (W3C) dan WHATWG. Diperkenalkan bersamaan dengan spesifikasi HTML5, WebVTT didukung secara bawaan oleh seluruh browser modern —termasuk Google Chrome, Mozilla Firefox, Apple Safari, dan Microsoft Edge— tanpa memerlukan library JavaScript tambahan ataupun plugin eksternal.',
        'File WebVTT dikenali dari baris pembukanya yang wajib: baris pertama dokumen harus diawali dengan teks "WEBVTT". Setelah header ini, file WebVTT dapat memuat blok metadata opsional (seperti judul, bahasa, atau nama pembuat) serta aturan gaya tampilan sebelum rangkaian subtitle dimulai.',
        'Selain menampilkan dialog teks, WebVTT dirancang khusus untuk antarmuka web modern yang responsif. Format ini mendukung pengaturan bawaan untuk posisi vertikal, perataan horizontal, penempatan baris, dan ukuran kotak teks. Terlebih lagi, WebVTT terintegrasi sempurna dengan CSS melalui pseudo-element ::cue, memungkinkan desainer mengontrol font, bayangan teks, opasitas latar belakang, dan palet warna langsung dari stylesheet situs mereka.',
      ],
    },
    whatIsConverter: {
      title: 'Apa itu Konverter SRT ke VTT?',
      content: [
        'Konverter SRT ke VTT adalah alat bantu subtitle khusus yang menjembatani format video desktop konvensional dengan kebutuhan penayangan video web modern. Alat ini menganalisis sintaks file SubRip (.srt), melakukan transformasi matematis dan struktural, serta menghasilkan file WebVTT (.vtt) yang valid dan mematuhi standar W3C untuk langsung dipasang pada elemen <video> HTML5.',
        'Perubahan struktural terpenting yang dilakukan oleh konverter ini adalah penyesuaian pemisah milidetik pada penanda waktu. Pada format SRT standar, milidetik diawali dengan tanda koma (contohnya 00:01:23,450). Namun, spesifikasi WebVTT mewajibkan tanda titik ASCII (00:01:23.450). Satu koma saja pada file WebVTT dapat menyebabkan browser menolak seluruh trek subtitle atau gagal menampilkan teks.',
        'Konverter kami menjalankan seluruh proses analisis, penyesuaian penanda waktu, dan pembuatan file 100% secara lokal di browser Anda. Tidak ada data yang dikirim ke server luar, menghadirkan kecepatan instan, privasi mutlak, serta tanpa batas ukuran file.',
      ],
    },
    srtVsVtt: {
      title: 'Perbedaan Teknis Utama: SRT vs VTT',
      content: [
        'Meskipun SRT dan WebVTT memiliki susunan teks yang mirip, terdapat perbedaan arsitektur yang sangat signifikan antara keduanya:',
        '1. Header File Wajib: File SRT langsung dimulai dengan angka "1" di baris pertama. Sebaliknya, file WebVTT WAJIB diawali dengan kata "WEBVTT" di baris pertama dokumen. Tanpa header ini, browser akan menganggap file tersebut tidak valid.',
        '2. Tanda Milidetik pada Timestamp: SRT menggunakan koma (00:00:05,200), sedangkan WebVTT menggunakan tanda titik (00:00:05.200). WebVTT juga mengizinkan timestamp pendek tanpa jam (contoh: 05.200 --> 08.400) untuk video pendek, meskipun format lengkap HH:MM:SS.mmm tetap disarankan.',
        '3. Pengaturan Posisi di Layar: Format SRT tidak memiliki cara baku untuk mengatur posisi teks; semuanya berada di tengah bawah. WebVTT mendukung parameter posisi langsung pada baris waktu ("line:10%", "position:80%", "align:left", "size:50%"), mencegah subtitle menutupi nama narasumber atau grafik penting di bagian bawah video.',
        '4. Kemampuan Gaya dan Tampilan: SRT mengandalkan tag lama seperti <i>, <b>, dan <font color="..."> yang sering dinonaktifkan oleh pemutar web demi keamanan. WebVTT mendukung tag suara pembicara (<v Pembicara>), anotasi ruby, kelas CSS (<c.sorotan>), dan styling visual menyeluruh via CSS ::cue.',
        '5. Kompatibilitas Streaming HLS & DASH: Protokol streaming modern seperti Apple HLS dan MPEG-DASH mendistribusikan subtitle dalam bentuk potongan segmen WebVTT. Menggunakan file SRT mentah pada manifest HLS akan memicu kegagalan pemutaran di Safari dan perangkat iOS.',
      ],
    },
    whyConvert: {
      title: 'Mengapa Mengonversi SRT ke VTT?',
      benefits: [
        {
          title: 'Kompatibilitas Penuh Video HTML5',
          description: 'Diputar secara native di Google Chrome, Safari, Firefox, dan Edge melalui tag <track> tanpa perlu library JavaScript eksternal.',
        },
        {
          title: 'Kustomisasi Tampilan Penuh dengan CSS',
          description: 'Sesuaikan font, warna teks, transparansi latar belakang, bayangan, dan batas subtitle menggunakan pseudo-element ::cue.',
        },
        {
          title: 'Penempatan Posisi Tepat di Layar',
          description: 'Atur posisi subtitle di atas, bawah, atau samping agar tidak menutupi grafik, teks penting, ataupun wajah pembicara.',
        },
        {
          title: 'Standar Industri Streaming HLS & DASH',
          description: 'Format baku yang dipersyaratkan oleh platform streaming adaptif (Apple HLS, AWS Elemental, Cloudflare Stream) untuk subtitle multibahasa.',
        },
        {
          title: 'Meningkatkan Aksesibilitas & SEO Video',
          description: 'Membantu penonton tunarungu dan memungkinkan mesin pencari seperti Google mengindeks dialog percakapan dalam video Anda.',
        },
        {
          title: 'Ukuran Ringan & Pemuatan Instan',
          description: 'File teks murni UTF-8 berukuran beberapa kilobyte saja, dapat dimuat dengan sangat cepat tanpa memperlambat performa web.',
        },
      ],
    },
    howToConvert: {
      title: 'Cara Mengonversi SRT ke VTT dalam 3 Langkah Mudah',
      steps: [
        {
          title: '1. Tempel Teks atau Unggah File .srt',
          description: 'Tempel teks subtitle SRT di kolom sebelah kiri atau seret file .srt Anda ke area unggah. Anda juga bisa mengklik "Pilih File SRT".',
        },
        {
          title: '2. Konversi Otomatis di Browser',
          description: 'Alat ini secara instan memproses blok subtitle, menambahkan header WEBVTT, mengganti koma timestamp menjadi titik, dan memperbarui pratinjau secara real-time.',
        },
        {
          title: '3. Salin atau Unduh File WebVTT',
          description: 'Klik tombol "Unduh .vtt" untuk menyimpan file ke perangkat Anda, atau klik "Salin ke Papan Klip" untuk langsung memakainya dalam proyek web Anda.',
        },
      ],
    },
    commonErrorsAndFixes: {
      title: 'Masalah Umum Format SRT & VTT Beserta Solusinya',
      items: [
        {
          title: 'Masalah: Subtitle tidak muncul di browser web (Pemisah Koma)',
          description: 'Penyebab: File masih menggunakan koma pada penanda waktu SRT (mis. 00:00:02,500). Parser browser akan gagal membacanya. Solusi: Ubah semua koma menjadi titik (00:00:02.500) menggunakan konverter kami.',
        },
        {
          title: 'Masalah: Browser menolak file dengan kesalahan sintaks (Header Hilang)',
          description: 'Penyebab: Mengubah ekstensi dari .srt ke .vtt tanpa menyertakan header wajib. Solusi: Baris pertama file harus memuat teks "WEBVTT" diikuti baris kosong.',
        },
        {
          title: 'Masalah: Karakter berantakan atau simbol rusak (Encoding & BOM)',
          description: 'Penyebab: File disimpan dalam format ANSI, UTF-16, atau UTF-8 dengan Byte Order Mark (BOM). Solusi: Konverter kami secara otomatis membuang BOM dan merapikan teks ke format UTF-8 bersih.',
        },
        {
          title: 'Masalah: Timestamp bertumpuk dan teks berkedip',
          description: 'Penyebab: Subtitle 1 berakhir di 00:00:05.000 tetapi subtitle 2 sudah dimulai di 00:00:04.500. Solusi: Pastikan waktu akhir subtitle sebelumnya tidak melebihi waktu mulai subtitle berikutnya.',
        },
        {
          title: 'Masalah: Permintaan diblokir oleh kebijakan CORS',
          description: 'Penyebab: Saat file .vtt di-host pada domain atau CDN berbeda dari halaman video, browser memblokir request. Solusi: Konfigurasikan header "Access-Control-Allow-Origin: *" pada server CDN Anda.',
        },
      ],
    },
    html5VideoGuide: {
      title: 'Cara Menggunakan Subtitle VTT pada Video HTML5',
      description: 'Menyematkan subtitle WebVTT pada pemutar video HTML5 sangatlah mudah: Anda hanya perlu menambahkan tag bawaan <track> di dalam elemen <video>. Berikut struktur kode standar yang digunakan para web developer:',
      codeSnippet: `<video controls width="800" poster="/gambar/poster.jpg">
  <!-- File sumber video utama -->
  <source src="/video/tutorial.mp4" type="video/mp4">
  <source src="/video/tutorial.webm" type="video/webm">

  <!-- Trek Subtitle WebVTT -->
  <track 
    kind="subtitles" 
    src="/subtitle/tutorial-id.vtt" 
    srclang="id" 
    label="Bahasa Indonesia" 
    default>
  
  <track 
    kind="subtitles" 
    src="/subtitle/tutorial-en.vtt" 
    srclang="en" 
    label="English">

  <p>Browser Anda tidak mendukung video HTML5. <a href="/video/tutorial.mp4">Unduh videonya</a> untuk menonton.</p>
</video>`,
      explanation: [
        {
          term: 'kind="subtitles"',
          description: 'Menentukan jenis trek teks. Gunakan "subtitles" untuk terjemahan dialog, atau "captions" untuk teks keterangan lengkap bagi penonton tunarungu yang memuat deskripsi efek suara.',
        },
        {
          term: 'src="jalur/ke/file.vtt"',
          description: 'Alamat URL relatif atau absolut file WebVTT Anda. Pastikan server web menyajikan file dengan header Content-Type "text/vtt; charset=utf-8".',
        },
        {
          term: 'srclang="id"',
          description: 'Kode bahasa standar BCP 47 (seperti "id" untuk Bahasa Indonesia, "en" untuk Inggris). Informasi ini penting bagi screen reader dan mesin penerjemah otomatis.',
        },
        {
          term: 'label="Bahasa Indonesia"',
          description: 'Nama deskriptif yang tampil di menu pilihan subtitle (CC) pemutar video agar memudahkan penonton memilih bahasa.',
        },
        {
          term: 'default',
          description: 'Atribut penanda agar trek ini langsung aktif secara otomatis saat video mulai diputar, kecuali jika penonton telah memiliki preferensi lain.',
        },
      ],
    },
    comparison: {
      title: 'Perbandingan Spesifikasi Teknis: SRT vs WebVTT',
      description: 'Tinjau perbedaan kemampuan teknis, kompatibilitas, dan fitur antara SubRip (.srt) dan WebVTT (.vtt):',
      headers: ['Aspek Teknis', 'SubRip (.srt)', 'WebVTT (.vtt)'],
      rows: [
        ['Lingkungan Penggunaan Utama', 'Aplikasi pemutar desktop (VLC) & software editing', 'Browser web HTML5, aplikasi mobile & streaming'],
        ['Header Pembuka Wajib', 'Tidak ada (langsung mulai dari angka 1)', 'Wajib "WEBVTT" di baris pertama'],
        ['Pemisah Milidetik', 'Koma (contoh: 00:01:23,450)', 'Titik (contoh: 00:01:23.450)'],
        ['Pemutaran Web Native', 'Tidak (membutuhkan library JS tambahan)', 'Ya (native via tag <track> di semua browser)'],
        ['Dukungan Styling Tampilan', 'Tag lama terbatas (<i>, <b>, <font>)', 'Styling penuh berbasis CSS via pseudo-element ::cue'],
        ['Pengaturan Posisi di Layar', 'Tidak baku (biasanya hanya di tengah bawah)', 'Atribut native: line, position, size, align'],
        ['Streaming HLS / MPEG-DASH', 'Tidak didukung (wajib dikonversi)', 'Format standar baku untuk transmisi streaming'],
        ['Dukungan Komentar & Metadata', 'Tidak memiliki sintaks komentar resmi', 'Mendukung blok NOTE dan header STYLE'],
        ['Ekstensi File Umum', '.srt', '.vtt'],
        ['MIME Type Standar', 'application/x-subrip', 'text/vtt; charset=utf-8'],
      ],
    },
    privacy: {
      title: 'Jaminan Privasi & Keamanan 100% di Browser Anda',
      content: [
        'Di SRTConverters.info, kami mengutamakan kerahasiaan dan privasi data Anda. Seluruh konversi dari SRT ke WebVTT diproses sepenuhnya di dalam mesin browser lokal Anda menggunakan JavaScript sisi klien.',
        'File subtitle, naskah video rahasia, rekaman wawancara, dan data pribadi Anda tidak pernah dikirim, disimpan, atau diproses di server pihak ketiga. Anda bahkan bisa mematikan koneksi internet setelah membuka halaman ini, dan alat konversi akan tetap bekerja dengan sempurna.',
        'Arsitektur pemrosesan lokal ini meniadakan segala risiko kebocoran informasi, menjadikan alat kami sangat aman untuk presentasi perusahaan, arsip hukum, berkas medis, dan materi sensitif lainnya.',
      ],
    },
  },
  faqs: [
    {
      question: 'Bolehkah saya hanya mengganti ekstensi file dari .srt menjadi .vtt?',
      answer: 'Tidak boleh. Mengubah ekstensi saja tidak akan membuat file tersebut valid sebagai WebVTT. WebVTT mewajibkan adanya header "WEBVTT" di baris pertama dan mengharuskan pemisah milidetik menggunakan tanda titik, bukan koma (00:00:01.000 bukan 00:00:01,000). Browser web akan menolak file SRT yang hanya diganti namanya.',
    },
    {
      question: 'Mengapa subtitle WebVTT saya tidak muncul di video HTML5?',
      answer: 'Penyebab umumnya ada tiga: 1) File tidak memuat header "WEBVTT" di baris pertama; 2) Penanda waktu masih menggunakan tanda koma dan bukan titik; atau 3) Server web belum menyajikan file dengan MIME type "text/vtt" atau terhalang aturan CORS. Konverter kami memastikan format teks Anda 100% tepat.',
    },
    {
      question: 'Apa perbedaan antara subtitles dan captions pada WebVTT?',
      answer: 'Subtitles (kind="subtitles") ditujukan bagi penonton yang dapat mendengar audio namun membutuhkan terjemahan bahasa; format ini hanya memuat teks dialog. Sementara Captions (kind="captions") dibuat untuk penonton tunarungu; selain dialog, terdapat deskripsi efek suara, suasana musik, dan identifikasi nama pembicara (mis. [Tepuk tangan], [Musik ceria]). Keduanya didukung oleh WebVTT di HTML5.',
    },
    {
      question: 'Bagaimana cara mengubah gaya tampilan subtitle WebVTT dengan CSS?',
      answer: 'Anda dapat menyesuaikan tampilan subtitle secara langsung di file CSS situs Anda menggunakan pseudo-element ::cue. Contoh: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }',
    },
    {
      question: 'Apakah WebVTT berfungsi di ponsel seperti iPhone (Safari) dan Android (Chrome)?',
      answer: 'Ya! WebVTT didukung secara menyeluruh di semua browser ponsel modern, termasuk Safari di iOS dan Chrome di Android. Saat video diputar dalam mode layar penuh di HP, sistem operasi akan menampilkan subtitle WebVTT sesuai preferensi aksesibilitas perangkat pengguna.',
    },
    {
      question: 'Bisakah saya mengunggah file WebVTT (.vtt) ke YouTube dan Vimeo?',
      answer: 'Bisa. Baik YouTube maupun Vimeo menyediakan dukungan bawaan untuk unggahan subtitle berformat WebVTT selain SRT. WebVTT memberikan keunggulan ekstra jika subtitle Anda memuat pengaturan koordinat posisi khusus.',
    },
    {
      question: 'Apakah ada batasan ukuran file saat mengonversi di website ini?',
      answer: 'Tidak ada batasan. Karena semua pemrosesan berjalan langsung di komputer atau ponsel Anda tanpa melewati server eksternal, tidak ada batasan ukuran file, kuota penggunaan, ataupun biaya langganan. Anda bebas mengonversi film panjang atau rekaman seminar berdurasi jam-jaman secara leluasa.',
    },
    {
      question: 'Apakah konverter ini mendukung huruf non-Latin, aksen, dan emoji?',
      answer: 'Ya. Konverter kami menerapkan pengolahan karakter berbasis UTF-8, sehingga aksen huruf, karakter non-Latin (seperti aksara Arab, Jepang, Korea, atau Vietnam), tanda baca khusus, dan emoji Unicode akan tetap terjaga rapi tanpa rusak.',
    },
  ],
};

const viContent = {
  metaTitle: 'Chuyển Đổi SRT sang VTT Miễn Phí Trực Tuyến – Chuẩn WebVTT Nhanh & An Toàn',
  metaDescription: 'Chuyển đổi tệp phụ đề SRT sang định dạng WebVTT (.vtt) chuẩn trực tuyến miễn phí. Tự động thêm tiêu đề WEBVTT và đổi dấu phẩy thời gian với bảo mật tuyệt đối 100%.',
  h1: 'Chuyển Đổi SRT sang VTT',
  heroDescription: 'Dễ dàng chuyển đổi tệp phụ đề SubRip (.srt) sang định dạng chuẩn WebVTT (.vtt) tương thích hoàn toàn với W3C dành cho trình phát video HTML5, nền tảng phát trực tuyến và ứng dụng web hiện đại. 100% miễn phí, tức thì và bảo mật ngay trên trình duyệt.',
  toolName: 'Chuyển Đổi SRT sang VTT',
  ui: {
    pasteTitle: 'Nhập Nội Dung Phụ Đề SRT (.srt)',
    pastePlaceholder: 'Dán nội dung SRT của bạn vào đây (ví dụ:\n1\n00:00:01,000 --> 00:00:04,000\nChào mừng bạn đến với video hướng dẫn của chúng tôi!)...',
    orDivider: 'HOẶC',
    uploadTitle: 'Cách 2 — Tải Tệp SRT Lên',
    convertButton: 'Chuyển sang VTT',
    clearButton: 'Xóa',
    trySampleButton: 'Tải Mẫu Thử',
    livePreviewTitle: 'Kết Quả WebVTT Đã Chuyển Đổi (.vtt)',
    errorNoInput: 'Vui lòng dán nội dung văn bản SRT hoặc tải lên tệp .srt để tiến hành chuyển đổi.',
    pastedContentSource: 'Nội dung SRT đã dán',
    dropzoneTitle: 'Kéo và thả tệp .srt của bạn vào đây',
    dropzoneSubtitle: 'hoặc nhấp để chọn tệp từ thiết bị của bạn',
    browseButton: 'Chọn Tệp SRT',
    dropActiveText: 'Thả tệp SRT vào đây...',
    fileSelected: 'Đã chọn tệp',
    fileNameLabel: 'Tên Tệp',
    fileSizeLabel: 'Dung Lượng Tệp',
    cueCountLabel: 'Đoạn Phụ Đề Đã Chuyển',
    characterCountLabel: 'Số Ký Tự',
    downloadAction: 'Tải Về .vtt',
    copyAction: 'Sao Chép vào Bộ Nhớ',
    copiedSuccess: 'Đã sao chép thành công!',
    resetAction: 'Chuyển Đổi Tệp Khác',
    previewTitle: 'Xem Trước Bản WebVTT Đã Chuyển',
    previewEmpty: 'Phụ đề WebVTT (.vtt) của bạn sẽ hiển thị tại đây ngay sau khi bạn nhập nội dung hoặc tải tệp SRT lên.',
    optionsTitle: 'Tùy Chọn Chuyển Đổi',
    optIncludeCueNumbers: 'Giữ lại số thứ tự từng đoạn phụ đề (cue index)',
    optCleanTags: 'Lọc bỏ các thẻ HTML cũ không được hỗ trợ (ví dụ: <font>)',
    errorInvalidFile: 'Vui lòng tải lên tệp phụ đề .srt hợp lệ.',
    errorEmptyFile: 'Nội dung văn bản hoặc tệp được cung cấp hoàn toàn trống.',
    errorParseFailed: 'Không thể nhận diện cấu trúc phụ đề SRT hợp lệ. Vui lòng đảm bảo mốc thời gian tuân theo chuẩn 00:00:00,000 --> 00:00:00,000.',
  },
  sections: {
    whatIsSrt: {
      title: 'Tệp SRT là gì?',
      content: [
        'Tệp SRT (SubRip Subtitle) là định dạng tệp phụ đề văn bản thuần túy phổ biến và có lịch sử lâu đời nhất trong ngành video kỹ thuật số. Xuất phát từ phần mềm SubRip trên Windows —vốn được phát triển để trích xuất phụ đề và mốc thời gian từ các đĩa DVD vật lý— định dạng .srt nhanh chóng trở thành tiêu chuẩn toàn cầu cho các trình phát đa phương tiện trên máy tính, TV thông minh, mạng chia sẻ ngang hàng và phần mềm biên tập video chuyên nghiệp.',
        'Về mặt cấu trúc, tệp SRT được tạo nên từ các khối phụ đề tuần tự ngăn cách nhau bởi các dòng trống. Mỗi khối gồm 4 thành phần bắt buộc: số thứ tự đoạn (1, 2, 3...), mốc thời gian biểu thị thời điểm xuất hiện và kết thúc của câu phụ đề (được định dạng chính xác theo chuẩn giờ:phút:giây,mili-giây: 00:00:01,250 --> 00:00:04,500), một hoặc nhiều dòng văn bản hội thoại, và kết thúc bằng một dòng trống ngắt đoạn.',
        'Mặc dù tệp SRT rất đơn giản và tương thích với hầu hết các phần mềm độc lập như VLC Media Player, MPV, HandBrake hay Adobe Premiere Pro, chúng lại được thiết kế từ trước kỷ nguyên web hiện đại. Do đó, định dạng SRT hoàn toàn thiếu sự hỗ trợ gốc trên các trình duyệt web HTML5 và không cung cấp bất kỳ cơ chế tiêu chuẩn nào để tùy chỉnh phông chữ linh hoạt, định vị vị trí khung hình hay định kiểu bằng CSS.',
      ],
    },
    whatIsVtt: {
      title: 'Tệp WebVTT (.vtt) là gì?',
      content: [
        'WebVTT (Web Video Text Tracks) là định dạng tiêu chuẩn mở chính thức dành cho phụ đề, chú thích âm thanh và chỉ mục phân đoạn trên môi trường web, được khởi xướng và chuẩn hóa bởi World Wide Web Consortium (W3C) và WHATWG. Được giới thiệu cùng lúc với thông số kỹ thuật HTML5, WebVTT được hỗ trợ trực tiếp và tự nhiên bởi mọi trình duyệt web hiện đại —bao gồm Google Chrome, Mozilla Firefox, Apple Safari và Microsoft Edge— mà không cần bất kỳ plugin JavaScript bổ trợ nào hay phần mềm phát video cồng kềnh.',
        'Một tệp WebVTT luôn được nhận diện bởi dòng tiêu đề bắt buộc ở phần mở đầu: dòng đầu tiên của tệp nhất thiết phải bắt đầu bằng chuỗi ký tự "WEBVTT". Ngay sau phần tiêu đề này, tệp có thể chứa các khối siêu dữ liệu tùy chọn (như tác giả, tiêu đề, ngôn ngữ) hoặc các khai báo định kiểu CSS trước khi bắt đầu danh sách các đoạn phụ đề.',
        'Không dừng lại ở việc hiển thị câu thoại, WebVTT được kiến trúc riêng cho các giao diện web tương tác và thích ứng (responsive). Định dạng này tích hợp sẵn các thiết lập tọa độ hiển thị theo chiều dọc, căn chỉnh lề ngang, vị trí dòng và kích thước khung chữ. Hơn thế nữa, WebVTT liên kết chặt chẽ với CSS thông qua bộ chọn giả phần tử ::cue, cho phép các lập trình viên web làm chủ màu sắc, phông chữ, bóng đổ chữ và độ mờ nền trực tiếp từ tệp stylesheet của trang web.',
      ],
    },
    whatIsConverter: {
      title: 'Công Cụ Chuyển Đổi SRT sang VTT là gì?',
      content: [
        'Công cụ chuyển đổi SRT sang VTT là tiện ích chuyên dụng được thiết kế nhằm nối liền khoảng cách giữa các định dạng sản xuất video truyền thống và nền tảng phát video trực tuyến hiện đại. Công cụ sẽ đọc và phân tích cú pháp tệp SubRip (.srt), xử lý các quy tắc toán học và cấu trúc văn bản, rồi xuất ra tệp WebVTT (.vtt) chuẩn xác, sẵn sàng nhúng ngay vào thẻ <video> của trang web HTML5.',
        'Điểm chuyển đổi kỹ thuật cốt lõi mà công cụ đảm nhiệm là chuẩn hóa dấu ngăn cách phần mili-giây trong mốc thời gian. Trong chuẩn SRT truyền thống, phần mili-giây được ngăn cách bởi dấu phẩy (ví dụ: 00:01:23,450). Tuy nhiên, thông số chuẩn WebVTT lại quy định bắt buộc phải dùng dấu chấm thập phân ASCII (00:01:23.450). Chỉ một dấu phẩy còn sót lại cũng khiến trình duyệt web từ chối toàn bộ dải phụ đề hoặc không thể hiển thị chữ trên màn hình.',
        'Toàn bộ quá trình phân tích cú pháp, chuyển đổi mốc thời gian và tạo tệp WebVTT của chúng tôi đều được xử lý 100% cục bộ ngay trong trình duyệt máy bạn. Không một dòng dữ liệu nào bị gửi lên máy chủ bên ngoài, đảm bảo tốc độ phản hồi tức thì, bảo mật tuyệt đối và không giới hạn dung lượng tệp.',
      ],
    },
    srtVsVtt: {
      title: 'So Sánh Kỹ Thuật Chi Tiết: SRT và VTT',
      content: [
        'Mặc dù nhìn thoáng qua cấu trúc văn bản của SRT và WebVTT có nét tương đồng, giữa chúng có những điểm khác biệt kỹ thuật mang tính quyết định:',
        '1. Tiêu Đề Đầu Tệp Bắt Buộc: Tệp SRT bắt đầu ngay bằng số thứ tự "1" ở dòng đầu tiên. Ngược lại, tệp WebVTT BẮT BUỘC phải mở đầu bằng chữ "WEBVTT" trên dòng đầu tiên, theo sau có thể là các khối chú thích. Nếu trình duyệt không thấy chữ WEBVTT, tệp sẽ bị loại bỏ vì sai cú pháp.',
        '2. Quy Tắc Dấu Ngăn Cách Mili-Giây: SRT dùng dấu phẩy (00:00:05,200), trong khi WebVTT dùng dấu chấm (00:00:05.200). WebVTT còn cho phép viết tắt mốc thời gian không có giờ (ví dụ: 05.200 --> 08.400) cho video ngắn dưới 1 tiếng, dù việc duy trì đủ định dạng HH:MM:SS.mmm vẫn là thực hành tốt nhất.',
        '3. Định Vị Khung Hình & Tọa Độ Hiển Thị: SRT không có cơ chế chuẩn hóa vị trí; chữ luôn mặc định nằm ở chính giữa góc dưới màn hình. WebVTT hỗ trợ trực tiếp các tham số tọa độ gắn kèm mốc thời gian ("line:10%", "position:80%", "align:left", "size:50%"), giúp phụ đề không đè lên logo, phụ đề tiếng gốc hay tên diễn giả.',
        '4. Khả Năng Định Kiểu & Trang Trí: SRT chỉ dựa vào một vài thẻ thô sơ như <i>, <b>, <font color="..."> vốn thường bị các trình duyệt chặn vì lý do an toàn. WebVTT hỗ trợ thẻ giọng nói nhân vật (<v Tên>), chú âm ruby, gán class CSS (<c.nhanmanh>) và định dạng toàn diện qua CSS với bộ chọn ::cue.',
        '5. Tiêu Chuẩn Phát Trực Tuyến HLS & DASH: Các công nghệ truyền phát video thích ứng hiện nay như Apple HLS và MPEG-DASH luôn đóng gói dải phụ đề dưới dạng các phân đoạn WebVTT. Việc đưa tệp SRT chưa chuyển đổi vào danh sách HLS sẽ gây lỗi phát hình lập tức trên iPhone, iPad và trình duyệt Safari.',
      ],
    },
    whyConvert: {
      title: 'Tại Sao Bạn Nên Chuyển Đổi SRT sang VTT?',
      benefits: [
        {
          title: 'Tương Thích Trực Tiếp Với Video HTML5',
          description: 'Hoạt động mượt mà trên Chrome, Safari, Firefox và Edge qua thẻ <track> mà không cần cài thêm bất kỳ thư viện JavaScript phức tạp nào.',
        },
        {
          title: 'Tùy Biến Giao Diện Bằng CSS với ::cue',
          description: 'Dễ dàng thay đổi phông chữ, màu sắc chữ, độ trong suốt của nền, bóng đổ và đường viền phụ đề cho ăn khớp với bộ nhận diện của website.',
        },
        {
          title: 'Kiểm Soát Vị Trí Hiển Thị Linh Hoạt',
          description: 'Chủ động đặt phụ đề ở phía trên, phía dưới hoặc hai bên để không che khuất các thông tin đồ họa hay khuôn mặt nhân vật trong video.',
        },
        {
          title: 'Chuẩn Mực Cho Phát Trực Tuyến HLS & DASH',
          description: 'Định dạng bắt buộc trên các nền tảng phát video phân phối theo luồng (Apple HLS, AWS Elemental, Cloudflare Stream) khi quản lý nhiều ngôn ngữ.',
        },
        {
          title: 'Nâng Cao Tiếp Cận & Tối Ưu Hóa SEO Video',
          description: 'Hỗ trợ người khiếm thính tiếp cận trọn vẹn nội dung và giúp các thuật toán của Google lập chỉ mục chuẩn xác từng câu hội thoại.',
        },
        {
          title: 'Cực Kỳ Nhẹ Nhàng & Tải Tức Thì',
          description: 'Là tệp văn bản thuần định dạng UTF-8 với dung lượng chỉ vài kilobyte, tải tức thời trên mạng di động mà không gây tụt chỉ số Core Web Vitals.',
        },
      ],
    },
    howToConvert: {
      title: 'Cách Chuyển Đổi SRT sang VTT Trong 3 Bước Nhanh Chóng',
      steps: [
        {
          title: '1. Dán Văn Bản Hoặc Tải Tệp .srt Lên',
          description: 'Dán trực tiếp nội dung phụ đề SRT vào khung bên trái hoặc kéo thả tệp .srt vào hộp tải tệp. Bạn cũng có thể bấm "Chọn Tệp SRT".',
        },
        {
          title: '2. Xử Lý Tự Động Ngay Trong Trình Duyệt',
          description: 'Hệ thống sẽ lập tức phân tích từng đoạn phụ đề, thêm tiêu đề WEBVTT, đổi dấu phẩy thành dấu chấm và hiển thị bản xem trước theo thời gian thực.',
        },
        {
          title: '3. Tải Về Hoặc Sao Chép Bản WebVTT',
          description: 'Bấm nút "Tải Về .vtt" để lưu tệp phụ đề mới về máy, hoặc bấm "Sao Chép vào Bộ Nhớ" để dán ngay mã phụ đề vào dự án trang web của bạn.',
        },
      ],
    },
    commonErrorsAndFixes: {
      title: 'Các Lỗi Định Dạng SRT/VTT Phổ Biến & Cách Khắc Phục',
      items: [
        {
          title: 'Lỗi: Phụ đề không hiển thị trên trình duyệt web (Dấu Phẩy Thời Gian)',
          description: 'Nguyên nhân: Tệp vẫn còn dùng dấu phẩy phân cách mili-giây kiểu SRT (ví dụ: 00:00:02,500). Trình duyệt sẽ báo lỗi cú pháp. Khắc phục: Dùng công cụ của chúng tôi để tự động đổi toàn bộ dấu phẩy thành dấu chấm (00:00:02.500).',
        },
        {
          title: 'Lỗi: Trình duyệt từ chối tệp vì sai cú pháp (Thiếu Tiêu Đề WEBVTT)',
          description: 'Nguyên nhân: Người dùng chỉ đổi đuôi tệp từ .srt thành .vtt mà không thêm tiêu đề. Khắc phục: Dòng đầu tiên của tệp bắt buộc phải có chữ "WEBVTT".',
        },
        {
          title: 'Lỗi: Chữ bị lỗi font hoặc mất dấu tiếng Việt (Mã Hóa & BOM)',
          description: 'Nguyên nhân: Tệp được lưu dưới dạng ANSI, UTF-16 hoặc UTF-8 có chứa ký tự BOM ẩn. Khắc phục: Công cụ của chúng tôi tự động làm sạch ký tự BOM và chuẩn hóa về mã UTF-8 tiêu chuẩn.',
        },
        {
          title: 'Lỗi: Mốc thời gian bị đè lên nhau gây chớp giật chữ',
          description: 'Nguyên nhân: Đoạn 1 kết thúc lúc 00:00:05.000 trong khi đoạn 2 đã bắt đầu từ 00:00:04.500. Khắc phục: Đảm bảo thời điểm kết thúc của câu trước phải nhỏ hơn hoặc bằng thời điểm bắt đầu câu sau.',
        },
        {
          title: 'Lỗi: Trình duyệt chặn phụ đề do chính sách CORS',
          description: 'Nguyên nhân: Khi tệp .vtt được đặt trên một tên miền hoặc CDN khác với trang chứa video, trình duyệt sẽ chặn tải tệp. Khắc phục: Cài đặt cấu hình máy chủ gửi kèm tiêu đề "Access-Control-Allow-Origin: *" và MIME type "text/vtt".',
        },
      ],
    },
    html5VideoGuide: {
      title: 'Hướng Dẫn Sử Dụng Phụ Đề VTT Với Thẻ Video HTML5',
      description: 'Để tích hợp phụ đề WebVTT vào trình phát video trên trang web, bạn chỉ cần dùng thẻ <track> lồng bên trong thẻ <video>. Dưới đây là mẫu mã nguồn chuẩn mực được áp dụng phổ biến trên toàn cầu:',
      codeSnippet: `<video controls width="800" poster="/hinh-anh/anh-bia.jpg">
  <!-- Các tệp nguồn video chính -->
  <source src="/video/huong-dan.mp4" type="video/mp4">
  <source src="/video/huong-dan.webm" type="video/webm">

  <!-- Dải phụ đề WebVTT -->
  <track 
    kind="subtitles" 
    src="/phu-de/huong-dan-vi.vtt" 
    srclang="vi" 
    label="Tiếng Việt" 
    default>
  
  <track 
    kind="subtitles" 
    src="/phu-de/huong-dan-en.vtt" 
    srclang="en" 
    label="English">

  <p>Trình duyệt của bạn không hỗ trợ video HTML5. <a href="/video/huong-dan.mp4">Tải video về</a> để xem.</p>
</video>`,
      explanation: [
        {
          term: 'kind="subtitles"',
          description: 'Xác định loại dải văn bản. Chọn "subtitles" cho bản dịch lời thoại thông thường, hoặc "captions" cho phụ đề có mô tả âm thanh phục vụ người khiếm thính.',
        },
        {
          term: 'src="duong-dan/tep.vtt"',
          description: 'Địa chỉ URL tương đối hoặc tuyệt đối trỏ tới tệp WebVTT. Đảm bảo máy chủ trả về tệp cùng tiêu đề Content-Type "text/vtt; charset=utf-8".',
        },
        {
          term: 'srclang="vi"',
          description: 'Mã định danh ngôn ngữ theo chuẩn BCP 47 (ví dụ: "vi" cho tiếng Việt, "en" cho tiếng Anh), cần thiết cho bộ đọc màn hình và công cụ dịch tự động.',
        },
        {
          term: 'label="Tiếng Việt"',
          description: 'Tên ngôn ngữ thân thiện hiển thị trên menu lựa chọn phụ đề (nút CC) của trình phát video để người xem thuận tiện lựa chọn.',
        },
        {
          term: 'default',
          description: 'Thuộc tính chỉ định dải phụ đề này sẽ tự động được bật ngay khi video bắt đầu chạy, trừ phi người dùng có thiết lập riêng khác.',
        },
      ],
    },
    comparison: {
      title: 'Bảng So Sánh Kỹ Thuật: SRT vs WebVTT',
      description: 'Đối chiếu chi tiết các tiêu chuẩn kỹ thuật, khả năng hỗ trợ và thông số giữa SubRip (.srt) và WebVTT (.vtt):',
      headers: ['Tiêu Chí Kỹ Thuật', 'SubRip (.srt)', 'WebVTT (.vtt)'],
      rows: [
        ['Môi Trường Sử Dụng Chính', 'Phần mềm xem video máy tính (VLC) & dựng phim', 'Trình duyệt web HTML5, ứng dụng di động & streaming'],
        ['Tiêu Đề Mở Đầu Bắt Buộc', 'Không có (bắt đầu ngay với số 1)', 'Bắt buộc có chữ "WEBVTT" trên dòng 1'],
        ['Dấu Ngăn Mili-Giây', 'Dấu phẩy (ví dụ: 00:01:23,450)', 'Dấu chấm (ví dụ: 00:01:23.450)'],
        ['Hỗ Trợ Trực Tiếp Trên Web', 'Không (cần thư viện JavaScript bổ trợ)', 'Có (hỗ trợ gốc qua thẻ <track> trên mọi trình duyệt)'],
        ['Khả Năng Định Kiểu Phụ Đề', 'Rất hạn chế với vài thẻ cũ (<i>, <b>, <font>)', 'Định kiểu toàn diện bằng CSS qua bộ chọn ::cue'],
        ['Định Vị Tọa Độ Trên Màn Hình', 'Không hỗ trợ chuẩn hóa (mặc định căn giữa dưới)', 'Tích hợp sẵn các thuộc tính: line, position, size, align'],
        ['Phát Trực Tuyến HLS / DASH', 'Không tương thích (bắt buộc phải chuyển đổi)', 'Định dạng chuẩn tắc cho danh sách phụ đề streaming'],
        ['Hỗ Trợ Ghi Chú & Siêu Dữ Liệu', 'Không có cú pháp chú thích chính thức', 'Hỗ trợ các khối NOTE và khai báo STYLE ở đầu tệp'],
        ['Đuôi Tệp Thông Dụng', '.srt', '.vtt'],
        ['Loại MIME Chuẩn', 'application/x-subrip', 'text/vtt; charset=utf-8'],
      ],
    },
    privacy: {
      title: 'Cam Kết Bảo Mật & Riêng Tư Tuyệt Đối 100% Trên Trình Duyệt',
      content: [
        'Tại SRTConverters.info, chúng tôi đặt sự an toàn và quyền riêng tư của dữ liệu người dùng lên hàng đầu. Mọi thao tác chuyển đổi định dạng giữa SRT và WebVTT đều diễn ra hoàn toàn bên trong trình duyệt của bạn nhờ mã nguồn JavaScript chạy phía máy khách.',
        'Nội dung phụ đề, bản ghi chép cuộc họp, kịch bản chưa công bố và các đoạn hội thoại mang tính bảo mật của bạn tuyệt đối không bao giờ bị tải lên hay lưu giữ trên bất kỳ máy chủ bên ngoài nào. Bạn thậm chí có thể ngắt kết nối mạng sau khi tải xong trang web và công cụ vẫn hoạt động hoàn hảo bình thường.',
        'Mô hình xử lý cục bộ này triệt tiêu hoàn toàn nguy cơ rò rỉ thông tin, giúp công cụ trở thành sự lựa chọn an tâm tuyệt đối cho các buổi thuyết trình nội bộ doanh nghiệp, tài liệu ghi âm pháp lý và dữ liệu y tế cần bảo mật.',
      ],
    },
  },
  faqs: [
    {
      question: 'Tôi có thể chỉ đổi đuôi tệp từ .srt thành .vtt được không?',
      answer: 'Không được. Việc chỉ đổi tên đuôi tệp sẽ không tạo ra tệp WebVTT hợp lệ. WebVTT yêu cầu bắt buộc phải có tiêu đề "WEBVTT" ở đầu tệp và các mốc thời gian phải dùng dấu chấm ngăn cách mili-giây thay vì dấu phẩy (00:00:01.000 thay vì 00:00:01,000). Các trình duyệt web sẽ từ chối hiển thị tệp SRT chỉ được đổi tên.',
    },
    {
      question: 'Tại sao phụ đề WebVTT của tôi không xuất hiện trên trình phát video HTML5?',
      answer: 'Thường có 3 nguyên nhân phổ biến: 1) Tệp thiếu dòng tiêu đề "WEBVTT" ở dòng số 1; 2) Mốc thời gian vẫn dùng dấu phẩy chưa được đổi thành dấu chấm; hoặc 3) Máy chủ web không gửi đúng MIME type (text/vtt) hay bị chặn bởi chính sách CORS. Công cụ của chúng tôi giúp bạn chuẩn hóa 100% cú pháp này.',
    },
    {
      question: 'Sự khác nhau giữa phụ đề dịch (subtitles) và phụ đề cho người khiếm thính (captions) là gì?',
      answer: 'Phụ đề dịch (kind="subtitles") nhắm đến người nghe được âm thanh nhưng cần dịch ngôn ngữ; loại này chỉ chép lại câu thoại. Phụ đề cho người khiếm thính (kind="captions") chép lại cả câu thoại lẫn mô tả âm thanh nền, tiếng động và tên nhân vật (ví dụ: [Vỗ tay], [Tiếng nhạc rộn ràng]). WebVTT hỗ trợ hoàn hảo cả hai qua thuộc tính kind.',
    },
    {
      question: 'Làm thế nào để tùy biến kiểu dáng chữ của phụ đề WebVTT bằng CSS?',
      answer: 'Bạn có thể tùy biến phụ đề WebVTT trực tiếp trong tệp CSS của trang web bằng cách sử dụng bộ chọn giả phần tử ::cue. Ví dụ: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }',
    },
    {
      question: 'WebVTT có hoạt động trên điện thoại di động như iPhone (Safari) và Android (Chrome) không?',
      answer: 'Có! WebVTT được hỗ trợ đầy đủ trên tất cả các trình duyệt di động hiện đại, bao gồm Safari trên iOS/iPadOS và Chrome trên Android. Khi xem video ở chế độ toàn màn hình trên điện thoại, hệ điều hành sẽ tự động dùng dải phụ đề WebVTT để hiển thị chữ theo đúng cài đặt trợ năng của máy.',
    },
    {
      question: 'Tôi có thể tải tệp WebVTT (.vtt) lên YouTube và Vimeo không?',
      answer: 'Hoàn toàn được. Cả YouTube và Vimeo đều hỗ trợ tải lên tệp WebVTT song song với SRT. WebVTT đặc biệt có ưu thế lớn nếu phụ đề của bạn có thiết lập tọa độ tùy chỉnh để tránh bị che các thông tin đồ họa ở góc dưới màn hình.',
    },
    {
      question: 'Có giới hạn dung lượng tệp khi chuyển đổi SRT sang VTT trên trang này không?',
      answer: 'Không có bất kỳ giới hạn nào. Vì toàn bộ tiến trình diễn ra trực tiếp trên máy của bạn mà không truyền tải dữ liệu qua internet, chúng tôi không áp đặt giới hạn kích thước tệp, số lượng từ hay phí dịch vụ. Bạn có thể chuyển đổi các bộ phim dài tập hay các khóa học hàng chục tiếng đồng hồ một cách thoải mái.',
    },
    {
      question: 'Công cụ có bảo toàn tiếng Việt có dấu, ký tự đặc biệt và emoji không?',
      answer: 'Có. Công cụ của chúng tôi xử lý văn bản dựa trên chuẩn mã hóa UTF-8 gốc, đảm bảo bảo toàn 100% tiếng Việt có dấu (kể cả các dấu mũ, móc, thanh điệu phức tạp), các bảng chữ cái quốc tế (tiếng Ả Rập, Nhật Bản, Hàn Quốc) và biểu tượng cảm xúc Unicode mà không hề bị lỗi ký tự.',
    },
  ],
};

// Write files
fs.writeFileSync(path.join(targetDir, 'de.ts'), `import type { SrtToVttDetailContent } from './types';\n\nexport const deContent: SrtToVttDetailContent = ${JSON.stringify(deContent, null, 2)};\n`, 'utf-8');
console.log('✓ Successfully wrote comprehensive de.ts');

fs.writeFileSync(path.join(targetDir, 'id.ts'), `import type { SrtToVttDetailContent } from './types';\n\nexport const idContent: SrtToVttDetailContent = ${JSON.stringify(idContent, null, 2)};\n`, 'utf-8');
console.log('✓ Successfully wrote comprehensive id.ts');

fs.writeFileSync(path.join(targetDir, 'vi.ts'), `import type { SrtToVttDetailContent } from './types';\n\nexport const viContent: SrtToVttDetailContent = ${JSON.stringify(viContent, null, 2)};\n`, 'utf-8');
console.log('✓ Successfully wrote comprehensive vi.ts');
