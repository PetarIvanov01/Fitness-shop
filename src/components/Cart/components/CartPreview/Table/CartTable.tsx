import { useEffect } from 'react';

import useStore from '../../../../../zustand/store';

import TableHead from './TableHead';
import TableRow from './TableRow';
import ArrowSvg from './ArrowSvg';
import CatalogLink from '../../../../CatalogLink';

export default function TableCart() {
    const cartItems = useStore((state) => state.cart);
    const cartLengthInWebStorage = useStore((state) => state.length);
    const fetchCartData = useStore((state) => state.fetchCartData);
    const shouldFetchCart = useStore((state) => state.shouldFetchCart);

    useEffect(() => {
        const abortController = new AbortController();

        if (shouldFetchCart()) {
            fetchCartData(abortController.signal);
        }

        return () => {
            abortController.abort();
        };
    }, [fetchCartData, shouldFetchCart]);

    return (
        <div className="px-4">
            {cartLengthInWebStorage > 0 ? (
                <table className="w-full">
                    <TableHead />
                    <tbody>
                        {cartItems.map((e) => (
                            <TableRow key={e.product_id} {...e} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="relative flex w-fit flex-col pl-9 pt-9 max-[670px]:gap-4 max-[670px]:text-center">
                    <div className="flex flex-col gap-2 text-center text-2xl text-orange-500">
                        <p className="font-semibold">
                            Oops! Your cart is empty.
                        </p>
                        <p className="text-neutral-400">
                            It seems like you haven&apos;t found your perfect
                            gear yet. Let&apos;s fix that!
                        </p>
                    </div>

                    <ArrowSvg />

                    <div className="absolute left-[60%] top-[275%] w-full max-[670px]:relative max-[670px]:left-0 max-[670px]:top-0">
                        <p className="text-2xl text-neutral-400">
                            Explore our{' '}
                            <CatalogLink>
                                <span className="text-orange-500 underline transition-colors duration-300 hover:text-orange-700">
                                    collection
                                </span>
                            </CatalogLink>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
