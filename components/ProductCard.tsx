'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product, ProductAccent } from '@/lib/types';
import { getCopy, type Locale } from '@/lib/i18n';

const ACCENT_STYLES: Record<
  ProductAccent,
  { border: string; stripe: string; wash: string; glow: string; tag: string }
> = {
  gold: {
    border: 'border-gold/45 hover:border-gold/75',
    stripe: 'bg-gold',
    wash: 'from-gold/10',
    glow: 'hover:shadow-[0_0_0_1px_rgba(215,168,74,0.28),0_24px_42px_-18px_rgba(215,168,74,0.28)]',
    tag: 'text-forest border-gold/30 bg-gold/10',
  },
  clay: {
    border: 'border-clay/45 hover:border-clay/75',
    stripe: 'bg-clay',
    wash: 'from-clay/10',
    glow: 'hover:shadow-[0_0_0_1px_rgba(200,109,58,0.26),0_24px_42px_-18px_rgba(200,109,58,0.24)]',
    tag: 'text-forest border-clay/30 bg-clay/10',
  },
  plum: {
    border: 'border-plum/45 hover:border-plum/70',
    stripe: 'bg-plum-dim',
    wash: 'from-plum/10',
    glow: 'hover:shadow-[0_0_0_1px_rgba(126,90,103,0.24),0_24px_42px_-18px_rgba(126,90,103,0.22)]',
    tag: 'text-forest border-plum/30 bg-plum/10',
  },
  lime: {
    border: 'border-lime/45 hover:border-lime/75',
    stripe: 'bg-lime',
    wash: 'from-lime/10',
    glow: 'hover:shadow-[0_0_0_1px_rgba(143,184,79,0.24),0_24px_42px_-18px_rgba(143,184,79,0.22)]',
    tag: 'text-forest border-lime/30 bg-lime/10',
  },
};

const PRODUCE_ICON: Record<string, string> = {
  rice: '🌾',
  onion: '🧅',
  tomato: '🍅',
  mango: '🥭',
  potato: '🥔',
  garlic: '🧄',
  ginger: '🫚',
  grape: '🍇',
  'green-chili': '🌶️',
  banana: '🍌',
  pomegranate: '🍎',
};

export default function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const accent = ACCENT_STYLES[product.accent];
  const copy = getCopy(locale);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -16, y: px * 18 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div className="perspective-container">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
            tilt.x || tilt.y ? 1.03 : 1
          })`,
          transition: 'transform 150ms ease-out',
        }}
        className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-white ${accent.wash} to-stem-dim px-6 py-6 backdrop-blur-sm transition-shadow duration-300 ${accent.border} ${accent.glow} shadow-card min-h-[34rem]`}
      >
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.82),rgba(255,255,255,0.28)_42%,rgba(31,91,55,0.56)_100%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_35%,rgba(10,30,13,0.3)_100%)]" />
        <span
          aria-hidden="true"
          className={`absolute left-0 top-0 h-full w-1.5 ${accent.stripe}`}
        />
        <div className="relative z-10 flex min-h-[32rem] flex-col justify-between text-white">
          <div className="flex items-start justify-between gap-4">
            <span
              aria-hidden="true"
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/16 text-2xl backdrop-blur-md ${accent.tag}`}
            >
              {PRODUCE_ICON[product.id] ?? '🌿'}
            </span>
            <div className="flex flex-col items-end gap-2">
              <div
                className={`flex h-12 min-w-[5rem] items-center justify-center rounded-full border border-white/35 bg-white/18 px-3 text-center font-mono text-[0.55rem] tracking-wide leading-tight text-white backdrop-blur-md`}
              >
                {product.stamp}
              </div>
              <span className="rounded-full border border-white/25 bg-white/12 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/90 backdrop-blur-md">
                {product.category}
              </span>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/28 bg-white/72 p-5 text-forest backdrop-blur-xl shadow-[0_18px_50px_-18px_rgba(10,30,13,0.28)]">
            <h3 className="font-display text-xl font-semibold text-forest">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-forest/72">{product.variety}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{product.desc}</p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-ink-soft">
              <MiniStat label={copy.productCard.origin} value={product.origin} />
              <MiniStat label={copy.productCard.size} value={product.size} />
              <MiniStat label={copy.productCard.packaging} value={product.packaging} />
              <MiniStat label={copy.productCard.availability} value={product.season} />
            </div>

            <Link
              href={{ pathname: '/contact', query: { product: product.name } }}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:gap-2.5 transition-all"
            >
              {copy.productCard.request} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-forest/10 bg-white/85 px-3 py-2">
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-forest/55">{label}</p>
      <p className="mt-1 text-[0.78rem] font-medium text-forest line-clamp-2">{value}</p>
    </div>
  );
}
