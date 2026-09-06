export const LOCALES = ['en', 'pt', 'es', 'ko', 'vi', 'id', 'ja', 'fr', 'de', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleMeta {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  langTag: string;
}

export const LOCALES_META: Record<Locale, LocaleMeta> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    langTag: 'en',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    dir: 'ltr',
    langTag: 'pt',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    dir: 'ltr',
    langTag: 'es',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    dir: 'ltr',
    langTag: 'ko',
  },
  vi: {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    dir: 'ltr',
    langTag: 'vi',
  },
  id: {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    dir: 'ltr',
    langTag: 'id',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    dir: 'ltr',
    langTag: 'ja',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    dir: 'ltr',
    langTag: 'fr',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    dir: 'ltr',
    langTag: 'de',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    langTag: 'ar',
  },
};

export function isLocale(locale: string): locale is Locale {
  return (LOCALES as readonly string[]).includes(locale);
}
