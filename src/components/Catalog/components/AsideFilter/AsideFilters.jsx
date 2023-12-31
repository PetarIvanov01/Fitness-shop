import { MdOutlineClear } from "react-icons/md";
import filters from "../../../../assets/utils/filterData";

import PriceRange from "./PriceRange";
import Filter from "./ReusableFilter";

export default function AsideFilters() {

    return (
        <aside className="max-w-[250px] h-[50%] bg-gray-900 opacity-95 shadow-md pt-1 px-2">

            <div className="flex justify-between mb-4 border-b">
                <p className="font-bold text-white">Filter</p>
                <button className="flex items-center gap-1 text-white"><MdOutlineClear /> Clear</button>
            </div>

            <PriceRange />

            {filters.map(([type, component]) => <Filter key={type}
                title={component.title}
                options={component.options} />)}

        </aside>
    );
};
