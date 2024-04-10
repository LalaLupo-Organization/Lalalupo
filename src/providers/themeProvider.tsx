"use client"

import { createContext } from "react"
import StoreProvider from "@/redux/StoreProvider"

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>
}
