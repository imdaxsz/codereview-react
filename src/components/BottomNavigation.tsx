import { Star, Ticket } from '@phosphor-icons/react';
import styles from '@styles/navigation.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNavigation() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.container}>
      <Link to="/" className={`${pathname === '/' && styles.active}`}>
        <Ticket size={18} weight="fill" />
        <span>전시회</span>
      </Link>
      <Link to="/wishlist" className={`${pathname === '/wishlist' && styles.active}`}>
        <Star size={18} weight="fill" />
        <span>찜목록</span>
      </Link>
    </nav>
  );
}
