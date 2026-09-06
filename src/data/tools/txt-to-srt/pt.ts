import type { TxtToSrtDetailContent } from "./types";

export const ptContent: TxtToSrtDetailContent = {
  "metaTitle": "Conversor TXT para SRT Grátis – Criar Legendas a partir de Texto",
  "metaDescription": "Converta transcrições TXT e texto simples em arquivos de legenda SRT formatados online. Geração automática de tempo, opções flexíveis e processamento 100% no navegador.",
  "h1": "Conversor TXT para SRT",
  "heroDescription": "Transforme roteiros, transcrições e textos simples em arquivos de legendas SubRip (.srt) com carimbos de data/hora automáticos e personalizáveis. Rápido, privado e gratuito.",
  "toolName": "Conversor TXT para SRT",
  "timingNotice": "Aviso de Sincronização: Arquivos TXT simples não possuem marcações de tempo. Nosso conversor gera automaticamente marcações sequenciais de tempo e numeração de legendas com base nas suas preferências. Ajustes finos podem ser feitos no seu editor de vídeo favorito.",
  "ui": {
    "pasteTitle": "Entrada de Texto Simples (.txt)",
    "pastePlaceholder": "Cole seu texto ou transcrição aqui (cada linha ou parágrafo se tornará uma legenda)...\n\nExemplo:\nOlá e bem-vindo a este tutorial em vídeo.\nNeste guia, exploramos a conversão de legendas.\nVamos direto aos detalhes.",
    "orDivider": "OU",
    "uploadTitle": "Opção 2 — Enviar Arquivo TXT",
    "convertButton": "Converter para SRT",
    "clearButton": "Limpar",
    "trySampleButton": "Testar Exemplo",
    "livePreviewTitle": "Legendas Geradas (.srt)",
    "errorNoInput": "Por favor, cole um texto ou envie um arquivo .txt para converter.",
    "pastedContentSource": "Texto Colado",
    "dropzoneTitle": "Arraste e solte seu arquivo .txt aqui",
    "dropzoneSubtitle": "ou clique para selecionar do seu dispositivo",
    "browseButton": "Escolher Arquivo TXT",
    "dropActiveText": "Solte o arquivo TXT aqui...",
    "fileSelected": "Arquivo selecionado",
    "fileNameLabel": "Nome do Arquivo",
    "fileSizeLabel": "Tamanho do Arquivo",
    "cueCountLabel": "Legendas Criadas",
    "characterCountLabel": "Caracteres",
    "downloadAction": "Baixar .srt",
    "copyAction": "Copiar para Área de Transferência",
    "copiedSuccess": "Copiado para a área de transferência!",
    "resetAction": "Converter Outro Texto",
    "previewTitle": "Prévia do SRT Gerado",
    "previewEmpty": "Suas legendas SRT formatadas aparecerão aqui assim que você inserir o texto.",
    "timingOptionsTitle": "Configurações de Tempo e Divisão",
    "optStartTime": "Tempo Inicial (segundos)",
    "optDuration": "Duração por Legenda (segundos)",
    "optGap": "Intervalo entre Legendas (segundos)",
    "optSplitMethod": "Dividir Texto Por",
    "optSplitParagraphs": "Parágrafos (Linha Dupla)",
    "optSplitLines": "Cada Linha (Linha Simples)",
    "optSplitSentences": "Frases (. ? !)",
    "timingNoticeBadge": "Tempos Automáticos Gerados",
    "errorInvalidFile": "Por favor, envie um arquivo de texto (.txt) válido.",
    "errorEmptyFile": "O arquivo enviado está vazio.",
    "errorParseFailed": "Não foi possível extrair linhas de texto válidas."
  },
  "sections": {
    "whatIsTxt": {
      "title": "O que é um arquivo de texto simples (TXT)?",
      "content": [
        "Um arquivo TXT (.txt) é o formato de texto digital mais fundamental da computação. Ele armazena caracteres alfanuméricos, palavras, frases e quebras de linha puras e sem formatação usando codificações universais como UTF-8 ou ASCII.",
        "Como os arquivos TXT não contêm tags de estilo proprietárias, cabeçalhos de metadados ou regras de layout, eles são universalmente acessíveis em todos os sistemas operacionais, editores de texto, smartphones e navegadores. Criadores de conteúdo utilizam arquivos TXT para roteiros de locução, transcrições de entrevistas, resultados de fala para texto e diálogos traduzidos.",
        "No entanto, arquivos de texto simples não possuem as coordenadas temporais, números de sequência e intervalos necessários para que os reprodutores de vídeo sincronizem as legendas com o áudio falado. Abrir um arquivo TXT em um reprodutor de mídia ou no YouTube não exibirá legendas no momento correto."
      ]
    },
    "whatIsSrt": {
      "title": "O que é um arquivo de legendas SRT (SubRip)?",
      "content": [
        "Um arquivo SRT (SubRip Text) é o padrão global para legendas e closed captions de vídeo digital. Compatível com YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve e reprodutores de mídia como o VLC, um arquivo SRT organiza diálogos falados em blocos cronológicos estruturados.",
        "Cada bloco de legenda em um arquivo SRT válido segue rigorosamente uma estrutura de quatro partes:",
        "1. Um número sequencial de índice (1, 2, 3, 4...)",
        "2. Um carimbo de data/hora exato de início e fim no formato HH:MM:SS,mmm --> HH:MM:SS,mmm (Horas:Minutos:Segundos,Milissegundos)",
        "3. Uma ou mais linhas de texto de legenda ou diálogo",
        "4. Uma linha em branco obrigatória separando-o do bloco seguinte",
        "Sem essa sintaxe rigorosa, reprodutores de vídeo e linhas do tempo de edição não conseguem determinar quando as legendas devem surgir na tela, quanto tempo devem permanecer visíveis ou quando devem dar lugar à próxima fala."
      ]
    },
    "whatIsConverter": {
      "title": "O que é um Conversor TXT para SRT?",
      "content": [
        "Um conversor de TXT para SRT é um mecanismo inteligente de formatação que conecta textos brutos sem tempo a arquivos de legendas sincronizados com vídeo.",
        "Ele recebe transcrições de texto simples, anotações de entrevistas, roteiros de vídeo, diálogos traduzidos ou saídas de reconhecimento de voz e os transforma em arquivos SubRip (.srt) padronizados, com índices incrementais, setas de código de tempo válidas (-->), precisão de milissegundos e espaçamento entre blocos.",
        "Nosso conversor online opera 100% na memória do navegador do cliente usando Web APIs modernas. Suas transcrições confidenciais, roteiros não publicados e documentos privados nunca saem do seu computador nem são enviados para servidores em nuvem."
      ]
    },
    "howToConvert": {
      "title": "Como converter TXT para SRT passo a passo",
      "steps": [
        {
          "title": "1. Cole o texto ou envie o arquivo",
          "description": "Digite ou cole sua transcrição diretamente no editor de texto, ou envie um documento .txt do seu computador ou celular."
        },
        {
          "title": "2. Configure o tempo e o método de divisão",
          "description": "Escolha se cada linha, parágrafo ou frase formará uma legenda e defina a duração desejada (ex.: 3,0s) e o intervalo de pausa (ex.: 0,5s)."
        },
        {
          "title": "3. Prévia instantânea em tempo real",
          "description": "Veja o painel de pré-visualização gerar imediatamente códigos de tempo de legenda SRT válidos e sequenciais formatados até o milissegundo."
        },
        {
          "title": "4. Baixe ou copie o SRT",
          "description": "Clique em \"Baixar .srt\" para salvar o arquivo de legendas padrão no seu dispositivo, ou copie o conteúdo para colar rapidamente no seu editor."
        }
      ]
    },
    "whyRenameDoesntWork": {
      "title": "Por que simplesmente renomear .txt para .srt não funciona",
      "content": [
        "Um dos equívocos mais comuns entre criadores de vídeo é supor que alterar a extensão de um arquivo de 'transcricao.txt' para 'transcricao.srt' fará com que os reprodutores de vídeo reconheçam as legendas.",
        "A extensão de um arquivo serve apenas para informar ao sistema operacional qual aplicativo deve abri-lo; ela não altera a estrutura interna dos dados. Reprodutores como VLC, MPV ou QuickTime exigem a sintaxe exata do SubRip. Se um reprodutor encontrar parágrafos comuns sem números sequenciais e limites de tempo '00:00:00,000 --> 00:00:00,000', ele falhará silenciosamente ou exibirá um erro de formato de legenda inválido.",
        "Renomear funciona apenas se o arquivo de texto já contiver a sintaxe SubRip válida salva previamente com a extensão .txt. Para textos comuns, transcrições e roteiros, a conversão real por meio da nossa ferramenta é essencial."
      ]
    },
    "timingAndSyncExplanation": {
      "title": "Entendendo os tempos de legenda: como funciona a geração automática",
      "content": [
        "Como os arquivos de texto simples contêm palavras de diálogo, mas nenhuma informação temporal, nosso conversor utiliza um algoritmo de ritmo cronológico determinístico.",
        "Começando no carimbo de data/hora inicial especificado (padrão 00:00:01,000), cada unidade de texto recebe uma janela de exibição igual à duração selecionada (ex.: 3,0 segundos). Após cada legenda, o algoritmo insere o intervalo de pausa escolhido (ex.: 0,5 segundos) antes de iniciar a próxima legenda.",
        "Se o seu texto já contiver marcadores de tempo reconhecíveis (como [01:23] ou 00:02:15), nosso analisador inteligente detectará essas marcações e calculará os códigos de início e término automaticamente.",
        "Conselho prático sobre sincronização: Os carimbos de data/hora automáticos fornecem uma base perfeita e sintaticamente correta. Como os locutores aceleram a fala, pausam ou enfatizam frases de maneira espontânea, os tempos automatizados normalmente exigirão pequenos ajustes no Premiere Pro, DaVinci Resolve, Subtitle Edit ou YouTube Studio para casar com o ritmo real da fala."
      ]
    },
    "realWorldUseCases": {
      "title": "Casos de uso reais para conversão de TXT para SRT",
      "cases": [
        {
          "title": "Legendas para vídeos do YouTube e SEO",
          "description": "Envie legendas estruturadas para o YouTube para melhorar a descoberta nas pesquisas, ajudar espectadores de outros países e aumentar a retenção da audiência."
        },
        {
          "title": "Transcrições de podcasts e webinars",
          "description": "Converta transcrições de áudio de entrevistas em faixas de legenda para videoclipes, audiogramas em redes sociais e vídeos promocionais."
        },
        {
          "title": "Tradução de conteúdos audiovisuais",
          "description": "Traduza o roteiro de um vídeo estrangeiro em texto simples, converta-o em um arquivo SRT com ritmo equivalente e importe no seu projeto de edição."
        },
        {
          "title": "Pós-processamento de IA de fala para texto",
          "description": "Formate textos brutos gerados por ditado por voz, Whisper AI ou transcrições de reuniões em faixas de legendas prontas para importação."
        },
        {
          "title": "Aulas e e-learning educacional",
          "description": "Disponibilize legendas acessíveis e em conformidade com padrões de acessibilidade para cursos universitários online, palestras e tutoriais."
        },
        {
          "title": "Vídeos verticais para redes sociais (Reels/TikTok)",
          "description": "Importe arquivos SRT gerados no CapCut, Premiere ou Final Cut para aplicar legendas animadas em conteúdos curtos verticais."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Erros comuns na conversão de TXT para SRT e como corrigi-los",
      "items": [
        {
          "title": "Legendas somem rápido demais ou duram muito tempo",
          "description": "Ajuste a configuração de Duração da Legenda na ferramenta. Falas rápidas normalmente precisam de 2 a 3 segundos por linha, enquanto frases longas exigem de 4 a 5 segundos."
        },
        {
          "title": "Legendas sobrepondo-se umas às outras",
          "description": "Nosso conversor garante intervalos matemáticos sem sobreposição entre as legendas. Certifique-se de que o intervalo esteja configurado entre 0,2 e 0,5 segundos."
        },
        {
          "title": "Caracteres especiais e acentos corrompidos (mojibake)",
          "description": "Isso ocorre quando arquivos são salvos com codificações antigas ANSI ou ISO. Nossa ferramenta processa tudo em UTF-8 universal para preservar acentos e caracteres internacionais."
        },
        {
          "title": "Linhas muito longas para telas de celular",
          "description": "Use o modo de divisão por 'Frases' ou 'Cada Linha' em vez de blocos de parágrafos grandes para manter as legendas concisas (menos de 42 caracteres por linha)."
        }
      ]
    },
    "comparison": {
      "title": "TXT vs SRT: Principais diferenças técnicas",
      "description": "Confira as especificações técnicas que diferenciam o texto simples desestruturado dos arquivos de legenda SubRip sincronizados.",
      "headers": [
        "Aspecto Técnico",
        "Texto Simples (.txt)",
        "Legenda SubRip (.srt)"
      ],
      "rows": [
        [
          "Coordenadas de Tempo",
          "Nenhuma (sem tempo)",
          "Precisão de milissegundos (HH:MM:SS,mmm)"
        ],
        [
          "Numeração Sequencial",
          "Nenhuma",
          "Números inteiros obrigatórios (1, 2, 3...)"
        ],
        [
          "Separador de Código de Tempo",
          "Nenhum",
          "Marcador de seta obrigatório (-->)"
        ],
        [
          "Suporte em Reprodutores de Vídeo",
          "Não pode ser carregado como legenda",
          "Reprodução nativa no VLC, YouTube, etc."
        ],
        [
          "Importação em Editores de Vídeo",
          "Requer posicionamento manual",
          "Encaixa diretamente na faixa de legendas"
        ],
        [
          "Tags de Formatação",
          "Texto puro sem estilo",
          "Suporte a tags opcionais (<i>, <b>, <font>)"
        ],
        [
          "Principal Vantagem",
          "Leitura humana e arquivamento",
          "Sincronização audiovisual precisa"
        ]
      ]
    },
    "privacy": {
      "title": "Garantia de privacidade 100% no navegador",
      "content": [
        "Sua segurança e confidencialidade são garantidas por projeto. Ao contrário de conversores em nuvem que enviam suas transcrições para servidores remotos onde podem ser armazenadas ou analisadas, nossa ferramenta executa todo o processamento localmente na memória do navegador do seu dispositivo.",
        "Seus roteiros de vídeo privados, transcrições jurídicas, entrevistas com clientes e documentos confidenciais nunca trafegam pela internet. Você pode inclusive desligar o Wi-Fi após carregar esta página, e o conversor continuará funcionando em velocidade máxima."
      ]
    }
  },
  "faqs": [
    {
      "question": "Como converter um arquivo TXT em SRT?",
      "answer": "Cole seu texto simples no nosso editor ou envie seu arquivo .txt. Escolha o método de divisão preferido (parágrafos, linhas ou frases) e a duração das legendas. O conversor calcula instantaneamente códigos de tempo sequenciais e gera um arquivo .srt padrão pronto para download imediato."
    },
    {
      "question": "Posso converter um arquivo TXT para SRT sem instalar programas?",
      "answer": "Sim. Nossa ferramenta roda inteiramente em qualquer navegador moderno no computador, tablet ou celular, sem necessidade de instalar softwares externos, plugins ou extensões."
    },
    {
      "question": "Um arquivo TXT comum contém marcações de tempo de legenda?",
      "answer": "Não. Arquivos TXT contêm apenas caracteres de texto e quebras de linha sem tempos. Por isso nosso conversor atribui automaticamente marcações de tempo progressivas e números sequenciais com base nas suas configurações de ritmo."
    },
    {
      "question": "Como o conversor gera os tempos das legendas?",
      "answer": "Ele utiliza um sistema de ritmo cronológico progressivo. A partir do tempo inicial escolhido (ex.: 1,0s), cada legenda recebe uma duração definida (ex.: 3,0s), seguida por um intervalo de pausa (ex.: 0,5s) antes do início da próxima legenda."
    },
    {
      "question": "Posso converter uma transcrição ou roteiro completo em legendas SRT?",
      "answer": "Sim. Basta copiar sua transcrição ou roteiro e colar no conversor. Dividir por linhas ou frases transformará cada sentença em uma legenda individual."
    },
    {
      "question": "Posso usar o arquivo SRT convertido no YouTube?",
      "answer": "Sim. O arquivo .srt gerado segue o padrão oficial SubRip e pode ser enviado diretamente no YouTube Studio na aba Legendas / CC do seu vídeo."
    },
    {
      "question": "Por que simplesmente renomear .txt para .srt não funciona?",
      "answer": "Renomear altera apenas o nome da extensão. Os reprodutores de vídeo exigem formatação interna específica, incluindo números de sequência e setas com carimbos em milissegundos (00:00:01,000 --> 00:00:04,000). Um arquivo de texto renomeado não possui essa estrutura e não será reconhecido."
    },
    {
      "question": "Posso editar os tempos do SRT após a conversão?",
      "answer": "Sim. O arquivo .srt baixado é um formato de texto aberto que pode ser aberto em qualquer editor (Bloco de Notas, VS Code) ou importado em editores de vídeo (Premiere Pro, DaVinci Resolve) e editores de legenda (Subtitle Edit, Aegisub) para ajuste milimétrico."
    },
    {
      "question": "O conversor suporta outros idiomas como espanhol, árabe, japonês ou hindi?",
      "answer": "Sim. A ferramenta oferece suporte total a Unicode UTF-8 para todos os idiomas globais, incluindo árabe da direita para a esquerda (RTL), Devanagari, caracteres japoneses e coreanos, além de acentos europeus."
    },
    {
      "question": "Meu arquivo TXT é enviado para algum servidor?",
      "answer": "Não. O processamento ocorre 100% no seu dispositivo usando JavaScript no navegador. Seu texto e seus arquivos nunca são transmitidos para servidores externos."
    },
    {
      "question": "O que fazer se as legendas geradas ficarem ligeiramente fora de sincronia com o vídeo?",
      "answer": "Como a geração automática utiliza uma duração média estimada, você pode ajustar o tempo inicial ou a duração na ferramenta, ou deslizar a trilha de legendas no seu editor de vídeo ou YouTube Studio para casar com as pausas naturais da fala."
    },
    {
      "question": "Qual é a duração ideal de legenda por linha?",
      "answer": "Os padrões internacionais recomendam uma velocidade de leitura entre 21 e 24 caracteres por segundo, o que equivale a aproximadamente 2,5 a 4 segundos para uma linha padrão de 30 a 40 caracteres."
    }
  ]
};
