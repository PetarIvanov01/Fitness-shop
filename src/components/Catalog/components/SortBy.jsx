export default function SortBy() {


    return (
        <section className='flex flex-col'>

            <section className="self-end">
                <div className="flex items-center gap-1 p-0.5 text-gray-800 bg-white rounded-md">
                    <label htmlFor="sort">Sort By: </label>
                    <select id="sort" className="bg-gray-800 text-white rounded p-1">
                        <option value="asc">A - Z</option>
                        <option value="desc">Z - A</option>
                    </select>
                </div>

            </section>

            <hr className='border-white mt-2' />
        </section>

    )
}
