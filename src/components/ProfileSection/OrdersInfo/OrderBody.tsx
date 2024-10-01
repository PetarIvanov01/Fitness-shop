import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import { PartialOrderType } from '../../../types/services/profile';

import sortingMenus from '../../../assets/utils/orderSortMenus.json';

import Skeleton from '../components/Skeleton';
import SelectSort from './components/SelectSort';
import OrderRow from './components/OrderRow';

export default function OrderBody() {
    const { data } = useLoaderData() as { data: Promise<PartialOrderType> };

    return (
        <section className="flex grow flex-col px-6 text-white">
            <div className="flex flex-wrap justify-center gap-5 ">
                {sortingMenus.map((e) => (
                    <SelectSort key={e.id} {...e} />
                ))}
            </div>

            <Suspense fallback={<Skeleton />}>
                <div className="flex flex-col gap-5 pt-10 ">
                    <Await resolve={data}>
                        {(orders: PartialOrderType) => {
                            return orders.map((e) => (
                                <OrderRow key={e.order_id} {...e} />
                            ));
                        }}
                    </Await>
                </div>
            </Suspense>
        </section>
    );
}
