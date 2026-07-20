import Link from 'next/link';
import { getCopy, type Locale } from '@/lib/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <footer className="border-t border-forest/10 bg-white">
      <div className="wrap py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <span className="font-display text-lg text-forest">Abhi Global Exports</span>
          <p className="mt-3 text-sm text-ink-soft max-w-[32ch]">
            {copy.footer.description}
          </p>
        </div>
        <div>
          <span className="eyebrow text-forest">{copy.footer.navigate}</span>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><Link href="/products" className="hover:text-forest">{getCopy(locale).nav.products}</Link></li>
            <li><Link href="/about" className="hover:text-forest">{getCopy(locale).nav.about}</Link></li>
            <li><Link href="/contact" className="hover:text-forest">{getCopy(locale).nav.quote}</Link></li>
          </ul>
        </div>
        <div>
          <span className="eyebrow text-forest">{copy.footer.reachUs}</span>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>abhiglobalexports@gmail.com</li>
            {/* TODO(BACKEND): pull the live WhatsApp number from a config
                doc instead of hardcoding, so it can be changed without a
                redeploy */}
            <li>WhatsApp: +91 96034 56927</li>
          </ul>
        </div>
      </div>
      <div className="wrap py-6 border-t border-forest/10 text-xs text-ink-soft">
        © {new Date().getFullYear()} Abhi Global Exports. All rights reserved.
      </div>
    </footer>
  );
}
