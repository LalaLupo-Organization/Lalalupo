import { StrictMode } from "react";

import FullStoryScript from "@/scripts/fullstory";
import ThemeProvider from "@/components/providers/theme-provider";
export default function LangLayout({ children }: { children: any }) {
  return (
    <>
      <FullStoryScript />
      <StrictMode>
        <ThemeProvider>{children}</ThemeProvider>
      </StrictMode>
    </>
  );
}
