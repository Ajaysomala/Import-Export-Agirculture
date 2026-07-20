import { Product } from '@/lib/types';

// ---------------------------------------------------------------------------
// TODO(BACKEND — Firestore): this static array is a placeholder so the
// frontend has real data to render during development. In production,
// replace calls to `getProducts()` below with a Firestore read, e.g.:
//
//   import { collection, getDocs } from 'firebase/firestore';
//   import { db } from '@/lib/firebase';
//
//   export async function getProducts(): Promise<Product[]> {
//     const snap = await getDocs(collection(db, 'products'));
//     return snap.docs.map(d => ({ id: d.id, ...d.data() } as Product));
//   }
//
// The admin CMS (future /admin panel) will write to this same
// `products` collection, so no other frontend code needs to change.
// ---------------------------------------------------------------------------

export const products: Product[] = [
  {
    id: 'rice',
    name: 'Premium Basmati Rice',
    variety: '1121 Sella / Traditional Basmati',
    category: 'Grains & Cereals',
    stamp: 'EXPORT GRADE',
    accent: 'gold',
    desc: 'Long-grain aged basmati with signature aroma, milled and graded for consistent length and low breakage across long-haul shipping.',
    origin: 'Punjab & Haryana, India',
    size: 'Extra-long grain, 8mm+',
    packaging: '25kg / 50kg PP bags, custom branding available',
    season: 'Year-round supply',
    imageUrl: '/products/rice.svg',
  },
  {
    id: 'onion',
    name: 'Fresh Red Onion',
    variety: 'Nasik Red / Alanki',
    category: 'Fresh Produce',
    stamp: 'EXPORT GRADE',
    accent: 'plum',
    desc: 'Firm, well-cured red onions with strong skin retention, graded for long-haul export and consistent bulb size.',
    origin: 'Maharashtra & Karnataka, India',
    size: '40–60mm / 60–80mm',
    packaging: '25kg / 50kg mesh bags, jumbo bags on request',
    season: 'Year-round supply',
    imageUrl: '/products/onion.svg',
  },
  {
    id: 'tomato',
    name: 'Fresh Tomato',
    variety: 'Hybrid Round / Roma',
    category: 'Fresh Produce',
    stamp: 'GRADE A',
    accent: 'clay',
    desc: 'Vine-ripened tomatoes hand-picked at export maturity, sorted for uniform colour, firmness, and shelf life.',
    origin: 'Karnataka & Maharashtra, India',
    size: 'Medium – Large',
    packaging: '10kg corrugated cartons',
    season: 'Seasonal, year-round availability',
    imageUrl: '/products/tomato.svg',
  },
  {
    id: 'mango',
    name: 'Fresh Alphonso Mango',
    variety: 'Alphonso / Kesar',
    category: 'Organic & Premium',
    stamp: 'PREMIUM',
    accent: 'gold',
    desc: 'Hand-picked at optimal maturity for controlled ripening on arrival, prized for colour, sweetness, and aroma.',
    origin: 'Maharashtra & Gujarat, India',
    size: '250–350g per fruit',
    packaging: '3kg / 4kg ventilated cartons',
    season: 'Mar–Jun, with extended cold-chain supply',
    imageUrl: '/products/mango.svg',
  },
  {
    id: 'potato',
    name: 'Fresh Potato',
    variety: 'Chipsona / Kufri Jyoti',
    category: 'Fresh Produce',
    stamp: 'EXPORT GRADE',
    accent: 'lime',
    desc: 'Clean, uniform potatoes selected for processing, retail, and food-service supply with low damage and consistent sizing.',
    origin: 'Uttar Pradesh & West Bengal, India',
    size: '45–80mm',
    packaging: '10kg / 25kg mesh bags, cartons on request',
    season: 'Year-round supply',
    imageUrl: '/products/potato.svg',
  },
  {
    id: 'garlic',
    name: 'Fresh Garlic',
    variety: 'Single-clove / Regular bulb',
    category: 'Fresh Produce',
    stamp: 'EXPORT GRADE',
    accent: 'plum',
    desc: 'Aromatic Indian garlic with firm skin, good shelf life, and export-ready grading for wholesale and food processors.',
    origin: 'Madhya Pradesh & Gujarat, India',
    size: '35–50mm bulbs',
    packaging: '10kg / 20kg mesh bags',
    season: 'Year-round supply',
    imageUrl: '/products/garlic.svg',
  },
  {
    id: 'ginger',
    name: 'Fresh Ginger',
    variety: 'Young ginger / Mature ginger',
    category: 'Fresh Produce',
    stamp: 'GRADE A',
    accent: 'gold',
    desc: 'Bright, fibrous ginger roots suited for fresh wholesale, paste production, and spice processing with careful cleaning and cure.',
    origin: 'Kerala & Karnataka, India',
    size: 'Large fingers, uniform roots',
    packaging: '10kg cartons, crates on request',
    season: 'Year-round supply',
    imageUrl: '/products/ginger.svg',
  },
  {
    id: 'grape',
    name: 'Fresh Table Grapes',
    variety: 'Thompson Seedless / Sonaka',
    category: 'Organic & Premium',
    stamp: 'PREMIUM',
    accent: 'clay',
    desc: 'Sweet, crisp export grapes selected for retail and premium wholesale channels with cold-chain handling and consistent bunch quality.',
    origin: 'Maharashtra & Karnataka, India',
    size: 'Small to medium bunches',
    packaging: '4.5kg punnets / cartons',
    season: 'Jan–Apr, with extended supply windows',
    imageUrl: '/products/grape.svg',
  },
  {
    id: 'green-chili',
    name: 'Fresh Green Chilli',
    variety: 'Sannam / Teja',
    category: 'Fresh Produce',
    stamp: 'EXPORT GRADE',
    accent: 'lime',
    desc: 'Bright green chillies with strong heat, uniform length, and rapid post-harvest cooling for export stability.',
    origin: 'Andhra Pradesh & Karnataka, India',
    size: '4–7cm pods',
    packaging: '5kg / 10kg cartons',
    season: 'Year-round supply',
    imageUrl: '/products/green-chili.svg',
  },
  {
    id: 'banana',
    name: 'Fresh Banana',
    variety: 'Cavendish / Robusta',
    category: 'Fresh Produce',
    stamp: 'EXPORT GRADE',
    accent: 'gold',
    desc: 'Export bananas packed for ripening programs and wholesale distribution with consistent colour, size, and shelf life.',
    origin: 'Tamil Nadu & Maharashtra, India',
    size: '18–22cm fingers',
    packaging: '18kg / 20kg cartons',
    season: 'Year-round supply',
    imageUrl: '/products/banana.svg',
  },
  {
    id: 'pomegranate',
    name: 'Fresh Pomegranate',
    variety: 'Bhagwa / Wonderful',
    category: 'Organic & Premium',
    stamp: 'PREMIUM',
    accent: 'plum',
    desc: 'Rich red pomegranates with strong arils, export-calibrated for premium fruit programs and juice markets.',
    origin: 'Maharashtra & Karnataka, India',
    size: '250–400g per fruit',
    packaging: '3kg / 4kg cartons',
    season: 'Aug–Mar, cold-chain available',
    imageUrl: '/products/pomegranate.svg',
  },
];

// Placeholder accessor — see TODO above for the real Firestore version.
export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}
