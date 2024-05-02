import { useEffect, useState } from 'react';

import useQuery from '../../../hooks/useQuery';
import useDebounce from '../../../hooks/useDebounce';

const VALID_SORT = {
    desc: 'desc',
    asc: 'asc',
} as const;

type ValidSortType = keyof typeof VALID_SORT;

export default function SortBy() {
    const { queryObj, handleQueryChange } = useQuery();
    const [selectedOption, setSelectedOption] = useState<ValidSortType>(() => {
        if (queryObj.sort_by === VALID_SORT.desc) {
            return VALID_SORT.desc;
        }
        return VALID_SORT.asc;
    });

    const debouncedVal = useDebounce(selectedOption, 700);

    useEffect(() => {
        handleQueryChange({
            sort_by: debouncedVal,
        });
    }, [debouncedVal, handleQueryChange]);

    const onSelectChangeQuery = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const queryValue = e.target.value;
        if (VALID_SORT.asc === queryValue || VALID_SORT.desc === queryValue) {
            setSelectedOption(queryValue);
        }
    };

    return (
        <section className="flex flex-col max-s:self-start max-s:pt-2 ">
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
        </section>
    );
}
