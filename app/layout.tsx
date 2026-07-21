import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { RTL_LOCALES } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/locale';
import { getCopy } from '@/lib/i18n';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', weight: ['400', '500', '600', '700'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700'] });
const jbMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jbmono', weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'Abhi Global Exports | Grains, Fresh Produce & Premium Organics',
  description:
    'Abhi Global Exports supplies rice, onion, tomato, mango, grains and organic produce from India to buyers across the Gulf, Europe, and Southeast Asia.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocaleFromCookies();
  const copy = getCopy(locale);
  const dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${fraunces.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar copy={copy} locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer copy={copy} />
      </body>
    </html>
  );
}
