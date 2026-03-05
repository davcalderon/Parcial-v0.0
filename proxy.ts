import { NextRequest, NextResponse } from "next/server";

const locales = ['en', 'es']


export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (request.cookies.get('NEXT_LOCALE')?.value && !pathnameHasLocale) {
    const cookieLang = request.cookies.get('NEXT_LOCALE')?.value
    return NextResponse.redirect(new URL(`/${cookieLang}`, request.url))}

  else if (pathnameHasLocale) return

  const original = request.headers.get("Accept-Language") || "es"
  const cortado = original.slice(0,2)
  return NextResponse.redirect(new URL(`/${cortado}`, request.url))

}

export const config = {
  matcher: ['/((?!_next).*)']
}