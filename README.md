# Abhi Global Exports — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Nature-market visual
identity: deep forest greens, produce-coloured accents (mango gold, tomato
clay, onion plum), floating ambient orbs, and 3D pointer-tilt product cards.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Design tokens

Colours, fonts, and animation keyframes all live in `tailwind.config.ts`.
Fonts are loaded in `app/layout.tsx` via `next/font/google` (Fraunces for
display, Inter for body, JetBrains Mono for labels/data).

## Pages

- `/` — Landing page
- `/products` — Full catalog
- `/about` — Company story (licensed images pending — see TODO in file)
- `/contact` — Get a Quote form
- `/admin` — Placeholder, reserved for Firebase Auth login

## Backend connection points (search the codebase for "TODO(BACKEND")

Every place the frontend expects a real backend is explicitly marked in
code. Summary, in build order:

1. **`lib/firebase.ts`** — uncomment and add your Firebase project config
   (`.env.local`, never commit it) once the Firebase project exists.

2. **`lib/data/products.ts`** — `getProducts()` currently returns a static
   array. Replace its body with a Firestore read from the `products`
   collection. No other file needs to change — `/`, `/products`, and
   `ProductGrid` all just call this function.

3. **`components/QuoteForm.tsx`** — the most important connection point.
   `handleSubmit` currently opens the visitor's own email/WhatsApp app
   directly (fully working today, same as the original prototype). Replace
   it with a `fetch('/api/submit-quote', ...)` call to a Cloud Function
   that: validates input server-side, writes to the `inquiries` collection
   (your CRM), sends the email notification, and optionally fires the
   WhatsApp Cloud API for an automated reply.

4. **`app/admin/page.tsx`** — placeholder only. Gate this route with
   Firebase Auth (redirect if no session / no `admin` custom claim), then
   build product CRUD forms that write directly to Firestore — protected by
   **Firestore security rules**, not a client-side password like the
   original prototype had.

5. **`app/about/page.tsx`** — two `[ Licensed image ]` placeholders marked
   with a TODO showing the exact `next/image` swap once photography is
   licensed.

6. **`next.config.js`** — already allow-lists
   `firebasestorage.googleapis.com` for product images once they're served
   from Firebase Storage.

## Firestore collections this frontend expects

```
products/{id}    → name, variety, category, stamp, accent, desc, origin,
                    size, packaging, season, imageUrl
inquiries/{id}    → name, company, country, product, qty, email, phone,
                    message, createdAt, status
```

Shapes are defined in `lib/types.ts` and shared by the frontend and any
Cloud Functions you write against them.
