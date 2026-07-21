import { getCopy } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/locale';
import AboutReveal from '@/components/AboutReveal';

export const metadata = {
  title: 'About | Abhi Global Exports',
  description: 'Learn about Abhi Global Exports — sourcing and shipping grains, fresh produce, and organics from India worldwide.',
};

export default async function AboutPage() {
  const locale = await getLocaleFromCookies();
  const copy = getCopy(locale);
  return <AboutReveal copy={copy} />;
}
