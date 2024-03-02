export default function Input({
    name,
    value,
    isEdit = false,
    handleOnChange,
    width = 200,
    placeholder,
}) {
    const editStyles = `${isEdit ? 'text-gray-300 ' : 'hover:opacity-75 text-white '}`;
    const customWidth =
        typeof width === 'number' ? `w-[${width}px]` : `w-${width}`;
    return (
        <input
            placeholder={placeholder}
            disabled={isEdit}
            type="text"
            name={name}
            onChange={handleOnChange}
            className={`${customWidth} border-[1px] bg-zinc-700 p-1  ${editStyles}
         focus:bg-slate-800 focus:opacity-95 focus:outline-none focus:ring-1 focus:ring-blue-300`}
            value={value}
        />
    );
}
