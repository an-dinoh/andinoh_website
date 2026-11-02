"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One watcher for the whole site: every element marked data-reveal rises in (adds .is-in) the first time
 * it scrolls into view. Re-scans after each navigation. Renders nothing.
 *
 * Elements are only hidden once this has run and added <html class="reveal-ready">, so if the site's
 * JavaScript never loads (a failed download, a blocked script), nothing is left invisible.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (!("IntersectionObserver" in window) || reduce) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    // Whatever is already on screen stays as it is (no flash of hiding and showing again).
    const pending = els.filter((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-in");
        return false;
      }
      return true;
    });
    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      // Start a little before the element is fully on screen, so it's moving as you reach it.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
