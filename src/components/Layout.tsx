import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="overflow-x-hidden w-full relative">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
