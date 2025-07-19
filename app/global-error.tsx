"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("Global error captured:", error);
  }, [error]);

  return (
    <html>
      <body>
        {/* Renders the default Next.js error page */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
