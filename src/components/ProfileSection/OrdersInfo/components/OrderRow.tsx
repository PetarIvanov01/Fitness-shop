import { CgDetailsMore } from 'react-icons/cg';

const STATUS_COLORS = {
    Canceled: 'text-red-500',
    Finished: 'text-green-500',
    'In Process': 'text-orange-500',
} as const;

const STATUSES = {
    1: 'In Process',
    2: 'Finished',
    3: 'Canceled',
} as const;

type OrderRowProps = {
    order_id: string;
    status_id: number;
    order_date: Date;
    total_price: string;
};

export default function OrderRow({
    order_id,
    status_id,
    order_date,
    total_price,
}: OrderRowProps) {
    const status = STATUSES[status_id as keyof typeof STATUSES];
    const statusColor = STATUS_COLORS[status];

    const dateObject = new Date(order_date);

    const formattedDate = dateObject.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return (
        <div className="flex justify-between  border-b p-1">
            <div>
                <p>
                    <span className="">Order number: </span>
                    <span className="pl-1 font-semibold text-neutral-100 hover:underline hover:underline-offset-2">
                        {order_id.substring(0, Math.floor(order_id.length / 2))}
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
                        {formattedDate}
                    </span>
                </p>
            </div>

            <div className="flex flex-col items-center justify-between">
                <button className="self-end">
                    <CgDetailsMore className="h size-6 text-green-700 hover:scale-110 hover:border-2 hover:border-green-700 hover:text-green-400" />
                </button>
                <p className="">
                    Price: $ <span className="font-medium">{total_price}</span>
                </p>
            </div>
        </div>
    );
}
