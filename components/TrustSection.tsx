'use client';

import type { SiteCopy } from '@/lib/i18n';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function TrustSection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="wrap py-20">
      <div className="max-w-[60ch] mb-11">
        <span className="eyebrow">{copy.trust.eyebrow}</span>
        <h2 className="mt-2 text-3xl font-semibold">{copy.trust.title}</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {copy.trust.items.map((item, i) => (
          <TrustCard key={item.title} title={item.title} body={item.body} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}

function TrustCard({ title, body, delay }: { title: string; body: string; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border border-forest/10 bg-white p-5 shadow-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-display text-base font-semibold text-forest">{title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{body}</p>
    </div>
  );
}
