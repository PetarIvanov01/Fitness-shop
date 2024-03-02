export default function TableHead() {
    return (
        <thead>
            <tr className="max-sm:text-[0.8em]">
                <th className="w-1/2 p-2">Description</th>
                <th className="w-1/5 p-2">Quantity</th>
                <th className="w-1/5 p-2">Price</th>
            </tr>
        </thead>
    );
}
