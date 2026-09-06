import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '..', 'src', 'data', 'tools', 'txt-to-srt');

// Helper to load existing UI from the target file so we preserve UI tweaks
function getExistingUi(locale) {
  const filePath = path.join(dataDir, `${locale}.ts`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const uiMatch = content.match(/"ui":\s*(\{[\s\S]*?\n  \}),/);
  if (!uiMatch) {
    throw new Error(`Could not find ui block in ${locale}.ts`);
  }
  return JSON.parse(uiMatch[1]);
}

const translations = {
  pt: {
    metaTitle: "Conversor TXT para SRT Grátis – Criar Legendas a partir de Texto",
    metaDescription: "Converta transcrições TXT e texto simples em arquivos de legenda SRT formatados online. Geração automática de tempo, opções flexíveis e processamento 100% no navegador.",
    h1: "Conversor TXT para SRT",
    heroDescription: "Transforme roteiros, transcrições e textos simples em arquivos de legendas SubRip (.srt) com carimbos de data/hora automáticos e personalizáveis. Rápido, privado e gratuito.",
    toolName: "Conversor TXT para SRT",
    timingNotice: "Aviso de Sincronização: Arquivos TXT simples não possuem marcações de tempo. Nosso conversor gera automaticamente marcações sequenciais de tempo e numeração de legendas com base nas suas preferências. Ajustes finos podem ser feitos no seu editor de vídeo favorito.",
    sections: {
      whatIsTxt: {
        title: "O que é um arquivo de texto simples (TXT)?",
        content: [
          "Um arquivo TXT (.txt) é o formato de texto digital mais fundamental da computação. Ele armazena caracteres alfanuméricos, palavras, frases e quebras de linha puras e sem formatação usando codificações universais como UTF-8 ou ASCII.",
          "Como os arquivos TXT não contêm tags de estilo proprietárias, cabeçalhos de metadados ou regras de layout, eles são universalmente acessíveis em todos os sistemas operacionais, editores de texto, smartphones e navegadores. Criadores de conteúdo utilizam arquivos TXT para roteiros de locução, transcrições de entrevistas, resultados de fala para texto e diálogos traduzidos.",
          "No entanto, arquivos de texto simples não possuem as coordenadas temporais, números de sequência e intervalos necessários para que os reprodutores de vídeo sincronizem as legendas com o áudio falado. Abrir um arquivo TXT em um reprodutor de mídia ou no YouTube não exibirá legendas no momento correto."
        ]
      },
      whatIsSrt: {
        title: "O que é um arquivo de legendas SRT (SubRip)?",
        content: [
          "Um arquivo SRT (SubRip Text) é o padrão global para legendas e closed captions de vídeo digital. Compatível com YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve e reprodutores de mídia como o VLC, um arquivo SRT organiza diálogos falados em blocos cronológicos estruturados.",
          "Cada bloco de legenda em um arquivo SRT válido segue rigorosamente uma estrutura de quatro partes:",
          "1. Um número sequencial de índice (1, 2, 3, 4...)",
          "2. Um carimbo de data/hora exato de início e fim no formato HH:MM:SS,mmm --> HH:MM:SS,mmm (Horas:Minutos:Segundos,Milissegundos)",
          "3. Uma ou mais linhas de texto de legenda ou diálogo",
          "4. Uma linha em branco obrigatória separando-o do bloco seguinte",
          "Sem essa sintaxe rigorosa, reprodutores de vídeo e linhas do tempo de edição não conseguem determinar quando as legendas devem surgir na tela, quanto tempo devem permanecer visíveis ou quando devem dar lugar à próxima fala."
        ]
      },
      whatIsConverter: {
        title: "O que é um Conversor TXT para SRT?",
        content: [
          "Um conversor de TXT para SRT é um mecanismo inteligente de formatação que conecta textos brutos sem tempo a arquivos de legendas sincronizados com vídeo.",
          "Ele recebe transcrições de texto simples, anotações de entrevistas, roteiros de vídeo, diálogos traduzidos ou saídas de reconhecimento de voz e os transforma em arquivos SubRip (.srt) padronizados, com índices incrementais, setas de código de tempo válidas (-->), precisão de milissegundos e espaçamento entre blocos.",
          "Nosso conversor online opera 100% na memória do navegador do cliente usando Web APIs modernas. Suas transcrições confidenciais, roteiros não publicados e documentos privados nunca saem do seu computador nem são enviados para servidores em nuvem."
        ]
      },
      howToConvert: {
        title: "Como converter TXT para SRT passo a passo",
        steps: [
          {
            title: "1. Cole o texto ou envie o arquivo",
            description: "Digite ou cole sua transcrição diretamente no editor de texto, ou envie um documento .txt do seu computador ou celular."
          },
          {
            title: "2. Configure o tempo e o método de divisão",
            description: "Escolha se cada linha, parágrafo ou frase formará uma legenda e defina a duração desejada (ex.: 3,0s) e o intervalo de pausa (ex.: 0,5s)."
          },
          {
            title: "3. Prévia instantânea em tempo real",
            description: "Veja o painel de pré-visualização gerar imediatamente códigos de tempo de legenda SRT válidos e sequenciais formatados até o milissegundo."
          },
          {
            title: "4. Baixe ou copie o SRT",
            description: "Clique em \"Baixar .srt\" para salvar o arquivo de legendas padrão no seu dispositivo, ou copie o conteúdo para colar rapidamente no seu editor."
          }
        ]
      },
      whyRenameDoesntWork: {
        title: "Por que simplesmente renomear .txt para .srt não funciona",
        content: [
          "Um dos equívocos mais comuns entre criadores de vídeo é supor que alterar a extensão de um arquivo de 'transcricao.txt' para 'transcricao.srt' fará com que os reprodutores de vídeo reconheçam as legendas.",
          "A extensão de um arquivo serve apenas para informar ao sistema operacional qual aplicativo deve abri-lo; ela não altera a estrutura interna dos dados. Reprodutores como VLC, MPV ou QuickTime exigem a sintaxe exata do SubRip. Se um reprodutor encontrar parágrafos comuns sem números sequenciais e limites de tempo '00:00:00,000 --> 00:00:00,000', ele falhará silenciosamente ou exibirá um erro de formato de legenda inválido.",
          "Renomear funciona apenas se o arquivo de texto já contiver a sintaxe SubRip válida salva previamente com a extensão .txt. Para textos comuns, transcrições e roteiros, a conversão real por meio da nossa ferramenta é essencial."
        ]
      },
      timingAndSyncExplanation: {
        title: "Entendendo os tempos de legenda: como funciona a geração automática",
        content: [
          "Como os arquivos de texto simples contêm palavras de diálogo, mas nenhuma informação temporal, nosso conversor utiliza um algoritmo de ritmo cronológico determinístico.",
          "Começando no carimbo de data/hora inicial especificado (padrão 00:00:01,000), cada unidade de texto recebe uma janela de exibição igual à duração selecionada (ex.: 3,0 segundos). Após cada legenda, o algoritmo insere o intervalo de pausa escolhido (ex.: 0,5 segundos) antes de iniciar a próxima legenda.",
          "Se o seu texto já contiver marcadores de tempo reconhecíveis (como [01:23] ou 00:02:15), nosso analisador inteligente detectará essas marcações e calculará os códigos de início e término automaticamente.",
          "Conselho prático sobre sincronização: Os carimbos de data/hora automáticos fornecem uma base perfeita e sintaticamente correta. Como os locutores aceleram a fala, pausam ou enfatizam frases de maneira espontânea, os tempos automatizados normalmente exigirão pequenos ajustes no Premiere Pro, DaVinci Resolve, Subtitle Edit ou YouTube Studio para casar com o ritmo real da fala."
        ]
      },
      realWorldUseCases: {
        title: "Casos de uso reais para conversão de TXT para SRT",
        cases: [
          {
            title: "Legendas para vídeos do YouTube e SEO",
            description: "Envie legendas estruturadas para o YouTube para melhorar a descoberta nas pesquisas, ajudar espectadores de outros países e aumentar a retenção da audiência."
          },
          {
            title: "Transcrições de podcasts e webinars",
            description: "Converta transcrições de áudio de entrevistas em faixas de legenda para videoclipes, audiogramas em redes sociais e vídeos promocionais."
          },
          {
            title: "Tradução de conteúdos audiovisuais",
            description: "Traduza o roteiro de um vídeo estrangeiro em texto simples, converta-o em um arquivo SRT com ritmo equivalente e importe no seu projeto de edição."
          },
          {
            title: "Pós-processamento de IA de fala para texto",
            description: "Formate textos brutos gerados por ditado por voz, Whisper AI ou transcrições de reuniões em faixas de legendas prontas para importação."
          },
          {
            title: "Aulas e e-learning educacional",
            description: "Disponibilize legendas acessíveis e em conformidade com padrões de acessibilidade para cursos universitários online, palestras e tutoriais."
          },
          {
            title: "Vídeos verticais para redes sociais (Reels/TikTok)",
            description: "Importe arquivos SRT gerados no CapCut, Premiere ou Final Cut para aplicar legendas animadas em conteúdos curtos verticais."
          }
        ]
      },
      commonErrorsAndFixes: {
        title: "Erros comuns na conversão de TXT para SRT e como corrigi-los",
        items: [
          {
            title: "Legendas somem rápido demais ou duram muito tempo",
            description: "Ajuste a configuração de Duração da Legenda na ferramenta. Falas rápidas normalmente precisam de 2 a 3 segundos por linha, enquanto frases longas exigem de 4 a 5 segundos."
          },
          {
            title: "Legendas sobrepondo-se umas às outras",
            description: "Nosso conversor garante intervalos matemáticos sem sobreposição entre as legendas. Certifique-se de que o intervalo esteja configurado entre 0,2 e 0,5 segundos."
          },
          {
            title: "Caracteres especiais e acentos corrompidos (mojibake)",
            description: "Isso ocorre quando arquivos são salvos com codificações antigas ANSI ou ISO. Nossa ferramenta processa tudo em UTF-8 universal para preservar acentos e caracteres internacionais."
          },
          {
            title: "Linhas muito longas para telas de celular",
            description: "Use o modo de divisão por 'Frases' ou 'Cada Linha' em vez de blocos de parágrafos grandes para manter as legendas concisas (menos de 42 caracteres por linha)."
          }
        ]
      },
      comparison: {
        title: "TXT vs SRT: Principais diferenças técnicas",
        description: "Confira as especificações técnicas que diferenciam o texto simples desestruturado dos arquivos de legenda SubRip sincronizados.",
        headers: ["Aspecto Técnico", "Texto Simples (.txt)", "Legenda SubRip (.srt)"],
        rows: [
          ["Coordenadas de Tempo", "Nenhuma (sem tempo)", "Precisão de milissegundos (HH:MM:SS,mmm)"],
          ["Numeração Sequencial", "Nenhuma", "Números inteiros obrigatórios (1, 2, 3...)"],
          ["Separador de Código de Tempo", "Nenhum", "Marcador de seta obrigatório (-->)"],
          ["Suporte em Reprodutores de Vídeo", "Não pode ser carregado como legenda", "Reprodução nativa no VLC, YouTube, etc."],
          ["Importação em Editores de Vídeo", "Requer posicionamento manual", "Encaixa diretamente na faixa de legendas"],
          ["Tags de Formatação", "Texto puro sem estilo", "Suporte a tags opcionais (<i>, <b>, <font>)"],
          ["Principal Vantagem", "Leitura humana e arquivamento", "Sincronização audiovisual precisa"]
        ]
      },
      privacy: {
        title: "Garantia de privacidade 100% no navegador",
        content: [
          "Sua segurança e confidencialidade são garantidas por projeto. Ao contrário de conversores em nuvem que enviam suas transcrições para servidores remotos onde podem ser armazenadas ou analisadas, nossa ferramenta executa todo o processamento localmente na memória do navegador do seu dispositivo.",
          "Seus roteiros de vídeo privados, transcrições jurídicas, entrevistas com clientes e documentos confidenciais nunca trafegam pela internet. Você pode inclusive desligar o Wi-Fi após carregar esta página, e o conversor continuará funcionando em velocidade máxima."
        ]
      }
    },
    faqs: [
      {
        question: "Como converter um arquivo TXT em SRT?",
        answer: "Cole seu texto simples no nosso editor ou envie seu arquivo .txt. Escolha o método de divisão preferido (parágrafos, linhas ou frases) e a duração das legendas. O conversor calcula instantaneamente códigos de tempo sequenciais e gera um arquivo .srt padrão pronto para download imediato."
      },
      {
        question: "Posso converter um arquivo TXT para SRT sem instalar programas?",
        answer: "Sim. Nossa ferramenta roda inteiramente em qualquer navegador moderno no computador, tablet ou celular, sem necessidade de instalar softwares externos, plugins ou extensões."
      },
      {
        question: "Um arquivo TXT comum contém marcações de tempo de legenda?",
        answer: "Não. Arquivos TXT contêm apenas caracteres de texto e quebras de linha sem tempos. Por isso nosso conversor atribui automaticamente marcações de tempo progressivas e números sequenciais com base nas suas configurações de ritmo."
      },
      {
        question: "Como o conversor gera os tempos das legendas?",
        answer: "Ele utiliza um sistema de ritmo cronológico progressivo. A partir do tempo inicial escolhido (ex.: 1,0s), cada legenda recebe uma duração definida (ex.: 3,0s), seguida por um intervalo de pausa (ex.: 0,5s) antes do início da próxima legenda."
      },
      {
        question: "Posso converter uma transcrição ou roteiro completo em legendas SRT?",
        answer: "Sim. Basta copiar sua transcrição ou roteiro e colar no conversor. Dividir por linhas ou frases transformará cada sentença em uma legenda individual."
      },
      {
        question: "Posso usar o arquivo SRT convertido no YouTube?",
        answer: "Sim. O arquivo .srt gerado segue o padrão oficial SubRip e pode ser enviado diretamente no YouTube Studio na aba Legendas / CC do seu vídeo."
      },
      {
        question: "Por que simplesmente renomear .txt para .srt não funciona?",
        answer: "Renomear altera apenas o nome da extensão. Os reprodutores de vídeo exigem formatação interna específica, incluindo números de sequência e setas com carimbos em milissegundos (00:00:01,000 --> 00:00:04,000). Um arquivo de texto renomeado não possui essa estrutura e não será reconhecido."
      },
      {
        question: "Posso editar os tempos do SRT após a conversão?",
        answer: "Sim. O arquivo .srt baixado é um formato de texto aberto que pode ser aberto em qualquer editor (Bloco de Notas, VS Code) ou importado em editores de vídeo (Premiere Pro, DaVinci Resolve) e editores de legenda (Subtitle Edit, Aegisub) para ajuste milimétrico."
      },
      {
        question: "O conversor suporta outros idiomas como espanhol, árabe, japonês ou hindi?",
        answer: "Sim. A ferramenta oferece suporte total a Unicode UTF-8 para todos os idiomas globais, incluindo árabe da direita para a esquerda (RTL), Devanagari, caracteres japoneses e coreanos, além de acentos europeus."
      },
      {
        question: "Meu arquivo TXT é enviado para algum servidor?",
        answer: "Não. O processamento ocorre 100% no seu dispositivo usando JavaScript no navegador. Seu texto e seus arquivos nunca são transmitidos para servidores externos."
      },
      {
        question: "O que fazer se as legendas geradas ficarem ligeiramente fora de sincronia com o vídeo?",
        answer: "Como a geração automática utiliza uma duração média estimada, você pode ajustar o tempo inicial ou a duração na ferramenta, ou deslizar a trilha de legendas no seu editor de vídeo ou YouTube Studio para casar com as pausas naturais da fala."
      },
      {
        question: "Qual é a duração ideal de legenda por linha?",
        answer: "Os padrões internacionais recomendam uma velocidade de leitura entre 21 e 24 caracteres por segundo, o que equivale a aproximadamente 2,5 a 4 segundos para uma linha padrão de 30 a 40 caracteres."
      }
    ]
  },

  es: {
    metaTitle: "Convertidor TXT a SRT Gratis – Crear Subtítulos desde Texto",
    metaDescription: "Convierta transcripciones TXT y texto sin formato en subtítulos SRT online. Generación automática de tiempos, división inteligente y procesamiento 100% privado en el navegador.",
    h1: "Convertidor TXT a SRT",
    heroDescription: "Transforme guiones, transcripciones y textos sin formato en archivos de subtítulos SubRip (.srt) con marcas de tiempo automáticas y personalizables. Rápido, privado y gratuito.",
    toolName: "Convertidor TXT a SRT",
    timingNotice: "Nota sobre el Tiempo: Los archivos de texto no contienen marcas de tiempo de subtítulos. Nuestro convertidor genera automáticamente bloques numerados y marcas de tiempo según sus ajustes. Puede ajustar la sincronización en su editor de video.",
    sections: {
      whatIsTxt: {
        title: "¿Qué es un archivo de texto sin formato (TXT)?",
        content: [
          "Un archivo TXT (.txt) es el formato de texto digital más elemental en computación. Almacena caracteres alfanuméricos puros, palabras, oraciones y saltos de línea sin formato mediante codificaciones universales como UTF-8 o ASCII.",
          "Dado que los archivos TXT carecen de etiquetas de diseño propietarias, encabezados de metadados o directivas de formato, son accesibles de forma universal en cualquier sistema operativo, editor de texto, teléfono inteligente y navegador. Los creadores de contenido los utilizan habitualmente para guiones de voz, transcripciones de entrevistas, salidas de voz a texto y traducciones.",
          "Sin embargo, los archivos de texto plano carecen de coordenadas temporales, números de secuencia e intervalos necesarios para que los reproductores de video sincronicen los subtítulos con el audio hablado. Abrir un archivo TXT en un reproductor de medios o en YouTube no mostrará subtítulos sincronizados."
        ]
      },
      whatIsSrt: {
        title: "¿Qué es un archivo de subtítulos SRT (SubRip)?",
        content: [
          "Un archivo SRT (SubRip Text) es el estándar global para subtítulos de video digital y subtítulos cerrados (closed captions). Compatible con YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve y reproductores como VLC, organiza el diálogo hablado en bloques cronológicos estructurados.",
          "Cada subtítulo en un archivo SRT válido debe seguir rigurosamente una estructura de cuatro partes:",
          "1. Un número secuencial de índice (1, 2, 3, 4...)",
          "2. Marcas exactas de inicio y fin en formato HH:MM:SS,mmm --> HH:MM:SS,mmm (Horas:Minutos:Segundos,Milisegundos)",
          "3. Una o más líneas de texto con el diálogo correspondiente",
          "4. Una línea en blanco obligatoria que separa cada subtítulo del siguiente",
          "Sin esta sintaxis estricta, los reproductores de video y los editores no pueden determinar cuándo deben aparecer los subtítulos, cuánto tiempo deben mostrarse en pantalla ni cuándo dar paso a la siguiente frase."
        ]
      },
      whatIsConverter: {
        title: "¿Qué es un Convertidor TXT a SRT?",
        content: [
          "Un convertidor de TXT a SRT es un motor de formato inteligente que transforma texto plano sin marcas de tiempo en archivos de subtítulos sincronizados para video.",
          "Acepta transcripciones de texto, notas de entrevistas, guiones, diálogos traducidos o salidas de dictado por voz y los convierte en archivos SubRip (.srt) estandarizados con numeración correlativa, flechas de tiempo válidas (-->), precisión de milisegundos y espaciado reglamentario.",
          "Nuestro convertidor funciona 100% en la memoria de su navegador mediante APIs web modernas. Sus transcripciones confidenciales, guiones inéditos y documentos privados nunca salen de su computadora ni se suben a la nube."
        ]
      },
      howToConvert: {
        title: "Cómo convertir TXT a SRT paso a paso",
        steps: [
          {
            title: "1. Pegue el texto o suba el archivo",
            description: "Escriba o pegue su transcripción directamente en el editor, o suba un documento .txt desde su computadora o móvil."
          },
          {
            title: "2. Configure el tiempo y el método de división",
            description: "Elija si cada línea, párrafo u oración forma un subtítulo y establezca la duración deseada (ej. 3.0s) y la pausa entre bloques (ej. 0.5s)."
          },
          {
            title: "3. Vista previa instantánea en vivo",
            description: "Observe cómo el panel de vista previa genera al instante subtítulos SRT válidos con códigos de tiempo exactos hasta el milisegundo."
          },
          {
            title: "4. Descargue o copie el SRT",
            description: "Haga clic en \"Descargar .srt\" para guardar el archivo listo para usar, o copie el texto directamente a su portapapeles."
          }
        ]
      },
      whyRenameDoesntWork: {
        title: "Por qué cambiar la extensión de .txt a .srt no funciona",
        content: [
          "Uno de los errores más frecuentes entre creadores de contenido es pensar que con solo renombrar un archivo de 'transcripcion.txt' a 'transcripcion.srt' el reproductor reconocerá los subtítulos.",
          "La extensión de un archivo solo le indica al sistema operativo con qué aplicación abrirlo; no altera su contenido interno. Reproductores como VLC, MPV o QuickTime requieren la sintaxis estricta de SubRip. Si encuentran párrafos planos sin números y sin intervalos '00:00:00,000 --> 00:00:00,000', ignorarán el archivo o mostrarán un error de formato.",
          "Cambiar el nombre solo funciona si el archivo de texto ya tenía internamente la estructura completa de un archivo SRT y se guardó por error con terminación .txt. Para textos y guiones normales, la conversión real con nuestra herramienta es imprescindible."
        ]
      },
      timingAndSyncExplanation: {
        title: "Cómo funciona la sincronización y la asignación automática de tiempos",
        content: [
          "Dado que los archivos de texto sin formato no contienen datos temporales, nuestro convertidor utiliza un algoritmo de cadencia cronológica determinista.",
          "Comenzando en el tiempo inicial definido (por defecto 00:00:01,000), cada bloque de texto recibe una duración en pantalla igual al tiempo configurado (ej. 3.0 segundos). Al finalizar cada subtítulo, el sistema añade la pausa seleccionada (ej. 0.5 segundos) antes de iniciar el siguiente.",
          "Si su texto ya incluye marcas de tiempo reconocibles (como [01:23] o 00:02:15), nuestro analizador inteligente las detecta y calcula automáticamente los códigos de inicio y fin correspondientes.",
          "Consejo práctico de sincronización: Los tiempos automatizados proporcionan una estructura sintáctica impecable. Como los oradores reales varían el ritmo de su voz y realizan pausas naturales, los subtítulos generados pueden requerir pequeños ajustes manuales en Premiere Pro, DaVinci Resolve, Subtitle Edit o YouTube Studio para una sincronización perfecta con el audio."
        ]
      },
      realWorldUseCases: {
        title: "Usos habituales de la conversión de TXT a SRT",
        cases: [
          {
            title: "Subtítulos para YouTube y posicionamiento SEO",
            description: "Suba subtítulos estructurados a YouTube para mejorar la visibilidad en búsquedas, ayudar a audiencias internacionales y aumentar el tiempo de retención."
          },
          {
            title: "Transcripciones de podcasts y webinars",
            description: "Convierta transcripciones de audio en pistas de subtítulos para fragmentos de video, audiogramas en redes sociales y clips promocionales."
          },
          {
            title: "Traducción de videos y contenidos",
            description: "Traduzca el guion de un video a texto plano, conviértalo en archivo SRT con tiempos coordinados e impórtelo en su proyecto audiovisual."
          },
          {
            title: "Edición de transcripciones de Inteligencia Artificial",
            description: "Transforme salidas de texto de herramientas como Whisper AI, notas de voz o reuniones grabadas en subtítulos profesionales listos para importar."
          },
          {
            title: "Cursos educativos y plataformas de formación",
            description: "Ofrezca subtítulos accesibles que cumplan con los estándares de accesibilidad para clases virtuales, conferencias y tutoriales."
          },
          {
            title: "Videos verticales para redes (Reels, TikTok y Shorts)",
            description: "Importe archivos SRT en CapCut, Premiere o Final Cut para añadir subtítulos dinámicos y llamativos en formatos verticales."
          }
        ]
      },
      commonErrorsAndFixes: {
        title: "Errores comunes de TXT a SRT y cómo resolverlos",
        items: [
          {
            title: "Los subtítulos desaparecen muy rápido o tardan demasiado",
            description: "Ajuste la duración por subtítulo en los controles. Las frases cortas suelen necesitar de 2 a 3 segundos, mientras que las oraciones largas requieren de 4 a 5 segundos."
          },
          {
            title: "Subtítulos que se solapan en pantalla",
            description: "Nuestro conversor aplica separaciones matemáticas exactas para evitar solapamientos. Compruebe que la pausa entre subtítulos esté entre 0.2 y 0.5 segundos."
          },
          {
            title: "Caracteres especiales o tildes dañadas (mojibake)",
            description: "Ocurre cuando el archivo original se guardó en codificaciones obsoletas como ANSI o ISO. Nuestra herramienta trabaja siempre en UTF-8 universal para preservar tildes, signos de apertura (¿, ¡) y caracteres especiales."
          },
          {
            title: "Líneas de subtítulos demasiado largas para móviles",
            description: "Utilice el modo de división por 'Oraciones' o 'Cada Línea' en vez de párrafos completos para que cada línea tenga menos de 42 caracteres."
          }
        ]
      },
      comparison: {
        title: "TXT vs SRT: Comparación técnica detallada",
        description: "Revise las diferencias técnicas esenciales entre el texto plano no sincronizado y los archivos de subtítulos SubRip estructurados.",
        headers: ["Característica Técnica", "Texto Plano (.txt)", "Subtítulo SubRip (.srt)"],
        rows: [
          ["Coordenadas Temporales", "Ninguna (sin sincronización)", "Precisión de milisegundos (HH:MM:SS,mmm)"],
          ["Numeración Secuencial", "Ninguna", "Enteros correlativos obligatorios (1, 2, 3...)"],
          ["Separador de Tiempos", "Ninguno", "Flecha estándar obligatoria (-->)"],
          ["Soporte en Reproductores", "No se puede cargar como subtítulo", "Reproducción nativa en VLC, YouTube, etc."],
          ["Importación en Editores", "Requiere alineación manual", "Se inserta automáticamente en la pista de subtítulos"],
          ["Etiquetas de Estilo", "Solo texto plano", "Admite etiquetas opcionales (<i>, <b>, <font>)"],
          ["Principal Función", "Lectura humana y documentación", "Sincronización audiovisual exacta"]
        ]
      },
      privacy: {
        title: "Garantía de privacidad total en su navegador",
        content: [
          "Su privacidad y confidencialidad están aseguradas desde el diseño de la herramienta. A diferencia de otros conversores que envían sus textos a servidores externos donde podrían ser almacenados o analizados, nuestro conversor procesa todo en la memoria de su navegador.",
          "Sus guiones inéditos, transcripciones confidenciales y contenidos audiovisuales nunca viajan por internet. Incluso puede desconectar su conexión Wi-Fi después de cargar esta página y la herramienta seguirá funcionando a máxima velocidad."
        ]
      }
    },
    faqs: [
      {
        question: "¿Cómo convertir un archivo TXT a formato SRT?",
        answer: "Pegue su texto plano en el editor o suba su archivo .txt. Seleccione el método de división (párrafos, líneas u oraciones) y la duración por subtítulo. El convertidor calculará de inmediato los códigos de tiempo y formateará un archivo .srt listo para descargar."
      },
      {
        question: "¿Se puede convertir de TXT a SRT sin instalar programas?",
        answer: "Sí. Nuestra herramienta funciona directamente en cualquier navegador moderno de computadora, tableta o teléfono móvil, sin necesidad de instalar programas ni extensiones."
      },
      {
        question: "¿Un archivo TXT normal contiene códigos de tiempo?",
        answer: "No. Los archivos de texto estándar contienen únicamente caracteres y saltos de línea sin marcas de tiempo. Por eso nuestro convertidor genera automáticamente tiempos progresivos basados en sus ajustes."
      },
      {
        question: "¿Cómo calcula el convertidor las marcas de tiempo?",
        answer: "Utiliza un sistema cronológico progresivo. Iniciando en el segundo establecido (ej. 1.0s), asigna a cada subtítulo la duración elegida (ej. 3.0s), seguida por la pausa correspondiente (ej. 0.5s) antes del siguiente subtítulo."
      },
      {
        question: "¿Puedo convertir el guion de un video completo en subtítulos SRT?",
        answer: "Sí. Solo copie el guion o la transcripción y péguela en la herramienta. Al elegir la división por líneas u oraciones, cada frase se convertirá en un subtítulo independiente."
      },
      {
        question: "¿El archivo SRT generado funciona en YouTube?",
        answer: "Sí. El archivo .srt cumple rigurosamente el estándar SubRip oficial y se puede subir directamente en YouTube Studio dentro de la sección de subtítulos de su video."
      },
      {
        question: "¿Por qué no basta con renombrar la extensión .txt a .srt?",
        answer: "Cambiar la extensión solo altera el nombre del archivo, pero no su estructura. Los reproductores de video requieren números correlativos y flechas de tiempo precisas (00:00:01,000 --> 00:00:04,000) para mostrar los subtítulos."
      },
      {
        question: "¿Puedo modificar los tiempos después de la conversión?",
        answer: "Sí. El archivo .srt descargado es un archivo de texto abierto que puede editarse con el Bloc de notas o importarse en programas de edición de video (Premiere Pro, DaVinci Resolve) y herramientas como Subtitle Edit para ajustes milimétricos."
      },
      {
        question: "¿Admite otros idiomas como español, portugués, árabe o japonés?",
        answer: "Sí. Soporta completamente la codificación universal UTF-8 para todos los idiomas, incluyendo caracteres con tildes, árabe con lectura de derecha a izquierda, kanji japonés y alfabetos asiáticos."
      },
      {
        question: "¿Se sube mi archivo a algún servidor?",
        answer: "No. La conversión se efectúa 100% de manera local en su dispositivo mediante JavaScript en el navegador. Ningún dato ni texto se transfiere a servidores externos."
      },
      {
        question: "¿Qué hacer si los subtítulos quedan desfasados con el video?",
        answer: "Dado que el sistema asigna duraciones promedio, puede ajustar los parámetros de inicio y duración en la herramienta, o desplazar levemente la pista de subtítulos en su editor de video o YouTube Studio para adaptarla a la voz real."
      },
      {
        question: "¿Cuál es la duración recomendada por subtítulo?",
        answer: "Las normas internacionales sugieren una velocidad de lectura de entre 21 y 24 caracteres por segundo, lo que equivale a unos 2.5 a 4 segundos para líneas estándar de 30 a 40 caracteres."
      }
    ]
  },

  fr: {
    metaTitle: "Convertisseur TXT en SRT Gratuit – Créer des Sous-titres à partir de Texte",
    metaDescription: "Convertissez des transcriptions TXT et du texte brut en sous-titres SRT en ligne. Génération automatique de timecodes, réglages précis et traitement 100% privé dans le navigateur.",
    h1: "Convertisseur TXT en SRT",
    heroDescription: "Transformez vos scripts, transcriptions et textes bruts en fichiers de sous-titres SubRip (.srt) avec des timecodes séquentiels automatiques et personnalisables. Rapide, privé et gratuit.",
    toolName: "Convertisseur TXT en SRT",
    timingNotice: "Note sur la Synchronisation : Les fichiers texte bruts ne contiennent pas de codes temporels. Notre outil génère automatiquement des blocs numérotés et des timecodes selon vos réglages. Vous pouvez ensuite ajuster la synchronisation dans votre logiciel de montage.",
    sections: {
      whatIsTxt: {
        title: "Qu'est-ce qu'un fichier texte brut (TXT) ?",
        content: [
          "Un fichier TXT (.txt) est le format de document le plus universel en informatique. Il contient des caractères alphanumériques simples, des phrases et des retours à la ligne sans aucune mise en forme complexe, encodés en UTF-8 ou ASCII.",
          "Parce qu'ils ne possèdent aucune balise propriétaire, aucun style graphique ni en-tête lourd, les fichiers TXT s'ouvrent sans problème sur tous les systèmes d'exploitation, smartphones et éditeurs de texte. Les créateurs de contenu s'en servent fréquemment pour rédiger des scripts, transcrire des interviews ou traduire des dialogues.",
          "Cependant, un fichier texte brut ne possède aucun repère temporel ni numéro séquentiel permettant à un lecteur vidéo d'afficher les phrases au bon moment. L'ouverture d'un simple TXT dans un lecteur multimédia ou sur YouTube ne permettra pas d'afficher des sous-titres synchronisés."
        ]
      },
      whatIsSrt: {
        title: "Qu'est-ce qu'un fichier de sous-titres SRT (SubRip) ?",
        content: [
          "Le format SRT (SubRip Text) est la référence mondiale pour les sous-titres vidéo et le sous-titrage pour sourds et malentendants. Pris en charge par YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve et les lecteurs comme VLC, il organise les dialogues en séquences temporelles précises.",
          "Chaque bloc de sous-titre dans un fichier SRT valide respecte obligatoirement une structure en quatre parties :",
          "1. Un numéro d'ordre séquentiel (1, 2, 3, 4...)",
          "2. Des codes temporels précis de début et de fin sous la forme HH:MM:SS,mmm --> HH:MM:SS,mmm (Heures:Minutes:Secondes,Millisecondes)",
          "3. Une ou plusieurs lignes de texte correspondant aux paroles prononcées",
          "4. Une ligne vide séparatrice marquant la fin du sous-titre",
          "Sans cette structure stricte, les lecteurs vidéo et les logiciels de montage ne peuvent pas déterminer l'instant où le sous-titre doit apparaître, sa durée d'affichage, ni le moment où il doit disparaître."
        ]
      },
      whatIsConverter: {
        title: "Qu'est-ce qu'un Convertisseur TXT en SRT ?",
        content: [
          "Un convertisseur TXT vers SRT est un outil de mise en forme intelligent conçu pour transformer du texte brut sans repère temporel en un véritable fichier de sous-titres prêt pour la vidéo.",
          "Il prend en charge vos transcriptions, scripts de voix off, interviews et textes traduits pour générer des fichiers SubRip (.srt) complets, comprenant la numérotation séquentielle, les flèches de timecode valides (-->), la précision à la milliseconde et l'espacement requis.",
          "Notre convertisseur fonctionne intégralement dans votre navigateur grâce aux API Web modernes. Vos documents confidentiels, scripts inédits et transcriptions privées ne quittent jamais votre appareil."
        ]
      },
      howToConvert: {
        title: "Comment convertir un fichier TXT en SRT étape par étape",
        steps: [
          {
            title: "1. Collez le texte ou importez votre fichier",
            description: "Saisissez ou collez votre transcription dans la zone de texte, ou sélectionnez un fichier .txt depuis votre ordinateur ou smartphone."
          },
          {
            title: "2. Choisissez le découpage et les durées",
            description: "Sélectionnez le mode de découpage (lignes, paragraphes ou phrases) et définissez la durée par sous-titre (ex. 3.0s) ainsi que la pause intermédiaire (ex. 0.5s)."
          },
          {
            title: "3. Aperçu instantané en direct",
            description: "Le panneau d'aperçu génère immédiatement les sous-titres SRT avec des timecodes séquentiels précis à la milliseconde."
          },
          {
            title: "4. Téléchargez ou copiez le résultat",
            description: "Cliquez sur \"Télécharger .srt\" pour enregistrer le fichier sur votre appareil, ou copiez le texte pour l'utiliser dans votre logiciel de montage."
          }
        ]
      },
      whyRenameDoesntWork: {
        title: "Pourquoi renommer un fichier .txt en .srt ne fonctionne pas",
        content: [
          "Une idée reçue courante consiste à croire qu'il suffit de remplacer l'extension '.txt' par '.srt' pour que le fichier se transforme magiquement en sous-titres vidéo.",
          "Changer l'extension ne modifie que l'étiquette du fichier pour le système d'exploitation, mais ne transforme pas son contenu. Les lecteurs comme VLC ou QuickTime exigent la syntaxe spécifique de SubRip. S'ils trouvent du texte brut sans numéros et sans timecodes du type '00:00:00,000 --> 00:00:00,000', ils ignoreront le fichier ou afficheront une erreur.",
          "Renommer le fichier ne fonctionne que s'il contenait déjà la structure exacte d'un fichier SRT sauvegardé par mégarde avec l'extension .txt. Pour les textes et transcriptions classiques, une vraie conversion est indispensable."
        ]
      },
      timingAndSyncExplanation: {
        title: "Comprendre le calcul des timecodes : comment fonctionne l'automatisation",
        content: [
          "Puisque les fichiers texte ordinaires ne possèdent aucune indication d'horodatage, notre outil applique un calcul chronologique régulier.",
          "À partir du point de départ défini (par défaut 00:00:01,000), chaque bloc de texte se voit attribuer une fenêtre d'affichage égale à la durée choisie (ex. 3,0 secondes). Après chaque sous-titre, l'algorithme insère un intervalle de pause (ex. 0,5 seconde) avant d'enchaîner sur le bloc suivant.",
          "Si votre texte contient déjà des repères d'horodatage identifiables (comme [01:23] ou 00:02:15), notre analyseur intelligent les détecte et calcule automatiquement les points de début et de fin correspondants.",
          "Conseil de synchronisation pratique : Les horodatages automatiques constituent une base propre et parfaitement formatée. Comme la voix humaine comporte des accélérations et des silences naturels, quelques ajustements légers dans Premiere Pro, DaVinci Resolve ou YouTube Studio peuvent être utiles pour coller parfaitement au rythme des voix."
        ]
      },
      realWorldUseCases: {
        title: "Cas d'usage concrets de la conversion TXT en SRT",
        cases: [
          {
            title: "Sous-titres pour vidéos YouTube et référencement SEO",
            description: "Ajoutez des sous-titres structurés pour améliorer le positionnement de vos vidéos dans les recherches, toucher un public international et booster la durée de visionnage."
          },
          {
            title: "Transcriptions de podcasts et webinaires",
            description: "Convertissez vos enregistrements transcrits en pistes de sous-titres pour vos extraits vidéo, audiogrammes et teasers sur les réseaux sociaux."
          },
          {
            title: "Traduction de contenus audiovisuels",
            description: "Traduisez le script d'une vidéo étrangère en texte brut, convertissez-le en fichier SRT puis importez-le dans votre logiciel de montage."
          },
          {
            title: "Post-traitement de la reconnaissance vocale IA",
            description: "Transformez les données brutes issues de Whisper AI, de dictées vocales ou de comptes-rendus de réunion en fichiers de sous-titres exploitables."
          },
          {
            title: "Cours en ligne et formation à distance",
            description: "Fournissez des sous-titres conformes aux normes d'accessibilité numérique pour vos cours universitaires, tutoriels et modules e-learning."
          },
          {
            title: "Formats verticaux pour réseaux sociaux (Reels, TikTok)",
            description: "Importez vos fichiers SRT dans CapCut, Premiere ou Final Cut pour intégrer des sous-titres animés et percutants sur vos vidéos courtes."
          }
        ]
      },
      commonErrorsAndFixes: {
        title: "Problèmes fréquents et conseils de dépannage",
        items: [
          {
            title: "Les sous-titres défilent trop vite ou restent trop longtemps",
            description: "Ajustez la durée par sous-titre dans les réglages. Les phrases rapides nécessitent souvent 2 à 3 secondes, tandis que les phrases longues demandent 4 à 5 secondes."
          },
          {
            title: "Les sous-titres se chevauchent sur la vidéo",
            description: "Notre outil garantit un intervalle mathématique précis sans chevauchement. Veillez simplement à régler la pause entre sous-titres à au moins 0,2 à 0,5 seconde."
          },
          {
            title: "Caractères accentués illisibles ou corrompus (mojibake)",
            description: "Ce problème survient avec les encodages anciens comme ANSI. Notre convertisseur fonctionne exclusivement en UTF-8 universel pour conserver tous les accents et caractères spéciaux."
          },
          {
            title: "Lignes de texte trop longues sur smartphone",
            description: "Utilisez le mode de découpage par 'Phrases' ou par 'Lignes' pour éviter les gros blocs de texte et maintenir moins de 42 caractères par ligne."
          }
        ]
      },
      comparison: {
        title: "TXT vs SRT : Comparatif technique",
        description: "Découvrez les différences fondamentales entre le texte brut sans timing et les fichiers de sous-titres SubRip structurés.",
        headers: ["Critère Technique", "Texte Brut (.txt)", "Sous-titre SubRip (.srt)"],
        rows: [
          ["Repères Temporels", "Aucun (sans horodatage)", "Précision à la milliseconde (HH:MM:SS,mmm)"],
          ["Numérotation Séparée", "Aucune", "Nombres entiers séquentiels obligatoires (1, 2, 3...)"],
          ["Flèche Séparatrice", "Aucune", "Flèche standard obligatoire (-->)"],
          ["Compatibilité Lecteurs", "Ne peut pas être chargé comme sous-titre", "Lecture native dans VLC, YouTube, etc."],
          ["Logiciels de Montage", "Nécessite un placement manuel", "S'insère directement sur la piste de sous-titres"],
          ["Balises de Style", "Texte pur", "Prise en charge de balises basiques (<i>, <b>, <font>)"],
          ["Usage Principal", "Lecture documentaire et archivage", "Synchronisation audiovisuelle exacte"]
        ]
      },
      privacy: {
        title: "Garantie de confidentialité 100% locale",
        content: [
          "Votre sécurité et la protection de vos données sont garanties par l'architecture même de notre service. Contrairement aux convertisseurs distants qui téléversent vos scripts sur des serveurs tiers, notre outil effectue l'intégralité du travail dans la mémoire de votre navigateur.",
          "Vos scripts de tournage, transcriptions juridiques et documents confidentiels ne transitent jamais sur Internet. Vous pouvez même couper votre connexion Internet après le chargement de la page : l'outil continuera de fonctionner sans interruption."
        ]
      }
    },
    faqs: [
      {
        question: "Comment convertir un fichier TXT en SRT ?",
        answer: "Collez votre texte dans la zone de saisie ou sélectionnez votre fichier .txt. Choisissez le mode de découpage souhaité ainsi que la durée par réplique. Le convertisseur calcule instantanément les codes temporels et génère un fichier .srt prêt à être téléchargé."
      },
      {
        question: "Peut-on convertir du TXT en SRT sans installer de logiciel ?",
        answer: "Oui. L'outil fonctionne directement dans n'importe quel navigateur web moderne sur ordinateur, tablette ou smartphone, sans logiciel ni extension à installer."
      },
      {
        question: "Un fichier TXT standard contient-il des horodatages de sous-titres ?",
        answer: "Non. Les fichiers TXT ne contiennent que du texte brut sans aucune information temporelle. C'est pourquoi notre convertisseur applique automatiquement des timecodes séquentiels réguliers."
      },
      {
        question: "Comment l'outil génère-t-il les timecodes ?",
        answer: "Il applique un algorithme de cadencement régulier. À partir du temps initial défini (ex. 1.0s), chaque sous-titre se voit accorder la durée sélectionnée (ex. 3.0s), suivie de la pause choisie (ex. 0.5s) avant le sous-titre suivant."
      },
      {
        question: "Puis-je convertir un scénario ou une transcription complète ?",
        answer: "Oui. Il vous suffit de copier l'intégralité de votre texte et de le coller dans l'outil. Le découpage par ligne ou par phrase créera un sous-titre individuel pour chaque réplique."
      },
      {
        question: "Le fichier SRT créé est-il compatible avec YouTube ?",
        answer: "Oui. Le fichier .srt généré respecte fidèlement la norme SubRip et peut être téléversé directement dans YouTube Studio dans l'onglet Sous-titres de votre vidéo."
      },
      {
        question: "Pourquoi ne suffit-il pas de remplacer l'extension .txt par .srt ?",
        answer: "Renommer un fichier ne modifie pas sa structure intérieure. Les lecteurs vidéo requièrent une syntaxe précise faite d'indices numériques et de flèches horaires (00:00:01,000 --> 00:00:04,000) pour afficher les sous-titres."
      },
      {
        question: "Puis-je modifier les timecodes après la conversion ?",
        answer: "Oui. Le fichier .srt est un format texte modifiable dans n'importe quel éditeur de texte (Bloc-notes, TextEdit) ou dans des logiciels comme Subtitle Edit, Premiere Pro ou DaVinci Resolve."
      },
      {
        question: "L'outil gère-t-il d'autres langues comme l'arabe, le japonais ou l'espagnol ?",
        answer: "Oui. Il assure une prise en charge intégrale de l'UTF-8 pour tous les alphabets du monde, y compris l'arabe de droite à gauche, les caractères japonais, coréens ou l'écriture devanagari."
      },
      {
        question: "Mon fichier texte est-il transféré vers un serveur ?",
        answer: "Non. L'ensemble des opérations s'effectue localement sur votre ordinateur ou smartphone grâce à JavaScript. Vos fichiers ne quittent jamais votre machine."
      },
      {
        question: "Que faire si les sous-titres sont légèrement décalés par rapport à la voix ?",
        answer: "Comme le calcul automatique applique une durée moyenne, vous pouvez modifier les réglages de durée dans l'outil, ou décaler légèrement la piste de sous-titres dans votre logiciel de montage vidéo pour l'adapter aux respirations réelles du locuteur."
      },
      {
        question: "Quelle est la durée conseillée pour un sous-titre ?",
        answer: "Les recommandations audiovisuelles internationales préconisent une vitesse de lecture de 21 à 24 caractères par seconde, soit environ 2,5 à 4 secondes pour une ligne courante de 30 à 40 caractères."
      }
    ]
  },

  de: {
    metaTitle: "Kostenloser TXT zu SRT Konverter – Text in Untertitel umwandeln",
    metaDescription: "Wandeln Sie TXT-Transkripte und reinen Text online in formatierte SRT-Untertitel um. Automatische Zeitstempel, intelligente Aufteilung und 100% lokale Browserverarbeitung.",
    h1: "TXT zu SRT Konverter",
    heroDescription: "Verwandeln Sie Drehbücher, Transkripte und Textdateien in normgerechte SubRip (.srt) Untertiteldateien mit automatischer, anpassbarer Zeitcodierung. Schnell, sicher und kostenlos.",
    toolName: "TXT zu SRT Konverter",
    timingNotice: "Hinweis zum Timing: Reine Textdateien besitzen keine integrierten Zeitstempel. Unser Konverter erstellt automatisch fortlaufende Zeitmarken und Nummerierungen gemäß Ihren Einstellungen. Die Feinabstimmung kann im Videoschnittprogramm erfolgen.",
    sections: {
      whatIsTxt: {
        title: "Was ist eine reine Textdatei (TXT)?",
        content: [
          "Eine TXT-Datei (.txt) ist das grundlegendste digitale Textformat. Sie speichert reine alphanumerische Zeichen, Wörter, Absätze und Zeilenumbrüche ohne Formatierungsanweisungen, meist kodiert in UTF-8 oder ASCII.",
          "Da TXT-Dateien keine herstellerspezifischen Formatierungs-Tags, Layout-Vorgaben oder Metadaten enthalten, lassen sie sich auf jedem Betriebssystem, Smartphone und Texteditor problemlos öffnen. Autoren und Redakteure nutzen TXT-Dateien vor allem für Skripte, Notizen, Audio-Transkripte und Übersetzungen.",
          "Allerdings fehlen einfachen Textdateien jegliche Zeitmarken, Zählindizes und Intervalle, die Videoplayer benötigen, um Untertitel synchron zum gesprochenen Ton anzuzeigen. Wird eine TXT-Datei in einem Media-Player geöffnet, können keine zeitgesteuerten Untertitel dargestellt werden."
        ]
      },
      whatIsSrt: {
        title: "Was ist eine SRT-Untertiteldatei (SubRip)?",
        content: [
          "Eine SRT-Datei (SubRip Text) ist der weltweite Standard für digitale Untertitel und Closed Captions. Unterstützt von YouTube, Vimeo, TikTok, Premiere Pro, DaVinci Resolve, Final Cut Pro sowie Playern wie VLC, gliedert sie gesprochene Dialoge in geordnete Zeitabschnitte.",
          "Jeder einzelne Untertitelblock in einer gültigen SRT-Datei folgt einer verbindlichen vierteiligen Struktur:",
          "1. Eine fortlaufende Indexnummer (1, 2, 3, 4...)",
          "2. Ein genauer Start- und Endzeitstempel im Format HH:MM:SS,mmm --> HH:MM:SS,mmm (Stunden:Minuten:Sekunden,Millisekunden)",
          "3. Eine oder mehrere Textzeilen mit dem Dialogtext",
          "4. Eine obligatorische Leerzeile zur Trennung vom nächsten Untertitelblock",
          "Ohne diese formale Syntax können Videoplayer und Schnittprogramme nicht feststellen, wann ein Text eingeblendet wird, wie lange er sichtbar bleibt und wann die nächste Textzeile folgt."
        ]
      },
      whatIsConverter: {
        title: "Was macht ein TXT zu SRT Konverter?",
        content: [
          "Ein TXT-zu-SRT-Konverter überbrückt die Lücke zwischen unformatiertem Text ohne Zeitangaben und timing-synchronen Videountertiteln.",
          "Er liest reine Texttranskripte, Skripte, Vortragsnotizen oder Übersetzungen ein und erzeugt standardkonforme SubRip (.srt)-Dateien inklusive aufsteigender Nummerierung, korrekten Zeitcode-Pfeilen (-->), Millisekunden-Präzision und standardisierten Abständen.",
          "Unser Online-Konverter arbeitet zu 100 % im Arbeitsspeicher Ihres Browsers über moderne Web-APIs. Vertrauliche Skripte, juristische Transkripte und private Medieninhalte werden niemals auf fremde Server übertragen."
        ]
      },
      howToConvert: {
        title: "Schritt-für-Schritt-Anleitung: TXT in SRT umwandeln",
        steps: [
          {
            title: "1. Text einfügen oder Datei hochladen",
            description: "Fügen Sie Ihren Text direkt in das Textfeld ein oder wählen Sie eine .txt-Datei von Ihrem Computer oder Smartphone aus."
          },
          {
            title: "2. Timing und Aufteilung festlegen",
            description: "Wählen Sie, ob Zeilen, Absätze oder Sätze getrennt werden sollen, und bestimmen Sie die Anzeigedauer (z. B. 3,0s) sowie die Pausenzeit (z. B. 0,5s)."
          },
          {
            title: "3. Sofortige Live-Vorschau prüfen",
            description: "Im Vorschaufenster wird die fertige SRT-Datei mit exakten, millisekundengenauen Zeitmarken unmittelbar generiert."
          },
          {
            title: "4. SRT herunterladen oder kopieren",
            description: "Klicken Sie auf \"SRT herunterladen\", um die Untertiteldatei lokal zu speichern, oder kopieren Sie den Inhalt für Ihr Schnittprogramm."
          }
        ]
      },
      whyRenameDoesntWork: {
        title: "Warum das einfache Umbenennen von .txt in .srt nicht funktioniert",
        content: [
          "Ein weit verbreiteter Irrtum besteht darin, zu glauben, man müsse lediglich die Dateiendung von '.txt' in '.srt' ändern, damit ein Videoplayer Untertitel anzeigt.",
          "Die Dateiendung signalisiert dem Betriebssystem lediglich, welches Programm geöffnet werden soll. Sie verändert jedoch nicht den Datenaufbau der Datei. Videoplayer wie VLC verlangen zwingend die exakte SubRip-Struktur. Fehlen Zeitzähler und Zeitcodes wie '00:00:00,000 --> 00:00:00,000', verweigert der Player die Wiedergabe.",
          "Ein Umbenennen funktioniert ausschließlich dann, wenn die Textdatei bereits fertigen SRT-Code enthielt und versehentlich als .txt abgespeichert wurde. Bei regulären Texten ist eine echte Umwandlung durch unser Tool unerlässlich."
        ]
      },
      timingAndSyncExplanation: {
        title: "Automatische Zeitstempelberechnung: So funktioniert das Timing",
        content: [
          "Da normale Textdateien keine zeitlichen Orientierungspunkte besitzen, nutzt unser Konverter einen deterministischen Zeitfortschritts-Algorithmus.",
          "Ausgehend von einer Startzeit (standardmäßig 00:00:01,000) erhält jeder Textblock ein Zeitfenster gemäß der eingestellten Dauer (z. B. 3,0 Sekunden). Danach fügt das Tool die gewählte Pause (z. B. 0,5 Sekunden) ein, bevor der nächste Untertitel beginnt.",
          "Enthält Ihr Text bereits Zeitstempel in Klammern (wie [01:23] oder 00:02:15), erkennt unsere Parsing-Logik diese Muster und berechnet Start- und Endzeitpunkte automatisch.",
          "Praxistipp zur Synchronisation: Automatisch erstellte Zeitstempel liefern eine syntaktisch einwandfreie Arbeitsgrundlage. Da menschliche Sprache natürliche Pausen und unterschiedliche Sprechgeschwindigkeiten aufweist, empfiehlt sich ein kurzer Feinschliff in Programmen wie Premiere Pro, DaVinci Resolve oder YouTube Studio."
        ]
      },
      realWorldUseCases: {
        title: "Häufige Einsatzbereiche für TXT zu SRT",
        cases: [
          {
            title: "YouTube-Untertitel und Video-SEO",
            description: "Laden Sie formatierte Untertitel bei YouTube hoch, um die Auffindbarkeit in Suchmaschinen zu steigern und internationale Zuschauer zu erreichen."
          },
          {
            title: "Podcast- und Webinar-Zusammenfassungen",
            description: "Verwandeln Sie gesprochene Audioinhalte in Untertitelspuren für Social-Media-Clips, Audiogramme und Werbevideos."
          },
          {
            title: "Übersetzung internationaler Videos",
            description: "Übersetzen Sie Videotexte als einfachen Text, konvertieren Sie sie in SRT mit synchronem Zeittakt und binden Sie sie in Ihr Schnittprojekt ein."
          },
          {
            title: "Nachbearbeitung von KI-Spracherkennung",
            description: "Bringen Sie Rohtext aus Whisper AI, Sprachdiktaten oder automatischen Meeting-Mitschriften in ein sauberes Untertitelformat."
          },
          {
            title: "Online-Vorlesungen und E-Learning",
            description: "Stellen Sie barrierefreie Untertitel für digitale Universitätskurse, Schulungsvideos und Lehrinhalte bereit."
          },
          {
            title: "Vertikale Social-Media-Videos (Reels & TikTok)",
            description: "Importieren Sie SRT-Dateien in Apps wie CapCut oder Premiere, um ansprechende dynamische Bilduntertitel zu gestalten."
          }
        ]
      },
      commonErrorsAndFixes: {
        title: "Typische Fehlerquellen und deren Behebung",
        items: [
          {
            title: "Untertitel verschwinden zu schnell oder bleiben zu lange stehen",
            description: "Passen Sie die Anzeigedauer im Tool an. Schnelle Sprache benötigt ca. 2 bis 3 Sekunden pro Zeile, während lange Sätze 4 bis 5 Sekunden erfordern."
          },
          {
            title: "Untertitel überlappen sich zeitlich",
            description: "Unser Konverter stellt durch mathematische Abstände sicher, dass keine Überlappungen entstehen. Stellen Sie die Pausenzeit auf 0,2 bis 0,5 Sekunden ein."
          },
          {
            title: "Umlaute und Sonderzeichen fehlerhaft dargestellt (Mojibake)",
            description: "Dies passiert bei veralteten Kodierungen wie ANSI. Unser Tool verarbeitet alle Dateien standardmäßig in UTF-8, wodurch deutsche Umlaute (ä, ö, ü, ß) erhalten bleiben."
          },
          {
            title: "Textzeilen zu lang für mobile Bildschirme",
            description: "Wählen Sie die Aufteilung nach 'Sätzen' oder 'Einzelnen Zeilen', um die Zeichenanzahl pro Untertitel unter 42 Zeichen zu halten."
          }
        ]
      },
      comparison: {
        title: "TXT vs. SRT: Technische Unterschiede im Überblick",
        description: "Hier sehen Sie die wesentlichen Eigenschaften, die reinen Rohtext von synchronisierten SubRip-Dateien unterscheiden.",
        headers: ["Technischer Aspekt", "Reiner Text (.txt)", "SubRip-Untertitel (.srt)"],
        rows: [
          ["Zeitkoordinaten", "Keine (zeitlos)", "Millisekundengenau (HH:MM:SS,mmm)"],
          ["Fortlaufende Nummerierung", "Keine", "Verbindliche Ganzzahlen (1, 2, 3...)"],
          ["Zeitcode-Trennzeichen", "Keines", "Standardisierter Pfeil (-->)"],
          ["Unterstützung in Videoplayern", "Nicht als Untertitel ladbar", "Native Wiedergabe in VLC, YouTube etc."],
          ["Videoschnitt-Import", "Erfordert manuelle Ausrichtung", "Rastet automatisch in Untertitelspuren ein"],
          ["Formatierungs-Tags", "Ausschließlich reiner Text", "Unterstützt Basis-Tags (<i>, <b>, <font>)"],
          ["Hauptvorteil", "Einfache Lesbarkeit & Archivierung", "Präzise audiovisuelle Synchronisation"]
        ]
      },
      privacy: {
        title: "100 % lokaler Datenschutz im Browser",
        content: [
          "Ihre Daten bleiben jederzeit geschützt. Während andere Online-Dienste Ihre Dokumente auf entfernte Server hochladen, führt unser Tool sämtliche Berechnungen ausschließlich im lokalen Speicher Ihres Browsers aus.",
          "Unveröffentlichte Skripte, firmeninterne Interviews und persönliche Aufzeichnungen verlassen Ihr Endgerät zu keinem Zeitpunkt. Nach dem Laden der Seite können Sie die Internetverbindung trennen – der Konverter funktioniert uneingeschränkt weiter."
        ]
      }
    },
    faqs: [
      {
        question: "Wie konvertiere ich eine TXT-Datei in eine SRT-Datei?",
        answer: "Fügen Sie Ihren Text in das Eingabefeld ein oder laden Sie Ihre .txt-Datei hoch. Wählen Sie die Aufteilungsmethode und die gewünschte Anzeigedauer. Das Tool erzeugt sofort die passenden Zeitmarken und stellt die fertige .srt-Datei zum Download bereit."
      },
      {
        question: "Kann ich TXT ohne Softwareinstallation in SRT umwandeln?",
        answer: "Ja. Das Tool funktioniert direkt in jedem modernen Webbrowser auf PC, Mac, Tablet oder Smartphone ohne zusätzliche Software oder Browser-Erweiterungen."
      },
      {
        question: "Enthält eine normale TXT-Datei Untertitel-Zeitstempel?",
        answer: "Nein. Gewöhnliche Textdateien enthalten lediglich Buchstaben und Zeilenumbrüche. Unser Konverter berechnet daher automatisch passende Zeiteinheiten basierend auf Ihren Vorgaben."
      },
      {
        question: "Wie werden die Zeitstempel im Tool berechnet?",
        answer: "Das Tool verwendet ein lineares Zeitsystem: Ausgehend von der Startzeit (z. B. 1,0s) erhält jeder Untertitel die gewählte Dauer (z. B. 3,0s), gefolgt von einer Pause (z. B. 0,5s), bevor der nächste Untertitel einsetzt."
      },
      {
        question: "Kann ich ein komplettes Videoskript oder ein Transkript umwandeln?",
        answer: "Ja. Kopieren Sie den gesamten Text einfach in das Tool. Wenn Sie die Aufteilung nach Zeilen oder Sätzen wählen, wird jede Sinneinheit zu einem eigenständigen Untertitel."
      },
      {
        question: "Funktioniert die erstellte SRT-Datei direkt bei YouTube?",
        answer: "Ja. Die Datei entspricht exakt dem offiziellen SubRip-Standard und kann in YouTube Studio unter 'Untertitel' direkt für Ihr Video hochgeladen werden."
      },
      {
        question: "Warum reicht es nicht, die Datei von .txt in .srt umzubenennen?",
        answer: "Das Umbenennen ändert nur die Dateiendung, nicht den Dateiinhalt. Videoplayer benötigen spezielle Zählernummern und Zeitcode-Pfeile (00:00:01,000 --> 00:00:04,000), um Untertitel anzeigen zu können."
      },
      {
        question: "Kann ich die Zeitstempel nach dem Herunterladen bearbeiten?",
        answer: "Ja. Die .srt-Datei ist eine lesbare Textdatei, die in jedem Texteditor (Notepad, TextEdit) oder in Schnittprogrammen (Premiere Pro, DaVinci Resolve, Subtitle Edit) beliebig angepasst werden kann."
      },
      {
        question: "Werden Sonderzeichen und internationale Sprachen unterstützt?",
        answer: "Ja. Das Tool unterstützt UTF-8 vollständig und verarbeitet deutsche Umlaute ebenso wie arabische Schrift (RTL), asiatische Schriftzeichen und europäische Sonderzeichen."
      },
      {
        question: "Wird meine Datei auf einen Server hochgeladen?",
        answer: "Nein. Die Verarbeitung erfolgt vollständig lokal auf Ihrem Rechner per JavaScript. Es werden keinerlei Texte oder Dateien über das Netzwerk gesendet."
      },
      {
        question: "Was kann ich tun, wenn die Untertitel nicht exakt synchron zum Ton sind?",
        answer: "Da die automatische Zeitberechnung mit Durchschnittswerten arbeitet, können Sie Startzeit und Dauer im Tool anpassen oder die Untertitelspur im Schnittprogramm minimal verschieben."
      },
      {
        question: "Welche Untertiteldauer ist ideal?",
        answer: "In der professionellen Untertitelung gilt eine Lesegeschwindigkeit von 21 bis 24 Zeichen pro Sekunde als Richtwert. Für eine Zeile mit 30 bis 40 Zeichen entspricht dies etwa 2,5 bis 4 Sekunden."
      }
    ]
  },

  ar: {
    metaTitle: "محول TXT إلى SRT مجاني – تحويل النصوص إلى ملفات ترجمة",
    metaDescription: "حول نصوص TXT والتفريغ النصي إلى ملفات ترجمة SRT منسقة عبر الإنترنت. توليد تلقائي للتوقيتات ومعالجة آمنة بنسبة 100% داخل المتصفح دون رفع ملفاتك.",
    h1: "محول TXT إلى SRT",
    heroDescription: "حول النصوص والحوارات المكتوبة إلى ملفات ترجمة SubRip (.srt) احترافية مع إنشاء توقيتات متسلسلة وتلقائية قابلة للتخصيص. سريع، مجاني، ويعمل بالكامل داخل متصفحك.",
    toolName: "محول TXT إلى SRT",
    timingNotice: "تنبيه حول المزامنة: لا تحتوي ملفات النصوص العادية على رموز توقيت زمنية. يقوم المحول بإنشاء كتل مرقمة وأوقات زمنية تلقائية بناءً على إعداداتك، ويمكنك إجراء أي ضبط دقيق لاحقاً في برنامج المونتاج.",
    sections: {
      whatIsTxt: {
        title: "ما هو ملف النص العادي (TXT)؟",
        content: [
          "يُعد ملف النص العادي (.txt) التنسيق الرقمي الأساسي والأكثر بساطة في عالم الحوسبة. فهو يخزن نصوصاً وحروفاً وجملاً وفواصل أسطر مجردة من أي تنسيقات رسومية، باستخدام معايير ترميز عالمية مثل UTF-8 أو ASCII.",
          "ولأنه يخلو من الأكواد الاحتكارية وبيانات التخطيط المعقدة، يمكن فتح ملفات TXT على أي نظام تشغيل وهاتف ذكي ومحرر نصوص. ويعتمد عليه صناع المحتوى في كتابة السيناريوهات، وتفريغ المقابلات، ومخرجات تحويل الصوت إلى نص، والنصوص المترجمة.",
          "ومع ذلك، تفتقر النصوص العادية إلى الإحداثيات الزمنية والأرقام المتسلسلة التي تحتاجها مشغلات الفيديو لعرض الترجمة بالتزامن مع الكلام. وبالتالي فإن فتح ملف نصي داخل مشغل وسائط أو رفعه على يوتيوب لن يعرض ترجمات منضبطة التوقيت."
        ]
      },
      whatIsSrt: {
        title: "ما هو ملف الترجمة SRT (SubRip)؟",
        content: [
          "يُعتبر تنسيق SRT (SubRip Text) المعيار العالمي الأكثر استخداماً لترجمة مقاطع الفيديو الرقمية. وهو مدعوم من منصات يوتيوب، فيميو، تيك توك، وبرامج المونتاج مثل Premiere Pro و Final Cut Pro و DaVinci Resolve ومختلف مشغلات الوسائط كبرنامج VLC.",
          "تتكون كل كتلة ترجمة في ملف SRT صالح من بنية صارمة من أربعة أجزاء:",
          "1. رقم تسلسلي متصاعد (1، 2، 3، 4...)",
          "2. توقيت بداية ونهاية محدد بصيغة: HH:MM:SS,mmm --> HH:MM:SS,mmm (ساعات:دقائق:ثوانٍ,أجزاء من الثانية)",
          "3. سطر واحد أو أكثر يحتوي على نص الحوار المترجم",
          "4. سطر فارغ إلزامي يفصل بين كل كتلة ترجمة والتي تليها",
          "من دون هذه البنية الدقيقة، لا يمكن لمشغلات الفيديو وبرامج التحرير معرفة متى يجب أن تظهر الترجمة على الشاشة، وكم يجب أن تدوم، ومتى ينبغي الانتقال إلى الجملة التالية."
        ]
      },
      whatIsConverter: {
        title: "ما هو محول TXT إلى SRT؟",
        content: [
          "محول TXT إلى SRT هو محرك تنسيق ذكي يسد الفجوة بين النصوص العادية غير الموقوتة وملفات الترجمة المتزامنة مع الفيديو بدقة متناهية.",
          "يستقبل المحول النصوص والتفريغات النصية والسيناريوهات المكتوبة ويحولها إلى ملفات SubRip (.srt) قياسية مكتملة الترقيم والتوقيتات وأسهم الانتقال (-->) مع الدقة في الأجزاء من الألف من الثانية وفواصل الأسطر الصحيحة.",
          "تعمل أداتنا بالكامل في ذاكرة متصفحك عبر أحدث واجهات برمجة الويب (Web APIs). نصوصك وملفاتك الحساسة لا تغادر جهازك على الإطلاق ولا يتم رفعها إلى خوادم خارجية."
        ]
      },
      howToConvert: {
        title: "كيفية تحويل TXT إلى SRT خطوة بخطوة",
        steps: [
          {
            title: "1. الصق النص أو ارفع الملف",
            description: "اكتب النص أو الصقه مباشرة في المحرر، أو حدد ملف .txt من حاسوبك أو هاتفك المحمول."
          },
          {
            title: "2. اضبط خيارات التوقيت والتقسيم",
            description: "اختر طريقة تقسيم النص (حسب الأسطر أو الفقرات أو الجمل) وحدد مدة ظهور كل ترجمة (مثل 3.0 ثوانٍ) وفاصل التوقف (مثل 0.5 ثانية)."
          },
          {
            title: "3. معاينة فورية ومباشرة",
            description: "شاهد المعاينة الحية تنشئ رموز توقيت SRT القياسية المتسلسلة والمضبوطة فور إدخال النص."
          },
          {
            title: "4. تحميل أو نسخ ملف SRT",
            description: "انقر على زر \"تحميل .srt\" لحفظ الملف على جهازك فوراً، أو انسخ النص لاستخدامه مباشرة في برنامج المونتاج."
          }
        ]
      },
      whyRenameDoesntWork: {
        title: "لماذا لا ينجح مجرد تغيير امتداد الملف من .txt إلى .srt؟",
        content: [
          "من الأخطاء الشائعة جداً بين صناع المحتوى الاعتقاد بأن مجرد تغيير اسم الملف من 'file.txt' إلى 'file.srt' سيجعله يعمل كملف ترجمة داخل مشغلات الفيديو.",
          "إن امتداد الملف يعرّف نظام التشغيل فقط بالبرنامج المقترح لفتحه، لكنه لا يغير المحتوى الداخلي إطلاقاً. تتطلب مشغلات مثل VLC بنية SubRip دقيقة. فإذا وجد المشغل نصاً عادياً خالياً من الأرقام التسلسلية وفواصل التوقيت '00:00:00,000 --> 00:00:00,000'، سيتجاهل الملف أو يظهر رسالة خطأ.",
          "تغيير الامتداد لا ينجح إلا إذا كان الملف يحتوي في الأصل على بنية SRT صحيحة وجرى حفظه خطأً بصيغة txt. أما بالنسبة للنصوص والسيناريوهات المعتادة، فإن التحويل الفعلي عبر أداتنا ضروري تماماً."
        ]
      },
      timingAndSyncExplanation: {
        title: "آلية إنشاء التوقيت التلقائي وكيفية ضبط المزامنة",
        content: [
          "نظراً لأن ملفات النصوص العادية لا تحتوي على أي معلومات زمنية، تعتمد أداتنا على خوارزمية وتيرة زمنية تصاعدية دقيقة.",
          "بدءاً من وقت البداية الذي تحدده (الافتراضي 00:00:01,000)، تُمنح كل وحدة نصية مدة ظهور مساوية للمدة المختارة (مثل 3.0 ثوانٍ). وبعد كل ترجمة، تدرج الأداة فاصل توقف (مثل 0.5 ثانية) قبل بدء الترجمة التالية.",
          "إذا كان نصك يحتوي مسبقاً على دلالات توقيت واضحة (مثل [01:23] أو 00:02:15)، يكتشف المحلل الذكي هذه العلامات ويحسب توقيتات البداية والنهاية تلقائياً.",
          "نصيحة عملية للمزامنة: توفر التوقيتات التلقائية هيكلاً منضبطاً وصحيحاً لغوياً وبرمجياً. ونظراً لأن المتحدثين يغيرون وتيرة كلامهم ويتوقفون بشكل طبيعي، ستحتاج التوقيتات التلقائية عادةً إلى ضبط طفيف في برامج مثل Premiere Pro أو DaVinci Resolve أو YouTube Studio لتتطابق تماماً مع مخارج الصوت."
        ]
      },
      realWorldUseCases: {
        title: "أبرز استخدامات تحويل ملفات TXT إلى SRT",
        cases: [
          {
            title: "ترجمة فيديوهات يوتيوب وتحسين محركات البحث (SEO)",
            description: "أضف ملفات ترجمة منسقة إلى يوتيوب لتحسين ظهور الفيديو في نتائج البحث، ومساعدة الجمهور الدولي، وزيادة مدة المشاهدة."
          },
          {
            title: "تفريغ حلقات البودكاست والندوات الرقمية",
            description: "حول التفريغ الصوتي للمقابلات إلى مسارات ترجمة لمقاطع الفيديو القصيرة والإعلانات الترويجية على شبكات التواصل."
          },
          {
            title: "ترجمة الأفلام والمحتوى الأجنبي",
            description: "ترجم نصوص المقاطع الأجنبية إلى نصوص عادية، ثم حولها إلى ملفات SRT متناسقة وأدرجها في مشاريع المونتاج."
          },
          {
            title: "معالجة مخرجات الذكاء الاصطناعي لتحويل الصوت إلى نص",
            description: "نسق النصوص الخام الناتجة عن Whisper AI أو أدوات الإملاء الصوتي ومحاضر الاجتماعات إلى ملفات ترجمة قابلة للاستيراد مباشرة."
          },
          {
            title: "المحاضرات التعليمية والتعليم الإلكتروني",
            description: "وفر ترجمات سهلة الوصول ومتوافقة مع معايير ذوي الاحتياجات الخاصة للمساقات الجامعية والمحتوى التدريبي."
          },
          {
            title: "فيديوهات المنصات الرأسية (ريلز وتيك توك وشورتس)",
            description: "استورد ملفات SRT الناتجة إلى تطبيقات مثل CapCut أو Premiere لإضافة نصوص متحركة جذابة على مقاطع الفيديو القصيرة."
          }
        ]
      },
      commonErrorsAndFixes: {
        title: "أخطاء شائعة في تحويل TXT إلى SRT وكيفية تفاديها",
        items: [
          {
            title: "الترجمة تختفي بسرعة أو تبقى طويلاً على الشاشة",
            description: "عدل خيار مدة الترجمة في الأداة. تحتاج الجمل السريعة عادةً من 2 إلى 3 ثوانٍ، بينما تتطلب الجمل الطويلة من 4 إلى 5 ثوانٍ."
          },
          {
            title: "تداخل نصوص الترجمة مع بعضها البعض",
            description: "يضمن محولنا فواصل زمنية رياضية تمنع أي تداخل. تأكد فقط من ضبط فاصل التوقف بين 0.2 و 0.5 ثانية."
          },
          {
            title: "ظهور الحروف العربية بشكل مشوه أو مقلوب (ترميز غير سليم)",
            description: "يحدث هذا عند حفظ الملف بترميز قديم مثل ANSI. تعالج أداتنا الملفات بترميز UTF-8 العالمي لضمان سلامة الأحرف العربية وعلامات الترقيم."
          },
          {
            title: "أسطر الترجمة طويلة جداً ولا تناسب شاشات الهواتف",
            description: "استخدم وضع التقسيم حسب 'الجمل' أو 'كل سطر' بدلاً من الفقرات الكاملة لإبقاء عدد الأحرف أقل من 42 حرفاً لكل سطر."
          }
        ]
      },
      comparison: {
        title: "مقارنة تقنية: الفرق بين ملف TXT وملف SRT",
        description: "تعرف على الفروق التقنية الجوهرية بين النصوص العادية غير الموقوتة وملفات الترجمة المتزامنة مع الفيديو.",
        headers: ["الجانب التقني", "ملف نصي عادي (.txt)", "ملف ترجمة SubRip (.srt)"],
        rows: [
          ["الإحداثيات الزمنية", "لا توجد (نص مجرد)", "دقة متناهية بالأجزاء من الثانية (HH:MM:SS,mmm)"],
          ["الترقيم التسلسلي", "لا يوجد", "أرقام صحيحة متسلسلة إلزامية (1، 2، 3...)"],
          ["فاصل التوقيت", "لا يوجد", "سهم الانتقال الإلزامي (-->)"],
          ["التشغيل في مشغلات الفيديو", "لا يمكن تشغيله كملف ترجمة", "دعم أصلي وتشغيل فوري في VLC ويوتيوب"],
          ["الاستيراد في برامج المونتاج", "يتطلب وضعاً يدوياً وتوقيتاً من الصفر", "ينسدل مباشرة في مسار الترجمة بالجدول الزمني"],
          ["علامات التنسيق", "نص خام فقط", "يدعم وسوم الخطوط البسيطة (<i>, <b>, <font>)"],
          ["الميزة الرئيسية", "سهولة القراءة والتوثيق المكتوب", "مزامنة بصرية وصوتية بالغة الدقة"]
        ]
      },
      privacy: {
        title: "ضمان الخصوصية والأمان بنسبة 100% في متصفحك",
        content: [
          "أمانك وسرية بياناتك مضمونان بطبيعة تصميم الأداة. على عكس مواقع التحويل السحابية التي ترفع نصوصك إلى خوادمها البعيدة حيث قد يتم تخزينها أو الاطلاع عليها، تعمل أداتنا كلياً داخل ذاكرة متصفحك.",
          "سيناريوهاتك الخاصة، ونصوص مقابلاتك، ووثائقك السرية لا تنتقل عبر الإنترنت مطلقاً. يمكنك حتى فصل اتصال الإنترنت بعد تحميل هذه الصفحة، وسيستمر المحول في العمل بأقصى سرعة."
        ]
      }
    },
    faqs: [
      {
        question: "كيف يمكنني تحويل ملف TXT إلى SRT؟",
        answer: "الصق النص في المحرر أو ارفع ملف .txt، ثم اختر طريقة التقسيم (أسطر، فقرات، أو جمل) وحدد المدة الزمنية لكل ترجمة. سينشئ المحول على الفور ملف .srt قياسياً جاهزاً للتحميل."
      },
      {
        question: "هل يمكن التحويل من TXT إلى SRT بدون تثبيت برامج؟",
        answer: "نعم. تعمل الأداة مباشرة في أي متصفح إنترنت حديث على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف الذكية دون الحاجة إلى تثبيت أي برامج أو إضافات."
      },
      {
        question: "هل يحتوي ملف TXT العادي على توقيتات ترجمة؟",
        answer: "لا. تحتوي ملفات النص العادي على نصوص مجردة فقط، ولذلك تضيف أداتنا التوقيتات والأرقام التسلسلية تلقائياً وفقاً لإعداداتك."
      },
      {
        question: "كيف تقوم الأداة بحساب التوقيتات تلقائياً؟",
        answer: "تعتمد على وتيرة زمنية تصاعدية؛ بدءاً من وقت البداية، تخصص لكل عبارة مدة محددة (مثل 3 ثوانٍ)، وتفصل بين العبارات بفاصل زمني قصير (مثل نصف ثانية)."
      },
      {
        question: "هل يمكنني تحويل سيناريو كامل أو تفريغ مقابلة إلى ملف SRT؟",
        answer: "نعم. انسخ النص بالكامل والصقه في الأداة، وسيؤدي اختيار التقسيم حسب الأسطر أو الجمل إلى جعل كل عبارة سطراً مستقلاً في ملف الترجمة."
      },
      {
        question: "هل يمكن رفع ملف SRT الناتج مباشرة إلى يوتيوب؟",
        answer: "نعم. يتوافق الملف المُنشأ بالكامل مع المعيار الرسمي لـ SubRip ويمكن رفعه مباشرة في استوديو يوتيوب عبر تبويب الترجمات في الفيديو."
      },
      {
        question: "لماذا لا يكفي تغيير امتداد الملف من txt إلى srt يدوياً؟",
        answer: "لأن تغيير الامتداد يعدل الاسم الخارجي فقط ولا ينشئ البنية الزمنية التي تتطلبها مشغلات الفيديو لعرض الترجمة بالتزامن مع الصوت."
      },
      {
        question: "هل يمكنني تعديل توقيتات الترجمة بعد تحميل الملف؟",
        answer: "نعم. ملف .srt هو ملف نصي مفتوح يمكنك فتحه وتعديله بأي محرر نصوص بسيط (مثل المفكرة) أو داخل برامج المونتاج مثل Premiere و DaVinci Resolve."
      },
      {
        question: "هل يدعم المحول اللغة العربية واللغات غير الإنجليزية؟",
        answer: "نعم. تدعم الأداة ترميز UTF-8 العالمي بشكل كامل وتدعم اللغة العربية من اليمين إلى اليسار (RTL) مع التشكيل وعلامات الترقيم دون أي تشويه."
      },
      {
        question: "هل يتم رفع ملفاتي أو نصوصي إلى أي خادم خارجي؟",
        answer: "لا. تتم المعالجة بالكامل داخل جهازك عبر المتصفح، ولا يتم إرسال أي نص أو ملف عبر شبكة الإنترنت."
      },
      {
        question: "ماذا أفعل إذا كانت الترجمة غير متطابقة تماماً مع سرعة الكلام في الفيديو؟",
        answer: "نظراً لأن التوقيتات تعتمد على تقدير متوسط، يمكنك تعديل مدة الترجمة في الأداة أو إزاحة مسار الترجمة قليلاً في برنامج المونتاج أو يوتيوب ليوافق فواصل الصوت الحقيقية."
      },
      {
        question: "ما هي المدة الزمنية المثالية لكل سطر ترجمة؟",
        answer: "توصي المعايير العالمية بسرعة قراءة تتراوح بين 21 و 24 حرفاً في الثانية، ما يعادل نحو 2.5 إلى 4 ثوانٍ للسطر المعتاد المكون من 30 إلى 40 حرفاً."
      }
    ]
  },

  ja: {
    metaTitle: "無料TXTからSRTへの変換 – テキストを字幕ファイルに変換",
    metaDescription: "テキストファイル（TXT）や文字起こしデータをSRT字幕ファイルにオンラインで変換。タイムコード自動生成、柔軟なタイミング設定、完全ブラウザ内処理。",
    h1: "TXTからSRTへの変換",
    heroDescription: "台本、インタビューの文字起こし、テキスト文書を、自動タイムコード付きの標準SubRip（.srt）字幕ファイルに変換します。高速・安全・完全無料。",
    toolName: "TXTからSRTへの変換",
    timingNotice: "タイミングに関する注意事項：テキストファイルには字幕のタイムコードが含まれていません。本ツールは設定に基づいて通し番号とタイムスタンプを自動生成します。動画編集ソフトで微調整が可能です。",
    sections: {
      whatIsTxt: {
        title: "プレーンテキスト（TXT）ファイルとは？",
        content: [
          "TXT（.txt）ファイルは、最も基本的なデジタルテキスト形式です。装飾情報を持たないプレーンな文字、単語、文章、改行のみを保持し、UTF-8などの汎用エンコーディングで保存されます。",
          "レイアウト設定や専用タグを含まないため、Windows、Mac、スマートフォン、各種エディタなど、あらゆる環境で閲覧・編集が可能です。ナレーション原稿や音声認識の書き起こし、翻訳テキストの作成に広く利用されています。",
          "しかし、プレーンテキストには動画再生に必要な時間情報（タイムコード）や字幕番号が記録されていません。そのため、そのまま動画プレーヤーやYouTubeに読み込ませても、適切なタイミングで字幕を表示することはできません。"
        ]
      },
      whatIsSrt: {
        title: "SRT（SubRip）字幕ファイルとは？",
        content: [
          "SRT（SubRip Text）ファイルは、デジタル動画の字幕およびクローズドキャプションにおける世界標準フォーマットです。YouTube、Vimeo、TikTokをはじめ、Premiere ProやDaVinci Resolve、Final Cut Pro、VLCメディアプレーヤーなど幅広い環境でサポートされています。",
          "有効なSRTファイルの各字幕ブロックは、厳格な4つの構成要素で成り立っています：",
          "1. 連続した字幕番号（1, 2, 3, 4...）",
          "2. ミリ秒精度の開始・終了タイムコード（例：00:00:01,000 --> 00:00:04,000）",
          "3. 1行または複数行の字幕テキスト",
          "4. 次のブロックと区切るための必須の空行",
          "この仕様を満たしていない場合、動画プレーヤーや動画編集ソフトはいつ字幕を表示し、いつ消去すべきかを正しく判断できません。"
        ]
      },
      whatIsConverter: {
        title: "TXTからSRTへの変換ツールとは？",
        content: [
          "TXTからSRTへの変換ツールは、時間情報を持たない未加工の文章を、動画に同期可能な字幕データへと変換するスマートなフォーマットエンジンです。",
          "文字起こしテキストやスクリプトを読み込み、自動でシーケンス番号、正しいタイムコード矢印（-->）、ミリ秒の精度、区切り空行を付与した標準SRTファイルを出力します。",
          "変換処理はすべてお使いのブラウザ内（メモリ上）で完結します。機密の台本や非公開インタビューの原稿が外部サーバーに送信されることは一切ありません。"
        ]
      },
      howToConvert: {
        title: "TXTからSRTへの変換手順（ステップバイステップ）",
        steps: [
          {
            title: "1. テキストの貼り付けまたはファイルの選択",
            description: "エディタに直接テキストを貼り付けるか、パソコンやスマホから.txtファイルをアップロードします。"
          },
          {
            title: "2. タイミングと分割方法の設定",
            description: "行ごと、段落ごと、または文ごとに字幕を分割するかを選択し、1キューあたりの表示秒数（例：3.0秒）や間隔（例：0.5秒）を指定します。"
          },
          {
            title: "3. リアルタイムプレビューの確認",
            description: "右側のプレビュー画面に、ミリ秒単位で整形されたSRT字幕データが即座に生成されます。"
          },
          {
            title: "4. SRTファイルのダウンロードまたはコピー",
            description: "「.srtをダウンロード」をクリックして保存するか、クリップボードにコピーして動画編集ソフトに貼り付けます。"
          }
        ]
      },
      whyRenameDoesntWork: {
        title: "拡張子を .txt から .srt に変更するだけでは動かない理由",
        content: [
          "よくある誤解の一つに、ファイル名の末尾を「.txt」から「.srt」に書き換えるだけで字幕ファイルとして機能するというものがあります。",
          "拡張子の変更はOSに対して起動アプリケーションを指示するだけで、ファイル内部のデータ構造を変更するわけではありません。動画プレーヤーは厳格なSRTの構文を要求します。時間指定のない文章は字幕として認識されず、エラーになるか無視されます。",
          "拡張子の変更で機能するのは、元々SRTの記法で記述されたデータを誤って.txtで保存していた場合のみです。通常の文章から字幕を作るには、当ツールの変換処理が必要です。"
        ]
      },
      timingAndSyncExplanation: {
        title: "自動タイムコード生成の仕組みと同期のポイント",
        content: [
          "テキストファイルには発話タイミングが含まれていないため、当ツールは均等な時間配分アルゴリズムを用いてタイムスタンプを自動算出します。",
          "指定された開始時間（初期値：00:00:01,000）からスタートし、各テキストに設定された秒数（例：3.0秒）を割り当てます。各字幕の後には指定した待機時間（例：0.5秒）を挟んで次の字幕を開始します。",
          "テキスト内にタイムスタンプ表記（[01:23] や 00:02:15 など）が含まれている場合、当ツールのパーサーが自動認識して時間を反映します。",
          "同期に関する実用的なアドバイス：自動生成された時間は正確な構文枠組みを提供します。実際の動画の話し声や間の取り方に完全に合わせるには、Premiere ProやDaVinci Resolve、YouTube Studio上でトラックを少しスライドさせて微調整することをおすすめします。"
        ]
      },
      realWorldUseCases: {
        title: "TXTからSRT変換の実用的な活用シーン",
        cases: [
          {
            title: "YouTube動画の字幕追加とSEO対策",
            description: "字幕ファイルをYouTubeに設定することで、検索順位の向上、海外視聴者への対応、視聴維持率の改善につながります。"
          },
          {
            title: "ポッドキャスト・ウェビナーの要約動画作成",
            description: "音声対談の文字起こしを字幕化し、SNS用ショート動画やプロモーションクリップに活用できます。"
          },
          {
            title: "外国語動画の翻訳字幕作成",
            description: "翻訳したテキストをSRTに変換し、動画編集ソフトに読み込んで多言語テロップを作成できます。"
          },
          {
            title: "AI文字起こしデータの整形",
            description: "Whisper AIや音声入力で書き起こしたテキストを、即座に動画制作用の字幕データへと変換できます。"
          },
          {
            title: "オンライン講義・教育コンテンツのアクセシビリティ",
            description: "大学の講義やeラーニング動画に字幕を付与し、受講者にとって学びやすい環境を提供できます。"
          },
          {
            title: "縦型ショート動画（TikTok・Reels・Shorts）",
            description: "生成したSRTをCapCutやPremiereに取り込み、見やすいアニメーションテロップを作成できます。"
          }
        ]
      },
      commonErrorsAndFixes: {
        title: "よくあるトラブルと解決策",
        items: [
          {
            title: "字幕の切り替わりが早すぎる・遅すぎる",
            description: "設定パネルで「表示時間（秒）」を調整してください。短いセリフは2〜3秒、長文は4〜5秒程度が適切です。"
          },
          {
            title: "字幕同士の表示時間が重なってしまう",
            description: "当ツールは重複しないよう時間間隔を自動計算します。「間隔（秒）」が0.2〜0.5秒に設定されているかご確認ください。"
          },
          {
            title: "日本語の文字化けが発生する",
            description: "Shift-JISなどの古いエンコードで保存されたファイルで発生することがあります。当ツールはUTF-8で処理するため、UTF-8で保存されたテキストをご使用ください。"
          },
          {
            title: "スマホ画面で字幕の1行が長すぎる",
            description: "分割方法を「段落」ではなく「文（. ? !）」または「行ごと」に設定し、1行あたりの文字数をコンパクトに保ちます。"
          }
        ]
      },
      comparison: {
        title: "TXTとSRTの技術的仕様の比較",
        description: "非構造化テキストと同期字幕ファイル（SubRip）の主な技術的差異をまとめました。",
        headers: ["技術項目", "プレーンテキスト (.txt)", "SubRip字幕 (.srt)"],
        rows: [
          ["時間情報", "なし（未設定）", "ミリ秒精度の開始・終了時間（HH:MM:SS,mmm）"],
          ["シーケンス番号", "なし", "必須の連番整数（1, 2, 3...）"],
          ["タイムコード矢印", "なし", "標準の矢印記号（-->）必須"],
          ["プレーヤー対応", "字幕として読み込み不可", "VLCやYouTubeでネイティブ対応"],
          ["編集ソフト読み込み", "手動配置が必要", "字幕トラックへ自動配置可能"],
          ["装飾タグ", "装飾なし", "基本的なスタイルタグ対応（<i>, <b>, <font>）"],
          ["主な用途", "文書閲覧・アーカイブ", "映像と音声の高精度な字幕同期"]
        ]
      },
      privacy: {
        title: "ブラウザ内完結のプライバシー保護方針",
        content: [
          "お客様のデータプライバシーは完全に守られています。外部サーバーにファイルを送信・保管する一般的なクラウドサービスとは異なり、本ツールはすべての処理をお使いのパソコンやスマホのブラウザ上で行います。",
          "未公開の映画脚本や機密インタビューの記録がインターネット上へ流出する心配はありません。ページの読み込み後は、オフライン環境でも変換処理をご利用いただけます。"
        ]
      }
    },
    faqs: [
      {
        question: "TXTファイルをSRTに変換するにはどうすればよいですか？",
        answer: "テキストを画面左側のエディタに貼り付けるか、.txtファイルをアップロードします。分割基準と表示時間を選択すると、右側に標準SRTデータが瞬時に生成され、ダウンロードできます。"
      },
      {
        question: "ソフトをインストールせずにブラウザだけで変換できますか？",
        answer: "はい。パソコンやタブレット、スマートフォンの最新ウェブブラウザさえあれば、アプリやプラグインを一切インストールすることなく利用可能です。"
      },
      {
        question: "通常のTXTファイルに字幕の時間は記録されていますか？",
        answer: "いいえ。通常のテキストファイルには文字情報しかありません。そのため、本ツールが設定に基づいて連続した時間情報を自動計算して付与します。"
      },
      {
        question: "タイムコードはどのように自動計算されますか？",
        answer: "指定された開始時間（例：1.0秒）から各字幕に固定秒数（例：3.0秒）を割り当て、字幕間に設定した間隔（例：0.5秒）を挿入しながら順次計算します。"
      },
      {
        question: "長文の文字起こしや台本全体を一括変換できますか？",
        answer: "はい。文章全体を貼り付けるだけで、行ごとや文ごとに自動分割され、長編動画用のSRTファイルも数秒で作成できます。"
      },
      {
        question: "変換したSRTファイルはYouTubeで使えますか？",
        answer: "はい。公式のSubRip規格に完全に準拠しているため、YouTube Studioの動画詳細画面にある「字幕」タブからそのままアップロードできます。"
      },
      {
        question: "なぜ拡張子を .srt に書き換えるだけではダメなのですか？",
        answer: "拡張子だけを変えてもファイルの中身が変わらないためです。動画プレーヤーは通し番号や時間矢印（00:00:01,000 --> 00:00:04,000）がないデータを字幕として受け付けません。"
      },
      {
        question: "ダウンロードしたSRTの時間を後から修正できますか？",
        answer: "はい。SRTファイルはメモ帳などのテキストエディタや、Premiere Pro、DaVinci Resolve、Subtitle Editなどの編集ソフトで簡単に再編集できます。"
      },
      {
        question: "日本語以外の言語（英語、アラビア語、中国語など）にも対応していますか？",
        answer: "はい。UTF-8による完全なUnicode対応を行っているため、日本語はもちろん、右から左へ記述するアラビア語や各種多言語テキストを文字化けなく処理できます。"
      },
      {
        question: "入力したテキストデータがサーバーに送信されることはありますか？",
        answer: "いいえ。処理はすべてご利用中の端末のブラウザ（JavaScript）内でローカルに実行され、外部サーバーへデータが送信されることは一切ありません。"
      },
      {
        question: "動画の音声と字幕のタイミングが少しずれる場合の対処法は？",
        answer: "自動生成は平均的な表示時間で計算するため、ツール上で1キューの秒数を調整するか、動画編集ソフトのタイムライン上で字幕トラックを前後に少しスライドさせて調整してください。"
      },
      {
        question: "字幕1行あたりの理想的な表示時間はどれくらいですか？",
        answer: "字幕の標準的な読書速度は1秒あたり約4〜6文字（英語では約20文字）とされています。通常の1行（15〜20文字程度）であれば、2.5秒〜4秒程度が読みやすい目安です。"
      }
    ]
  },

  ko: {
    metaTitle: "무료 TXT to SRT 변환기 – 텍스트를 자막 파일로 변환",
    metaDescription: "TXT 대본 및 텍스트 문서를 정식 SRT 자막 파일로 온라인 변환하세요. 자동 타임스탬프 생성, 스마트 시간 설정, 100% 브라우저 기반 로컬 처리 지원.",
    h1: "TXT to SRT 변환기",
    heroDescription: "일반 텍스트 스크립트, 대화 녹취록 및 문서를 사용자 맞춤형 타임스탬프가 적용된 SubRip (.srt) 자막 파일로 손쉽게 변환하세요. 빠르고 안전한 무료 도구입니다.",
    toolName: "TXT to SRT 변환기",
    timingNotice: "싱크 안내: 일반 텍스트 파일에는 자막 시간 정보가 없습니다. 본 변환기는 설정된 지속 시간 옵션을 기반으로 순차적인 타임코드와 자막 번호를 자동 생성합니다. 영상 편집기에서 손쉽게 미세 조정할 수 있습니다.",
    sections: {
      whatIsTxt: {
        title: "일반 텍스트(TXT) 파일이란?",
        content: [
          "TXT(.txt) 파일은 컴퓨터 환경에서 가장 널리 쓰이는 기본 디지털 텍스트 포맷입니다. 별도의 서식 정보 없이 순수한 문자, 단어, 문장, 줄바꿈만을 UTF-8 또는 ASCII 표준 인코딩으로 저장합니다.",
          "특정 소프트웨어 전용 태그나 메타데이터 헤더가 없기 때문에 윈도우, 맥, 스마트폰, 브라우저 등 모든 운영체제에서 호환됩니다. 영상 제작자들은 주로 음성 녹취록, 인터뷰 대본, 번역 원고를 작성할 때 TXT 형식을 사용합니다.",
          "그러나 일반 텍스트 파일에는 자막을 영상 음성과 일치시키는 시간 좌표(타임코드)와 순번이 존재하지 않습니다. 따라서 TXT 파일을 미디어 플레이어나 유튜브에 그대로 불러와도 자막이 화면에 정상 출력되지 않습니다."
        ]
      },
      whatIsSrt: {
        title: "SRT(SubRip) 자막 파일이란?",
        content: [
          "SRT(SubRip Text) 파일은 디지털 영상 자막 및 폐쇄자막(CC)의 글로벌 표준 형식입니다. 유튜브, 비메오, 틱톡을 비롯해 프리미어 프로, 파이널 컷 프로, 다빈치 리졸브, VLC 플레이어 등 거의 모든 비디오 플랫폼에서 완벽히 지원됩니다.",
          "유효한 SRT 파일의 각 자막 블록은 다음 네 가지 필수 요소를 갖추어야 합니다:",
          "1. 1부터 시작하는 순차적인 자막 인덱스 번호 (1, 2, 3, 4...)",
          "2. 밀리초 단위의 정확한 시작 및 종료 타임코드 (HH:MM:SS,mmm --> HH:MM:SS,mmm)",
          "3. 한 줄 이상의 실제 자막 대사 텍스트",
          "4. 다음 자막 블록과 구분하기 위한 필수 빈 줄",
          "이 표준 문법이 없으면 영상 플레이어와 편집 프로그램은 자막이 언제 나타나고, 얼마나 머무르며, 언제 사라져야 하는지 해석할 수 없습니다."
        ]
      },
      whatIsConverter: {
        title: "TXT to SRT 변환기란?",
        content: [
          "TXT to SRT 변환기는 시간 정보가 없는 텍스트 원고를 영상 싱크에 맞출 수 있는 자막 파일로 재구성해 주는 스마트 포맷팅 엔진입니다.",
          "녹취록, 스크립트, 대본, 번역문 텍스트를 입력받아 순차 번호, 정식 타임코드 화살표(-->), 밀리초 단위 정밀 시간 및 블록 구분이 포함된 표준 SubRip(.srt) 자막으로 변환합니다.",
          "모든 변환 작업은 최신 웹 API를 통해 사용자의 웹 브라우저 메모리 안에서 100% 로컬로 진행됩니다. 미공개 대본이나 비공개 인터뷰 문서가 외부 클라우드 서버로 전송되지 않습니다."
        ]
      },
      howToConvert: {
        title: "TXT를 SRT로 변환하는 단계별 방법",
        steps: [
          {
            title: "1. 텍스트 붙여넣기 또는 파일 업로드",
            description: "입력창에 텍스트 대본을 직접 입력하거나 컴퓨터 또는 스마트폰에서 .txt 문서를 선택해 업로드합니다."
          },
          {
            title: "2. 타이밍 및 분할 방식 설정",
            description: "줄별, 문단별, 문장별 분할 기준을 선택하고 자막당 표시 지속 시간(예: 3.0초)과 자막 간 공백 간격(예: 0.5초)을 지정합니다."
          },
          {
            title: "3. 실시간 미리보기 확인",
            description: "오른쪽 미리보기 창에서 밀리초 단위의 정밀한 타임코드가 적용된 SRT 자막이 즉시 생성되는 것을 확인합니다."
          },
          {
            title: "4. SRT 다운로드 또는 복사",
            description: "\"다운로드 .srt\"를 클릭하여 장치에 바로 저장하거나, 클립보드에 복사하여 영상 편집 프로그램에 붙여넣습니다."
          }
        ]
      },
      whyRenameDoesntWork: {
        title: "파일 확장자를 .txt에서 .srt로 이름만 바꾸면 안 되는 이유",
        content: [
          "많은 영상 제작자들이 흔히 하는 실수 중 하나는 파일 확장자를 'script.txt'에서 'script.srt'로 이름만 바꾸면 자막으로 인식될 것이라 생각하는 점입니다.",
          "파일 확장자는 운영체제에 연결 프로그램을 알려줄 뿐, 내부 데이터 구조를 바꾸지 못합니다. VLC나 미디어 플레이어는 정격 SubRip 문법을 엄격히 요구합니다. '00:00:00,000 --> 00:00:00,000' 형태의 타임코드와 순번이 없는 일반 문장은 자막으로 재생되지 않고 무시됩니다.",
          "이름 바꾸기가 통하는 경우는 원래 SRT 규격으로 작성된 내용이 실수로 .txt 확장자로 저장되었을 때뿐입니다. 일반 문장이나 대본은 본 변환기를 통한 실제 데이터 변환이 필수적입니다."
        ]
      },
      timingAndSyncExplanation: {
        title: "자동 타임코드 생성 원리와 자막 싱크 맞추기",
        content: [
          "일반 텍스트에는 타이밍 정보가 없으므로, 본 변환기는 체계적인 연속 시간 배분 알고리즘을 사용합니다.",
          "설정된 시작 시점(기본값 00:00:01,000)부터 각 텍스트 블록에 지정된 지속 시간(예: 3.0초)을 부여하고, 블록 사이에 설정된 공백(예: 0.5초)을 둔 뒤 다음 자막을 시작합니다.",
          "텍스트 내용에 이미 [01:23] 또는 00:02:15와 같은 시간 표시가 포함되어 있는 경우, 지능형 파서가 이를 인식하여 해당 시간을 기준으로 타임코드를 자동 계산합니다.",
          "실전 싱크 조절 팁: 자동 생성된 타임코드는 완벽한 문법적 자막 틀을 제공합니다. 실제 화자의 말속도나 호흡 정지 구간에 정확히 맞추려면, 프리미어 프로나 다빈치 리졸브, 유튜브 스튜디오에서 자막 트랙을 조금씩 앞뒤로 밀어 미세 조정하는 것을 권장합니다."
        ]
      },
      realWorldUseCases: {
        title: "TXT to SRT 변환의 실제 활용 사례",
        cases: [
          {
            title: "유튜브 동영상 자막 제작 및 검색 최적화(SEO)",
            description: "유튜브에 구조화된 자막을 등록하여 검색 노출을 극대화하고, 다국어 시청자를 유입시키며 시청 지속 시간을 높입니다."
          },
          {
            title: "팟캐스트 및 웨비나 녹취록 자막화",
            description: "오디오 인터뷰 녹취 원고를 자막 트랙으로 변환하여 SNS용 카드뉴스 영상 및 프로모션 클립에 활용합니다."
          },
          {
            title: "해외 영상 번역 대본 자막 변환",
            description: "외국어 영상의 번역 대본을 텍스트로 작성한 후 SRT 자막으로 변환하여 영상 프로젝트에 신속히 동기화합니다."
          },
          {
            title: "AI 음성 인식(STT) 결과물 후처리",
            description: "Whisper AI나 회의 녹음 등에서 추출된 날것의 텍스트 데이터를 편집 프로그램에서 바로 쓸 수 있는 자막으로 정리합니다."
          },
          {
            title: "온라인 강의 및 교육 콘텐츠 접근성 강화",
            description: "대학 온라인 강좌와 자격증 튜토리얼에 정확한 자막을 제공하여 웹 접근성 기준을 충족합니다."
          },
          {
            title: "숏폼 세로 영상 자막 (릴스, 틱톡, 쇼츠)",
            description: "캡컷(CapCut)이나 프리미어에 생성된 SRT를 불러와 트렌디한 애니메이션 자막을 빠르게 연출합니다."
          }
        ]
      },
      commonErrorsAndFixes: {
        title: "자주 발생하는 오류 및 문제 해결 팁",
        items: [
          {
            title: "자막이 너무 빨리 사라지거나 너무 오래 표시될 때",
            description: "도구의 '자막 지속 시간(초)' 설정을 조절하세요. 빠른 대사는 2~3초, 긴 문장은 4~5초가 적당합니다."
          },
          {
            title: "자막 시간이 서로 겹쳐서 표시될 때",
            description: "변환기는 겹침 방지 알고리즘을 적용합니다. 옵션의 '자막 간 간격(초)'이 0.2~0.5초 이상으로 설정되어 있는지 확인하세요."
          },
          {
            title: "한글 글자가 깨져서 표시될 때 (외계어 현상)",
            description: "과거 ANSI나 EUC-KR 인코딩으로 저장된 텍스트에서 발생할 수 있습니다. 본 도구는 국제 표준인 UTF-8로 완벽히 처리하므로 UTF-8 텍스트를 권장합니다."
          },
          {
            title: "모바일 화면에서 자막 한 줄이 너무 길 때",
            description: "문단 분할 대신 '문장' 또는 '줄별' 분할 모드를 사용하여 한 줄당 글자 수를 30~40자 내외로 조절하세요."
          }
        ]
      },
      comparison: {
        title: "TXT와 SRT의 주요 기술적 차이점 비교",
        description: "비구조화된 일반 텍스트와 영상 동기화 SubRip 자막 파일 간의 핵심 사양을 비교해 보세요.",
        headers: ["기술 항목", "일반 텍스트 (.txt)", "SubRip 자막 (.srt)"],
        rows: [
          ["시간 좌표", "없음 (시간 정보 미포함)", "밀리초 정밀 타임코드 (HH:MM:SS,mmm)"],
          ["순차 인덱스", "없음", "필수 순차 정수 번호 (1, 2, 3...)"],
          ["타임코드 화살표", "없음", "필수 표준 화살표 기호 (-->)"],
          ["영상 플레이어 지원", "자막 트랙으로 로드 불가", "VLC, 유튜브 등 모든 플레이어 기본 지원"],
          ["영상 편집기 연동", "수동 배치 필요", "타임라인 자막 트랙에 자동 정렬 배치"],
          ["서식 태그", "순수 텍스트만 지원", "기본 스타일 태그 지원 (<i>, <b>, <font>)"],
          ["주요 목적", "문서 열람 및 원문 보관", "시청각 미디어의 정밀한 자막 싱크 동기화"]
        ]
      },
      privacy: {
        title: "100% 브라우저 기반 완벽한 개인정보 보호 보장",
        content: [
          "srtconverters.info는 설계 단계부터 사용자의 보안과 비밀 유지를 보장합니다. 사용자의 텍스트를 원격 서버로 업로드하여 저장하거나 분석하는 타 서비스와 달리, 모든 변환 작업은 사용자의 기기 브라우저 내부에서만 수행됩니다.",
          "미공개 영상 스크립트, 비즈니스 미팅 기록, 법률 녹취록이 인터넷망을 거치지 않습니다. 페이지가 로드된 후 인터넷 연결을 해제하더라도 도구는 정상 작동합니다."
        ]
      }
    },
    faqs: [
      {
        question: "TXT 파일을 SRT 자막 파일로 어떻게 변환하나요?",
        answer: "입력창에 텍스트를 붙여넣거나 .txt 파일을 업로드한 뒤, 원하는 분할 기준(줄별, 문단별, 문장별)과 표시 시간을 선택하세요. 도구가 자동으로 순차 타임코드를 계산하여 즉시 다운로드 가능한 .srt 파일로 만들어 줍니다."
      },
      {
        question: "별도의 프로그램을 설치하지 않고도 변환할 수 있나요?",
        answer: "네. 컴퓨터, 태블릿, 스마트폰의 웹 브라우저만 있으면 어떤 프로그램이나 확장 프로그램도 설치할 필요 없이 바로 변환할 수 있습니다."
      },
      {
        question: "일반 TXT 파일에도 자막 시간이 저장되어 있나요?",
        answer: "아닙니다. 일반 TXT 파일에는 글자와 줄바꿈만 있습니다. 따라서 본 변환기가 사용자가 설정한 옵션에 맞춰 점진적인 타임코드와 일련번호를 자동으로 생성해 줍니다."
      },
      {
        question: "타임코드는 어떤 방식으로 자동 계산되나요?",
        answer: "지정된 시작 시점(예: 1.0초)을 기준으로 각 자막에 설정된 지속 시간(예: 3.0초)을 더하고, 그 뒤에 공백 간격(예: 0.5초)을 두어 다음 자막의 시작 시간을 순서대로 계산합니다."
      },
      {
        question: "영화 대본이나 긴 강의 녹취록 전체를 한 번에 변환할 수 있나요?",
        answer: "네. 대본 전체를 복사하여 붙여넣으면 줄바꿈이나 문장 부호를 기준으로 깔끔하게 분할되어 대용량 자막 파일로 즉시 변환됩니다."
      },
      {
        question: "변환된 SRT 파일을 유튜브에 바로 올릴 수 있나요?",
        answer: "네. 공식 SubRip 규격을 완벽하게 준수하므로 유튜브 스튜디오의 동영상 '자막' 탭에서 바로 업로드하여 적용할 수 있습니다."
      },
      {
        question: "파일 확장자를 .txt에서 .srt로 이름만 바꾸면 왜 안 되나요?",
        answer: "확장자만 바꾸면 내부 내용은 그대로이기 때문입니다. 비디오 플레이어는 순번 번호와 시간 화살표(00:00:01,000 --> 00:00:04,000) 문법이 갖춰져야만 자막으로 인식합니다."
      },
      {
        question: "다운로드한 SRT 자막의 시간을 나중에 수정할 수 있나요?",
        answer: "네. SRT 파일은 메모장 등 텍스트 편집기나 프리미어, 다빈치 리졸브, Subtitle Edit 등 자막 편집 프로그램에서 언제든지 열어 시간을 자유롭게 미세 조정할 수 있습니다."
      },
      {
        question: "한국어 외에 영어, 일본어, 아랍어 등 다국어 텍스트도 지원하나요?",
        answer: "네. 본 도구는 국제 표준 UTF-8 유니코드를 완벽히 지원하여 한국어, 영어, 일본어 한자, 아랍어(RTL), 유럽 언어의 악센트 부호까지 글자 깨짐 없이 변환합니다."
      },
      {
        question: "변환 시 내 텍스트나 파일이 서버로 업로드되나요?",
        answer: "아닙니다. 모든 변환 과정은 사용자의 브라우저(JavaScript)에서 100% 로컬로 처리되며, 파일이나 텍스트 데이터가 외부 서버로 전송되지 않습니다."
      },
      {
        question: "생성된 자막과 영상의 음성 타이밍이 약간 맞지 않을 때는 어떻게 하나요?",
        answer: "자동 계산은 고정된 평균 시간을 사용하므로, 변환기에서 지속 시간을 재조정하거나 영상 편집기 및 유튜브 스튜디오에서 자막 트랙을 조금 밀어 실제 음성과 맞추면 됩니다."
      },
      {
        question: "자막 한 줄당 가장 적절한 표시 시간은 얼마인가요?",
        answer: "국제 자막 표준에서는 초당 15~20자(한국어 기준 초당 4~6음절)의 읽기 속도를 권장하며, 한 줄 15~25자 기준 약 2.5초에서 4초가 시청자에게 가장 편안한 시간입니다."
      }
    ]
  },

  vi: {
    metaTitle: "Chuyển Đổi TXT Sang SRT Miễn Phí – Tạo Phụ Đề Từ Văn Bản",
    metaDescription: "Chuyển đổi tệp TXT và văn bản thô sang định dạng phụ đề SRT chuẩn trực tuyến. Tự động tạo mốc thời gian, xử lý 100% trong trình duyệt hoàn toàn riêng tư.",
    h1: "Chuyển Đổi TXT Sang SRT",
    heroDescription: "Chuyển đổi kịch bản, bản ghi âm và tài liệu văn bản thành tệp phụ đề SubRip (.srt) với mã thời gian tuần tự tự động và linh hoạt. Nhanh chóng, bảo mật và miễn phí.",
    toolName: "Chuyển Đổi TXT Sang SRT",
    timingNotice: "Lưu ý về Thời gian: Tệp văn bản thuần không chứa mã thời gian. Công cụ sẽ tự động tạo các khối phụ đề có số thứ tự và mốc thời gian theo cài đặt của bạn, cho phép bạn tinh chỉnh dễ dàng trong phần mềm dựng video.",
    sections: {
      whatIsTxt: {
        title: "Tệp văn bản thuần (TXT) là gì?",
        content: [
          "Tệp TXT (.txt) là định dạng văn bản số cơ bản nhất trong tin học. Định dạng này chỉ lưu trữ các ký tự chữ, số, từ ngữ và dấu ngắt dòng không có định dạng phức tạp, thường được mã hóa bằng chuẩn UTF-8 hoặc ASCII.",
          "Vì không chứa mã định dạng riêng hay phần đầu dữ liệu nặng nề, tệp TXT có thể mở và đọc được trên mọi hệ điều hành, điện thoại và trình soạn thảo. Người sáng tạo nội dung thường dùng tệp TXT để soạn kịch bản lồng tiếng, ghi chép phỏng vấn và dịch phụ đề.",
          "Tuy nhiên, tệp văn bản thuần hoàn toàn không có tọa độ thời gian và số thứ tự cần thiết để trình phát video hiển thị phụ đề khớp với tiếng nói. Mở tệp TXT trên YouTube hay phần mềm phát video sẽ không thể hiển thị phụ đề đúng thời điểm."
        ]
      },
      whatIsSrt: {
        title: "Tệp phụ đề SRT (SubRip) là gì?",
        content: [
          "Tệp SRT (SubRip Text) là tiêu chuẩn toàn cầu cho phụ đề video kỹ thuật số. Được hỗ trợ bởi YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve và các trình phát như VLC, tệp SRT sắp xếp lời thoại thành các khối thời gian rõ ràng.",
          "Mỗi khối phụ đề trong tệp SRT hợp lệ phải tuân thủ nghiêm ngặt cấu trúc 4 phần:",
          "1. Số thứ tự tuần tự tăng dần (1, 2, 3, 4...)",
          "2. Mốc thời gian bắt đầu và kết thúc chính xác theo định dạng HH:MM:SS,mmm --> HH:MM:SS,mmm (Giờ:Phút:Giây,Mili-giây)",
          "3. Một hoặc nhiều dòng văn bản phụ đề hiển thị",
          "4. Một dòng trống bắt buộc để phân cách với khối phụ đề kế tiếp",
          "Nếu thiếu cú pháp này, trình phát video và phần mềm chỉnh sửa không thể biết khi nào phụ đề xuất hiện, hiển thị trong bao lâu và khi nào cần chuyển sang câu tiếp theo."
        ]
      },
      whatIsConverter: {
        title: "Công cụ chuyển đổi TXT sang SRT là gì?",
        content: [
          "Công cụ chuyển đổi TXT sang SRT là giải pháp định dạng thông minh giúp nối liền văn bản thuần chưa có mốc thời gian với tệp phụ đề video được đồng bộ chuẩn xác.",
          "Công cụ tiếp nhận bản ghi chép, kịch bản hoặc lời dịch và chuyển đổi chúng thành tệp SubRip (.srt) tiêu chuẩn với đầy đủ số thứ tự, mũi tên thời gian (-->), độ chính xác mili-giây và khoảng cách dòng chuẩn.",
          "Toàn bộ quy trình diễn ra 100% trong bộ nhớ trình duyệt của bạn thông qua các API Web hiện đại. Bản ghi chép bảo mật và tài liệu của bạn không bao giờ rời khỏi thiết bị hay bị tải lên máy chủ bên ngoài."
        ]
      },
      howToConvert: {
        title: "Hướng dẫn từng bước chuyển đổi TXT sang SRT",
        steps: [
          {
            title: "1. Dán văn bản hoặc tải tệp lên",
            description: "Dán trực tiếp văn bản vào khung soạn thảo hoặc chọn tệp .txt từ máy tính hoặc điện thoại của bạn."
          },
          {
            title: "2. Cấu hình thời gian và phương thức tách dòng",
            description: "Chọn tách phụ đề theo dòng, đoạn văn hoặc câu, và điều chỉnh thời lượng hiển thị (ví dụ 3.0s) cùng khoảng nghỉ giữa các câu (ví dụ 0.5s)."
          },
          {
            title: "3. Xem trước trực tiếp tức thì",
            description: "Khung xem trước bên cạnh sẽ lập tức tạo mã thời gian phụ đề SRT hợp lệ với độ chính xác đến từng mili-giây."
          },
          {
            title: "4. Tải xuống hoặc sao chép SRT",
            description: "Nhấp vào \"Tải xuống .srt\" để lưu tệp về máy, hoặc sao chép văn bản để dán vào phần mềm chỉnh sửa video của bạn."
          }
        ]
      },
      whyRenameDoesntWork: {
        title: "Tại sao chỉ đổi đuôi tệp từ .txt thành .srt lại không hiệu quả?",
        content: [
          "Nhiều người dùng nhầm tưởng rằng chỉ cần đổi tên tệp từ 'ban_dich.txt' thành 'ban_dich.srt' là trình phát video sẽ tự động nhận diện phụ đề.",
          "Đổi đuôi mở rộng chỉ giúp hệ điều hành biết nên dùng ứng dụng nào để mở tệp, chứ không thay đổi cấu trúc bên trong. Các trình phát như VLC đòi hỏi đúng cú pháp SubRip. Nếu gặp các đoạn văn bản thiếu số thứ tự và mốc thời gian '00:00:00,000 --> 00:00:00,000', chúng sẽ bỏ qua tệp hoặc báo lỗi định dạng.",
          "Đổi đuôi tệp chỉ có tác dụng nếu tệp văn bản đó vốn dĩ đã chứa nội dung SRT chuẩn nhưng bị lưu nhầm đuôi .txt. Đối với văn bản thông thường, việc chuyển đổi qua công cụ của chúng tôi là bắt buộc."
        ]
      },
      timingAndSyncExplanation: {
        title: "Cách thức tự động tạo mốc thời gian và đồng bộ hóa",
        content: [
          "Vì tệp văn bản thông thường không có dữ liệu thời gian, công cụ áp dụng thuật toán phân bổ thời lượng tuần tự hợp lý.",
          "Bắt đầu từ thời điểm bạn chỉ định (mặc định 00:00:01,000), mỗi câu phụ đề sẽ được gán thời lượng hiển thị mong muốn (ví dụ 3.0 giây). Sau mỗi câu, công cụ tự động thêm khoảng dừng (ví dụ 0.5 giây) trước khi bắt đầu câu tiếp theo.",
          "Nếu văn bản của bạn đã có sẵn dấu mốc thời gian (như [01:23] hoặc 00:02:15), bộ phân tích thông minh sẽ nhận diện và tính toán thời gian bắt đầu và kết thúc tương ứng.",
          "Lời khuyên đồng bộ thực tế: Thời gian tự động mang lại khung phụ đề chuẩn cú pháp. Vì người nói thường thay đổi tốc độ và ngắt nghỉ tự nhiên, bạn có thể tinh chỉnh nhẹ nhàng trên Premiere Pro, DaVinci Resolve hoặc YouTube Studio để khớp hoàn hảo với giọng đọc."
        ]
      },
      realWorldUseCases: {
        title: "Các trường hợp sử dụng phổ biến của chuyển đổi TXT sang SRT",
        cases: [
          {
            title: "Phụ đề video YouTube và tối ưu hóa SEO",
            description: "Tải phụ đề chuẩn lên YouTube giúp cải thiện thứ hạng tìm kiếm, tiếp cận người xem quốc tế và tăng thời lượng giữ chân khán giả."
          },
          {
            title: "Bản ghi âm Podcast và Hội thảo trực tuyến",
            description: "Chuyển đổi bản ghi âm phỏng vấn thành phụ đề cho video ngắn, audiogram mạng xã hội và đoạn trích giới thiệu."
          },
          {
            title: "Dịch phụ đề phim và nội dung nước ngoài",
            description: "Dịch kịch bản video sang văn bản thuần, chuyển đổi sang SRT với nhịp độ tương thích và đưa vào phần mềm dựng phim."
          },
          {
            title: "Hậu kỳ văn bản nhận dạng giọng nói AI",
            description: "Xử lý dữ liệu thô từ Whisper AI hoặc các ứng dụng chuyển giọng nói thành phụ đề sẵn sàng sử dụng."
          },
          {
            title: "Bài giảng trực tuyến và Giáo dục E-learning",
            description: "Cung cấp phụ đề hỗ trợ tiếp cận cho các khóa học đại học, video đào tạo và bài giảng hướng dẫn."
          },
          {
            title: "Video ngắn dọc trên mạng xã hội (Reels, TikTok)",
            description: "Đưa tệp SRT vào CapCut hoặc Premiere để tạo hiệu ứng phụ đề động bắt mắt cho các video ngắn."
          }
        ]
      },
      commonErrorsAndFixes: {
        title: "Các lỗi thường gặp và cách khắc phục",
        items: [
          {
            title: "Phụ đề biến mất quá nhanh hoặc hiển thị quá lâu",
            description: "Điều chỉnh cài đặt Thời lượng Phụ đề trong bảng tùy chọn. Lời thoại nhanh thường cần 2 đến 3 giây, trong khi câu dài cần 4 đến 5 giây."
          },
          {
            title: "Các câu phụ đề bị chồng chéo thời gian lên nhau",
            description: "Công cụ của chúng tôi tính toán khoảng cách toán học để chống chồng chéo. Hãy đảm bảo Khoảng nghỉ được đặt từ 0.2 đến 0.5 giây."
          },
          {
            title: "Lỗi phông chữ tiếng Việt (ký tự có dấu bị lỗi)",
            description: "Hiện tượng này xảy ra khi tệp được lưu ở bảng mã ANSI cũ. Công cụ xử lý hoàn toàn bằng chuẩn UTF-8 để giữ nguyên vẹn dấu tiếng Việt."
          },
          {
            title: "Dòng phụ đề quá dài khi xem trên điện thoại",
            description: "Chọn phương thức tách dòng theo 'Câu' hoặc 'Từng dòng' thay vì tách theo đoạn văn để giữ mỗi dòng dưới 42 ký tự."
          }
        ]
      },
      comparison: {
        title: "So sánh kỹ thuật giữa tệp TXT và tệp SRT",
        description: "Điểm qua những khác biệt kỹ thuật cơ bản giữa văn bản thô và tệp phụ đề SubRip đồng bộ.",
        headers: ["Khía cạnh kỹ thuật", "Văn bản thuần (.txt)", "Phụ đề SubRip (.srt)"],
        rows: [
          ["Tọa độ thời gian", "Không có (chưa định thời)", "Chính xác đến mili-giây (HH:MM:SS,mmm)"],
          ["Đánh số thứ tự", "Không có", "Bắt buộc có số nguyên tăng dần (1, 2, 3...)"],
          ["Ký hiệu mũi tên thời gian", "Không có", "Dấu mũi tên bắt buộc (-->)"],
          ["Hỗ trợ trên trình phát", "Không thể tải làm phụ đề", "Hỗ trợ gốc trên VLC, YouTube, v.v."],
          ["Đưa vào phần mềm dựng", "Phải căn chỉnh thủ công", "Tự động khớp vào rãnh phụ đề dòng thời gian"],
          ["Thẻ định dạng", "Chỉ có văn bản thuần", "Hỗ trợ các thẻ cơ bản (<i>, <b>, <font>)"],
          ["Ưu điểm chính", "Dễ đọc, lưu trữ tài liệu", "Đồng bộ âm thanh và hình ảnh chính xác"]
        ]
      },
      privacy: {
        title: "Cam kết bảo mật 100% trực tiếp trong trình duyệt",
        content: [
          "Bảo mật và quyền riêng tư của bạn luôn được đặt lên hàng đầu. Khác với các công cụ trực tuyến tải dữ liệu lên máy chủ từ xa, công cụ của chúng tôi xử lý hoàn toàn trong bộ nhớ trình duyệt trên thiết bị của bạn.",
          "Kịch bản video, bản ghi chép cuộc họp và tài liệu riêng tư không bao giờ truyền qua mạng Internet. Bạn thậm chí có thể ngắt kết nối mạng sau khi tải trang và công cụ vẫn hoạt động bình thường."
        ]
      }
    },
    faqs: [
      {
        question: "Làm thế nào để chuyển đổi tệp TXT sang SRT?",
        answer: "Dán văn bản vào khung soạn thảo hoặc tải tệp .txt lên. Chọn cách phân tách (theo dòng, đoạn hoặc câu) và thời lượng hiển thị. Công cụ sẽ tự động tính toán mã thời gian và xuất tệp .srt chuẩn để bạn tải về ngay."
      },
      {
        question: "Tôi có thể chuyển TXT sang SRT mà không cần cài đặt phần mềm không?",
        answer: "Có. Công cụ hoạt động mượt mà trên mọi trình duyệt web hiện đại trên máy tính, máy tính bảng và điện thoại mà không cần cài đặt thêm bất kỳ phần mềm hay tiện ích nào."
      },
      {
        question: "Tệp TXT thông thường có chứa mốc thời gian phụ đề không?",
        answer: "Không. Tệp TXT chỉ chứa chữ và dấu ngắt dòng. Vì vậy công cụ của chúng tôi sẽ tự động thêm mốc thời gian và số thứ tự dựa trên cài đặt của bạn."
      },
      {
        question: "Công cụ tạo mốc thời gian như thế nào?",
        answer: "Công cụ áp dụng thuật toán tăng tiến theo thời gian. Bắt đầu từ mốc bạn chọn (ví dụ 1.0s), mỗi câu phụ đề nhận thời lượng hiển thị (ví dụ 3.0s), sau đó thêm khoảng nghỉ (ví dụ 0.5s) trước khi câu tiếp theo xuất hiện."
      },
      {
        question: "Tôi có thể chuyển đổi toàn bộ kịch bản phim dài sang phụ đề SRT không?",
        answer: "Có. Bạn chỉ cần sao chép toàn bộ kịch bản và dán vào công cụ. Tùy chọn tách theo dòng hoặc theo câu sẽ giúp biến từng lời thoại thành một câu phụ đề riêng biệt."
      },
      {
        question: "Tệp SRT sau khi chuyển đổi có dùng được trên YouTube không?",
        answer: "Có. Tệp .srt được tạo hoàn toàn tuân thủ tiêu chuẩn SubRip chính thức và có thể tải trực tiếp lên YouTube Studio trong mục Phụ đề của video."
      },
      {
        question: "Tại sao chỉ đổi đuôi từ .txt thành .srt lại không hoạt động?",
        answer: "Vì việc đổi tên không làm thay đổi cấu trúc tệp. Trình phát video cần có số thứ tự và mũi tên thời gian chuẩn (00:00:01,000 --> 00:00:04,000) mới có thể đọc được phụ đề."
      },
      {
        question: "Tôi có thể chỉnh sửa thời gian của tệp SRT sau khi tải về không?",
        answer: "Có. Tệp .srt là định dạng văn bản mở, bạn có thể mở bằng Notepad hoặc đưa vào phần mềm dựng phim (Premiere Pro, DaVinci Resolve) và phần mềm chỉnh phụ đề (Subtitle Edit) để tinh chỉnh."
      },
      {
        question: "Công cụ có hỗ trợ tiếng Việt có dấu và các ngôn ngữ khác không?",
        answer: "Có. Công cụ hỗ trợ bảng mã Unicode UTF-8 toàn diện cho tiếng Việt đầy đủ dấu, cũng như tiếng Ả Rập, tiếng Nhật, tiếng Hàn và các ngôn ngữ quốc tế khác mà không bị lỗi phông chữ."
      },
      {
        question: "Tệp của tôi có bị tải lên máy chủ nào không?",
        answer: "Không. Quá trình xử lý diễn ra 100% nội bộ trên máy của bạn bằng JavaScript trong trình duyệt. Không có văn bản nào bị gửi qua mạng."
      },
      {
        question: "Cần làm gì nếu phụ đề bị lệch một chút so với tiếng nói trong video?",
        answer: "Do thời gian tự động dựa trên mức ước tính trung bình, bạn có thể tinh chỉnh lại thời lượng trong công cụ hoặc kéo trượt rãnh phụ đề trong phần mềm dựng phim để khớp với các khoảng ngắt nghỉ thực tế."
      },
      {
        question: "Thời lượng hiển thị lý tưởng cho một câu phụ đề là bao lâu?",
        answer: "Tiêu chuẩn phụ đề quốc tế khuyến nghị tốc độ đọc từ 21 đến 24 ký tự mỗi giây, tương đương khoảng 2.5 đến 4 giây cho một dòng phụ đề tiêu chuẩn từ 30 đến 40 ký tự."
      }
    ]
  },

  id: {
    metaTitle: "Konverter TXT ke SRT Gratis – Ubah Teks Menjadi Subtitle",
    metaDescription: "Konversi transkrip TXT dan teks biasa ke file subtitle SRT online. Pembuatan timestamp otomatis, pengaturan cerdas, dan pemrosesan 100% privat di peramban.",
    h1: "Konverter TXT ke SRT",
    heroDescription: "Ubah naskah, transkrip dialog, dan dokumen teks menjadi file subtitle SubRip (.srt) dengan kode waktu berurutan otomatis yang dapat disesuaikan. Cepat, aman, dan gratis.",
    toolName: "Konverter TXT ke SRT",
    timingNotice: "Catatan Waktu: File teks biasa tidak memiliki kode waktu bawaan. Konverter kami otomatis membuat nomor urut dan timestamp berdasarkan preferensi Anda, yang dapat disesuaikan lebih lanjut di editor video.",
    sections: {
      whatIsTxt: {
        title: "Apa itu File Teks Biasa (TXT)?",
        content: [
          "File TXT (.txt) adalah format dokumen digital paling mendasar dalam dunia komputer. Format ini hanya menyimpan karakter huruf, angka, kata, kalimat, dan jeda baris murni tanpa format khusus, dengan pengkodean universal seperti UTF-8 atau ASCII.",
          "Karena tidak memuat kode pemformatan rumit atau metadata berat, file TXT dapat dibuka di semua sistem operasi, ponsel pintar, dan editor teks. Pembuat konten sering menggunakannya untuk naskah narasi, transkrip wawancara, dan teks terjemahan.",
          "Namun, file teks biasa tidak memiliki koordinat waktu dan urutan nomor yang dibutuhkan pemutar video untuk menyinkronkan teks dengan audio. Membuka file TXT di pemutar media atau YouTube tidak akan menampilkan subtitle pada waktu yang tepat."
        ]
      },
      whatIsSrt: {
        title: "Apa itu File Subtitle SRT (SubRip)?",
        content: [
          "File SRT (SubRip Text) adalah standar global untuk subtitle video digital dan closed caption. Didukung luas oleh YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve, dan pemutar media seperti VLC, file SRT menyusun dialog menjadi segmen waktu yang teratur.",
          "Setiap blok subtitle dalam file SRT yang valid harus mematuhi struktur empat bagian yang ketat:",
          "1. Nomor indeks berurutan (1, 2, 3, 4...)",
          "2. Timestamp mulai dan selesai yang presisi dalam format HH:MM:SS,mmm --> HH:MM:SS,mmm (Jam:Menit:Detik,Milidetik)",
          "3. Satu baris atau lebih teks dialog subtitle",
          "4. Satu baris kosong wajib untuk memisahkan dari blok subtitle berikutnya",
          "Tanpa struktur ini, pemutar video dan software editing tidak dapat mengetahui kapan subtitle harus muncul, berapa lama harus ditampilkan, dan kapan harus berganti ke kalimat berikutnya."
        ]
      },
      whatIsConverter: {
        title: "Apa itu Konverter TXT ke SRT?",
        content: [
          "Konverter TXT ke SRT adalah alat penataan format cerdas yang menjembatani teks polos tanpa waktu menjadi file subtitle yang tersinkronisasi untuk video.",
          "Alat ini menerima transkrip teks, naskah video, catatan wawancara, atau teks terjemahan dan mengubahnya menjadi file SubRip (.srt) standar lengkap dengan nomor urut, tanda panah waktu (-->), presisi milidetik, dan spasi antar-blok.",
          "Konverter online kami beroperasi 100% di memori browser Anda menggunakan Web API modern. Naskah rahasia dan dokumen pribadi Anda tidak pernah dikirim ke server cloud mana pun."
        ]
      },
      howToConvert: {
        title: "Cara Mengonversi TXT ke SRT Langkah demi Langkah",
        steps: [
          {
            title: "1. Tempel Teks atau Unggah File",
            description: "Ketik atau tempel transkrip Anda ke editor teks, atau unggah dokumen .txt dari komputer atau ponsel Anda."
          },
          {
            title: "2. Atur Waktu dan Metode Pemisahan",
            description: "Pilih pemisahan per baris, paragraf, atau kalimat, lalu tentukan durasi per subtitle (misalnya 3.0 detik) dan jeda istirahat (misalnya 0.5 detik)."
          },
          {
            title: "3. Pratinjau Langsung Seketika",
            description: "Lihat panel pratinjau yang langsung menghasilkan format waktu SRT standar dengan presisi hingga milidetik."
          },
          {
            title: "4. Unduh atau Salin SRT",
            description: "Klik \"Unduh .srt\" untuk menyimpan file ke perangkat Anda, atau salin teks untuk ditempelkan ke software editing video."
          }
        ]
      },
      whyRenameDoesntWork: {
        title: "Mengapa Sekadar Mengganti Nama .txt Menjadi .srt Tidak Berfungsi",
        content: [
          "Salah satu kekeliruan umum di kalangan pembuat video adalah mengira bahwa hanya dengan mengubah ekstensi file dari 'transkrip.txt' menjadi 'transkrip.srt' pemutar video akan langsung mengenalinya sebagai subtitle.",
          "Ekstensi file hanya memberi tahu sistem operasi aplikasi apa yang harus membukanya, tanpa mengubah struktur data di dalamnya. Pemutar seperti VLC membutuhkan sintaks SubRip yang tepat. Jika menemukan teks biasa tanpa nomor urut dan interval waktu '00:00:00,000 --> 00:00:00,000', file akan diabaikan atau menimbulkan pesan error.",
          "Mengganti nama hanya berhasil jika file tersebut memang sudah berisi kode SRT yang tidak sengaja tersimpan sebagai .txt. Untuk teks biasa dan naskah, konversi nyata menggunakan alat kami mutlak diperlukan."
        ]
      },
      timingAndSyncExplanation: {
        title: "Cara Kerja Pembuatan Waktu Otomatis dan Sinkronisasi",
        content: [
          "Karena file teks biasa tidak memuat informasi waktu, konverter kami menerapkan algoritma pembagian waktu kronologis yang teratur.",
          "Mulai dari waktu awal yang Anda tentukan (standar 00:00:01,000), setiap unit teks diberikan jendela tayang sesuai durasi yang dipilih (misal 3.0 detik). Setelah setiap subtitle, sistem menyisipkan jeda (misal 0.5 detik) sebelum subtitle berikutnya dimulai.",
          "Jika teks Anda sudah memuat penanda waktu (seperti [01:23] atau 00:02:15), parser pintar kami akan otomatis mendeteksi dan menghitung kode waktu mulai dan selesai yang sesuai.",
          "Tips praktis sinkronisasi: Waktu otomatis menyediakan kerangka kerja yang rapi dan benar secara sintaksis. Karena pembicara alami memiliki variasi kecepatan dan jeda bernapas, Anda disarankan melakukan sedikit penyesuaian geser di Premiere Pro, DaVinci Resolve, atau YouTube Studio agar pas dengan suara asli."
        ]
      },
      realWorldUseCases: {
        title: "Penggunaan Praktis Konversi TXT ke SRT",
        cases: [
          {
            title: "Subtitle Video YouTube dan Optimasi SEO",
            description: "Unggah subtitle terstruktur ke YouTube untuk meningkatkan visibilitas pencarian, membantu penonton internasional, dan memperpanjang durasi tonton."
          },
          {
            title: "Transkrip Podcast dan Webinar",
            description: "Ubah rekaman wawancara audio menjadi trek subtitle untuk klip media sosial, audiogram, dan video promosi."
          },
          {
            title: "Penerjemahan Konten Video Internasional",
            description: "Terjemahkan naskah video asing ke teks biasa, ubah ke file SRT dengan ritme yang sesuai, dan masukkan ke proyek video Anda."
          },
          {
            title: "Pasca-Pemrosesan Pengenalan Suara AI (STT)",
            description: "Format teks mentah dari Whisper AI, dikte suara, atau notula rapat menjadi file subtitle yang siap diimpor."
          },
          {
            title: "Kuliah Online dan Pembelajaran E-Learning",
            description: "Sediakan subtitle yang mudah diakses untuk kursus online, seminar pelatihan, dan materi tutorial."
          },
          {
            title: "Video Vertikal Media Sosial (Reels, TikTok, Shorts)",
            description: "Impor file SRT ke CapCut atau Premiere untuk membuat animasi subtitle dinamis pada video berformat pendek."
          }
        ]
      },
      commonErrorsAndFixes: {
        title: "Kendala Umum dan Cara Mengatasinya",
        items: [
          {
            title: "Subtitle menghilang terlalu cepat atau tampil terlalu lama",
            description: "Sesuaikan opsi Durasi per Subtitle pada panel pengaturan. Kalimat cepat membutuhkan 2 hingga 3 detik, sedangkan kalimat panjang butuh 4 hingga 5 detik."
          },
          {
            title: "Subtitle saling tumpang tindih waktu tayangnya",
            description: "Konverter kami menerapkan perhitungan matematis agar tidak saling bertabrakan. Pastikan opsi jeda disetel antara 0.2 hingga 0.5 detik."
          },
          {
            title: "Karakter khusus atau tanda baca rusak (mojibake)",
            description: "Hal ini terjadi jika file disimpan dengan enkripsi lama seperti ANSI. Alat kami menggunakan UTF-8 universal sehingga semua karakter dan aksen tetap terjaga."
          },
          {
            title: "Baris subtitle terlalu panjang untuk layar ponsel",
            description: "Gunakan metode pemisahan berdasarkan 'Kalimat' atau 'Setiap Baris' alih-alih paragraf penuh agar teks tetap ringkas (di bawah 42 karakter per baris)."
          }
        ]
      },
      comparison: {
        title: "Perbandingan Teknis: TXT vs SRT",
        description: "Pelajari perbedaan teknis mendasar antara teks biasa tanpa penunjuk waktu dan file subtitle SubRip yang tersinkronisasi.",
        headers: ["Aspek Teknis", "Teks Biasa (.txt)", "Subtitle SubRip (.srt)"],
        rows: [
          ["Koordinat Waktu", "Tidak ada (tanpa waktu)", "Presisi milidetik (HH:MM:SS,mmm)"],
          ["Penomoran Berurutan", "Tidak ada", "Wajib bilangan bulat urut (1, 2, 3...)"],
          ["Pemisah Kode Waktu", "Tidak ada", "Tanda panah wajib (-->)"],
          ["Dukungan Pemutar Video", "Tidak bisa dimuat sebagai subtitle", "Didukung langsung di VLC, YouTube, dll."],
          ["Impor ke Editor Video", "Perlu penempatan manual", "Langsung menempel pada trek subtitle timeline"],
          ["Tag Gaya Format", "Hanya teks polos", "Mendukung tag dasar (<i>, <b>, <font>)"],
          ["Keunggulan Utama", "Kemudahan baca & dokumentasi", "Sinkronisasi audiovisual yang presisi"]
        ]
      },
      privacy: {
        title: "Jaminan Privasi 100% di Peramban Anda",
        content: [
          "Keamanan dan kerahasiaan data Anda terlindungi sepenuhnya. Berbeda dengan layanan berbasis cloud yang mengunggah teks Anda ke server eksternal, alat kami memproses semuanya secara lokal di dalam memori browser Anda.",
          "Naskah video rahasia, rekaman wawancara bisnis, dan dokumen pribadi Anda tidak pernah melewati jaringan internet. Anda bahkan dapat mematikan koneksi internet setelah halaman dimuat, dan konverter akan tetap berjalan lancar."
        ]
      }
    },
    faqs: [
      {
        question: "Bagaimana cara mengubah file TXT menjadi SRT?",
        answer: "Tempelkan teks biasa ke editor atau unggah file .txt Anda. Pilih metode pemisahan (paragraf, baris, atau kalimat) serta durasi tayang yang diinginkan. Konverter akan menghitung kode waktu dan menghasilkan file .srt standar yang siap diunduh."
      },
      {
        question: "Bisakah saya mengonversi TXT ke SRT tanpa menginstal software?",
        answer: "Ya. Alat ini berjalan langsung di browser modern di komputer, tablet, maupun ponsel pintar tanpa perlu memasang aplikasi atau ekstensi apa pun."
      },
      {
        question: "Apakah file TXT biasa memiliki timestamp subtitle?",
        answer: "Tidak. File TXT standar hanya berisi teks dan baris baru. Oleh karena itu, konverter kami secara otomatis menambahkan nomor urut dan timestamp berdasarkan pengaturan yang Anda pilih."
      },
      {
        question: "Bagaimana konverter menghitung timestamp secara otomatis?",
        answer: "Konverter menggunakan sistem waktu linier berurutan. Dimulai dari waktu awal yang Anda tentukan (misalnya 1.0 detik), setiap baris diberi durasi (misalnya 3.0 detik), diikuti jeda jeda singkat (misalnya 0.5 detik) sebelum baris berikutnya dimulai."
      },
      {
        question: "Bisakah saya mengonversi naskah panjang atau transkrip lengkap sekaligus?",
        answer: "Ya. Anda cukup menyalin seluruh teks dan menempelkannya ke alat ini. Memilih pemisahan berdasarkan baris atau kalimat akan mengubah setiap kalimat menjadi satu balok subtitle mandiri."
      },
      {
        question: "Apakah file SRT yang dihasilkan bisa langsung diunggah ke YouTube?",
        answer: "Ya. File .srt yang dibuat mematuhi standar resmi SubRip dan dapat langsung diunggah di YouTube Studio pada tab Subtitle video Anda."
      },
      {
        question: "Mengapa tidak cukup hanya dengan mengganti ekstensi file dari .txt ke .srt?",
        answer: "Mengganti nama hanya mengubah label eksternal file, bukan struktur isinya. Pemutar video memerlukan nomor urut dan panah waktu standar (00:00:01,000 --> 00:00:04,000) untuk menampilkan teks."
      },
      {
        question: "Bisakah saya mengedit waktu SRT setelah selesai dikonversi?",
        answer: "Ya. File .srt adalah format teks terbuka yang dapat dibuka di Notepad atau dimasukkan ke software editing (Premiere Pro, DaVinci Resolve, Subtitle Edit) untuk penyelarasan lebih detail."
      },
      {
        question: "Apakah alat ini mendukung bahasa selain bahasa Inggris seperti Arab, Jepang, dan Indonesia?",
        answer: "Ya. Alat ini mendukung standar UTF-8 Unicode secara menyeluruh untuk semua bahasa di dunia, termasuk aksara Arab kanan-ke-kiri (RTL), Kanji Jepang, Hangeul Korea, dan tanda baca khusus."
      },
      {
        question: "Apakah file atau teks saya diunggah ke server?",
        answer: "Tidak. Semua pemrosesan berlangsung 100% di perangkat Anda menggunakan JavaScript di browser. Teks maupun file Anda tidak pernah dikirimkan ke server eksternal."
      },
      {
        question: "Apa yang harus dilakukan jika subtitle sedikit tidak pas dengan suara di video?",
        answer: "Karena waktu otomatis menggunakan estimasi rata-rata, Anda dapat menyesuaikan opsi durasi di alat ini, atau menggeser trek subtitle sedikit di software video editor atau YouTube Studio agar sesuai dengan jeda ucapan yang sebenarnya."
      },
      {
        question: "Berapa durasi ideal untuk satu baris subtitle?",
        answer: "Standar internasional merekomendasikan kecepatan baca antara 21 hingga 24 karakter per detik, yang setara dengan sekitar 2.5 hingga 4 detik untuk satu baris kalimat standar berisi 30 hingga 40 karakter."
      }
    ]
  }
};

// Update files for all 9 non-English locales
for (const [locale, data] of Object.entries(translations)) {
  const existingUi = getExistingUi(locale);
  const fullContent = {
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    h1: data.h1,
    heroDescription: data.heroDescription,
    toolName: data.toolName,
    timingNotice: data.timingNotice,
    ui: existingUi,
    sections: data.sections,
    faqs: data.faqs
  };

  const tsCode = `import type { TxtToSrtDetailContent } from "./types";\n\nexport const ${locale}Content: TxtToSrtDetailContent = ${JSON.stringify(fullContent, null, 2)};\n`;
  const targetFile = path.join(dataDir, `${locale}.ts`);
  fs.writeFileSync(targetFile, tsCode, 'utf-8');
  console.log(`Successfully updated ${locale}.ts (${targetFile})`);
}

console.log('All 9 localized txt-to-srt data files successfully generated!');
