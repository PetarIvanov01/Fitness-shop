export default function TableRow({ quantity, priceForAllProducts, name }) {
    return (
        <tr className="border max-sm:text-[0.7em]">
            <td className="p-2 ">
                <span className="text-[#93C5FD] hover:cursor-pointer hover:underline">
                    {name}
                </span>{' '}
                <span className="px-2 text-gray-600">x </span>{' '}
                <span>{quantity}</span>
            </td>
            <td className="p-2">
                <span>$ {priceForAllProducts.toFixed(2)}</span>
            </td>
        </tr>
    );
}
