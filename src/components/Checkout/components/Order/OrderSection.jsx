import { memo, useEffect, useState } from 'react';
import useStore from '../../../../zustand/store';

import { TbClipboardList } from 'react-icons/tb';
import FinishOrder from './FinishOrder';
import OrderTable from './components/OrderTable';

const OrderSection = memo(function OrderSection({ orderData }) {
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

    orderData.orderInfo.totalPrice = Math.round(totalPrice * 100) / 100;
    orderData.orderProducts = cart.map((e) => ({
        _productId: e.product_id,
        quantity: e.quantity,
        subtotal: Number(e.price),
    }));

    return (
        <section className="px-4 pb-14 pt-6 text-white">
            <header className="flex items-center gap-3 pb-5">
                <h2 className="text-xl font-semibold">Your Order</h2>
                <TbClipboardList size={35} />
            </header>

            <OrderTable cart={cart} totalPrice={totalPrice} />

            <FinishOrder orderData={orderData} />
        </section>
    );
});

export default OrderSection;
