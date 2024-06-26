import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

import { GrLinkNext } from 'react-icons/gr';
import { BsFillCartXFill } from 'react-icons/bs';

import useStore from '../../../zustand/store';

export default function CheckoutSection() {
    const id = useStore((state) => state.user?.id);
    const cart = useStore((state) => state.cart);
    const clearCartItem = useStore((state) => state.clearCartItem);

    const styleForUserCheckout =
        cart.length && id
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-slate-500 cursor-not-allowed';

    const totalPrice = useMemo(() => {
        if (cart.length === 0) return 0;

        return cart.reduce((prev, curr) => {
            return prev + Number(curr.price) * Number(curr.quantity);
        }, 0);
    }, [cart]);

    const onClickClearCart = () => {
        return () => {
            clearCartItem();
        };
    };

    const [effect, setEffect] = useState(false);

    const handlersEffects = {
        onClick: () => setEffect(true),
        onAnimationEnd: () => setEffect(false),
    };
    const showAnimation = effect && 'animate-wiggle';

    const allowedLink = (
        <Link
            {...handlersEffects}
            to={'checkout'}
            className={`flex ${showAnimation} ${styleForUserCheckout} items-center justify-center gap-2 rounded-md px-4 py-2 text-white transition duration-300 `}
        >
            Checkout <GrLinkNext />
        </Link>
    );

    return (
        <section className="mt-auto self-end p-4">
            <div className="flex min-w-52 flex-col gap-2 rounded-md bg-slate-900 bg-opacity-50 px-4 py-2">
                <p className="text-lg font-bold text-white">
                    Total Price: $ {totalPrice.toFixed(2)}
                </p>
                <div className="flex flex-col gap-2">
                    {cart.length && id ? (
                        allowedLink
                    ) : (
                        <button
                            {...handlersEffects}
                            className={`flex ${showAnimation} ${styleForUserCheckout} items-center justify-center gap-2 rounded-md px-4 py-2 text-white transition duration-300 `}
                        >
                            Checkout <GrLinkNext />
                        </button>
                    )}
                    <button
                        onClick={onClickClearCart()}
                        className="flex items-center justify-center gap-2 rounded-md bg-red-500 py-2 text-white transition duration-300 hover:bg-red-600"
                    >
                        Clear Cart <BsFillCartXFill />
                    </button>
                </div>
            </div>
        </section>
    );
}
