import Link from 'next/link';
import type { SiteCopy } from '@/lib/i18n';
import HeroVisual from './HeroVisual';

export default function Hero({ copy }: { copy: SiteCopy }) {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24 bg-[radial-gradient(ellipse_at_top_left,rgba(31,91,55,0.12),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(215,168,74,0.15),transparent_42%)]">
      <div className="wrap relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.3rem]">
            {copy.hero.titleLine1} <span className="text-gold-dim">{copy.hero.titleHighlight}</span>
          </h1>
          <p className="mt-5 max-w-[48ch] text-lg text-ink-soft">{copy.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:-translate-y-0.5"
            >
              {copy.hero.ctaQuote}
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:border-forest"
            >
              {copy.hero.ctaProducts}
            </Link>
          </div>
        </div>

        <div className="h-[420px] sm:h-[480px] lg:h-[520px]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
