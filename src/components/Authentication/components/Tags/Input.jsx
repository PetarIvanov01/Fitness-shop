export default function Input({
    type,
    name,
    id,
    placeholder,
    handler,
    value,
    pattern = null,
    title = 'Field is required',
    onblur,
    onfocus,
    error,
}) {
    return (
        <input
            className={`${error && 'border-red-500'} w-full border-[1px] bg-gray-800 p-1 hover:opacity-65 focus:bg-slate-800 focus:opacity-65 focus:outline-none focus:ring-2 focus:ring-blue-300`}
            value={value}
            onChange={handler}
            onBlur={onblur}
            onFocus={onfocus}
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
