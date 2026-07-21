import Link from 'next/link';
import type { SiteCopy } from '@/lib/i18n';

export default function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="border-t border-forest/10 bg-forest-dark text-cream">
      <div className="wrap py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <span className="font-display text-lg text-cream">Abhi Global Exports</span>
          <p className="mt-3 text-sm text-cream/60 max-w-[32ch]">{copy.footer.tagline}</p>
        </div>
        <div>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-gold">{copy.footer.navigate}</span>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li><Link href="/products" className="hover:text-gold">{copy.nav.products}</Link></li>
            <li><Link href="/about" className="hover:text-gold">{copy.nav.about}</Link></li>
            <li><Link href="/contact" className="hover:text-gold">{copy.nav.getQuote}</Link></li>
          </ul>
        </div>
        <div>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-gold">{copy.footer.reach}</span>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>abhiglobalexports@gmail.com</li>
            <li>WhatsApp: +91 96034 56927</li>
          </ul>
        </div>
      </div>
      <div className="wrap py-6 border-t border-cream/10 text-xs text-cream/40">
        © {new Date().getFullYear()} Abhi Global Exports. All rights reserved.
      </div>
    </footer>
  );
}
