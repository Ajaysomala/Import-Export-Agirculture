import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { type Locale } from '@/lib/i18n';

export default function ProductGrid({ products, locale }: { products: Product[]; locale: Locale }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <div
          key={product.id}
          className="animate-riseIn"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <ProductCard product={product} locale={locale} />
        </div>
      ))}
    </div>
  );
}
