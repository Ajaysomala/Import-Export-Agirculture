// TODO(BACKEND — Firebase Auth): gate this route with real authentication
// and build product CRUD + inquiries CRM views here once Firebase is wired.

import { getCopy } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/locale';

export const metadata = { title: 'Sign in | Abhi Global Exports' };

export default async function AdminPage() {
  const locale = await getLocaleFromCookies();
  const copy = getCopy(locale);

  return (
    <section className="wrap py-24 max-w-md">
      <span className="eyebrow">{copy.nav.signIn}</span>
      <h1 className="mt-2 text-3xl font-semibold">{copy.admin.title}</h1>
      <p className="mt-4 text-ink-soft text-sm">{copy.admin.body}</p>
    </section>
  );
}
