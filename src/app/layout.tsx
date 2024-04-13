"use client"
import { ThemeProvider } from "@/providers/themeProvider"
import FullStoryScript from "@/scripts/fullstory"
import { Suspense } from "react"
// These styles apply to every route in the application
import Footer from "@/components/Footers/Footer"
import Navbar from "@/components/Navbars/Navbar"
import { ClerkProvider } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import "./globals.css"
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
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
    <>
      {!isLesson && <Navbar />}
      <FullStoryScript />

      {children}
      {!isLesson && <Footer />}
    </>
  )
}
