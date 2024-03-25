import { CgDetailsMore } from 'react-icons/cg';

const STATUS_COLORS = {
    Canceled: 'text-red-500',
    Finished: 'text-green-500',
    'In Process': 'text-orange-500',
};

export default function OrderRow({
    order_id,
    status,
    createdAt,
    priceForAllProducts,
}) {
    const statusColor = STATUS_COLORS[status];

    return (
        <div className="flex justify-between  border-b p-1">
            <div>
                <p>
                    <span className="">Order number: </span>
                    <span className="pl-1 font-semibold text-neutral-100 hover:underline hover:underline-offset-2">
                        {order_id}
                    </span>
                </p>
                <p>
                    <span>Order status: </span>
                    <span
                        className={`pl-1 hover:underline hover:underline-offset-2 ${statusColor}`}
                    >
                        {status}
                    </span>
                </p>
                <p>
                    <span>Order data: </span>
                    <span className="pl-1 text-neutral-100 hover:underline hover:underline-offset-2">
                        {createdAt}
                    </span>
                </p>
            </div>

            <div className="flex flex-col items-center justify-between">
                <button className="self-end">
                    <CgDetailsMore className="h size-6 text-green-700 hover:scale-110 hover:border-2 hover:border-green-700 hover:text-green-400" />
                </button>
                <p className="">
                    Price: ${' '}
                    <span className="font-medium">{priceForAllProducts}</span>
                </p>
            </div>
        </div>
    );
}
