export default function ErrorLabel({ error }) {
    if (!error) return null;

    return <div className=" self-end text-[0.8em] text-red-500">{error}</div>;
}
