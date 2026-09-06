import type { ToolDetailContent } from './types';

export const ptContent: ToolDetailContent = {
  metaTitle: 'Conversor SRT para TXT Grátis – Extrair Texto de Legendas',
  metaDescription: 'Converta arquivos de legenda SRT para texto TXT limpo online. Remove marcações de tempo e numeração diretamente no seu navegador com total privacidade.',
  h1: 'Conversor SRT para TXT',
  heroDescription: 'Converta rapidamente arquivos de legenda SRT em transcrições de texto simples e legíveis. Remove códigos de tempo, números de legenda e tags de formatação com total privacidade.',
  toolName: 'Conversor SRT para TXT',
  ui: {
    pasteTitle: 'Entrada SRT (.srt)',
    pastePlaceholder: 'Cole o conteúdo do seu arquivo SRT aqui (ex.\n1\n00:00:01,000 --> 00:00:04,000\nOlá, bem-vindo ao nosso vídeo.)...',
    orDivider: 'OU',
    uploadTitle: 'Opção 2 — Enviar Arquivo SRT',
    convertButton: 'Converter para Texto',
    clearButton: 'Limpar',
    trySampleButton: 'Ver Exemplo',
    livePreviewTitle: 'Texto Simples Limpo (.txt)',
    errorNoInput: 'Cole o conteúdo do SRT ou envie um arquivo SRT para converter.',
    pastedContentSource: 'Conteúdo SRT Colado',
    dropzoneTitle: 'Arraste e solte seu arquivo .srt aqui',
    dropzoneSubtitle: 'ou clique para selecionar do seu dispositivo',
    browseButton: 'Selecionar Arquivo SRT',
    dropActiveText: 'Solte o arquivo SRT aqui...',
    fileSelected: 'Arquivo selecionado',
    fileNameLabel: 'Nome do Arquivo',
    fileSizeLabel: 'Tamanho',
    cueCountLabel: 'Legendas Extraídas',
    characterCountLabel: 'Caracteres',
    downloadAction: 'Baixar .txt',
    copyAction: 'Copiar para a Área de Transferência',
    copiedSuccess: 'Copiado com sucesso!',
    resetAction: 'Converter Outro Arquivo',
    previewTitle: 'Pré-visualização do Texto',
    previewEmpty: 'O texto convertido aparecerá aqui imediatamente após selecionar o arquivo SRT.',
    optionsTitle: 'Opções de Conversão',
    optEmptyLine: 'Adicionar linha em branco entre blocos de legenda',
    optRemoveTags: 'Remover tags de estilo (ex: <i>, <b>, <font>)',
    errorInvalidFile: 'Envie um arquivo de legenda .srt válido.',
    errorEmptyFile: 'O arquivo enviado está vazio.',
    errorParseFailed: 'Falha ao processar o arquivo. Verifique se o formato SRT está correto.',
  },
  sections: {
    whatIsSrt: {
      title: 'O que é um arquivo SRT?',
      content: [
        'Um arquivo SRT (SubRip Subtitle) é o formato de legenda mais utilizado no mundo para vídeos digitais. Ele é composto por blocos numerados contendo timestamps precisos de início e fim, seguidos pelo texto falado.',
        'Embora seja ideal para reprodutores como VLC e plataformas de streaming, a presença constante de números e carimbos de data/hora dificulta a leitura do texto como um documento comum.',
      ],
    },
    whatIsConverter: {
      title: 'O que é um Conversor SRT para TXT?',
      content: [
        'Um conversor de SRT para TXT é uma ferramenta projetada para analisar a estrutura do arquivo SRT, eliminando os números sequenciais e códigos de tempo para gerar um texto contínuo e limpo.',
        'Nossa ferramenta executa 100% da conversão no seu próprio navegador. Nenhum arquivo é enviado a servidores externos, garantindo privacidade absoluta para gravações e transcrições confidenciais.',
      ],
    },
    howToConvert: {
      title: 'Como converter SRT para TXT',
      steps: [
        {
          title: '1. Selecione o Arquivo',
          description: 'Arraste o arquivo .srt para a área indicada ou clique no botão para selecionar do seu computador ou celular.',
        },
        {
          title: '2. Conversão Instantânea',
          description: 'O conversor processa o texto imediatamente, removendo marcações de tempo e tags desnecessárias.',
        },
        {
          title: '3. Baixe ou Copie',
          description: 'Clique em "Baixar .txt" para salvar o documento ou copie o conteúdo diretamente para uso imediato.',
        },
      ],
    },
    whyConvert: {
      title: 'Por que converter SRT para TXT?',
      benefits: [
        {
          title: 'Leitura e Estudos',
          description: 'Transforme palestras, podcasts e vídeos em apostilas e resumos de fácil leitura.',
        },
        {
          title: 'Uso com Inteligência Artificial',
          description: 'Envie transcrições limpas para o ChatGPT ou Claude sem desperdiçar tokens com linhas de tempo.',
        },
        {
          title: 'Aprendizado de Idiomas',
          description: 'Estude diálogos de filmes e séries com foco total no vocabulário.',
        },
        {
          title: 'Busca Rápida de Informações',
          description: 'Arquivos TXT facilitam a busca por termos específicos em todo o conteúdo de um vídeo.',
        },
      ],
    },
    comparison: {
      title: 'Comparativo: SRT vs TXT',
      description: 'Entenda as principais diferenças entre legendas SubRip e documentos de texto puro.',
      headers: ['Característica', 'Formato SRT (.srt)', 'Texto Simples (.txt)'],
      rows: [
        ['Objetivo Principal', 'Sincronização de legendas em vídeo', 'Leitura e documentação'],
        ['Carimbos de Tempo', 'Sim (ex: 00:01:15,000 --> 00:01:18,500)', 'Não'],
        ['Numeração de Linhas', 'Sim (1, 2, 3...)', 'Não'],
        ['Tags de Formatação', 'Tags HTML comuns incorporadas', 'Apenas texto sem formatação'],
        ['Melhor Utilizado Para', 'Players de vídeo e editores', 'Leitura, resumos e IA'],
      ],
    },
    privacy: {
      title: 'Privacidade e Segurança Local',
      content: [
        'Seus arquivos nunca saem da sua máquina. O processamento ocorre via JavaScript no navegador sem comunicação com servidores de terceiros.',
        'Você pode inclusive desativar a sua conexão com a internet após abrir a página e a ferramenta continuará funcionando perfeitamente.',
      ],
    },
  },
  faqs: [
    {
      question: 'O que é um arquivo SRT?',
      answer: 'É um formato padrão de legendas que contém o texto da fala acompanhado de números sequenciais e códigos de tempo de início e término.',
    },
    {
      question: 'O conversor remove todos os números e tempos?',
      answer: 'Sim, todos os marcadores de tempo e números de sequência são totalmente removidos.',
    },
    {
      question: 'Meu arquivo é enviado para algum servidor?',
      answer: 'Não. Todo o processamento é feito 100% de forma local no seu navegador.',
    },
    {
      question: 'Suporta caracteres especiais e acentuação em português?',
      answer: 'Sim, caracteres como ç, ã, é, ó e qualquer codificação UTF-8 são perfeitamente suportados.',
    },
    {
      question: 'Funciona no celular?',
      answer: 'Sim, a ferramenta é totalmente responsiva e compatível com smartphones e tablets Android e iOS.',
    },
    {
      question: 'As tags como <i> e <b> são removidas?',
      answer: 'Sim, as tags de estilo de legenda são automaticamente limpas.',
    },
    {
      question: 'Existe limite de tamanho de arquivo?',
      answer: 'Não há limite imposto pelo nosso serviço, pois o arquivo é processado diretamente pela memória do seu dispositivo.',
    },
    {
      question: 'O serviço é gratuito?',
      answer: 'Sim, o uso é totalmente gratuito e não requer cadastro.',
    },
  ],
};
