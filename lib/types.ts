export type ProductAccent = 'gold' | 'clay' | 'plum' | 'lime';

export interface Product {
  id: string;
  name: string;
  variety: string;
  category: 'Grains & Cereals' | 'Fresh Produce' | 'Organic & Premium';
  stamp: string;
  accent: ProductAccent;
  desc: string;
  origin: string;
  size: string;
  packaging: string;
  season: string;
  imageUrl: string; // Currently a designer SVG illustration in /public/products.
                     // TODO(CONTENT — optional): swap for a licensed product
                     // photo (.jpg/.png) later if you want real photography
                     // instead — no component changes needed either way.
}

export interface QuoteRequest {
  name: string;
  company: string;
  country: string;
  product: string;
  qty: string;
  email: string;
  phone: string;
  message: string;
  createdAt?: string;
  status?: 'new' | 'contacted' | 'closed';
}
