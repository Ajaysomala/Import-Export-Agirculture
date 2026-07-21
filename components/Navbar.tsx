import Link from 'next/link';
import type { SiteCopy } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur">
      <nav className="wrap flex items-center justify-between gap-4 py-4 flex-wrap">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest font-display text-lg font-semibold text-cream">
            A
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-forest">Abhi Global Exports</span>
            <span className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-gold-dim">Farm to Freight</span>
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-ink-soft">
          <Link href="/products" className="hover:text-forest transition-colors">{copy.nav.products}</Link>
          <Link href="/about" className="hover:text-forest transition-colors">{copy.nav.about}</Link>
          <Link href="/contact" className="hover:text-forest transition-colors">{copy.nav.contact}</Link>
          <Link href="/admin" className="hover:text-forest transition-colors hidden sm:inline">{copy.nav.signIn}</Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link
            href="/contact"
            className="rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:-translate-y-0.5"
          >
            {copy.nav.getQuote}
          </Link>
        </div>
      </nav>
    </header>
  );
}
