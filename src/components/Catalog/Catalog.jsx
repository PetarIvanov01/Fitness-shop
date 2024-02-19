import { useEffect } from 'react';
import useStore from '../../zustand/store';

import SortBy from './components/SortBy';
import AsideFilters from './components/AsideFilter/AsideFilters';
import Pagination from './components/Pagination';
import ItemsSection from './ItemsSection';
import Spinner from '../Spinner';
import createQueryString from '../../utils/createQueryString';
import useQuery from '../../hooks/useQuery';

export default function Catalog() {
    const items = useStore((state) => state.items);
    const isLoading = useStore((state) => state.isLoading);
    const fetchItems = useStore((state) => state.fetch);

    const { queryObj, clearQueries } = useQuery();
    const querieString = createQueryString(queryObj);

    useEffect(() => {
        const abortController = new AbortController();

        fetchItems(querieString, abortController.signal);

        return () => {
            abortController.abort();
        };
    }, [querieString]);

    return (
        <section className="mx-1 h-full overflow-x-auto rounded-lg bg-gray-900 px-3 pt-10 font-alegreya opacity-95">
            <div className="flex h-full flex-grow">
                <AsideFilters clearQueries={clearQueries} />

                <div className="relative ml-1 flex w-full flex-col border-l border-white px-2 pt-1">
                    <SortBy />
                    <hr className="mt-2 border-white" />

                    {isLoading ? <Spinner /> : <ItemsSection data={items} />}

                    <Pagination />
                </div>
            </div>
        </section>
    );
}
