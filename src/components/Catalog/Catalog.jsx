import useStore from '../../zustand/store';

import SortBy from './components/SortBy';
import AsideFilters from './components/AsideFilter/AsideFilters';
import Pagination from './components/Pagination';
import ItemsSection from './ItemsSection';
import Spinner from '../Spinner';
import createQueryString from '../../utils/createQueryString';
import useQuery from '../../hooks/useQuery';
import useFetch from '../../hooks/useFetch';

export default function Catalog() {
    const callCatalogSetStore = useStore((state) => state.callCatalogSetStore);

    const { queryObj, clearQueries } = useQuery();
    const querieString = createQueryString(queryObj);

    const { data, isLoading } = useFetch(callCatalogSetStore, querieString);

    return (
        <section className="mx-1 flex flex-1 rounded-lg bg-gray-900 bg-opacity-95 px-3 pt-10 font-alegreya">
            <div className="flex flex-1 max-[600px]:flex-col">
                <AsideFilters clearQueries={clearQueries} />

                <div className="relative ml-1 flex w-full flex-col  px-2 pt-1">
                    <SortBy />
                    <hr className="mt-2 border-white" />

                    {isLoading ? <ItemsSection data={data} /> : <Spinner />}

                    <Pagination />
                </div>
            </div>
        </section>
    );
}
