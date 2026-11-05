import { useState, useEffect, useCallback } from "react";

/**
 * Hook para detectar scroll e posição
 */
export function useScroll(threshold = 100) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrollY(y);
    setScrolled(y > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { scrolled, scrollY };
}

/**
 * Hook para smooth scroll para âncora
 */
export function useAnchorScroll() {
  const scrollToAnchor = useCallback((anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollToAnchor };
}

/**
 * Hook para detectar interseção (lazy loading, animações)
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, options]);

  return { ref: setElement, isIntersecting };
}
