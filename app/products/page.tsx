import ProductGrid from '@/components/ProductGrid';
import { getProducts } from '@/lib/data/products';
import { getCopy } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/locale';

export const metadata = {
  title: 'Products | Abhi Global Exports',
  description: 'Rice, onion, tomato, mango, grains and organic produce, export-graded and ready to ship.',
};

export default async function ProductsPage() {
  const locale = await getLocaleFromCookies();
  const copy = getCopy(locale);
  const products = await getProducts();

  return (
    <section className="wrap py-20">
      <div className="max-w-[60ch] mb-11">
        <span className="eyebrow">{copy.nav.products}</span>
        <h1 className="mt-2 text-4xl font-semibold">The full export catalog.</h1>
        <p className="mt-3 text-ink-soft">{copy.home.featuredBody}</p>
      </div>
      <ProductGrid products={products} copy={copy} />
    </section>
  );
}
