import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'fr', 'es'];
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow public files and API
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // If URL starts with defaultLocale `/en`, redirect to same URL without `/en`
  if (pathname.startsWith(`/${defaultLocale}`)) {
    const pathnameWithoutLocale = pathname.replace(`/${defaultLocale}`, '') || '/';
    const url = request.nextUrl.clone();
    url.pathname = pathnameWithoutLocale;
    return NextResponse.redirect(url);
  }

  // If URL starts with any other locale, continue without change
  if (locales.some((locale) => locale !== defaultLocale && pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // If URL doesn't have any locale prefix, rewrite to include default locale
  // This ensures your [lang] dynamic route receives the default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};