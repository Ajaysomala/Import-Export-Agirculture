'use client';

import { useEffect, useRef } from 'react';

/**
 * Attach to any element via ref: adds `.is-visible` (see globals.css `.reveal`)
 * once the element scrolls into view. Lightweight alternative to GSAP
 * ScrollTrigger — no extra dependency, works fine for fade/rise reveals.
 * For anything more elaborate (pinned scroll, scrubbing), swap this out
 * for GSAP ScrollTrigger later without touching the rest of the page.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
