import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import { getCopy, type Locale } from '@/lib/i18n';

export default function Navbar({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-white/80 backdrop-blur-xl">
      <nav className="wrap flex items-center justify-between gap-4 py-4 flex-wrap">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-leaf to-gold font-display text-lg font-semibold text-cream ring-1 ring-forest/10 shadow-sm">
            A
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-forest">
              Abhi Global Exports
            </span>
            <span className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-forest/70">
              Farm to Freight
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-7 text-sm font-medium text-ink-soft">
          <Link href="/products" className="hover:text-forest transition-colors">{copy.nav.products}</Link>
          <Link href="/about" className="hover:text-forest transition-colors">{copy.nav.about}</Link>
          <Link href="/contact" className="hover:text-forest transition-colors">{copy.nav.contact}</Link>
          {/* TODO(BACKEND): swap for real auth state — show "My Account" when
              a Firebase Auth session exists, else "Sign in" */}
          <Link href="/admin" className="hover:text-forest transition-colors hidden sm:inline">
            {copy.nav.signIn}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSelector locale={locale} />
          <Link
            href="/contact"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:-translate-y-0.5"
          >
            {copy.nav.quote}
          </Link>
        </div>
      </nav>
    </header>
  );
}
