"use client";
import { ReduxProvider } from "../redux/provider";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import Script from "next/script";
// import theme from "@/theme/theme";
import { v4 as uuid } from "uuid";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <CacheProvider>
            <Script id={uuid()}>
              {/* <ColorModeScript
                initialColorMode={theme.initialColorMode}
              /> */}
            </Script>
            <ChakraProvider>{children}</ChakraProvider>
          </CacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
