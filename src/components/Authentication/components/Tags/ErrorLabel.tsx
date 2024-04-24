export default function ErrorLabel({ error, id = '' }) {
    if (!error) return null;

    return (
        <div
            data-test={`error-${id}`}
            className="self-end text-[0.8em] text-red-500"
        >
            {error}
        </div>
    );
}
