import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import useQuery from '../../../hooks/useQuery';
import ButtonPage from './PaginationButtons';
import useStore from '../../../zustand/store';

export default function Pagination() {
    const { queryObj, handleQueryChange } = useQuery();
    const itemsLength = useStore((state) => state.itemsLngInDb);

    const page = Number(queryObj.page) || 1;
    const perPage = Number(queryObj.perPage) || 4;

    const allPages = Math.ceil(itemsLength / perPage);

    const handleNext = () => {
        if (!isNaN(page) && page > 0 && page < allPages) {
            handleQueryChange({
                page: page + 1,
                perPage,
            });
        }
    };
    const handlePrev = () => {
        if (!isNaN(page) && page > 1 && page <= allPages) {
            handleQueryChange({
                page: page - 1,
                perPage,
            });
        }
    };

    return (
        <div className="mt-auto flex justify-end gap-2 pb-1">
            <button onClick={handlePrev} className="size-6">
                <GrLinkPrevious className="size-full text-white" />
            </button>

            <ButtonPage current={page} pages={allPages} />

            <button onClick={handleNext} className="size-6">
                <GrLinkNext className="size-full text-white" />
            </button>
        </div>
    );
}
