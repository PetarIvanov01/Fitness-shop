import { Link } from 'react-router-dom';
import useStore from '../../../../zustand/store';

export default function CartHeader() {
    const user = useStore((state) => state.user);
    return (
        <header className="flex w-full flex-col items-center gap-2 bg-slate-800 p-4 text-center opacity-90">
            {user.id ? (
                <p className="text-green-500 ">
                    Welcome back, Petar! Ready to make your purchase?
                </p>
            ) : (
                <p className="text-orange-300">
                    You don't have an account, and the purchase cannot be
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
