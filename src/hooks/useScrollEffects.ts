import { useEffect, useRef, useState, useCallback } from "react";

/**
 * useParallax — drives a CSS custom property --parallax-y on a target element.
 * Pure rAF loop, no libraries. Intensity 0.0–1.0 (default 0.35).
 */
export function useParallax(intensity = 0.35) {
  const ref = useRef<HTMLElement>(null);
  const rafId = useRef<number>(0);
  const lastY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      // Smooth lerp so motion feels weighted, not snappy
      lastY.current += (scrollY - lastY.current) * 0.08;
      el.style.setProperty(
        "--parallax-y",
        `${lastY.current * intensity}px`
      );
      rafId.current = requestAnimationFrame(update);
    };

    rafId.current = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId.current);
  }, [intensity]);

  return ref;
}

/**
 * useScrollReveal — adds .is-visible to elements once they enter the viewport.
 * Returns a ref to attach to the container. Children with [data-reveal] get revealed
 * with staggered delays automatically.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            // Stagger children with [data-reveal-child]
            const children = target.querySelectorAll<HTMLElement>(
              "[data-reveal-child]"
            );
            children.forEach((child, i) => {
              if (prefersReduced) {
                child.style.opacity = "1";
                child.style.transform = "none";
              } else {
                child.style.transitionDelay = `${i * 90}ms`;
              }
              child.classList.add("is-visible");
            });
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * useScrollProgress — returns 0-1 scroll progress of a section through viewport.
 */
export function useScrollProgress() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const traveled = window.innerHeight - rect.top;
      setProgress(Math.min(1, Math.max(0, traveled / total)));
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return { ref, progress };
}
