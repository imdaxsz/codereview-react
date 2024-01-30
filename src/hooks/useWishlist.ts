import { useAppSelector } from '@stores/index';
import { useCallback, useEffect, useRef, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import { Exhibition } from 'types';
import { sleep } from '@utils/sleep';
import { FETCH_SIZE } from '@constants/index';

export default function useWishlist() {
  const list = useAppSelector((state) => state.wishlist.items);
  const [wishlist, setWishlist] = useState<Exhibition[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  const target = useRef<HTMLDivElement>(null);

  // FETCH_SIZE(=8) 단위로 찜 목록을 불러옵니다.
  const fetchList = useCallback(async () => {
    if (list.length === 0) return;
    setIsLoading(true);
    const start = wishlist.length;
    const nextItems = list.slice(start, start + FETCH_SIZE);
    await sleep({ ms: 400 });
    setIsLoading(false);
    setWishlist((prev) => [...prev, ...nextItems]);
    if (nextItems.length < FETCH_SIZE || wishlist.length + nextItems.length === list.length)
      setHasNextPage(false);
  }, [list, wishlist.length]);

  // 찜 삭제 시 현재 리스트에 반영되도록 합니다.
  useEffect(() => {
    setWishlist((prev) => prev.filter((item) => list.includes(item)));
  }, [list]);

  useIntersectionObserver({
    target,
    onIntersect: fetchList,
    enabled: hasNextPage,
  });

  return { wishlist, target, isLoading };
}
