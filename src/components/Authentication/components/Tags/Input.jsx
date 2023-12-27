export default function Input({
    type,
    name,
    id,
    placeholder
}) {
    return <input className="w-full bg-gray-800 border-[1px] p-1 hover:opacity-65 focus:opacity-65"
        placeholder={placeholder} type={type} name={name} id={id} />
}