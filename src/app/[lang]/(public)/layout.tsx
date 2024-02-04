"use client";

import {
  ChakraProvider,
  ColorModeScript,
  Text,
  Box,
  ScaleFade,
} from "@chakra-ui/react";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { CacheProvider } from "@chakra-ui/next-js";
import Script from "next/script";
import theme from "@/theme/theme";
import { StrictMode } from "react";
import { v4 as uuid } from "uuid";
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }: { children: any }) {
  const { userId } = useAuth();
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box>
        {userId ? (
          <Text>Auth navbar</Text>
        ) : (
          <Navbar
            params={{
              lang: children?.props?.segmentPath[1][1],
            }}
          />
        )}
        {children}
      </Box>
    </ScaleFade>
  );
}
