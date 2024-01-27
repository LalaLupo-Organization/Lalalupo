"use client";
import { ReduxProvider } from "../redux/provider";
import {
  ChakraProvider,
  ColorModeScript,
  Text,
} from "@chakra-ui/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "@/theme/theme";
import { StrictMode } from "react";

import FullStoryScript from "../../scripts/fullstory";
export default function RootLayout({ children }: { children: any }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <FullStoryScript />
          <StrictMode>
            <ReduxProvider>
              <CacheProvider>
                <ColorModeScript
                  initialColorMode={theme.initialColorMode}
                />
                <ChakraProvider theme={theme}>
                  {children}
                </ChakraProvider>
              </CacheProvider>
            </ReduxProvider>
          </StrictMode>
        </body>
      </html>
    </ClerkProvider>
  );
}
