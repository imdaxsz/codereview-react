import styles from '@styles/list.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Exhibition } from 'types';
import WishButton from './WishButton';

export interface ItemProps {
  item: Exhibition;
}

export default function ListItem({ item }: ItemProps) {
  const { pathname } = useLocation();
  const isWishlist = pathname === '/wishlist';

  return (
    <div className={styles.item__container}>
      <img className={styles.item__thumnail} src={item.imageUrl} alt='img' />
      <div className={styles.item__content}>
        <div className={styles.item__info__wrapper}>
          <div className={styles.item__info}>
            <h3 className={styles.item__title}>{item.title}</h3>
            <p className={styles.item__place}>{item.place}</p>
            <p className={styles.item__price}>{item.price.toLocaleString('ko')} 원</p>
          </div>
          <WishButton item={item} />
        </div>
        <div className={`${styles.item__footer} ${isWishlist && styles.reverse}`}>
          <span className={styles.item__date}>
            {item.date.started} ~ {item.date.ended}
          </span>
          <Link to={`/booking/${item.id}`}>예매하기</Link>
        </div>
      </div>
    </div>
  );
}
