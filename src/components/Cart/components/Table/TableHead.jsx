export default function TableHead() {

    return (
        <thead>
            <tr className="max-sm:text-[0.8em]">
                <th className="border border-gray-300 p-2 w-1/2">Description</th>
                <th className="border border-gray-300 p-2 w-1/5">Quantity</th>
                <th className="border border-gray-300 p-2 w-1/5">Price</th>
            </tr>
        </thead>
    )
};