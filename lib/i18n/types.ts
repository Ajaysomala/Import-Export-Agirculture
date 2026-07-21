export interface SiteCopy {
  nav: { products: string; about: string; contact: string; signIn: string; getQuote: string };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    ctaQuote: string;
    ctaProducts: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  globalReach: {
    eyebrow: string;
    title: string;
    body: string;
    lanes: { icon: 'gulf' | 'europe' | 'sea' | 'processing'; title: string; body: string }[];
  };
  home: {
    featuredEyebrow: string;
    featuredTitle: string;
    featuredBody: string;
    viewCatalog: string;
    ctaTitle: string;
    ctaBody: string;
  };
  productCard: { origin: string; size: string; packaging: string; availability: string; request: string };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    imageOne: string;
    imageTwo: string;
    values: { title: string; body: string }[];
  };
  contact: { eyebrow: string; title: string; body: string; emailLabel: string; whatsappLabel: string };
  admin: { title: string; body: string };
  footer: { tagline: string; navigate: string; reach: string };
}
