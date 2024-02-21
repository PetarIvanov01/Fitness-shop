import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GetStarted from './components/GetStarted';
import LoginForm from './components/LoginForm';
import RegsiterForm from './components/RegisterForm';

export default function AuthenticationSection() {
    const navigate = useNavigate();
    const location = useLocation();

    const [showRegister, setRegisterStatus] = useState(
        location.pathname === '/register'
    );

    useEffect(() => {
        setRegisterStatus(location.pathname === '/register');
    }, [location.pathname]);

    const handleRegisterVisibility = () => {
        navigate(showRegister ? '/login' : '/register');
    };

    return (
        <section className="my-20 flex  flex-col bg-slate-900 bg-opacity-95 px-10 py-8 max-sm:text-[0.8em] ">
            <header>
                <h1 className="border-b-2 uppercase text-white ">
                    Join the Market
                </h1>
            </header>

            <div className="flex gap-2 pt-8">
                <GetStarted
                    handler={handleRegisterVisibility}
                    isGuest={showRegister}
                />

                {!showRegister && <LoginForm />}
            </div>

            {showRegister && <RegsiterForm />}
        </section>
    );
}
