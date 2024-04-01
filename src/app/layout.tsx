"use client";
import FullStoryScript from "@/scripts/fullstory";
import { ThemeProvider } from "@/providers/themeProvider";
// These styles apply to every route in the application
import "./globals.css";
<<<<<<< HEAD
import Navbar from "@/components/Navbars/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footers/Footer";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
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
    </html>
  );
}

function LayoutBody({ children }: { children: any }) {
  const pathname = usePathname();
  const isLesson = pathname.match(/\/lesson\/\d+/gi);
  return (
    <body>
      {!isLesson && <Navbar />}
      <FullStoryScript />

      {children}
      {!isLesson && <Footer />}
    </body>
  );
}
=======
import { Suspense } from "react";
import Navbar from "@/components/Navbars/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footers/Footer";
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <ClerkProvider>
            <ThemeProvider>
              <Navbar />
              <FullStoryScript />
              {children}
              <Footer />
            </ThemeProvider>
          </ClerkProvider>
        </Suspense>
      </body>
    </html>
  );
}
>>>>>>> 2ce02c791e0ae117a649d719e08f86bf37509bab
