// Shared domain types. These mirror the Firestore document shapes so the
// frontend and backend (Cloud Functions) agree on structure.

export type ProductAccent = 'gold' | 'clay' | 'plum' | 'lime';

export interface Product {
  id: string;
  name: string;
  variety: string;
  category: 'Grains & Cereals' | 'Fresh Produce' | 'Organic & Premium';
  stamp: string; // e.g. "EXPORT GRADE", "PREMIUM"
  accent: ProductAccent; // drives the card's glow/border colour
  desc: string;
  origin: string;
  size: string;
  packaging: string;
  season: string;
  imageUrl?: string; // TODO(BACKEND): populate from Firebase Storage URL
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
  // TODO(BACKEND): server sets these on write, not the client
  createdAt?: string;
  status?: 'new' | 'contacted' | 'closed';
}
