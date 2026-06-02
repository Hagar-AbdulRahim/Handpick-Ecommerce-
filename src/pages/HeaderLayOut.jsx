import { TopHeader } from '../components/header/header/TopHeader';
import { BottomHeader } from '../components/header/header/BottomHeader';
import { Outlet } from 'react-router-dom';

export const HeaderLayOut = () => {
  return (
    <>
      <div className='main-header'>
        <TopHeader />
        <BottomHeader />
      </div>
      <Outlet />
    </>
  );
};
