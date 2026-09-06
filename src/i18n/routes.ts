import { LOCALES, DEFAULT_LOCALE, type Locale } from './locales';

export const SITE_URL = 'https://srtconverters.info';

export interface ToolRouteConfig {
  id: string;
  slugs: Record<Locale, string>;
}

export const TOOL_ROUTES: Record<string, ToolRouteConfig> = {
  'srt-to-txt': {
    id: 'srt-to-txt',
    slugs: {
      en: 'srt-to-txt',
      pt: 'conversor-srt-para-txt',
      es: 'convertidor-srt-a-txt',
      ko: 'srt-txt-변환기',
      vi: 'chuyen-srt-sang-txt',
      id: 'konverter-srt-ke-txt',
      ja: 'srt-txt-変換',
      fr: 'convertisseur-srt-en-txt',
      de: 'srt-in-txt-umwandeln',
      ar: 'محول-srt-إلى-txt',
    },
  },
  'txt-to-srt': {
    id: 'txt-to-srt',
    slugs: {
      en: 'txt-to-srt',
      pt: 'conversor-txt-para-srt',
      es: 'convertidor-txt-a-srt',
      ko: 'txt-srt-변환기',
      vi: 'chuyen-txt-sang-srt',
      id: 'konverter-txt-ke-srt',
      ja: 'txt-srt-変換',
      fr: 'convertisseur-txt-en-srt',
      de: 'txt-in-srt-umwandeln',
      ar: 'محول-txt-إلى-srt',
    },
  },
};

export const PAGE_ROUTES = {
  home: {
    slugs: {
      en: '',
      pt: '',
      es: '',
      ko: '',
      vi: '',
      id: '',
      ja: '',
      fr: '',
      de: '',
      ar: '',
    },
  },
  privacy: {
    slugs: {
      en: 'privacy',
      pt: 'privacy',
      es: 'privacy',
      ko: 'privacy',
      vi: 'privacy',
      id: 'privacy',
      ja: 'privacy',
      fr: 'privacy',
      de: 'privacy',
      ar: 'privacy',
    },
  },
  terms: {
    slugs: {
      en: 'terms',
      pt: 'terms',
      es: 'terms',
      ko: 'terms',
      vi: 'terms',
      id: 'terms',
      ja: 'terms',
      fr: 'terms',
      de: 'terms',
      ar: 'terms',
    },
  },
  about: {
    slugs: {
      en: 'about',
      pt: 'about',
      es: 'about',
      ko: 'about',
      vi: 'about',
      id: 'about',
      ja: 'about',
      fr: 'about',
      de: 'about',
      ar: 'about',
    },
  },
  contact: {
    slugs: {
      en: 'contact',
      pt: 'contact',
      es: 'contact',
      ko: 'contact',
      vi: 'contact',
      id: 'contact',
      ja: 'contact',
      fr: 'contact',
      de: 'contact',
      ar: 'contact',
    },
  },
  tools: {
    slugs: {
      en: 'tools',
      pt: 'tools',
      es: 'tools',
      ko: 'tools',
      vi: 'tools',
      id: 'tools',
      ja: 'tools',
      fr: 'tools',
      de: 'tools',
      ar: 'tools',
    },
  },
} as const;

export type StaticPageId = keyof typeof PAGE_ROUTES;

export const ENGLISH_ONLY_PAGE_IDS = ['privacy', 'terms', 'about', 'contact'] as const;

export function isEnglishOnlyPage(pageId: string): boolean {
  return (ENGLISH_ONLY_PAGE_IDS as readonly string[]).includes(pageId);
}

/**
 * Returns the localized relative path for a tool
 * e.g. /srt-to-txt/ for English, /fr/convertisseur-srt-en-txt/ for French
 */
export function getToolPath(toolId: string, locale: Locale): string {
  const tool = TOOL_ROUTES[toolId];
  if (!tool) {
    throw new Error(`Unknown toolId: "${toolId}"`);
  }
  const slug = tool.slugs[locale];
  if (!slug) {
    throw new Error(`Missing localized slug for tool "${toolId}" and locale "${locale}"`);
  }
  if (locale === DEFAULT_LOCALE) {
    return `/${slug}/`;
  }
  return `/${locale}/${slug}/`;
}

/**
 * Returns the localized relative path for the homepage
 * e.g. / for English, /fr/ for French
 */
export function getHomePath(locale: Locale): string {
  if (locale === DEFAULT_LOCALE) {
    return '/';
  }
  return `/${locale}/`;
}

/**
 * Returns the localized relative path for a static page
 * e.g. /about/ for English, /fr/about/ for French
 * Note: English-only trust pages (privacy, terms, about, contact) always return root English path
 */
export function getPagePath(pageId: StaticPageId, locale: Locale): string {
  if (pageId === 'home') {
    return getHomePath(locale);
  }
  if (isEnglishOnlyPage(pageId)) {
    return `/${pageId}/`;
  }
  const config = PAGE_ROUTES[pageId];
  if (!config) {
    throw new Error(`Unknown pageId: "${pageId}"`);
  }
  const slug = config.slugs[locale];
  if (locale === DEFAULT_LOCALE) {
    return `/${slug}/`;
  }
  return `/${locale}/${slug}/`;
}

/**
 * Finds a tool ID from a given locale and localized slug
 */
export function findToolBySlug(locale: Locale, slug: string): ToolRouteConfig | undefined {
  const decodedSlug = decodeURIComponent(slug);
  for (const tool of Object.values(TOOL_ROUTES)) {
    if (tool.slugs[locale] === slug || tool.slugs[locale] === decodedSlug) {
      return tool;
    }
  }
  return undefined;
}

/**
 * Generate full alternate hreflang URLs (all 10 languages + x-default)
 * Returns an empty array for English-only pages (privacy, terms, about, contact)
 */
export function getHreflangAlternates(
  type: 'tool' | 'page',
  id: string,
  baseSiteUrl: string = SITE_URL
): Array<{ lang: string; href: string }> {
  if (type === 'page' && isEnglishOnlyPage(id)) {
    return [];
  }

  const alternates: Array<{ lang: string; href: string }> = [];

  for (const locale of LOCALES) {
    let path = '';
    if (type === 'tool') {
      path = getToolPath(id, locale);
    } else {
      path = getPagePath(id as StaticPageId, locale);
    }
    alternates.push({
      lang: locale,
      href: `${baseSiteUrl}${path}`,
    });
  }

  // x-default points to default locale (en)
  const defaultPath =
    type === 'tool' ? getToolPath(id, DEFAULT_LOCALE) : getPagePath(id as StaticPageId, DEFAULT_LOCALE);

  alternates.push({
    lang: 'x-default',
    href: `${baseSiteUrl}${defaultPath}`,
  });

  return alternates;
}

/**
 * Generate language switcher links preserving the current page context
 * Returns empty array for English-only pages
 */
export function getLanguageSwitcherLinks(
  type: 'tool' | 'page',
  id: string
): Array<{ locale: Locale; path: string }> {
  if (type === 'page' && isEnglishOnlyPage(id)) {
    return [];
  }

  return LOCALES.map((locale) => ({
    locale,
    path: type === 'tool' ? getToolPath(id, locale) : getPagePath(id as StaticPageId, locale),
  }));
}
