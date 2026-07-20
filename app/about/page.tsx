import { getCopy } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/locale';

export const metadata = {
  title: 'About | Abhi Global Exports',
  description: 'Learn about Abhi Global Exports — sourcing and shipping grains, fresh produce, and organics from India worldwide.',
};

export default async function AboutPage() {
  const locale = await getLocaleFromCookies();
  const copy = getCopy(locale);

  return (
    <section className="wrap py-20">
      <div className="max-w-[60ch]">
        <span className="eyebrow">{copy.aboutPage.eyebrow}</span>
        <h1 className="mt-2 text-4xl font-semibold">
          {copy.aboutPage.title}
        </h1>
        <p className="mt-5 text-ink-soft leading-relaxed">
          {copy.aboutPage.body}
        </p>
      </div>

      {/*
        TODO(CONTENT): the two blocks below are placeholders for the
        licensed photography discussed with the client (farm/packhouse
        imagery). Once licensed images are purchased, replace the
        <div className="img-placeholder"> blocks with:

          import Image from 'next/image';
          <Image src="/images/about-1.jpg" alt="..." fill className="object-cover" />

        Keep alt text descriptive for SEO + accessibility.
      */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-forest/10 bg-white flex items-center justify-center shadow-card">
          <span className="font-mono text-xs text-cream/40">
            [ {copy.aboutPage.imageOne} ]
          </span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-forest/10 bg-white flex items-center justify-center shadow-card">
          <span className="font-mono text-xs text-cream/40">
            [ {copy.aboutPage.imageTwo} ]
          </span>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        <ValueCard title="Traceable sourcing" body="Every lot is traced back to origin farm and packhouse." accent="border-stem/50" />
        <ValueCard title="Consistent grading" body="Size, colour, and quality specs held across every shipment." accent="border-gold/50" />
        <ValueCard title="Reliable logistics" body="Sea and air freight coordinated with customs-ready paperwork." accent="border-clay/50" />
      </div>
    </section>
  );
}

function ValueCard({ title, body, accent }: { title: string; body: string; accent: string }) {
  return (
    <div className={`rounded-xl border bg-forest-light/40 p-6 ${accent}`}>
      <h3 className="font-display text-lg font-semibold text-cream">{title}</h3>
      <p className="mt-2 text-sm text-cream/60">{body}</p>
    </div>
  );
}
