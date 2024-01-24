import Head from '@components/Head';
import Header from '@components/Header';
import { Star } from '@phosphor-icons/react';
import styles from '@styles/booking.module.css';

const MOCK_ITEM = {
  id: 3,
  title: '도리도리 : 버킷리스트',
  imageUrl: 'https://artvelop.s3.ap-northeast-2.amazonaws.com/code-review/light/3.jpeg',
  place: '하우스 서울/서울',
  price: 8500,
  date: {
    started: '2024.01.09',
    ended: '2025.01.03',
  },
};

export default function Booking() {
  return (
    <div className={styles.container}>
      <Head title="예매하기 | Exhibition" />
      <Header title="예매하기" />
      <img className={styles.thumnail} src={MOCK_ITEM.imageUrl} alt={MOCK_ITEM.title} />
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.info__title}>{MOCK_ITEM.title}</h2>
          <p className={styles.info__price}>{MOCK_ITEM.price.toLocaleString('ko')}원</p>
          <p className={styles.info__place}>{MOCK_ITEM.place}</p>
          <p className={styles.info__date}>
            {MOCK_ITEM.date.started} ~ {MOCK_ITEM.date.ended}
          </p>
          <button name="찜하기">
            <Star size={32} />
          </button>
        </div>
        <button className="btn btn-primary btn-lg" name="예매하기">
          예매하기
        </button>
      </div>
    </div>
  );
}
