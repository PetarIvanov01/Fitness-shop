export default function Input({
    name,
    value,
    isEdit = false,
    handleOnChange,
    width = 200,
    placeholder,
}) {
    const editStyles = `${isEdit ? 'text-blue-300 border-blue-300' : 'text-white focus:bg-slate-800 focus:opacity-95 focus:outline-none focus:ring-1 focus:ring-blue-300'}`;
    const customWidth =
        typeof width === 'number' ? `w-[${width}px] ` : `w-${width} `;
    return (
        <input
            placeholder={placeholder}
            disabled={isEdit}
            type="text"
            name={name}
            onChange={handleOnChange}
            className={` ${customWidth} ${editStyles} border bg-gray-800 p-1`}
            value={value || ''}
        />
    );
}
