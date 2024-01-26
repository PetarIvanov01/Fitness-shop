export default function SortBy() {
    return (
        <section className="flex flex-col">
            <section className="self-end">
                <div className="flex items-center gap-1 rounded-md bg-white p-0.5 text-gray-800">
                    <label htmlFor="sort">Sort By: </label>
                    <select
                        id="sort"
                        className="rounded bg-gray-800 p-1 text-white"
                    >
                        <option value="asc">A - Z</option>
                        <option value="desc">Z - A</option>
                    </select>
                </div>
            </section>

            <hr className="mt-2 border-white" />
        </section>
    );
}
