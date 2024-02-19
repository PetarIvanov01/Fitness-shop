import getPageNumbers from '../../../utils/getPageNumbers';

export default function ButtonPage({ pages, current }) {
    const pageArr = getPageNumbers(current, pages);
    return (
        <div className="flex items-center">
            {pageArr.map((page) => {
                const isCurrentPageStyle =
                    current === page && 'scale-125 px-1 text-green-300';
                return (
                    <button
                        key={page}
                        className={`${isCurrentPageStyle} text-center text-white`}
                    >
                        [ {page} ]
                    </button>
                );
            })}
        </div>
    );
}
