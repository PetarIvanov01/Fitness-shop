import SelectSort from './components/SelectSort';
import OrderRow from './components/OrderRow';

const mockOrders = [
    {
        id: 1,
        title: 'Product A',
        quantity: 2,
        priceForAllProducts: 2523.99,
        order_id: 'aksh1_20ddas0d12d',
        status: 'Canceled',
        createdAt: '2024 05-18 18:32',
    },
    {
        id: 2,
        title: 'Product B',
        quantity: 1,
        priceForAllProducts: 1521.5,
        order_id: 'aksh120ddas_0d12d',
        status: 'Finished',
        createdAt: '2023 05-28 06:32',
    },
    {
        id: 3,
        title: 'Product C',
        quantity: 3,
        priceForAllProducts: 3033.75,
        order_id: 'aksh12_0ddas0d12d',
        status: 'In Process',
        createdAt: '2024 02-18 08:32',
    },
];

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
            { value: 'new', label: 'New' },
            { value: 'old', label: 'Old' },
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

export default function OrderBody() {
    return (
        <section className="flex grow flex-col px-6 text-white">
            <div className="flex flex-wrap justify-center gap-5 ">
                {sortingMenus.map((e) => (
                    <SelectSort key={e.id} {...e} />
                ))}
            </div>
            <div className="flex flex-col gap-5 pt-10 ">
                {mockOrders.map((e) => (
                    <OrderRow key={e.id} {...e} />
                ))}
            </div>
        </section>
    );
}
