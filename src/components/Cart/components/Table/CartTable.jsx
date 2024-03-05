import { useEffect } from 'react';
import useStore from '../../../../zustand/store';
import TableHead from './TableHead';
import TableRow from './TableRow';

export default function TableCart() {
    const cartItems = useStore((state) => state.cart);
    const cartLength = useStore((state) => state.length);
    const fetchCartData = useStore((state) => state.fetchCartData);

    useEffect(() => {
        const abortController = new AbortController();

        if (cartItems.length !== cartLength) {
            fetchCartData(abortController.signal);
        }

        return () => {
            abortController.abort();
        };
    }, [fetchCartData, cartItems.length, cartLength]);

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
