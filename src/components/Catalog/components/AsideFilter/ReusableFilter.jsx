import { useEffect, useState } from 'react';
import useQuery from '../../../../hooks/useQuery';

export default function Filter({ id, title, options }) {
    const { queryObj, handleQueryChange } = useQuery();
    const [selectedOption, setSelectedOption] = useState(queryObj[id] || '');

    useEffect(() => {
        setSelectedOption(queryObj[id] || '');
    }, [queryObj, id]);

    const onSelectChangeQuery = (e) => {
        const queryParam = e.target.id;
        const queryValue = e.target.value;

        handleQueryChange({
            [queryParam]: queryValue,
        });

        setSelectedOption(queryValue);
    };

    return (
        <div className="mb-4 w-full">
            <p className="mb-2 text-white">{title}</p>
            <select
                id={id}
                value={selectedOption}
                onChange={onSelectChangeQuery}
                className="w-full rounded bg-gray-800 p-1 text-white"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.label}>
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
}
