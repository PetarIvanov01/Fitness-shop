import useSWR from 'swr';

import sortingMenus from '../../../assets/utils/orderSortMenus.json';
import { getPartialOrders } from '../../../api/services/userService/orders';

import SelectSort from './components/SelectSort';
import OrderRow from './components/OrderRow';
import Skeleton from '../components/Skeleton';

/*
 - Pass data length to Skeleton component
*/
export default function OrderBody({
    userId,
    type,
}: {
    userId: string;
    type: string;
}) {
    const { data, isLoading } = useSWR(
        `${userId}-${type}`,
        () => getPartialOrders(userId, new AbortController().signal),
        { revalidateOnFocus: false }
    );

    return (
        <section className="flex grow flex-col px-6 text-white">
            <div className="flex flex-wrap justify-center gap-5 ">
                {sortingMenus.map((e) => (
                    <SelectSort key={e.id} {...e} />
                ))}
            </div>
            <div className="flex flex-col gap-5 pt-10 ">
                {!isLoading && data !== undefined ? (
                    data.map((e) => <OrderRow key={e.order_id} {...e} />)
                ) : (
                    <Skeleton />
                )}
            </div>
        </section>
    );
}
