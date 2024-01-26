export default function TableRow({ image, price, title }) {
    return (
        <tr className="border-b max-sm:text-[0.7em]">
            <td className="flex items-center p-2">
                <div className="p-2">
                    <img
                        className="size-24"
                        src={`http://localhost:5000/uploads/` + image}
                        alt={title}
                    />
                </div>

                <div>{title}</div>
            </td>

            <td className="p-2 text-center">
                <div>
                    <span className="border px-4 py-2">1</span>
                </div>
            </td>
            <td className="p-2 text-center">
                <div>{price} $</div>
            </td>
        </tr>
    );
}
