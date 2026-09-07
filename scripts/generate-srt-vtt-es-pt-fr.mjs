import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.resolve(__dirname, '../src/data/tools/srt-to-vtt');

const esContent = {
  metaTitle: 'Convertidor SRT a VTT Gratis Online – Rápido y 100% en el Navegador',
  metaDescription: 'Convierta archivos de subtítulos SRT a formato WebVTT (.vtt) válido online y gratis. Añade encabezado WEBVTT y convierte marcas de tiempo con total privacidad.',
  h1: 'Convertidor SRT a VTT',
  heroDescription: 'Transforme fácilmente subtítulos SubRip (.srt) al estándar WebVTT (.vtt) compatible con W3C para reproductores de vídeo HTML5, plataformas de streaming y aplicaciones web modernas. 100% gratuito, instantáneo y con privacidad estricta en su navegador.',
  toolName: 'Convertidor SRT a VTT',
  ui: {
    pasteTitle: 'Entrada de Subtítulo SRT (.srt)',
    pastePlaceholder: 'Pega el contenido de tu archivo SRT aquí (ej:\n1\n00:00:01,000 --> 00:00:04,000\n¡Bienvenidos a nuestro tutorial en vídeo!)...',
    orDivider: 'O',
    uploadTitle: 'Opción 2 — Subir Archivo SRT',
    convertButton: 'Convertir a VTT',
    clearButton: 'Limpiar',
    trySampleButton: 'Probar Ejemplo',
    livePreviewTitle: 'Salida WebVTT Convertida (.vtt)',
    errorNoInput: 'Por favor, pega texto de subtítulo SRT o sube un archivo .srt para convertir.',
    pastedContentSource: 'Contenido SRT Pegado',
    dropzoneTitle: 'Arrastra y suelta tu archivo .srt aquí',
    dropzoneSubtitle: 'o haz clic para buscarlo en tu dispositivo',
    browseButton: 'Seleccionar Archivo SRT',
    dropActiveText: 'Suelta el archivo SRT aquí...',
    fileSelected: 'Archivo seleccionado',
    fileNameLabel: 'Nombre del Archivo',
    fileSizeLabel: 'Tamaño del Archivo',
    cueCountLabel: 'Subtítulos Convertidos',
    characterCountLabel: 'Caracteres',
    downloadAction: 'Descargar .vtt',
    copyAction: 'Copiar al Portapapeles',
    copiedSuccess: '¡Copiado con éxito!',
    resetAction: 'Convertir Otro Archivo',
    previewTitle: 'Vista Previa de WebVTT Convertido',
    previewEmpty: 'Tus subtítulos WebVTT (.vtt) convertidos aparecerán aquí de inmediato tras escribir o subir un archivo SRT.',
    optionsTitle: 'Opciones de Conversión',
    optIncludeCueNumbers: 'Incluir números identificadores de bloque',
    optCleanTags: 'Eliminar etiquetas antiguas no compatibles (ej. <font>)',
    errorInvalidFile: 'Por favor, sube un archivo de subtítulo .srt válido.',
    errorEmptyFile: 'El archivo o texto introducido está completamente vacío.',
    errorParseFailed: 'No se pudieron detectar bloques válidos de subtítulos SRT. Asegúrate de que las marcas de tiempo sigan el formato 00:00:00,000 --> 00:00:00,000.',
  },
  sections: {
    whatIsSrt: {
      title: '¿Qué es un archivo SRT?',
      content: [
        'Un archivo SRT (SubRip Subtitle) es el formato de subtítulos en texto plano más ubicuo y difundido históricamente en el vídeo digital. Originado en el software de Windows SubRip —creado para extraer subtítulos y sincronizaciones de DVDs físicos—, el formato .srt se convirtió en el estándar mundial para reproductores multimedia de escritorio, televisores, distribución de vídeo y suites de edición profesional.',
        'Estructuralmente, un archivo SRT está compuesto por bloques secuenciales de subtítulos separados por líneas en blanco. Cada bloque contiene cuatro componentes fundamentales: un número de índice secuencial (1, 2, 3...), una definición temporal exacta que indica cuándo aparece y desaparece el subtítulo (formateada estrictamente como horas:minutos:segundos,milisegundos: 00:00:01,250 --> 00:00:04,500), una o más líneas de diálogo y un salto de línea final.',
        'Aunque los archivos SRT son simples y gozan de una compatibilidad casi universal en programas independientes como VLC Media Player, MPV, HandBrake y Adobe Premiere Pro, fueron concebidos antes de la web moderna. En consecuencia, el formato SRT carece de soporte nativo en los navegadores web HTML5 y no ofrece mecanismos estandarizados para tipografía adaptable, posicionamiento geométrico ni estilos CSS personalizados.',
      ],
    },
    whatIsVtt: {
      title: '¿Qué es un archivo WebVTT (.vtt)?',
      content: [
        'WebVTT (Web Video Text Tracks) es el estándar abierto oficial para subtítulos, transcripciones y capítulos creado específicamente para la web por el World Wide Web Consortium (W3C) y el WHATWG. Introducido junto con la especificación de HTML5, WebVTT es soportado nativamente por todos los navegadores web modernos —incluyendo Google Chrome, Mozilla Firefox, Apple Safari y Microsoft Edge— sin necesidad de complementos de JavaScript de terceros, reproductores externos ni transcodificación en el servidor.',
        'Un archivo WebVTT se reconoce por su cabecera introductoria obligatoria: la primera línea del documento debe comenzar siempre con el texto literal "WEBVTT". Tras esta firma, los archivos WebVTT pueden incluir opcionalmente bloques de metadatos (como autor, título o idioma) y hojas de estilo incrustadas antes de dar paso a los bloques de subtítulos individuales.',
        'Además de mostrar diálogos básicos, WebVTT está diseñado para interfaces web interactivas y responsivas. Ofrece ajustes integrados para orientación vertical, desplazamiento horizontal, posición de línea, alineación de texto y tamaño del recuadro. Asimismo, WebVTT se integra perfectamente con CSS moderno a través del pseudo-elemento ::cue, permitiendo a diseñadores y desarrolladores controlar fuentes, sombras de texto, opacidad de fondo y paletas de color directamente desde la hoja de estilos de su sitio web.',
      ],
    },
    whatIsConverter: {
      title: '¿Qué es un Convertidor SRT a VTT?',
      content: [
        'Un convertidor SRT a VTT es una herramienta especializada en subtítulos diseñada para tender un puente entre los formatos de producción de vídeo tradicionales y la distribución web moderna. Analiza la sintaxis de los archivos SubRip (.srt), efectúa transformaciones matemáticas y estructurales, y genera archivos WebVTT (.vtt) válidos y conformes a las especificaciones del W3C, listos para incrustarse de inmediato en etiquetas <video> de HTML5.',
        'La principal transformación estructural que realiza el convertidor es la adaptación de los delimitadores temporales. En SRT estándar, los milisegundos van precedidos de una coma (por ejemplo, 00:01:23,450). Sin embargo, la especificación WebVTT exige estrictamente que los milisegundos se delimiten con un punto decimal ASCII (00:01:23.450). Una sola coma en una marca de tiempo hace que los motores multimedia de los navegadores rechacen la pista completa o no muestren los subtítulos.',
        'Nuestro convertidor ejecuta todo el procesamiento, análisis, reestructuración y generación de archivos 100% de manera local en el navegador del cliente. Ningún fragmento de texto ni archivo se envía a servidores externos, lo que garantiza una velocidad instantánea, una privacidad absoluta y cero límites de tamaño de archivo.',
      ],
    },
    srtVsVtt: {
      title: 'SRT vs VTT: Principales Diferencias Técnicas',
      content: [
        'Aunque SRT y WebVTT comparten raíces comunes y visualmente se asemejan a primera vista, existen diferencias arquitectónicas fundamentales entre ellos:',
        '1. Cabecera Obligatoria del Archivo: Un archivo SRT comienza de inmediato con el número de bloque "1" en la primera línea. Por el contrario, un archivo WebVTT DEBE comenzar con "WEBVTT" en la primera línea, seguido opcionalmente de comentarios o metadatos. Si el navegador no detecta esta cabecera, rechaza el archivo por error de sintaxis.',
        '2. Sintaxis de Milisegundos en Marcas de Tiempo: SRT utiliza comas (00:00:05,200), mientras que WebVTT utiliza puntos (00:00:05.200). WebVTT también admite marcas de tiempo abreviadas sin horas (por ejemplo, 05.200 --> 08.400) para vídeos cortos, aunque conservar el formato completo HH:MM:SS.mmm es la mejor práctica recomendada.',
        '3. Posicionamiento y Geometría en Pantalla: SRT no tiene una forma estandarizada de posicionar el texto; todo se ubica por defecto en la parte inferior central. WebVTT soporta parámetros de colocación directamente en la línea de tiempo, tales como "line:10%", "position:80%", "align:left" y "size:50%", evitando que los subtítulos tapen nombres, rótulos o gráficos inferiores.',
        '4. Capacidades de Estilo y Diseño: SRT depende de etiquetas heredadas como <i>, <b> y <font color="...">, que los reproductores web modernos suelen ignorar o desinfectar por seguridad. WebVTT admite etiquetas de voz (<v Narrador>), anotaciones ruby, clases CSS (<c.resaltado>) y control visual integral mediante el selector CSS ::cue.',
        '5. Distribución de Streaming Web: Protocolos modernos de streaming adaptativo como Apple HLS (HTTP Live Streaming) y MPEG-DASH transmiten pistas de texto empaquetadas en fragmentos WebVTT. Intentar usar archivos SRT sin convertir en un manifiesto HLS causa errores inmediatos de reproducción en dispositivos Apple y navegadores móviles.',
      ],
    },
    whyConvert: {
      title: '¿Por qué Convertir SRT a VTT?',
      benefits: [
        {
          title: 'Compatibilidad Nativa con HTML5',
          description: 'Todos los navegadores modernos reproducen WebVTT directamente con la etiqueta <track> sin necesitar pesadas librerías de JavaScript ni complementos externos.',
        },
        {
          title: 'Personalización Visual Completa con CSS',
          description: 'Cambia la tipografía, colores, transparencia de fondo, márgenes y sombras de los subtítulos utilizando el pseudo-elemento ::cue de tus hojas de estilo.',
        },
        {
          title: 'Posicionamiento Preciso en Pantalla',
          description: 'Coloca los subtítulos en la parte superior, inferior, izquierda o derecha para evitar cubrir información visual clave, gráficos o nombres de ponentes.',
        },
        {
          title: 'Conformidad con Streaming HLS y DASH',
          description: 'Las arquitecturas de streaming profesional como Apple HLS, AWS Elemental y Cloudflare Stream requieren WebVTT para entregar subtítulos multilingües.',
        },
        {
          title: 'Mejora de Accesibilidad y SEO en Vídeo',
          description: 'Las pistas WebVTT hacen que el contenido sea accesible para personas con discapacidad auditiva y permiten que Google indexe los diálogos del vídeo.',
        },
        {
          title: 'Ligero, Instantáneo y Eficiente',
          description: 'Al ser texto plano puro en UTF-8, los archivos WebVTT pesan apenas unos kilobytes y se descargan al instante sin afectar la velocidad ni los Core Web Vitals.',
        },
      ],
    },
    howToConvert: {
      title: 'Cómo Convertir SRT a VTT en 3 Pasos Sencillos',
      steps: [
        {
          title: '1. Pega el Texto o Sube tu Archivo .srt',
          description: 'Pega el texto de tus subtítulos SRT en el panel izquierdo o arrastra tu archivo .srt a la zona de carga. También puedes hacer clic en "Seleccionar Archivo SRT".',
        },
        {
          title: '2. Conversión Automática en el Navegador',
          description: 'El convertidor analiza los bloques de subtítulos, inserta la cabecera WEBVTT, sustituye las comas por puntos en los tiempos y actualiza la vista previa al instante.',
        },
        {
          title: '3. Copia o Descarga tu Archivo WebVTT',
          description: 'Haz clic en "Descargar .vtt" para guardar el archivo listo para usar en tu dispositivo, o pulsa "Copiar al Portapapeles" para pegarlo directamente en tu proyecto.',
        },
      ],
    },
    commonErrorsAndFixes: {
      title: 'Errores Habituales en Subtítulos SRT y VTT y Soluciones',
      items: [
        {
          title: 'Error: Los subtítulos no se muestran en el navegador (Delimitador de Coma)',
          description: 'Causa: El archivo conserva marcas de tiempo SRT con comas (ej. 00:00:02,500). Los navegadores fallan de inmediato al encontrarlas. Solución: Convierte todas las comas en puntos decimales (00:00:02.500) con nuestra herramienta.',
        },
        {
          title: 'Error: El navegador rechaza la pista por error de sintaxis (Falta Cabecera WEBVTT)',
          description: 'Causa: Se cambió la extensión de .srt a .vtt sin añadir la cabecera obligatoria. Solución: La primera línea del archivo debe contener estrictamente "WEBVTT", seguida de una línea en blanco.',
        },
        {
          title: 'Error: Caracteres corruptos o acentos rotos (Codificación y BOM)',
          description: 'Causa: Subtítulos guardados en UTF-16, ANSI o UTF-8 con marca de orden de bytes (BOM). Solución: Nuestro convertidor elimina artefactos BOM invisibles y exporta en UTF-8 universal limpio.',
        },
        {
          title: 'Error: Marcas de tiempo solapadas y texto parpadeante',
          description: 'Causa: El subtítulo 1 termina a las 00:00:05.000 pero el subtítulo 2 comienza antes, a las 00:00:04.500. Solución: Revisa que el tiempo final de cada bloque sea igual o menor al inicio del siguiente.',
        },
        {
          title: 'Error: Bloqueo de CORS (Cross-Origin Resource Sharing)',
          description: 'Causa: Al alojar el archivo .vtt en un CDN o dominio diferente al de la página del vídeo, el navegador bloquea la petición. Solución: Configura en tu servidor la cabecera "Access-Control-Allow-Origin: *" y el tipo MIME "text/vtt".',
        },
      ],
    },
    html5VideoGuide: {
      title: 'Cómo se Utilizan los Subtítulos VTT en Vídeo HTML5',
      description: 'Implementar subtítulos WebVTT en un reproductor de vídeo HTML5 es sumamente fácil y requiere únicamente la etiqueta nativa <track> anidada dentro del elemento <video>. A continuación se muestra la estructura estándar recomendada:',
      codeSnippet: `<video controls width="800" poster="/imagenes/portada.jpg">
  <!-- Archivos de vídeo principales -->
  <source src="/videos/tutorial.mp4" type="video/mp4">
  <source src="/videos/tutorial.webm" type="video/webm">

  <!-- Pistas de subtítulos WebVTT -->
  <track 
    kind="subtitles" 
    src="/subtitulos/tutorial-es.vtt" 
    srclang="es" 
    label="Español" 
    default>
  
  <track 
    kind="subtitles" 
    src="/subtitulos/tutorial-en.vtt" 
    srclang="en" 
    label="English">

  <p>Tu navegador no soporta vídeo HTML5. <a href="/videos/tutorial.mp4">Descarga el vídeo</a> para reproducirlo.</p>
</video>`,
      explanation: [
        {
          term: 'kind="subtitles"',
          description: 'Indica el tipo de pista de texto. Usa "subtitles" para traducciones de diálogo o "captions" para subtítulos descriptivos que incluyan efectos de sonido para personas sordas.',
        },
        {
          term: 'src="ruta/al/archivo.vtt"',
          description: 'La URL relativa o absoluta de tu archivo WebVTT. Asegúrate de que el servidor lo entregue con la cabecera Content-Type "text/vtt; charset=utf-8".',
        },
        {
          term: 'srclang="es"',
          description: 'El código de idioma estándar BCP 47 (como "es" para español, "en" para inglés o "fr" para francés), fundamental para motores de traducción y accesibilidad.',
        },
        {
          term: 'label="Español"',
          description: 'El nombre descriptivo que verá el usuario en el menú de subtítulos (CC) del reproductor para seleccionar su idioma preferido.',
        },
        {
          term: 'default',
          description: 'Atributo booleano que define que esta pista se activará automáticamente al iniciarse el vídeo, salvo que las preferencias del usuario indiquen lo contrario.',
        },
      ],
    },
    comparison: {
      title: 'Comparativa Técnica: SRT vs WebVTT',
      description: 'Compara detalladamente las capacidades técnicas, compatibilidad y especificaciones de SubRip (.srt) y WebVTT (.vtt):',
      headers: ['Dimensión Técnica', 'SubRip (.srt)', 'WebVTT (.vtt)'],
      rows: [
        ['Entorno Principal Previsto', 'Reproductores de escritorio y suites de edición', 'Navegadores HTML5, apps móviles y streaming'],
        ['Cabecera Inicial Obligatoria', 'Ninguna (comienza con el índice 1)', 'Obligatoria "WEBVTT" en la primera línea'],
        ['Separador de Milisegundos', 'Coma (ej. 00:01:23,450)', 'Punto decimal (ej. 00:01:23.450)'],
        ['Reproducción Web Nativa', 'No (requiere librerías JS como video.js)', 'Sí (nativa mediante etiqueta <track> en todos los navegadores)'],
        ['Capacidades de Estilo', 'Etiquetas heredadas limitadas (<i>, <b>, <font>)', 'Estilizado CSS integral mediante el selector ::cue'],
        ['Posicionamiento y Geometría', 'No estandarizado (solo inferior-centro)', 'Atributos nativos: line, position, size, align'],
        ['Streaming HLS / MPEG-DASH', 'No compatible (debe transcodificarse)', 'Estándar oficial para manifiestos de subtítulos'],
        ['Metadatos y Comentarios', 'Sin soporte estándar para notas', 'Soporta bloques NOTE y encabezados STYLE'],
        ['Extensión de Archivo Habitual', '.srt', '.vtt'],
        ['Tipo MIME Estándar', 'application/x-subrip', 'text/vtt; charset=utf-8'],
      ],
    },
    privacy: {
      title: 'Garantía de Seguridad y Privacidad 100% en el Navegador',
      content: [
        'En SRTConverters.info valoramos enormemente la confidencialidad de tus datos y tu privacidad. Todas las conversiones entre SRT y WebVTT se ejecutan íntegramente dentro de tu navegador web mediante código JavaScript del lado del cliente.',
        'Tus archivos de subtítulos, transcripciones audiovisuales, propiedad intelectual y diálogos privados nunca se cargan, almacenan ni procesan en servidores remotos ni en la nube. Incluso puedes desconectar tu conexión a internet tras cargar la página y el convertidor continuará funcionando con plena normalidad.',
        'Esta arquitectura 100% cliente elimina cualquier riesgo de fuga de información, haciendo que nuestra herramienta sea idónea para conferencias corporativas, declaraciones legales, grabaciones confidenciales y contenidos médicos protegidos.',
      ],
    },
  },
  faqs: [
    {
      question: '¿Puedo simplemente cambiar la extensión de mi archivo de .srt a .vtt?',
      answer: 'No. Cambiar la extensión de .srt a .vtt no convierte el archivo en un WebVTT válido. WebVTT requiere obligatoriamente la cabecera "WEBVTT" al inicio del documento y exige que las marcas de tiempo utilicen puntos en lugar de comas (00:00:01.000 en vez de 00:00:01,000). Los navegadores web rechazarán el archivo renombrado y no mostrarán los subtítulos.',
    },
    {
      question: '¿Por qué mis subtítulos WebVTT no aparecen en el reproductor de vídeo HTML5?',
      answer: 'Generalmente se debe a tres motivos comunes: 1) Al archivo le falta la cabecera "WEBVTT" en la línea 1; 2) Las marcas de tiempo todavía tienen comas en vez de puntos; o 3) El servidor web no está sirviendo el archivo con el tipo MIME correcto (text/vtt) o está bloqueando la petición por CORS. Nuestro convertidor garantiza que la sintaxis y los tiempos de tu archivo sean 100% correctos.',
    },
    {
      question: '¿Cuál es la diferencia entre subtítulos tradicionales (subtitles) y subtítulos descriptivos (captions)?',
      answer: 'Los subtítulos (kind="subtitles") están pensados para espectadores que pueden escuchar el audio pero necesitan traducir el idioma hablado; solo transcriben el diálogo. Los subtítulos descriptivos o cerrados (kind="captions") están diseñados para personas sordas o con problemas de audición; además del diálogo, transcriben efectos sonoros, cambios de música e identificación de hablantes (ej. [Aplausos], [Música alegre]). WebVTT admite ambos mediante el atributo kind en HTML5.',
    },
    {
      question: '¿Cómo puedo personalizar el estilo de los subtítulos WebVTT con CSS?',
      answer: 'Puedes personalizar la apariencia de los subtítulos directamente en tu hoja de estilos utilizando el pseudo-elemento CSS ::cue. Por ejemplo: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }',
    },
    {
      question: '¿Funciona WebVTT en teléfonos móviles como iPhone (Safari) y Android (Chrome)?',
      answer: '¡Sí! WebVTT está plenamente soportado en todos los navegadores móviles modernos, incluyendo Safari en iOS/iPadOS y Chrome/Firefox en Android. Cuando los vídeos se reproducen a pantalla completa en dispositivos móviles, el sistema operativo utiliza la pista WebVTT para renderizar subtítulos según las preferencias de accesibilidad del usuario.',
    },
    {
      question: '¿Puedo subir archivos WebVTT (.vtt) a YouTube y Vimeo?',
      answer: 'Sí. Tanto YouTube como Vimeo ofrecen soporte nativo para subir subtítulos en formato WebVTT junto con SRT. WebVTT resulta especialmente ventajoso si tus subtítulos incluyen configuraciones de posición que impiden que el texto tape elementos visuales inferiores de la pantalla.',
    },
    {
      question: '¿Existe algún límite de tamaño de archivo para convertir SRT a VTT en este sitio?',
      answer: 'No. Dado que toda la conversión ocurre localmente en tu propio dispositivo sin transmitir datos a través de internet, no existen restricciones de tamaño de archivo, límites de duración ni barreras de pago. Puedes convertir largometrajes completos, series de conferencias de varias horas o cursos enteros sin ningún problema.',
    },
    {
      question: '¿Este convertidor conserva caracteres no latinos, acentos y emojis?',
      answer: 'Sí. Nuestro convertidor utiliza procesamiento de texto nativo en UTF-8, preservando íntegramente acentos, caracteres especiales, alfabetos no latinos (árabe, japonés, coreano, vietnamita, cirílico, griego) y emojis Unicode sin alterar ni corromper su formato.',
    },
  ],
};

const ptContent = {
  metaTitle: 'Conversor SRT para VTT Grátis Online – Rápido e no Navegador',
  metaDescription: 'Converta arquivos de legenda SRT para formato WebVTT (.vtt) válido online e grátis. Adiciona cabeçalho WEBVTT e ajusta carimbos de data/hora com privacidade 100%.',
  h1: 'Conversor SRT para VTT',
  heroDescription: 'Converta facilmente legendas SubRip (.srt) para o formato padrão WebVTT (.vtt) em total conformidade com a W3C para reprodutores HTML5, plataformas de streaming e sites modernos. 100% gratuito, instantâneo e estritamente privado no seu navegador.',
  toolName: 'Conversor SRT para VTT',
  ui: {
    pasteTitle: 'Entrada de Legenda SRT (.srt)',
    pastePlaceholder: 'Cole o conteúdo SRT aqui (ex:\n1\n00:00:01,000 --> 00:00:04,000\nBem-vindo ao nosso tutorial em vídeo!)...',
    orDivider: 'OU',
    uploadTitle: 'Opção 2 — Enviar Arquivo SRT',
    convertButton: 'Converter para VTT',
    clearButton: 'Limpar',
    trySampleButton: 'Testar Exemplo',
    livePreviewTitle: 'Saída WebVTT Convertida (.vtt)',
    errorNoInput: 'Por favor, cole o texto da legenda SRT ou envie um arquivo .srt para converter.',
    pastedContentSource: 'Conteúdo SRT Colado',
    dropzoneTitle: 'Arraste e solte seu arquivo .srt aqui',
    dropzoneSubtitle: 'ou clique para selecionar do seu dispositivo',
    browseButton: 'Escolher Arquivo SRT',
    dropActiveText: 'Solte o arquivo SRT aqui...',
    fileSelected: 'Arquivo selecionado',
    fileNameLabel: 'Nome do Arquivo',
    fileSizeLabel: 'Tamanho do Arquivo',
    cueCountLabel: 'Legendas Convertidas',
    characterCountLabel: 'Caracteres',
    downloadAction: 'Baixar .vtt',
    copyAction: 'Copiar para Área de Transferência',
    copiedSuccess: 'Copiado com sucesso!',
    resetAction: 'Converter Outro Arquivo',
    previewTitle: 'Pré-visualização do WebVTT',
    previewEmpty: 'Suas legendas WebVTT (.vtt) convertidas aparecerão aqui de imediato assim que você inserir ou carregar um arquivo SRT.',
    optionsTitle: 'Opções de Conversão',
    optIncludeCueNumbers: 'Incluir números de identificação das falas',
    optCleanTags: 'Limpar tags HTML antigas não suportadas (ex: <font>)',
    errorInvalidFile: 'Envie um arquivo de legenda .srt válido.',
    errorEmptyFile: 'O arquivo ou texto fornecido está completamente vazio.',
    errorParseFailed: 'Não foi possível detectar blocos válidos de legendas SRT. Certifique-se de que os carimbos de data/hora sigam o formato 00:00:00,000 --> 00:00:00,000.',
  },
  sections: {
    whatIsSrt: {
      title: 'O que é um arquivo SRT?',
      content: [
        'Um arquivo SRT (SubRip Subtitle) é o formato de legenda em texto puro mais ubíquo e amplamente difundido na história do vídeo digital. Desenvolvido originalmente pelo programa de Windows SubRip —que extraía legendas e temporizações de mídias físicas de DVD—, o formato .srt tornou-se o padrão mundial para reprodutores de mídia de computador, televisores, compartilhamento de arquivos e softwares profissionais de edição de vídeo.',
        'Estruturalmente, um arquivo SRT é composto por blocos sequenciais de legendas separados por linhas em branco. Cada bloco contém quatro elementos fundamentais: um número de índice sequencial (1, 2, 3...), uma marcação temporal exata indicando quando a legenda surge e desaparece (formatada rigorosamente como horas:minutos:segundos,milissegundos: 00:00:01,250 --> 00:00:04,500), uma ou mais linhas de texto com o diálogo e uma quebra de linha final.',
        'Apesar de os arquivos SRT serem simples e contarem com compatibilidade quase universal em players independentes como VLC Media Player, MPV, HandBrake e Adobe Premiere Pro, eles foram projetados antes da web moderna. Como resultado, o SRT não possui suporte nativo em navegadores web HTML5 e não oferece recursos padronizados para tipografia responsiva, posicionamento geométrico ou estilização com CSS.',
      ],
    },
    whatIsVtt: {
      title: 'O que é um arquivo WebVTT (.vtt)?',
      content: [
        'WebVTT (Web Video Text Tracks) é o padrão aberto oficial de legendas, transcrições e capítulos criado especificamente para a web pelo World Wide Web Consortium (W3C) e pelo WHATWG. Introduzido em conjunto com a especificação HTML5, o WebVTT é suportado nativamente por todos os navegadores web modernos —incluindo Google Chrome, Mozilla Firefox, Apple Safari e Microsoft Edge— sem a necessidade de plugins JavaScript externos, players de terceiros ou transcodificação no servidor.',
        'Um arquivo WebVTT é reconhecido pelo seu cabeçalho obrigatório: a primeiríssima linha do documento deve iniciar com o texto literal "WEBVTT". Após essa assinatura, os arquivos WebVTT podem incluir opcionalmente blocos de metadados (como autor, idioma e título) e folhas de estilo incorporadas antes do início das marcações de legendas.',
        'Além de exibir diálogos convencionais, o WebVTT foi concebido para interfaces modernas e responsivas. Ele oferece suporte nativo a parâmetros de orientação vertical, alinhamento horizontal, posição da linha na tela e tamanho da área de texto. Além disso, o WebVTT integra-se perfeitamente com CSS através do pseudo-elemento ::cue, permitindo que desenvolvedores controlem fontes, sombras, opacidade do fundo e esquemas de cores diretamente nas folhas de estilo de seus sites.',
      ],
    },
    whatIsConverter: {
      title: 'O que é um Conversor SRT para VTT?',
      content: [
        'Um conversor SRT para VTT é uma ferramenta especializada criada para unir os formatos clássicos de produção de vídeo à distribuição moderna na web. Ele processa a sintaxe dos arquivos SubRip (.srt), realiza conversões matemáticas e estruturais e gera arquivos WebVTT (.vtt) válidos em conformidade com a W3C, prontos para uso imediato em elementos <video> de HTML5.',
        'A principal transformação realizada pelo conversor é a adaptação dos separadores de milissegundos nos carimbos de tempo. No padrão SRT, os milissegundos são precedidos por vírgula (por exemplo, 00:01:23,450). No entanto, a especificação WebVTT exige estritamente que os milissegundos sejam delimitados por ponto final ASCII (00:01:23.450). Uma única vírgula em um arquivo WebVTT fará com que os navegadores rejeitem a faixa ou falhem silenciosamente ao exibir as legendas.',
        'Nosso conversor executa todo o processamento de análise, formatação e geração 100% localmente no navegador do cliente. Nenhum arquivo ou linha de texto é enviado a servidores remotos, proporcionando velocidade instantânea, privacidade total e ausência de restrições de tamanho de arquivo.',
      ],
    },
    srtVsVtt: {
      title: 'SRT vs VTT: Principais Diferenças Técnicas',
      content: [
        'Embora o SRT e o WebVTT tenham origens semelhantes e pareçam idênticos à primeira vista, existem diferenças técnicas fundamentais entre eles:',
        '1. Cabeçalho Obrigatório: O arquivo SRT começa diretamente com o número "1" na primeira linha. Já o WebVTT DEVE começar obrigatoriamente com a palavra "WEBVTT" na primeiríssima linha. Se o navegador não encontrar esse cabeçalho, o arquivo é descartado como texto inválido.',
        '2. Sintaxe de Milissegundos nos Carimbos de Tempo: O SRT usa vírgulas (00:00:05,200), enquanto o WebVTT usa pontos (00:00:05.200). O WebVTT também permite marcações abreviadas sem indicação de horas (ex: 05.200 --> 08.400) para vídeos com menos de uma hora, embora manter o formato completo HH:MM:SS.mmm seja o padrão mais seguro.',
        '3. Posicionamento na Tela e Geometria: O SRT não possui uma forma padronizada de posicionar legendas; tudo é exibido no centro inferior. O WebVTT suporta nativamente parâmetros de coordenadas diretamente na linha de tempo, como "line:10%", "position:80%", "align:left" e "size:50%", impedindo que as legendas tapem legendas embutidas ou nomes de entrevistados.',
        '4. Recursos de Estilização: O SRT depende de tags legadas como <i>, <b> e <font color="...">, frequentemente desativadas por segurança em players web. O WebVTT suporta marcações de voz (<v Palestrante>), anotações ruby, classes CSS (<c.destaque>) e estilização visual completa com o seletor CSS ::cue.',
        '5. Padrão para Streaming HLS e DASH: Protocolos modernos como Apple HLS e MPEG-DASH entregam faixas de texto divididas em segmentos WebVTT. Fornecer arquivos SRT brutos em manifests HLS gera erros de reprodução imediatos em navegadores como o Safari e dispositivos iOS.',
      ],
    },
    whyConvert: {
      title: 'Por que Converter SRT para VTT?',
      benefits: [
        {
          title: 'Compatibilidade Nativa com Vídeo HTML5',
          description: 'Todos os navegadores modernos decodificam WebVTT diretamente através da tag <track>, dispensando plugins ou bibliotecas extras de JavaScript.',
        },
        {
          title: 'Estilização Visual com CSS (::cue)',
          description: 'Ajuste tipografia, transparência do fundo, cores de destaque, bordas e margens para se adequarem perfeitamente à identidade visual do seu site.',
        },
        {
          title: 'Posicionamento Preciso na Tela',
          description: 'Defina a localização exata das legendas (superior, inferior, lateral) para não cobrir informações gráficas ou rostos no vídeo.',
        },
        {
          title: 'Total Conformidade com Streaming HLS e DASH',
          description: 'Padrão exigido pelas maiores plataformas de streaming (Apple HLS, AWS Elemental, Cloudflare Stream) para entrega multilíngue de legendas.',
        },
        {
          title: 'Melhoria em Acessibilidade e SEO',
          description: 'Torna seu vídeo acessível a pessoas com deficiência auditiva e permite que motores de busca leiam e indexem os diálogos falados.',
        },
        {
          title: 'Ultra-Leve e Instantâneo',
          description: 'Por ser texto puro UTF-8, o arquivo WebVTT pesa poucos kilobytes, carregando de forma instantânea sem impactar o desempenho do site.',
        },
      ],
    },
    howToConvert: {
      title: 'Como Converter SRT para VTT em 3 Passos Fáceis',
      steps: [
        {
          title: '1. Cole o Texto ou Envie o Arquivo .srt',
          description: 'Cole o texto das suas legendas no painel esquerdo ou arraste o seu arquivo .srt para o conversor. Você também pode clicar em "Escolher Arquivo SRT".',
        },
        {
          title: '2. Conversão Instantânea no Navegador',
          description: 'O conversor analisa as legendas, adiciona o cabeçalho WEBVTT, converte as vírgulas dos tempos em pontos e atualiza a pré-visualização em tempo real.',
        },
        {
          title: '3. Baixe ou Copie o Arquivo WebVTT',
          description: 'Clique em "Baixar .vtt" para salvar o arquivo pronto no seu dispositivo ou selecione "Copiar para Área de Transferência" para colar no seu projeto.',
        },
      ],
    },
    commonErrorsAndFixes: {
      title: 'Erros Comuns de Formatação em Legendas SRT/VTT e Soluções',
      items: [
        {
          title: 'Erro: Legendas não aparecem no navegador (Delimitador de Vírgula)',
          description: 'Causa: O arquivo mantém vírgulas nos tempos (ex: 00:00:02,500). Navegadores web falham ao encontrar vírgulas. Solução: Converta as vírgulas para pontos (00:00:02.500) com nosso conversor.',
        },
        {
          title: 'Erro: O navegador rejeita o arquivo por erro de sintaxe (Cabeçalho Ausente)',
          description: 'Causa: O arquivo foi renomeado de .srt para .vtt sem a inserção do cabeçalho. Solução: A primeiríssima linha deve conter "WEBVTT", seguida de uma linha em branco.',
        },
        {
          title: 'Erro: Caracteres corrompidos ou acentos quebrados (Codificação e BOM)',
          description: 'Causa: Legendas salvas em UTF-16, ANSI ou UTF-8 com Byte Order Mark (BOM). Solução: Nossa ferramenta remove marcas BOM invisíveis e padroniza a saída em UTF-8 universal.',
        },
        {
          title: 'Erro: Carimbos de data/hora sobrepostos e texto piscando',
          description: 'Causa: A fala 1 termina em 00:00:05.000 enquanto a fala 2 inicia em 00:00:04.500. Solução: Assegure-se de que o tempo final de uma fala seja igual ou inferior ao início da seguinte.',
        },
        {
          title: 'Erro: Bloqueio de CORS ao carregar legenda externa',
          description: 'Causa: Quando o arquivo .vtt está em um CDN ou domínio diferente da página, o navegador bloqueia a requisição. Solução: Configure o cabeçalho "Access-Control-Allow-Origin: *" no servidor.',
        },
      ],
    },
    html5VideoGuide: {
      title: 'Como Usar Legendas VTT com Vídeo HTML5',
      description: 'Implementar legendas WebVTT em reprodutores HTML5 é muito direto: basta utilizar a tag nativa <track> dentro do elemento <video>. Veja o exemplo completo e funcional abaixo:',
      codeSnippet: `<video controls width="800" poster="/imagens/capa.jpg">
  <!-- Arquivos de vídeo principais -->
  <source src="/videos/aula.mp4" type="video/mp4">
  <source src="/videos/aula.webm" type="video/webm">

  <!-- Faixas de legendas WebVTT -->
  <track 
    kind="subtitles" 
    src="/legendas/aula-pt.vtt" 
    srclang="pt" 
    label="Português" 
    default>
  
  <track 
    kind="subtitles" 
    src="/legendas/aula-en.vtt" 
    srclang="en" 
    label="English">

  <p>Seu navegador não suporta vídeos em HTML5. <a href="/videos/aula.mp4">Baixe o vídeo</a> para assistir.</p>
</video>`,
      explanation: [
        {
          term: 'kind="subtitles"',
          description: 'Define o tipo de trilha de texto. Use "subtitles" para traduções de diálogos ou "captions" para closed captions com descrições sonoras voltadas a pessoas surdas.',
        },
        {
          term: 'src="caminho/arquivo.vtt"',
          description: 'A URL relativa ou absoluta do seu arquivo WebVTT. Certifique-se de que o servidor envie o cabeçalho Content-Type "text/vtt; charset=utf-8".',
        },
        {
          term: 'srclang="pt"',
          description: 'Código de idioma padrão BCP 47 (ex: "pt" para português, "en" para inglês), essencial para leitores de tela e ferramentas de tradução automática.',
        },
        {
          term: 'label="Português"',
          description: 'O nome legível que será exibido no menu de legendas (CC) do reprodutor para escolha do espectador.',
        },
        {
          term: 'default',
          description: 'Atributo que indica que esta faixa deve ser ativada automaticamente quando o vídeo iniciar, a menos que o usuário tenha outra preferência salva.',
        },
      ],
    },
    comparison: {
      title: 'Comparativo Técnico: SRT vs WebVTT',
      description: 'Compare as especificações técnicas, compatibilidade e recursos suportados por SubRip (.srt) e WebVTT (.vtt):',
      headers: ['Dimensão Técnica', 'SubRip (.srt)', 'WebVTT (.vtt)'],
      rows: [
        ['Ambiente Principal', 'Reprodutores de computador e edição de vídeo', 'Navegadores HTML5, apps e streaming web'],
        ['Cabeçalho Obrigatório', 'Nenhum (inicia no índice 1)', 'Obrigatório "WEBVTT" na primeira linha'],
        ['Separador de Milissegundos', 'Vírgula (ex: 00:01:23,450)', 'Ponto final (ex: 00:01:23.450)'],
        ['Suporte Nativo no Navegador', 'Não (exige bibliotecas JS como video.js)', 'Sim (nativo via tag <track> em todos os navegadores)'],
        ['Suporte a Estilos', 'Tags antigas limitadas (<i>, <b>, <font>)', 'Estilização completa via CSS com o pseudo-elemento ::cue'],
        ['Posicionamento na Tela', 'Não padronizado (centro inferior padrão)', 'Atributos nativos: line, position, size, align'],
        ['Streaming HLS / MPEG-DASH', 'Incompatível (precisa ser convertido)', 'Formato padrão para faixas de texto em streaming'],
        ['Comentários e Metadados', 'Sem sintaxe oficial de comentários', 'Suporta blocos NOTE e cabeçalhos de STYLE'],
        ['Extensão de Arquivo Padrão', '.srt', '.vtt'],
        ['Tipo MIME Oficial', 'application/x-subrip', 'text/vtt; charset=utf-8'],
      ],
    },
    privacy: {
      title: 'Garantia de Privacidade e Segurança 100% no Navegador',
      content: [
        'No SRTConverters.info, tratamos a segurança e o sigilo dos seus conteúdos com prioridade absoluta. Todas as conversões entre SRT e WebVTT são realizadas estritamente no motor do seu navegador por meio de JavaScript local.',
        'Seus arquivos de legendas, transcrições de vídeo, diálogos corporativos e materiais confidenciais nunca são enviados, gravados ou armazenados em servidores externos ou em nuvens de terceiros. Você pode até mesmo desconectar sua internet após carregar a página que a ferramenta continuará funcionando perfeitamente.',
        'Essa arquitetura 100% local elimina qualquer risco de vazamento de informações, tornando nosso conversor seguro para reuniões confidenciais, processos jurídicos, entrevistas e arquivos médicos.',
      ],
    },
  },
  faqs: [
    {
      question: 'Posso apenas renomear a extensão do meu arquivo de .srt para .vtt?',
      answer: 'Não. Simplesmente trocar a extensão do arquivo não o torna um arquivo WebVTT válido. O formato WebVTT exige a presença do cabeçalho "WEBVTT" no início e requer que os milissegundos sejam separados por ponto e não por vírgula (00:00:01.000 em vez de 00:00:01,000). Os navegadores web rejeitarão o arquivo renomeado.',
    },
    {
      question: 'Por que minhas legendas WebVTT não aparecem no player HTML5?',
      answer: 'Existem três causas muito comuns: 1) O arquivo não possui o cabeçalho "WEBVTT" na linha 1; 2) Os carimbos de data/hora ainda possuem vírgulas em vez de pontos; ou 3) Seu servidor não está enviando o tipo MIME correto (text/vtt) ou está bloqueando requisições por CORS. O nosso conversor corrige automaticamente a sintaxe e a pontuação do arquivo.',
    },
    {
      question: 'Qual a diferença entre legendas normais (subtitles) e legendas descritivas (captions)?',
      answer: 'As legendas para tradução (kind="subtitles") destinam-se a espectadores que ouvem o áudio mas não compreendem o idioma falado, transcrevendo apenas diálogos. Já as closed captions (kind="captions") atendem pessoas surdas ou com perda auditiva; além das falas, elas descrevem efeitos sonoros, nomes de personagens e músicas (ex: [Aplausos], [Música animada]). O WebVTT suporta ambos através do atributo kind no HTML5.',
    },
    {
      question: 'Como posso personalizar o estilo das legendas WebVTT com CSS?',
      answer: 'Você pode personalizar as legendas diretamente no CSS do seu site usando o seletor ::cue. Por exemplo: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }',
    },
    {
      question: 'O WebVTT funciona em celulares como iPhone (Safari) e Android (Chrome)?',
      answer: 'Sim! O WebVTT é compatível com todos os navegadores móveis modernos, incluindo o Safari no iOS/iPadOS e o Chrome no Android. Ao reproduzir vídeos em tela cheia no celular, o sistema operacional utiliza a trilha WebVTT para renderizar as legendas conforme as preferências de acessibilidade do usuário.',
    },
    {
      question: 'Posso enviar arquivos WebVTT (.vtt) para o YouTube e Vimeo?',
      answer: 'Sim. Tanto o YouTube quanto o Vimeo aceitam arquivos WebVTT nativamente. O WebVTT é especialmente vantajoso caso suas legendas contenham posições personalizadas para não encobrir legendas de terço inferior do vídeo.',
    },
    {
      question: 'Existe algum limite de tamanho de arquivo neste conversor?',
      answer: 'Não. Como toda a conversão ocorre localmente no seu computador sem trafegar dados pela internet, não existem limites de tamanho, contagem de caracteres ou cobranças. Você pode converter filmes de longa-metragem ou cursos de várias horas sem qualquer restrição.',
    },
    {
      question: 'O conversor preserva acentuações, caracteres especiais e emojis?',
      answer: 'Sim. O conversor utiliza processamento nativo em UTF-8, mantendo integralmente todos os acentos da língua portuguesa (á, é, ã, ç), caracteres internacionais, escritas não latinas (árabe, japonês, coreano) e emojis Unicode sem distorções.',
    },
  ],
};

const frContent = {
  metaTitle: 'Convertisseur SRT en VTT Gratuit en Ligne – WebVTT Rapide et Local',
  metaDescription: 'Convertissez vos sous-titres SRT au format WebVTT (.vtt) en ligne et gratuitement. Ajout automatique de l\'en-tête WEBVTT et conversion des virgules avec 100% de confidentialité.',
  h1: 'Convertisseur SRT en VTT',
  heroDescription: 'Convertissez instantanément vos fichiers de sous-titres SubRip (.srt) au format standardisé WebVTT (.vtt) conforme au W3C pour les lecteurs vidéo HTML5, les flux de streaming et le web moderne. 100% gratuit, rapide et privé dans votre navigateur.',
  toolName: 'Convertisseur SRT en VTT',
  ui: {
    pasteTitle: 'Entrée des Sous-Titres SRT (.srt)',
    pastePlaceholder: 'Collez votre contenu SRT ici (ex :\n1\n00:00:01,000 --> 00:00:04,000\nBienvenue dans notre tutoriel vidéo !)...',
    orDivider: 'OU',
    uploadTitle: 'Option 2 — Téléverser un Fichier SRT',
    convertButton: 'Convertir en VTT',
    clearButton: 'Effacer',
    trySampleButton: 'Charger un Exemple',
    livePreviewTitle: 'Résultat WebVTT Converti (.vtt)',
    errorNoInput: 'Veuillez coller du texte SRT ou téléverser un fichier .srt pour lancer la conversion.',
    pastedContentSource: 'Contenu SRT Collé',
    dropzoneTitle: 'Glissez-déposez votre fichier .srt ici',
    dropzoneSubtitle: 'ou cliquez pour parcourir vos dossiers',
    browseButton: 'Choisir un Fichier SRT',
    dropActiveText: 'Déposez le fichier SRT ici...',
    fileSelected: 'Fichier sélectionné',
    fileNameLabel: 'Nom du Fichier',
    fileSizeLabel: 'Taille du Fichier',
    cueCountLabel: 'Sous-titres Convertis',
    characterCountLabel: 'Caractères',
    downloadAction: 'Télécharger .vtt',
    copyAction: 'Copier dans le Presse-papiers',
    copiedSuccess: 'Copié avec succès !',
    resetAction: 'Convertir un Autre Fichier',
    previewTitle: 'Aperçu du Fichier WebVTT',
    previewEmpty: 'Vos sous-titres WebVTT (.vtt) convertis s\'afficheront ici immédiatement après avoir saisi ou chargé un fichier SRT.',
    optionsTitle: 'Options de Conversion',
    optIncludeCueNumbers: 'Conserver les numéros d\'index des sous-titres',
    optCleanTags: 'Nettoyer les balises obsolètes non prises en charge (ex : <font>)',
    errorInvalidFile: 'Veuillez sélectionner un fichier de sous-titres .srt valide.',
    errorEmptyFile: 'Le fichier ou texte renseigné est totalement vide.',
    errorParseFailed: 'Aucun bloc de sous-titres SRT valide n\'a été détecté. Vérifiez que les horodatages respectent le format 00:00:00,000 --> 00:00:00,000.',
  },
  sections: {
    whatIsSrt: {
      title: 'Qu\'est-ce qu\'un fichier SRT ?',
      content: [
        'Un fichier SRT (SubRip Subtitle) est le format de sous-titres en texte brut le plus universel et historiquement répandu dans le domaine de la vidéo numérique. Créé à l\'origine par l\'utilitaire Windows SubRip pour extraire les sous-titres et minutages des DVD physiques, le format .srt s\'est imposé comme le standard mondial pour les lecteurs multimédias sur ordinateur, les téléviseurs et les logiciels de montage vidéo.',
        'Sur le plan structurel, un fichier SRT est composé de blocs séquentiels séparés par des sauts de ligne. Chaque bloc comprend quatre éléments indispensables : un numéro d\'index séquentiel (1, 2, 3...), une plage d\'horodatage précise indiquant l\'apparition et la disparition du sous-titre (strictement formatée en heures:minutes:secondes,millisecondes : 00:00:01,250 --> 00:00:04,500), une ou plusieurs lignes de texte de dialogue et un saut de ligne final.',
        'Bien que les fichiers SRT soient extrêmement simples et reconnus par la quasi-totalité des logiciels autonomes comme VLC Media Player, MPV, HandBrake et Premiere Pro, ils ont été conçus avant l\'ère du web moderne. Par conséquent, les navigateurs web HTML5 ne peuvent pas lire nativement les fichiers SRT et ne disposent d\'aucun mécanisme officiel pour adapter leur typographie ou leur disposition avec CSS.',
      ],
    },
    whatIsVtt: {
      title: 'Qu\'est-ce qu\'un fichier WebVTT (.vtt) ?',
      content: [
        'WebVTT (Web Video Text Tracks) est la norme ouverte officielle pour les sous-titres, transcriptions et chapitrages de vidéos sur internet, développée par le World Wide Web Consortium (W3C) et le WHATWG. Intégré directement aux spécifications HTML5, le format WebVTT est lu de manière native par l\'ensemble des navigateurs web modernes —dont Google Chrome, Mozilla Firefox, Apple Safari et Microsoft Edge— sans recourir à des bibliothèques JavaScript tierces ni à des lecteurs flash.',
        'Un fichier WebVTT se caractérise par son en-tête d\'ouverture obligatoire : la toute première ligne du document doit obligatoirement débuter par la mention littérale "WEBVTT". À la suite de cette signature, le fichier peut inclure des métadonnées (comme l\'auteur, la langue ou le titre) ainsi que des règles de style avant le début des blocs de sous-titres.',
        'Au-delà de l\'affichage de texte, le format WebVTT est pensé pour les interfaces web modernes et réactives. Il prend en charge des paramètres de positionnement vertical, d\'alignement horizontal et de dimensionnement. De plus, il s\'intègre parfaitement avec CSS via le pseudo-élément ::cue, offrant aux développeurs et créateurs de contenu un contrôle total sur les polices, les couleurs, les ombres de texte et l\'opacité d\'arrière-plan.',
      ],
    },
    whatIsConverter: {
      title: 'Qu\'est-ce qu\'un Convertisseur SRT en VTT ?',
      content: [
        'Un convertisseur SRT en VTT est un outil spécialisé conçu pour adapter les fichiers de sous-titres traditionnels aux exigences des lecteurs web modernes. Il analyse la syntaxe SubRip (.srt), effectue les transformations mathématiques et typographiques requises, et génère des fichiers WebVTT (.vtt) conformes aux recommandations du W3C pour une intégration directe dans la balise <video> en HTML5.',
        'La transformation majeure effectuée par le convertisseur concerne la ponctuation des millisecondes dans les codes temporels. Dans le format SRT, les millisecondes sont séparées par une virgule (ex. 00:01:23,450). La norme WebVTT exige formellement un point décimal ASCII (00:01:23.450). La présence d\'une seule virgule dans un fichier VTT entraîne le rejet immédiat de la piste par les navigateurs web.',
        'Notre outil effectue l\'ensemble des opérations de conversion 100% en local dans votre navigateur web via JavaScript. Aucun fichier ni texte n\'est envoyé sur des serveurs distants, vous garantissant un traitement instantané, une confidentialité absolue et aucune restriction de taille.',
      ],
    },
    srtVsVtt: {
      title: 'SRT vs VTT : Principales Différences Techniques',
      content: [
        'Bien que les formats SRT et WebVTT partagent une structure similaire en apparence, plusieurs différences architecturales cruciales les distinguent :',
        '1. En-tête de Fichier Obligatoire : Un fichier SRT commence immédiatement à la première ligne par l\'index "1". En revanche, un fichier WebVTT DOIT impérativement débuter par le mot "WEBVTT" sur sa toute première ligne. Sans cet en-tête, le navigateur ignore le fichier.',
        '2. Séparateur de Millisecondes : Le format SRT utilise des virgules (00:00:05,200), alors que WebVTT emploie des points (00:00:05.200). WebVTT autorise également des minutages courts sans heures (ex : 05.200 --> 08.400), bien que le format complet HH:MM:SS.mmm demeure le standard universel recommandé.',
        '3. Positionnement et Alignement à l\'Écran : Le format SRT ne propose aucune méthode standardisée pour placer le texte à l\'écran ; les sous-titres sont calés au centre en bas. WebVTT intègre des paramètres de disposition directement sur la ligne temporelle ("line:10%", "position:80%", "align:left", "size:50%"), évitant ainsi de masquer des éléments visuels importants.',
        '4. Personnalisation Visuelle et Styles : Le format SRT repose sur des balises historiques comme <i>, <b> ou <font color="..."> souvent neutralisées pour des raisons de sécurité. WebVTT supporte les voix d\'orateurs (<v Personnage>), les annotations ruby, les classes CSS (<c.alerte>) et le stylage complet avec le sélecteur ::cue.',
        '5. Compatibilité avec le Streaming HLS et DASH : Les protocoles de diffusion modernes tels qu\'Apple HLS et MPEG-DASH distribuent les sous-titres sous forme de segments WebVTT. Tenter d\'injecter des fichiers SRT bruts dans un flux HLS provoque des erreurs de lecture systématiques sur Safari et iOS.',
      ],
    },
    whyConvert: {
      title: 'Pourquoi Convertir du SRT en VTT ?',
      benefits: [
        {
          title: 'Compatibilité Vidéo HTML5 Native',
          description: 'Lecture immédiate dans Google Chrome, Safari, Firefox et Edge via la balise <track>, sans lecteur flash ni script JavaScript externe.',
        },
        {
          title: 'Personnalisation Complète avec CSS',
          description: 'Ajustez facilement la police, les couleurs de surbrillance, l\'arrière-plan et les marges des sous-titres avec le pseudo-élément ::cue.',
        },
        {
          title: 'Contrôle Précis de la Position',
          description: 'Placez vos sous-titres en haut, en bas ou sur les côtés pour ne pas masquer les bandeaux d\'informations ou les visages des intervenants.',
        },
        {
          title: 'Conforme aux Normes HLS et DASH',
          description: 'Le format requis par les architectures de diffusion modernes pour gérer des pistes de sous-titres multilingues synchronisées.',
        },
        {
          title: 'Accessibilité Renforcée et Référencement SEO',
          description: 'Améliore l\'accessibilité pour les personnes malentendantes et permet l\'indexation de vos dialogues par les moteurs de recherche.',
        },
        {
          title: 'Fichiers Ultra-Légers et Rapides',
          description: 'Format texte UTF-8 pesant seulement quelques kilo-octets, garantissant un chargement instantané sans altérer les Core Web Vitals.',
        },
      ],
    },
    howToConvert: {
      title: 'Comment Convertir SRT en VTT en 3 Étapes Simples',
      steps: [
        {
          title: '1. Collez le Texte ou Déposez votre Fichier .srt',
          description: 'Collez le texte dans le volet de gauche ou glissez-déposez votre fichier .srt dans la zone de téléversement. Vous pouvez aussi cliquer sur "Choisir un Fichier SRT".',
        },
        {
          title: '2. Conversion Automatique et Instantanée',
          description: 'Le convertisseur analyse les blocs de sous-titres, ajoute l\'en-tête WEBVTT, transforme les virgules en points et met à jour l\'aperçu en temps réel.',
        },
        {
          title: '3. Téléchargez ou Copiez votre Fichier WebVTT',
          description: 'Cliquez sur "Télécharger .vtt" pour enregistrer votre fichier ou utilisez "Copier dans le Presse-papiers" pour intégrer directement le texte dans votre projet.',
        },
      ],
    },
    commonErrorsAndFixes: {
      title: 'Erreurs Courantes dans les Sous-Titres SRT/VTT et Solutions',
      items: [
        {
          title: 'Erreur : Les sous-titres ne s\'affichent pas dans le navigateur (Virgule d\'horodatage)',
          description: 'Cause : Le fichier contient des virgules dans les codes temporels (ex : 00:00:02,500). Les navigateurs rejettent ce format. Solution : Convertissez toutes les virgules en points (00:00:02.500) avec notre outil.',
        },
        {
          title: 'Erreur : Le navigateur signale une erreur de syntaxe (En-tête WEBVTT manquant)',
          description: 'Cause : Renommer l\'extension .srt en .vtt sans ajouter l\'en-tête. Solution : La toute première ligne du document doit obligatoirement contenir "WEBVTT".',
        },
        {
          title: 'Erreur : Caractères accentués illisibles (Encodage et BOM)',
          description: 'Cause : Fichiers enregistrés en UTF-16, ANSI ou avec un indicateur d\'ordre des octets (BOM). Solution : Notre convertisseur supprime le BOM invisible et produit de l\'UTF-8 standard.',
        },
        {
          title: 'Erreur : Sous-titres qui clignotent ou se chevauchent',
          description: 'Cause : Le sous-titre 1 se termine à 00:00:05.000 alors que le sous-titre 2 commence à 00:00:04.500. Solution : Vérifiez que l\'heure de fin d\'un bloc est antérieure ou égale au début du suivant.',
        },
        {
          title: 'Erreur : Blocage lié aux règles CORS',
          description: 'Cause : Lorsque le fichier .vtt est hébergé sur un domaine distinct de la vidéo, le navigateur bloque la requête. Solution : Configurez l\'en-tête "Access-Control-Allow-Origin: *" sur votre serveur.',
        },
      ],
    },
    html5VideoGuide: {
      title: 'Comment Utiliser des Sous-Titres VTT avec la Balise <video> HTML5',
      description: 'L\'intégration de sous-titres WebVTT dans une page web est particulièrement simple : il suffit d\'utiliser la balise native <track> imbriquée dans votre élément <video>. Voici le modèle de code recommandé :',
      codeSnippet: `<video controls width="800" poster="/images/affiche.jpg">
  <!-- Fichiers sources vidéo -->
  <source src="/videos/cours.mp4" type="video/mp4">
  <source src="/videos/cours.webm" type="video/webm">

  <!-- Pistes de sous-titres WebVTT -->
  <track 
    kind="subtitles" 
    src="/sous-titres/cours-fr.vtt" 
    srclang="fr" 
    label="Français" 
    default>
  
  <track 
    kind="subtitles" 
    src="/sous-titres/cours-en.vtt" 
    srclang="en" 
    label="English">

  <p>Votre navigateur ne prend pas en charge la vidéo HTML5. <a href="/videos/cours.mp4">Téléchargez la vidéo</a> pour la visionner.</p>
</video>`,
      explanation: [
        {
          term: 'kind="subtitles"',
          description: 'Définit le rôle de la piste. Utilisez "subtitles" pour traduire des dialogues ou "captions" pour des sous-titres sourds et malentendants incluant les bruits de fond.',
        },
        {
          term: 'src="chemin/vers/fichier.vtt"',
          description: 'L\'URL relative ou absolue de votre fichier WebVTT. Assurez-vous que le serveur le délivre avec le type MIME "text/vtt; charset=utf-8".',
        },
        {
          term: 'srclang="fr"',
          description: 'Le code de langue BCP 47 (comme "fr" pour le français, "en" pour l\'anglais), indispensable pour les outils de synthèse vocale et de traduction.',
        },
        {
          term: 'label="Français"',
          description: 'L\'intitulé affiché dans le menu des sous-titres (CC) du lecteur vidéo afin de permettre à l\'utilisateur de choisir sa langue.',
        },
        {
          term: 'default',
          description: 'Attribut indiquant que cette piste sera activée par défaut lors de la lecture du média.',
        },
      ],
    },
    comparison: {
      title: 'Tableau Comparatif : SRT vs WebVTT',
      description: 'Découvrez les caractéristiques techniques, niveaux de compatibilité et spécifications respectives de SubRip (.srt) et WebVTT (.vtt) :',
      headers: ['Critère Technique', 'SubRip (.srt)', 'WebVTT (.vtt)'],
      rows: [
        ['Environnement d\'Usage Principal', 'Lecteurs de bureau (VLC) et montage vidéo', 'Navigateurs web HTML5, applications mobiles et streaming'],
        ['En-tête de Fichier Obligatoire', 'Aucun (débute avec l\'index 1)', 'Obligatoire ("WEBVTT" à la première ligne)'],
        ['Séparateur de Millisecondes', 'Virgule (ex : 00:01:23,450)', 'Point décimal (ex : 00:01:23.450)'],
        ['Lecture Web Native', 'Non (nécessite des scripts JS comme video.js)', 'Oui (native via la balise <track> dans tous les navigateurs)'],
        ['Prise en Charge des Styles', 'Balises anciennes très restreintes (<i>, <b>, <font>)', 'Contrôle complet avec CSS via le pseudo-élément ::cue'],
        ['Positionnement sur l\'Écran', 'Non standardisé (centré en bas par défaut)', 'Attributs natifs : line, position, size, align'],
        ['Streaming HLS / MPEG-DASH', 'Non compatible (doit être transcodé)', 'Format standard pour les pistes de sous-titres en streaming'],
        ['Métadonnées et Commentaires', 'Aucune syntaxe officielle de commentaires', 'Prise en charge des blocs NOTE et des en-têtes STYLE'],
        ['Extension de Fichier Usuelle', '.srt', '.vtt'],
        ['Type MIME Officiel', 'application/x-subrip', 'text/vtt; charset=utf-8'],
      ],
    },
    privacy: {
      title: 'Garantie de Confidentialité et Sécurité 100% Locale',
      content: [
        'Sur SRTConverters.info, la sécurité de vos données et le respect de votre vie privée sont fondamentaux. Toutes les conversions entre SRT et WebVTT sont traitées exclusivement au sein de votre navigateur via JavaScript.',
        'Vos sous-titres, transcriptions professionnelles, documents juridiques et vidéos personnelles ne sont jamais envoyés ni conservés sur des serveurs externes. Vous pouvez même couper votre connexion internet après le chargement de la page : l\'outil fonctionnera toujours sans aucune interruption.',
        'Cette architecture locale élimine tout risque de fuite de données, ce qui en fait une solution parfaite pour les entreprises, conférences internes, enregistrements médicaux et créateurs de contenu indépendants.',
      ],
    },
  },
  faqs: [
    {
      question: 'Puis-je simplement renommer l\'extension .srt en .vtt ?',
      answer: 'Non. Renommer l\'extension d\'un fichier ne le transforme pas en WebVTT valide. WebVTT exige obligatoirement l\'en-tête "WEBVTT" à la première ligne et impose des points à la place des virgules pour les millisecondes (00:00:01.000 au lieu de 00:00:01,000). Les navigateurs refuseront de charger un fichier SRT simplement renommé.',
    },
    {
      question: 'Pourquoi mes sous-titres WebVTT ne s\'affichent-ils pas dans mon lecteur HTML5 ?',
      answer: 'Il y a trois causes fréquentes : 1) La mention "WEBVTT" est absente de la première ligne ; 2) Les codes temporels contiennent encore des virgules ; ou 3) Votre serveur n\'envoie pas le bon type MIME (text/vtt) ou bloque la ressource à cause des règles CORS. Notre convertisseur s\'assure que votre syntaxe et vos horodatages sont 100% conformes.',
    },
    {
      question: 'Quelle est la différence entre sous-titres de traduction (subtitles) et sous-titres pour malentendants (captions) ?',
      answer: 'Les sous-titres de traduction (kind="subtitles") sont conçus pour les personnes qui entendent l\'audio mais ne comprennent pas la langue parlée ; ils ne retranscrivent que les dialogues. Les sous-titres pour sourds et malentendants (kind="captions") retranscrivent également les bruitages, l\'ambiance sonore et l\'identification des voix (ex : [Applaudissements], [Musique entraînante]). WebVTT prend en charge ces deux usages via l\'attribut kind.',
    },
    {
      question: 'Comment personnaliser l\'apparence des sous-titres VTT en CSS ?',
      answer: 'Vous pouvez modifier l\'aspect des sous-titres directement dans la feuille de style de votre site en utilisant le pseudo-élément ::cue. Par exemple : video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }',
    },
    {
      question: 'Le format WebVTT fonctionne-t-il sur smartphone (iPhone Safari et Android Chrome) ?',
      answer: 'Oui ! WebVTT est pris en charge sur tous les navigateurs mobiles modernes, y compris Safari sur iOS et Chrome sur Android. Lors du passage en plein écran, le système d\'exploitation affiche automatiquement les sous-titres WebVTT selon les paramètres d\'accessibilité définis par l\'utilisateur.',
    },
    {
      question: 'Puis-je importer des fichiers WebVTT (.vtt) sur YouTube et Vimeo ?',
      answer: 'Oui, YouTube et Vimeo prennent parfaitement en charge les fichiers de sous-titres WebVTT aux côtés du format SRT. WebVTT est particulièrement recommandé si vous avez défini des positions spécifiques pour éviter que le texte ne chevauche les synthés ou bandeaux vidéo.',
    },
    {
      question: 'Existe-t-il une limite de taille de fichier sur ce convertisseur ?',
      answer: 'Non. Comme l\'ensemble du traitement a lieu sur votre machine sans téléversement sur internet, il n\'y a aucune limitation de taille, de durée ni de volume. Vous pouvez convertir des films complets ou des heures d\'enregistrements sans contrainte.',
    },
    {
      question: 'Ce convertisseur prend-il en charge les caractères accentués, les emojis et les alphabets non latins ?',
      answer: 'Oui. Notre convertisseur s\'appuie sur un traitement UTF-8 natif, garantissant la préservation parfaite des accents de la langue française (é, è, à, ç, œ), des écritures non latines (arabe, japonais, coréen) et des emojis Unicode sans altération.',
    },
  ],
};

// Write files
fs.writeFileSync(path.join(targetDir, 'es.ts'), `import type { SrtToVttDetailContent } from './types';\n\nexport const esContent: SrtToVttDetailContent = ${JSON.stringify(esContent, null, 2)};\n`, 'utf-8');
console.log('✓ Successfully wrote comprehensive es.ts');

fs.writeFileSync(path.join(targetDir, 'pt.ts'), `import type { SrtToVttDetailContent } from './types';\n\nexport const ptContent: SrtToVttDetailContent = ${JSON.stringify(ptContent, null, 2)};\n`, 'utf-8');
console.log('✓ Successfully wrote comprehensive pt.ts');

fs.writeFileSync(path.join(targetDir, 'fr.ts'), `import type { SrtToVttDetailContent } from './types';\n\nexport const frContent: SrtToVttDetailContent = ${JSON.stringify(frContent, null, 2)};\n`, 'utf-8');
console.log('✓ Successfully wrote comprehensive fr.ts');
