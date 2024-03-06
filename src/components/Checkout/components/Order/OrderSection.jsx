import { TbClipboardList } from 'react-icons/tb';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import TableRow from './components/TableRow';
import useStore from '../../../../zustand/store';
import { useMemo } from 'react';
// import { IoIosCheckboxOutline } from 'react-icons/io';

export default function OrderSection() {
    const cart = useStore((state) => state.cart);

    const OrderItems = cart.map((order) => {
        const orderInfo = {
            quantity: order.quantity,
            name: order.title,
            subtotal: Number(order.price) * Number(order.quantity),
        };
        return <TableRow key={order.product_id} {...orderInfo} />;
    });

    const totalPrice = useMemo(() => {
        if (cart.length === 0) return 0;

        return cart.reduce((prev, curr) => {
            return prev + Number(curr.price) * Number(curr.quantity);
        }, 0);
    }, [cart]);

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
                    {OrderItems}
                    <tbody className="text-left">
                        <tr className="border text-left max-sm:text-[0.7em]">
                            <td className="p-2 font-semibold">
                                <span>Subtotal:</span>
                            </td>
                            <td className="p-2 ">
                                <span className="">$ 3232,23</span>
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

            <section className="flex flex-wrap justify-between gap-4 pt-6">
                <div className="w-2/3">
                    <div className="flex items-center gap-2">
                        <p>Receive special offers by email?</p>
                        <MdCheckBoxOutlineBlank
                            className="cursor-pointer hover:scale-105"
                            size={20}
                        />
                    </div>
                    <p className="text-[0.7em] font-extralight">
                        Your provided information will be used to process your
                        order and for other purposes outlined in our privacy
                        policy. By proceeding, you agree to our privacy policy.
                    </p>
                </div>
                <button className="h-max w-max border border-[#EDAD09] px-1 text-xl text-[#EDAD09] hover:opacity-60">
                    Complete Purchase
                </button>
            </section>
        </section>
    );
}
