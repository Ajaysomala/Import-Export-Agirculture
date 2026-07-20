import Link from 'next/link';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import { getProducts } from '@/lib/data/products';
import { getCopy } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/locale';

export default async function HomePage() {
  const locale = await getLocaleFromCookies();
  const copy = getCopy(locale);
  const products = await getProducts();
  const featured = products.slice(0, 6);

  return (
    <>
      <Hero locale={locale} />

      <section className="wrap py-20">
        <div className="section-head max-w-[60ch] mb-11">
          <span className="eyebrow">{copy.home.featuredEyebrow}</span>
          <h2 className="mt-2 text-3xl font-semibold">{copy.home.featuredTitle}</h2>
          <p className="mt-3 text-ink-soft">
            {copy.home.featuredBody}
          </p>
        </div>
        <ProductGrid products={featured} locale={locale} />
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-6 py-3 text-sm font-semibold text-forest transition-colors hover:border-forest/35 hover:text-forest-light"
          >
            {copy.home.fullCatalog} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-forest/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(236,246,228,0.95))] py-20">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">{copy.home.whyEyebrow}</span>
            <h2 className="mt-2 text-3xl font-semibold">{copy.home.whyTitle}</h2>
            <p className="mt-4 max-w-[52ch] text-ink-soft">
              {copy.home.whyBody}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InfoCard title={copy.home.infoOneTitle} body={copy.home.infoOneBody} accent="border-gold/40" />
            <InfoCard title={copy.home.infoTwoTitle} body={copy.home.infoTwoBody} accent="border-stem/40" />
            <InfoCard title={copy.home.infoThreeTitle} body={copy.home.infoThreeBody} accent="border-clay/40" />
            <InfoCard title={copy.home.infoFourTitle} body={copy.home.infoFourBody} accent="border-soil/40" />
          </div>
        </div>
      </section>

      <section className="wrap py-20">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <span className="eyebrow">Global Trade Reach</span>
            <h2 className="text-3xl font-semibold">
              India-sourced agriculture for kitchens, retailers, and processors worldwide.
            </h2>
            <p className="max-w-[58ch] text-ink-soft">
              We package export programs around the buying patterns of Gulf distributors, European wholesalers, and Southeast Asian importers. That means source selection, grading, humidity control, and carton spec all align with the destination market before a shipment leaves India.
            </p>
            <p className="max-w-[58ch] text-ink-soft">
              From bulk grains and fresh vegetables to premium fruit and spice roots, the catalog is built for international trade lanes that need repeatable quality and clean logistics.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <TradeLaneCard icon="gulf" title="Gulf import programs" body="Fast-turn rice, onion, tomato, banana, and pomegranate shipments suited to foodservice and retail buyers." />
            <TradeLaneCard icon="europe" title="European wholesale" body="Grade-controlled fruit, spice roots, and premium table produce for long-haul refrigerated supply." />
            <TradeLaneCard icon="sea" title="Southeast Asia" body="Consistent cartons, stable sizing, and seasonally blended supply plans for regional importers." />
            <TradeLaneCard icon="processing" title="Processing buyers" body="Potato, garlic, ginger, and chilli supply for processors, manufacturers, and bulk resellers." />
          </div>
        </div>
      </section>

      <section className="wrap py-20 text-center">
        <h2 className="text-3xl font-semibold">{copy.home.readyTitle}</h2>
        <p className="mx-auto mt-3 max-w-[46ch] text-ink-soft">
          {copy.home.readyBody}
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:-translate-y-0.5"
        >
          {copy.home.readyButton}
        </Link>
      </section>
    </>
  );
}

function InfoCard({ title, body, accent }: { title: string; body: string; accent: string }) {
  return (
    <div className={`glass-panel rounded-xl border bg-white p-5 ${accent}`}>
      <h3 className="font-display text-base font-semibold text-forest">{title}</h3>
      <p className="mt-1.5 text-sm text-ink-soft">{body}</p>
    </div>
  );
}

function TradeLaneCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: 'gulf' | 'europe' | 'sea' | 'processing';
}) {
  return (
    <div className="rounded-2xl border border-forest/10 bg-white/84 p-5 shadow-card">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(94,155,99,0.14),rgba(215,168,74,0.14))] text-forest">
        <LaneIcon type={icon} />
      </div>
      <h3 className="font-display text-lg font-semibold text-forest">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}

function LaneIcon({ type }: { type: 'gulf' | 'europe' | 'sea' | 'processing' }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'gulf': // dhow / freight vessel — sea trade to the Gulf
      return (
        <svg {...common}>
          <path d="M3 16h18l-2 4H5l-2-4Z" />
          <path d="M6 16V8l6-4 6 4v8" />
          <path d="M12 4v12" />
        </svg>
      );
    case 'europe': // snowflake — cold-chain / refrigerated produce
      return (
        <svg {...common}>
          <path d="M12 2v20M4.5 7l15 10M19.5 7l-15 10" />
          <path d="M12 2 9.5 4.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5" />
        </svg>
      );
    case 'sea': // shipping carton — cartons/packaging for SEA importers
      return (
        <svg {...common}>
          <path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" />
          <path d="M3 7.5v9L12 21l9-4.5v-9" />
          <path d="M12 12v9" />
        </svg>
      );
    case 'processing': // factory — processors/manufacturers
      return (
        <svg {...common}>
          <path d="M3 21V11l5 3v-3l5 3v-3l5 3v7H3Z" />
          <path d="M7 21v-4M12 21v-4M17 21v-4" />
        </svg>
      );
  }
}
