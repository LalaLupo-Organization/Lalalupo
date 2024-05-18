import { ThemeProvider } from "@/providers/themeProvider"
import FullStoryScript from "@/scripts/fullstory"
import { Suspense } from "react"
// These styles apply to every route in the application
import Footer from "@/components/Footers/Footer"
import Navbar from "@/components/Navbars/Navbar"
import { ClerkProvider } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import "../globals.css"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <LocaleLayout params={{ locale }}>
      <Suspense>
        <ClerkProvider>
          <ThemeProvider>
            {/* <body>
            <Navbar />
            <FullStoryScript />

            {children}
            <Footer />
          </body> */}
            {children}
            {/* <LayoutBody>{children}</LayoutBody> */}
          </ThemeProvider>
        </ClerkProvider>
      </Suspense>
    </LocaleLayout>
  )
}

function LayoutBody({ children }: { children: any }) {
  const pathname = usePathname()
  const isLesson = pathname.match(/\/lesson\/\d+/gi)
  return (
    <>
      {!isLesson && <Navbar />}
      <FullStoryScript />

      {children}
      {!isLesson && <Footer />}
    </>
  )
}
async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
