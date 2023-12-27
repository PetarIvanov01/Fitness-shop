export default function Label({
    htmlFor,
    text
}) {
    return <label className="text-[0.95em] font-thin" htmlFor={htmlFor}>{text}</label>
}