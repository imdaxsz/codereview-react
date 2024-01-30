import { Outlet, useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  // 페이지 이동 시 스크롤 위치 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='wrapper'>
      <Outlet />
      {pathname !== 'booking' && <BottomNavigation />}
    </div>
  );
}
