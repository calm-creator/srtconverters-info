import type { ToolDetailContent } from './types';

export const esContent: ToolDetailContent = {
  metaTitle: 'Convertidor SRT a TXT Gratis – Extraer Texto de Subtítulos',
  metaDescription: 'Convierta archivos de subtítulos SRT a texto plano TXT limpio online. Elimina marcas de tiempo y números en su navegador con total privacidad.',
  h1: 'Convertidor SRT a TXT',
  heroDescription: 'Transforme rápidamente archivos de subtítulos SRT en transcripciones de texto limpio y legible. Elimina códigos de tiempo, números y etiquetas con total privacidad.',
  toolName: 'Convertidor SRT a TXT',
  ui: {
    pasteTitle: 'Entrada SRT (.srt)',
    pastePlaceholder: 'Pega el contenido de tu archivo SRT aquí (ej.\n1\n00:00:01,000 --> 00:00:04,000\nHola, bienvenidos a nuestro video.)...',
    orDivider: 'O',
    uploadTitle: 'Opción 2 — Subir Archivo SRT',
    convertButton: 'Convertir a Texto',
    clearButton: 'Limpiar',
    trySampleButton: 'Probar Ejemplo',
    livePreviewTitle: 'Texto Plano Limpio (.txt)',
    errorNoInput: 'Pega contenido SRT o sube un archivo SRT para convertir.',
    pastedContentSource: 'Contenido SRT Pegado',
    dropzoneTitle: 'Arrastre y suelte su archivo .srt aquí',
    dropzoneSubtitle: 'o haga clic para seleccionarlo de su dispositivo',
    browseButton: 'Seleccionar Archivo SRT',
    dropActiveText: 'Suelte el archivo SRT aquí...',
    fileSelected: 'Archivo seleccionado',
    fileNameLabel: 'Nombre del Archivo',
    fileSizeLabel: 'Tamaño',
    cueCountLabel: 'Subtítulos Extraídos',
    characterCountLabel: 'Caracteres',
    downloadAction: 'Descargar .txt',
    copyAction: 'Copiar al Portapapeles',
    copiedSuccess: '¡Copiado con éxito!',
    resetAction: 'Convertir Otro Archivo',
    previewTitle: 'Vista Previa del Texto',
    previewEmpty: 'El texto limpio aparecerá aquí inmediatamente después de cargar su archivo SRT.',
    optionsTitle: 'Opciones de Conversión',
    optEmptyLine: 'Añadir línea en blanco entre subtítulos',
    optRemoveTags: 'Eliminar etiquetas de formato (ej: <i>, <b>, <font>)',
    errorInvalidFile: 'Cargue un archivo de subtítulos .srt válido.',
    errorEmptyFile: 'El archivo subido está vacío.',
    errorParseFailed: 'No se pudo procesar el archivo. Compruebe que tenga formato SRT correcto.',
  },
  sections: {
    whatIsSrt: {
      title: '¿Qué es un archivo SRT?',
      content: [
        'Un archivo SRT (SubRip Subtitle) es el formato de subtítulos más extendido en el vídeo digital. Contiene bloques de texto con códigos de tiempo precisos que indican cuándo debe mostrarse y ocultarse cada frase.',
        'Aunque es ideal para reproductores multimedia como VLC o YouTube, leer un archivo SRT directamente resulta incómodo debido a la gran cantidad de números y marcas de tiempo.',
      ],
    },
    whatIsConverter: {
      title: '¿Qué hace un Convertidor SRT a TXT?',
      content: [
        'Esta herramienta procesa el archivo SRT y elimina automáticamente toda la información temporal (timestamps) y la numeración secuencial, dejando únicamente las frases de diálogo limpias.',
        'El procesamiento se realiza al 100% en su navegador. Sus archivos nunca se envían a servidores externos, garantizando la máxima seguridad para sus datos.',
      ],
    },
    howToConvert: {
      title: 'Cómo convertir SRT a TXT',
      steps: [
        {
          title: '1. Seleccione el Archivo',
          description: 'Arrastre su archivo .srt a la zona de carga o selecciónelo desde su dispositivo.',
        },
        {
          title: '2. Conversión Automática',
          description: 'El convertidor extrae el texto al instante y limpia las etiquetas HTML.',
        },
        {
          title: '3. Guarde el Resultado',
          description: 'Descargue el archivo .txt resultante o copie el texto directamente al portapapeles.',
        },
      ],
    },
    whyConvert: {
      title: '¿Por qué convertir subtítulos SRT a TXT?',
      benefits: [
        {
          title: 'Lectura Cómoda',
          description: 'Lea transcripciones de podcasts, cursos y conferencias sin interrupciones.',
        },
        {
          title: 'Optimización para IA',
          description: 'Pegue texto limpio en herramientas como ChatGPT sin gastar tokens en códigos de tiempo innecesarios.',
        },
        {
          title: 'Estudio de Idiomas',
          description: 'Imprima guiones completos para practicar vocabulario y comprensión lectora.',
        },
        {
          title: 'Búsqueda de Texto',
          description: 'Encuentre fácilmente cualquier palabra o cita dentro de vídeos largos.',
        },
      ],
    },
    comparison: {
      title: 'Comparativa: SRT vs TXT',
      description: 'Diferencias clave entre el formato de subtítulos SRT y un documento TXT estándar.',
      headers: ['Característica', 'Formato SRT (.srt)', 'Texto Plano (.txt)'],
      rows: [
        ['Propósito', 'Sincronización con vídeo', 'Lectura y edición de texto'],
        ['Marcas de Tiempo', 'Sí (ej: 00:02:10,000 --> 00:02:15,000)', 'No'],
        ['Numeración', 'Sí (1, 2, 3...)', 'No'],
        ['Formato de Texto', 'Etiquetas de estilo presentes', 'Texto puro sin formato'],
        ['Uso Recomendado', 'Reproductores de vídeo', 'Lectura, notas e IA'],
      ],
    },
    privacy: {
      title: 'Privacidad y Seguridad Garantizada',
      content: [
        'Su archivo no sale de su dispositivo. La conversión se efectúa en su navegador utilizando tecnología web local.',
        'No recopilamos información ni almacenamos transcripciones.',
      ],
    },
  },
  faqs: [
    {
      question: '¿Qué es un archivo SRT?',
      answer: 'Es un formato estándar de subtítulos que incluye números, tiempos exactos de aparición y el texto de los diálogos.',
    },
    {
      question: '¿Se eliminan las marcas de tiempo?',
      answer: 'Sí, tanto los tiempos como la numeración se eliminan por completo.',
    },
    {
      question: '¿Se sube mi archivo a algún servidor?',
      answer: 'No. El proceso se realiza enteramente en su navegador de forma local.',
    },
    {
      question: '¿Soporta caracteres en español como la ñ y tildes?',
      answer: 'Sí, ofrece compatibilidad total con codificación UTF-8 y caracteres en español.',
    },
    {
      question: '¿Puedo usarlo desde el móvil?',
      answer: 'Sí, funciona perfectamente en dispositivos móviles Android e iOS.',
    },
    {
      question: '¿Se limpian etiquetas como <i> y <b>?',
      answer: 'Sí, todas las etiquetas de estilo se eliminan automáticamente.',
    },
    {
      question: '¿Tiene algún coste?',
      answer: 'Es una herramienta completamente gratuita y sin registro.',
    },
    {
      question: '¿Hay límite de tamaño?',
      answer: 'No hay límites prácticos de tamaño gracias a la ejecución en el cliente.',
    },
  ],
};
