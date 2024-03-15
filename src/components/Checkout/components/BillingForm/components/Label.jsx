export default function Label({ children, id }) {
    return (
        <label
            id={id}
            className="flex w-max gap-1 pb-1 font-alegreya font-semibold text-gray-300"
        >
            {children}
        </label>
    );
}
