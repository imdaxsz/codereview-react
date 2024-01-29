import { RefObject, useEffect } from 'react';

interface Props {
  target: RefObject<HTMLDivElement>;
  onIntersect: () => void;
  threshold?: number;
  enabled?: boolean;
}

export default function useIntersectionObserver({
  target,
  onIntersect,
  threshold = 1.0,
  enabled = true,
}: Props) {
  useEffect(() => {
    if (!enabled) return;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          onIntersect();
        });
      },
      {
        threshold,
      },
    );

    const element = target && target.current;

    if (!element) return;

    intersectionObserver.observe(element);
    return () => intersectionObserver.unobserve(element);
  }, [enabled, target, onIntersect, threshold]);
}
