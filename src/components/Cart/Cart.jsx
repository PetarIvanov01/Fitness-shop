import { Link } from 'react-router-dom';
import useStore from '../../zustand/store';

import TableCart from './components/Table/CartTable';
import CheckoutSection from './components/CheckoutSection';

export default function Cart() {
    const user = useStore((state) => state.user);

    return (
        <div className="h-auto font-alegreya">
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

            <section className="flex max-h-full flex-col gap-8 bg-slate-800 text-white opacity-95">
                <TableCart />

                <CheckoutSection />

                <div className="rounded-md bg-slate-800 p-4">
                    <h2 className="mb-4 text-2xl font-bold">
                        Continue Shopping
                    </h2>
                    <p className="text-gray-300">
                        Explore more fitness equipment and accessories.
                        <Link
                            to={'/catalog'}
                            className="ml-1 underline hover:no-underline"
                        >
                            Go back to shopping
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
}
