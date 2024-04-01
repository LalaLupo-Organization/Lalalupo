"use client";
import FullStoryScript from "@/scripts/fullstory";
import { ThemeProvider } from "@/providers/themeProvider";
// These styles apply to every route in the application
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbars/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footers/Footer";
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <Suspense fallback={<div>Loading...</div>}>
        <ClerkProvider>
          <ThemeProvider>
            <body>
              <Navbar />
              <FullStoryScript />
              {children}
              <Footer />
            </body>
          </ThemeProvider>
        </ClerkProvider>
      </Suspense>
    </html>
  );
}
