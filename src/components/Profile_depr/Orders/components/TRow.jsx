const STATUS_COLORS = {
    Canceled: 'text-red-500',
    Finished: 'text-green-500',
    'In Process': 'text-orange-500',
};
export default function TRow({
    createdAt,
    order_id,
    quantity,
    priceForAllProducts,
    status,
}) {
    const statusColor = STATUS_COLORS[status];

    return (
        <tr className="border-b max-sm:text-[0.7em]">
            <td className="p-2 text-center">
                <span>{createdAt}</span>
            </td>
            <td className="p-2 text-center hover:cursor-pointer hover:underline">
                <span className="text-blue-300">{order_id}</span>
            </td>
            <td className="p-2 text-center">
                <span>{quantity}</span>
            </td>
            <td className="p-2 text-center">
                <span>$ {priceForAllProducts.toFixed(2)}</span>
            </td>
            <td className={`p-2 text-center ${statusColor}`}>
                <span>{status}</span>
            </td>
        </tr>
    );
}
