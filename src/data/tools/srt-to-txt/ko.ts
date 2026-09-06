import type { ToolDetailContent } from './types';

export const koContent: ToolDetailContent = {
  metaTitle: '무료 SRT TXT 변환기 – 자막 텍스트 추출 도구',
  metaDescription: 'SRT 자막 파일을 깨끗한 TXT 일반 텍스트로 온라인에서 변환하세요. 타임스탬프와 자막 번호를 브라우저에서 100% 안전하게 제거합니다.',
  h1: 'SRT TXT 변환기',
  heroDescription: 'SRT 자막 파일에서 타임코드, 번호, 서식 태그를 자동으로 제거하고 깔끔한 대본 텍스트로 빠르게 변환합니다. 모든 작업은 브라우저 내에서 안전하게 처리됩니다.',
  toolName: 'SRT TXT 변환기',
  ui: {
    pasteTitle: 'SRT 입력 (.srt)',
    pastePlaceholder: '여기에 SRT 자막 내용을 붙여넣으세요 (예:\n1\n00:00:01,000 --> 00:00:04,000\n안녕하세요, 영상에 오신 것을 환영합니다.)...',
    orDivider: '또는',
    uploadTitle: '옵션 2 — SRT 파일 업로드',
    convertButton: '텍스트로 변환',
    clearButton: '지우기',
    trySampleButton: '예제 불러오기',
    livePreviewTitle: '정리된 일반 텍스트 (.txt)',
    errorNoInput: 'SRT 내용을 붙여넣거나 SRT 파일을 업로드해 주세요.',
    pastedContentSource: '붙여넣은 SRT 텍스트',
    dropzoneTitle: '여기에 .srt 파일을 드래그하여 놓으세요',
    dropzoneSubtitle: '또는 기기에서 직접 파일 선택',
    browseButton: 'SRT 파일 선택',
    dropActiveText: 'SRT 파일을 여기에 놓으세요...',
    fileSelected: '파일 선택됨',
    fileNameLabel: '파일명',
    fileSizeLabel: '파일 크기',
    cueCountLabel: '추출된 자막 수',
    characterCountLabel: '글자 수',
    downloadAction: '.txt 다운로드',
    copyAction: '클립보드에 복사',
    copiedSuccess: '클립보드에 복사되었습니다!',
    resetAction: '다른 파일 변환',
    previewTitle: '변환된 텍스트 미리보기',
    previewEmpty: 'SRT 파일을 선택하면 변환된 텍스트가 여기에 즉시 표시됩니다.',
    optionsTitle: '변환 옵션',
    optEmptyLine: '자막 문단 사이에 빈 줄 추가',
    optRemoveTags: '스타일 태그 제거 (예: <i>, <b>, <font>)',
    errorInvalidFile: '올바른 .srt 자막 파일을 업로드해주세요.',
    errorEmptyFile: '업로드된 파일이 비어 있습니다.',
    errorParseFailed: '파일 변환에 실패했습니다. SRT 형식을 확인해주세요.',
  },
  sections: {
    whatIsSrt: {
      title: 'SRT 파일이란 무엇인가요?',
      content: [
        'SRT(SubRip Subtitle)는 디지털 비디오에서 가장 널리 사용되는 텍스트 기반 자막 형식입니다. 순차적 자막 번호, 정확한 시작 및 종료 타임코드, 그리고 실제 대사 텍스트로 구성됩니다.',
        '동영상 재생에는 필수적이지만, 타임스탬프와 번호가 포함되어 있어 일반 문서나 스크립트로 읽기에는 불편합니다.',
      ],
    },
    whatIsConverter: {
      title: 'SRT TXT 변환기란?',
      content: [
        'SRT TXT 변환기는 SRT 파일의 복잡한 타임스탬프와 일련번호를 제거하고 순수한 대사 텍스트만 추출해주는 전문 도구입니다.',
        '본 도구는 사용자의 웹 브라우저 안에서 100% 로컬로 작동하므로, 중요한 영상 대본이나 개인적인 파일이 서버로 유출될 위험이 전혀 없습니다.',
      ],
    },
    howToConvert: {
      title: 'SRT를 TXT로 변환하는 방법',
      steps: [
        {
          title: '1. 파일 선택 또는 드래그',
          description: '변환할 .srt 파일을 업로드 영역에 끌어다 놓거나 "SRT 파일 선택" 버튼을 누릅니다.',
        },
        {
          title: '2. 실시간 자동 처리',
          description: '브라우저에서 즉각적으로 타임코드와 불필요한 태그를 제거하고 텍스트를 추출합니다.',
        },
        {
          title: '3. 다운로드 또는 복사',
          description: '결과물을 .txt 파일로 저장하거나 클립보드에 복사하여 원하는 곳에 사용하세요.',
        },
      ],
    },
    whyConvert: {
      title: 'SRT를 TXT로 변환해야 하는 이유',
      benefits: [
        {
          title: '대본 읽기 및 요약',
          description: '유튜브 강의, 인터뷰, 팟캐스트를 타임코드 없이 편안한 줄글 형태로 읽을 수 있습니다.',
        },
        {
          title: '인공지능(AI) 프롬프트 활용',
          description: '불필요한 시간 정보를 제거하여 ChatGPT, Claude 등의 토큰을 획기적으로 절약할 수 있습니다.',
        },
        {
          title: '외국어 학습',
          description: '영화나 드라마 자막을 스크립트로 인쇄하여 어휘 공부와 쉐도잉에 활용하세요.',
        },
        {
          title: '문서 검색 및 아카이빙',
          description: '순수 텍스트 파일은 검색이 빠르고 저장 공간을 거의 차지하지 않습니다.',
        },
      ],
    },
    comparison: {
      title: 'SRT vs TXT 비교',
      description: '자막 파일 형식과 순수 텍스트 문서의 주요 차이점입니다.',
      headers: ['기능', 'SRT 형식 (.srt)', '일반 텍스트 (.txt)'],
      rows: [
        ['주요 목적', '비디오 자막 싱크 동기화', '읽기 및 문서화'],
        ['타임스탬프', '포함됨 (예: 00:01:20,000 --> 00:01:25,000)', '없음'],
        ['순서 번호', '포함됨 (1, 2, 3...)', '없음'],
        ['서식 태그', 'HTML 스타일 태그 포함 가능', '순수 텍스트만 유지'],
        ['추천 사용처', '동영상 재생기 및 영상 편집', '독서, 메모, AI 분석'],
      ],
    },
    privacy: {
      title: '안전한 브라우저 내 로컬 처리',
      content: [
        '사용자의 자막 파일은 서버로 전송되지 않습니다. 웹 브라우저의 최신 기술을 이용하여 사용자의 컴퓨터나 스마트폰에서 직접 연산됩니다.',
        '페이지 로드 후 인터넷 연결을 끊어도 정상적으로 변환이 가능합니다.',
      ],
    },
  },
  faqs: [
    {
      question: 'SRT 파일이란 무엇인가요?',
      answer: '동영상 자막의 시간 정보와 대사를 담고 있는 표준 텍스트 기반 자막 형식입니다.',
    },
    {
      question: '시간과 자막 번호가 완전히 지워지나요?',
      answer: '네, 모든 타임스탬프와 일련번호를 완벽하게 제거하여 순수한 대사만 남깁니다.',
    },
    {
      question: '파일이 서버에 저장되나요?',
      answer: '아닙니다. 모든 과정은 사용자의 브라우저 내에서만 실행되며 서버로 업로드되지 않습니다.',
    },
    {
      question: '한국어 자막도 깨짐 없이 변환되나요?',
      answer: '네, UTF-8 및 다양한 인코딩의 한국어, 한자, 일본어 등을 완벽하게 지원합니다.',
    },
    {
      question: '스마트폰에서도 사용할 수 있나요?',
      answer: '네, 모바일 브라우저에서도 원활하게 작동하도록 최적화되어 있습니다.',
    },
    {
      question: '여러 줄로 된 자막도 지원하나요?',
      answer: '네, 여러 줄 자막의 줄바꿈과 문단 구조를 깔끔하게 유지합니다.',
    },
    {
      question: 'HTML 스타일 태그도 제거되나요?',
      answer: '네, <i>, <b> 등의 서식 태그를 자동으로 정제합니다.',
    },
    {
      question: '이용 요금이 있나요?',
      answer: '완전 무료이며 회원가입이나 로그인 없이 바로 이용하실 수 있습니다.',
    },
  ],
};
