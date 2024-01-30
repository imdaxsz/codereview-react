import BookingModal from '@components/BookingModal';
import Head from '@components/Head';
import Header from '@components/Header';
import Loader from '@components/Loader';
import WishButton from '@components/WishButton';
import useBooking from '@hooks/useBooking';
import useModal from '@hooks/useModal';
import styles from '@styles/booking.module.css';
import { sleep } from '@utils/sleep';
import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const { data, isLoading, setIsLoading, isError } = useBooking();
  const navigate = useNavigate();
  const {
    isOpen: isBookingModalOpen,
    open: openBookingModal,
    close: closeBookingModal,
  } = useModal();
  const { isOpen: isAlertModalOpen, open: openAlertModal, close: closeAlertModal } = useModal();

  if (isError) {
    window.alert('해당 전시회를 찾을 수 없습니다. 다시 확인 후 조회해 주세요.');
    navigate('/', { replace: true });
  }

  const onClickBook = () => {
    openBookingModal();
  };

  const onBook = async () => {
    setIsLoading(true);
    await sleep({ ms: 400 });
    setIsLoading(false);
    openAlertModal();
    closeBookingModal();
  };

  const onClickOk = () => {
    closeAlertModal();
    navigate('/');
  };

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
              <WishButton item={data} size="lg" />
            </div>
            <button className="btn btn-primary btn-lg" aria-label="예매하기" onClick={onClickBook}>
              예매하기
            </button>
          </div>
        </>
      )}

      <BookingModal
        isLoading={isLoading}
        onBook={onBook}
        onClickOk={onClickOk}
        onClose={closeBookingModal}
        isModalOpen={isBookingModalOpen}
        isAlertOpen={isAlertModalOpen}
      />
    </div>
  );
}
