import type { Metadata } from "next";
import { ArrowLink, Faint, PillLink } from "@/app/components/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

/** Shown for any address that doesn't exist (and for notFound() calls). */
export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center sm:py-32">
      <p className="tabular mb-4 text-[15px] font-medium text-accent">404</p>
      <h1 className="text-balance font-display text-[clamp(2.75rem,7vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
        This page doesn’t exist. <Faint>Yet.</Faint>
      </h1>
      <p className="mt-6 max-w-[480px] text-[17px] leading-normal text-sub sm:text-[19px]">
        The link may be old, or the address may have a typo.
      </p>
      <div className="mt-10 flex w-full flex-col items-center gap-5 sm:w-auto sm:flex-row sm:gap-7">
        <PillLink href="/" className="w-full sm:w-auto">Go to the home page</PillLink>
        <ArrowLink href="/contact" tone="ink">Contact us</ArrowLink>
      </div>
    </section>
  );
}
