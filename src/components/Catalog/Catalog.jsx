import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useStore from '../../zustand/store';

import SortBy from './components/SortBy';
import AsideFilters from './components/AsideFilter/AsideFilters';
import Pagination from './components/Pagination';
import ItemsSection from './ItemsSection';
import Spinner from '../Spinner';

export default function Catalog() {
    const [params] = useSearchParams();
    const { category } = params.has('category')
        ? Object.fromEntries(params)
        : '';

    const { items, isLoading } = useStore((state) => ({
        items: state.items,
        isLoading: state.isLoading,
    }));

    const fetchItems = useStore((state) => state.fetch);

    useEffect(() => {
        const abortController = new AbortController();

        fetchItems(category, abortController.signal);

        return () => {
            abortController.abort();
        };
    }, [category]);

    return (
        <section className="mx-1 h-full overflow-x-auto rounded-lg bg-gray-900 px-3 pt-10 font-alegreya opacity-95">
            <div className="flex h-full flex-grow">
                <AsideFilters />

                <div className="relative ml-1 flex w-full flex-col border-l border-white px-2 pt-1">
                    <SortBy />

                    {isLoading ? <Spinner /> : <ItemsSection data={items} />}

                    <Pagination />
                </div>
            </div>
        </section>
    );
}
