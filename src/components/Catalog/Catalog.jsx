import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useStore from "../../zustand/store";

import SortBy from "./components/SortBy";
import AsideFilters from "./components/AsideFilter/AsideFilters";
import Pagination from "./components/Pagination";
import ItemsSection from "./ItemsSection";
import Spinner from "../Spinner";

export default function Catalog() {

    const [params] = useSearchParams();
    const { category } = params.has('category') ? Object.fromEntries(params) : '';

    const { items, isLoading } = useStore((state) => ({ items: state.items, isLoading: state.isLoading }));
    const fetchItems = useStore((state) => state.fetch);

    useEffect(() => {
        const abortController = new AbortController();

        fetchItems(category, abortController.signal);

        return () => {
            abortController.abort();
        }

    }, [category]);

    return (
        <section className="mx-1 pt-10 px-3 font-alegreya h-full bg-gray-900 rounded-lg opacity-95 overflow-x-auto">

            <div className="flex h-full flex-grow" >
                <AsideFilters />

                <div className="w-full flex flex-col px-2 pt-1 border-l border-white ml-1 relative">

                    <SortBy />

                    {isLoading ?

                        <Spinner />
                        :
                        <ItemsSection data={items} />}

                    <Pagination />
                </div>

            </div>

        </section>
    )
};