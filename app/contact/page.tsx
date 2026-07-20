import { Suspense } from 'react';
import QuoteForm from '@/components/QuoteForm';
import { getCopy } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/locale';

export const metadata = {
  title: 'Get a Quote | Abhi Global Exports',
  description: 'Request wholesale pricing and availability for rice, onion, tomato, mango, and organic produce.',
};

export default async function ContactPage() {
  const locale = await getLocaleFromCookies();
  const copy = getCopy(locale);

  return (
    <section className="wrap py-20">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">{copy.contactPage.eyebrow}</span>
          <h1 className="mt-2 text-4xl font-semibold">{copy.contactPage.title}</h1>
          <p className="mt-4 max-w-[46ch] text-ink-soft">
            {copy.contactPage.body}
          </p>
          <div className="mt-8 space-y-3 text-sm text-ink-soft">
            <p>{copy.contactPage.emailLabel}: abhiglobalexports@gmail.com</p>
            <p>{copy.contactPage.whatsappLabel}: +91 96034 56927</p>
          </div>
        </div>

        <div className="rounded-2xl border border-forest/10 bg-white/80 p-7 shadow-card">
          <Suspense fallback={null}>
            <QuoteForm locale={locale} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
