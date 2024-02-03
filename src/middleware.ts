import { match } from "@formatjs/intl-localematcher";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({});
export async function middleware(request: NextRequest) {
  // // The languages we cater for
  // let AvailableLocales = ["en", "nl", "es", "it"];
  // // Getting the user's current language preference
  // const acceptLanguageHeader = request.headers.get("accept-language");
  // //We have to do some formatting to separate the language codes
  // const languagePreference: readonly string[] = acceptLanguageHeader
  //   ? acceptLanguageHeader
  //       .split(/[;,]/)
  //       .map((lang) => lang.trim())
  //       .filter((lang) => /^[a-z]{2}(-[a-z]{2})?$/.test(lang))
  //   : ["en"];
  // // Default to english in case we don't cater to their language preference.
  // let defaultLocale = "en";
  // const pathname = request.nextUrl.pathname;
  // //Sanity studio redirect
  // if (pathname === "/studio" || pathname.includes("studio")) {
  //   return NextResponse.next();
  // }
  // try {
  //   const resolvedLocale = match(
  //     languagePreference,
  //     AvailableLocales,
  //     defaultLocale,
  //   );
  //   const pathnameIsMissingLocale = AvailableLocales.every(
  //     (locale) =>
  //       (!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`) ||
  //       (pathname === "" && pathname !== `/${locale}`),
  //   );
  //   // Redirect if there is no locale
  //   if (pathnameIsMissingLocale) {
  //     // Don't add locale if studio is in pathname
  //     return NextResponse.redirect(
  //       new URL(`/${resolvedLocale}/${pathname}`, request.url),
  //     );
  //   }
  // } catch (error) {
  //   console.error("Error in match function:", error);
  // }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
