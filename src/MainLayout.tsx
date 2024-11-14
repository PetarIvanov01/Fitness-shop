import { Toaster } from 'sonner';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Headers/MainHeader';

export default function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-500 bg-fitnes-img bg-cover bg-center bg-no-repeat object-contain bg-blend-multiply">
            <Header />

            <div className="flex min-h-screen flex-col py-8">
                <Outlet />
            </div>

            <Footer />

            <Toaster theme="dark" duration={2000} position="bottom-right" />
        </div>
    );
}
