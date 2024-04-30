type Props = {
    name: string;
    value: string | number;
    isEdit?: boolean;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string | number;
    placeholder?: string;
};
export default function Input({
    name,
    value,
    isEdit = false,
    handleOnChange,
    width = 200,
    placeholder,
}: Props) {
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
