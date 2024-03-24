export default function Field({
    value,
    handleOnChange,
    label,
    name,
    id,
    type,
    isEdit = false,
}) {
    return (
        <>
            <label htmlFor={name} className="text-white">
                {label}
            </label>
            <input
                disabled={isEdit}
                value={value}
                onChange={handleOnChange}
                className="h-8 rounded-sm border border-white bg-[#1B263E] py-4 pl-2"
                type={type}
                name={name}
                id={id}
            />
        </>
    );
}
