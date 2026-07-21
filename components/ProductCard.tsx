'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product, ProductAccent } from '@/lib/types';
import type { SiteCopy } from '@/lib/i18n';

const ACCENT_STYLES: Record<ProductAccent, { stripe: string; badge: string }> = {
  gold: { stripe: 'bg-gold', badge: 'bg-gold/15 text-gold-dim border-gold/30' },
  clay: { stripe: 'bg-clay', badge: 'bg-clay/15 text-clay-dim border-clay/30' },
  plum: { stripe: 'bg-plum-dim', badge: 'bg-plum/15 text-plum-dim border-plum/30' },
  lime: { stripe: 'bg-lime', badge: 'bg-lime/15 text-lime border-lime/30' },
};

export default function ProductCard({ product, copy }: { product: Product; copy: SiteCopy }) {
  const accent = ACCENT_STYLES[product.accent];

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-card transition-shadow duration-200 hover:shadow-lg">
      <span aria-hidden="true" className={`absolute left-0 top-0 z-10 h-full w-1.5 ${accent.stripe}`} />

      {/* Product illustration — sourced from /public/products/*.svg. These
          are the real, final art (designer-made line illustrations), not
          placeholders — no photography needed here. Swap to a licensed
          product photo later by pointing imageUrl at a .jpg/.png instead. */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest/5">
        <Image
          src={product.imageUrl}
          alt={`${product.name} — ${product.variety}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        />
        <span className={`absolute right-3 top-3 rounded-full border px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] backdrop-blur ${accent.badge}`}>
          {product.stamp}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-soft/70">{product.category}</span>
        <h3 className="mt-1 font-display text-xl font-semibold text-forest">{product.name}</h3>
        <p className="mt-1 text-sm text-clay-dim">{product.variety}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{product.desc}</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
          <MiniStat label={copy.productCard.origin} value={product.origin} />
          <MiniStat label={copy.productCard.size} value={product.size} />
          <MiniStat label={copy.productCard.packaging} value={product.packaging} />
          <MiniStat label={copy.productCard.availability} value={product.season} />
        </div>

        <Link
          href={{ pathname: '/contact', query: { product: product.name } }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:gap-2.5 transition-all"
        >
          {copy.productCard.request} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-forest/10 bg-forest/[0.03] px-3 py-2">
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink-soft/60">{label}</p>
      <p className="mt-1 text-[0.78rem] font-medium text-forest line-clamp-2">{value}</p>
    </div>
  );
}
