'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { localeLabels, locales, type Locale } from '@/lib/i18n';

export default function LanguageSelector({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    document.cookie = `site-language=${nextLocale}; path=/; max-age=31536000`;
    startTransition(() => router.refresh());
  }

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white px-3 py-2 text-xs font-semibold text-forest shadow-sm">
      <span className="hidden sm:inline text-forest/60">Language</span>
      <select
        aria-label="Select language"
        value={locale}
        disabled={pending}
        onChange={handleChange}
        className="bg-transparent text-sm font-semibold text-forest outline-none"
      >
        {locales.map((value) => (
          <option key={value} value={value}>
            {localeLabels[value]}
          </option>
        ))}
      </select>
    </label>
  );
}
