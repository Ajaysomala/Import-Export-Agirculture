const STAMPS = [
  { t1: 'APEDA', t2: 'Registered Exporter' },
  { t1: 'FSSAI', t2: 'Licensed Facility' },
  { t1: 'PHYTO', t2: 'Sanitary Certificate' },
  { t1: 'GLOBALG.A.P.', t2: 'Farm Assurance' },
  { t1: 'ISO 22000', t2: 'Food Safety' },
];

export default function CertificationStamps() {
  return (
    <section className="wrap py-20">
      <div className="max-w-[60ch] mb-11">
        <span className="eyebrow">Certifications</span>
        <h2 className="mt-2 text-3xl font-semibold">Documented at every step.</h2>
        <p className="mt-3 text-ink-soft">
          {/* TODO(CONTENT): confirm current certificate numbers / validity dates
              with your compliance team, and link to scanned certificates if you
              want buyers to verify them directly. */}
          Every shipment travels with the certification your destination market requires.
        </p>
      </div>
      <div className="flex flex-wrap gap-8">
        {STAMPS.map((s, i) => (
          <div
            key={s.t1}
            className="relative flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border-2 border-forest/70 text-center text-forest"
            style={{ transform: `rotate(${[-6, 4, -3, 5, -5][i % 5]}deg)` }}
          >
            <span className="pointer-events-none absolute inset-2 rounded-full border border-dashed border-forest/50" />
            <span className="font-mono text-[0.84rem] font-bold tracking-[0.02em]">{s.t1}</span>
            <span className="mt-1 max-w-[80px] font-mono text-[0.56rem] uppercase tracking-[0.08em]">{s.t2}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
