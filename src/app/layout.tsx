"use client"
import FullStoryScript from "@/scripts/fullstory"
import { Suspense } from "react"
import { ThemeProvider } from "@/providers/themeProvider"
// These styles apply to every route in the application
import "./globals.css"
import Navbar from "@/components/Navbars/Navbar"
import { ClerkProvider } from "@clerk/nextjs"
import Footer from "@/components/Footers/Footer"
import { usePathname } from "next/navigation"
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <ClerkProvider>
            <ThemeProvider>
              {/* <body>
            <Navbar />
            <FullStoryScript />

            {children}
            <Footer />
          </body> */}
              <LayoutBody>{children}</LayoutBody>
            </ThemeProvider>
          </ClerkProvider>
        </Suspense>
      </body>
    </html>
  )
}

function LayoutBody({ children }: { children: any }) {
  const pathname = usePathname()
  const isLesson = pathname.match(/\/lesson\/\d+/gi)
  return (
    <body>
      {!isLesson && <Navbar />}
      <FullStoryScript />

      {children}
      {!isLesson && <Footer />}
    </body>
  )
}
