import { TbClipboardList } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import useStore from '../../../../zustand/store';

import TableRow from './components/TableRow';
import FinishOrder from './FinishOrder';

export default function OrderSection() {
    const fetchCartData = useStore((state) => state.fetchCartData);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        fetchCartData(abortController.signal).then(setCart);

        return () => {
            abortController.abort();
        };
    }, [fetchCartData]);

    const totalPrice =
        cart.length === 0
            ? 0
            : cart.reduce((prev, curr) => {
                  return prev + Number(curr.price) * Number(curr.quantity);
              }, 0);

    return (
        <section className="px-4 pb-14 pt-6 text-white">
            <header className="flex items-center gap-3 pb-5">
                <h2 className="text-xl font-semibold">Your Order</h2>
                <TbClipboardList size={35} />
            </header>

            <div className="w-full  text-white">
                <table className="w-full text-left">
                    <thead className="border max-sm:text-[0.7em]">
                        <tr>
                            <th className="p-2">Product</th>
                            <th className="p-2">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {cart.length > 0 &&
                            cart.map((order) => {
                                const orderInfo = {
                                    quantity: order.quantity,
                                    name: order.title,
                                    subtotal:
                                        Number(order.price) *
                                        Number(order.quantity),
                                };
                                return (
                                    <TableRow
                                        key={order.product_id}
                                        {...orderInfo}
                                    />
                                );
                            })}
                        <tr className="border text-left max-sm:text-[0.7em]">
                            <td className="p-2 font-semibold">
                                <span>Subtotal:</span>
                            </td>
                            <td className="p-2 ">
                                <span className="">$ 3232.23</span>
                            </td>
                        </tr>

                        <tr className="border max-sm:text-[0.7em]">
                            <td className="p-2 font-semibold">
                                <span>Shipping:</span>
                            </td>
                            <td className="p-2 hover:cursor-pointer hover:underline">
                                <span className="">$ 25</span>
                            </td>
                        </tr>

                        <tr className="border max-sm:text-[0.7em]">
                            <td className="p-2 font-bold">
                                <span>Total:</span>
                            </td>
                            <td className="p-2 hover:cursor-pointer hover:underline">
                                <span className="font-semibold">
                                    $ {totalPrice.toFixed(2)}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <FinishOrder />
        </section>
    );
}
