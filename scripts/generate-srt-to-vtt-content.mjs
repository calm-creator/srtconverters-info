import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.resolve(__dirname, '../src/data/tools/srt-to-vtt');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Data definitions for all non-English locales
const translations = {
  pt: {
    metaTitle: 'Conversor SRT para VTT Grátis – Converta Legendas WebVTT Online',
    metaDescription: 'Converta arquivos de legenda SRT para formato WebVTT (.vtt) online gratuitamente. Adiciona cabeçalho WEBVTT e converte vírgulas em pontos com total privacidade.',
    h1: 'Conversor SRT para VTT',
    heroDescription: 'Converta legendas SubRip (.srt) para o formato padrão WebVTT (.vtt) compatível com vídeo HTML5, plataformas de streaming e players modernos. Rápido, gratuito e 100% no navegador.',
    toolName: 'Conversor SRT para VTT',
    ui: {
      pasteTitle: 'Entrada de Legenda SRT (.srt)',
      pastePlaceholder: 'Cole o conteúdo SRT aqui (ex:\n1\n00:00:01,000 --> 00:00:04,000\nBem-vindo ao nosso tutorial!)...',
      orDivider: 'OU',
      uploadTitle: 'Opção 2 — Enviar Arquivo SRT',
      convertButton: 'Converter para VTT',
      clearButton: 'Limpar',
      trySampleButton: 'Testar Exemplo',
      livePreviewTitle: 'Saída WebVTT Convertida (.vtt)',
      errorNoInput: 'Cole o texto da legenda SRT ou envie um arquivo .srt para converter.',
      pastedContentSource: 'Conteúdo SRT Colado',
      dropzoneTitle: 'Arraste e solte seu arquivo .srt aqui',
      dropzoneSubtitle: 'ou clique para selecionar do seu dispositivo',
      browseButton: 'Escolher Arquivo SRT',
      dropActiveText: 'Solte o arquivo SRT aqui...',
      fileSelected: 'Arquivo selecionado',
      fileNameLabel: 'Nome do Arquivo',
      fileSizeLabel: 'Tamanho',
      cueCountLabel: 'Legendas Convertidas',
      characterCountLabel: 'Caracteres',
      downloadAction: 'Baixar .vtt',
      copyAction: 'Copiar para Área de Transferência',
      copiedSuccess: 'Copiado com sucesso!',
      resetAction: 'Converter Outro Arquivo',
      previewTitle: 'Pré-visualização do WebVTT',
      previewEmpty: 'Suas legendas WebVTT (.vtt) convertidas aparecerão aqui assim que você inserir ou carregar um arquivo SRT.',
      optionsTitle: 'Opções de Conversão',
      optIncludeCueNumbers: 'Manter números de identificação',
      optCleanTags: 'Limpar tags antigas não suportadas (ex: <font>)',
      errorInvalidFile: 'Envie um arquivo de legenda .srt válido.',
      errorEmptyFile: 'O arquivo ou texto fornecido está vazio.',
      errorParseFailed: 'Não foi possível detectar blocos válidos de legendas SRT. Verifique o formato do carimbo de data/hora.',
    },
    sections: {
      whatIsSrt: {
        title: 'O que é um arquivo SRT?',
        content: [
          'Um arquivo SRT (SubRip Subtitle) é o formato de legenda em texto puro mais popular do mundo. Desenvolvido originalmente pelo programa SubRip para extrair legendas de DVDs, tornou-se o padrão para reprodutores de mídia como VLC e editores de vídeo.',
          'Sua estrutura é composta por blocos contendo número do bloco, marcação temporal (com milissegundos separados por vírgula: 00:00:01,000 --> 00:00:04,000) e linhas de diálogo.',
          'Apesar de sua ampla adoção em players locais, o SRT não possui suporte nativo direto em navegadores modernos sem o uso de bibliotecas pesadas de terceiros.',
        ],
      },
      whatIsVtt: {
        title: 'O que é um arquivo WebVTT (.vtt)?',
        content: [
          'WebVTT (Web Video Text Tracks) é o formato de legenda padrão da W3C criado especificamente para a web moderna e a tag <video> do HTML5.',
          'Um arquivo WebVTT sempre começa com o cabeçalho obrigatório "WEBVTT" na primeira linha e utiliza ponto final (.) para separar os milissegundos (00:00:01.000).',
          'Ele oferece suporte a estilização visual com CSS através do pseudo-elemento ::cue, além de permitir o posicionamento exato das legendas na tela.',
        ],
      },
      whatIsConverter: {
        title: 'O que é um Conversor SRT para VTT?',
        content: [
          'Um conversor SRT para VTT é uma ferramenta especializada que transforma a sintaxe tradicional de legendas SubRip no padrão WebVTT compatível com a web.',
          'Ele insere automaticamente o cabeçalho "WEBVTT" exigido pelos navegadores e substitui as vírgulas dos carimbos de tempo por pontos.',
          'Nossa ferramenta processa tudo 100% no seu navegador com total privacidade e velocidade instantânea.',
        ],
      },
      srtVsVtt: {
        title: 'Diferenças Técnicas entre SRT e VTT',
        content: [
          '1. Cabeçalho obrigatório: WebVTT requer a palavra "WEBVTT" no início do arquivo, enquanto o SRT começa diretamente no índice 1.',
          '2. Formato de milissegundos: SRT usa vírgula (00:00:01,500) e WebVTT usa ponto (00:00:01.500).',
          '3. Compatibilidade nativa com HTML5: WebVTT funciona diretamente com a tag <track> em todos os navegadores modernos.',
          '4. Estilização: WebVTT permite estilizar fontes, cores e fundos com CSS nativo.',
        ],
      },
      whyConvert: {
        title: 'Por que Converter SRT para VTT?',
        benefits: [
          {
            title: 'Compatibilidade com Vídeo HTML5',
            description: 'Todos os navegadores modernos (Chrome, Safari, Firefox, Edge) decodificam WebVTT nativamente via tag <track>.',
          },
          {
            title: 'Estilização Completa com CSS',
            description: 'Personalize cores, tipografia, fundos e margens usando o seletor ::cue no seu CSS.',
          },
          {
            title: 'Posicionamento Preciso na Tela',
            description: 'Controle a posição exata da legenda para não cobrir elementos visuais importantes do vídeo.',
          },
          {
            title: 'Padrão para Streaming HLS e DASH',
            description: 'Plataformas de streaming modernas exigem legendas no formato WebVTT.',
          },
          {
            title: 'Acessibilidade e SEO em Vídeo',
            description: 'Permite que ferramentas de busca indexem o diálogo falado e melhora a experiência de usuários com deficiência auditiva.',
          },
          {
            title: 'Leve e Instantâneo',
            description: 'Arquivos WebVTT em texto puro pesam apenas alguns kilobytes e carregam imediatamente.',
          },
        ],
      },
      howToConvert: {
        title: 'Como Converter SRT para VTT em 3 Passos',
        steps: [
          {
            title: '1. Cole o Texto ou Envie o Arquivo .srt',
            description: 'Cole o conteúdo da legenda no campo de entrada ou arraste seu arquivo .srt para o conversor.',
          },
          {
            title: '2. Conversão Automática no Navegador',
            description: 'O conversor processa o arquivo instantaneamente, ajusta os carimbos de tempo e adiciona o cabeçalho WEBVTT.',
          },
          {
            title: '3. Baixe ou Copie o Arquivo .vtt',
            description: 'Clique em "Baixar .vtt" para salvar no seu dispositivo ou copie o texto resultante com um clique.',
          },
        ],
      },
      commonErrorsAndFixes: {
        title: 'Erros Comuns em Legendas SRT e VTT',
        items: [
          {
            title: 'Legendas não aparecem no navegador (Vírgula no Carimbo)',
            description: 'Causa: Navegadores rejeitam carimbos de tempo com vírgulas. Solução: Converta as vírgulas em pontos usando nossa ferramenta.',
          },
          {
            title: 'Erro de sintaxe (Falta do cabeçalho WEBVTT)',
            description: 'Causa: Renomear .srt para .vtt sem incluir o cabeçalho. Solução: O arquivo deve começar com "WEBVTT" na primeira linha.',
          },
          {
            title: 'Caracteres corrompidos (Codificação e BOM)',
            description: 'Causa: Arquivos salvos em codificações incompatíveis. Solução: Nossa ferramenta gera arquivos padronizados em UTF-8 limpo.',
          },
          {
            title: 'Bloqueio de CORS ao carregar legenda externa',
            description: 'Causa: O arquivo .vtt está em outro domínio sem cabeçalho CORS. Solução: Configure o cabeçalho Access-Control-Allow-Origin.',
          },
        ],
      },
      html5VideoGuide: {
        title: 'Como usar legendas VTT com vídeo HTML5',
        description: 'Basta incluir o elemento <track> dentro da tag <video> com o caminho do arquivo .vtt convertido:',
        codeSnippet: `<video controls width="800">\n  <source src="/videos/aula.mp4" type="video/mp4">\n  <track kind="subtitles" src="/legendas/aula-pt.vtt" srclang="pt" label="Português" default>\n</video>`,
        explanation: [
          { term: 'kind="subtitles"', description: 'Define o tipo de trilha como legenda de diálogo.' },
          { term: 'src="caminho.vtt"', description: 'Caminho do arquivo WebVTT.' },
          { term: 'srclang="pt"', description: 'Código do idioma da legenda (formato BCP 47).' },
          { term: 'label="Português"', description: 'Nome visível no menu do player de vídeo.' },
          { term: 'default', description: 'Ativa a legenda automaticamente ao iniciar o vídeo.' },
        ],
      },
      comparison: {
        title: 'Comparativo Técnico: SRT vs WebVTT',
        description: 'Entenda as principais características de cada formato:',
        headers: ['Aspecto', 'SubRip (.srt)', 'WebVTT (.vtt)'],
        rows: [
          ['Ambiente Principal', 'Players de desktop e edição', 'Navegadores web e streaming'],
          ['Cabeçalho Obrigatório', 'Não possui', 'Obrigatório "WEBVTT" na linha 1'],
          ['Separador de Milissegundos', 'Vírgula (,)', 'Ponto final (.)'],
          ['Suporte Nativo no Navegador', 'Não suportado diretamente', '100% suportado em todos os navegadores'],
          ['Estilização com CSS', 'Muito limitada', 'Suporte total com ::cue'],
          ['Posicionamento na Tela', 'Não padronizado', 'Suporte nativo a coordenadas e alinhamento'],
        ],
      },
      privacy: {
        title: 'Garantia de Privacidade 100% no Navegador',
        content: [
          'No SRTConverters.info, todas as operações são realizadas no seu dispositivo por meio de código JavaScript local.',
          'Seus arquivos nunca são enviados para servidores remotos, garantindo proteção total para conteúdos confidenciais ou corporativos.',
        ],
      },
    },
    faqs: [
      {
        question: 'Posso apenas renomear a extensão de .srt para .vtt?',
        answer: 'Não. O formato WebVTT exige a presença do cabeçalho "WEBVTT" e o uso de pontos em vez de vírgulas nos tempos. Simplesmente renomear fará com que os navegadores rejeitem o arquivo.',
      },
      {
        question: 'O WebVTT funciona em celulares (iPhone e Android)?',
        answer: 'Sim! Todos os navegadores móveis modernos suportam WebVTT nativamente, inclusive no modo tela cheia do iOS e Android.',
      },
      {
        question: 'Como estilizar legendas VTT com CSS?',
        answer: 'Você pode usar o seletor video::cue { color: #fff; background: rgba(0,0,0,0.8); } no seu arquivo CSS para modificar o visual.',
      },
      {
        question: 'Existe limite de tamanho de arquivo?',
        answer: 'Não. Como a conversão ocorre localmente no seu navegador, você pode processar arquivos de qualquer duração sem restrições.',
      },
    ],
  },
  es: {
    metaTitle: 'Convertidor SRT a VTT Gratis – Convertir Subtítulos a WebVTT Online',
    metaDescription: 'Convierta subtítulos SRT a formato WebVTT (.vtt) online gratis. Añade encabezado WEBVTT y cambia comas por puntos con total privacidad en su navegador.',
    h1: 'Convertidor SRT a VTT',
    heroDescription: 'Transforme subtítulos SubRip (.srt) al estándar WebVTT (.vtt) compatible con navegadores web, reproductores HTML5 y plataformas de streaming. Rápido, seguro y gratuito.',
    toolName: 'Convertidor SRT a VTT',
    ui: {
      pasteTitle: 'Entrada de Subtítulo SRT (.srt)',
      pastePlaceholder: 'Pega el contenido SRT aquí (ej:\n1\n00:00:01,000 --> 00:00:04,000\n¡Bienvenidos a nuestro tutorial!)...',
      orDivider: 'O',
      uploadTitle: 'Opción 2 — Subir Archivo SRT',
      convertButton: 'Convertir a VTT',
      clearButton: 'Limpiar',
      trySampleButton: 'Probar Ejemplo',
      livePreviewTitle: 'Salida WebVTT Convertida (.vtt)',
      errorNoInput: 'Pega texto SRT o sube un archivo .srt para convertir.',
      pastedContentSource: 'Contenido SRT Pegado',
      dropzoneTitle: 'Arrastra y suelta tu archivo .srt aquí',
      dropzoneSubtitle: 'o haz clic para buscarlo en tu dispositivo',
      browseButton: 'Seleccionar Archivo SRT',
      dropActiveText: 'Suelta el archivo SRT aquí...',
      fileSelected: 'Archivo seleccionado',
      fileNameLabel: 'Nombre del Archivo',
      fileSizeLabel: 'Tamaño',
      cueCountLabel: 'Subtítulos Convertidos',
      characterCountLabel: 'Caracteres',
      downloadAction: 'Descargar .vtt',
      copyAction: 'Copiar al Portapapeles',
      copiedSuccess: '¡Copiado con éxito!',
      resetAction: 'Convertir Otro Archivo',
      previewTitle: 'Vista Previa de WebVTT',
      previewEmpty: 'Tus subtítulos WebVTT (.vtt) aparecerán aquí de inmediato al escribir o subir un archivo SRT.',
      optionsTitle: 'Opciones de Conversión',
      optIncludeCueNumbers: 'Incluir números identificadores',
      optCleanTags: 'Limpiar etiquetas antiguas no compatibles (ej: <font>)',
      errorInvalidFile: 'Carga un archivo de subtítulo .srt válido.',
      errorEmptyFile: 'El archivo o texto introducido está vacío.',
      errorParseFailed: 'No se encontraron subtítulos SRT válidos. Comprueba el formato de marcas de tiempo.',
    },
    sections: {
      whatIsSrt: {
        title: '¿Qué es un archivo SRT?',
        content: [
          'Un archivo SRT (SubRip) es el formato de subtítulos más utilizado en el mundo del vídeo digital.',
          'Contiene bloques secuenciales con marcas de tiempo (00:00:01,000 --> 00:00:04,000) donde los milisegundos se separan con coma.',
          'Aunque es universal en reproductores como VLC, los navegadores web modernos no pueden reproducirlo directamente sin herramientas adicionales.',
        ],
      },
      whatIsVtt: {
        title: '¿Qué es un archivo WebVTT (.vtt)?',
        content: [
          'WebVTT (Web Video Text Tracks) es el formato estándar creado por el W3C para subtítulos y subtítulos cerrados en la web moderna.',
          'Requiere la cabecera "WEBVTT" en su primera línea y separa milisegundos con punto (00:00:01.000).',
          'Permite dar estilo visual mediante CSS (::cue) y situar los subtítulos en cualquier posición del fotograma.',
        ],
      },
      whatIsConverter: {
        title: '¿Qué hace un Convertidor SRT a VTT?',
        content: [
          'Transforma la estructura de un archivo SRT en formato WebVTT válido para reproductores HTML5.',
          'Añade la cabecera obligatoria "WEBVTT" y convierte automáticamente todas las comas de tiempo en puntos.',
          'Todo el proceso se realiza localmente en tu navegador sin enviar datos a servidores externos.',
        ],
      },
      srtVsVtt: {
        title: 'Diferencias Clave entre SRT y VTT',
        content: [
          '1. Cabecera: WebVTT exige "WEBVTT" en la primera línea; SRT no lleva cabecera.',
          '2. Milisegundos: SRT usa coma (00:00:01,200), WebVTT usa punto (00:00:01.200).',
          '3. Compatibilidad web: WebVTT funciona de forma nativa en la etiqueta <track> de HTML5.',
          '4. Estilos: WebVTT soporta reglas de estilo avanzadas mediante hojas de estilo CSS.',
        ],
      },
      whyConvert: {
        title: '¿Por qué convertir SRT a VTT?',
        benefits: [
          { title: 'Compatibilidad Nativa en HTML5', description: 'Reproducción directa en Chrome, Safari, Firefox y Edge sin librerías externas.' },
          { title: 'Estilos Personalizados con CSS', description: 'Cambia fuentes, colores y fondos con la propiedad ::cue.' },
          { title: 'Posicionamiento en Pantalla', description: 'Evita que los subtítulos tapen nombres o gráficos en pantalla.' },
          { title: 'Compatible con Streaming HLS y DASH', description: 'El estándar para transmisiones de vídeo adaptativo moderno.' },
          { title: 'Mejora en Accesibilidad y SEO', description: 'Facilita la indexación por buscadores y ayuda a personas con discapacidad auditiva.' },
          { title: 'Velocidad y Ligereza', description: 'Archivos de texto que se descargan de inmediato sin ralentizar la carga.' },
        ],
      },
      howToConvert: {
        title: 'Cómo Convertir SRT a VTT en 3 Pasos',
        steps: [
          { title: '1. Pega el Texto o Sube tu .srt', description: 'Ingresa tus subtítulos en el panel izquierdo o arrastra tu archivo.' },
          { title: '2. Conversión Automática', description: 'La herramienta genera el formato WebVTT al instante en tu navegador.' },
          { title: '3. Descarga tu Archivo .vtt', description: 'Haz clic en "Descargar .vtt" o copia el contenido directamente.' },
        ],
      },
      commonErrorsAndFixes: {
        title: 'Errores Habituales en Subtítulos SRT y VTT',
        items: [
          { title: 'Subtítulos que no cargan en el navegador', description: 'Causa: Presencia de comas en los códigos de tiempo. Solución: Utilizar puntos decimales.' },
          { title: 'Error de sintaxis por falta de cabecera', description: 'Causa: Cambiar la extensión a .vtt sin añadir WEBVTT. Solución: Añadir WEBVTT al inicio.' },
          { title: 'Problemas de codificación', description: 'Causa: Guardar en formatos antiguos. Solución: Exportar siempre en formato UTF-8 limpio.' },
        ],
      },
      html5VideoGuide: {
        title: 'Cómo usar subtítulos VTT en HTML5',
        description: 'Solo necesitas añadir la etiqueta <track> dentro del elemento <video>:',
        codeSnippet: `<video controls width="800">\n  <source src="/videos/video.mp4" type="video/mp4">\n  <track kind="subtitles" src="/subtitulos/es.vtt" srclang="es" label="Español" default>\n</video>`,
        explanation: [
          { term: 'kind="subtitles"', description: 'Indica que se trata de una pista de subtítulos.' },
          { term: 'src="es.vtt"', description: 'Ubicación del archivo WebVTT.' },
          { term: 'srclang="es"', description: 'Código de idioma del subtítulo.' },
          { term: 'label="Español"', description: 'Texto que verá el usuario en el menú de subtítulos.' },
        ],
      },
      comparison: {
        title: 'Comparativa Técnica: SRT frente a WebVTT',
        description: 'Resumen de especificaciones técnicas:',
        headers: ['Característica', 'SubRip (.srt)', 'WebVTT (.vtt)'],
        rows: [
          ['Uso Principal', 'Reproductores locales y edición', 'Navegadores web y streaming'],
          ['Encabezado Obligatorio', 'No tiene', 'Obligatorio "WEBVTT"'],
          ['Separador de Milisegundos', 'Coma (,)', 'Punto (.)'],
          ['Soporte Nativo HTML5', 'No', 'Sí (etiqueta <track>)'],
          ['Estilo CSS', 'Limitado', 'Completo (::cue)'],
        ],
      },
      privacy: {
        title: 'Privacidad Garantizada al 100% en el Navegador',
        content: [
          'En SRTConverters.info la privacidad de tus contenidos es absoluta.',
          'Ningún archivo se envía a servidores; toda la conversión ocurre en tu propio equipo.',
        ],
      },
    },
    faqs: [
      { question: '¿Basta con cambiar la extensión de .srt a .vtt?', answer: 'No. El formato WebVTT requiere una cabecera específica y puntos en los tiempos.' },
      { question: '¿Funciona en dispositivos móviles?', answer: 'Sí, es compatible de serie con navegadores en Android e iOS.' },
      { question: '¿Cómo aplicar estilos con CSS?', answer: 'Puedes emplear el selector video::cue en tus estilos para cambiar tamaño, color o fondo.' },
    ],
  },
  fr: {
    metaTitle: 'Convertisseur SRT en VTT Gratuit – Convertir Sous-Titres WebVTT en Ligne',
    metaDescription: 'Convertissez vos fichiers de sous-titres SRT au format WebVTT (.vtt) gratuitement en ligne. Ajout automatique de l\'en-tête WEBVTT et conversion des virgules en points.',
    h1: 'Convertisseur SRT en VTT',
    heroDescription: 'Transformez instantanément vos fichiers de sous-titres SRT en format standard WebVTT (.vtt) pour la vidéo HTML5, le streaming et les lecteurs modernes. 100% gratuit et confidentiel.',
    toolName: 'Convertisseur SRT en VTT',
    ui: {
      pasteTitle: 'Sous-Titres SRT en Entrée (.srt)',
      pastePlaceholder: 'Collez votre texte SRT ici (ex :\n1\n00:00:01,000 --> 00:00:04,000\nBienvenue dans notre vidéo !)...',
      orDivider: 'OU',
      uploadTitle: 'Option 2 — Téléverser un Fichier SRT',
      convertButton: 'Convertir en VTT',
      clearButton: 'Effacer',
      trySampleButton: 'Tester un Exemple',
      livePreviewTitle: 'Résultat WebVTT Converti (.vtt)',
      errorNoInput: 'Veuillez coller du texte SRT ou téléverser un fichier .srt.',
      pastedContentSource: 'Contenu SRT Collé',
      dropzoneTitle: 'Glissez-déposez votre fichier .srt ici',
      dropzoneSubtitle: 'ou cliquez pour parcourir vos fichiers',
      browseButton: 'Choisir un Fichier SRT',
      dropActiveText: 'Déposez le fichier SRT ici...',
      fileSelected: 'Fichier sélectionné',
      fileNameLabel: 'Nom du Fichier',
      fileSizeLabel: 'Taille',
      cueCountLabel: 'Sous-titres Convertis',
      characterCountLabel: 'Caractères',
      downloadAction: 'Télécharger .vtt',
      copyAction: 'Copier dans le Presse-papiers',
      copiedSuccess: 'Copié avec succès !',
      resetAction: 'Convertir un Autre Fichier',
      previewTitle: 'Aperçu WebVTT',
      previewEmpty: 'Vos sous-titres WebVTT (.vtt) apparaîtront ici immédiatement après avoir collé ou chargé un fichier SRT.',
      optionsTitle: 'Options de Conversion',
      optIncludeCueNumbers: 'Conserver les numéros de séquence',
      optCleanTags: 'Nettoyer les balises non compatibles (ex: <font>)',
      errorInvalidFile: 'Veuillez charger un fichier .srt valide.',
      errorEmptyFile: 'Le fichier ou texte est vide.',
      errorParseFailed: 'Impossible de détecter des sous-titres SRT valides.',
    },
    sections: {
      whatIsSrt: {
        title: 'Qu\'est-ce qu\'un fichier SRT ?',
        content: [
          'Le format SRT (SubRip Subtitle) est le format de sous-titres le plus populaire pour les lecteurs vidéo locaux.',
          'Il utilise des horodatages où les millisecondes sont séparées par une virgule (00:00:01,000 --> 00:00:04,000).',
          'Cependant, les navigateurs web ne peuvent pas lire nativement le format SRT sans modules externes.',
        ],
      },
      whatIsVtt: {
        title: 'Qu\'est-ce qu\'un fichier WebVTT (.vtt) ?',
        content: [
          'Le format WebVTT est le standard officiel du W3C pour les sous-titres sur le web.',
          'Il commence obligatoirement par la mention "WEBVTT" et sépare les millisecondes par un point (00:00:01.000).',
          'Il est nativement supporté par la balise <video> en HTML5 et personnalisable en CSS avec le sélecteur ::cue.',
        ],
      },
      whatIsConverter: {
        title: 'Qu\'est-ce qu\'un Convertisseur SRT en VTT ?',
        content: [
          'Cet outil adapte la syntaxe des fichiers SRT pour les rendre conformes aux exigences du format WebVTT.',
          'Il remplace automatiquement les virgules par des points et ajoute l\'en-tête WEBVTT requis.',
          'La conversion s\'effectue entièrement dans votre navigateur pour une confidentialité totale.',
        ],
      },
      srtVsVtt: {
        title: 'Différences Techniques entre SRT et VTT',
        content: [
          '1. En-tête : WebVTT nécessite la mention "WEBVTT" en première ligne.',
          '2. Millisecondes : virgule pour SRT (00:00:01,000), point pour WebVTT (00:00:01.000).',
          '3. Support Web : WebVTT est lu nativement par tous les navigateurs modernes.',
        ],
      },
      whyConvert: {
        title: 'Pourquoi Convertir du SRT en VTT ?',
        benefits: [
          { title: 'Compatibilité HTML5 Totale', description: 'Fonctionne directement avec la balise <track> dans tous les navigateurs.' },
          { title: 'Personnalisation CSS avec ::cue', description: 'Ajustez facilement la couleur, la taille et le style des sous-titres.' },
          { title: 'Positionnement sur l\'Écran', description: 'Définissez la position exacte des sous-titres sur la vidéo.' },
          { title: 'Standard pour le Streaming', description: 'Format requis pour les flux HLS et MPEG-DASH.' },
          { title: 'Accessibilité et Référencement', description: 'Indexation améliorée et accessibilité renforcée.' },
          { title: 'Vitesse et Confidentialité', description: 'Traitement local ultra-rapide sans téléversement sur serveur.' },
        ],
      },
      howToConvert: {
        title: 'Comment Convertir SRT en VTT en 3 Étapes',
        steps: [
          { title: '1. Collez ou Téléversez votre fichier', description: 'Glissez votre fichier .srt ou collez le texte directement.' },
          { title: '2. Traitement Instantané', description: 'Le navigateur convertit automatiquement les horodatages et la structure.' },
          { title: '3. Téléchargez le Fichier .vtt', description: 'Enregistrez votre nouveau fichier WebVTT prêt à l\'emploi.' },
        ],
      },
      commonErrorsAndFixes: {
        title: 'Erreurs Fréquentes et Solutions',
        items: [
          { title: 'Sous-titres invisibles sur le web', description: 'Vérifiez que les virgules d\'horodatage ont bien été remplacées par des points.' },
          { title: 'En-tête manquant', description: 'La première ligne du fichier doit obligatoirement être "WEBVTT".' },
        ],
      },
      html5VideoGuide: {
        title: 'Utilisation des sous-titres VTT en HTML5',
        description: 'Ajoutez une balise <track> à l\'intérieur de votre élément <video> :',
        codeSnippet: `<video controls width="800">\n  <source src="/videos/cours.mp4" type="video/mp4">\n  <track kind="subtitles" src="/sous-titres/cours-fr.vtt" srclang="fr" label="Français" default>\n</video>`,
        explanation: [
          { term: 'kind="subtitles"', description: 'Type de piste textuelle pour les dialogues.' },
          { term: 'src="fichier.vtt"', description: 'Chemin vers le fichier de sous-titres.' },
          { term: 'srclang="fr"', description: 'Code de langue BCP 47.' },
          { term: 'label="Français"', description: 'Nom affiché dans le menu du lecteur.' },
        ],
      },
      comparison: {
        title: 'Tableau Comparatif : SRT vs WebVTT',
        description: 'Comparaison des fonctionnalités clés :',
        headers: ['Critère', 'SubRip (.srt)', 'WebVTT (.vtt)'],
        rows: [
          ['Usage Principal', 'Lecteurs de bureau (VLC)', 'Navigateurs web et streaming'],
          ['En-tête Obligatoire', 'Aucun', 'Obligatoire ("WEBVTT")'],
          ['Séparateur Millisecondes', 'Virgule (,)', 'Point (.)'],
          ['Support HTML5', 'Non', 'Oui (natif)'],
        ],
      },
      privacy: {
        title: 'Confidentialité 100% Garantie dans votre Navigateur',
        content: [
          'Toutes les conversions sont exécutées localement sur votre appareil sans jamais envoyer de données sur internet.',
        ],
      },
    },
    faqs: [
      { question: 'Peut-on simplement renommer .srt en .vtt ?', answer: 'Non, les navigateurs refuseront d\'afficher le fichier sans en-tête WEBVTT et avec des virgules.' },
      { question: 'Le format WebVTT est-il compatible mobile ?', answer: 'Oui, parfaitement compatible avec Safari iOS et Chrome Android.' },
    ],
  },
  de: {
    metaTitle: 'Kostenloser SRT in VTT Umwandler – WebVTT Untertitel Online Konvertieren',
    metaDescription: 'Konvertieren Sie SRT-Untertiteldateien kostenlos online in das WebVTT (.vtt) Format. Automatischer WEBVTT-Header und Punkt-Zeitstempel bei 100% Privatsphäre.',
    h1: 'SRT in VTT Umwandler',
    heroDescription: 'Wandeln Sie SubRip (.srt) Untertitel mühelos in das moderne WebVTT (.vtt) Format für HTML5-Videoplayer und Streaming um. Schnell, präzise und direkt im Browser.',
    toolName: 'SRT in VTT Umwandler',
    ui: {
      pasteTitle: 'SRT-Untertitel Eingabe (.srt)',
      pastePlaceholder: 'Fügen Sie Ihren SRT-Inhalt hier ein (z. B.\n1\n00:00:01,000 --> 00:00:04,000\nWillkommen zu unserem Video!)...',
      orDivider: 'ODER',
      uploadTitle: 'Option 2 — SRT-Datei Hochladen',
      convertButton: 'In VTT umwandeln',
      clearButton: 'Löschen',
      trySampleButton: 'Beispiel laden',
      livePreviewTitle: 'Konvertierte WebVTT-Ausgabe (.vtt)',
      errorNoInput: 'Bitte fügen Sie SRT-Text ein oder laden Sie eine .srt-Datei hoch.',
      pastedContentSource: 'Eingefügter SRT-Inhalt',
      dropzoneTitle: 'Ziehen Sie Ihre .srt-Datei hierher',
      dropzoneSubtitle: 'oder klicken Sie zum Auswählen',
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
      previewTitle: 'WebVTT-Vorschau',
      previewEmpty: 'Ihre konvertierten WebVTT-Untertitel erscheinen hier sofort nach der Eingabe.',
      optionsTitle: 'Konvertierungsoptionen',
      optIncludeCueNumbers: 'Untertitelnummern beibehalten',
      optCleanTags: 'Veraltete Tags entfernen (z. B. <font>)',
      errorInvalidFile: 'Bitte laden Sie eine gültige .srt-Datei hoch.',
      errorEmptyFile: 'Die Datei oder der Text ist leer.',
      errorParseFailed: 'Keine gültigen SRT-Untertitelblöcke gefunden.',
    },
    sections: {
      whatIsSrt: {
        title: 'Was ist eine SRT-Datei?',
        content: [
          'Eine SRT-Datei (SubRip) ist das weltweit am häufigsten genutzte Format für Untertitel.',
          'Sie enthält sequenzielle Abschnitte mit Zeitstempeln im Format 00:00:01,000 --> 00:00:04,000 mit Kommas vor den Millisekunden.',
          'Für Webbrowser ist das Format jedoch ungeeignet, da HTML5-Player es nicht nativ unterstützen.',
        ],
      },
      whatIsVtt: {
        title: 'Was ist eine WebVTT-Datei (.vtt)?',
        content: [
          'WebVTT ist der offizielle W3C-Standard für Untertitel im modernen Web und in HTML5-<video>-Elementen.',
          'Es beginnt zwingend mit der Zeile "WEBVTT" und verwendet Punkte als Millisekunden-Trennzeichen (00:00:01.000).',
          'Zusätzlich unterstützt es CSS-Styling über ::cue und flexible Positionierung.',
        ],
      },
      whatIsConverter: {
        title: 'Was macht ein SRT in VTT Umwandler?',
        content: [
          'Er passt die Syntax klassischer SRT-Dateien an die Anforderungen moderner Webbrowser an.',
          'Kommas in Zeitstempeln werden durch Punkte ersetzt und die Kopfzeile WEBVTT wird automatisch ergänzt.',
          'Die Verarbeitung erfolgt zu 100% lokal in Ihrem Browser.',
        ],
      },
      srtVsVtt: {
        title: 'Wichtige Unterschiede: SRT vs. VTT',
        content: [
          '1. Kopfzeile: WebVTT erfordert "WEBVTT" in der ersten Zeile.',
          '2. Zeitformat: SRT trennt Millisekunden mit Komma, WebVTT mit Punkt.',
          '3. HTML5-Unterstützung: WebVTT wird von allen modernen Browsern nativ unterstützt.',
        ],
      },
      whyConvert: {
        title: 'Warum SRT in VTT umwandeln?',
        benefits: [
          { title: 'Native Browser-Unterstützung', description: 'Direkte Wiedergabe in HTML5 ohne zusätzliche JavaScript-Bibliotheken.' },
          { title: 'CSS-Styling mit ::cue', description: 'Farben, Schriftgrößen und Hintergründe flexibel anpassen.' },
          { title: 'Exakte Positionierung', description: 'Untertitel an beliebiger Stelle im Bild platzieren.' },
          { title: 'HLS- und DASH-Kompatibilität', description: 'Der Standard für modernes adaptives Videostreaming.' },
          { title: 'SEO und Barrierefreiheit', description: 'Bessere Auffindbarkeit bei Suchmaschinen und barrierefreier Zugriff.' },
          { title: '100% Datenschutz', description: 'Alle Daten verbleiben auf Ihrem Gerät.' },
        ],
      },
      howToConvert: {
        title: 'SRT in VTT umwandeln in 3 Schritten',
        steps: [
          { title: '1. Text einfügen oder Datei hochladen', description: 'Ziehen Sie Ihre .srt-Datei in den Konverter oder fügen Sie den Text ein.' },
          { title: '2. Automatische Umwandlung', description: 'Die Zeitstempel und Header werden sofort im Browser formatiert.' },
          { title: '3. WebVTT herunterladen', description: 'Speichern Sie die fertige .vtt-Datei mit einem Klick.' },
        ],
      },
      commonErrorsAndFixes: {
        title: 'Häufige Fehler und Lösungen',
        items: [
          { title: 'Untertitel werden im Browser nicht geladen', description: 'Ursache: Kommas im Zeitstempel. Lösung: In Punkte umwandeln.' },
          { title: 'Fehlende WEBVTT-Kopfzeile', description: 'Ursache: Datei ohne Header gespeichert. Lösung: Unser Tool fügt ihn automatisch hinzu.' },
        ],
      },
      html5VideoGuide: {
        title: 'WebVTT-Untertitel in HTML5 einbinden',
        description: 'Nutzen Sie das <track>-Element im <video>-Tag:',
        codeSnippet: `<video controls width="800">\n  <source src="/videos/video.mp4" type="video/mp4">\n  <track kind="subtitles" src="/untertitel/video-de.vtt" srclang="de" label="Deutsch" default>\n</video>`,
        explanation: [
          { term: 'kind="subtitles"', description: 'Gibt die Art der Textspur an.' },
          { term: 'src="video-de.vtt"', description: 'Pfad zur WebVTT-Datei.' },
          { term: 'srclang="de"', description: 'Sprachcode der Untertitel.' },
          { term: 'label="Deutsch"', description: 'Angezeigter Name im Menü.' },
        ],
      },
      comparison: {
        title: 'Technischer Vergleich: SRT vs. WebVTT',
        description: 'Die wichtigsten Spezifikationen im Überblick:',
        headers: ['Eigenschaft', 'SubRip (.srt)', 'WebVTT (.vtt)'],
        rows: [
          ['Haupteinsatz', 'Desktop-Player (VLC)', 'Webbrowser & Streaming'],
          ['Kopfzeile', 'Keine', 'Erforderlich ("WEBVTT")'],
          ['Trennzeichen', 'Komma (,)', 'Punkt (.)'],
          ['HTML5-Wiedergabe', 'Nein', 'Ja (nativ)'],
        ],
      },
      privacy: {
        title: '100% Datenschutzgarantie im Browser',
        content: [
          'Ihre Dateien werden niemals an externe Server übertragen.',
        ],
      },
    },
    faqs: [
      { question: 'Reicht es, die Dateiendung von .srt in .vtt umzubenennen?', answer: 'Nein. WebVTT benötigt zwingend die WEBVTT-Kopfzeile und Punkte im Zeitstempel.' },
      { question: 'Funktioniert WebVTT auf Smartphones?', answer: 'Ja, iOS Safari und Android Chrome unterstützen WebVTT nativ.' },
    ],
  },
  ko: {
    metaTitle: '무료 SRT VTT 변환기 – 빠르고 안전한 WebVTT 자막 변환',
    metaDescription: 'SRT 자막 파일을 웹 표준 WebVTT(.vtt) 형식으로 무료 온라인 변환하세요. WEBVTT 헤더 자동 추가 및 쉼표 타임스탬프 변환을 100% 브라우저 내에서 안전하게 지원합니다.',
    h1: 'SRT VTT 변환기',
    heroDescription: 'SubRip(.srt) 자막을 HTML5 동영상 플레이어 및 스트리밍 환경에서 완벽하게 호환되는 표준 WebVTT(.vtt) 자막으로 변환하세요. 서버 업로드 없는 100% 클라이언트 방식입니다.',
    toolName: 'SRT VTT 변환기',
    ui: {
      pasteTitle: 'SRT 자막 텍스트 입력 (.srt)',
      pastePlaceholder: 'SRT 내용을 여기에 붙여넣으세요 (예:\n1\n00:00:01,000 --> 00:00:04,000\n동영상 튜토리얼에 오신 것을 환영합니다!)...',
      orDivider: '또는',
      uploadTitle: '옵션 2 — SRT 파일 업로드',
      convertButton: 'VTT로 변환하기',
      clearButton: '지우기',
      trySampleButton: '샘플 불러오기',
      livePreviewTitle: '변환된 WebVTT 자막 (.vtt)',
      errorNoInput: 'SRT 텍스트를 붙여넣거나 .srt 파일을 업로드해 주세요.',
      pastedContentSource: '붙여넣은 SRT 텍스트',
      dropzoneTitle: '여기에 .srt 파일을 끌어다 놓으세요',
      dropzoneSubtitle: '또는 클릭하여 기기에서 파일 선택',
      browseButton: 'SRT 파일 선택',
      dropActiveText: '파일을 놓으세요...',
      fileSelected: '파일 선택됨',
      fileNameLabel: '파일명',
      fileSizeLabel: '파일 크기',
      cueCountLabel: '변환된 자막 수',
      characterCountLabel: '글자 수',
      downloadAction: '.vtt 다운로드',
      copyAction: '클립보드에 복사',
      copiedSuccess: '복사되었습니다!',
      resetAction: '다른 파일 변환',
      previewTitle: 'WebVTT 미리보기',
      previewEmpty: 'SRT 파일을 입력하거나 업로드하면 변환된 WebVTT 자막이 여기에 바로 나타납니다.',
      optionsTitle: '변환 옵션',
      optIncludeCueNumbers: '자막 번호 유지',
      optCleanTags: '비표준 태그 정리 (예: <font>)',
      errorInvalidFile: '올바른 .srt 자막 파일을 업로드해 주세요.',
      errorEmptyFile: '입력된 내용이나 파일이 비어 있습니다.',
      errorParseFailed: '유효한 SRT 자막 형식을 찾을 수 없습니다.',
    },
    sections: {
      whatIsSrt: {
        title: 'SRT 파일이란 무엇인가요?',
        content: [
          'SRT(SubRip Subtitle)는 디지털 영상 분야에서 가장 널리 사용되는 기본 텍스트 자막 형식입니다.',
          '자막 순번, 시간 코드(00:00:01,000 --> 00:00:04,000), 대사 텍스트로 구성되어 있습니다.',
          '데스크톱 플레이어에서는 완벽히 지원되지만 최신 웹 브라우저의 HTML5 비디오에서는 직접 재생할 수 없습니다.',
        ],
      },
      whatIsVtt: {
        title: 'WebVTT (.vtt) 파일이란 무엇인가요?',
        content: [
          'WebVTT는 W3C에서 제정한 HTML5 비디오 전용 웹 표준 자막 형식입니다.',
          '첫 줄에 반드시 "WEBVTT" 시그니처가 들어가야 하며 밀리초 구분 기호로 마침표(.)를 사용합니다(00:00:01.000).',
          'CSS(::cue)를 통한 폰트 및 배경 스타일 지정과 화면 내 위치 지정을 완벽히 지원합니다.',
        ],
      },
      whatIsConverter: {
        title: 'SRT VTT 변환기란?',
        content: [
          '기존 SRT 자막의 문법을 웹 브라우저가 인식할 수 있는 표준 WebVTT 규격으로 변환해 주는 전용 도구입니다.',
          '타임스탬프의 쉼표를 마침표로 변경하고 상단에 WEBVTT 헤더를 자동으로 추가합니다.',
          '모든 과정은 서버 전송 없이 사용자의 브라우저 내부에서 100% 안전하게 처리됩니다.',
        ],
      },
      srtVsVtt: {
        title: 'SRT와 VTT의 기술적 차이점',
        content: [
          '1. 헤더: WebVTT는 문서 첫 줄에 "WEBVTT"가 필수입니다.',
          '2. 밀리초 구분: SRT는 쉼표(,)를 사용하고 WebVTT는 마침표(.)를 사용합니다.',
          '3. 웹 지원: WebVTT는 HTML5 <track> 요소를 통해 브라우저에서 바로 재생됩니다.',
        ],
      },
      whyConvert: {
        title: '왜 SRT를 VTT로 변환해야 하나요?',
        benefits: [
          { title: 'HTML5 비디오 완벽 호환', description: '크롬, 사파리, 엣지 등 모든 브라우저에서 플러그인 없이 즉시 재생됩니다.' },
          { title: 'CSS를 통한 자막 디자인', description: '::cue 선택자를 사용해 자막 색상, 글꼴, 크기를 웹사이트 디자인에 맞출 수 있습니다.' },
          { title: '화면 위치 지정', description: '화면 상단, 하단 등 원하는 위치에 자막을 고정하여 영상 그래픽을 가리지 않습니다.' },
          { title: 'HLS 및 DASH 스트리밍 지원', description: '최신 동영상 스트리밍 플랫폼에서 요구하는 표준 자막 규격입니다.' },
          { title: '동영상 SEO 및 접근성 향상', description: '검색엔진이 영상 대사를 쉽게 색인할 수 있어 검색 노출에 유리합니다.' },
          { title: '가볍고 빠른 로딩', description: '순수 텍스트 파일로 네트워크 대역폭을 거의 소모하지 않습니다.' },
        ],
      },
      howToConvert: {
        title: 'SRT를 VTT로 변환하는 3단계',
        steps: [
          { title: '1. 텍스트 붙여넣기 또는 파일 업로드', description: 'SRT 자막을 입력창에 붙여넣거나 .srt 파일을 업로드합니다.' },
          { title: '2. 브라우저 실시간 자동 변환', description: '타임스탬프와 헤더가 즉시 WebVTT 규격으로 변환됩니다.' },
          { title: '3. .vtt 파일 다운로드', description: '변환 완료된 WebVTT 파일을 기기에 저장하거나 텍스트를 복사합니다.' },
        ],
      },
      commonErrorsAndFixes: {
        title: '자주 발생하는 자막 오류와 해결 방법',
        items: [
          { title: '브라우저에서 자막이 나오지 않는 현상', description: '타임스탬프에 쉼표가 남아 있는 경우 브라우저가 자막을 파싱하지 못합니다. 변환기를 통해 마침표로 변경해야 합니다.' },
          { title: 'WEBVTT 헤더 누락 오류', description: '확장자만 바꾼 경우 헤더가 누락되어 재생되지 않습니다. 첫 줄에 WEBVTT를 기재해야 합니다.' },
        ],
      },
      html5VideoGuide: {
        title: 'HTML5 비디오에서 VTT 자막 사용법',
        description: '<video> 태그 내부에 <track> 요소를 선언하면 손쉽게 자막을 적용할 수 있습니다:',
        codeSnippet: `<video controls width="800">\n  <source src="/videos/sample.mp4" type="video/mp4">\n  <track kind="subtitles" src="/subtitles/ko.vtt" srclang="ko" label="한국어" default>\n</video>`,
        explanation: [
          { term: 'kind="subtitles"', description: '자막 트랙임을 브라우저에 알립니다.' },
          { term: 'src="ko.vtt"', description: '변환된 WebVTT 파일의 웹 경로입니다.' },
          { term: 'srclang="ko"', description: '자막 언어 코드(BCP 47 규격)입니다.' },
          { term: 'label="한국어"', description: '플레이어 자막 메뉴에 표시될 이름입니다.' },
        ],
      },
      comparison: {
        title: 'SRT 대 WebVTT 비교표',
        description: '주요 기술 사양 비교:',
        headers: ['구분', 'SubRip (.srt)', 'WebVTT (.vtt)'],
        rows: [
          ['주요 사용 환경', 'PC 동영상 플레이어, 편집기', '웹 브라우저, 온라인 스트리밍'],
          ['필수 헤더', '없음', '첫 줄 "WEBVTT" 필수'],
          ['밀리초 구분자', '쉼표 (,)', '마침표 (.)'],
          ['HTML5 네이티브 지원', '미지원', '완벽 지원 (<track>)'],
        ],
      },
      privacy: {
        title: '100% 브라우저 기반 보안 및 개인정보 보호',
        content: [
          'SRTConverters.info는 사용자의 자막 파일을 외부 서버로 전송하지 않습니다. 모든 변환은 사용자의 기기에서 즉시 완료됩니다.',
        ],
      },
    },
    faqs: [
      { question: '확장자 이름만 .srt에서 .vtt로 바꿔도 되나요?', answer: '아닙니다. WebVTT 헤더와 마침표 타임스탬프 규격이 맞지 않으면 웹 브라우저에서 자막이 나오지 않습니다.' },
      { question: '모바일 환경에서도 작동하나요?', answer: '네, 아이폰 사파리와 안드로이드 크롬 등 모든 모바일 브라우저에서 정상 작동합니다.' },
    ],
  },
  ja: {
    metaTitle: '無料SRT VTT変換ツール – WebVTT字幕を高速オンライン変換',
    metaDescription: 'SRT字幕ファイルをWeb標準のWebVTT（.vtt）形式に無料変換。WEBVTTヘッダーの自動付与とミリ秒カンマのピリオド変換をブラウザ完結で安全に実行します。',
    h1: 'SRT VTT 変換ツール',
    heroDescription: 'SubRip（.srt）字幕を、HTML5動画プレーヤーやWeb配信に対応した標準WebVTT（.vtt）形式に素早く変換。サーバー送信不要で安全・無料のブラウザツールです。',
    toolName: 'SRT VTT 変換ツール',
    ui: {
      pasteTitle: 'SRT字幕テキスト入力 (.srt)',
      pastePlaceholder: 'SRTテキストをここに貼り付けてください（例:\n1\n00:00:01,000 --> 00:00:04,000\n動画チュートリアルへようこそ！）...',
      orDivider: 'または',
      uploadTitle: '方法2 — SRTファイルをアップロード',
      convertButton: 'VTTに変換',
      clearButton: 'クリア',
      trySampleButton: 'サンプル読込',
      livePreviewTitle: '変換後 WebVTT 出力 (.vtt)',
      errorNoInput: 'SRTテキストを入力するか、.srtファイルを選択してください。',
      pastedContentSource: '入力されたSRTデータ',
      dropzoneTitle: 'ここに .srt ファイルをドラッグ＆ドロップ',
      dropzoneSubtitle: 'または端末からファイルを選択',
      browseButton: 'SRTファイルを選択',
      dropActiveText: 'ファイルをドロップしてください...',
      fileSelected: 'ファイル選択済み',
      fileNameLabel: 'ファイル名',
      fileSizeLabel: 'サイズ',
      cueCountLabel: '変換字幕数',
      characterCountLabel: '文字数',
      downloadAction: '.vtt をダウンロード',
      copyAction: 'クリップボードにコピー',
      copiedSuccess: 'コピーしました！',
      resetAction: '別のファイルを変換',
      previewTitle: 'WebVTT プレビュー',
      previewEmpty: 'SRTファイルを入力すると、変換されたWebVTT字幕がここに即座に表示されます。',
      optionsTitle: '変換オプション',
      optIncludeCueNumbers: '字幕番号を維持する',
      optCleanTags: '非対応タグを除去（例: <font>）',
      errorInvalidFile: '有効な .srt 字幕ファイルを指定してください。',
      errorEmptyFile: '入力内容またはファイルが空です。',
      errorParseFailed: '有効なSRT字幕形式が検出できませんでした。',
    },
    sections: {
      whatIsSrt: {
        title: 'SRTファイルとは？',
        content: [
          'SRT（SubRip）は、動画再生で世界中で最も広く使われているプレーンテキスト字幕形式です。',
          '字幕番号、ミリ秒をカンマで区切ったタイムスタンプ（00:00:01,000 --> 00:00:04,000）、字幕本文で構成されます。',
          'PC用動画プレーヤーでは標準的ですが、WebブラウザのHTML5動画ではそのまま再生できません。',
        ],
      },
      whatIsVtt: {
        title: 'WebVTT（.vtt）ファイルとは？',
        content: [
          'WebVTTは、W3CがHTML5動画向けに策定したオープン標準のWeb字幕フォーマットです。',
          '先頭行に必須の「WEBVTT」識別子を持ち、ミリ秒の区切りにピリオド（.）を使用します（00:00:01.000）。',
          'CSSの::cue疑似要素によるフォントや背景の装飾、字幕の表示位置指定に完全対応しています。',
        ],
      },
      whatIsConverter: {
        title: 'SRT VTT 変換ツールとは？',
        content: [
          'SRTファイルの構造を、Webブラウザが認識できるWebVTT規格へと相互変換する専用ツールです。',
          '時間コードのカンマをピリオドに置換し、必須のWEBVTTヘッダーを自動付与します。',
          'すべての処理はお使いのブラウザ内部で完結し、ファイルが外部へ送信される心配はありません。',
        ],
      },
      srtVsVtt: {
        title: 'SRTとWebVTTの主な違い',
        content: [
          '1. ヘッダー：WebVTTは1行目に「WEBVTT」の記述が必須です。',
          '2. タイムスタンプ：SRTはカンマ（,）、WebVTTはピリオド（.）を使用します。',
          '3. Web親和性：WebVTTはHTML5の<track>タグでそのまま再生できます。',
        ],
      },
      whyConvert: {
        title: 'SRTをVTTに変換するメリット',
        benefits: [
          { title: 'HTML5動画でネイティブ再生', description: 'Chrome、Safari、Edgeなどの全ブラウザで追加ライブラリなしで表示できます。' },
          { title: 'CSSによる自在なデザイン調整', description: '::cue疑似要素で字幕の文字色、背景透過度、フォントを柔軟に指定可能。' },
          { title: '画面上の表示位置制御', description: 'テロップや顔を隠さないように字幕の表示位置を画面上部などに調整できます。' },
          { title: 'HLS・DASH配信に対応', description: '現代の動画ストリーミング配信で標準採用されている形式です。' },
          { title: '動画のSEOとアクセシビリティ向上', description: '字幕テキストが検索エンジンにインデックスされやすくなります。' },
          { title: '完全なプライバシー保護', description: '端末内処理のため、機密動画の字幕も安心して変換できます。' },
        ],
      },
      howToConvert: {
        title: 'SRTをVTTに変換する3ステップ',
        steps: [
          { title: '1. テキスト入力またはファイル選択', description: 'SRT字幕を貼り付けるか、.srtファイルをドラッグ＆ドロップします。' },
          { title: '2. ブラウザで即時変換', description: 'タイムコードとヘッダーが瞬時にWebVTT規格へ整形されます。' },
          { title: '3. .vtt ファイルを保存', description: '「.vtt をダウンロード」ボタンを押すか、テキストをコピーします。' },
        ],
      },
      commonErrorsAndFixes: {
        title: 'よくあるエラーと対処法',
        items: [
          { title: 'ブラウザで字幕が表示されない場合', description: 'タイムスタンプにカンマが残っていると認識されません。当ツールでピリオドに変換してください。' },
          { title: 'WEBVTTヘッダーがない場合', description: '拡張子だけを変えても動作しません。1行目にWEBVTTが必要です。' },
        ],
      },
      html5VideoGuide: {
        title: 'HTML5動画でのWebVTT字幕の使い方',
        description: '<video>タグの中に<track>タグを追加するだけで簡単に設定できます：',
        codeSnippet: `<video controls width="800">\n  <source src="/videos/sample.mp4" type="video/mp4">\n  <track kind="subtitles" src="/subtitles/ja.vtt" srclang="ja" label="日本語" default>\n</video>`,
        explanation: [
          { term: 'kind="subtitles"', description: '字幕トラックであることを指定します。' },
          { term: 'src="ja.vtt"', description: '変換したWebVTTファイルのURLです。' },
          { term: 'srclang="ja"', description: '字幕の言語コード（BCP 47形式）です。' },
          { term: 'label="日本語"', description: '動画プレーヤーの字幕選択メニューに表示される名称です。' },
        ],
      },
      comparison: {
        title: '仕様比較表：SRT vs WebVTT',
        description: '主要な仕様の違い一覧：',
        headers: ['項目', 'SubRip (.srt)', 'WebVTT (.vtt)'],
        rows: [
          ['主な用途', 'デスクトップ動画再生、編集ソフト', 'Webブラウザ、動画ストリーミング'],
          ['先頭ヘッダー', 'なし', '必須（"WEBVTT"）'],
          ['ミリ秒区切り記号', 'カンマ（,）', 'ピリオド（.）'],
          ['HTML5標準対応', '非対応', '完全対応（<track>）'],
        ],
      },
      privacy: {
        title: '100% ブラウザ内完結のセキュリティ保証',
        content: [
          'SRTConverters.info では、すべての変換処理をお使いの端末内のJavaScriptで実行します。ファイルがサーバーに送信されることは一切ありません。',
        ],
      },
    },
    faqs: [
      { question: '拡張子を.srtから.vttに変えるだけではダメですか？', answer: 'はい。WEBVTTヘッダーの付与とミリ秒ピリオドへの変換が必要なため、単なる拡張子変更ではブラウザで読み込めません。' },
      { question: 'スマートフォンでも表示されますか？', answer: 'はい、iOS SafariやAndroid Chromeなどの全モバイルブラウザで標準サポートされています。' },
    ],
  },
  vi: {
    metaTitle: 'Chuyển Đổi SRT sang VTT Miễn Phí – Định Dạng WebVTT Trực Tuyến',
    metaDescription: 'Chuyển đổi phụ đề SRT sang định dạng WebVTT (.vtt) trực tuyến miễn phí. Tự động thêm tiêu đề WEBVTT và đổi dấu phẩy thành dấu chấm với bảo mật 100%.',
    h1: 'Chuyển Đổi SRT sang VTT',
    heroDescription: 'Dễ dàng chuyển đổi tệp phụ đề SRT sang chuẩn WebVTT (.vtt) tương thích hoàn hảo với video HTML5, trình phát web và nền tảng phát trực tuyến. Nhanh chóng và bảo mật.',
    toolName: 'Chuyển Đổi SRT sang VTT',
    ui: {
      pasteTitle: 'Nhập Nội Dung Phụ Đề SRT (.srt)',
      pastePlaceholder: 'Dán nội dung SRT vào đây (ví dụ:\n1\n00:00:01,000 --> 00:00:04,000\nChào mừng bạn đến với video của chúng tôi!)...',
      orDivider: 'HOẶC',
      uploadTitle: 'Cách 2 — Tải Tệp SRT Lên',
      convertButton: 'Chuyển sang VTT',
      clearButton: 'Xóa',
      trySampleButton: 'Mẫu Thử',
      livePreviewTitle: 'Kết Quả WebVTT Đã Chuyển Đổi (.vtt)',
      errorNoInput: 'Vui lòng dán văn bản SRT hoặc tải tệp .srt lên.',
      pastedContentSource: 'Nội dung SRT đã dán',
      dropzoneTitle: 'Kéo và thả tệp .srt vào đây',
      dropzoneSubtitle: 'hoặc nhấp để chọn tệp từ thiết bị',
      browseButton: 'Chọn Tệp SRT',
      dropActiveText: 'Thả tệp SRT vào đây...',
      fileSelected: 'Đã chọn tệp',
      fileNameLabel: 'Tên Tệp',
      fileSizeLabel: 'Dung Lượng',
      cueCountLabel: 'Phụ Đề Đã Chuyển',
      characterCountLabel: 'Ký Tự',
      downloadAction: 'Tải Về .vtt',
      copyAction: 'Sao Chép vào Bộ Nhớ',
      copiedSuccess: 'Đã sao chép thành công!',
      resetAction: 'Chuyển Đổi Tệp Khác',
      previewTitle: 'Xem Trước WebVTT',
      previewEmpty: 'Phụ đề WebVTT (.vtt) sẽ xuất hiện tại đây ngay khi bạn nhập hoặc tải tệp SRT.',
      optionsTitle: 'Tùy Chọn Chuyển Đổi',
      optIncludeCueNumbers: 'Giữ số thứ tự phụ đề',
      optCleanTags: 'Lọc thẻ HTML cũ không tương thích (vd: <font>)',
      errorInvalidFile: 'Vui lòng chọn tệp phụ đề .srt hợp lệ.',
      errorEmptyFile: 'Nội dung hoặc tệp được cung cấp đang trống.',
      errorParseFailed: 'Không tìm thấy cấu trúc phụ đề SRT hợp lệ.',
    },
    sections: {
      whatIsSrt: {
        title: 'Tệp SRT là gì?',
        content: [
          'SRT (SubRip Subtitle) là định dạng tệp phụ đề văn bản thuần phổ biến nhất cho video kỹ thuật số.',
          'Mỗi đoạn phụ đề gồm số thứ tự, mốc thời gian (00:00:01,000 --> 00:00:04,000) và lời thoại.',
          'Tuy nhiên, các trình duyệt web hiện đại không hỗ trợ đọc trực tiếp tệp SRT trong thẻ <video> HTML5.',
        ],
      },
      whatIsVtt: {
        title: 'Tệp WebVTT (.vtt) là gì?',
        content: [
          'WebVTT là định dạng phụ đề chuẩn web được tổ chức W3C phát triển dành riêng cho video HTML5.',
          'Dòng đầu tiên của tệp bắt buộc phải có từ khóa "WEBVTT" và mốc thời gian dùng dấu chấm (.) thay cho dấu phẩy (00:00:01.000).',
          'Định dạng này hỗ trợ định kiểu CSS qua ::cue và cho phép tùy chỉnh vị trí hiển thị trên khung hình.',
        ],
      },
      whatIsConverter: {
        title: 'Công Cụ Chuyển Đổi SRT sang VTT là gì?',
        content: [
          'Đây là tiện ích giúp biến đổi cấu trúc phụ đề SRT sang định dạng chuẩn WebVTT để hiển thị trên web.',
          'Công cụ tự động chuyển dấu phẩy trong mốc thời gian thành dấu chấm và thêm tiêu đề WEBVTT chuẩn xác.',
          'Mọi thao tác đều xử lý 100% trong trình duyệt của bạn, đảm bảo an toàn dữ liệu tuyệt đối.',
        ],
      },
      srtVsVtt: {
        title: 'Điểm Khác Biệt Giữa SRT và VTT',
        content: [
          '1. Tiêu đề: WebVTT bắt buộc phải có "WEBVTT" ở dòng đầu tiên.',
          '2. Dấu thời gian: SRT dùng dấu phẩy (,), WebVTT dùng dấu chấm (.).',
          '3. Hỗ trợ web: WebVTT chạy trực tiếp trên trình duyệt qua thẻ <track>.',
        ],
      },
      whyConvert: {
        title: 'Tại Sao Cần Chuyển Đổi SRT sang VTT?',
        benefits: [
          { title: 'Tương Thích Trực Tiếp HTML5', description: 'Hoạt động trên mọi trình duyệt hiện đại không cần phần mềm hay plugin hỗ trợ.' },
          { title: 'Tùy Chỉnh Bằng CSS', description: 'Thay đổi màu sắc, font chữ và nền phụ đề dễ dàng với ::cue.' },
          { title: 'Kiểm Soát Vị Trí Phụ Đề', description: 'Tránh che lấp thông tin quan trọng trên màn hình video.' },
          { title: 'Chuẩn Phát Trực Tuyến HLS & DASH', description: 'Đáp ứng yêu cầu kỹ thuật của các nền tảng streaming hiện đại.' },
          { title: 'Tối Ưu SEO & Khả Năng Tiếp Cận', description: 'Hỗ trợ công cụ tìm kiếm hiểu nội dung video và giúp người khiếm thính dễ dàng theo dõi.' },
          { title: 'Bảo Mật Tuyệt Đối', description: 'Dữ liệu không bao giờ rời khỏi thiết bị của bạn.' },
        ],
      },
      howToConvert: {
        title: '3 Bước Chuyển SRT sang VTT Đơn Giản',
        steps: [
          { title: '1. Dán Văn Bản Hoặc Tải Tệp .srt', description: 'Nhập nội dung phụ đề hoặc kéo thả tệp .srt vào khung tải lên.' },
          { title: '2. Chuyển Đổi Tự Động', description: 'Trình duyệt sẽ xử lý định dạng và mốc thời gian ngay lập tức.' },
          { title: '3. Tải Tệp .vtt Về Máy', description: 'Nhấp "Tải Về .vtt" để lưu tệp phụ đề mới vào thiết bị.' },
        ],
      },
      commonErrorsAndFixes: {
        title: 'Các Lỗi Thường Gặp và Cách Khắc Phục',
        items: [
          { title: 'Phụ đề không hiện trên trình duyệt', description: 'Nguyên nhân do dấu phẩy ở mốc thời gian. Cần đổi sang dấu chấm.' },
          { title: 'Thiếu tiêu đề WEBVTT', description: 'Đổi đuôi file mà không thêm chữ WEBVTT ở dòng đầu sẽ bị trình duyệt báo lỗi.' },
        ],
      },
      html5VideoGuide: {
        title: 'Cách sử dụng phụ đề VTT trong HTML5',
        description: 'Chỉ cần lồng thẻ <track> vào bên trong thẻ <video>:',
        codeSnippet: `<video controls width="800">\n  <source src="/videos/bai-giang.mp4" type="video/mp4">\n  <track kind="subtitles" src="/phu-de/vi.vtt" srclang="vi" label="Tiếng Việt" default>\n</video>`,
        explanation: [
          { term: 'kind="subtitles"', description: 'Xác định loại phụ đề cho lời thoại.' },
          { term: 'src="vi.vtt"', description: 'Đường dẫn đến tệp WebVTT.' },
          { term: 'srclang="vi"', description: 'Mã ngôn ngữ phụ đề.' },
          { term: 'label="Tiếng Việt"', description: 'Tên hiển thị trong danh sách phụ đề của trình phát.' },
        ],
      },
      comparison: {
        title: 'So Sánh Kỹ Thuật: SRT vs WebVTT',
        description: 'Bảng đối chiếu thông số:',
        headers: ['Đặc Điểm', 'SubRip (.srt)', 'WebVTT (.vtt)'],
        rows: [
          ['Môi Trường Chính', 'Trình phát máy tính (VLC)', 'Trình duyệt web và streaming'],
          ['Tiêu Đề Bắt Buộc', 'Không có', 'Bắt buộc ("WEBVTT")'],
          ['Dấu Ngăn Mili Giây', 'Dấu phẩy (,)', 'Dấu chấm (.)'],
          ['Hỗ Trợ Thẻ HTML5', 'Không', 'Có (thẻ <track>)'],
        ],
      },
      privacy: {
        title: 'Bảo Mật 100% Trên Trình Duyệt',
        content: [
          'Tại SRTConverters.info, toàn bộ tiến trình diễn ra cục bộ trong trình duyệt của bạn, không truyền bất kỳ tệp tin nào lên mạng.',
        ],
      },
    },
    faqs: [
      { question: 'Có thể đổi đuôi .srt thành .vtt trực tiếp được không?', answer: 'Không. Tệp WebVTT bắt buộc phải có dòng WEBVTT ở đầu và mốc thời gian dùng dấu chấm.' },
      { question: 'Có dùng được trên điện thoại không?', answer: 'Có, tương thích hoàn toàn với Safari trên iPhone và Chrome trên Android.' },
    ],
  },
  id: {
    metaTitle: 'Konverter SRT ke VTT Gratis – Ubah Subtitle WebVTT Online',
    metaDescription: 'Konversi file subtitle SRT ke format WebVTT (.vtt) online gratis. Otomatis menambahkan header WEBVTT dan mengubah koma menjadi titik dengan privasi 100%.',
    h1: 'Konverter SRT ke VTT',
    heroDescription: 'Ubah subtitle SubRip (.srt) menjadi format standar WebVTT (.vtt) untuk pemutar video HTML5, web streaming, dan aplikasi modern. Cepat, akurat, dan aman di browser.',
    toolName: 'Konverter SRT ke VTT',
    ui: {
      pasteTitle: 'Masukan Teks Subtitle SRT (.srt)',
      pastePlaceholder: 'Tempel teks SRT di sini (contoh:\n1\n00:00:01,000 --> 00:00:04,000\nSelamat datang di tutorial kami!)...',
      orDivider: 'ATAU',
      uploadTitle: 'Opsi 2 — Unggah File SRT',
      convertButton: 'Konversi ke VTT',
      clearButton: 'Hapus',
      trySampleButton: 'Coba Contoh',
      livePreviewTitle: 'Hasil WebVTT Terkonversi (.vtt)',
      errorNoInput: 'Silakan tempel teks SRT atau unggah file .srt untuk memulai.',
      pastedContentSource: 'Teks SRT Ditempel',
      dropzoneTitle: 'Tarik & lepas file .srt Anda di sini',
      dropzoneSubtitle: 'atau klik untuk memilih dari perangkat',
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
      previewTitle: 'Pratinjau WebVTT',
      previewEmpty: 'Subtitle WebVTT (.vtt) Anda akan langsung muncul di sini setelah memasukkan atau mengunggah file SRT.',
      optionsTitle: 'Opsi Konversi',
      optIncludeCueNumbers: 'Pertahankan nomor urut subtitle',
      optCleanTags: 'Bersihkan tag HTML usang (mis. <font>)',
      errorInvalidFile: 'Silakan unggah file subtitle .srt yang valid.',
      errorEmptyFile: 'File atau teks yang dimasukkan kosong.',
      errorParseFailed: 'Gagal mendeteksi struktur subtitle SRT yang valid.',
    },
    sections: {
      whatIsSrt: {
        title: 'Apa itu File SRT?',
        content: [
          'File SRT (SubRip Subtitle) adalah format subtitle teks biasa yang paling populer di dunia video digital.',
          'Format ini berisi blok subtitle dengan nomor urut, penanda waktu (00:00:01,000 --> 00:00:04,000), dan teks dialog.',
          'Namun, browser modern tidak mendukung pemutaran langsung file SRT di tag <video> HTML5.',
        ],
      },
      whatIsVtt: {
        title: 'Apa itu File WebVTT (.vtt)?',
        content: [
          'WebVTT (Web Video Text Tracks) adalah format subtitle standar resmi W3C untuk pemutar video web HTML5.',
          'Baris pertama file wajib diawali teks "WEBVTT" dan menggunakan titik (.) untuk memisahkan milidetik (00:00:01.000).',
          'Format ini mendukung kustomisasi gaya menggunakan CSS (::cue) dan pengaturan posisi tampilan di layar.',
        ],
      },
      whatIsConverter: {
        title: 'Apa itu Konverter SRT ke VTT?',
        content: [
          'Alat praktis untuk mengadaptasi format SRT agar memenuhi standar WebVTT yang dikenali browser.',
          'Alat ini secara otomatis mengubah koma pada timestamp menjadi titik dan menyematkan header WEBVTT.',
          'Seluruh proses berjalan 100% lokal di browser Anda tanpa mengirim file ke server.',
        ],
      },
      srtVsVtt: {
        title: 'Perbedaan Teknis SRT vs VTT',
        content: [
          '1. Header: WebVTT mewajibkan teks "WEBVTT" di baris pertama.',
          '2. Timestamp: SRT memakai koma (,), sedangkan WebVTT memakai titik (.).',
          '3. Kompatibilitas web: WebVTT didukung langsung oleh browser via tag <track>.',
        ],
      },
      whyConvert: {
        title: 'Mengapa Mengonversi SRT ke VTT?',
        benefits: [
          { title: 'Kompatibilitas Penuh Video HTML5', description: 'Berjalan lancar di Chrome, Safari, Firefox, dan Edge tanpa pustaka tambahan.' },
          { title: 'Styling Fleksibel dengan CSS', description: 'Atur warna, ukuran teks, dan latar belakang subtitle dengan ::cue.' },
          { title: 'Kontrol Posisi Subtitle', description: 'Posisikan subtitle agar tidak menutupi visual penting video.' },
          { title: 'Standar Streaming HLS dan DASH', description: 'Format utama yang digunakan dalam transmisi video streaming adaptif.' },
          { title: 'Optimasi SEO dan Aksesibilitas', description: 'Mempermudah mesin pencari mengindeks konten dan membantu penonton tunarungu.' },
          { title: 'Aman dan Privat', description: 'Data Anda tidak pernah diunggah ke internet.' },
        ],
      },
      howToConvert: {
        title: 'Cara Mengonversi SRT ke VTT dalam 3 Langkah',
        steps: [
          { title: '1. Tempel Teks atau Unggah .srt', description: 'Masukkan teks subtitle atau seret file .srt ke kotak upload.' },
          { title: '2. Konversi Otomatis di Browser', description: 'Timestamp dan header langsung disesuaikan secara instan.' },
          { title: '3. Unduh File .vtt', description: 'Klik "Unduh .vtt" untuk menyimpan file subtitle baru Anda.' },
        ],
      },
      commonErrorsAndFixes: {
        title: 'Masalah Umum Subtitle dan Solusinya',
        items: [
          { title: 'Subtitle tidak muncul di browser', description: 'Penyebab: Masih menggunakan koma pada timestamp. Solusi: Ubah menjadi titik desimal.' },
          { title: 'Header WEBVTT hilang', description: 'Mengganti ekstensi saja tidak cukup; baris pertama harus berisi teks WEBVTT.' },
        ],
      },
      html5VideoGuide: {
        title: 'Cara Menggunakan Subtitle VTT di HTML5',
        description: 'Cukup tambahkan tag <track> di dalam elemen <video>:',
        codeSnippet: `<video controls width="800">\n  <source src="/videos/video.mp4" type="video/mp4">\n  <track kind="subtitles" src="/subtitles/id.vtt" srclang="id" label="Bahasa Indonesia" default>\n</video>`,
        explanation: [
          { term: 'kind="subtitles"', description: 'Menentukan jenis trek sebagai subtitle dialog.' },
          { term: 'src="id.vtt"', description: 'Lokasi file WebVTT Anda.' },
          { term: 'srclang="id"', description: 'Kode bahasa subtitle.' },
          { term: 'label="Bahasa Indonesia"', description: 'Label yang muncul di menu subtitle pemutar.' },
        ],
      },
      comparison: {
        title: 'Tabel Perbandingan: SRT vs WebVTT',
        description: 'Ringkasan spesifikasi teknis:',
        headers: ['Karakteristik', 'SubRip (.srt)', 'WebVTT (.vtt)'],
        rows: [
          ['Penggunaan Utama', 'Pemutar desktop (VLC)', 'Browser web & streaming'],
          ['Header Wajib', 'Tidak ada', 'Wajib ("WEBVTT")'],
          ['Pemisah Milidetik', 'Koma (,)', 'Titik (.)'],
          ['Dukungan HTML5', 'Tidak', 'Ya (tag <track>)'],
        ],
      },
      privacy: {
        title: 'Jaminan Privasi 100% di Browser',
        content: [
          'Di SRTConverters.info, privasi Anda terjamin. Seluruh pemrosesan dilakukan di perangkat lokal Anda tanpa transmisi internet.',
        ],
      },
    },
    faqs: [
      { question: 'Bolehkah hanya mengganti ekstensi file dari .srt ke .vtt?', answer: 'Tidak. Browser membutuhkan header WEBVTT dan timestamp bertitik untuk dapat menampilkan teks.' },
      { question: 'Apakah format ini didukung di HP?', answer: 'Ya, didukung penuh di Safari iPhone dan Chrome Android.' },
    ],
  },
  ar: {
    metaTitle: 'محول SRT إلى VTT مجاني – تحويل ملفات الترجمة إلى WebVTT أونلاين',
    metaDescription: 'قم بتحويل ملفات ترجمة SRT إلى صيغة WebVTT (.vtt) القياسية مجاناً عبر الإنترنت. إضافة ترويسة WEBVTT وضبط التوقيت بخصوصية تامة في متصفحك.',
    h1: 'محول SRT إلى VTT',
    heroDescription: 'حول ملفات ترجمة SubRip (.srt) بسهولة إلى صيغة WebVTT (.vtt) المتوافقة مع مشغلات فيديو HTML5 والويب الحديث. سريع ومجاني بنسبة 100% داخل المتصفح.',
    toolName: 'محول SRT إلى VTT',
    ui: {
      pasteTitle: 'نص ترجمة SRT المدخل (.srt)',
      pastePlaceholder: 'الصق نص ملف SRT هنا (مثال:\n1\n00:00:01,000 --> 00:00:04,000\nمرحباً بكم في هذا الفيديو!)...',
      orDivider: 'أو',
      uploadTitle: 'الخيار 2 — رفع ملف SRT',
      convertButton: 'تحويل إلى VTT',
      clearButton: 'مسح',
      trySampleButton: 'تجربة نموذج',
      livePreviewTitle: 'مخرجات WebVTT المحولة (.vtt)',
      errorNoInput: 'يرجى لصق نص SRT أو رفع ملف .srt للتحويل.',
      pastedContentSource: 'محتوى SRT الملصق',
      dropzoneTitle: 'اسحب وأفلت ملف .srt هنا',
      dropzoneSubtitle: 'أو انقر لاختيار الملف من جهازك',
      browseButton: 'اختيار ملف SRT',
      dropActiveText: 'أفلت الملف هنا...',
      fileSelected: 'تم اختيار الملف',
      fileNameLabel: 'اسم الملف',
      fileSizeLabel: 'حجم الملف',
      cueCountLabel: 'الفقرات المحولة',
      characterCountLabel: 'عدد الأحرف',
      downloadAction: 'تحميل .vtt',
      copyAction: 'نسخ إلى الحافظة',
      copiedSuccess: 'تم النسخ بنجاح!',
      resetAction: 'تحويل ملف آخر',
      previewTitle: 'معاينة WebVTT',
      previewEmpty: 'ستظهر ترجمة WebVTT (.vtt) المحولة هنا مباشرة بمجرد إدخال أو رفع ملف SRT.',
      optionsTitle: 'خيارات التحويل',
      optIncludeCueNumbers: 'الحفاظ على أرقام المقاطع',
      optCleanTags: 'تنظيف وسوم التنسيق القديمة (مثل: <font>)',
      errorInvalidFile: 'يرجى رفع ملف ترجمة .srt صالح.',
      errorEmptyFile: 'الملف أو النص المدخل فارغ تماماً.',
      errorParseFailed: 'لم يتم العثور على مقاطع ترجمة SRT صالحة.',
    },
    sections: {
      whatIsSrt: {
        title: 'ما هو ملف SRT؟',
        content: [
          'ملف SRT (SubRip Subtitle) هو أشهر صيغ الترجمة النصية وأكثرها انتشاراً في عالم الفيديو الرقمي.',
          'يتألف من مقاطع رقمية تحتوي على توقيت زمني دقيق وتفصل بين الأجزاء من الثانية بفاصلة (00:00:01,000 --> 00:00:04,000).',
          'على الرغم من انتشاره الواسع في برامج سطح المكتب مثل VLC، إلا أن متصفحات الويب لا تدعمه بشكل مباشر عبر HTML5.',
        ],
      },
      whatIsVtt: {
        title: 'ما هو ملف WebVTT (.vtt)؟',
        content: [
          'WebVTT هو المعيار العالمي المعتمد من قبل W3C لعرض الترجمة والنصوص التوضيحية على الويب عبر وسم <video>.',
          'يبدأ السطر الأول دائماً بكلمة "WEBVTT" إلزامياً، وتُفصل الأجزاء من الثانية بنقطة (.) بدلاً من الفاصلة (00:00:01.000).',
          'يدعم التنسيق المتقدم باستخدام CSS عبر ::cue والتحكم الدقيق في موضع ظهور الترجمة على الشاشة.',
        ],
      },
      whatIsConverter: {
        title: 'ما هو محول SRT إلى VTT؟',
        content: [
          'أداة متخصصة لتعديل صياغة ملفات SRT لتتوافق مع متطلبات متصفحات الويب الحديثة.',
          'تقوم الأداة بإدراج ترويسة WEBVTT تلقائياً وتحويل الفواصل في التوقيت إلى نقاط قياسية.',
          'تتم كافة العمليات محلياً داخل متصفحك بنسبة 100% دون إرسال أي بيانات إلى خوادم خارجية.',
        ],
      },
      srtVsVtt: {
        title: 'الفروقات التقنية بين SRT و WebVTT',
        content: [
          '1. الترويسة: تتطلب WebVTT وجود كلمة "WEBVTT" في السطر الأول.',
          '2. فاصل التوقيت: تستخدم SRT الفاصلة (,) بينما تستخدم WebVTT النقطة (.).',
          '3. التوافقية مع الويب: تعمل WebVTT مباشرة داخل المتصفح بواسطة وسم <track>.',
        ],
      },
      whyConvert: {
        title: 'لماذا تقوم بالتحويل من SRT إلى VTT؟',
        benefits: [
          { title: 'توافق مباشر مع HTML5', description: 'يعمل على كافة المتصفحات الحديثة دون الحاجة لمشغلات خارجية.' },
          { title: 'تنسيق مرن عبر CSS', description: 'تغيير ألوان وخطوط وخلفية الترجمة بسهولة باستخدام ::cue.' },
          { title: 'تحديد موضع الترجمة على الشاشة', description: 'منع الترجمة من تغطية النصوص أو المشاهد الحساسة بالفيديو.' },
          { title: 'معيار البث الحديث HLS و DASH', description: 'الصيغة المعتمدة لتقديم مسارات الترجمة في خدمات البث التكيفي.' },
          { title: 'تحسين السيو وإمكانية الوصول', description: 'فهرسة الكلمات المنطوقة في محركات البحث ومساعدة ضعاف السمع.' },
          { title: 'سرعة وأمان تام', description: 'معالجة فورية لا تتطلب رفع الملفات على الإطلاق.' },
        ],
      },
      howToConvert: {
        title: 'كيفية تحويل SRT إلى VTT في 3 خطوات',
        steps: [
          { title: '1. الصق النص أو ارفع الملف', description: 'ضع نص الترجمة في الصندوق المخصص أو اسحب ملف .srt.' },
          { title: '2. تحويل فوري بالمتصفح', description: 'تتم إعادة هيكلة التوقيت والترويسة في أجزاء من الثانية.' },
          { title: '3. تحميل ملف .vtt الجديد', description: 'اضغط على زر التحميل لحفظ ملف الترجمة المحدث فوراً.' },
        ],
      },
      commonErrorsAndFixes: {
        title: 'أخطاء التنسيق الشائعة وكيفية تصحيحها',
        items: [
          { title: 'عدم ظهور الترجمة في المتصفح', description: 'السبب: وجود فاصلة بالتوقيت. الحل: تحويلها إلى نقطة عشرية.' },
          { title: 'فقدان ترويسة WEBVTT', description: 'تغيير الامتداد فقط لا يكفي؛ يجب أن يبدأ الملف بكلمة WEBVTT.' },
        ],
      },
      html5VideoGuide: {
        title: 'طريقة استخدام ترجمة VTT في كود HTML5',
        description: 'يمكنك إدراج وسم <track> داخل وسم <video> كالتالي:',
        codeSnippet: `<video controls width="800">\n  <source src="/videos/lesson.mp4" type="video/mp4">\n  <track kind="subtitles" src="/subtitles/ar.vtt" srclang="ar" label="العربية" default>\n</video>`,
        explanation: [
          { term: 'kind="subtitles"', description: 'يحدد نوع المسار كترجمة حوارية.' },
          { term: 'src="ar.vtt"', description: 'رابط ملف WebVTT.' },
          { term: 'srclang="ar"', description: 'رمز اللغة المستخدمة.' },
          { term: 'label="العربية"', description: 'الاسم المعروض في قائمة الترجمة بالمشغل.' },
        ],
      },
      comparison: {
        title: 'مقارنة تقنية: SRT مقابل WebVTT',
        description: 'ملخص الفروق والمواصفات التقنية:',
        headers: ['الجانب التقني', 'SubRip (.srt)', 'WebVTT (.vtt)'],
        rows: [
          ['الاستخدام الأساسي', 'مشغلات سطح المكتب وبرامج المونتاج', 'متصفحات الويب وخدمات البث'],
          ['الترويسة المطلوبة', 'لا توجد', 'إلزامية ("WEBVTT")'],
          ['فاصل الأجزاء من الثانية', 'فاصلة (,)', 'نقطة (.)'],
          ['دعم HTML5 المباشر', 'غير مدعوم', 'مدعوم رسمياً (<track>)'],
        ],
      },
      privacy: {
        title: 'ضمان الخصوصية التامة 100% في المتصفح',
        content: [
          'في موقع SRTConverters.info، كافة العمليات تتم بالكامل على جهازك عبر متصفحك دون رفع أي بيانات إلى الخوادم.',
        ],
      },
    },
    faqs: [
      { question: 'هل يمكنني تغيير الامتداد من .srt إلى .vtt مباشرة؟', answer: 'لا، ترفض المتصفحات قراءة الملف دون ترويسة WEBVTT والنقاط في التوقيت.' },
      { question: 'هل تعمل ترجمات WebVTT على الهواتف؟', answer: 'نعم، تعمل بشكل ممتاز وتلقائي على كافة متصفحات آيفون وأندرويد.' },
    ],
  },
};

// Write each localized file
for (const [locale, data] of Object.entries(translations)) {
  const fileContent = `import type { SrtToVttDetailContent } from './types';\n\nexport const ${locale}Content: SrtToVttDetailContent = ${JSON.stringify(data, null, 2)};\n`;
  const filePath = path.join(targetDir, `${locale}.ts`);
  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`✓ Generated ${locale}.ts`);
}

// Generate index.ts
const indexContent = `import type { Locale } from '../../../i18n/locales';
import type { SrtToVttDetailContent } from './types';
import { enContent } from './en';
import { ptContent } from './pt';
import { esContent } from './es';
import { koContent } from './ko';
import { viContent } from './vi';
import { idContent } from './id';
import { jaContent } from './ja';
import { frContent } from './fr';
import { deContent } from './de';
import { arContent } from './ar';

export type { SrtToVttDetailContent };

export const srtToVttData: Record<Locale, SrtToVttDetailContent> = {
  en: enContent,
  pt: ptContent,
  es: esContent,
  ko: koContent,
  vi: viContent,
  id: idContent,
  ja: jaContent,
  fr: frContent,
  de: deContent,
  ar: arContent,
};
`;

fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf-8');
console.log('✓ Generated index.ts');
