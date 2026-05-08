"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a 0–1 progress value reflecting how far the referenced element
 * has been scrolled through the viewport. Updates in both directions, so
 * scrolling back up retracts progress.
 *
 * Progress reaches 0 when the element's top is below ~85% of viewport height
 * (just entering from the bottom) and 1 when the element's bottom is above ~15%
 * of viewport height (mostly read).
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let raf: number | null = null;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.15;
      const distance = start - rect.top;
      const total = rect.height + (start - end);
      const p = Math.max(0, Math.min(1, distance / total));
      setProgress(p);
      raf = null;
    };

    const onScroll = () => {
      if (raf !== null) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, progress };
}
