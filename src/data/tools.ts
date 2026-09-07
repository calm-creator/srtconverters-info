import type { Locale } from '../i18n/locales';
import { TOOL_ROUTES, getToolPath } from '../i18n/routes';
import { srtToTxtData } from './tools/srt-to-txt';
import { txtToSrtData } from './tools/txt-to-srt';
import { srtToVttData } from './tools/srt-to-vtt';

export interface ToolSummary {
  id: string;
  name: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  icon: string;
}

export const TOOLS_REGISTRY: Record<string, ToolSummary> = {
  'srt-to-txt': {
    id: 'srt-to-txt',
    name: {
      en: 'SRT to TXT Converter',
      pt: 'Conversor SRT para TXT',
      es: 'Convertidor SRT a TXT',
      ko: 'SRT TXT 변환기',
      vi: 'Chuyển đổi SRT sang TXT',
      id: 'Konverter SRT ke TXT',
      ja: 'SRT TXT 変換ツール',
      fr: 'Convertisseur SRT en TXT',
      de: 'SRT in TXT Umwandler',
      ar: 'محول SRT إلى TXT',
    },
    shortDescription: {
      en: 'Extract plain text from SRT subtitle files. Strips timestamps and subtitle numbering automatically.',
      pt: 'Extraia texto simples de arquivos de legenda SRT. Remove carimbos de data/hora e numeração automaticamente.',
      es: 'Extraiga texto sin formato de archivos de subtítulos SRT. Elimina marcas de tiempo y numeración automáticamente.',
      ko: 'SRT 자막 파일에서 순수 텍스트를 추출합니다. 타임스탬프와 자막 번호를 자동으로 제거합니다.',
      vi: 'Trích xuất văn bản thuần túy từ tệp phụ đề SRT. Tự động xóa mốc thời gian và số thứ tự phụ đề.',
      id: 'Ekstrak teks biasa dari file subtitle SRT. Menghapus timestamp dan penomoran subtitle secara otomatis.',
      ja: 'SRT字幕ファイルからテキストのみを抽出。タイムコードと字幕番号を自動で削除します。',
      fr: 'Extrayez le texte brut de vos fichiers de sous-titres SRT. Supprime automatiquement les horodatages et numéros.',
      de: 'Reinen Text aus SRT-Untertiteldateien extrahieren. Entfernt Zeitstempel und Nummerierungen automatisch.',
      ar: 'استخراج نص نقي من ملفات ترجمة SRT. يزيل التوقيت الزمني وأرقام المقاطع تلقائياً.',
    },
    icon: 'text-file',
  },
  'txt-to-srt': {
    id: 'txt-to-srt',
    name: {
      en: 'TXT to SRT Converter',
      pt: 'Conversor TXT para SRT',
      es: 'Convertidor TXT a SRT',
      ko: 'TXT SRT 변환기',
      vi: 'Chuyển đổi TXT sang SRT',
      id: 'Konverter TXT ke SRT',
      ja: 'TXT SRT 変換ツール',
      fr: 'Convertisseur TXT en SRT',
      de: 'TXT in SRT Umwandler',
      ar: 'محول TXT إلى SRT',
    },
    shortDescription: {
      en: 'Convert plain text scripts and transcripts into formatted SRT subtitle files with automatic, customizable timestamps.',
      pt: 'Converta roteiros e transcrições em arquivos de legenda SRT formatados com carimbos de data/hora automáticos.',
      es: 'Convierta guiones y transcripciones en subtítulos SRT formateados con marcas de tiempo automáticas.',
      ko: '일반 텍스트 스크립트와 녹취록을 자동 타임스탬프가 적용된 표준 SRT 자막 파일로 변환합니다.',
      vi: 'Chuyển đổi kịch bản và bản ghi thoại thành tệp phụ đề SRT chuẩn với mốc thời gian tự động tùy chỉnh.',
      id: 'Ubah skrip teks dan transkrip menjadi file subtitle SRT yang rapi dengan timestamp otomatis.',
      ja: 'テキスト原稿や文字起こしデータを、自動タイムコード付きの標準SRT字幕ファイルに変換します。',
      fr: 'Convertissez des scripts et transcriptions en sous-titres SRT formatés avec minutage automatique.',
      de: 'Wandeln Sie Textskripte und Transkripte in formatierte SRT-Untertitel mit automatischen Zeitstempeln um.',
      ar: 'تحويل النصوص المكتوبة والتفريغ الصوتي إلى ملفات ترجمة SRT قياسية مع توقيت زمني تلقائي.',
    },
    icon: 'srt-file',
  },
  'srt-to-vtt': {
    id: 'srt-to-vtt',
    name: {
      en: 'SRT to VTT Converter',
      pt: 'Conversor SRT para VTT',
      es: 'Convertidor SRT a VTT',
      ko: 'SRT VTT 변환기',
      vi: 'Chuyển đổi SRT sang VTT',
      id: 'Konverter SRT ke VTT',
      ja: 'SRT VTT 変換ツール',
      fr: 'Convertisseur SRT en VTT',
      de: 'SRT in VTT Umwandler',
      ar: 'محول SRT إلى VTT',
    },
    shortDescription: {
      en: 'Convert SRT subtitles to WebVTT (.vtt) format for HTML5 video, streaming, and modern players. 100% private in-browser tool.',
      pt: 'Converta legendas SRT para o formato WebVTT (.vtt) compatível com vídeo HTML5 e streaming. Totalmente seguro no navegador.',
      es: 'Convierta subtítulos SRT a formato WebVTT (.vtt) para vídeo HTML5 y streaming con total privacidad en su navegador.',
      ko: 'SRT 자막을 HTML5 동영상 및 스트리밍에 최적화된 표준 WebVTT(.vtt)로 변환합니다. 100% 브라우저 내 보안 처리.',
      vi: 'Chuyển đổi phụ đề SRT sang định dạng WebVTT (.vtt) chuẩn cho video HTML5 và streaming. Hoạt động 100% trên trình duyệt.',
      id: 'Ubah subtitle SRT ke format WebVTT (.vtt) untuk video HTML5 dan streaming. 100% privat dan aman di browser.',
      ja: 'SRT字幕をHTML5動画やWeb配信に最適な標準WebVTT（.vtt）形式に変換。ブラウザ完結で安全・高速です。',
      fr: 'Convertissez des sous-titres SRT au format WebVTT (.vtt) pour la vidéo HTML5 et le streaming. 100% confidentiel dans le navigateur.',
      de: 'Wandeln Sie SRT-Untertitel in das WebVTT-Format (.vtt) für HTML5-Videos und Streaming um. 100% datenschutzfreundlich.',
      ar: 'تحويل ملفات ترجمة SRT إلى صيغة WebVTT القياسية لمشغلات فيديو HTML5 والويب. مجاني وآمن 100% داخل المتصفح.',
    },
    icon: 'vtt-file',
  },
};

export function getAllTools(): ToolSummary[] {
  return Object.values(TOOLS_REGISTRY);
}

export function getToolData(toolId: string, locale: Locale) {
  if (toolId === 'srt-to-txt') {
    return srtToTxtData[locale] || srtToTxtData.en;
  }
  if (toolId === 'txt-to-srt') {
    return txtToSrtData[locale] || txtToSrtData.en;
  }
  if (toolId === 'srt-to-vtt') {
    return srtToVttData[locale] || srtToVttData.en;
  }
  return null;
}

