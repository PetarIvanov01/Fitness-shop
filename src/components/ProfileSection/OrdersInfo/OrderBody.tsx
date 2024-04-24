import useFetch from '../../../hooks/useFetch';

import { getPartialOrders } from '../../../api/services/userService/orders';

import SelectSort from './components/SelectSort';
import OrderRow from './components/OrderRow';
import Skeleton from '../components/Skeleton';

const sortingMenus = [
    {
        label: 'Price',
        id: 'sortByPrice',
        options: [
            { value: '', label: '-- Select --' },
            { value: 'high', label: 'High' },
            { value: 'low', label: 'Low' },
        ],
    },
    {
        label: 'Date',
        id: 'sortByDate',
        options: [
            { value: '', label: '-- Select --' },
            { value: 'new', label: 'Newest' },
            { value: 'old', label: 'Oldest' },
        ],
    },
    {
        label: 'Status',
        id: 'sortByStatus',
        options: [
            { value: '', label: '-- Select --' },
            { value: 'Canceled', label: 'Canceled' },
            { value: 'In Process', label: 'In Process' },
            { value: 'Finished', label: 'Finished' },
        ],
    },
];

/*
 - Pass data length to Skeleton component
*/
export default function OrderBody({ userId }) {
    const { data, isLoading } = useFetch(getPartialOrders, userId);

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
