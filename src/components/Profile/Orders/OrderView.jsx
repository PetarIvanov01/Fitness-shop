import { useState } from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { FaLongArrowAltUp } from 'react-icons/fa';
import TRow from './components/TRow';

const mockOrders = [
    {
        id: 1,
        title: 'Product A',
        quantity: 2,
        priceForAllProducts: 25.99,
        order_id: 'aksh1_20ddas0d12d',
        status: 'Canceled',
        createdAt: '2024 05-18 18:32',
    },
    {
        id: 2,
        title: 'Product B',
        quantity: 1,
        priceForAllProducts: 15.5,
        order_id: 'aksh120ddas_0d12d',
        status: 'Finished',
        createdAt: '2023 05-28 06:32',
    },
    {
        id: 3,
        title: 'Product C',
        quantity: 3,
        priceForAllProducts: 30.75,
        order_id: 'aksh12_0ddas0d12d',
        status: 'In Process',
        createdAt: '2024 02-18 08:32',
    },
];

export default function OrderView() {
    const [toggle, setToogle] = useState(false);
    const onClickToggleOrders = () => {
        setToogle((state) => !state);
    };

    const visibilityStyle = toggle ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]';

    return (
        <div className="flex flex-col gap-2 pt-3">
            <div className="flex flex-col items-center justify-center gap-2  text-center text-2xl font-semibold text-gray-200">
                Orders Information
                <button onClick={onClickToggleOrders}>
                    {toggle ? (
                        <FaLongArrowAltUp className="z-10 size-7 -translate-y-0 text-white transition delay-150 ease-linear hover:-translate-y-1" />
                    ) : (
                        <FaLongArrowAltDown className="z-10 size-7 -translate-y-1 text-white transition delay-150 ease-linear hover:-translate-y-0 " />
                    )}
                </button>
            </div>
            <div
                className={`grid transition-[grid-template-rows] duration-500 ${visibilityStyle}`}
            >
                <div className="mt-5 flex w-full border-collapse flex-col items-center justify-center overflow-hidden text-white">
                    <table className="w-full">
                        <thead className="border-b max-sm:text-[0.7em]">
                            <th className="p-2">Date</th>
                            <th className="p-2">Order ID</th>
                            <th className="p-2">Product Quantity</th>
                            <th className="p-2">Total Price</th>
                            <th className="p-2">Status</th>
                        </thead>
                        <tbody className="">
                            {mockOrders.map((order) => (
                                <TRow key={order.order_id} {...order} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
