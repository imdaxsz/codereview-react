import Modal from './Modal';
import styles from '@styles/booking.module.css';

interface Props {
  isLoading: boolean;
  isModalOpen: boolean;
  isAlertOpen: boolean;
  onClose: () => void;
  onBook: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickOk: () => void;
}

export default function BookingModal({
  isLoading,
  isModalOpen,
  isAlertOpen,
  onClose,
  onBook,
  onClickOk,
}: Props) {
  return (
    <>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <Modal.Content>
            <div className={styles.modal__content}>
              티켓을 예매하시겠습니까?
              <br />
              예매 내역은 이메일로 전송됩니다
            </div>
          </Modal.Content>
          <Modal.Action>
            <button
              name="확인"
              className="btn btn-primary btn-md"
              disabled={isLoading}
              onClick={onBook}
            >
              확인
            </button>
            <button
              name="취소"
              className="btn btn-neutral btn-md"
              disabled={isLoading}
              onClick={onClose}
            >
              취소
            </button>
          </Modal.Action>
        </Modal>
      )}
      {isAlertOpen && (
        <Modal onClose={onClickOk}>
          <Modal.Content>
            <div className={styles.modal__content}>예매가 완료되었습니다</div>
          </Modal.Content>
          <Modal.Action>
            <button name="확인" className="btn btn-primary btn-md" onClick={onClickOk}>
              확인
            </button>
          </Modal.Action>
        </Modal>
      )}
    </>
  );
}
