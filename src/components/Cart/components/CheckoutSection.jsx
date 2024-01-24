import { useMemo } from "react";
import { GrLinkNext } from "react-icons/gr";
import { BsFillCartXFill } from "react-icons/bs";
import useStore from "../../../zustand/store"

export default function CheckoutSection() {

    const cart = useStore((state) => state.cart);
    const clearCartData = useStore((state) => state.clearCartData);

    const totalPrice = useMemo(() => {
        if (cart.length === 0) return 0;

        return cart.reduce((prev, curr) => {
            return prev + Number(curr.price)
        }, 0);

    }, [cart]);

    return (
        <section className="self-end p-4">
            <div className="bg-slate-800 px-4 py-2 flex flex-col gap-2 rounded-md">
                <p className="text-white font-bold text-lg">Total Price: $ {totalPrice.toFixed(2)}</p>
                <button className="flex items-center justify-center gap-2 bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600 transition duration-300">
                    Checkout <GrLinkNext />
                </button>
                <button onClick={clearCartData} className="flex items-center justify-center gap-2 bg-red-500 py-2 rounded-md text-white hover:bg-red-600 transition duration-300">
                    Clear Cart <BsFillCartXFill />
                </button>
            </div>
        </section>
    )
};