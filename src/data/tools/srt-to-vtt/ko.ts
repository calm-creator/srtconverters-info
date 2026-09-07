import type { SrtToVttDetailContent } from './types';

export const koContent: SrtToVttDetailContent = {
  "metaTitle": "무료 SRT VTT 변환기 온라인 – 빠르고 안전한 WebVTT",
  "metaDescription": "SRT 자막 파일을 표준 WebVTT (.vtt) 형식으로 무료 온라인 변환하세요. WEBVTT 헤더 자동 추가와 밀리초 마침표 변환을 100% 브라우저 보안 환경에서 지원합니다.",
  "h1": "SRT VTT 변환기",
  "heroDescription": "SubRip (.srt) 자막을 HTML5 비디오 플레이어, 스트리밍 플랫폼 및 최신 웹 애플리케이션에 최적화된 W3C 표준 WebVTT (.vtt) 형식으로 빠르게 변환하세요. 100% 무료, 설치 없음, 브라우저 내부 즉시 처리.",
  "toolName": "SRT VTT 변환기",
  "ui": {
    "pasteTitle": "SRT 자막 입력 (.srt)",
    "pastePlaceholder": "여기에 SRT 자막 내용을 붙여넣으세요 (예:\n1\n00:00:01,000 --> 00:00:04,000\n동영상 튜토리얼에 오신 것을 환영합니다!)...",
    "orDivider": "또는",
    "uploadTitle": "옵션 2 — SRT 파일 업로드",
    "convertButton": "VTT로 변환",
    "clearButton": "지우기",
    "trySampleButton": "샘플 불러오기",
    "livePreviewTitle": "변환된 WebVTT 출력 (.vtt)",
    "errorNoInput": "변환할 SRT 자막 텍스트를 붙여넣거나 .srt 파일을 업로드해 주세요.",
    "pastedContentSource": "붙여넣은 SRT 내용",
    "dropzoneTitle": "여기에 .srt 파일을 드래그 앤 드롭하세요",
    "dropzoneSubtitle": "또는 기기에서 파일 선택",
    "browseButton": "SRT 파일 선택",
    "dropActiveText": "SRT 파일을 여기에 놓으세요...",
    "fileSelected": "선택된 파일",
    "fileNameLabel": "파일명",
    "fileSizeLabel": "파일 크기",
    "cueCountLabel": "변환된 자막 수",
    "characterCountLabel": "글자 수",
    "downloadAction": ".vtt 다운로드",
    "copyAction": "클립보드에 복사",
    "copiedSuccess": "복사되었습니다!",
    "resetAction": "다른 파일 변환하기",
    "previewTitle": "변환된 WebVTT 미리보기",
    "previewEmpty": "SRT 텍스트를 입력하거나 파일을 업로드하면 변환된 WebVTT (.vtt) 자막이 여기에 즉시 나타납니다.",
    "optionsTitle": "변환 옵션",
    "optIncludeCueNumbers": "자막 번호(큐 식별자) 유지하기",
    "optCleanTags": "미지원 레거시 태그(<font> 등) 자동 제거",
    "errorInvalidFile": "올바른 .srt 자막 파일을 업로드해 주세요.",
    "errorEmptyFile": "입력된 파일 또는 텍스트가 비어 있습니다.",
    "errorParseFailed": "유효한 SRT 자막 블록을 찾을 수 없습니다. 타임스탬프가 00:00:00,000 --> 00:00:00,000 형식인지 확인하세요."
  },
  "sections": {
    "whatIsSrt": {
      "title": "SRT 파일이란 무엇인가요? (SubRip 자막)",
      "content": [
        "SRT(SubRip Subtitle) 파일은 디지털 비디오 역사에서 가장 널리 사용되어 온 일반 텍스트 기반 자막 포맷입니다. 물리적 DVD 미디어에서 자막 텍스트와 타이밍을 추출(리핑)하던 윈도우 소프트웨어 SubRip에서 유래하여 데스크톱 미디어 플레이어, TV, 동영상 인코딩 및 전문 편집 소프트웨어의 표준으로 자리 잡았습니다.",
        "구조적으로 SRT 파일은 빈 줄로 구분된 순차적인 자막 블록으로 구성됩니다. 각 블록에는 4가지 기본 구성 요소가 포함됩니다. 순차적인 인덱스 번호(1, 2, 3...), 자막의 시작 및 종료 시점을 나타내는 정확한 타임코드(시:분:초,밀리초 형식: 00:00:01,250 --> 00:00:04,500), 한 줄 이상의 자막 텍스트, 그리고 마지막 빈 줄입니다.",
        "SRT 파일은 구조가 단순하여 VLC Media Player, 팟플레이어, 곰플레이어, Premiere Pro 등 독립형 소프트웨어에서 널리 호환되지만, 현대적인 웹 환경이 구축되기 전에 개발되었습니다. 따라서 브라우저의 HTML5 비디오 태그에서 기본 지원되지 않으며 CSS를 통한 스타일링이나 화면 배치 기능을 제공하지 못합니다."
      ]
    },
    "whatIsVtt": {
      "title": "WebVTT (.vtt) 파일이란 무엇인가요?",
      "content": [
        "WebVTT(Web Video Text Tracks)는 W3C(World Wide Web Consortium)와 WHATWG가 웹 환경을 위해 공식 제정한 오픈 표준 자막 규격입니다. HTML5 사양과 함께 도입되어 Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge 등 모든 최신 웹 브라우저에서 외부 플러그인 없이 기본 지원됩니다.",
        "WebVTT 파일의 가장 큰 특징은 첫 줄에 \"WEBVTT\"라는 식별 헤더가 필수적이라는 점입니다. 이 시그니처 뒤에 제목이나 언어 정보 같은 메타데이터 블록 및 스타일시트를 정의할 수 있으며, 그 뒤에 개별 자막 큐가 이어집니다.",
        "단순한 텍스트 출력을 넘어 WebVTT는 반응형 웹 인터페이스를 위해 설계되었습니다. 수직/수평 배치, 행 위치, 텍스트 정렬, 큐 크기 조절이 가능하며, CSS의 ::cue 가상 요소를 통해 글꼴, 텍스트 그림자, 배경 투명도, 색상 등을 자유롭게 지정할 수 있습니다."
      ]
    },
    "whatIsConverter": {
      "title": "SRT to VTT 변환기란 무엇인가요?",
      "content": [
        "SRT to VTT 변환기는 기존 SubRip (.srt) 포맷의 자막 파일을 웹 표준 규격인 WebVTT (.vtt) 파일로 구문 구조를 변환해 주는 전문 도구입니다. 확장자만 바꾸는 것으로는 해결되지 않는 문법 차이를 완벽히 교정합니다.",
        "변환 과정에서는 첫 줄에 필수적인 WEBVTT 헤더를 추가하고, 밀리초 구분 기호를 쉼표에서 마침표로 변경(예: 00:00:01,500에서 00:00:01.500으로 수정)하며, 웹 호환성을 저해하는 구형 태그를 정리하고 UTF-8 인코딩을 정규화합니다.",
        "본 웹 변환기는 100% 클라이언트 측(브라우저 내부) JavaScript로 동작합니다. 자막 파일이 외부 서버로 업로드되거나 저장되지 않으므로 미공개 영상이나 보안 자막이라도 완벽한 개인정보 보호와 즉각적인 변환 속도를 보장합니다."
      ]
    },
    "srtVsVtt": {
      "title": "SRT와 WebVTT의 주요 차이점",
      "content": [
        "SRT와 WebVTT는 모두 일반 텍스트 기반의 타임코드 자막 형식이지만, 현대 웹 환경과 스트리밍 미디어 지원 방식에서 결정적인 차이를 가집니다.",
        "첫 번째 차이는 필수 헤더입니다. WebVTT는 파일 첫 줄에 반드시 \"WEBVTT\"가 위치해야 하며, 이 헤더가 없으면 브라우저의 HTML5 <track> 파서가 자막을 올바르지 않은 것으로 간주하여 거부합니다. 반면 SRT에는 헤더가 없으며 첫 번째 번호로 시작합니다.",
        "두 번째 차이는 타임스탬프 구분자입니다. SRT는 밀리초를 구분할 때 쉼표(,)를 사용하지만, WebVTT는 표준에 따라 마침표(.)를 사용합니다. 또한 WebVTT는 1시간 미만의 구간에서 시간 단위를 생략한 mm:ss.ttt 표기를 허용합니다.",
        "세 번째 차이는 스타일링과 화면 배치 기능입니다. SRT는 일부 플레이어의 비공식 이탤릭/굵게 태그만 제한적으로 지원하는 반면, WebVTT는 CSS ::cue 선택자를 통한 디자인 커스터마이징, 화면 위치 지정, 챕터 마커 및 메타데이터 연동 기능을 완벽히 지원합니다."
      ]
    },
    "whyConvert": {
      "title": "SRT를 WebVTT로 변환해야 하는 이유",
      "benefits": [
        {
          "title": "HTML5 <video> 완벽 네이티브 지원",
          "description": "외부 자바스크립트 라이브러리나 플러그인 없이 웹 브라우저 표준 <track> 태그를 통해 자막을 직접 재생할 수 있습니다."
        },
        {
          "title": "글로벌 동영상 스트리밍 플랫폼 표준",
          "description": "YouTube, Vimeo, Wistia 및 HLS, DASH 등 최신 미디어 스트리밍 프로토콜에서 표준 자막 규격으로 채택되어 있습니다."
        },
        {
          "title": "모바일 환경에 최적화된 반응형 자막",
          "description": "iOS Safari 및 Android Chrome 환경에서 화면 회전과 다양한 해상도에 맞춰 최적의 가독성을 자동으로 유지합니다."
        },
        {
          "title": "CSS를 통한 자유로운 디자인 맞춤 설정",
          "description": "::cue 선택자를 활용하여 웹사이트의 브랜드 스타일에 맞는 글꼴, 글자 크기, 배경 투명도, 하이라이트 색상을 손쉽게 적용할 수 있습니다."
        },
        {
          "title": "챕터 기능을 통한 영상 탐색 경험 개선",
          "description": "자막뿐만 아니라 강의나 영상의 목차(챕터) 정보로 활용하여 플레이어 탐색 바에 구간 마커를 추가할 수 있습니다."
        },
        {
          "title": "LMS 및 교육 플랫폼 접근성 표준 준수",
          "description": "Moodle, Canvas 등 웹 접근성(WCAG) 규격을 준수해야 하는 교육 관리 시스템(LMS)에서 공식 자막 규격으로 요구됩니다."
        }
      ]
    },
    "howToConvert": {
      "title": "SRT를 VTT로 변환하는 간단한 3단계",
      "steps": [
        {
          "title": "SRT 자막 붙여넣기 또는 파일 업로드",
          "description": "위의 텍스트 상자에 SRT 내용을 직접 붙여넣거나 점선 영역을 클릭/드래그하여 .srt 파일을 불러오세요."
        },
        {
          "title": "실시간 자동 변환 처리",
          "description": "입력 즉시 브라우저 내부에서 실시간으로 구문 분석이 실행되어 1초도 안 되는 시간에 완벽한 WebVTT로 변환됩니다."
        },
        {
          "title": "VTT 파일 다운로드 또는 복사",
          "description": "미리보기 창에서 변환 결과를 확인하고 \".vtt 다운로드\" 버튼을 눌러 저장하거나 클립보드에 복사해 사용하세요."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "자주 발생하는 SRT·VTT 오류와 해결 방법",
      "items": [
        {
          "title": "타임스탬프 쉼표로 인한 로드 실패",
          "description": "확장자만 .vtt로 바꾼 경우 00:00:01,000 형태의 쉼표가 남아 있어 브라우저가 타임코드를 읽지 못합니다. 본 도구를 통해 마침표(00:00:01.500)로 변환해야 합니다."
        },
        {
          "title": "WEBVTT 헤더 누락",
          "description": "첫 번째 줄에 \"WEBVTT\" 선언이 없으면 HTML5 비디오 플레이어가 파일을 유효하지 않은 것으로 간주합니다. 본 도구는 헤더를 자동으로 추가합니다."
        },
        {
          "title": "인코딩 불일치로 인한 한글 깨짐 현상",
          "description": "과거 ANSI나 EUC-KR로 저장된 SRT 파일은 브라우저에서 글자가 깨질 수 있습니다. 본 변환기는 텍스트를 UTF-8 규격으로 정규화하여 저장합니다."
        },
        {
          "title": "타임스탬프 시간 역전 오류",
          "description": "종료 시간이 시작 시간보다 앞선 경우 동영상 플레이어가 자막을 건너뛸 수 있습니다. 자막 편집기를 통해 시간 순서를 바로잡으세요."
        },
        {
          "title": "자막 블록 사이 빈 줄 누락",
          "description": "자막 큐 사이에 빈 줄이 없으면 여러 자막이 하나로 뭉쳐서 화면에 표시됩니다. 각 큐 사이에는 항상 한 줄의 공백이 필요합니다."
        }
      ]
    },
    "html5VideoGuide": {
      "title": "HTML5 <video>에서 WebVTT 자막 사용하는 방법",
      "description": "변환된 WebVTT 파일은 HTML5의 <track> 요소를 활용하여 몇 줄의 코드만으로 웹사이트 동영상에 바로 추가할 수 있습니다.",
      "codeSnippet": "<video controls width=\"800\" height=\"450\" poster=\"thumbnail.jpg\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <source src=\"video.webm\" type=\"video/webm\">\n\n  <!-- WebVTT 자막 트랙 -->\n  <track\n    kind=\"subtitles\"\n    src=\"subtitles-ko.vtt\"\n    srclang=\"ko\"\n    label=\"한국어\"\n    default\n  >\n  <track\n    kind=\"subtitles\"\n    src=\"subtitles-en.vtt\"\n    srclang=\"en\"\n    label=\"English\"\n  >\n\n  귀하의 브라우저는 HTML5 비디오 태그를 지원하지 않습니다.\n</video>",
      "explanation": [
        {
          "term": "kind=\"subtitles\"",
          "description": "트랙의 종류를 지정합니다. 대사 번역 및 일반 자막은 \"subtitles\", 청각 장애인을 위한 효과음 설명 자막은 \"captions\"를 사용합니다."
        },
        {
          "term": "src=\"subtitles-ko.vtt\"",
          "description": "변환된 WebVTT 파일의 URL 경로입니다. 영상과 동일한 도메인에 위치하거나 적절한 CORS 헤더가 설정되어 있어야 합니다."
        },
        {
          "term": "srclang=\"ko\"",
          "description": "자막의 언어 코드(BCP 47 표준)입니다. 한국어는 \"ko\", 영어는 \"en\"으로 지정합니다."
        },
        {
          "term": "label=\"한국어\"",
          "description": "비디오 플레이어의 자막 선택 메뉴에서 사용자가 알아볼 수 있도록 표시되는 언어 이름입니다."
        },
        {
          "term": "default 속성",
          "description": "동영상 재생 시작 시 이 자막 트랙을 기본값으로 자동 활성화하도록 지정합니다."
        }
      ]
    },
    "comparison": {
      "title": "SRT vs WebVTT 상세 비교표",
      "description": "가장 대표적인 두 가지 자막 포맷의 규격, 지원 기능 및 활용 환경을 비교해 보세요.",
      "headers": [
        "비교 항목 / 기능",
        "SRT (SubRip)",
        "WebVTT (Web Video Text Tracks)"
      ],
      "rows": [
        [
          "파일 헤더 요구",
          "불필요 (1번 번호부터 시작)",
          "필수 (첫 줄에 \"WEBVTT\" 선언)"
        ],
        [
          "밀리초 구분 기호",
          "쉼표 (00:00:01,000)",
          "마침표 (00:00:01.000)"
        ],
        [
          "시간 단위 생략",
          "지원 안 함 (항상 00:00:00 필수)",
          "지원함 (1시간 미만 시 mm:ss.ttt 표기 가능)"
        ],
        [
          "CSS 스타일링",
          "지원 안 함 (일부 비공식 태그만 지원)",
          "완벽 지원 (::cue 선택자, 색상, 배경 등)"
        ],
        [
          "화면 위치 지정",
          "지원 안 함 (하단 중앙 고정)",
          "지원함 (line, position, align, size)"
        ],
        [
          "HTML5 <video> 재생",
          "지원 안 함 (JS 파싱 필수)",
          "완벽 지원 (모든 최신 브라우저 기본 내장)"
        ],
        [
          "챕터(목차) 지원",
          "지원 안 함",
          "지원함 (kind=\"chapters\"로 영상 탐색 바 마커 생성)"
        ],
        [
          "메타데이터 연동",
          "지원 안 함",
          "지원함 (kind=\"metadata\"로 JSON 데이터 전송 가능)"
        ],
        [
          "표준 문자 인코딩",
          "공식 표준 없음 (ANSI, UTF-8 혼용)",
          "엄격하게 UTF-8 표준 규격 적용"
        ],
        [
          "주요 추천 용도",
          "데스크톱 플레이어(VLC), 오프라인 영상 편집",
          "웹사이트, 웹 비디오 스트리밍, 온라인 강의"
        ]
      ]
    },
    "privacy": {
      "title": "100% 브라우저 기반의 철저한 개인정보 보호",
      "content": [
        "저희 SRT to VTT 변환기는 100% 브라우저 내부 기술(HTML5 File API 및 JavaScript 엔진)만으로 구동됩니다. 업로드된 파일이나 입력된 자막 텍스트가 외부 원격 서버로 전송되는 일은 전혀 없습니다.",
        "파일 파싱, 헤더 추가, 타임스탬프 치환, 다운로드 생성까지 모든 작업이 사용자의 기기 메모리에서 직접 실행됩니다. 웹페이지를 로드한 후에는 인터넷 연결을 끊어도 오프라인 상태에서 변환이 가능합니다.",
        "따라서 미공개 영상 시나리오, 사내 보안 교육 자료, 개인 소장 영상 등 민감한 자막 파일이라도 데이터 유출 염려 없이 안심하고 안전하게 변환하실 수 있습니다."
      ]
    }
  },
  "faqs": [
    {
      "question": "SRT와 VTT의 가장 큰 차이점은 무엇인가요?",
      "answer": "WebVTT는 HTML5 웹 비디오 표준을 위해 설계되었습니다. 첫 줄에 \"WEBVTT\" 헤더가 필수이며, 타임스탬프의 밀리초 구분 기호로 쉼표 대신 마침표를 사용합니다. 또한 CSS 스타일 지정 및 화면 위치 조절을 기본 지원합니다."
    },
    {
      "question": "파일 확장자만 .srt에서 .vtt로 바꾸면 작동하지 않나요?",
      "answer": "작동하지 않습니다. 확장자만 변경하더라도 내부 타임스탬프가 쉼표(00:00:01,000)로 남아 있고 필수 WEBVTT 헤더가 없기 때문에 브라우저가 문법 오류로 처리하여 자막을 표시하지 않습니다. 전용 변환기를 사용해야 합니다."
    },
    {
      "question": "파일 크기나 하루 변환 횟수에 제한이 있나요?",
      "answer": "제한이 없습니다. 모든 변환이 사용자의 브라우저 로컬 메모리에서 처리되므로 파일 크기나 개수에 관계없이 완전 무료로 무제한 이용하실 수 있습니다."
    },
    {
      "question": "변환된 VTT 파일을 YouTube나 Vimeo에 업로드할 수 있나요?",
      "answer": "네, 완벽히 지원됩니다. YouTube, Vimeo, Facebook, Wistia 등 대부분의 동영상 플랫폼은 WebVTT 형식을 표준 규격으로 채택하고 있습니다."
    },
    {
      "question": "한글이나 특수문자가 깨지지 않나요?",
      "answer": "깨지지 않습니다. 본 도구는 UTF-8 표준 인코딩을 기준으로 텍스트를 처리하고 저장하므로 한글, 한자, 특수기호, 이모지 등이 완벽하게 보존됩니다."
    },
    {
      "question": "자막 색상이나 글자 크기, 위치를 변경할 수 있나요?",
      "answer": "네, 가능합니다. WebVTT는 CSS 스타일을 지원하므로 웹페이지 CSS에서 \"::cue { color: #ffeb3b; }\"와 같이 스타일을 주거나, 큐 라인에 \"line:10%\"를 부여해 상단에 띄울 수 있습니다."
    },
    {
      "question": "변환 시 내 자막 내용이 서버에 저장되나요?",
      "answer": "전혀 저장되지 않습니다. 모든 과정이 사용자의 브라우저 내부에서만 실행되므로 보안이 중요한 문서나 개인 자막도 안전하게 변환하실 수 있습니다."
    },
    {
      "question": "스마트폰이나 태블릿에서도 변환할 수 있나요?",
      "answer": "네, 아이폰의 사파리(Safari), 안드로이드의 크롬(Chrome)을 비롯한 모든 최신 모바일 브라우저에서 편리하게 사용하실 수 있습니다."
    }
  ]
};
