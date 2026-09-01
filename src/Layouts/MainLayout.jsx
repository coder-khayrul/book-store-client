import Header from '@/Components/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;