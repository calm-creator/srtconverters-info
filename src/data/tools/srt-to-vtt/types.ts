export interface SrtToVttDetailContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  toolName: string;
  ui: {
    pasteTitle: string;
    pastePlaceholder: string;
    orDivider: string;
    uploadTitle: string;
    convertButton: string;
    clearButton: string;
    trySampleButton: string;
    livePreviewTitle: string;
    errorNoInput: string;
    pastedContentSource: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    browseButton: string;
    dropActiveText: string;
    fileSelected: string;
    fileNameLabel: string;
    fileSizeLabel: string;
    cueCountLabel: string;
    characterCountLabel: string;
    downloadAction: string;
    copyAction: string;
    copiedSuccess: string;
    resetAction: string;
    previewTitle: string;
    previewEmpty: string;
    optionsTitle: string;
    optIncludeCueNumbers: string;
    optCleanTags: string;
    errorInvalidFile: string;
    errorEmptyFile: string;
    errorParseFailed: string;
  };
  sections: {
    whatIsSrt: {
      title: string;
      content: string[];
    };
    whatIsVtt: {
      title: string;
      content: string[];
    };
    whatIsConverter: {
      title: string;
      content: string[];
    };
    srtVsVtt: {
      title: string;
      content: string[];
    };
    whyConvert: {
      title: string;
      benefits: Array<{ title: string; description: string }>;
    };
    howToConvert: {
      title: string;
      steps: Array<{ title: string; description: string }>;
    };
    commonErrorsAndFixes: {
      title: string;
      items: Array<{ title: string; description: string }>;
    };
    html5VideoGuide: {
      title: string;
      description: string;
      codeSnippet: string;
      explanation: Array<{ term: string; description: string }>;
    };
    comparison: {
      title: string;
      description: string;
      headers: [string, string, string];
      rows: Array<[string, string, string]>;
    };
    privacy: {
      title: string;
      content: string[];
    };
  };
  faqs: Array<{ question: string; answer: string }>;
}
