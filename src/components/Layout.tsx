import { Outlet, useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

export default function Layout() {
  const pathname = useLocation().pathname.split('/')[1];
  return (
    <div className='wrapper'>
      <Outlet />
      {pathname !== 'booking' && <BottomNavigation />}
    </div>
  );
}
