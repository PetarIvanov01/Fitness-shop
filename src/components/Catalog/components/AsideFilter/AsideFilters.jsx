import { MdOutlineClear } from 'react-icons/md';

import filters from '../../../../assets/utils/filterData';

import PriceRange from './PriceRange';
import Filter from './ReusableFilter';
import usePriceRange from '../../../../hooks/usePriceRange';
import { RANGES } from '../../../../utils/priceRangeConstants';

export default function AsideFilters({ clearQueries }) {
    const { setPrice, invalidPriceRange, totalPrice } = usePriceRange();

    const clearFilters = () => {
        setPrice(() => ({
            from: RANGES.from,
            to: RANGES.to,
        }));
        clearQueries();
    };
    const asideMediaQueries = 'max-[600px]:self-center max-[600px]:border-none';
    return (
        <aside
            className={`flex h-[50%] max-w-[250px] flex-col gap-1 border-r border-white px-2 pt-1 shadow-md ${asideMediaQueries}`}
        >
            <div className="flex flex-col">
                <div className="mb-4 flex justify-between border-b">
                    <p className="font-bold text-white">Filter</p>
                    <button
                        onClick={clearFilters}
                        className="flex items-center gap-1 text-white"
                    >
                        <MdOutlineClear /> Clear
                    </button>
                </div>
            </div>

            <PriceRange
                totalPrice={totalPrice}
                setPrice={setPrice}
                invalidPriceRange={invalidPriceRange}
            />

            {filters.map(([type, component]) => (
                <Filter
                    key={type}
                    title={component.title}
                    options={component.options}
                    id={type}
                />
            ))}
        </aside>
    );
}
