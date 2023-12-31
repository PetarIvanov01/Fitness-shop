import { useSearchParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';

import { getCatalog } from '../../api/services/catalog';

import Card from "./components/Card";
import AsideFilters from "./components/AsideFilter/AsideFilters";
import SortBy from './components/SortBy';
import Pagination from './components/Pagination';

export default function Catalog() {

    const [params] = useSearchParams();
    const { category } = params.has('category') ? Object.fromEntries(params) : '';

    const { data } = useFetch(getCatalog, category);

    return (
        <section className="mx-1 pt-10 px-3 font-alegreya h-full bg-gray-900 rounded-lg opacity-95 overflow-x-auto">

            <div className="flex h-full flex-grow" >
                <AsideFilters />

                <div className="w-full flex flex-col px-2 pt-1 border-l border-white ml-1">

                    <SortBy />

                    <section className="flex justify-center flex-wrap gap-6 pt-5 overflow-auto">

                        {data?.values?.map((products) => <Card key={products.product_id} {...products} />)}

                    </section>

                    <Pagination />
                </div>

            </div>

        </section>
    );
};
