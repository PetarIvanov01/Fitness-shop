export default function Filter({
    title,
    options
}) {
    return (
        <div className="mb-4 w-full">
            <p className="text-white mb-2">{title}</p>
            <select className="bg-gray-800 text-white p-1 rounded w-full">
                {options.map(option => <option key={option.value} value={option.value}>{option.value}</option>)}
            </select>
        </div>
    )
}
