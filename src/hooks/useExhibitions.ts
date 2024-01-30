import { getApiExhibitionList } from '@src/apis';
import { useCallback, useRef, useState } from 'react';
import { Exhibition } from 'types';
import useIntersectionObserver from './useIntersectionObserver';

export default function useExhibitions() {
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const target = useRef<HTMLDivElement>(null);

  const [hasNextPage, setHasNextPage] = useState(true);
  const [nextPage, setNextPage] = useState<string | null>(null);

  const fetchList = useCallback(async () => {
    setIsLoading(true);
    try {
      const { items, cursor, hasNext } = await getApiExhibitionList({ nextPage });
      setExhibitions((prev) => [...prev, ...items]);
      setHasNextPage(hasNext);
      setNextPage(cursor);
    } catch (error) {
      console.log('Error with fetching exhibition list: ', error);
    }
    setIsLoading(false);
  }, [nextPage]);

  useIntersectionObserver({
    target,
    onIntersect: fetchList,
    enabled: hasNextPage,
  });

  return { exhibitions, isLoading, target };
}
