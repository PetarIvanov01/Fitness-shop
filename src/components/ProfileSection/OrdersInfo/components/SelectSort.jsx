export default function SelectSort({ label, id, options }) {
    return (
        <div className="flex flex-col items-center justify-center  px-1 py-2">
            <label htmlFor={id} className="sorting-title text-neutral-50">
                {label}
            </label>
            <select
                className="rounded-md bg-gray-700 px-1 text-zinc-300"
                id={id}
            >
                {options.map((e) => (
                    <option key={e.value} value={e.value}>
                        {e.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
