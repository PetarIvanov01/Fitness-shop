import { MdOutlineClear } from 'react-icons/md';
import filters from '../../../../assets/utils/filterData';

import PriceRange from './PriceRange';
import Filter from './ReusableFilter';

export default function AsideFilters() {
    return (
        <aside className="h-[50%] max-w-[250px] bg-gray-900 px-2 pt-1 opacity-95 shadow-md">
            <div className="mb-4 flex justify-between border-b">
                <p className="font-bold text-white">Filter</p>
                <button className="flex items-center gap-1 text-white">
                    <MdOutlineClear /> Clear
                </button>
            </div>

            <PriceRange />

            {filters.map(([type, component]) => (
                <Filter
                    key={type}
                    title={component.title}
                    options={component.options}
                />
            ))}
        </aside>
    );
}
