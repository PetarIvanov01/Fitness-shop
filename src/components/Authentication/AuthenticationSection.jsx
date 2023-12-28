import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import LoginForm from "./components/LoginForm";
import RegsiterForm from "./components/RegisterForm";

export default function AuthenticationSection() {

    const navigate = useNavigate();
    const location = useLocation();

    const [showRegister, setRegisterStatus] = useState(location.pathname === '/register');

    useEffect(() => {
        setRegisterStatus(location.pathname === '/register');
    }, [location.pathname]);

    const handleRegisterVisibility = () => {
        navigate(showRegister ? '/login' : '/register');
    };

    return (
        <section className="flex flex-col  bg-slate-900 opacity-95 max-sm:text-[0.8em] px-10 my-20 py-8 ">

            <header>
                <h1 className="uppercase border-b-2 text-white ">Join the Market</h1>
            </header>

            <div className="flex gap-2 pt-8">

                <GetStarted handler={handleRegisterVisibility} isGuest={showRegister} />

                {!showRegister && <LoginForm />}

            </div>

            {showRegister && <RegsiterForm />}

        </section>
    );
};
