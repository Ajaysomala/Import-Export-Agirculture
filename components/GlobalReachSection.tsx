'use client';

import type { SiteCopy } from '@/lib/i18n';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function GlobalReachSection({ copy }: { copy: SiteCopy }) {
  return (
    <section className="relative overflow-hidden border-t border-forest/10 bg-white py-20">
      <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="eyebrow">{copy.globalReach.eyebrow}</span>
          <h2 className="mt-2 text-3xl font-semibold">{copy.globalReach.title}</h2>
          <p className="mt-4 max-w-[52ch] text-ink-soft">{copy.globalReach.body}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {copy.globalReach.lanes.map((lane, i) => (
            <LaneCard key={lane.title} icon={lane.icon} title={lane.title} body={lane.body} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LaneCard({
  icon, title, body, delay,
}: { icon: 'gulf' | 'europe' | 'sea' | 'processing'; title: string; body: string; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border border-forest/10 bg-white p-5 shadow-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-forest/[0.06] text-forest">
        <LaneIcon type={icon} />
      </div>
      <h3 className="font-display text-lg font-semibold text-forest">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}

function LaneIcon({ type }: { type: 'gulf' | 'europe' | 'sea' | 'processing' }) {
  const common = {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  };
  switch (type) {
    case 'gulf':
      return (
        <svg {...common}>
          <path d="M3 16h18l-2 4H5l-2-4Z" />
          <path d="M6 16V8l6-4 6 4v8" />
          <path d="M12 4v12" />
        </svg>
      );
    case 'europe':
      return (
        <svg {...common}>
          <path d="M12 2v20M4.5 7l15 10M19.5 7l-15 10" />
          <path d="M12 2 9.5 4.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5" />
        </svg>
      );
    case 'sea':
      return (
        <svg {...common}>
          <path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" />
          <path d="M3 7.5v9L12 21l9-4.5v-9" />
          <path d="M12 12v9" />
        </svg>
      );
    case 'processing':
      return (
        <svg {...common}>
          <path d="M3 21V11l5 3v-3l5 3v-3l5 3v7H3Z" />
          <path d="M7 21v-4M12 21v-4M17 21v-4" />
        </svg>
      );
  }
}
