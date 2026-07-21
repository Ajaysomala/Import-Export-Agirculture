'use client';

import Image from 'next/image';
import type { SiteCopy } from '@/lib/i18n';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function AboutReveal({ copy }: { copy: SiteCopy }) {
  const introRef = useScrollReveal<HTMLDivElement>();
  const imagesRef = useScrollReveal<HTMLDivElement>();
  const valuesRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="wrap py-20">
      <div ref={introRef} className="reveal max-w-[60ch]">
        <span className="eyebrow">{copy.about.eyebrow}</span>
        <h1 className="mt-2 text-4xl font-semibold">{copy.about.title}</h1>
        <p className="mt-5 text-ink-soft leading-relaxed">{copy.about.body}</p>
      </div>

      {/* Real photos — farm/packhouse and export shipment. */}
      <div ref={imagesRef} className="reveal mt-14 grid gap-6 sm:grid-cols-2" style={{ transitionDelay: '100ms' }}>
        <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-forest/10 bg-forest/5 shadow-card">
          <Image src="/about/farm.png" alt="" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-forest-dark/80 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-cream backdrop-blur">
            {copy.about.imageOne}
          </figcaption>
        </figure>
        <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-forest/10 bg-forest/5 shadow-card">
          <Image src="/about/shipping.png" alt="" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-forest-dark/80 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-cream backdrop-blur">
            {copy.about.imageTwo}
          </figcaption>
        </figure>
      </div>

      <div ref={valuesRef} className="reveal mt-16 grid gap-6 sm:grid-cols-3" style={{ transitionDelay: '200ms' }}>
        {copy.about.values.map((v) => (
          <div key={v.title} className="rounded-xl border border-forest/10 bg-white p-6 shadow-card">
            <h3 className="font-display text-lg font-semibold text-forest">{v.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
