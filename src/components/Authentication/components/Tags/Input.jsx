export default function Input({
    type,
    name,
    id,
    placeholder,
    handler,
    value,
    pattern = null,
    title = 'Field is required',
}) {
    return (
        <input
            className="w-full border-[1px] bg-gray-800 p-1 hover:opacity-65 focus:opacity-65"
            value={value}
            onChange={handler}
            placeholder={placeholder}
            type={type}
            name={name}
            pattern={pattern}
            id={id}
            required
            title={title}
        />
    );
}
