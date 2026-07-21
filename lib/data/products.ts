import { Product } from '@/lib/types';

// TODO(BACKEND): replace with a Firestore read once the CMS is wired —
// see the note in the original project README. Component code calling
// getProducts() doesn't need to change.

export const products: Product[] = [
  {
    id: 'rice', name: 'Premium Basmati Rice', variety: '1121 Sella / Traditional Basmati',
    category: 'Grains & Cereals', stamp: 'EXPORT GRADE', accent: 'gold',
    desc: 'Long-grain aged basmati with signature aroma, milled and graded for consistent length and low breakage across long-haul shipping.',
    origin: 'Punjab & Haryana, India', size: 'Extra-long grain, 8mm+',
    packaging: '25kg / 50kg PP bags, custom branding available', season: 'Year-round supply',
    imageUrl: '/products/rice.png',
  },
  {
    id: 'onion', name: 'Fresh Red Onion', variety: 'Nasik Red / Alanki',
    category: 'Fresh Produce', stamp: 'EXPORT GRADE', accent: 'plum',
    desc: 'Firm, well-cured red onions with strong skin retention, graded for long-haul export and consistent bulb size.',
    origin: 'Maharashtra & Karnataka, India', size: '40–60mm / 60–80mm',
    packaging: '25kg / 50kg mesh bags, jumbo bags on request', season: 'Year-round supply',
    imageUrl: '/products/onion.png',
  },
  {
    id: 'tomato', name: 'Fresh Tomato', variety: 'Hybrid Round / Roma',
    category: 'Fresh Produce', stamp: 'GRADE A', accent: 'clay',
    desc: 'Vine-ripened tomatoes hand-picked at export maturity, sorted for uniform colour, firmness, and shelf life.',
    origin: 'Karnataka & Maharashtra, India', size: 'Medium – Large',
    packaging: '10kg corrugated cartons', season: 'Seasonal, year-round availability',
    imageUrl: '/products/tomato.png',
  },
  {
    id: 'mango', name: 'Alphonso Mango', variety: 'Alphonso',
    category: 'Organic & Premium', stamp: 'PREMIUM', accent: 'gold',
    desc: 'Hand-picked at optimal maturity for controlled ripening on arrival, prized for colour, sweetness, and aroma.',
    origin: 'Maharashtra & Gujarat, India', size: '250–350g per fruit',
    packaging: '3kg / 4kg ventilated cartons', season: 'Mar–Jun, with extended cold-chain supply',
    imageUrl: '/products/mango.png',
  },
  {
    id: 'mango-kesar', name: 'Kesar Mango', variety: 'Kesar',
    category: 'Organic & Premium', stamp: 'PREMIUM', accent: 'gold',
    desc: 'Saffron-hued pulp with a distinctive aroma, sourced from Gujarat orchards and graded for export sweetness.',
    origin: 'Gujarat, India', size: '200–300g per fruit',
    packaging: '3kg / 4kg ventilated cartons', season: 'Apr–Jun',
    imageUrl: '/products/mango.png',
  },
  {
    id: 'rice-nonbasmati', name: 'Non-Basmati Rice', variety: 'Sona Masuri / IR64',
    category: 'Grains & Cereals', stamp: 'EXPORT GRADE', accent: 'gold',
    desc: 'Reliable everyday rice varieties milled to a consistent grain size, sourced for high-volume retail and foodservice buyers.',
    origin: 'Andhra Pradesh & Telangana, India', size: 'Medium grain',
    packaging: '25kg / 50kg PP bags', season: 'Year-round supply',
    imageUrl: '/products/rice.png',
  },
  {
    id: 'grape', name: 'Thompson Seedless Grapes', variety: 'Thompson Seedless',
    category: 'Fresh Produce', stamp: 'EXPORT GRADE', accent: 'lime',
    desc: 'Crisp, seedless table grapes graded for sugar content and berry size, packed for long-haul cold-chain export.',
    origin: 'Maharashtra & Karnataka, India', size: '16–22mm berry',
    packaging: '4.5kg vented cartons', season: 'Peak Jan–Apr',
    imageUrl: '/products/grape.png',
  },
  {
    id: 'pomegranate', name: 'Bhagwa Pomegranate', variety: 'Bhagwa',
    category: 'Organic & Premium', stamp: 'GRADE A', accent: 'plum',
    desc: 'Deep-red, thick-skinned pomegranates graded for arils, sweetness, and transit resilience.',
    origin: 'Maharashtra, India', size: '250–300g per fruit',
    packaging: '5kg / 10kg corrugated cartons', season: 'Peak Sep–Jan',
    imageUrl: '/products/pomegranate.png',
  },
  {
    id: 'banana', name: 'Cavendish Banana', variety: 'Cavendish',
    category: 'Fresh Produce', stamp: 'EXPORT GRADE', accent: 'lime',
    desc: 'Green-harvested and ripeness-controlled for arrival, sized and graded to retail bunch specifications.',
    origin: 'Tamil Nadu & Maharashtra, India', size: '18–22cm finger length',
    packaging: '13kg export cartons', season: 'Available year-round',
    imageUrl: '/products/banana.png',
  },
  {
    id: 'green-chilli', name: 'Green Chilli', variety: "G4 / Byadgi",
    category: 'Fresh Produce', stamp: 'GRADE A', accent: 'lime',
    desc: 'Firm, glossy green chillies graded for pungency and shelf life, packed for both fresh and processing buyers.',
    origin: 'Andhra Pradesh & Karnataka, India', size: 'Medium – Long',
    packaging: '10kg ventilated cartons', season: 'Peak Oct–Mar',
    imageUrl: '/products/green-chilli.png',
  },
  {
    id: 'potato', name: 'Fresh Potato', variety: "Kufri Jyoti / Pukhraj",
    category: 'Fresh Produce', stamp: 'EXPORT GRADE', accent: 'clay',
    desc: 'Table and processing-grade potatoes graded for size uniformity and low sprouting across long shipping windows.',
    origin: 'Gujarat & Punjab, India', size: '40–80mm',
    packaging: '25kg / 50kg mesh bags', season: 'Peak Jan–Mar',
    imageUrl: '/products/potato.png',
  },
  {
    id: 'garlic', name: 'Fresh Garlic', variety: 'Local White',
    category: 'Fresh Produce', stamp: 'GRADE A', accent: 'clay',
    desc: 'Dense, well-cured garlic bulbs graded for clove size and skin retention, packed for long-transit stability.',
    origin: 'Madhya Pradesh & Gujarat, India', size: '45–55mm bulb',
    packaging: '10kg / 20kg mesh bags', season: 'Peak Feb–Apr',
    imageUrl: '/products/garlic.png',
  },
  {
    id: 'ginger', name: 'Fresh Ginger', variety: 'Nadia / Rio de Janeiro',
    category: 'Fresh Produce', stamp: 'GRADE A', accent: 'clay',
    desc: 'Fibre-controlled, high-oil ginger rhizomes graded for size and freshness for both retail and processing markets.',
    origin: 'Kerala & Karnataka, India', size: 'Medium – Large rhizome',
    packaging: '10kg corrugated cartons', season: 'Peak Nov–Feb',
    imageUrl: '/products/ginger.png',
  },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}
