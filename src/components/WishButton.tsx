import useWishlistItem from '@hooks/useWishlistItem';
import { Star } from '@phosphor-icons/react';
import { ItemProps } from './ListItem';

interface Props extends ItemProps {
  size?: 'sm' | 'lg';
}

export default function WishButton({ item, size = 'sm' }: Props) {
  const { isWishlistItem, toggleWishlistItem } = useWishlistItem({ id: item.id });
  return (
    <button aria-label='찜하기' onClick={() => toggleWishlistItem(item)}>
      <Star size={size === 'sm' ? 18 : 32} weight={isWishlistItem ? 'fill' : 'regular'} />
    </button>
  );
}
