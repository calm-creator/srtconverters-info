import type { TxtToSrtDetailContent } from "./types";

export const esContent: TxtToSrtDetailContent = {
  "metaTitle": "Convertidor TXT a SRT Gratis – Crear Subtítulos desde Texto",
  "metaDescription": "Convierta transcripciones TXT y texto sin formato en subtítulos SRT online. Generación automática de tiempos, división inteligente y procesamiento 100% privado en el navegador.",
  "h1": "Convertidor TXT a SRT",
  "heroDescription": "Transforme guiones, transcripciones y textos sin formato en archivos de subtítulos SubRip (.srt) con marcas de tiempo automáticas y personalizables. Rápido, privado y gratuito.",
  "toolName": "Convertidor TXT a SRT",
  "timingNotice": "Nota sobre el Tiempo: Los archivos de texto no contienen marcas de tiempo de subtítulos. Nuestro convertidor genera automáticamente bloques numerados y marcas de tiempo según sus ajustes. Puede ajustar la sincronización en su editor de video.",
  "ui": {
    "pasteTitle": "Entrada de Texto (.txt)",
    "pastePlaceholder": "Pegue su texto o transcripción aquí (cada línea o párrafo se convertirá en un subtítulo)...\n\nEjemplo:\nHola y bienvenidos a este video tutorial.\nEn esta guía, exploramos la conversión de subtítulos.\nComencemos directamente con los detalles.",
    "orDivider": "O",
    "uploadTitle": "Opción 2 — Subir Archivo TXT",
    "convertButton": "Convertir a SRT",
    "clearButton": "Borrar",
    "trySampleButton": "Probar Ejemplo",
    "livePreviewTitle": "Subtítulos Generados (.srt)",
    "errorNoInput": "Por favor, pegue texto o suba un archivo .txt para convertir.",
    "pastedContentSource": "Contenido de Texto Pegado",
    "dropzoneTitle": "Arrastre y suelte su archivo .txt aquí",
    "dropzoneSubtitle": "o haga clic para buscar en su dispositivo",
    "browseButton": "Seleccionar Archivo TXT",
    "dropActiveText": "Suelte el archivo TXT aquí...",
    "fileSelected": "Archivo seleccionado",
    "fileNameLabel": "Nombre del Archivo",
    "fileSizeLabel": "Tamaño del Archivo",
    "cueCountLabel": "Subtítulos Creados",
    "characterCountLabel": "Caracteres",
    "downloadAction": "Descargar .srt",
    "copyAction": "Copiar al Portapapeles",
    "copiedSuccess": "¡Copiado al portapapeles!",
    "resetAction": "Convertir Otro Texto",
    "previewTitle": "Vista Previa del SRT Generado",
    "previewEmpty": "Sus subtítulos SRT aparecerán aquí inmediatamente después de ingresar el texto.",
    "timingOptionsTitle": "Ajustes de Tiempo y División",
    "optStartTime": "Tiempo Inicial (segundos)",
    "optDuration": "Duración por Subtítulo (segundos)",
    "optGap": "Pausa entre Subtítulos (segundos)",
    "optSplitMethod": "Dividir Texto Por",
    "optSplitParagraphs": "Párrafos (Doble Salto)",
    "optSplitLines": "Cada Línea (Salto Simple)",
    "optSplitSentences": "Oraciones (. ? !)",
    "timingNoticeBadge": "Tiempos Automáticos Generados",
    "errorInvalidFile": "Por favor, suba un archivo de texto (.txt) válido.",
    "errorEmptyFile": "El archivo subido está vacío.",
    "errorParseFailed": "No se pudieron extraer líneas de texto válidas."
  },
  "sections": {
    "whatIsTxt": {
      "title": "¿Qué es un archivo de texto sin formato (TXT)?",
      "content": [
        "Un archivo TXT (.txt) es el formato de texto digital más elemental en computación. Almacena caracteres alfanuméricos puros, palabras, oraciones y saltos de línea sin formato mediante codificaciones universales como UTF-8 o ASCII.",
        "Dado que los archivos TXT carecen de etiquetas de diseño propietarias, encabezados de metadados o directivas de formato, son accesibles de forma universal en cualquier sistema operativo, editor de texto, teléfono inteligente y navegador. Los creadores de contenido los utilizan habitualmente para guiones de voz, transcripciones de entrevistas, salidas de voz a texto y traducciones.",
        "Sin embargo, los archivos de texto plano carecen de coordenadas temporales, números de secuencia e intervalos necesarios para que los reproductores de video sincronicen los subtítulos con el audio hablado. Abrir un archivo TXT en un reproductor de medios o en YouTube no mostrará subtítulos sincronizados."
      ]
    },
    "whatIsSrt": {
      "title": "¿Qué es un archivo de subtítulos SRT (SubRip)?",
      "content": [
        "Un archivo SRT (SubRip Text) es el estándar global para subtítulos de video digital y subtítulos cerrados (closed captions). Compatible con YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve y reproductores como VLC, organiza el diálogo hablado en bloques cronológicos estructurados.",
        "Cada subtítulo en un archivo SRT válido debe seguir rigurosamente una estructura de cuatro partes:",
        "1. Un número secuencial de índice (1, 2, 3, 4...)",
        "2. Marcas exactas de inicio y fin en formato HH:MM:SS,mmm --> HH:MM:SS,mmm (Horas:Minutos:Segundos,Milisegundos)",
        "3. Una o más líneas de texto con el diálogo correspondiente",
        "4. Una línea en blanco obligatoria que separa cada subtítulo del siguiente",
        "Sin esta sintaxis estricta, los reproductores de video y los editores no pueden determinar cuándo deben aparecer los subtítulos, cuánto tiempo deben mostrarse en pantalla ni cuándo dar paso a la siguiente frase."
      ]
    },
    "whatIsConverter": {
      "title": "¿Qué es un Convertidor TXT a SRT?",
      "content": [
        "Un convertidor de TXT a SRT es un motor de formato inteligente que transforma texto plano sin marcas de tiempo en archivos de subtítulos sincronizados para video.",
        "Acepta transcripciones de texto, notas de entrevistas, guiones, diálogos traducidos o salidas de dictado por voz y los convierte en archivos SubRip (.srt) estandarizados con numeración correlativa, flechas de tiempo válidas (-->), precisión de milisegundos y espaciado reglamentario.",
        "Nuestro convertidor funciona 100% en la memoria de su navegador mediante APIs web modernas. Sus transcripciones confidenciales, guiones inéditos y documentos privados nunca salen de su computadora ni se suben a la nube."
      ]
    },
    "howToConvert": {
      "title": "Cómo convertir TXT a SRT paso a paso",
      "steps": [
        {
          "title": "1. Pegue el texto o suba el archivo",
          "description": "Escriba o pegue su transcripción directamente en el editor, o suba un documento .txt desde su computadora o móvil."
        },
        {
          "title": "2. Configure el tiempo y el método de división",
          "description": "Elija si cada línea, párrafo u oración forma un subtítulo y establezca la duración deseada (ej. 3.0s) y la pausa entre bloques (ej. 0.5s)."
        },
        {
          "title": "3. Vista previa instantánea en vivo",
          "description": "Observe cómo el panel de vista previa genera al instante subtítulos SRT válidos con códigos de tiempo exactos hasta el milisegundo."
        },
        {
          "title": "4. Descargue o copie el SRT",
          "description": "Haga clic en \"Descargar .srt\" para guardar el archivo listo para usar, o copie el texto directamente a su portapapeles."
        }
      ]
    },
    "whyRenameDoesntWork": {
      "title": "Por qué cambiar la extensión de .txt a .srt no funciona",
      "content": [
        "Uno de los errores más frecuentes entre creadores de contenido es pensar que con solo renombrar un archivo de 'transcripcion.txt' a 'transcripcion.srt' el reproductor reconocerá los subtítulos.",
        "La extensión de un archivo solo le indica al sistema operativo con qué aplicación abrirlo; no altera su contenido interno. Reproductores como VLC, MPV o QuickTime requieren la sintaxis estricta de SubRip. Si encuentran párrafos planos sin números y sin intervalos '00:00:00,000 --> 00:00:00,000', ignorarán el archivo o mostrarán un error de formato.",
        "Cambiar el nombre solo funciona si el archivo de texto ya tenía internamente la estructura completa de un archivo SRT y se guardó por error con terminación .txt. Para textos y guiones normales, la conversión real con nuestra herramienta es imprescindible."
      ]
    },
    "timingAndSyncExplanation": {
      "title": "Cómo funciona la sincronización y la asignación automática de tiempos",
      "content": [
        "Dado que los archivos de texto sin formato no contienen datos temporales, nuestro convertidor utiliza un algoritmo de cadencia cronológica determinista.",
        "Comenzando en el tiempo inicial definido (por defecto 00:00:01,000), cada bloque de texto recibe una duración en pantalla igual al tiempo configurado (ej. 3.0 segundos). Al finalizar cada subtítulo, el sistema añade la pausa seleccionada (ej. 0.5 segundos) antes de iniciar el siguiente.",
        "Si su texto ya incluye marcas de tiempo reconocibles (como [01:23] o 00:02:15), nuestro analizador inteligente las detecta y calcula automáticamente los códigos de inicio y fin correspondientes.",
        "Consejo práctico de sincronización: Los tiempos automatizados proporcionan una estructura sintáctica impecable. Como los oradores reales varían el ritmo de su voz y realizan pausas naturales, los subtítulos generados pueden requerir pequeños ajustes manuales en Premiere Pro, DaVinci Resolve, Subtitle Edit o YouTube Studio para una sincronización perfecta con el audio."
      ]
    },
    "realWorldUseCases": {
      "title": "Usos habituales de la conversión de TXT a SRT",
      "cases": [
        {
          "title": "Subtítulos para YouTube y posicionamiento SEO",
          "description": "Suba subtítulos estructurados a YouTube para mejorar la visibilidad en búsquedas, ayudar a audiencias internacionales y aumentar el tiempo de retención."
        },
        {
          "title": "Transcripciones de podcasts y webinars",
          "description": "Convierta transcripciones de audio en pistas de subtítulos para fragmentos de video, audiogramas en redes sociales y clips promocionales."
        },
        {
          "title": "Traducción de videos y contenidos",
          "description": "Traduzca el guion de un video a texto plano, conviértalo en archivo SRT con tiempos coordinados e impórtelo en su proyecto audiovisual."
        },
        {
          "title": "Edición de transcripciones de Inteligencia Artificial",
          "description": "Transforme salidas de texto de herramientas como Whisper AI, notas de voz o reuniones grabadas en subtítulos profesionales listos para importar."
        },
        {
          "title": "Cursos educativos y plataformas de formación",
          "description": "Ofrezca subtítulos accesibles que cumplan con los estándares de accesibilidad para clases virtuales, conferencias y tutoriales."
        },
        {
          "title": "Videos verticales para redes (Reels, TikTok y Shorts)",
          "description": "Importe archivos SRT en CapCut, Premiere o Final Cut para añadir subtítulos dinámicos y llamativos en formatos verticales."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Errores comunes de TXT a SRT y cómo resolverlos",
      "items": [
        {
          "title": "Los subtítulos desaparecen muy rápido o tardan demasiado",
          "description": "Ajuste la duración por subtítulo en los controles. Las frases cortas suelen necesitar de 2 a 3 segundos, mientras que las oraciones largas requieren de 4 a 5 segundos."
        },
        {
          "title": "Subtítulos que se solapan en pantalla",
          "description": "Nuestro conversor aplica separaciones matemáticas exactas para evitar solapamientos. Compruebe que la pausa entre subtítulos esté entre 0.2 y 0.5 segundos."
        },
        {
          "title": "Caracteres especiales o tildes dañadas (mojibake)",
          "description": "Ocurre cuando el archivo original se guardó en codificaciones obsoletas como ANSI o ISO. Nuestra herramienta trabaja siempre en UTF-8 universal para preservar tildes, signos de apertura (¿, ¡) y caracteres especiales."
        },
        {
          "title": "Líneas de subtítulos demasiado largas para móviles",
          "description": "Utilice el modo de división por 'Oraciones' o 'Cada Línea' en vez de párrafos completos para que cada línea tenga menos de 42 caracteres."
        }
      ]
    },
    "comparison": {
      "title": "TXT vs SRT: Comparación técnica detallada",
      "description": "Revise las diferencias técnicas esenciales entre el texto plano no sincronizado y los archivos de subtítulos SubRip estructurados.",
      "headers": [
        "Característica Técnica",
        "Texto Plano (.txt)",
        "Subtítulo SubRip (.srt)"
      ],
      "rows": [
        [
          "Coordenadas Temporales",
          "Ninguna (sin sincronización)",
          "Precisión de milisegundos (HH:MM:SS,mmm)"
        ],
        [
          "Numeración Secuencial",
          "Ninguna",
          "Enteros correlativos obligatorios (1, 2, 3...)"
        ],
        [
          "Separador de Tiempos",
          "Ninguno",
          "Flecha estándar obligatoria (-->)"
        ],
        [
          "Soporte en Reproductores",
          "No se puede cargar como subtítulo",
          "Reproducción nativa en VLC, YouTube, etc."
        ],
        [
          "Importación en Editores",
          "Requiere alineación manual",
          "Se inserta automáticamente en la pista de subtítulos"
        ],
        [
          "Etiquetas de Estilo",
          "Solo texto plano",
          "Admite etiquetas opcionales (<i>, <b>, <font>)"
        ],
        [
          "Principal Función",
          "Lectura humana y documentación",
          "Sincronización audiovisual exacta"
        ]
      ]
    },
    "privacy": {
      "title": "Garantía de privacidad total en su navegador",
      "content": [
        "Su privacidad y confidencialidad están aseguradas desde el diseño de la herramienta. A diferencia de otros conversores que envían sus textos a servidores externos donde podrían ser almacenados o analizados, nuestro conversor procesa todo en la memoria de su navegador.",
        "Sus guiones inéditos, transcripciones confidenciales y contenidos audiovisuales nunca viajan por internet. Incluso puede desconectar su conexión Wi-Fi después de cargar esta página y la herramienta seguirá funcionando a máxima velocidad."
      ]
    }
  },
  "faqs": [
    {
      "question": "¿Cómo convertir un archivo TXT a formato SRT?",
      "answer": "Pegue su texto plano en el editor o suba su archivo .txt. Seleccione el método de división (párrafos, líneas u oraciones) y la duración por subtítulo. El convertidor calculará de inmediato los códigos de tiempo y formateará un archivo .srt listo para descargar."
    },
    {
      "question": "¿Se puede convertir de TXT a SRT sin instalar programas?",
      "answer": "Sí. Nuestra herramienta funciona directamente en cualquier navegador moderno de computadora, tableta o teléfono móvil, sin necesidad de instalar programas ni extensiones."
    },
    {
      "question": "¿Un archivo TXT normal contiene códigos de tiempo?",
      "answer": "No. Los archivos de texto estándar contienen únicamente caracteres y saltos de línea sin marcas de tiempo. Por eso nuestro convertidor genera automáticamente tiempos progresivos basados en sus ajustes."
    },
    {
      "question": "¿Cómo calcula el convertidor las marcas de tiempo?",
      "answer": "Utiliza un sistema cronológico progresivo. Iniciando en el segundo establecido (ej. 1.0s), asigna a cada subtítulo la duración elegida (ej. 3.0s), seguida por la pausa correspondiente (ej. 0.5s) antes del siguiente subtítulo."
    },
    {
      "question": "¿Puedo convertir el guion de un video completo en subtítulos SRT?",
      "answer": "Sí. Solo copie el guion o la transcripción y péguela en la herramienta. Al elegir la división por líneas u oraciones, cada frase se convertirá en un subtítulo independiente."
    },
    {
      "question": "¿El archivo SRT generado funciona en YouTube?",
      "answer": "Sí. El archivo .srt cumple rigurosamente el estándar SubRip oficial y se puede subir directamente en YouTube Studio dentro de la sección de subtítulos de su video."
    },
    {
      "question": "¿Por qué no basta con renombrar la extensión .txt a .srt?",
      "answer": "Cambiar la extensión solo altera el nombre del archivo, pero no su estructura. Los reproductores de video requieren números correlativos y flechas de tiempo precisas (00:00:01,000 --> 00:00:04,000) para mostrar los subtítulos."
    },
    {
      "question": "¿Puedo modificar los tiempos después de la conversión?",
      "answer": "Sí. El archivo .srt descargado es un archivo de texto abierto que puede editarse con el Bloc de notas o importarse en programas de edición de video (Premiere Pro, DaVinci Resolve) y herramientas como Subtitle Edit para ajustes milimétricos."
    },
    {
      "question": "¿Admite otros idiomas como español, portugués, árabe o japonés?",
      "answer": "Sí. Soporta completamente la codificación universal UTF-8 para todos los idiomas, incluyendo caracteres con tildes, árabe con lectura de derecha a izquierda, kanji japonés y alfabetos asiáticos."
    },
    {
      "question": "¿Se sube mi archivo a algún servidor?",
      "answer": "No. La conversión se efectúa 100% de manera local en su dispositivo mediante JavaScript en el navegador. Ningún dato ni texto se transfiere a servidores externos."
    },
    {
      "question": "¿Qué hacer si los subtítulos quedan desfasados con el video?",
      "answer": "Dado que el sistema asigna duraciones promedio, puede ajustar los parámetros de inicio y duración en la herramienta, o desplazar levemente la pista de subtítulos en su editor de video o YouTube Studio para adaptarla a la voz real."
    },
    {
      "question": "¿Cuál es la duración recomendada por subtítulo?",
      "answer": "Las normas internacionales sugieren una velocidad de lectura de entre 21 y 24 caracteres por segundo, lo que equivale a unos 2.5 a 4 segundos para líneas estándar de 30 a 40 caracteres."
    }
  ]
};
