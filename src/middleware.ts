import { authMiddleware } from "@clerk/nextjs/server"

import createMiddleware from "next-intl/middleware"

const intlMiddleware = createMiddleware({
  locales: ["en", "it"],

  defaultLocale: "en",
})

export default authMiddleware({
  beforeAuth: req => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req)
  },

  // Ensure that locale specific sign-in pages are public
  publicRoutes: ["/", "/:locale/sign-in", "/:locale/sign-up", "/:locale"],
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
