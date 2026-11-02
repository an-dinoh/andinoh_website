"use client";

import { useEffect } from "react";
import { ArrowLink, Faint } from "@/app/components/site";

/**
 * Shown in place of a page that crashed while rendering. The header and footer stay, so the visitor can
 * try again or go elsewhere. The error is logged; in production its details stay out of the page.
 */
export default function PageError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[page] crashed while rendering", { message: error.message, digest: error.digest });
  }, [error]);

  return (
    <section role="alert" className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center sm:py-32">
      <h1 className="text-balance font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
        Something went wrong. <Faint>It’s on us.</Faint>
      </h1>
      <p className="mt-6 max-w-[480px] text-[17px] leading-normal text-sub sm:text-[19px]">
        This page didn’t load properly. Try again, and if it keeps happening, let us know.
      </p>
      <div className="mt-10 flex w-full flex-col items-center gap-5 sm:w-auto sm:flex-row sm:gap-7">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-14 w-full items-center justify-center rounded-full bg-brand px-7 text-[17px] font-medium text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:w-auto"
        >
          Try again
        </button>
        <ArrowLink href="/" tone="ink">Go to the home page</ArrowLink>
      </div>
      {error.digest && <p className="tabular mt-10 text-[13px] text-muted">Reference: {error.digest}</p>}
    </section>
  );
}
