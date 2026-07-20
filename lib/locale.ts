import { cookies } from 'next/headers';
import { isLocale, type Locale } from '@/lib/i18n';

export async function getLocaleFromCookies(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('site-language')?.value;
  return isLocale(cookieLocale) ? cookieLocale : 'en';
}
