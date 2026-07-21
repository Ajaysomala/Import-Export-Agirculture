import { en } from './dict/en';
import { ar } from './dict/ar';
import { fr } from './dict/fr';
import { es } from './dict/es';
import { de } from './dict/de';
import { zh } from './dict/zh';
import { SiteCopy } from './types';
import { Locale } from './locales';

export * from './locales';
export type { SiteCopy };

const dict: Record<Locale, SiteCopy> = { en, ar, fr, es, de, zh };

export function getCopy(locale: Locale): SiteCopy {
  return dict[locale] ?? dict.en;
}
