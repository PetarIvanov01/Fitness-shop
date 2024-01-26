export default function Filter({ title, options }) {
    return (
        <div className="mb-4 w-full">
            <p className="mb-2 text-white">{title}</p>
            <select className="w-full rounded bg-gray-800 p-1 text-white">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
}
