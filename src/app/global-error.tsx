"use client";
import { Suspense } from "react";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Suspense>
      <html>
        <body>
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </body>
      </html>
    </Suspense>
  );
}
