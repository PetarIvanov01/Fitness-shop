import { useEffect, useMemo } from 'react';
import useStore from '../../../../zustand/store';
import TableHead from './TableHead';
import TableRow from './TableRow';

export default function TableCart() {
    const cartItems = useStore((state) => state.cart);
    const cartLengthInCookie = useStore((state) => state.length);
    const fetchCartData = useStore((state) => state.fetchCartData);

    const cartItemsLengthInStore = useMemo(() => {
        if (cartItems.length === 0) return 0;
        return cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
    }, [cartItems]);

    useEffect(() => {
        const abortController = new AbortController();

        if (cartItemsLengthInStore !== cartLengthInCookie) {
            fetchCartData(abortController.signal);
        }

        return () => {
            abortController.abort();
        };
    }, [fetchCartData, cartItemsLengthInStore, cartLengthInCookie]);

    return (
        <div className="px-4">
            <table className="w-full">
                <TableHead />

                <tbody>
                    {cartItems.map((e) => (
                        <TableRow key={e.product_id} {...e} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
