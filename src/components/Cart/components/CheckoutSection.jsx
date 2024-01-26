import { useMemo } from 'react';
import { GrLinkNext } from 'react-icons/gr';
import { BsFillCartXFill } from 'react-icons/bs';
import useStore from '../../../zustand/store';

export default function CheckoutSection() {
    const cart = useStore((state) => state.cart);
    const clearCartData = useStore((state) => state.clearCartData);

    const totalPrice = useMemo(() => {
        if (cart.length === 0) return 0;

        return cart.reduce((prev, curr) => {
            return prev + Number(curr.price);
        }, 0);
    }, [cart]);

    return (
        <section className="self-end p-4">
            <div className="flex flex-col gap-2 rounded-md bg-slate-800 px-4 py-2">
                <p className="text-lg font-bold text-white">
                    Total Price: $ {totalPrice.toFixed(2)}
                </p>
                <button className="flex items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600">
                    Checkout <GrLinkNext />
                </button>
                <button
                    onClick={clearCartData}
                    className="flex items-center justify-center gap-2 rounded-md bg-red-500 py-2 text-white transition duration-300 hover:bg-red-600"
                >
                    Clear Cart <BsFillCartXFill />
                </button>
            </div>
        </section>
    );
}
