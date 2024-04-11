"use client"

import StoreProvider from "@/redux/StoreProvider"
import { createContext } from "react"

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>
}
