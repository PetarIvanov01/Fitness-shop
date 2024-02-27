export default function Input({ value, isEdit = false }) {
    const editStyles = `${isEdit ? ' ' : 'hover:opacity-75 bg-white '}`;

    return (
        <input
            disabled={isEdit}
            type="text"
            className={`max-w-[250px] border-[1px] bg-zinc-700 p-1 text-white ${editStyles} focus:bg-slate-800 focus:opacity-95 focus:outline-none focus:ring-1 focus:ring-blue-300`}
            defaultValue={value}
        />
    );
}
