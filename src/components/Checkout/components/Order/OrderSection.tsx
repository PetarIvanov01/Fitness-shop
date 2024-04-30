import { memo, useEffect, useState } from 'react';
import { ProductInCart } from '../../../../zustand/interfaces/CartSlice';

import useStore from '../../../../zustand/store';

import FinishOrder from './FinishOrder';
import OrderTable from './components/OrderTable';
import { TbClipboardList } from 'react-icons/tb';

type Props = {
    orderData: {
        orderInfo: {
            _userId: string;
            orderAddress: {
                address: string;
                country: string;
                city: string;
                postcode: number;
            };
        };
    };
};

const OrderSection = memo(function OrderSection({ orderData }: Props) {
    const fetchCartData = useStore((state) => state.fetchCartData);
    const [cart, setCart] = useState<ProductInCart[]>([]);

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

    const finishedOrderData = {
        ...orderData,
        orderInfo: {
            ...orderData.orderInfo,
            totalPrice: Math.round(totalPrice * 100) / 100,
        },
        orderProducts: cart.map((e) => ({
            _productId: e.product_id,
            quantity: e.quantity,
            subtotal: Number(e.price),
        })),
    };

    return (
        <section className="px-4 pb-14 pt-6 text-white">
            <header className="flex items-center gap-3 pb-5">
                <h2 className="text-xl font-semibold">Your Order</h2>
                <TbClipboardList size={35} />
            </header>

            <OrderTable cart={cart} totalPrice={totalPrice} />

            <FinishOrder finishedOrderData={finishedOrderData} />
        </section>
    );
});

export default OrderSection;
