export default function ConfirmModal({
    toggleModal,
    onAcceptCloseModal,
    text,
}) {
    return (
        <div
            aria-hidden="true"
            className="fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
        >
            <div className="relative w-1/3 min-w-[260px] max-w-[350px] p-4">
                <div className="relative rounded-lg border border-b-4 border-r-2 border-white bg-slate-700">
                    <div className="space-y-4 p-4 md:p-5">
                        <p className="text- text-center font-medium">{text}</p>
                    </div>
                    <div className="flex justify-between rounded-b border-t border-gray-200 p-4 md:p-5 ">
                        <button
                            onClick={onAcceptCloseModal}
                            type="button"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            I accept
                        </button>
                        <button
                            onClick={toggleModal}
                            type="button"
                            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium
                             text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4
                              focus:ring-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
