export default function Skeleton() {
    return (
        <div
            role="status"
            className="flex animate-pulse flex-col gap-4 px-10 pt-10 shadow dark:border-gray-700"
        >
            <div className="flex gap-4">
                <div className="mb-4 h-8 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div className="mb-4 h-8 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="mb-2 h-12 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-8 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700" />

            <div className="flex w-full justify-end gap-4 pt-10">
                <div className="mb-2 h-7 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div className="mb-2 h-7 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
        </div>
    );
}
