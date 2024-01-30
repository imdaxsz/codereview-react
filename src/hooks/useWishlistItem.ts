import { useAppDispatch, useAppSelector } from '@stores/index';
import { add, remove } from '@stores/wishlistSlice';
import { Exhibition } from 'types';
import { useState } from 'react';
import { debounce } from 'lodash';
import { DEBOUNCE_WAIT } from '@constants/index';

export default function useWishlistItem({ id }: { id: number }) {
  const list = useAppSelector((state) => state.wishlist.items);
  const dispatch = useAppDispatch();
  const [isWishlistItem, setIsWishlistItem] = useState(list.findIndex((item) => item.id === id) > -1);

  const toggleWishlistItem = debounce((item: Exhibition) => {
    !isWishlistItem ? dispatch(add(item)) : dispatch(remove(item));
    setIsWishlistItem((prev) => !prev);
  }, DEBOUNCE_WAIT);

  return { isWishlistItem, toggleWishlistItem };
}
