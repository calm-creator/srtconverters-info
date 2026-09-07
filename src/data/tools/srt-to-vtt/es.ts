import type { SrtToVttDetailContent } from './types';

export const esContent: SrtToVttDetailContent = {
  "metaTitle": "Convertidor SRT a VTT Gratis Online – Rápido y 100% en el Navegador",
  "metaDescription": "Convierta archivos de subtítulos SRT a formato WebVTT (.vtt) válido online y gratis. Añade encabezado WEBVTT y convierte marcas de tiempo con total privacidad.",
  "h1": "Convertidor SRT a VTT",
  "heroDescription": "Transforme fácilmente subtítulos SubRip (.srt) al estándar WebVTT (.vtt) compatible con W3C para reproductores de vídeo HTML5, plataformas de streaming y aplicaciones web modernas. 100% gratuito, instantáneo y con privacidad estricta en su navegador.",
  "toolName": "Convertidor SRT a VTT",
  "ui": {
    "pasteTitle": "Entrada de Subtítulo SRT (.srt)",
    "pastePlaceholder": "Pega el contenido de tu archivo SRT aquí (ej:\n1\n00:00:01,000 --> 00:00:04,000\n¡Bienvenidos a nuestro tutorial en vídeo!)...",
    "orDivider": "O",
    "uploadTitle": "Opción 2 — Subir Archivo SRT",
    "convertButton": "Convertir a VTT",
    "clearButton": "Limpiar",
    "trySampleButton": "Probar Ejemplo",
    "livePreviewTitle": "Salida WebVTT Convertida (.vtt)",
    "errorNoInput": "Por favor, pega texto de subtítulo SRT o sube un archivo .srt para convertir.",
    "pastedContentSource": "Contenido SRT Pegado",
    "dropzoneTitle": "Arrastra y suelta tu archivo .srt aquí",
    "dropzoneSubtitle": "o haz clic para buscarlo en tu dispositivo",
    "browseButton": "Seleccionar Archivo SRT",
    "dropActiveText": "Suelta el archivo SRT aquí...",
    "fileSelected": "Archivo seleccionado",
    "fileNameLabel": "Nombre del Archivo",
    "fileSizeLabel": "Tamaño del Archivo",
    "cueCountLabel": "Subtítulos Convertidos",
    "characterCountLabel": "Caracteres",
    "downloadAction": "Descargar .vtt",
    "copyAction": "Copiar al Portapapeles",
    "copiedSuccess": "¡Copiado con éxito!",
    "resetAction": "Convertir Otro Archivo",
    "previewTitle": "Vista Previa de WebVTT Convertido",
    "previewEmpty": "Tus subtítulos WebVTT (.vtt) convertidos aparecerán aquí de inmediato tras escribir o subir un archivo SRT.",
    "optionsTitle": "Opciones de Conversión",
    "optIncludeCueNumbers": "Incluir números identificadores de bloque",
    "optCleanTags": "Eliminar etiquetas antiguas no compatibles (ej. <font>)",
    "errorInvalidFile": "Por favor, sube un archivo de subtítulo .srt válido.",
    "errorEmptyFile": "El archivo o texto introducido está completamente vacío.",
    "errorParseFailed": "No se pudieron detectar bloques válidos de subtítulos SRT. Asegúrate de que las marcas de tiempo sigan el formato 00:00:00,000 --> 00:00:00,000."
  },
  "sections": {
    "whatIsSrt": {
      "title": "¿Qué es un archivo SRT?",
      "content": [
        "Un archivo SRT (SubRip Subtitle) es el formato de subtítulos en texto plano más ubicuo y difundido históricamente en el vídeo digital. Originado en el software de Windows SubRip —creado para extraer subtítulos y sincronizaciones de DVDs físicos—, el formato .srt se convirtió en el estándar mundial para reproductores multimedia de escritorio, televisores, distribución de vídeo y suites de edición profesional.",
        "Estructuralmente, un archivo SRT está compuesto por bloques secuenciales de subtítulos separados por líneas en blanco. Cada bloque contiene cuatro componentes fundamentales: un número de índice secuencial (1, 2, 3...), una definición temporal exacta que indica cuándo aparece y desaparece el subtítulo (formateada estrictamente como horas:minutos:segundos,milisegundos: 00:00:01,250 --> 00:00:04,500), una o más líneas de diálogo y un salto de línea final.",
        "Aunque los archivos SRT son simples y gozan de una compatibilidad casi universal en programas independientes como VLC Media Player, MPV, HandBrake y Adobe Premiere Pro, fueron concebidos antes de la web moderna. En consecuencia, el formato SRT carece de soporte nativo en los navegadores web HTML5 y no ofrece mecanismos estandarizados para tipografía adaptable, posicionamiento geométrico ni estilos CSS personalizados."
      ]
    },
    "whatIsVtt": {
      "title": "¿Qué es un archivo WebVTT (.vtt)?",
      "content": [
        "WebVTT (Web Video Text Tracks) es el estándar abierto oficial para subtítulos, transcripciones y capítulos creado específicamente para la web por el World Wide Web Consortium (W3C) y el WHATWG. Introducido junto con la especificación de HTML5, WebVTT es soportado nativamente por todos los navegadores web modernos —incluyendo Google Chrome, Mozilla Firefox, Apple Safari y Microsoft Edge— sin necesidad de complementos de JavaScript de terceros, reproductores externos ni transcodificación en el servidor.",
        "Un archivo WebVTT se reconoce por su cabecera introductoria obligatoria: la primera línea del documento debe comenzar siempre con el texto literal \"WEBVTT\". Tras esta firma, los archivos WebVTT pueden incluir opcionalmente bloques de metadatos (como autor, título o idioma) y hojas de estilo incrustadas antes de dar paso a los bloques de subtítulos individuales.",
        "Además de mostrar diálogos básicos, WebVTT está diseñado para interfaces web interactivas y responsivas. Ofrece ajustes integrados para orientación vertical, desplazamiento horizontal, posición de línea, alineación de texto y tamaño del recuadro. Asimismo, WebVTT se integra perfectamente con CSS moderno a través del pseudo-elemento ::cue, permitiendo a diseñadores y desarrolladores controlar fuentes, sombras de texto, opacidad de fondo y paletas de color directamente desde la hoja de estilos de su sitio web."
      ]
    },
    "whatIsConverter": {
      "title": "¿Qué es un Convertidor SRT a VTT?",
      "content": [
        "Un convertidor SRT a VTT es una herramienta especializada en subtítulos diseñada para tender un puente entre los formatos de producción de vídeo tradicionales y la distribución web moderna. Analiza la sintaxis de los archivos SubRip (.srt), efectúa transformaciones matemáticas y estructurales, y genera archivos WebVTT (.vtt) válidos y conformes a las especificaciones del W3C, listos para incrustarse de inmediato en etiquetas <video> de HTML5.",
        "La principal transformación estructural que realiza el convertidor es la adaptación de los delimitadores temporales. En SRT estándar, los milisegundos van precedidos de una coma (por ejemplo, 00:01:23,450). Sin embargo, la especificación WebVTT exige estrictamente que los milisegundos se delimiten con un punto decimal ASCII (00:01:23.450). Una sola coma en una marca de tiempo hace que los motores multimedia de los navegadores rechacen la pista completa o no muestren los subtítulos.",
        "Nuestro convertidor ejecuta todo el procesamiento, análisis, reestructuración y generación de archivos 100% de manera local en el navegador del cliente. Ningún fragmento de texto ni archivo se envía a servidores externos, lo que garantiza una velocidad instantánea, una privacidad absoluta y cero límites de tamaño de archivo."
      ]
    },
    "srtVsVtt": {
      "title": "SRT vs VTT: Principales Diferencias Técnicas",
      "content": [
        "Aunque SRT y WebVTT comparten raíces comunes y visualmente se asemejan a primera vista, existen diferencias arquitectónicas fundamentales entre ellos:",
        "1. Cabecera Obligatoria del Archivo: Un archivo SRT comienza de inmediato con el número de bloque \"1\" en la primera línea. Por el contrario, un archivo WebVTT DEBE comenzar con \"WEBVTT\" en la primera línea, seguido opcionalmente de comentarios o metadatos. Si el navegador no detecta esta cabecera, rechaza el archivo por error de sintaxis.",
        "2. Sintaxis de Milisegundos en Marcas de Tiempo: SRT utiliza comas (00:00:05,200), mientras que WebVTT utiliza puntos (00:00:05.200). WebVTT también admite marcas de tiempo abreviadas sin horas (por ejemplo, 05.200 --> 08.400) para vídeos cortos, aunque conservar el formato completo HH:MM:SS.mmm es la mejor práctica recomendada.",
        "3. Posicionamiento y Geometría en Pantalla: SRT no tiene una forma estandarizada de posicionar el texto; todo se ubica por defecto en la parte inferior central. WebVTT soporta parámetros de colocación directamente en la línea de tiempo, tales como \"line:10%\", \"position:80%\", \"align:left\" y \"size:50%\", evitando que los subtítulos tapen nombres, rótulos o gráficos inferiores.",
        "4. Capacidades de Estilo y Diseño: SRT depende de etiquetas heredadas como <i>, <b> y <font color=\"...\">, que los reproductores web modernos suelen ignorar o desinfectar por seguridad. WebVTT admite etiquetas de voz (<v Narrador>), anotaciones ruby, clases CSS (<c.resaltado>) y control visual integral mediante el selector CSS ::cue.",
        "5. Distribución de Streaming Web: Protocolos modernos de streaming adaptativo como Apple HLS (HTTP Live Streaming) y MPEG-DASH transmiten pistas de texto empaquetadas en fragmentos WebVTT. Intentar usar archivos SRT sin convertir en un manifiesto HLS causa errores inmediatos de reproducción en dispositivos Apple y navegadores móviles."
      ]
    },
    "whyConvert": {
      "title": "¿Por qué Convertir SRT a VTT?",
      "benefits": [
        {
          "title": "Compatibilidad Nativa con HTML5",
          "description": "Todos los navegadores modernos reproducen WebVTT directamente con la etiqueta <track> sin necesitar pesadas librerías de JavaScript ni complementos externos."
        },
        {
          "title": "Personalización Visual Completa con CSS",
          "description": "Cambia la tipografía, colores, transparencia de fondo, márgenes y sombras de los subtítulos utilizando el pseudo-elemento ::cue de tus hojas de estilo."
        },
        {
          "title": "Posicionamiento Preciso en Pantalla",
          "description": "Coloca los subtítulos en la parte superior, inferior, izquierda o derecha para evitar cubrir información visual clave, gráficos o nombres de ponentes."
        },
        {
          "title": "Conformidad con Streaming HLS y DASH",
          "description": "Las arquitecturas de streaming profesional como Apple HLS, AWS Elemental y Cloudflare Stream requieren WebVTT para entregar subtítulos multilingües."
        },
        {
          "title": "Mejora de Accesibilidad y SEO en Vídeo",
          "description": "Las pistas WebVTT hacen que el contenido sea accesible para personas con discapacidad auditiva y permiten que Google indexe los diálogos del vídeo."
        },
        {
          "title": "Ligero, Instantáneo y Eficiente",
          "description": "Al ser texto plano puro en UTF-8, los archivos WebVTT pesan apenas unos kilobytes y se descargan al instante sin afectar la velocidad ni los Core Web Vitals."
        }
      ]
    },
    "howToConvert": {
      "title": "Cómo Convertir SRT a VTT en 3 Pasos Sencillos",
      "steps": [
        {
          "title": "1. Pega el Texto o Sube tu Archivo .srt",
          "description": "Pega el texto de tus subtítulos SRT en el panel izquierdo o arrastra tu archivo .srt a la zona de carga. También puedes hacer clic en \"Seleccionar Archivo SRT\"."
        },
        {
          "title": "2. Conversión Automática en el Navegador",
          "description": "El convertidor analiza los bloques de subtítulos, inserta la cabecera WEBVTT, sustituye las comas por puntos en los tiempos y actualiza la vista previa al instante."
        },
        {
          "title": "3. Copia o Descarga tu Archivo WebVTT",
          "description": "Haz clic en \"Descargar .vtt\" para guardar el archivo listo para usar en tu dispositivo, o pulsa \"Copiar al Portapapeles\" para pegarlo directamente en tu proyecto."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Errores Habituales en Subtítulos SRT y VTT y Soluciones",
      "items": [
        {
          "title": "Error: Los subtítulos no se muestran en el navegador (Delimitador de Coma)",
          "description": "Causa: El archivo conserva marcas de tiempo SRT con comas (ej. 00:00:02,500). Los navegadores fallan de inmediato al encontrarlas. Solución: Convierte todas las comas en puntos decimales (00:00:02.500) con nuestra herramienta."
        },
        {
          "title": "Error: El navegador rechaza la pista por error de sintaxis (Falta Cabecera WEBVTT)",
          "description": "Causa: Se cambió la extensión de .srt a .vtt sin añadir la cabecera obligatoria. Solución: La primera línea del archivo debe contener estrictamente \"WEBVTT\", seguida de una línea en blanco."
        },
        {
          "title": "Error: Caracteres corruptos o acentos rotos (Codificación y BOM)",
          "description": "Causa: Subtítulos guardados en UTF-16, ANSI o UTF-8 con marca de orden de bytes (BOM). Solución: Nuestro convertidor elimina artefactos BOM invisibles y exporta en UTF-8 universal limpio."
        },
        {
          "title": "Error: Marcas de tiempo solapadas y texto parpadeante",
          "description": "Causa: El subtítulo 1 termina a las 00:00:05.000 pero el subtítulo 2 comienza antes, a las 00:00:04.500. Solución: Revisa que el tiempo final de cada bloque sea igual o menor al inicio del siguiente."
        },
        {
          "title": "Error: Bloqueo de CORS (Cross-Origin Resource Sharing)",
          "description": "Causa: Al alojar el archivo .vtt en un CDN o dominio diferente al de la página del vídeo, el navegador bloquea la petición. Solución: Configura en tu servidor la cabecera \"Access-Control-Allow-Origin: *\" y el tipo MIME \"text/vtt\"."
        }
      ]
    },
    "html5VideoGuide": {
      "title": "Cómo se Utilizan los Subtítulos VTT en Vídeo HTML5",
      "description": "Implementar subtítulos WebVTT en un reproductor de vídeo HTML5 es sumamente fácil y requiere únicamente la etiqueta nativa <track> anidada dentro del elemento <video>. A continuación se muestra la estructura estándar recomendada:",
      "codeSnippet": "<video controls width=\"800\" poster=\"/imagenes/portada.jpg\">\n  <!-- Archivos de vídeo principales -->\n  <source src=\"/videos/tutorial.mp4\" type=\"video/mp4\">\n  <source src=\"/videos/tutorial.webm\" type=\"video/webm\">\n\n  <!-- Pistas de subtítulos WebVTT -->\n  <track \n    kind=\"subtitles\" \n    src=\"/subtitulos/tutorial-es.vtt\" \n    srclang=\"es\" \n    label=\"Español\" \n    default>\n  \n  <track \n    kind=\"subtitles\" \n    src=\"/subtitulos/tutorial-en.vtt\" \n    srclang=\"en\" \n    label=\"English\">\n\n  <p>Tu navegador no soporta vídeo HTML5. <a href=\"/videos/tutorial.mp4\">Descarga el vídeo</a> para reproducirlo.</p>\n</video>",
      "explanation": [
        {
          "term": "kind=\"subtitles\"",
          "description": "Indica el tipo de pista de texto. Usa \"subtitles\" para traducciones de diálogo o \"captions\" para subtítulos descriptivos que incluyan efectos de sonido para personas sordas."
        },
        {
          "term": "src=\"ruta/al/archivo.vtt\"",
          "description": "La URL relativa o absoluta de tu archivo WebVTT. Asegúrate de que el servidor lo entregue con la cabecera Content-Type \"text/vtt; charset=utf-8\"."
        },
        {
          "term": "srclang=\"es\"",
          "description": "El código de idioma estándar BCP 47 (como \"es\" para español, \"en\" para inglés o \"fr\" para francés), fundamental para motores de traducción y accesibilidad."
        },
        {
          "term": "label=\"Español\"",
          "description": "El nombre descriptivo que verá el usuario en el menú de subtítulos (CC) del reproductor para seleccionar su idioma preferido."
        },
        {
          "term": "default",
          "description": "Atributo booleano que define que esta pista se activará automáticamente al iniciarse el vídeo, salvo que las preferencias del usuario indiquen lo contrario."
        }
      ]
    },
    "comparison": {
      "title": "Comparativa Técnica: SRT vs WebVTT",
      "description": "Compara detalladamente las capacidades técnicas, compatibilidad y especificaciones de SubRip (.srt) y WebVTT (.vtt):",
      "headers": [
        "Dimensión Técnica",
        "SubRip (.srt)",
        "WebVTT (.vtt)"
      ],
      "rows": [
        [
          "Entorno Principal Previsto",
          "Reproductores de escritorio y suites de edición",
          "Navegadores HTML5, apps móviles y streaming"
        ],
        [
          "Cabecera Inicial Obligatoria",
          "Ninguna (comienza con el índice 1)",
          "Obligatoria \"WEBVTT\" en la primera línea"
        ],
        [
          "Separador de Milisegundos",
          "Coma (ej. 00:01:23,450)",
          "Punto decimal (ej. 00:01:23.450)"
        ],
        [
          "Reproducción Web Nativa",
          "No (requiere librerías JS como video.js)",
          "Sí (nativa mediante etiqueta <track> en todos los navegadores)"
        ],
        [
          "Capacidades de Estilo",
          "Etiquetas heredadas limitadas (<i>, <b>, <font>)",
          "Estilizado CSS integral mediante el selector ::cue"
        ],
        [
          "Posicionamiento y Geometría",
          "No estandarizado (solo inferior-centro)",
          "Atributos nativos: line, position, size, align"
        ],
        [
          "Streaming HLS / MPEG-DASH",
          "No compatible (debe transcodificarse)",
          "Estándar oficial para manifiestos de subtítulos"
        ],
        [
          "Metadatos y Comentarios",
          "Sin soporte estándar para notas",
          "Soporta bloques NOTE y encabezados STYLE"
        ],
        [
          "Extensión de Archivo Habitual",
          ".srt",
          ".vtt"
        ],
        [
          "Tipo MIME Estándar",
          "application/x-subrip",
          "text/vtt; charset=utf-8"
        ]
      ]
    },
    "privacy": {
      "title": "Garantía de Seguridad y Privacidad 100% en el Navegador",
      "content": [
        "En SRTConverters.info valoramos enormemente la confidencialidad de tus datos y tu privacidad. Todas las conversiones entre SRT y WebVTT se ejecutan íntegramente dentro de tu navegador web mediante código JavaScript del lado del cliente.",
        "Tus archivos de subtítulos, transcripciones audiovisuales, propiedad intelectual y diálogos privados nunca se cargan, almacenan ni procesan en servidores remotos ni en la nube. Incluso puedes desconectar tu conexión a internet tras cargar la página y el convertidor continuará funcionando con plena normalidad.",
        "Esta arquitectura 100% cliente elimina cualquier riesgo de fuga de información, haciendo que nuestra herramienta sea idónea para conferencias corporativas, declaraciones legales, grabaciones confidenciales y contenidos médicos protegidos."
      ]
    }
  },
  "faqs": [
    {
      "question": "¿Puedo simplemente cambiar la extensión de mi archivo de .srt a .vtt?",
      "answer": "No. Cambiar la extensión de .srt a .vtt no convierte el archivo en un WebVTT válido. WebVTT requiere obligatoriamente la cabecera \"WEBVTT\" al inicio del documento y exige que las marcas de tiempo utilicen puntos en lugar de comas (00:00:01.000 en vez de 00:00:01,000). Los navegadores web rechazarán el archivo renombrado y no mostrarán los subtítulos."
    },
    {
      "question": "¿Por qué mis subtítulos WebVTT no aparecen en el reproductor de vídeo HTML5?",
      "answer": "Generalmente se debe a tres motivos comunes: 1) Al archivo le falta la cabecera \"WEBVTT\" en la línea 1; 2) Las marcas de tiempo todavía tienen comas en vez de puntos; o 3) El servidor web no está sirviendo el archivo con el tipo MIME correcto (text/vtt) o está bloqueando la petición por CORS. Nuestro convertidor garantiza que la sintaxis y los tiempos de tu archivo sean 100% correctos."
    },
    {
      "question": "¿Cuál es la diferencia entre subtítulos tradicionales (subtitles) y subtítulos descriptivos (captions)?",
      "answer": "Los subtítulos (kind=\"subtitles\") están pensados para espectadores que pueden escuchar el audio pero necesitan traducir el idioma hablado; solo transcriben el diálogo. Los subtítulos descriptivos o cerrados (kind=\"captions\") están diseñados para personas sordas o con problemas de audición; además del diálogo, transcriben efectos sonoros, cambios de música e identificación de hablantes (ej. [Aplausos], [Música alegre]). WebVTT admite ambos mediante el atributo kind en HTML5."
    },
    {
      "question": "¿Cómo puedo personalizar el estilo de los subtítulos WebVTT con CSS?",
      "answer": "Puedes personalizar la apariencia de los subtítulos directamente en tu hoja de estilos utilizando el pseudo-elemento CSS ::cue. Por ejemplo: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }"
    },
    {
      "question": "¿Funciona WebVTT en teléfonos móviles como iPhone (Safari) y Android (Chrome)?",
      "answer": "¡Sí! WebVTT está plenamente soportado en todos los navegadores móviles modernos, incluyendo Safari en iOS/iPadOS y Chrome/Firefox en Android. Cuando los vídeos se reproducen a pantalla completa en dispositivos móviles, el sistema operativo utiliza la pista WebVTT para renderizar subtítulos según las preferencias de accesibilidad del usuario."
    },
    {
      "question": "¿Puedo subir archivos WebVTT (.vtt) a YouTube y Vimeo?",
      "answer": "Sí. Tanto YouTube como Vimeo ofrecen soporte nativo para subir subtítulos en formato WebVTT junto con SRT. WebVTT resulta especialmente ventajoso si tus subtítulos incluyen configuraciones de posición que impiden que el texto tape elementos visuales inferiores de la pantalla."
    },
    {
      "question": "¿Existe algún límite de tamaño de archivo para convertir SRT a VTT en este sitio?",
      "answer": "No. Dado que toda la conversión ocurre localmente en tu propio dispositivo sin transmitir datos a través de internet, no existen restricciones de tamaño de archivo, límites de duración ni barreras de pago. Puedes convertir largometrajes completos, series de conferencias de varias horas o cursos enteros sin ningún problema."
    },
    {
      "question": "¿Este convertidor conserva caracteres no latinos, acentos y emojis?",
      "answer": "Sí. Nuestro convertidor utiliza procesamiento de texto nativo en UTF-8, preservando íntegramente acentos, caracteres especiales, alfabetos no latinos (árabe, japonés, coreano, vietnamita, cirílico, griego) y emojis Unicode sin alterar ni corromper su formato."
    }
  ]
};
