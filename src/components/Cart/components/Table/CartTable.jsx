import { useEffect } from 'react';
import useStore from '../../../../zustand/store';
import TableHead from './TableHead';
import TableRow from './TableRow';

export default function TableCart() {
    const cartItems = useStore((state) => state.cart);
    const fetchCartData = useStore((state) => state.fetchCartData);

    useEffect(() => {
        const abortController = new AbortController();

        if (cartItems.length === 0) {
            fetchCartData(abortController.signal);
        }

        return () => {
            abortController.abort();
        };
    }, [fetchCartData, cartItems.length]);

    return (
        <div className="grow px-4">
            <table className="w-full border-collapse border border-gray-300">
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
