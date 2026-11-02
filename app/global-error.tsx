"use client";

import { useEffect } from "react";

/**
 * Last resort: shown when the root layout itself fails, so the header, footer and the site's styles may be
 * missing. It brings its own <html>, <body> and inline styles, and works in light and dark.
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[app] root layout crashed", { message: error.message, digest: error.digest });
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Something went wrong · Andinoh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          :root { color-scheme: light dark; }
          body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px; box-sizing: border-box;
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; background: #fff; color: #0B0F19; text-align: center; }
          h1 { margin: 0; font-size: clamp(32px, 6vw, 56px); line-height: 1.05; letter-spacing: -0.03em; }
          p { margin: 20px auto 0; max-width: 440px; font-size: 17px; line-height: 1.5; color: #4B5563; }
          .row { margin-top: 32px; display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap; }
          button { height: 52px; padding: 0 28px; border: 0; border-radius: 999px; background: #0F75BD; color: #fff; font: inherit; font-size: 16px; font-weight: 500; cursor: pointer; }
          a { color: #0B0F19; font-weight: 500; font-size: 16px; }
          small { display: block; margin-top: 32px; font-size: 13px; color: #6B7280; }
          @media (prefers-color-scheme: dark) { body { background: #0A0D14; color: #F5F6F8; } p { color: #B4BAC5; } a { color: #F5F6F8; } small { color: #9AA1AD; } }
        `}</style>
      </head>
      <body>
        <main role="alert">
          <h1>Something went wrong.</h1>
          <p>Andinoh didn’t load properly. Try again, and if it keeps happening, email support@andinoh.com.</p>
          <div className="row">
            <button type="button" onClick={reset}>Try again</button>
            {/* A full page load, since the app itself is what failed. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/">Go to the home page</a>
          </div>
          {error.digest && <small>Reference: {error.digest}</small>}
        </main>
      </body>
    </html>
  );
}
