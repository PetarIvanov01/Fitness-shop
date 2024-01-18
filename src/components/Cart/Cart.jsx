import { Link, useOutletContext } from "react-router-dom";

import TableCart from "./components/Table/CartTable";
import CheckoutSection from "./components/CheckoutSection";

export default function Cart() {

    const context = useOutletContext();

    return (

        <div className="h-auto font-alegreya">
            <header className="w-full bg-slate-800 opacity-90 p-4 flex flex-col items-center gap-2 text-center">
                {context.hasUser ? (
                    <p className="text-green-500 ">
                    Welcome back, Petar! Ready to make your purchase?
                </p>
                ) : (
                    <p className="text-orange-300">
                        You don't have an account, and the purchase cannot be performed.
                        Please <Link to={'/login'} className="underline">Log In</Link>.
                    </p>
                )}
            </header>

            <section className="flex flex-col gap-8 max-h-full bg-slate-800 opacity-95 text-white">

                <TableCart />

                <CheckoutSection />

                <div className="bg-slate-800 p-4 rounded-md">
                    <h2 className="text-2xl font-bold mb-4">Continue Shopping</h2>
                    <p className="text-gray-300">
                        Explore more fitness equipment and accessories.
                        <Link to={'/shop'} className="underline ml-1 hover:no-underline">Go back to shopping</Link>.
                    </p>
                </div>

            </section>
        </div>
    )
};