const STEPS = [
  { n: '01', title: 'Farm sourcing', body: 'Orders placed with grower collectives against confirmed buyer volumes.' },
  { n: '02', title: 'Grading & sorting', body: 'Size, ripeness, and cosmetic grading to destination-market standard.' },
  { n: '03', title: 'Cold-chain packing', body: "Pre-cooling and export cartons matched to the produce's shelf life." },
  { n: '04', title: 'Certification', body: 'Phytosanitary, FSSAI, and certificate of origin issued per shipment.' },
  { n: '05', title: 'Container loading', body: "Reefer containers set and logged at the produce's required transit temperature." },
  { n: '06', title: 'Port & shipping', body: 'Sea or air freight booked with tracked transit and documentation.' },
  { n: '07', title: 'Customs clearance', body: 'Import paperwork coordinated with your clearing agent at destination.' },
];

export default function ProcessSteps() {
  return (
    <section className="wrap py-20">
      <div className="max-w-[60ch] mb-11">
        <span className="eyebrow">Export Process</span>
        <h2 className="mt-2 text-3xl font-semibold">Farm to foreign port, in seven steps.</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
        {STEPS.map((s) => (
          <div key={s.n} className="relative pt-11">
            <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-clay font-mono text-xs text-clay">
              {s.n}
            </div>
            <h4 className="font-display text-sm font-semibold text-forest">{s.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
