import { useState } from 'react';
import useQuery from '../../../hooks/useQuery';

export default function SortBy() {
    const { queryObj, handleQueryChange } = useQuery();
    const [selectedOption, setSelectedOption] = useState(() => {
        if (queryObj['sort_by'] === 'desc') {
            return 'desc';
        }
        return 'asc';
    });

    const onSelectChangeQuery = (e) => {
        const queryParam = e.target.id;
        const queryValue = e.target.value;

        handleQueryChange({
            [queryParam]: queryValue,
        });

        setSelectedOption(queryValue);
    };

    return (
        <section className="flex flex-col">
            <section className="self-end">
                <div className="flex items-center gap-1 rounded-md bg-white p-0.5 text-gray-800">
                    <label htmlFor="sort">Sort By: </label>
                    <select
                        id="sort_by"
                        value={selectedOption}
                        onChange={onSelectChangeQuery}
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
