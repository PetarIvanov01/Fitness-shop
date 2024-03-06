import { Link } from 'react-router-dom';
import useStore from '../../../zustand/store';

export default function CartHeader() {
    const firstName = useStore((state) => state.personalInfo?.firstName);

    return (
        <header className="flex w-full flex-col items-center gap-2 bg-slate-900 p-4 text-center opacity-90">
            {firstName ? (
                <p className="text-green-500 ">
                    Welcome back, <span className="font-bold">{firstName}</span>
                    ! Ready to make your purchase?
                </p>
            ) : (
                <p className="text-orange-300">
                    You don&apos;t have an account, and the purchase cannot be
                    performed. Please{' '}
                    <Link to={'/login'} className="underline">
                        Log In
                    </Link>
                    .
                </p>
            )}
        </header>
    );
}
