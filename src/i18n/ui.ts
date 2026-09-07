import type { Locale } from './locales';

export interface UiTranslations {
  siteName: string;
  tagline: string;
  skipToContent: string;
  nav: {
    home: string;
    tools: string;
    about: string;
    privacy: string;
    terms: string;
    contact: string;
    themeToggle: string;
    language: string;
  };
  footer: {
    aboutText: string;
    toolsHeading: string;
    legalHeading: string;
    aboutHeading: string;
    privacyPolicy: string;
    termsOfService: string;
    contact: string;
    sitemap: string;
    allRightsReserved: string;
    clientSideNotice: string;
  };
  breadcrumbs: {
    home: string;
    tools: string;
  };
  notFound: {
    badge: string;
    title: string;
    description: string;
    backHome: string;
    viewTools: string;
  };
  common: {
    readMore: string;
    backToHome: string;
    clientSideBadge: string;
    freeBadge: string;
    noUploadBadge: string;
  };
}

export const UI_STRINGS: Record<Locale, UiTranslations> = {
  en: {
    notFound: {
      badge: "404 Error",
      title: "Page Not Found",
      description: "The page you are looking for might have been moved, renamed, or is temporarily unavailable.",
      backHome: "Back to Homepage",
      viewTools: "Browse All Tools",
    },
    siteName: 'srtconverters.info',
    tagline: 'Fast, client-side subtitle and SRT conversion tools.',
    skipToContent: 'Skip to content',
    nav: {
      home: 'Home',
      tools: 'Tools',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
      themeToggle: 'Toggle theme',
      language: 'Language',
    },
    footer: {
      aboutText: 'Free, fast, and secure browser-based tools for subtitle and SRT file conversion. All processing happens 100% locally on your device.',
      toolsHeading: 'Subtitle Tools',
      legalHeading: 'Legal & Privacy',
      aboutHeading: 'About & Support',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      contact: 'Contact',
      sitemap: 'Sitemap',
      allRightsReserved: 'All rights reserved.',
      clientSideNotice: 'Client-side processing: your subtitle files never leave your browser.',
    },
    breadcrumbs: {
      home: 'Home',
      tools: 'Tools',
    },
    common: {
      readMore: 'Read more',
      backToHome: 'Back to homepage',
      clientSideBadge: '100% In-Browser',
      freeBadge: 'Free & Open',
      noUploadBadge: 'No File Uploads',
    },
  },
  pt: {
    notFound: {
      badge: "Erro 404",
      title: "Página Não Encontrada",
      description: "A página que você procura pode ter sido movida, renomeada ou está temporariamente indisponível.",
      backHome: "Voltar à Página Inicial",
      viewTools: "Ver Todas as Ferramentas",
    },
    siteName: 'srtconverters.info',
    tagline: 'Ferramentas rápidas e locais para conversão de legendas SRT.',
    skipToContent: 'Ir para o conteúdo',
    nav: {
      home: 'Início',
      tools: 'Ferramentas',
      about: 'Sobre',
      privacy: 'Privacidade',
      terms: 'Termos',
      contact: 'Contato',
      themeToggle: 'Alternar tema',
      language: 'Idioma',
    },
    footer: {
      aboutText: 'Ferramentas gratuitas, rápidas e seguras no navegador para converter legendas SRT. Todo o processamento ocorre 100% no seu dispositivo.',
      toolsHeading: 'Ferramentas de Legenda',
      legalHeading: 'Legal e Privacidade',
      aboutHeading: 'Sobre e Contato',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço',
      contact: 'Contato',
      sitemap: 'Mapa do Site',
      allRightsReserved: 'Todos os direitos reservados.',
      clientSideNotice: 'Processamento local: seus arquivos de legenda nunca saem do seu navegador.',
    },
    breadcrumbs: {
      home: 'Início',
      tools: 'Ferramentas',
    },
    common: {
      readMore: 'Ler mais',
      backToHome: 'Voltar à página inicial',
      clientSideBadge: '100% no Navegador',
      freeBadge: 'Gratuito',
      noUploadBadge: 'Sem Envio de Arquivos',
    },
  },
  es: {
    notFound: {
      badge: "Error 404",
      title: "Página No Encontrada",
      description: "La página que estás buscando pudo haber sido movida, renombrada o no estar disponible temporalmente.",
      backHome: "Volver a la Página Principal",
      viewTools: "Ver Todas las Herramientas",
    },
    siteName: 'srtconverters.info',
    tagline: 'Herramientas rápidas y seguras para convertir subtítulos SRT.',
    skipToContent: 'Saltar al contenido',
    nav: {
      home: 'Inicio',
      tools: 'Herramientas',
      about: 'Acerca de',
      privacy: 'Privacidad',
      terms: 'Términos',
      contact: 'Contacto',
      themeToggle: 'Cambiar tema',
      language: 'Idioma',
    },
    footer: {
      aboutText: 'Herramientas gratuitas, rápidas y seguras basadas en navegador para convertir subtítulos SRT. Todo el procesamiento ocurre 100% en su dispositivo.',
      toolsHeading: 'Herramientas de Subtítulos',
      legalHeading: 'Legal y Privacidad',
      aboutHeading: 'Acerca de y Soporte',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      contact: 'Contacto',
      sitemap: 'Mapa del Sitio',
      allRightsReserved: 'Todos los derechos reservados.',
      clientSideNotice: 'Procesamiento en el navegador: sus archivos de subtítulos nunca se suben a ningún servidor.',
    },
    breadcrumbs: {
      home: 'Inicio',
      tools: 'Herramientas',
    },
    common: {
      readMore: 'Leer más',
      backToHome: 'Volver al inicio',
      clientSideBadge: '100% en el Navegador',
      freeBadge: 'Gratis',
      noUploadBadge: 'Sin Subidas al Servidor',
    },
  },
  ko: {
    notFound: {
      badge: "404 오류",
      title: "페이지를 찾을 수 없습니다",
      description: "요청하신 페이지가 이동되었거나 이름이 변경되었거나 일시적으로 사용할 수 없습니다.",
      backHome: "홈페이지로 돌아가기",
      viewTools: "모든 도구 보기",
    },
    siteName: 'srtconverters.info',
    tagline: '빠르고 안전한 브라우저 기반 SRT 자막 변환 도구.',
    skipToContent: '본문 바로가기',
    nav: {
      home: '홈',
      tools: '도구',
      about: '소개',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      contact: '문의',
      themeToggle: '테마 변경',
      language: '언어',
    },
    footer: {
      aboutText: 'SRT 자막 파일 변환을 위한 무료이며 안전한 브라우저 기반 도구입니다. 모든 작업은 100% 사용자의 기기 내에서 처리됩니다.',
      toolsHeading: '자막 도구',
      legalHeading: '법적 고지 및 개인정보',
      aboutHeading: '소개 및 지원',
      privacyPolicy: '개인정보처리방침',
      termsOfService: '이용약관',
      contact: '문의하기',
      sitemap: '사이트맵',
      allRightsReserved: '모든 권리 보유.',
      clientSideNotice: '로컬 처리: 자막 파일이 서버로 전송되지 않습니다.',
    },
    breadcrumbs: {
      home: '홈',
      tools: '도구 목록',
    },
    common: {
      readMore: '더 알아보기',
      backToHome: '홈으로 돌아가기',
      clientSideBadge: '100% 브라우저 처리',
      freeBadge: '무료 사용',
      noUploadBadge: '파일 업로드 없음',
    },
  },
  vi: {
    notFound: {
      badge: "Lỗi 404",
      title: "Không Tìm Thấy Trang",
      description: "Trang bạn đang tìm kiếm có thể đã bị di chuyển, đổi tên hoặc tạm thời không khả dụng.",
      backHome: "Quay lại Trang chủ",
      viewTools: "Xem Tất cả Công cụ",
    },
    siteName: 'srtconverters.info',
    tagline: 'Công cụ chuyển đổi phụ đề SRT nhanh chóng, an toàn ngay trên trình duyệt.',
    skipToContent: 'Chuyển đến nội dung chính',
    nav: {
      home: 'Trang chủ',
      tools: 'Công cụ',
      about: 'Giới thiệu',
      privacy: 'Bảo mật',
      terms: 'Điều khoản',
      contact: 'Liên hệ',
      themeToggle: 'Đổi giao diện',
      language: 'Ngôn ngữ',
    },
    footer: {
      aboutText: 'Công cụ chuyển đổi phụ đề SRT miễn phí, nhanh chóng và an toàn chạy trực tiếp trên trình duyệt của bạn mà không cần tải lên máy chủ.',
      toolsHeading: 'Công cụ Phụ đề',
      legalHeading: 'Pháp lý & Bảo mật',
      aboutHeading: 'Giới thiệu & Hỗ trợ',
      privacyPolicy: 'Chính sách Bảo mật',
      termsOfService: 'Điều khoản Dịch vụ',
      contact: 'Liên hệ',
      sitemap: 'Sơ đồ trang web',
      allRightsReserved: 'Đã đăng ký bản quyền.',
      clientSideNotice: 'Xử lý cục bộ: tệp phụ đề của bạn không bao giờ rời khỏi trình duyệt.',
    },
    breadcrumbs: {
      home: 'Trang chủ',
      tools: 'Công cụ',
    },
    common: {
      readMore: 'Đọc thêm',
      backToHome: 'Quay lại trang chủ',
      clientSideBadge: '100% Trên trình duyệt',
      freeBadge: 'Miễn phí',
      noUploadBadge: 'Không tải tệp lên',
    },
  },
  id: {
    notFound: {
      badge: "Kesalahan 404",
      title: "Halaman Tidak Ditemukan",
      description: "Halaman yang Anda cari mungkin telah dipindahkan, diubah namanya, atau sementara tidak tersedia.",
      backHome: "Kembali ke Beranda",
      viewTools: "Lihat Semua Alat",
    },
    siteName: 'srtconverters.info',
    tagline: 'Alat konversi subtitle SRT yang cepat, aman, dan langsung di browser.',
    skipToContent: 'Lompat ke konten',
    nav: {
      home: 'Beranda',
      tools: 'Alat',
      about: 'Tentang',
      privacy: 'Privasi',
      terms: 'Ketentuan',
      contact: 'Kontak',
      themeToggle: 'Ganti tema',
      language: 'Bahasa',
    },
    footer: {
      aboutText: 'Alat gratis, cepat, dan aman berbasis peramban untuk mengonversi subtitle SRT. Semua pemrosesan berlangsung 100% di perangkat Anda.',
      toolsHeading: 'Alat Subtitle',
      legalHeading: 'Hukum & Privasi',
      aboutHeading: 'Tentang & Bantuan',
      privacyPolicy: 'Kebijakan Privasi',
      termsOfService: 'Ketentuan Layanan',
      contact: 'Kontak',
      sitemap: 'Peta Situs',
      allRightsReserved: 'Hak cipta dilindungi.',
      clientSideNotice: 'Pemrosesan lokal: berkas subtitle Anda tidak pernah diunggah ke server.',
    },
    breadcrumbs: {
      home: 'Beranda',
      tools: 'Alat',
    },
    common: {
      readMore: 'Baca selengkapnya',
      backToHome: 'Kembali ke beranda',
      clientSideBadge: '100% Di Peramban',
      freeBadge: 'Gratis',
      noUploadBadge: 'Tanpa Unggah Berkas',
    },
  },
  ja: {
    notFound: {
      badge: "404 エラー",
      title: "ページが見つかりません",
      description: "お探しのページは移動、名前の変更、または一時的に利用できない可能性があります。",
      backHome: "トップページに戻る",
      viewTools: "すべてのツールを見る",
    },
    siteName: 'srtconverters.info',
    tagline: 'ブラウザ上で安全かつ高速に動作するSRT字幕変換ツール。',
    skipToContent: 'コンテンツへスキップ',
    nav: {
      home: 'ホーム',
      tools: 'ツール',
      about: '概要',
      privacy: 'プライバシー',
      terms: '利用規約',
      contact: 'お問い合わせ',
      themeToggle: 'テーマ切替',
      language: '言語',
    },
    footer: {
      aboutText: 'SRT字幕ファイル変換のための無料・高速・安全なブラウザツール。すべての処理はお使いの端末内で100%ローカルに完結します。',
      toolsHeading: '字幕ツール',
      legalHeading: '規約とプライバシー',
      aboutHeading: '当サイトについて',
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約',
      contact: 'お問い合わせ',
      sitemap: 'サイトマップ',
      allRightsReserved: '無断転載を禁じます。',
      clientSideNotice: 'ローカル処理：字幕ファイルがサーバーに送信されることはありません。',
    },
    breadcrumbs: {
      home: 'ホーム',
      tools: 'ツール一覧',
    },
    common: {
      readMore: '詳細を見る',
      backToHome: 'トップページに戻る',
      clientSideBadge: '100%ブラウザ処理',
      freeBadge: '完全無料',
      noUploadBadge: 'ファイル送信なし',
    },
  },
  fr: {
    notFound: {
      badge: "Erreur 404",
      title: "Page Non Trouvée",
      description: "La page que vous recherchez a peut-être été déplacée, renommée ou est temporairement indisponible.",
      backHome: "Retour à l'Accueil",
      viewTools: "Voir Tous les Outils",
    },
    siteName: 'srtconverters.info',
    tagline: 'Outils rapides et sécurisés de conversion de sous-titres SRT dans le navigateur.',
    skipToContent: 'Passer au contenu',
    nav: {
      home: 'Accueil',
      tools: 'Outils',
      about: 'À propos',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      contact: 'Contact',
      themeToggle: 'Changer de thème',
      language: 'Langue',
    },
    footer: {
      aboutText: 'Outils gratuits, rapides et confidentiels basés sur le navigateur pour la conversion de sous-titres SRT. Le traitement s’exécute à 100 % sur votre appareil.',
      toolsHeading: 'Outils de Sous-titres',
      legalHeading: 'Légal & Confidentialité',
      aboutHeading: 'À propos & Support',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions d’Utilisation',
      contact: 'Contact',
      sitemap: 'Plan du Site',
      allRightsReserved: 'Tous droits réservés.',
      clientSideNotice: 'Traitement local : vos fichiers de sous-titres ne quittent jamais votre navigateur.',
    },
    breadcrumbs: {
      home: 'Accueil',
      tools: 'Outils',
    },
    common: {
      readMore: 'En savoir plus',
      backToHome: 'Retour à l’accueil',
      clientSideBadge: '100% Navigateur',
      freeBadge: 'Gratuit',
      noUploadBadge: 'Aucun Envoi de Fichier',
    },
  },
  de: {
    notFound: {
      badge: "404-Fehler",
      title: "Seite nicht gefunden",
      description: "Die von Ihnen gesuchte Seite wurde möglicherweise verschoben, umbenannt oder ist vorübergehend nicht erreichbar.",
      backHome: "Zurück zur Startseite",
      viewTools: "Alle Tools ansehen",
    },
    siteName: 'srtconverters.info',
    tagline: 'Schnelle, lokale Konvertierungswerkzeuge für SRT-Untertitel direkt im Browser.',
    skipToContent: 'Zum Inhalt springen',
    nav: {
      home: 'Startseite',
      tools: 'Werkzeuge',
      about: 'Über uns',
      privacy: 'Datenschutz',
      terms: 'AGB',
      contact: 'Kontakt',
      themeToggle: 'Design umschalten',
      language: 'Sprache',
    },
    footer: {
      aboutText: 'Kostenlose, schnelle und sichere Browser-Tools zur Umwandlung von SRT-Untertiteln. Die gesamte Verarbeitung findet zu 100 % lokal auf Ihrem Gerät statt.',
      toolsHeading: 'Untertitel-Tools',
      legalHeading: 'Rechtliches & Datenschutz',
      aboutHeading: 'Über uns & Kontakt',
      privacyPolicy: 'Datenschutzerklärung',
      termsOfService: 'Nutzungsbedingungen',
      contact: 'Kontakt',
      sitemap: 'Sitemap',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      clientSideNotice: 'Lokale Verarbeitung: Ihre Untertiteldateien verlassen niemals Ihren Browser.',
    },
    breadcrumbs: {
      home: 'Startseite',
      tools: 'Werkzeuge',
    },
    common: {
      readMore: 'Mehr erfahren',
      backToHome: 'Zurück zur Startseite',
      clientSideBadge: '100% im Browser',
      freeBadge: 'Kostenlos',
      noUploadBadge: 'Kein Datei-Upload',
    },
  },
  ar: {
    notFound: {
      badge: "خطأ 404",
      title: "الصفحة غير موجودة",
      description: "قد تكون الصفحة التي تبحث عنها قد نُقلت أو تم تغيير اسمها أو أنها غير متاحة مؤقتًا.",
      backHome: "العودة إلى الصفحة الرئيسية",
      viewTools: "عرض جميع الأدوات",
    },
    siteName: 'srtconverters.info',
    tagline: 'أدوات سريعة وآمنة لتحويل ملفات الترجمة SRT محلياً في متصفحك.',
    skipToContent: 'الانتقال إلى المحتوى الرئيسي',
    nav: {
      home: 'الرئيسية',
      tools: 'الأدوات',
      about: 'حول الموقع',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      contact: 'اتصل بنا',
      themeToggle: 'تبديل المظهر',
      language: 'اللغة',
    },
    footer: {
      aboutText: 'أدوات مجانية وسريعة وآمنة تعمل مباشرة داخل المتصفح لتحويل ملفات ترجمة SRT. تتم جميع العمليات بنسبة 100% على جهازك الشخصي.',
      toolsHeading: 'أدوات الترجمة',
      legalHeading: 'القانونية والخصوصية',
      aboutHeading: 'عن الموقع والدعم',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      contact: 'اتصل بنا',
      sitemap: 'خريطة الموقع',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      clientSideNotice: 'معالجة محلية: لا يتم رفع ملفات الترجمة إطلاقاً إلى أي خادم.',
    },
    breadcrumbs: {
      home: 'الرئيسية',
      tools: 'الأدوات',
    },
    common: {
      readMore: 'قراءة المزيد',
      backToHome: 'العودة إلى الصفحة الرئيسية',
      clientSideBadge: '100% داخل المتصفح',
      freeBadge: 'مجاني تماماً',
      noUploadBadge: 'لا يتم رفع الملفات',
    },
  },
};

export function getUi(locale: Locale): UiTranslations {
  return UI_STRINGS[locale] || UI_STRINGS.en;
}
