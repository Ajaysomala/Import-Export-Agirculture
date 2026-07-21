export const LOCALES = ['en', 'ar', 'fr', 'es', 'de', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  zh: '中文',
};

// Arabic and Chinese render right-to-left / differently spaced; only Arabic
// needs RTL layout direction.
export const RTL_LOCALES: Locale[] = ['ar'];

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
