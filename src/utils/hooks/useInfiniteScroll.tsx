import { useCallback, useEffect, useRef } from "react";

export function useInfiniteScroll(callbackParam: any, listLength: number, count: number) {
  const observer = useRef<null | IntersectionObserver>(null);

  const hasMore = listLength < count;

  if (!hasMore) {
    observer.current?.disconnect();
  }

  const infiniteScrollRef = useCallback((node: null | HTMLDivElement) => {
    if (!node) return false;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries.length === 0) return false;

        if (entries[0].isIntersecting) {
          callbackParam();
        }
      },
      { threshold: 1 }
    );
    observer.current.observe(node);
  }, []);

  useEffect(() => {
    return () => observer.current?.disconnect();
  }, []);

  return infiniteScrollRef;
}
