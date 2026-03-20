import { Outlet } from 'react-router';
import Sidebar from './Sidebar';

const MainLayout = () => {
    return (
        <div className="flex">
            <div className="w-20">
                <Sidebar />
            </div>
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;