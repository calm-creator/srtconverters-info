import type { Locale } from '../i18n/locales';

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCta: string;
  toolsHeading: string;
  toolsSubtitle: string;
  howItWorksHeading: string;
  steps: Array<{ step: string; title: string; desc: string }>;
  featuresHeading: string;
  features: Array<{ title: string; desc: string }>;
  faqHeading: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const HOME_CONTENT: Record<Locale, HomeContent> = {
  en: {
    metaTitle: 'srtconverters.info – Fast, Private & Browser-Based SRT Tools',
    metaDescription: 'Free, client-side subtitle and SRT tools. Convert SRT to clean TXT text in your browser with zero file uploads and complete privacy.',
    heroBadge: '100% In-Browser & Private',
    heroTitle: 'Simple, Fast SRT Subtitle Tools',
    heroSubtitle: 'Clean, convert, and format SRT subtitle files directly in your web browser. Fast local processing with no server uploads, no accounts, and zero tracking.',
    primaryCta: 'Open SRT to TXT Converter',
    toolsHeading: 'Popular SRT Tools',
    toolsSubtitle: 'Explore our popular SRT tools for converting, editing, and working with subtitle files quickly and easily.',
    howItWorksHeading: 'How It Works',
    steps: [
      {
        step: '01',
        title: 'Choose a Tool',
        desc: 'Select the subtitle tool that fits your goal, such as extracting plain dialogue text.',
      },
      {
        step: '02',
        title: 'Drop Your Subtitle File',
        desc: 'Add your .srt file. Parsing executes instantly in local browser memory without uploading.',
      },
      {
        step: '03',
        title: 'Download the Result',
        desc: 'Inspect the preview, adjust formatting options, and download your converted file right away.',
      },
    ],
    featuresHeading: 'Why Choose srtconverters.info?',
    features: [
      {
        title: 'True Client-Side Privacy',
        desc: 'Your files are processed 100% locally via Web APIs. No subtitle data ever touches an external server.',
      },
      {
        title: 'Blazing Fast Speed',
        desc: 'Without network transfer bottlenecks, subtitle conversion finishes in milliseconds.',
      },
      {
        title: 'Full Unicode & International Support',
        desc: 'Handles UTF-8 subtitle files seamlessly across English, Asian, European, and RTL Arabic scripts.',
      },
      {
        title: 'Accessible & Lightweight',
        desc: 'Built with minimal web standards and zero heavy framework bloat for maximum mobile performance.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is srtconverters.info?',
        answer: 'srtconverters.info is a privacy-first web platform offering fast, browser-based tools for subtitle and SRT file conversion.',
      },
      {
        question: 'Do my subtitle files get uploaded to your servers?',
        answer: 'No. All conversions happen entirely on your computer or phone using client-side JavaScript. We never see or store your files.',
      },
      {
        question: 'What tools are currently available?',
        answer: 'Currently, the SRT to TXT Converter and TXT to SRT Converter are active. Additional subtitle tools are being developed following the same lightweight, private architecture.',
      },
      {
        question: 'Is this service free to use?',
        answer: 'Yes, it is completely free with no registration, subscription, or usage caps.',
      },
      {
        question: 'What is an SRT file and how does it work?',
        answer: 'An SRT (SubRip Subtitle) file is a plain-text file containing subtitle text paired with sequential cue numbers and precise start and end timestamps (hours:minutes:seconds,milliseconds) that instruct video players when to display each line.',
      },
      {
        question: 'How do I open and edit an SRT file?',
        answer: 'Because SRT files are simple plain text, you can open and edit them using any basic text editor such as Notepad on Windows or TextEdit on Mac, or use dedicated browser tools like our converters to adjust text and timing without corrupting formatting.',
      },
      {
        question: 'How do I make an SRT subtitle file work with my video player?',
        answer: 'Place the .srt file in the exact same folder as your video file and give it the exact same filename (for example, video.mp4 and video.srt). Media players like VLC, Windows Media Player, and smart TVs will automatically detect and display the subtitle track.',
      },
      {
        question: 'Why are my subtitles out of sync with the video?',
        answer: 'Out-of-sync subtitles usually occur when the subtitle framerate differs from the video, or when the video has different intro/commercial cuts. You can temporarily adjust subtitle delays in media players like VLC using hotkeys (G and H), or generate aligned timestamps from scratch using our TXT to SRT converter.',
      },
      {
        question: 'Can I convert an SRT subtitle file to clean plain text?',
        answer: 'Yes. Our SRT to TXT Converter extracts the dialogue text by automatically stripping out all sequential numbers, timecodes, and HTML formatting tags, giving you clean text ready for reading, translation, or notes.',
      },
      {
        question: 'Is an SRT file safe?',
        answer: 'Yes, genuine SRT files are completely safe. Because they are plain-text files containing only sequential numbers, timestamps, and subtitles, they cannot contain or execute malicious code or viruses. Just ensure the file extension is genuinely .srt and not a disguised program like .srt.exe.',
      },
    ],
  },
  pt: {
    metaTitle: 'srtconverters.info – Ferramentas Rápidas e Privadas para Legendas SRT',
    metaDescription: 'Ferramentas de legenda e arquivos SRT no navegador. Converta SRT para texto TXT limpo sem envio de arquivos e com privacidade total.',
    heroBadge: '100% no Navegador e Privado',
    heroTitle: 'Ferramentas Simples e Rápidas para Legendas SRT',
    heroSubtitle: 'Limpe, converta e formate arquivos de legenda SRT diretamente no seu navegador. Processamento local rápido sem envio para servidores e sem cadastro.',
    primaryCta: 'Abrir Conversor SRT para TXT',
    toolsHeading: 'Ferramentas SRT Populares',
    toolsSubtitle: 'Explore nossas ferramentas SRT populares para converter, editar e trabalhar com arquivos de legenda de forma rápida e fácil.',
    howItWorksHeading: 'Como Funciona',
    steps: [
      {
        step: '01',
        title: 'Escolha a Ferramenta',
        desc: 'Selecione a ferramenta ideal, como a extração de diálogos limpos em TXT.',
      },
      {
        step: '02',
        title: 'Arraste o Arquivo',
        desc: 'Adicione o arquivo .srt. O processamento ocorre instantaneamente na memória do navegador.',
      },
      {
        step: '03',
        title: 'Baixe o Resultado',
        desc: 'Veja a prévia do texto e baixe seu arquivo limpo imediatamente.',
      },
    ],
    featuresHeading: 'Por que escolher srtconverters.info?',
    features: [
      {
        title: 'Privacidade Real no Cliente',
        desc: 'Seus arquivos são processados 100% no seu dispositivo. Nenhum dado é enviado para servidores externos.',
      },
      {
        title: 'Velocidade Extrema',
        desc: 'Sem atrasos de upload ou download em servidores, a conversão ocorre em milissegundos.',
      },
      {
        title: 'Suporte Completo a Unicode',
        desc: 'Compatível com caracteres especiais, acentos e múltiplos idiomas.',
      },
      {
        title: 'Leve e Acessível',
        desc: 'Construído com padrões modernos e sem scripts desnecessários para carregar instantaneamente.',
      },
    ],
    faqHeading: 'Perguntas Frequentes',
    faqs: [
      {
        question: 'O que é o srtconverters.info?',
        answer: 'É uma plataforma focada em privacidade com ferramentas no navegador para manipular legendas SRT.',
      },
      {
        question: 'Meus arquivos são enviados para servidores?',
        answer: 'Não. Todo o processamento ocorre no seu computador ou celular usando JavaScript local.',
      },
      {
        question: 'Quais ferramentas estão disponíveis atualmente?',
        answer: 'Atualmente, o Conversor SRT para TXT e o Conversor TXT para SRT estão ativos e disponíveis gratuitamente.',
      },
      {
        question: 'O serviço é gratuito?',
        answer: 'Sim, totalmente gratuito e sem necessidade de cadastro.',
      },
      {
        question: 'O que é um arquivo SRT e como ele funciona?',
        answer: 'Um arquivo SRT (SubRip Subtitle) é um arquivo de texto simples que contém as falas da legenda acompanhadas de números sequenciais e carimbos de tempo precisos (horas:minutos:segundos,milissegundos) que indicam ao reprodutor quando exibir cada legenda.',
      },
      {
        question: 'Como abrir e editar um arquivo SRT?',
        answer: 'Por ser texto simples, você pode abrir e editar um arquivo SRT no Bloco de Notas do Windows, no TextEdit do Mac ou usar nossas ferramentas online para converter e ajustar o texto sem estragar os tempos.',
      },
      {
        question: 'Como fazer uma legenda SRT funcionar no player de vídeo?',
        answer: 'Coloque o arquivo .srt na mesma pasta do vídeo e com exatamente o mesmo nome (por exemplo, filme.mp4 e filme.srt). Reprodutores como o VLC e smart TVs carregarão a legenda automaticamente.',
      },
      {
        question: 'Por que as legendas estão fora de sincronia com o vídeo?',
        answer: 'Isso geralmente ocorre quando a taxa de quadros (FPS) da legenda é diferente da do vídeo ou se há cortes diferentes no início. Você pode ajustar o atraso no player (teclas G e H no VLC) ou regerar os tempos com nosso conversor TXT para SRT.',
      },
      {
        question: 'Posso converter uma legenda SRT em texto simples?',
        answer: 'Sim. Nosso conversor SRT para TXT extrai todo o diálogo limpo removendo automaticamente números, carimbos de data/hora e tags de formatação em segundos.',
      },
      {
        question: 'Um arquivo SRT é seguro?',
        answer: 'Sim, arquivos SRT autênticos são totalmente seguros. Por serem arquivos de texto simples que contêm apenas números de sequência, carimbos de data/hora e legendas, eles não podem conter nem executar códigos maliciosos ou vírus. Apenas certifique-se de que a extensão seja realmente .srt e não um programa camuflado como .srt.exe.',
      },
    ],
  },
  es: {
    metaTitle: 'srtconverters.info – Herramientas Rápidas y Privadas para Subtítulos SRT',
    metaDescription: 'Herramientas de subtítulos SRT en el navegador. Convierta SRT a TXT limpio sin subir archivos y con total privacidad.',
    heroBadge: '100% en el Navegador y Seguro',
    heroTitle: 'Herramientas Simples y Rápidas para Subtítulos SRT',
    heroSubtitle: 'Limpie, convierta y dé formato a archivos de subtítulos SRT directamente en su navegador. Procesamiento local rápido sin servidores y sin registros.',
    primaryCta: 'Abrir Convertidor SRT a TXT',
    toolsHeading: 'Herramientas SRT Populares',
    toolsSubtitle: 'Explore nuestras herramientas SRT populares para convertir, editar y trabajar con subtítulos de forma rápida y sencilla.',
    howItWorksHeading: 'Cómo Funciona',
    steps: [
      {
        step: '01',
        title: 'Seleccione la Herramienta',
        desc: 'Elija la herramienta que necesita, como la extracción de texto a TXT.',
      },
      {
        step: '02',
        title: 'Cargue el Archivo',
        desc: 'Suelte su archivo .srt. La lectura se ejecuta al instante en el navegador.',
      },
      {
        step: '03',
        title: 'Descargue el Resultado',
        desc: 'Revise la vista previa y guarde el texto limpio en su dispositivo.',
      },
    ],
    featuresHeading: '¿Por qué elegir srtconverters.info?',
    features: [
      {
        title: 'Privacidad Absoluta',
        desc: 'Sus archivos se procesan 100% localmente. Ningún dato viaja por la red.',
      },
      {
        title: 'Velocidad Instantánea',
        desc: 'Sin esperas de transferencia de red, la conversión finaliza en milisegundos.',
      },
      {
        title: 'Soporte Multilingüe',
        desc: 'Soporta codificación UTF-8 para todos los idiomas y caracteres especiales.',
      },
      {
        title: 'Diseño Ligero',
        desc: 'Optimizado para máxima velocidad y navegación móvil sin librerías pesadas.',
      },
    ],
    faqHeading: 'Preguntas Frecuentes',
    faqs: [
      {
        question: '¿Qué es srtconverters.info?',
        answer: 'Una plataforma web de utilidades para subtítulos procesadas en el propio navegador.',
      },
      {
        question: '¿Se suben los archivos a la nube?',
        answer: 'No. El procesamiento es completamente local en su navegador.',
      },
      {
        question: '¿Qué herramientas están disponibles actualmente?',
        answer: 'Actualmente, el Convertidor de SRT a TXT y el Convertidor de TXT a SRT están activos y disponibles de forma gratuita.',
      },
      {
        question: '¿Es gratuito?',
        answer: 'Sí, 100% gratuito sin registro ni límites de uso.',
      },
      {
        question: '¿Qué es un archivo SRT y cómo funciona?',
        answer: 'Un archivo SRT (SubRip Subtitle) es un archivo de texto sin formato que almacena las líneas de diálogo junto con números de secuencia y marcas de tiempo de inicio y fin (horas:minutos:segundos,milisegundos) que indican al reproductor cuándo mostrar cada subtítulo.',
      },
      {
        question: '¿Cómo abrir y editar un archivo SRT?',
        answer: 'Dado que los archivos SRT son texto plano, puede abrirlos y modificarlos con el Bloc de notas de Windows, TextEdit en Mac o utilizar nuestras herramientas en el navegador para extraer y editar el texto sin alterar la sincronización.',
      },
      {
        question: '¿Cómo hacer que un archivo SRT funcione con un reproductor de video?',
        answer: 'Guarde el archivo .srt en la misma carpeta que su archivo de video con exactamente el mismo nombre (por ejemplo, pelicula.mp4 y pelicula.srt). Reproductores como VLC, Windows Media Player o Smart TVs detectarán y mostrarán los subtítulos automáticamente.',
      },
      {
        question: '¿Por qué los subtítulos están desfasados o desincronizados con el video?',
        answer: 'La falta de sincronización suele ocurrir cuando la velocidad de fotogramas del subtítulo no coincide con el video o cuando existen intros o cortes diferentes. Puede corregir el desfase en su reproductor (teclas G y H en VLC) o generar nuevos tiempos con nuestro conversor de TXT a SRT.',
      },
      {
        question: '¿Puedo convertir un archivo SRT en texto limpio sin marcas de tiempo?',
        answer: 'Sí. Nuestro convertidor de SRT a TXT elimina automáticamente los números de bloque, los códigos de tiempo y las etiquetas HTML para entregarle un texto limpio listo para leer, traducir o estudiar.',
      },
      {
        question: '¿Es seguro un archivo SRT?',
        answer: 'Sí, los archivos SRT auténticos son completamente seguros. Al ser archivos de texto plano que solo contienen números de secuencia, marcas de tiempo y subtítulos, no pueden contener ni ejecutar código malicioso o virus. Solo asegúrate de que la extensión sea realmente .srt y no un ejecutable camuflado como .srt.exe.',
      },
    ],
  },
  ko: {
    metaTitle: 'srtconverters.info – 빠르고 안전한 브라우저 기반 SRT 자막 도구',
    metaDescription: '무료 브라우저 기반 SRT 자막 도구. 파일 업로드 없이 브라우저 내에서 SRT를 깨끗한 TXT 텍스트로 즉시 변환하세요.',
    heroBadge: '100% 브라우저 로컬 처리 & 개인정보 보호',
    heroTitle: '쉽고 빠른 SRT 자막 변환 도구',
    heroSubtitle: '웹 브라우저에서 직접 SRT 자막 파일을 정리, 변환 및 편집하세요. 서버 업로드나 회원가입 없이 완벽한 로컬 처리를 제공합니다.',
    primaryCta: 'SRT TXT 변환기 열기',
    toolsHeading: '인기 SRT 자막 도구',
    toolsSubtitle: '빠르고 간편하게 자막 파일을 변환, 편집 및 제작할 수 있는 인기 SRT 도구를 만나보세요.',
    howItWorksHeading: '이용 방법',
    steps: [
      {
        step: '01',
        title: '도구 선택',
        desc: 'SRT 대본 추출 등 원하는 자막 도구를 선택합니다.',
      },
      {
        step: '02',
        title: '자막 파일 드래그',
        desc: '.srt 파일을 올리면 브라우저 메모리에서 즉시 분석됩니다.',
      },
      {
        step: '03',
        title: '결과 다운로드',
        desc: '미리보기를 확인하고 .txt 파일로 바로 저장합니다.',
      },
    ],
    featuresHeading: 'srtconverters.info의 특별한 점',
    features: [
      {
        title: '완벽한 개인정보 보호',
        desc: '파일이 서버로 전송되지 않고 사용자의 기기 안에서만 작동합니다.',
      },
      {
        title: '초고속 변환 속도',
        desc: '네트워크 업로드 지연 없이 밀리초 단위로 변환이 완료됩니다.',
      },
      {
        title: '다국어 및 유니코드 지원',
        desc: '한국어를 비롯한 전 세계 모든 언어의 자막을 글자 깨짐 없이 처리합니다.',
      },
      {
        title: '가볍고 쾌적한 환경',
        desc: '불필요한 프레임워크와 광고 스크립트를 배제하여 최고의 모바일 속도를 보장합니다.',
      },
    ],
    faqHeading: '자주 묻는 질문',
    faqs: [
      {
        question: 'srtconverters.info는 어떤 사이트인가요?',
        answer: '자막 파일을 브라우저에서 안전하고 빠르게 변환할 수 있는 웹 도구 플랫폼입니다.',
      },
      {
        question: '자막 파일이 서버로 업로드되나요?',
        answer: '아닙니다. 모든 과정은 100% 사용자의 브라우저 내에서만 실행됩니다.',
      },
      {
        question: '현재 어떤 도구들을 이용할 수 있나요?',
        answer: '현재 SRT to TXT 변환기와 TXT to SRT 변환기를 무료로 자유롭게 이용하실 수 있습니다.',
      },
      {
        question: '이용 요금이 있나요?',
        answer: '완전 무료이며 로그인 없이 자유롭게 이용하실 수 있습니다.',
      },
      {
        question: 'SRT 파일이란 무엇이며 어떻게 작동하나요?',
        answer: 'SRT(SubRip Subtitle) 파일은 자막 대사와 함께 순서 번호 및 정확한 시작·종료 타임스탬프(시:분:초,밀리초)가 기록된 표준 텍스트 기반 자막 파일로, 동영상 재생 시 화면에 표시되는 시점을 제어합니다.',
      },
      {
        question: 'SRT 파일은 어떻게 열고 편집할 수 있나요?',
        answer: 'SRT 파일은 일반 텍스트 파일이므로 윈도우 메모장이나 맥 텍스트편집기 등으로 쉽게 열어볼 수 있으며, 웹 도구를 이용해 타임코드를 손상시키지 않고 대사를 추출하거나 수정할 수 있습니다.',
      },
      {
        question: '동영상 플레이어에서 SRT 자막을 재생하려면 어떻게 해야 하나요?',
        answer: '동영상 파일과 .srt 자막 파일을 같은 폴더에 넣고 두 파일의 이름을 동일하게 맞추면(예: movie.mp4와 movie.srt), 팟플레이어, VLC, 스마트 TV 등에서 자막이 자동으로 감지되어 함께 재생됩니다.',
      },
      {
        question: '자막 싱크가 영상과 맞지 않는 이유는 무엇인가요?',
        answer: '자막의 프레임 레이트가 영상과 다르거나 인트로 부분의 차이로 인해 싱크 밀림이 발생할 수 있습니다. 플레이어 내 단축키로 싱크를 조절하거나, TXT to SRT 변환기를 사용해 타임스탬프를 새롭게 생성할 수 있습니다.',
      },
      {
        question: 'SRT 자막에서 타임스탬프를 제거하고 순수 텍스트만 추출할 수 있나요?',
        answer: '네, 저희 SRT to TXT 변환기를 이용하시면 자막 번호, 타임코드, 서식 태그를 자동으로 완전히 제거하여 깔끔한 대본 텍스트로 즉시 변환할 수 있습니다.',
      },
      {
        question: 'SRT 자막 파일은 안전한가요?',
        answer: '네, 순수한 SRT 파일은 완전히 안전합니다. 자막 순번, 타임스탬프, 자막 텍스트만 포함된 순수 텍스트 파일이므로 악성 코드나 바이러스를 포함하거나 실행할 수 없습니다. 단, 파일 확장자가 .srt.exe처럼 위장된 프로그램이 아닌 실제 .srt인지 확인하세요.',
      },
    ],
  },
  vi: {
    metaTitle: 'srtconverters.info – Công Cụ Phụ Đề SRT Nhanh & Bảo Mật Trên Trình Duyệt',
    metaDescription: 'Công cụ phụ đề SRT miễn phí trên trình duyệt. Chuyển SRT sang TXT sạch mà không cần tải tệp lên máy chủ.',
    heroBadge: '100% Trên Trình Duyệt & Bảo Mật',
    heroTitle: 'Công Cụ Phụ Đề SRT Đơn Giản & Nhanh Chóng',
    heroSubtitle: 'Chuyển đổi và định dạng tệp phụ đề SRT trực tiếp trong trình duyệt web của bạn. Xử lý cục bộ cực nhanh, không cần đăng ký và không tải tệp lên máy chủ.',
    primaryCta: 'Mở Công Cụ Chuyển SRT sang TXT',
    toolsHeading: 'Công Cụ SRT Phổ Biến',
    toolsSubtitle: 'Khám phá các công cụ SRT phổ biến giúp bạn chuyển đổi, chỉnh sửa và xử lý tệp phụ đề nhanh chóng và dễ dàng.',
    howItWorksHeading: 'Quy Trình Hoạt Động',
    steps: [
      {
        step: '01',
        title: 'Chọn Công Cụ',
        desc: 'Lựa chọn công cụ phù hợp như chuyển đổi phụ đề sang văn bản TXT.',
      },
      {
        step: '02',
        title: 'Tải Tệp Lên',
        desc: 'Kéo thả tệp .srt vào. Quá trình xử lý diễn ra ngay trong bộ nhớ trình duyệt.',
      },
      {
        step: '03',
        title: 'Lưu Kết Quả',
        desc: 'Xem trước văn bản và bấm tải về tệp .txt ngay lập tức.',
      },
    ],
    featuresHeading: 'Tại sao chọn srtconverters.info?',
    features: [
      {
        title: 'Bảo Mật Tuyệt Đối',
        desc: 'Tệp của bạn không bao giờ rời khỏi thiết bị cá nhân.',
      },
      {
        title: 'Tốc Độ Vượt Trội',
        desc: 'Không mất thời gian tải dữ liệu qua mạng internet.',
      },
      {
        title: 'Hỗ Trợ Tiếng Việt Đầy Đủ',
        desc: 'Xử lý hoàn hảo font chữ tiếng Việt có dấu mà không bị lỗi hiển thị.',
      },
      {
        title: 'Tối Giản & Nhẹ Nhàng',
        desc: 'Tối ưu hóa tuyệt đối giúp duyệt web mượt mà trên mọi thiết bị di động.',
      },
    ],
    faqHeading: 'Câu Hỏi Thường Gặp',
    faqs: [
      {
        question: 'srtconverters.info là gì?',
        answer: 'Nền tảng công cụ xử lý phụ đề SRT an toàn và nhanh chóng trên trình duyệt.',
      },
      {
        question: 'Tệp có bị tải lên máy chủ không?',
        answer: 'Không. Toàn bộ thao tác chỉ diễn ra trong trình duyệt của bạn.',
      },
      {
        question: 'Hiện có những công cụ nào đang hoạt động?',
        answer: 'Hiện tại, công cụ Chuyển SRT sang TXT và Chuyển TXT sang SRT đã sẵn sàng để sử dụng hoàn toàn miễn phí.',
      },
      {
        question: 'Dịch vụ có tính phí không?',
        answer: 'Hoàn toàn miễn phí 100% và không cần tài khoản.',
      },
      {
        question: 'Tệp SRT là gì và hoạt động như thế nào?',
        answer: 'Tệp SRT (SubRip Subtitle) là định dạng văn bản thuần túy chứa lời thoại phụ đề cùng các số thứ tự và mốc thời gian bắt đầu - kết thúc chi tiết (giờ:phút:giây,mili giây) để trình phát video hiển thị đúng lúc.',
      },
      {
        question: 'Làm thế nào để mở và chỉnh sửa tệp SRT?',
        answer: 'Bạn có thể mở tệp SRT bằng các trình soạn thảo cơ bản như Notepad trên Windows, TextEdit trên Mac hoặc dùng các công cụ trực tuyến của chúng tôi để chỉnh sửa nội dung nhanh chóng.',
      },
      {
        question: 'Làm cách nào để phát phụ đề SRT cùng với video?',
        answer: 'Đặt tệp phụ đề .srt chung thư mục với tệp video và đặt cùng tên (ví dụ: video.mp4 và video.srt). Các trình phát như VLC, KMPlayer hoặc TV thông minh sẽ tự động tải phụ đề.',
      },
      {
        question: 'Tại sao phụ đề bị lệch thời gian so với video?',
        answer: 'Hiện tượng lệch phụ đề thường do tốc độ khung hình (FPS) khác biệt hoặc đoạn mở đầu video không khớp. Bạn có thể điều chỉnh độ trễ trên trình phát (phím G, H trên VLC) hoặc tạo lại mốc thời gian mới bằng công cụ TXT sang SRT.',
      },
      {
        question: 'Tôi có thể chuyển đổi tệp SRT thành văn bản thuần túy không?',
        answer: 'Có. Công cụ chuyển đổi SRT sang TXT của chúng tôi tự động xóa bỏ toàn bộ số thứ tự, mốc thời gian và thẻ định dạng để bạn có ngay đoạn văn bản sạch.',
      },
      {
        question: 'Tệp SRT có an toàn không?',
        answer: 'Có, các tệp SRT chuẩn hoàn toàn an toàn. Vì chúng là tệp văn bản thuần chỉ chứa số thứ tự, mốc thời gian và phụ đề, nên chúng không thể chứa hoặc thực thi mã độc hay virus. Bạn chỉ cần đảm bảo phần mở rộng tệp thực sự là .srt chứ không phải chương trình giả mạo như .srt.exe.',
      },
    ],
  },
  id: {
    metaTitle: 'srtconverters.info – Alat Subtitle SRT Cepat & Aman di Browser',
    metaDescription: 'Alat subtitle SRT gratis langsung di browser. Ubah SRT ke teks TXT bersih tanpa unggah berkas dan dengan privasi penuh.',
    heroBadge: '100% di Peramban & Aman',
    heroTitle: 'Alat Subtitle SRT Sederhana & Cepat',
    heroSubtitle: 'Bersihkan dan konversi file subtitle SRT langsung di browser web Anda. Pemrosesan lokal yang cepat tanpa unggah server dan tanpa akun.',
    primaryCta: 'Buka Konverter SRT ke TXT',
    toolsHeading: 'Alat SRT Populer',
    toolsSubtitle: 'Jelajahi alat SRT populer kami untuk mengonversi, mengedit, dan mengelola file subtitle dengan cepat dan mudah.',
    howItWorksHeading: 'Cara Kerja',
    steps: [
      {
        step: '01',
        title: 'Pilih Alat',
        desc: 'Pilih alat subtitle yang sesuai dengan kebutuhan Anda.',
      },
      {
        step: '02',
        title: 'Tarik File SRT',
        desc: 'Masukkan file .srt. Pemrosesan berlangsung instan di browser Anda.',
      },
      {
        step: '03',
        title: 'Unduh Teks',
        desc: 'Periksa hasil pratinjau dan unduh file teks bersih seketika.',
      },
    ],
    featuresHeading: 'Kelebihan srtconverters.info',
    features: [
      {
        title: 'Privasi Lokal Penuh',
        desc: 'File tidak pernah diunggah ke server mana pun.',
      },
      {
        title: 'Kecepatan Tinggi',
        desc: 'Konversi tuntas dalam hitungan milidetik tanpa kendala jaringan.',
      },
      {
        title: 'Mendukung Semua Bahasa',
        desc: 'Kompatibel dengan teks berstandar Unicode UTF-8 secara utuh.',
      },
      {
        title: 'Ringan & Responsif',
        desc: 'Desain bersih dan hemat memori untuk kenyamanan pengguna ponsel.',
      },
    ],
    faqHeading: 'Pertanyaan Umum',
    faqs: [
      {
        question: 'Apa itu srtconverters.info?',
        answer: 'Platform web yang menyediakan utilitas konversi subtitle berbasis peramban.',
      },
      {
        question: 'Apakah file saya aman?',
        answer: 'Sangat aman karena pemrosesan tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Alat apa saja yang saat ini tersedia?',
        answer: 'Saat ini Konverter SRT ke TXT dan Konverter TXT ke SRT tersedia dan dapat digunakan secara gratis.',
      },
      {
        question: 'Apakah ada biaya pemakaian?',
        answer: 'Layanan ini gratis sepenuhnya untuk siapa saja.',
      },
      {
        question: 'Apa itu file SRT dan bagaimana cara kerjanya?',
        answer: 'File SRT (SubRip Subtitle) adalah file teks biasa yang memuat baris dialog subtitle disertai urutan angka dan penanda waktu (jam:menit:detik,milidetik) yang memberi tahu pemutar video kapan teks harus dimunculkan.',
      },
      {
        question: 'Bagaimana cara membuka dan mengedit file SRT?',
        answer: 'Karena formatnya adalah teks biasa, Anda dapat membukanya menggunakan Notepad di Windows, TextEdit di Mac, atau memakai alat konversi kami untuk mengolah teksnya dengan mudah.',
      },
      {
        question: 'Bagaimana cara memutar subtitle SRT bersama video?',
        answer: 'Simpan file .srt dalam folder yang sama dengan file video dan beri nama yang persis sama (misal: film.mp4 dan film.srt). Pemutar media seperti VLC dan Smart TV akan otomatis mendeteksi subtitle tersebut.',
      },
      {
        question: 'Mengapa subtitle tidak pas atau tidak sinkron dengan video?',
        answer: 'Ketidaksinkronan biasanya terjadi karena perbedaan framerate video atau versi potongan video yang berbeda. Anda bisa menyesuaikan delay di pemutar media (tombol G dan H di VLC) atau membuat ulang timing dengan konverter TXT ke SRT kami.',
      },
      {
        question: 'Bisakah saya mengubah file SRT menjadi teks biasa tanpa penanda waktu?',
        answer: 'Bisa. Konverter SRT ke TXT kami secara otomatis menghapus nomor urut, kode waktu, dan tag format, menghasilkan teks percakapan yang bersih untuk dibaca atau diterjemahkan.',
      },
      {
        question: 'Apakah file SRT aman?',
        answer: 'Ya, file SRT asli sepenuhnya aman. Karena merupakan file teks biasa yang hanya berisi nomor urut, penanda waktu, dan teks terjemahan, file ini tidak dapat memuat atau menjalankan kode berbahaya maupun virus. Cukup pastikan ekstensi file benar-benar .srt dan bukan file program yang disamarkan seperti .srt.exe.',
      },
    ],
  },
  ja: {
    metaTitle: 'srtconverters.info – ブラウザ上で完結する高速・安全なSRT字幕ツール',
    metaDescription: '完全無料・ローカル処理のSRT字幕ツール。サーバー送信なしでSRTファイルをテキスト（TXT）へ安全に抽出変換します。',
    heroBadge: '100% ブラウザ完結・完全プライベート',
    heroTitle: 'シンプルで高速なSRT字幕ツール',
    heroSubtitle: 'ブラウザ上でSRT字幕ファイルを素早く編集・変換。サーバーへのファイル送信や会員登録は一切不要で、プライバシーを厳格に保護します。',
    primaryCta: 'SRT TXT 変換ツールを開く',
    toolsHeading: '人気のSRT字幕ツール',
    toolsSubtitle: '字幕ファイルの変換・編集・作成を素早く簡単に行える、人気のSRTツールをご利用ください。',
    howItWorksHeading: 'ご利用の流れ',
    steps: [
      {
        step: '01',
        title: 'ツールを選択',
        desc: 'SRTからテキストへの変換など、用途に応じたツールを選びます。',
      },
      {
        step: '02',
        title: 'ファイルを配置',
        desc: '.srtファイルをドラッグ＆ドロップすると、即座にローカルで解析されます。',
      },
      {
        step: '03',
        title: 'テキストを保存',
        desc: 'プレビューを確認後、すぐにTXT形式でダウンロードできます。',
      },
    ],
    featuresHeading: 'srtconverters.info が選ばれる理由',
    features: [
      {
        title: '完全な端末内処理',
        desc: 'ファイルデータはサーバーに一切送信されず、お使いの端末内でのみ処理されます。',
      },
      {
        title: '圧倒的な処理速度',
        desc: 'アップロード待ち時間ゼロ。一瞬で字幕データの整形が完了します。',
      },
      {
        title: 'Unicode・日本語完全対応',
        desc: 'UTF-8エンコードに対応し、日本語の文字化けの心配もありません。',
      },
      {
        title: '軽量＆高速表示',
        desc: '余計なスクリプトを排除し、スマートフォンでも軽快に動作します。',
      },
    ],
    faqHeading: 'よくあるご質問',
    faqs: [
      {
        question: 'srtconverters.infoとは何ですか？',
        answer: 'ブラウザ上で安心かつ高速に字幕ファイルを変換・編集できるツールサイトです。',
      },
      {
        question: '字幕データがサーバーに記録されることはありますか？',
        answer: 'いいえ。すべての処理はブラウザ内で完結し、サーバーへ送信されることはありません。',
      },
      {
        question: '現在どのようなツールが利用可能ですか？',
        answer: '現在、「SRT to TXT 変換ツール」および「TXT to SRT 変換ツール」をご利用いただけます。',
      },
      {
        question: '無料で使えますか？',
        answer: 'はい、すべての機能を完全無料でご利用いただけます。',
      },
      {
        question: 'SRTファイルとは何ですか？どのような仕組みですか？',
        answer: 'SRT（SubRip Subtitle）ファイルは、字幕番号、タイムコード（時間:分:秒,ミリ秒）、字幕本文で構成される最も汎用的なテキスト形式の字幕ファイルです。動画プレーヤーがタイムコードを読み取り、指定のタイミングで字幕を表示します。',
      },
      {
        question: 'SRTファイルを開いて編集するにはどうすればいいですか？',
        answer: 'SRTファイルはプレーンテキスト形式のため、Windowsのメモ帳やMacのテキストエディットなどで直接開いて編集できます。また、弊社のオンラインツールを使えば、タイムスタンプを保ったままテキストの抽出や作成が簡単に行えます。',
      },
      {
        question: '動画プレーヤーでSRT字幕を表示させる方法は？',
        answer: '動画ファイルと同じフォルダ内に、動画とまったく同じファイル名で.srtファイルを保存してください（例：video.mp4 と video.srt）。VLCプレーヤーやテレビなどの再生機器が自動で字幕を認識します。',
      },
      {
        question: '字幕のタイミング（ズレ）が合わない原因は何ですか？',
        answer: '動画と字幕ファイルでフレームレートや冒頭のカットが異なる場合にズレが生じます。VLCなどのショートカット（G/Hキー）で調整するか、TXT to SRTツールで適切なタイムスタンプを再生成してください。',
      },
      {
        question: 'SRTファイルから時間情報を消してテキストだけを抽出できますか？',
        answer: 'はい。当サイトの「SRT TXT 変換ツール」をご利用いただくことで、番号やタイムコード、HTML装飾タグを自動で取り除き、きれいな本文テキストのみを瞬時に書き出せます。',
      },
      {
        question: 'SRTファイルは安全ですか？',
        answer: 'はい、正規のSRTファイルは完全に安全です。シーケンス番号、タイムスタンプ、字幕テキストのみを含むプレーンテキストファイルであるため、悪意のあるコードやウイルスを含んだり実行したりすることはできません。ファイルの拡張子が .srt.exe のような偽装プログラムではなく、正真正銘の .srt であることだけをご確認ください。',
      },
    ],
  },
  fr: {
    metaTitle: 'srtconverters.info – Outils de Sous-titres SRT Rapides & Confidentiels',
    metaDescription: 'Outils SRT gratuits dans le navigateur. Convertissez vos sous-titres en texte brut sans transfert de fichier et en toute confidentialité.',
    heroBadge: '100% dans le Navigateur & Confidentiel',
    heroTitle: 'Outils Simples et Rapides pour Sous-titres SRT',
    heroSubtitle: 'Nettoyez, convertissez et mettez en forme vos fichiers de sous-titres SRT directement dans votre navigateur. Traitement local rapide, sans serveur ni inscription.',
    primaryCta: 'Ouvrir le Convertisseur SRT en TXT',
    toolsHeading: 'Outils SRT Populaires',
    toolsSubtitle: 'Découvrez nos outils SRT populaires pour convertir, éditer et manipuler vos fichiers de sous-titres rapidement et facilement.',
    howItWorksHeading: 'Comment ça marche',
    steps: [
      {
        step: '01',
        title: 'Choisissez un outil',
        desc: 'Sélectionnez l’outil de conversion approprié.',
      },
      {
        step: '02',
        title: 'Déposez votre fichier',
        desc: 'Glissez votre fichier .srt. L’analyse s’exécute immédiatement en local.',
      },
      {
        step: '03',
        title: 'Téléchargez le résultat',
        desc: 'Vérifiez l’aperçu et récupérez votre fichier TXT nettoyé.',
      },
    ],
    featuresHeading: 'Pourquoi choisir srtconverters.info ?',
    features: [
      {
        title: 'Confidentialité Totale',
        desc: 'Le traitement est effectué à 100 % sur votre machine sans envoi externe.',
      },
      {
        title: 'Rapidité Éclair',
        desc: 'Sans temps d’attente réseau, la conversion s’effectue en quelques millisecondes.',
      },
      {
        title: 'Support International Unicode',
        desc: 'Gestion parfaite de tous les caractères spéciaux et accents.',
      },
      {
        title: 'Léger et Épuré',
        desc: 'Conçu sans scripts superflus pour une performance mobile maximale.',
      },
    ],
    faqHeading: 'Foire Aux Questions',
    faqs: [
      {
        question: 'Qu’est-ce que srtconverters.info ?',
        answer: 'Une plateforme d’outils web pour sous-titres exécutés directement dans votre navigateur.',
      },
      {
        question: 'Mes fichiers sont-ils stockés sur un serveur ?',
        answer: 'Non. Vos fichiers ne quittent jamais votre ordinateur ou téléphone.',
      },
      {
        question: 'Quels outils sont actuellement disponibles ?',
        answer: 'Actuellement, le Convertisseur SRT en TXT et le Convertisseur TXT en SRT sont disponibles gratuitement.',
      },
      {
        question: 'Le service est-il payant ?',
        answer: 'Non, il est totalement gratuit et accessible sans compte.',
      },
      {
        question: 'Qu’est-ce qu’un fichier SRT et comment fonctionne-t-il ?',
        answer: 'Un fichier SRT (SubRip Subtitle) est un fichier texte simple contenant les lignes de dialogue, des numéros d’ordre et des horodatages précis (heures:minutes:secondes,millisecondes) indiquant au lecteur vidéo quand afficher chaque sous-titre.',
      },
      {
        question: 'Comment ouvrir et modifier un fichier SRT ?',
        answer: 'Étant un simple fichier texte, vous pouvez ouvrir et modifier un fichier SRT avec le Bloc-notes sous Windows, TextEdit sous Mac, ou utiliser nos outils en ligne pour extraire le texte sans dérégler la synchronisation.',
      },
      {
        question: 'Comment associer un sous-titre SRT à une vidéo ?',
        answer: 'Enregistrez le fichier .srt dans le même dossier que votre vidéo et donnez-lui exactement le même nom (par exemple, film.mp4 et film.srt). Les lecteurs comme VLC ou les téléviseurs intelligents chargeront automatiquement les sous-titres.',
      },
      {
        question: 'Pourquoi mes sous-titres sont-ils décalés par rapport à la vidéo ?',
        answer: 'Un décalage survient souvent lorsque le débit d’images (FPS) diffère ou que la vidéo comporte des génériques différents. Vous pouvez corriger le délai dans votre lecteur (raccourcis G et H sur VLC) ou recréer le minutage avec notre convertisseur TXT en SRT.',
      },
      {
        question: 'Puis-je convertir un fichier SRT en texte brut sans horodatage ?',
        answer: 'Oui. Notre Convertisseur SRT en TXT supprime automatiquement les numéros de bloc, les codes temporels et les balises HTML pour vous fournir un texte propre prêt à être lu ou traduit.',
      },
      {
        question: 'Un fichier SRT est-il sûr ?',
        answer: 'Oui, les fichiers SRT authentiques sont totalement sûrs. Comme il s’agit de simples fichiers texte brut contenant uniquement des numéros de séquence, des repères temporels et des sous-titres, ils ne peuvent ni contenir ni exécuter de code malveillant ou de virus. Assurez-vous simplement que l’extension du fichier est bien .srt et non un programme déguisé comme .srt.exe.',
      },
    ],
  },
  de: {
    metaTitle: 'srtconverters.info – Schnelle & private SRT-Untertitel-Tools',
    metaDescription: 'Kostenlose SRT-Tools direkt im Browser. Verwandeln Sie SRT-Dateien in sauberen TXT-Text ohne Datei-Uploads und mit absolutem Datenschutz.',
    heroBadge: '100% im Browser & Privat',
    heroTitle: 'Einfache, schnelle SRT-Untertitel-Tools',
    heroSubtitle: 'SRT-Untertiteldateien direkt im Webbrowser bereinigen und umwandeln. Lokale Hochgeschwindigkeitsverarbeitung ohne Uploads, ohne Benutzerkonto und ohne Tracking.',
    primaryCta: 'SRT in TXT Konverter öffnen',
    toolsHeading: 'Beliebte SRT-Tools',
    toolsSubtitle: 'Entdecken Sie unsere beliebten SRT-Tools, um Untertiteldateien schnell und unkompliziert zu konvertieren, zu bearbeiten und anzupassen.',
    howItWorksHeading: 'So funktioniert es',
    steps: [
      {
        step: '01',
        title: 'Werkzeug wählen',
        desc: 'Wählen Sie das passende Tool für Ihr Vorhaben aus.',
      },
      {
        step: '02',
        title: 'Datei ablegen',
        desc: 'Ziehen Sie die .srt-Datei in den Browser für eine sofortige lokale Analyse.',
      },
      {
        step: '03',
        title: 'Ergebnis speichern',
        desc: 'Prüfen Sie den Text und laden Sie die TXT-Datei umgehend herunter.',
      },
    ],
    featuresHeading: 'Ihre Vorteile bei srtconverters.info',
    features: [
      {
        title: 'Echte lokale Privatsphäre',
        desc: 'Ihre Dateien werden zu 100 % lokal verarbeitet und erreichen keinen fremden Server.',
      },
      {
        title: 'Maximale Geschwindigkeit',
        desc: 'Keine Wartezeiten beim Hochladen – Ergebnisse in Millisekunden.',
      },
      {
        title: 'Volle Unicode-Unterstützung',
        desc: 'Verarbeitet deutsche Umlaute und Sonderzeichen fehlerfrei.',
      },
      {
        title: 'Schlank und mobiloptimiert',
        desc: 'Minimaler Ressourcenverbrauch für erstklassige Leistung auf jedem Endgerät.',
      },
    ],
    faqHeading: 'Häufig gestellte Fragen',
    faqs: [
      {
        question: 'Was ist srtconverters.info?',
        answer: 'Eine datenschutzorientierte Plattform für browserbasierte Untertitelwerkzeuge.',
      },
      {
        question: 'Werden meine Untertitel hochgeladen?',
        answer: 'Nein. Alle Abläufe erfolgen lokal in Ihrem Webbrowser.',
      },
      {
        question: 'Welche Werkzeuge stehen derzeit zur Verfügung?',
        answer: 'Derzeit sind der SRT-in-TXT-Konverter sowie der TXT-in-SRT-Konverter vollkommen kostenlos verfügbar.',
      },
      {
        question: 'Ist die Nutzung kostenlos?',
        answer: 'Ja, uneingeschränkt kostenlos und ohne Registrierung.',
      },
      {
        question: 'Was ist eine SRT-Datei und wie funktioniert sie?',
        answer: 'Eine SRT-Datei (SubRip Subtitle) ist eine reine Textdatei, die Untertiteltexte zusammen mit sequenziellen Nummern und exakten Start- und Endzeitstempeln (Stunden:Minuten:Sekunden,Millisekunden) enthält, damit der Videoplayer die Zeilen zur richtigen Zeit anzeigt.',
      },
      {
        question: 'Wie kann ich eine SRT-Datei öffnen und bearbeiten?',
        answer: 'Da SRT-Dateien aus einfachem Text bestehen, können Sie sie mit dem Windows-Editor (Notepad), TextEdit auf dem Mac oder unseren Browser-Tools öffnen und bearbeiten, ohne Zeitstempel zu beschädigen.',
      },
      {
        question: 'Wie binde ich eine SRT-Datei in einen Videoplayer ein?',
        answer: 'Speichern Sie die .srt-Datei im selben Ordner wie Ihre Videodatei und vergeben Sie den exakt gleichen Dateinamen (z. B. film.mp4 und film.srt). Mediaplayer wie VLC oder Smart-TVs erkennen die Untertitel dann automatisch.',
      },
      {
        question: 'Warum sind meine Untertitel asynchron zum Video?',
        answer: 'Asynchrone Untertitel entstehen meist durch unterschiedliche Bildraten (FPS) oder andere Vorspänne im Video. Sie können die Verzögerung im Player anpassen (Tasten G und H in VLC) oder mit unserem TXT-zu-SRT-Konverter neue Zeitstempel generieren.',
      },
      {
        question: 'Kann ich eine SRT-Datei in reinen Text ohne Zeitstempel umwandeln?',
        answer: 'Ja. Unser SRT-in-TXT-Konverter entfernt automatisch alle Blocknummern, Zeitcodes und Formatierungs-Tags, sodass Sie den reinen Dialogtext sofort weiterverwenden können.',
      },
      {
        question: 'Ist eine SRT-Datei sicher?',
        answer: 'Ja, echte SRT-Dateien sind absolut sicher. Da es sich um reine Textdateien handelt, die lediglich Sequenznummern, Zeitstempel und Untertitel enthalten, können sie weder Schadcode noch Viren enthalten oder ausführen. Achten Sie lediglich darauf, dass die Dateiendung tatsächlich .srt lautet und nicht ein getarntes Programm wie .srt.exe ist.',
      },
    ],
  },
  ar: {
    metaTitle: 'srtconverters.info – أدوات ترجمة SRT سريعة وآمنة في المتصفح',
    metaDescription: 'أدوات مجانية لملفات ترجمة SRT تعمل مباشرة في المتصفح. تحويل SRT إلى نص TXT نقي بدون رفع الملفات مع خصوصية كاملة.',
    heroBadge: '100% داخل المتصفح وخصوصية تامة',
    heroTitle: 'أدوات بسيطة وسريعة لملفات ترجمة SRT',
    heroSubtitle: 'تنظيف وتحويل وتنسيق ملفات الترجمة SRT مباشرة داخل متصفح الإنترنت الخاص بك. معالجة محلية سريعة بدون رفع ملفات وبدون تسجيل وبدون تتبع.',
    primaryCta: 'فتح محول SRT إلى TXT',
    toolsHeading: 'أدوات SRT الشائعة',
    toolsSubtitle: 'استكشف أدوات SRT الشائعة لتحويل وتعديل والتعامل مع ملفات الترجمة بسرعة وسهولة.',
    howItWorksHeading: 'كيف يعمل الموقع',
    steps: [
      {
        step: '01',
        title: 'اختر الأداة',
        desc: 'حدد الأداة التي تحتاجها، مثل استخراج النص المجرد من ملف الترجمة.',
      },
      {
        step: '02',
        title: 'أفلت ملف الترجمة',
        desc: 'أضف ملف .srt، وتتم المعالجة فوراً في ذاكرة متصفحك دون رفع.',
      },
      {
        step: '03',
        title: 'حمّل النتيجة',
        desc: 'راجع المعاينة وحمّل النص النظيف مباشرة إلى جهازك.',
      },
    ],
    featuresHeading: 'لماذا تختار srtconverters.info؟',
    features: [
      {
        title: 'خصوصية وأمان محلي',
        desc: 'تتم معالجة ملفاتك بنسبة 100% محلياً على جهازك ولا تغادره أبداً.',
      },
      {
        title: 'سرعة فائقة',
        desc: 'بدون بطء الشبكة وعمليات الرفع، تتم المعالجة في أجزاء من الثانية.',
      },
      {
        title: 'دعم كامل للغة العربية واليونيكود',
        desc: 'يدعم النصوص العربية بترميز UTF-8 بدقة ودون أي خلل في تشكيل الحروف.',
      },
      {
        title: 'خفيف ومتوافق مع الهواتف',
        desc: 'مصمم بدون أي مكتبات ثقيلة ليعمل بأعلى كفاءة على الأجهزة المحمولة.',
      },
    ],
    faqHeading: 'الأسئلة الشائعة',
    faqs: [
      {
        question: 'ما هو موقع srtconverters.info؟',
        answer: 'منصة ويب متخصصة توفر أدوات سريعة وخاصة للتعامل مع ملفات الترجمة داخل المتصفح.',
      },
      {
        question: 'هل يتم رفع ملفات الترجمة إلى خوادمكم؟',
        answer: 'لا، تجري جميع العمليات على جهازك مباشرة عبر تقنيات المتصفح المحلية.',
      },
      {
        question: 'ما هي الأدوات المتاحة حالياً على الموقع؟',
        answer: 'حالياً، يتوفر كل من محول SRT إلى TXT ومحول TXT إلى SRT مجاناً وبدون أي قيود.',
      },
      {
        question: 'هل الخدمة مجانية؟',
        answer: 'نعم، مجانية بالكامل ولا تتطلب أي تسجيل أو اشتراك.',
      },
      {
        question: 'ما هو ملف SRT وكيف يعمل؟',
        answer: 'ملف SRT (SubRip Subtitle) هو ملف نصي بسيط يحتوي على أسطر الترجمة مقرونة بأرقام تسلسلية وتوقيت زمني دقيق للبداية والنهاية (ساعات:دقائق:ثواني,أجزاء من الثانية) لتوجيه مشغل الفيديو متى يعرض كل سطر.',
      },
      {
        question: 'كيف يمكنني فتح وتعديل ملف SRT؟',
        answer: 'نظراً لأن ملفات SRT هي ملفات نصية قياسية، يمكنك فتحها وتعديلها عبر أي محرر نصوص بسيط مثل المفكرة (Notepad) أو استخدام أدواتنا في المتصفح لاستخراج النصوص وتعديلها دون المساس بالتوقيت.',
      },
      {
        question: 'كيف أقوم بتشغيل ملف ترجمة SRT مع الفيديو؟',
        answer: 'ضع ملف .srt في نفس المجلد الذي يحتوي على الفيديو وقم بتسميته بنفس اسم ملف الفيديو تماماً (مثل movie.mp4 و movie.srt)، وستقوم مشغلات مثل VLC والشاشات الذكية بالتعرف على الترجمة تلقائياً.',
      },
      {
        question: 'لماذا تظهر الترجمة غير متزامنة مع كلام الفيديو؟',
        answer: 'يحدث عدم التزامن عادة بسبب اختلاف معدل الإطارات (FPS) بين الترجمة والفيديو أو وجود مقدمات مختلفة. يمكنك تعديل التأخير الزمني في مشغل الفيديو (عبر مفتاحي G و H في VLC) أو إنشاء توقيت جديد من خلال محول TXT إلى SRT.',
      },
      {
        question: 'هل يمكنني تحويل ملف SRT إلى نص عادي بدون توقيت زمني؟',
        answer: 'نعم، يقوم محول SRT إلى TXT الخاص بنا باستخراج نص الحوار فوراً مع إزالة جميع الأرقام والتوقيتات الزمنية ووسوم التنسيق بدقة تامة.',
      },
      {
        question: 'هل ملف SRT آمن للاستخدام؟',
        answer: 'نعم، ملفات SRT الأصلية آمنة تماماً. نظراً لأنها ملفات نصية بسيطة لا تحتوي إلا على أرقام المقاطع المتسلسلة والعلامات الزمنية ونصوص الترجمة، فلا يمكنها احتواء أو تنفيذ برمجيات ضارة أو فيروسات. فقط تأكد من أن امتداد الملف هو .srt بالفعل وليس برنامجاً مموهاً مثل .srt.exe.',
      },
    ],
  },
};
