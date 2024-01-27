"use client";
import { ReduxProvider } from "../redux/provider";
import { ChakraProvider, ColorModeScript, Text } from "@chakra-ui/react";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { CacheProvider } from "@chakra-ui/next-js";
import Script from "next/script";
import theme from "@/theme/theme";
import { StrictMode } from "react";
import { v4 as uuid } from "uuid";
import { init as initFullStory } from "@fullstory/browser";
import { useEffect } from "react";
export default function RootLayout({ children }: { children: any }) {
  useEffect(() => {
    initFullStory({ orgId: "'o-1VMWFF-na1" });
  }, []);

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <StrictMode>
            <ReduxProvider>
              <CacheProvider>
                <Script id={uuid()}>
                  <ColorModeScript initialColorMode={theme.initialColorMode} />
                </Script>
                <ChakraProvider theme={theme}>{children}</ChakraProvider>
              </CacheProvider>
            </ReduxProvider>
          </StrictMode>
        </body>
      </html>
    </ClerkProvider>
  );
}
