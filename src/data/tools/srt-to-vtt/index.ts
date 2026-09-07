import type { Locale } from '../../../i18n/locales';
import type { SrtToVttDetailContent } from './types';
import { enContent } from './en';
import { ptContent } from './pt';
import { esContent } from './es';
import { koContent } from './ko';
import { viContent } from './vi';
import { idContent } from './id';
import { jaContent } from './ja';
import { frContent } from './fr';
import { deContent } from './de';
import { arContent } from './ar';

export type { SrtToVttDetailContent };

export const srtToVttData: Record<Locale, SrtToVttDetailContent> = {
  en: enContent,
  pt: ptContent,
  es: esContent,
  ko: koContent,
  vi: viContent,
  id: idContent,
  ja: jaContent,
  fr: frContent,
  de: deContent,
  ar: arContent,
};
