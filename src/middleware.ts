import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

let headers = { "accept-language": "en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en", "nl", "es", "it"];
let defaultLocale = "en-US";
match(languages, locales, defaultLocale); // -> 'en-US'

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  if (pathname === "/studio") {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      (!pathname.startsWith(`/${locale}/`) &&
        pathname !== `/${locale}`) ||
      (pathname === "" && pathname !== `/${locale}`)
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = "en";

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
