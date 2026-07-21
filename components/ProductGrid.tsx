import { Product } from '@/lib/types';
import type { SiteCopy } from '@/lib/i18n';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, copy }: { products: Product[]; copy: SiteCopy }) {
  return (
    <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} copy={copy} />
      ))}
    </div>
  );
}
