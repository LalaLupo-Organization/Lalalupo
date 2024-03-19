"use client";


import { createContext } from "react";
import StoreProvider from "@/redux/StoreProvider";



export const ThemeContext = createContext({});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      
        <StoreProvider>{children}</StoreProvider>
  
  );
}
