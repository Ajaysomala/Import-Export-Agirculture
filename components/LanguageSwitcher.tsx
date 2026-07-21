'use client';

import { useRouter } from 'next/navigation';
import { LOCALES, LOCALE_LABELS, type Locale } from '@/lib/i18n';

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();

  function handleChange(next: Locale) {
    document.cookie = `site-language=${next}; path=/; max-age=31536000`;
    router.refresh();
  }

  return (
    <select
      value={locale}
      onChange={(e) => handleChange(e.target.value as Locale)}
      aria-label="Language"
      className="rounded-full border border-forest/15 bg-white px-3 py-1.5 text-xs font-medium text-forest"
    >
      {LOCALES.map((l) => (
        <option key={l} value={l}>
          {LOCALE_LABELS[l]}
        </option>
      ))}
    </select>
  );
}
