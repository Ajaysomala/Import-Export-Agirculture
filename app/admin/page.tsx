// ---------------------------------------------------------------------------
// TODO(BACKEND — Firebase Auth): this page is a placeholder. In production:
//
// 1. Gate this route with Firebase Auth (redirect to a login form if no
//    session, or if the signed-in user's custom claim isn't `role: admin`).
// 2. Build product CRUD forms here that read/write the Firestore
//    `products` collection directly (writes are protected by Firestore
//    security rules requiring role == 'admin', not by client-side checks —
//    unlike the original prototype's hardcoded password).
// 3. Add an "Inquiries" tab that reads the `inquiries` collection (your
//    CRM), so the client can see and manage quote requests in one place.
// ---------------------------------------------------------------------------

export const metadata = {
  title: 'Sign in | Abhi Global Exports',
};

export default function AdminPage() {
  return (
    <section className="wrap py-24 max-w-md">
      <span className="eyebrow">Account</span>
      <h1 className="mt-2 text-3xl font-semibold">Sign in</h1>
      <p className="mt-4 text-cream/70 text-sm">
        Account login isn&apos;t connected yet — this page is reserved for
        Firebase Authentication (admin product management, and optional
        buyer accounts in the future).
      </p>
    </section>
  );
}
