import Head from '@components/Head';
import Header from '@components/Header';
import Loader from '@components/Loader';
import useBooking from '@hooks/useBooking';
import { Star } from '@phosphor-icons/react';
import styles from '@styles/booking.module.css';
import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const { data, isLoading, isError } = useBooking();
  const navigate = useNavigate();

  if (isError) {
    window.alert('해당 전시회를 찾을 수 없습니다. 다시 확인 후 조회하여 주십시오.');
    navigate('/', { replace: true });
  }

  return (
    <div className={styles.container}>
      <Head title="예매하기 | Exhibition" />
      <Header title="예매하기" />
      {isLoading && <Loader />}
      {data && (
        <>
          <img className={styles.thumnail} src={data.imageUrl} alt={data.title} />
          <div className={styles.content}>
            <div className={styles.info}>
              <h2 className={styles.info__title}>{data.title}</h2>
              <p className={styles.info__price}>{data.price.toLocaleString('ko')}원</p>
              <p className={styles.info__place}>{data.place}</p>
              <p className={styles.info__date}>
                {data.date.started} ~ {data.date.ended}
              </p>
              <button name="찜하기">
                <Star size={32} />
              </button>
            </div>
            <button className="btn btn-primary btn-lg" name="예매하기">
              예매하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}
