import { Link } from 'react-router-dom';

import TableCart from './components/Table/CartTable';
import CheckoutSection from './components/CheckoutSection';
import CartHeader from './components/Table/CartHeader';

export default function Cart() {
    return (
        <div className="h-auto font-alegreya">
            <CartHeader />

            <section className="flex max-h-full flex-col gap-8 bg-slate-800 bg-opacity-95 text-white">
                <TableCart />

                <CheckoutSection />

                <div className="rounded-md bg-slate-800 bg-opacity-85 p-4">
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
