'use client'
import { ReduxProvider } from "@/redux/provider";
import { ChakraProvider, ColorModeScript, Text } from "@chakra-ui/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "@/theme/theme";
import { createContext } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return  (
    <ClerkProvider>
  <ReduxProvider>
  <CacheProvider>
    <ColorModeScript initialColorMode={theme.initialColorMode} />
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </CacheProvider>
</ReduxProvider>
</ClerkProvider>
)
}