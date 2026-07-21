import Link from 'next/link';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import GlobalReachSection from '@/components/GlobalReachSection';
import ProductGrid from '@/components/ProductGrid';
import HarvestCalendar from '@/components/HarvestCalendar';
import ProcessSteps from '@/components/ProcessSteps';
import CertificationStamps from '@/components/CertificationStamps';
import Faq from '@/components/Faq';
import { getProducts } from '@/lib/data/products';
import { getCopy } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/locale';

export default async function HomePage() {
  const locale = await getLocaleFromCookies();
  const copy = getCopy(locale);
  const products = await getProducts();
  // Homepage copy promises "four crops" — show the flagship four (rice,
  // onion, tomato, mango) here; the full 13-item catalog lives on /products.
  const flagship = products.slice(0, 4);

  return (
    <>
      <Hero copy={copy} />
      <TrustSection copy={copy} />

      <section className="wrap py-20">
        <div className="max-w-[60ch] mb-11">
          <span className="eyebrow">{copy.home.featuredEyebrow}</span>
          <h2 className="mt-2 text-3xl font-semibold">{copy.home.featuredTitle}</h2>
          <p className="mt-3 text-ink-soft">{copy.home.featuredBody}</p>
        </div>
        <ProductGrid products={flagship} copy={copy} />
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest transition-colors hover:border-forest"
          >
            {copy.home.viewCatalog} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <HarvestCalendar />
      <ProcessSteps />
      <CertificationStamps />

      <GlobalReachSection copy={copy} />

      <Faq />

      <section className="wrap py-20 text-center">
        <h2 className="text-3xl font-semibold">{copy.home.ctaTitle}</h2>
        <p className="mx-auto mt-3 max-w-[46ch] text-ink-soft">{copy.home.ctaBody}</p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:-translate-y-0.5"
        >
          {copy.hero.ctaQuote}
        </Link>
      </section>
    </>
  );
}
