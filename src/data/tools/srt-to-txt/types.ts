export interface ToolDetailContent {
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
    optEmptyLine: string;
    optRemoveTags: string;
    errorInvalidFile: string;
    errorEmptyFile: string;
    errorParseFailed: string;
  };
  sections: {
    whatIsSrt: {
      title: string;
      content: string[];
    };
    whatIsConverter: {
      title: string;
      content: string[];
    };
    howToConvert: {
      title: string;
      steps: Array<{ title: string; description: string }>;
    };
    whyConvert: {
      title: string;
      benefits: Array<{ title: string; description: string }>;
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
