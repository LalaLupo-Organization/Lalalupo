"use client";
import { ReduxProvider } from "../redux/provider";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import customTheme from "../../../chakra.custom-theme";
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
            <ChakraProvider theme={customTheme}>
              {children}
            </ChakraProvider>
          </CacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
