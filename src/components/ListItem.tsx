import { Star } from '@phosphor-icons/react';
import styles from '@styles/list.module.css';
import { Link } from 'react-router-dom';
import { Exhibition } from 'types';

interface Props {
  item: Exhibition;
}

export default function ListItem({ item: { id, title, imageUrl, place, price, date } }: Props) {
  return (
    <div className={styles.item__container}>
      <img className={styles.item__thumnail} src={imageUrl} alt="img" />
      <div className={styles.item__info}>
        <h3 className={styles.item__title}>{title}</h3>
        <p className={styles.item__place}>{place}</p>
        <p className={styles.item__price}>{price.toLocaleString("ko")} 원</p>
        <span className={styles.item__date}>
          {date.started} ~ {date.ended}
        </span>
      </div>
      <div className={styles.item__action}>
        <button name="찜하기">
          <Star size={18} />
        </button>
        <Link to={`/booking/${id}`}>예매하기</Link>
      </div>
    </div>
  );
}
