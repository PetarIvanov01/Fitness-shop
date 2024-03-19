export default function Field({
    value,
    handleOnChange,
    label,
    name,
    id,
    type,
}) {
    return (
        <>
            <label htmlFor={name} className="text-white">
                {label}
            </label>
            <input
                value={value}
                onChange={handleOnChange}
                className="h-8 rounded-sm border border-white bg-[#1B263E] p-1"
                type={type}
                name={name}
                id={id}
            />
        </>
    );
}
