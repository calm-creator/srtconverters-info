import type { SrtToVttDetailContent } from './types';

export const ptContent: SrtToVttDetailContent = {
  "metaTitle": "Conversor SRT para VTT Grátis Online – Rápido e no Navegador",
  "metaDescription": "Converta arquivos de legenda SRT para formato WebVTT (.vtt) válido online e grátis. Adiciona cabeçalho WEBVTT e ajusta carimbos de data/hora com privacidade 100%.",
  "h1": "Conversor SRT para VTT",
  "heroDescription": "Converta facilmente legendas SubRip (.srt) para o formato padrão WebVTT (.vtt) em total conformidade com a W3C para reprodutores HTML5, plataformas de streaming e sites modernos. 100% gratuito, instantâneo e estritamente privado no seu navegador.",
  "toolName": "Conversor SRT para VTT",
  "ui": {
    "pasteTitle": "Entrada de Legenda SRT (.srt)",
    "pastePlaceholder": "Cole o conteúdo SRT aqui (ex:\n1\n00:00:01,000 --> 00:00:04,000\nBem-vindo ao nosso tutorial em vídeo!)...",
    "orDivider": "OU",
    "uploadTitle": "Opção 2 — Enviar Arquivo SRT",
    "convertButton": "Converter para VTT",
    "clearButton": "Limpar",
    "trySampleButton": "Testar Exemplo",
    "livePreviewTitle": "Saída WebVTT Convertida (.vtt)",
    "errorNoInput": "Por favor, cole o texto da legenda SRT ou envie um arquivo .srt para converter.",
    "pastedContentSource": "Conteúdo SRT Colado",
    "dropzoneTitle": "Arraste e solte seu arquivo .srt aqui",
    "dropzoneSubtitle": "ou clique para selecionar do seu dispositivo",
    "browseButton": "Escolher Arquivo SRT",
    "dropActiveText": "Solte o arquivo SRT aqui...",
    "fileSelected": "Arquivo selecionado",
    "fileNameLabel": "Nome do Arquivo",
    "fileSizeLabel": "Tamanho do Arquivo",
    "cueCountLabel": "Legendas Convertidas",
    "characterCountLabel": "Caracteres",
    "downloadAction": "Baixar .vtt",
    "copyAction": "Copiar para Área de Transferência",
    "copiedSuccess": "Copiado com sucesso!",
    "resetAction": "Converter Outro Arquivo",
    "previewTitle": "Pré-visualização do WebVTT",
    "previewEmpty": "Suas legendas WebVTT (.vtt) convertidas aparecerão aqui de imediato assim que você inserir ou carregar um arquivo SRT.",
    "optionsTitle": "Opções de Conversão",
    "optIncludeCueNumbers": "Incluir números de identificação das falas",
    "optCleanTags": "Limpar tags HTML antigas não suportadas (ex: <font>)",
    "errorInvalidFile": "Envie um arquivo de legenda .srt válido.",
    "errorEmptyFile": "O arquivo ou texto fornecido está completamente vazio.",
    "errorParseFailed": "Não foi possível detectar blocos válidos de legendas SRT. Certifique-se de que os carimbos de data/hora sigam o formato 00:00:00,000 --> 00:00:00,000."
  },
  "sections": {
    "whatIsSrt": {
      "title": "O que é um arquivo SRT?",
      "content": [
        "Um arquivo SRT (SubRip Subtitle) é o formato de legenda em texto puro mais ubíquo e amplamente difundido na história do vídeo digital. Desenvolvido originalmente pelo programa de Windows SubRip —que extraía legendas e temporizações de mídias físicas de DVD—, o formato .srt tornou-se o padrão mundial para reprodutores de mídia de computador, televisores, compartilhamento de arquivos e softwares profissionais de edição de vídeo.",
        "Estruturalmente, um arquivo SRT é composto por blocos sequenciais de legendas separados por linhas em branco. Cada bloco contém quatro elementos fundamentais: um número de índice sequencial (1, 2, 3...), uma marcação temporal exata indicando quando a legenda surge e desaparece (formatada rigorosamente como horas:minutos:segundos,milissegundos: 00:00:01,250 --> 00:00:04,500), uma ou mais linhas de texto com o diálogo e uma quebra de linha final.",
        "Apesar de os arquivos SRT serem simples e contarem com compatibilidade quase universal em players independentes como VLC Media Player, MPV, HandBrake e Adobe Premiere Pro, eles foram projetados antes da web moderna. Como resultado, o SRT não possui suporte nativo em navegadores web HTML5 e não oferece recursos padronizados para tipografia responsiva, posicionamento geométrico ou estilização com CSS."
      ]
    },
    "whatIsVtt": {
      "title": "O que é um arquivo WebVTT (.vtt)?",
      "content": [
        "WebVTT (Web Video Text Tracks) é o padrão aberto oficial de legendas, transcrições e capítulos criado especificamente para a web pelo World Wide Web Consortium (W3C) e pelo WHATWG. Introduzido em conjunto com a especificação HTML5, o WebVTT é suportado nativamente por todos os navegadores web modernos —incluindo Google Chrome, Mozilla Firefox, Apple Safari e Microsoft Edge— sem a necessidade de plugins JavaScript externos, players de terceiros ou transcodificação no servidor.",
        "Um arquivo WebVTT é reconhecido pelo seu cabeçalho obrigatório: a primeiríssima linha do documento deve iniciar com o texto literal \"WEBVTT\". Após essa assinatura, os arquivos WebVTT podem incluir opcionalmente blocos de metadados (como autor, idioma e título) e folhas de estilo incorporadas antes do início das marcações de legendas.",
        "Além de exibir diálogos convencionais, o WebVTT foi concebido para interfaces modernas e responsivas. Ele oferece suporte nativo a parâmetros de orientação vertical, alinhamento horizontal, posição da linha na tela e tamanho da área de texto. Além disso, o WebVTT integra-se perfeitamente com CSS através do pseudo-elemento ::cue, permitindo que desenvolvedores controlem fontes, sombras, opacidade do fundo e esquemas de cores diretamente nas folhas de estilo de seus sites."
      ]
    },
    "whatIsConverter": {
      "title": "O que é um Conversor SRT para VTT?",
      "content": [
        "Um conversor SRT para VTT é uma ferramenta especializada criada para unir os formatos clássicos de produção de vídeo à distribuição moderna na web. Ele processa a sintaxe dos arquivos SubRip (.srt), realiza conversões matemáticas e estruturais e gera arquivos WebVTT (.vtt) válidos em conformidade com a W3C, prontos para uso imediato em elementos <video> de HTML5.",
        "A principal transformação realizada pelo conversor é a adaptação dos separadores de milissegundos nos carimbos de tempo. No padrão SRT, os milissegundos são precedidos por vírgula (por exemplo, 00:01:23,450). No entanto, a especificação WebVTT exige estritamente que os milissegundos sejam delimitados por ponto final ASCII (00:01:23.450). Uma única vírgula em um arquivo WebVTT fará com que os navegadores rejeitem a faixa ou falhem silenciosamente ao exibir as legendas.",
        "Nosso conversor executa todo o processamento de análise, formatação e geração 100% localmente no navegador do cliente. Nenhum arquivo ou linha de texto é enviado a servidores remotos, proporcionando velocidade instantânea, privacidade total e ausência de restrições de tamanho de arquivo."
      ]
    },
    "srtVsVtt": {
      "title": "SRT vs VTT: Principais Diferenças Técnicas",
      "content": [
        "Embora o SRT e o WebVTT tenham origens semelhantes e pareçam idênticos à primeira vista, existem diferenças técnicas fundamentais entre eles:",
        "1. Cabeçalho Obrigatório: O arquivo SRT começa diretamente com o número \"1\" na primeira linha. Já o WebVTT DEVE começar obrigatoriamente com a palavra \"WEBVTT\" na primeiríssima linha. Se o navegador não encontrar esse cabeçalho, o arquivo é descartado como texto inválido.",
        "2. Sintaxe de Milissegundos nos Carimbos de Tempo: O SRT usa vírgulas (00:00:05,200), enquanto o WebVTT usa pontos (00:00:05.200). O WebVTT também permite marcações abreviadas sem indicação de horas (ex: 05.200 --> 08.400) para vídeos com menos de uma hora, embora manter o formato completo HH:MM:SS.mmm seja o padrão mais seguro.",
        "3. Posicionamento na Tela e Geometria: O SRT não possui uma forma padronizada de posicionar legendas; tudo é exibido no centro inferior. O WebVTT suporta nativamente parâmetros de coordenadas diretamente na linha de tempo, como \"line:10%\", \"position:80%\", \"align:left\" e \"size:50%\", impedindo que as legendas tapem legendas embutidas ou nomes de entrevistados.",
        "4. Recursos de Estilização: O SRT depende de tags legadas como <i>, <b> e <font color=\"...\">, frequentemente desativadas por segurança em players web. O WebVTT suporta marcações de voz (<v Palestrante>), anotações ruby, classes CSS (<c.destaque>) e estilização visual completa com o seletor CSS ::cue.",
        "5. Padrão para Streaming HLS e DASH: Protocolos modernos como Apple HLS e MPEG-DASH entregam faixas de texto divididas em segmentos WebVTT. Fornecer arquivos SRT brutos em manifests HLS gera erros de reprodução imediatos em navegadores como o Safari e dispositivos iOS."
      ]
    },
    "whyConvert": {
      "title": "Por que Converter SRT para VTT?",
      "benefits": [
        {
          "title": "Compatibilidade Nativa com Vídeo HTML5",
          "description": "Todos os navegadores modernos decodificam WebVTT diretamente através da tag <track>, dispensando plugins ou bibliotecas extras de JavaScript."
        },
        {
          "title": "Estilização Visual com CSS (::cue)",
          "description": "Ajuste tipografia, transparência do fundo, cores de destaque, bordas e margens para se adequarem perfeitamente à identidade visual do seu site."
        },
        {
          "title": "Posicionamento Preciso na Tela",
          "description": "Defina a localização exata das legendas (superior, inferior, lateral) para não cobrir informações gráficas ou rostos no vídeo."
        },
        {
          "title": "Total Conformidade com Streaming HLS e DASH",
          "description": "Padrão exigido pelas maiores plataformas de streaming (Apple HLS, AWS Elemental, Cloudflare Stream) para entrega multilíngue de legendas."
        },
        {
          "title": "Melhoria em Acessibilidade e SEO",
          "description": "Torna seu vídeo acessível a pessoas com deficiência auditiva e permite que motores de busca leiam e indexem os diálogos falados."
        },
        {
          "title": "Ultra-Leve e Instantâneo",
          "description": "Por ser texto puro UTF-8, o arquivo WebVTT pesa poucos kilobytes, carregando de forma instantânea sem impactar o desempenho do site."
        }
      ]
    },
    "howToConvert": {
      "title": "Como Converter SRT para VTT em 3 Passos Fáceis",
      "steps": [
        {
          "title": "1. Cole o Texto ou Envie o Arquivo .srt",
          "description": "Cole o texto das suas legendas no painel esquerdo ou arraste o seu arquivo .srt para o conversor. Você também pode clicar em \"Escolher Arquivo SRT\"."
        },
        {
          "title": "2. Conversão Instantânea no Navegador",
          "description": "O conversor analisa as legendas, adiciona o cabeçalho WEBVTT, converte as vírgulas dos tempos em pontos e atualiza a pré-visualização em tempo real."
        },
        {
          "title": "3. Baixe ou Copie o Arquivo WebVTT",
          "description": "Clique em \"Baixar .vtt\" para salvar o arquivo pronto no seu dispositivo ou selecione \"Copiar para Área de Transferência\" para colar no seu projeto."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Erros Comuns de Formatação em Legendas SRT/VTT e Soluções",
      "items": [
        {
          "title": "Erro: Legendas não aparecem no navegador (Delimitador de Vírgula)",
          "description": "Causa: O arquivo mantém vírgulas nos tempos (ex: 00:00:02,500). Navegadores web falham ao encontrar vírgulas. Solução: Converta as vírgulas para pontos (00:00:02.500) com nosso conversor."
        },
        {
          "title": "Erro: O navegador rejeita o arquivo por erro de sintaxe (Cabeçalho Ausente)",
          "description": "Causa: O arquivo foi renomeado de .srt para .vtt sem a inserção do cabeçalho. Solução: A primeiríssima linha deve conter \"WEBVTT\", seguida de uma linha em branco."
        },
        {
          "title": "Erro: Caracteres corrompidos ou acentos quebrados (Codificação e BOM)",
          "description": "Causa: Legendas salvas em UTF-16, ANSI ou UTF-8 com Byte Order Mark (BOM). Solução: Nossa ferramenta remove marcas BOM invisíveis e padroniza a saída em UTF-8 universal."
        },
        {
          "title": "Erro: Carimbos de data/hora sobrepostos e texto piscando",
          "description": "Causa: A fala 1 termina em 00:00:05.000 enquanto a fala 2 inicia em 00:00:04.500. Solução: Assegure-se de que o tempo final de uma fala seja igual ou inferior ao início da seguinte."
        },
        {
          "title": "Erro: Bloqueio de CORS ao carregar legenda externa",
          "description": "Causa: Quando o arquivo .vtt está em um CDN ou domínio diferente da página, o navegador bloqueia a requisição. Solução: Configure o cabeçalho \"Access-Control-Allow-Origin: *\" no servidor."
        }
      ]
    },
    "html5VideoGuide": {
      "title": "Como Usar Legendas VTT com Vídeo HTML5",
      "description": "Implementar legendas WebVTT em reprodutores HTML5 é muito direto: basta utilizar a tag nativa <track> dentro do elemento <video>. Veja o exemplo completo e funcional abaixo:",
      "codeSnippet": "<video controls width=\"800\" poster=\"/imagens/capa.jpg\">\n  <!-- Arquivos de vídeo principais -->\n  <source src=\"/videos/aula.mp4\" type=\"video/mp4\">\n  <source src=\"/videos/aula.webm\" type=\"video/webm\">\n\n  <!-- Faixas de legendas WebVTT -->\n  <track \n    kind=\"subtitles\" \n    src=\"/legendas/aula-pt.vtt\" \n    srclang=\"pt\" \n    label=\"Português\" \n    default>\n  \n  <track \n    kind=\"subtitles\" \n    src=\"/legendas/aula-en.vtt\" \n    srclang=\"en\" \n    label=\"English\">\n\n  <p>Seu navegador não suporta vídeos em HTML5. <a href=\"/videos/aula.mp4\">Baixe o vídeo</a> para assistir.</p>\n</video>",
      "explanation": [
        {
          "term": "kind=\"subtitles\"",
          "description": "Define o tipo de trilha de texto. Use \"subtitles\" para traduções de diálogos ou \"captions\" para closed captions com descrições sonoras voltadas a pessoas surdas."
        },
        {
          "term": "src=\"caminho/arquivo.vtt\"",
          "description": "A URL relativa ou absoluta do seu arquivo WebVTT. Certifique-se de que o servidor envie o cabeçalho Content-Type \"text/vtt; charset=utf-8\"."
        },
        {
          "term": "srclang=\"pt\"",
          "description": "Código de idioma padrão BCP 47 (ex: \"pt\" para português, \"en\" para inglês), essencial para leitores de tela e ferramentas de tradução automática."
        },
        {
          "term": "label=\"Português\"",
          "description": "O nome legível que será exibido no menu de legendas (CC) do reprodutor para escolha do espectador."
        },
        {
          "term": "default",
          "description": "Atributo que indica que esta faixa deve ser ativada automaticamente quando o vídeo iniciar, a menos que o usuário tenha outra preferência salva."
        }
      ]
    },
    "comparison": {
      "title": "Comparativo Técnico: SRT vs WebVTT",
      "description": "Compare as especificações técnicas, compatibilidade e recursos suportados por SubRip (.srt) e WebVTT (.vtt):",
      "headers": [
        "Dimensão Técnica",
        "SubRip (.srt)",
        "WebVTT (.vtt)"
      ],
      "rows": [
        [
          "Ambiente Principal",
          "Reprodutores de computador e edição de vídeo",
          "Navegadores HTML5, apps e streaming web"
        ],
        [
          "Cabeçalho Obrigatório",
          "Nenhum (inicia no índice 1)",
          "Obrigatório \"WEBVTT\" na primeira linha"
        ],
        [
          "Separador de Milissegundos",
          "Vírgula (ex: 00:01:23,450)",
          "Ponto final (ex: 00:01:23.450)"
        ],
        [
          "Suporte Nativo no Navegador",
          "Não (exige bibliotecas JS como video.js)",
          "Sim (nativo via tag <track> em todos os navegadores)"
        ],
        [
          "Suporte a Estilos",
          "Tags antigas limitadas (<i>, <b>, <font>)",
          "Estilização completa via CSS com o pseudo-elemento ::cue"
        ],
        [
          "Posicionamento na Tela",
          "Não padronizado (centro inferior padrão)",
          "Atributos nativos: line, position, size, align"
        ],
        [
          "Streaming HLS / MPEG-DASH",
          "Incompatível (precisa ser convertido)",
          "Formato padrão para faixas de texto em streaming"
        ],
        [
          "Comentários e Metadados",
          "Sem sintaxe oficial de comentários",
          "Suporta blocos NOTE e cabeçalhos de STYLE"
        ],
        [
          "Extensão de Arquivo Padrão",
          ".srt",
          ".vtt"
        ],
        [
          "Tipo MIME Oficial",
          "application/x-subrip",
          "text/vtt; charset=utf-8"
        ]
      ]
    },
    "privacy": {
      "title": "Garantia de Privacidade e Segurança 100% no Navegador",
      "content": [
        "No SRTConverters.info, tratamos a segurança e o sigilo dos seus conteúdos com prioridade absoluta. Todas as conversões entre SRT e WebVTT são realizadas estritamente no motor do seu navegador por meio de JavaScript local.",
        "Seus arquivos de legendas, transcrições de vídeo, diálogos corporativos e materiais confidenciais nunca são enviados, gravados ou armazenados em servidores externos ou em nuvens de terceiros. Você pode até mesmo desconectar sua internet após carregar a página que a ferramenta continuará funcionando perfeitamente.",
        "Essa arquitetura 100% local elimina qualquer risco de vazamento de informações, tornando nosso conversor seguro para reuniões confidenciais, processos jurídicos, entrevistas e arquivos médicos."
      ]
    }
  },
  "faqs": [
    {
      "question": "Posso apenas renomear a extensão do meu arquivo de .srt para .vtt?",
      "answer": "Não. Simplesmente trocar a extensão do arquivo não o torna um arquivo WebVTT válido. O formato WebVTT exige a presença do cabeçalho \"WEBVTT\" no início e requer que os milissegundos sejam separados por ponto e não por vírgula (00:00:01.000 em vez de 00:00:01,000). Os navegadores web rejeitarão o arquivo renomeado."
    },
    {
      "question": "Por que minhas legendas WebVTT não aparecem no player HTML5?",
      "answer": "Existem três causas muito comuns: 1) O arquivo não possui o cabeçalho \"WEBVTT\" na linha 1; 2) Os carimbos de data/hora ainda possuem vírgulas em vez de pontos; ou 3) Seu servidor não está enviando o tipo MIME correto (text/vtt) ou está bloqueando requisições por CORS. O nosso conversor corrige automaticamente a sintaxe e a pontuação do arquivo."
    },
    {
      "question": "Qual a diferença entre legendas normais (subtitles) e legendas descritivas (captions)?",
      "answer": "As legendas para tradução (kind=\"subtitles\") destinam-se a espectadores que ouvem o áudio mas não compreendem o idioma falado, transcrevendo apenas diálogos. Já as closed captions (kind=\"captions\") atendem pessoas surdas ou com perda auditiva; além das falas, elas descrevem efeitos sonoros, nomes de personagens e músicas (ex: [Aplausos], [Música animada]). O WebVTT suporta ambos através do atributo kind no HTML5."
    },
    {
      "question": "Como posso personalizar o estilo das legendas WebVTT com CSS?",
      "answer": "Você pode personalizar as legendas diretamente no CSS do seu site usando o seletor ::cue. Por exemplo: video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }"
    },
    {
      "question": "O WebVTT funciona em celulares como iPhone (Safari) e Android (Chrome)?",
      "answer": "Sim! O WebVTT é compatível com todos os navegadores móveis modernos, incluindo o Safari no iOS/iPadOS e o Chrome no Android. Ao reproduzir vídeos em tela cheia no celular, o sistema operacional utiliza a trilha WebVTT para renderizar as legendas conforme as preferências de acessibilidade do usuário."
    },
    {
      "question": "Posso enviar arquivos WebVTT (.vtt) para o YouTube e Vimeo?",
      "answer": "Sim. Tanto o YouTube quanto o Vimeo aceitam arquivos WebVTT nativamente. O WebVTT é especialmente vantajoso caso suas legendas contenham posições personalizadas para não encobrir legendas de terço inferior do vídeo."
    },
    {
      "question": "Existe algum limite de tamanho de arquivo neste conversor?",
      "answer": "Não. Como toda a conversão ocorre localmente no seu computador sem trafegar dados pela internet, não existem limites de tamanho, contagem de caracteres ou cobranças. Você pode converter filmes de longa-metragem ou cursos de várias horas sem qualquer restrição."
    },
    {
      "question": "O conversor preserva acentuações, caracteres especiais e emojis?",
      "answer": "Sim. O conversor utiliza processamento nativo em UTF-8, mantendo integralmente todos os acentos da língua portuguesa (á, é, ã, ç), caracteres internacionais, escritas não latinas (árabe, japonês, coreano) e emojis Unicode sem distorções."
    }
  ]
};
