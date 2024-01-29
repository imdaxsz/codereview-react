import useWishlistItem from '@hooks/useWishlistItem';
import { Star } from '@phosphor-icons/react';
import styles from '@styles/list.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Exhibition } from 'types';

interface Props {
  item: Exhibition;
}

export default function ListItem({ item: { id, title, imageUrl, place, price, date } }: Props) {
  const { isWishlistItem, toggleWishlistItem } = useWishlistItem({ id });
  const { pathname } = useLocation()
  const isWishlist = pathname === "/wishlist";

  return (
    <div className={styles.item__container}>
      <img className={styles.item__thumnail} src={imageUrl} alt="img" />
      <div className={styles.item__content}>
        <div className={styles.item__info__wrapper}>
          <div className={styles.item__info}>
            <h3 className={styles.item__title}>{title}</h3>
            <p className={styles.item__place}>{place}</p>
            <p className={styles.item__price}>{price.toLocaleString('ko')} 원</p>
          </div>
          <button
            aria-label="찜하기"
            onClick={() => toggleWishlistItem({ id, title, imageUrl, place, price, date })}
          >
            <Star size={18} weight={isWishlistItem ? 'fill' : 'regular'} />
          </button>
        </div>
        <div className={`${styles.item__footer} ${isWishlist && styles.reverse}`}>
          <span className={styles.item__date}>
            {date.started} ~ {date.ended}
          </span>
          <Link to={`/booking/${id}`}>예매하기</Link>
        </div>
      </div>
    </div>
  );
}
