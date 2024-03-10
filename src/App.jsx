import { Toaster } from 'sonner';
import Footer from './components/Footer/Footer';
import Header from './components/Headers/MainHeader';
import Router from './components/Routes/Router';

export default function App() {
    return (
        <div className="flex flex-col bg-fitnes-img bg-cover bg-center bg-no-repeat ">
            <Header />

            <Router />

            <Footer />

            <Toaster theme="dark" duration={2000} position="bottom-right" />
        </div>
    );
}
