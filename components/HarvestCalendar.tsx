const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type Row = { name: string; peak: number[]; avail: number[] };

// Month numbers are 1-indexed (1 = Jan). Keep in sync with lib/data/products.ts
// season copy if products change.
const ROWS: Row[] = [
  { name: 'Basmati & Non-Basmati Rice', peak: [10, 11, 12], avail: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { name: 'Alphonso / Kesar Mango', peak: [3, 4, 5], avail: [2, 6] },
  { name: 'Thompson Seedless Grapes', peak: [1, 2, 3, 4], avail: [] },
  { name: 'Bhagwa Pomegranate', peak: [9, 10, 11, 12, 1], avail: [2, 3, 4] },
  { name: 'Cavendish Banana', peak: [], avail: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { name: 'Red & White Onion', peak: [11, 12, 1, 2], avail: [3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'Tomato', peak: [12, 1, 2, 3], avail: [4, 5, 6, 7, 8, 9, 10, 11] },
  { name: 'Potato', peak: [1, 2, 3], avail: [4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { name: 'Garlic', peak: [2, 3, 4], avail: [1, 5, 6, 7, 8, 9, 10, 11, 12] },
  { name: 'Ginger', peak: [11, 12, 1, 2], avail: [3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'Green Chilli', peak: [10, 11, 12, 1, 2, 3], avail: [4, 5, 6, 7, 8, 9] },
];

export default function HarvestCalendar() {
  return (
    <section className="wrap py-20">
      <div className="max-w-[60ch] mb-11">
        <span className="eyebrow">Signature · Harvest Calendar</span>
        <h2 className="mt-2 text-3xl font-semibold">What&apos;s in season, month by month.</h2>
        <p className="mt-3 text-ink-soft">Plan your order calendar around our produce&apos;s natural growing windows.</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-forest/10 bg-white p-5 shadow-card">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr>
              <th className="w-48"></th>
              {MONTHS.map((m) => (
                <th key={m} className="pb-2 text-center font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-soft/70">
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.name} className="border-t border-forest/5">
                <td className="py-2.5 pr-4 text-sm font-semibold text-forest">{row.name}</td>
                {MONTHS.map((_, i) => {
                  const m = i + 1;
                  const state = row.peak.includes(m) ? 'peak' : row.avail.includes(m) ? 'avail' : 'off';
                  return (
                    <td key={m} className="p-1">
                      <div
                        className={
                          'mx-auto h-4 w-full rounded-sm ' +
                          (state === 'peak' ? 'bg-gold' : state === 'avail' ? 'bg-gold/35' : 'bg-ink/10')
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-6 font-mono text-xs text-ink-soft">
        <Legend swatch="bg-gold" label="Peak harvest" />
        <Legend swatch="bg-gold/35" label="Available" />
        <Legend swatch="bg-ink/10" label="Out of season" />
      </div>
    </section>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="flex items-center gap-2">
      <i className={`inline-block h-3.5 w-3.5 rounded-sm ${swatch}`} /> {label}
    </span>
  );
}
