import { StrictMode } from "react";
import "../../globals.css";

import FullStoryScript from "../../scripts/fullstory";
import ThemeProvider from "../../components/providers/theme-provider";
export default function RootLayout({ children }: { children: any }) {
  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className="h-full bg-white">
      <body>
        <FullStoryScript />
        <StrictMode>
          <ThemeProvider>{children}</ThemeProvider>
        </StrictMode>
      </body>
    </html>
  );
}
