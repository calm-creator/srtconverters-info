import type { Locale } from '../i18n/locales';

export interface ToolsPageContent {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heading: string;
  description: string;
  toolCountLabel: string;
  openToolLabel: string;
  toolCategories: Record<string, string>;
}

export const TOOLS_PAGE_CONTENT: Record<Locale, ToolsPageContent> = {
  en: {
    metaTitle: 'All SRT & Subtitle Conversion Tools – srtconverters.info',
    metaDescription: 'Browse our complete suite of fast, browser-based tools to convert, extract, and generate SRT subtitle files with 100% client-side privacy.',
    badge: 'Subtitle Utility Suite',
    heading: 'All SRT & Subtitle Conversion Tools',
    description: 'Explore our complete collection of fast, browser-based subtitle tools. Whether you need to extract clean dialogue from SRT files, convert to WebVTT for HTML5 video, or generate timed subtitle tracks from plain text, every utility runs 100% locally in your browser with zero server uploads.',
    toolCountLabel: '3 Tools Available',
    openToolLabel: 'Open Tool',
    toolCategories: {
      'srt-to-txt': 'Extraction & Stripping',
      'txt-to-srt': 'Timing & Generation',
      'srt-to-vtt': 'Web Subtitle & HTML5',
    },
  },
  pt: {
    metaTitle: 'Todas as Ferramentas para Legendas SRT – srtconverters.info',
    metaDescription: 'Explore nossa coleção completa de ferramentas rápidas no navegador para converter, extrair e formatar legendas SRT com privacidade total.',
    badge: 'Coleção de Ferramentas de Legenda',
    heading: 'Todas as Ferramentas para Legendas SRT',
    description: 'Explore nossa coleção completa de ferramentas de legenda no navegador. Se você precisa extrair textos limpos, converter para WebVTT ou gerar legendas temporizadas a partir de texto simples, tudo é processado 100% localmente sem envio a servidores.',
    toolCountLabel: '3 Ferramentas Disponíveis',
    openToolLabel: 'Abrir Ferramenta',
    toolCategories: {
      'srt-to-txt': 'Extração de Texto',
      'txt-to-srt': 'Geração de Legendas',
      'srt-to-vtt': 'Legendas Web & HTML5',
    },
  },
  es: {
    metaTitle: 'Todas las Herramientas para Subtítulos SRT – srtconverters.info',
    metaDescription: 'Explore nuestra colección completa de herramientas rápidas en el navegador para convertir, extraer y formatear subtítulos SRT con total privacidad.',
    badge: 'Colección de Herramientas de Subtítulos',
    heading: 'Todas las Herramientas para Subtítulos SRT',
    description: 'Descubra nuestra selección completa de utilidades de subtítulos para navegador. Tanto si necesita extraer diálogos limpios, convertir a WebVTT o generar subtítulos con marcas de tiempo desde texto plano, todo se procesa de forma 100% local en su dispositivo.',
    toolCountLabel: '3 Herramientas Disponibles',
    openToolLabel: 'Abrir Herramienta',
    toolCategories: {
      'srt-to-txt': 'Extracción de Texto',
      'txt-to-srt': 'Generación de Subtítulos',
      'srt-to-vtt': 'Subtítulos Web y HTML5',
    },
  },
  ko: {
    metaTitle: '모든 SRT 및 자막 변환 도구 – srtconverters.info',
    metaDescription: '파일 업로드 없이 브라우저에서 안전하고 빠르게 SRT 자막을 변환, 추출 및 생성할 수 있는 모든 전용 도구를 한곳에서 확인하세요.',
    badge: '자막 변환 도구 모음',
    heading: '모든 SRT 및 자막 변환 도구',
    description: '브라우저에서 바로 사용할 수 있는 모든 SRT 자막 변환 유틸리티를 살펴보세요. SRT 파일에서 순수 텍스트를 추출하거나 WebVTT로 변환하고 일반 텍스트로 자막을 제작할 수 있으며, 모든 과정은 100% 사용자 기기에서 처리됩니다.',
    toolCountLabel: '3개 도구 제공',
    openToolLabel: '도구 열기',
    toolCategories: {
      'srt-to-txt': '텍스트 추출 및 정제',
      'txt-to-srt': '타임코드 및 자막 생성',
      'srt-to-vtt': '웹 자막 및 HTML5',
    },
  },
  vi: {
    metaTitle: 'Tất Cả Công Cụ Chuyển Đổi Phụ Đề & SRT – srtconverters.info',
    metaDescription: 'Khám phá toàn bộ các công cụ trực tuyến nhanh chóng giúp chuyển đổi, trích xuất và tạo tệp phụ đề SRT với bảo mật dữ liệu tuyệt đối.',
    badge: 'Bộ Công Cụ Phụ Đề Toàn Diện',
    heading: 'Tất Cả Công Cụ Chuyển Đổi Phụ Đề & SRT',
    description: 'Khám phá bộ sưu tập đầy đủ các công cụ phụ đề hoạt động trực tiếp trên trình duyệt. Cho dù bạn cần trích xuất văn bản, chuyển đổi sang WebVTT hay tạo phụ đề mới, tất cả đều được xử lý 100% trên thiết bị của bạn.',
    toolCountLabel: 'Hiện có 3 công cụ',
    openToolLabel: 'Mở Công Cụ',
    toolCategories: {
      'srt-to-txt': 'Trích Xuất Văn Bản',
      'txt-to-srt': 'Tạo Phụ Đề Tự Động',
      'srt-to-vtt': 'Phụ Đề Web & HTML5',
    },
  },
  id: {
    metaTitle: 'Semua Alat Konversi Subtitle & SRT – srtconverters.info',
    metaDescription: 'Jelajahi koleksi lengkap alat praktis berbasis browser untuk mengonversi, mengekstrak, dan membuat file subtitle SRT dengan privasi 100% lokal.',
    badge: 'Koleksi Alat Subtitle',
    heading: 'Semua Alat Konversi Subtitle & SRT',
    description: 'Temukan rangkaian lengkap alat subtitle berbasis browser kami. Baik Anda ingin mengekstrak teks dialog, mengonversi ke WebVTT untuk video HTML5, atau membuat subtitle bertempo dari teks biasa, seluruh proses berjalan 100% lokal di perangkat Anda.',
    toolCountLabel: '3 Alat Tersedia',
    openToolLabel: 'Buka Alat',
    toolCategories: {
      'srt-to-txt': 'Ekstraksi Teks',
      'txt-to-srt': 'Pembuatan Subtitle',
      'srt-to-vtt': 'Subtitle Web & HTML5',
    },
  },
  ja: {
    metaTitle: 'すべてのSRT・字幕変換ツール一覧 – srtconverters.info',
    metaDescription: 'サーバー送信なしで安全・高速にSRT字幕の変換・抽出・作成ができる、ブラウザ完結型の字幕ツールをまとめてご利用いただけます。',
    badge: '字幕変換ツールコレクション',
    heading: 'すべてのSRT・字幕変換ツール一覧',
    description: 'ブラウザ上で完結する便利なSRT字幕ツールの一覧です。SRTファイルからテキストを抽出したり、HTML5動画用WebVTTへ変換したり、テキストからSRT字幕を生成できます。すべての処理はお使いの端末内で100%安全に実行されます。',
    toolCountLabel: '3つのツールを提供中',
    openToolLabel: 'ツールを開く',
    toolCategories: {
      'srt-to-txt': 'テキスト抽出・除去',
      'txt-to-srt': '字幕生成・タイムスタンプ',
      'srt-to-vtt': 'Web字幕・HTML5',
    },
  },
  fr: {
    metaTitle: 'Tous les Outils pour Sous-Titres SRT – srtconverters.info',
    metaDescription: 'Découvrez notre sélection complète d\'outils en ligne pour convertir, extraire et générer vos fichiers de sous-titres SRT en toute confidentialité.',
    badge: 'Suite d\'Outils pour Sous-Titres',
    heading: 'Tous les Outils pour Sous-Titres SRT',
    description: 'Découvrez notre suite complète d\'outils pour sous-titres directement utilisables dans votre navigateur. Que vous ayez besoin d\'extraire le texte brut, de convertir en WebVTT ou de générer des sous-titres minutés, l\'ensemble du traitement est effectué à 100% sur votre appareil.',
    toolCountLabel: '3 Outils Disponibles',
    openToolLabel: 'Ouvrir l\'outil',
    toolCategories: {
      'srt-to-txt': 'Extraction de texte',
      'txt-to-srt': 'Génération de sous-titres',
      'srt-to-vtt': 'Sous-titres Web & HTML5',
    },
  },
  de: {
    metaTitle: 'Alle SRT- & Untertitel-Konverter im Überblick – srtconverters.info',
    metaDescription: 'Entdecken Sie alle schnellen, browserbasierten Werkzeuge zum Konvertieren, Extrahieren und Erstellen von SRT-Untertiteln – 100% datenschutzfreundlich.',
    badge: 'Untertitel-Werkzeugsammlung',
    heading: 'Alle SRT- & Untertitel-Konverter im Überblick',
    description: 'Entdecken Sie alle praktischen Untertitel-Werkzeuge für Ihren Browser. Ob Sie reinen Text extrahieren, in WebVTT umwandeln oder aus einem Skript fertige Untertitel erstellen möchten: Alle Vorgänge finden zu 100% lokal auf Ihrem Gerät statt.',
    toolCountLabel: '3 Werkzeuge Verfügbar',
    openToolLabel: 'Werkzeug öffnen',
    toolCategories: {
      'srt-to-txt': 'Text-Extraktion',
      'txt-to-srt': 'Untertitel-Erstellung',
      'srt-to-vtt': 'Web-Untertitel & HTML5',
    },
  },
  ar: {
    metaTitle: 'جميع أدوات تحويل وتعديل ملفات الترجمة SRT – srtconverters.info',
    metaDescription: 'تصفح مجموعتنا الكاملة من الأدوات السريعة والآمنة لتحويل واستخراج وإنشاء ملفات ترجمة SRT مباشرة في متصفحك وبخصوصية تامة.',
    badge: 'مجموعة أدوات الترجمة الشاملة',
    heading: 'جميع أدوات تحويل وتعديل ملفات الترجمة SRT',
    description: 'استكشف مجموعتنا المتكاملة من أدوات التعامل مع ملفات الترجمة SRT في متصفحك. سواء كنت بحاجة إلى استخراج النص النقي، أو التحويل إلى صيغة WebVTT لفيديو HTML5، أو إنشاء ملف ترجمة جديد، تتم المعالجة بالكامل بنسبة 100% محلياً على جهازك.',
    toolCountLabel: '3 أدوات متاحة حالياً',
    openToolLabel: 'فتح الأداة',
    toolCategories: {
      'srt-to-txt': 'استخراج النصوص',
      'txt-to-srt': 'توليد وتوقيت الترجمة',
      'srt-to-vtt': 'ترجمة الويب وفيديو HTML5',
    },
  },
};
