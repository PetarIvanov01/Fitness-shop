export default function getPageNumbers(
    currentPage: number,
    totalPages: number
) {
    const MAX_BUTTONS = 3;
    const halfNumButtons = Math.floor(MAX_BUTTONS / 2);

    let startPage = currentPage - halfNumButtons;
    let endPage = currentPage + halfNumButtons;

    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(totalPages, MAX_BUTTONS);
    } else if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, totalPages - MAX_BUTTONS + 1);
    }

    return Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
    );
}
