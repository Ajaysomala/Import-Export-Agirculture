'use client';

import { useState } from 'react';

const ITEMS = [
  {
    q: "What's the minimum order quantity?",
    a: 'Minimums vary by product — typically one 20ft reefer container for produce and one full container load for rice. Tell us your target volume in the quote form and we\u2019ll confirm what\u2019s workable.',
  },
  {
    q: 'How do you handle shipping and cold chain?',
    a: "Perishables are pre-cooled and loaded into temperature-set reefer containers matched to each product's transit time. Rice and grains ship in standard containers with moisture-controlled packing.",
  },
  {
    q: 'Which certificates come with each shipment?',
    a: 'Every consignment ships with a phytosanitary certificate, certificate of origin, and commercial invoice. Additional certificates (GlobalG.A.P., ISO 22000) are available on request.',
  },
  {
    q: 'Can I get samples before placing an order?',
    a: "Yes — courier samples are available for rice and shelf-stable produce. Mention this in your quote request and we'll arrange dispatch.",
  },
  {
    q: 'How will I hear back after submitting a quote?',
    a: 'Submitting the quote form sends your request straight to our export desk over WhatsApp and email. We reply to quote requests within one business day.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="wrap py-20">
      <div className="max-w-[60ch] mb-11">
        <span className="eyebrow">Frequently Asked</span>
        <h2 className="mt-2 text-3xl font-semibold">Good to know before you order.</h2>
      </div>
      <div className="divide-y divide-forest/10 rounded-2xl border border-forest/10 bg-white shadow-card">
        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="font-display text-base font-semibold text-forest">{item.q}</span>
                <span aria-hidden="true" className="font-mono text-lg text-clay">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
