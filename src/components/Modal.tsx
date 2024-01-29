import styles from '@styles/modal.module.css';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface Props extends PropsWithChildren {
  onClose: () => void;
}

export default function Modal({ onClose, children }: Props) {
  const container = document.getElementById('modal');
  return (
    container &&
    createPortal(
      <div className={styles.backdrop} onClick={onClose} role="dialog">
        <div className={styles.container} role="document" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      container,
    )
  );
}

function ModalContent({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

function ModalAction({ children }: PropsWithChildren) {
  return <div className={styles.action}>{children}</div>;
}

Modal.Content = ModalContent;
Modal.Action = ModalAction;
