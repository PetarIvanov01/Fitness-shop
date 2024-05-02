import useFetch from '../../../hooks/useFetch';

import sortingMenus from '../../../assets/utils/orderSortMenus.json';
import { getPartialOrders } from '../../../api/services/userService/orders';

import SelectSort from './components/SelectSort';
import OrderRow from './components/OrderRow';
import Skeleton from '../components/Skeleton';

/*
 - Pass data length to Skeleton component
*/
export default function OrderBody({ userId }: { userId: string }) {
    const { data, isLoading } = useFetch(getPartialOrders, [], userId);

    return (
        <section className="flex grow flex-col px-6 text-white">
            <div className="flex flex-wrap justify-center gap-5 ">
                {sortingMenus.map((e) => (
                    <SelectSort key={e.id} {...e} />
                ))}
            </div>
            <div className="flex flex-col gap-5 pt-10 ">
                {isLoading ? (
                    data.map((e) => <OrderRow key={e.order_id} {...e} />)
                ) : (
                    <Skeleton />
                )}
            </div>
        </section>
    );
}
