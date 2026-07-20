import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { localeDirections } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/locale';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalAtmosphere from '@/components/GlobalAtmosphere';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});
const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbmono',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: 'Abhi Global Exports | Grains, Fresh Produce & Premium Organics',
  description:
    'Abhi Global Exports supplies rice, onion, tomato, mango, grains and organic produce from India to buyers across the Gulf, Europe, and Southeast Asia.',
  // TODO(SEO): add openGraph, twitter, and schema.org Organization JSON-LD
  // once the domain and real product photography are finalised.
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocaleFromCookies();

  return (
    <html lang={locale} dir={localeDirections[locale]} className={`${fraunces.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-cream">
        <GlobalAtmosphere />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
