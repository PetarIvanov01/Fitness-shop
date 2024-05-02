type TableProps = {
    quantity: number;
    name: string;
    subtotal: number;
};
export default function TableRow({ quantity, name, subtotal }: TableProps) {
    //Todo Add class when hover over the name to show the image
    return (
        <tr className="border max-bil-s:text-sm">
            <td className="p-2 ">
                <span className="text-[#93C5FD] hover:cursor-pointer hover:underline">
                    {name}
                </span>{' '}
                <span className="px-2 text-gray-600">x </span>{' '}
                <span>{quantity}</span>
            </td>
            <td className="p-2">
                <span>$ {subtotal}</span>
            </td>
        </tr>
    );
}
