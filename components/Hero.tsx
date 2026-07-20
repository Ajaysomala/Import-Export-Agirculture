import Link from 'next/link';
import Image from 'next/image';
import FloatingOrbs from './FloatingOrbs';
import { getCopy, type Locale } from '@/lib/i18n';

export default function Hero({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24 bg-[radial-gradient(ellipse_at_top_left,rgba(94,155,99,0.22),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(215,168,74,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(249,252,246,1))]">
      <FloatingOrbs />
      <div className="wrap relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {copy.hero.titleStart}{' '}
            <span className="text-clay">{copy.hero.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg text-ink-soft">
            {copy.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:-translate-y-0.5"
            >
              {copy.hero.primary}
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/80 px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:border-forest/40 hover:text-forest-light"
            >
              {copy.hero.secondary}
            </Link>
          </div>
        </div>

        <div className="hero-image-frame">
          <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/70 p-4 sm:p-5">
            <div className="grid gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white">
                <Image
                  src="/agriculture-hero.svg"
                  alt="Illustrated agriculture landscape with crops, crates, and sunlit fields"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <MiniStat label={copy.hero.statOneLabel} value={copy.hero.statOneValue} />
                <MiniStat label={copy.hero.statTwoLabel} value={copy.hero.statTwoValue} />
                <MiniStat label={copy.hero.statThreeLabel} value={copy.hero.statThreeValue} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-forest/10 bg-white/90 px-4 py-3 shadow-sm">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-forest/70">{label}</p>
      <p className="mt-1 text-sm font-semibold text-forest">{value}</p>
    </div>
  );
}
