import styles from '@styles/modal.module.css';
import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props extends PropsWithChildren {
  onClose: () => void;
}

export default function Modal({ onClose, children }: Props) {
  const container = document.getElementById('modal');

  // 모달 외부 화면 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: ${window.innerWidth - document.body.clientWidth > 0 ? 'scroll' : 'hidden'};
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

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
