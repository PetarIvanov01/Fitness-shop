import { TbClipboardList } from 'react-icons/tb';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import TableRow from './components/TableRow';
// import { IoIosCheckboxOutline } from 'react-icons/io';

const mockOrders = [
    {
        id: 1,
        title: 'Product A',
        quantity: 2,
        priceForAllProducts: 25.99,
        name: 'Loaded Decline Chest Press',
        createdAt: '2024 05-18 18:32',
    },
    {
        id: 2,
        title: 'Product B',
        quantity: 1,
        priceForAllProducts: 15.5,
        name: 'Loaded Bench Press',
        createdAt: '2023 05-28 06:32',
    },
];

export default function OrderSection() {
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
                        {mockOrders.map((order) => (
                            <TableRow key={order.id} {...order} />
                        ))}
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
                                <span className="font-semibold">$ 3232,23</span>
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
