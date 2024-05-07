import RatingSystem from './Rating';

export default function Reviews() {
    return (
        <div className="flex h-40 flex-col">
            <header className="w-fit text-neutral-200">
                <h1 className="text-center text-2xl font-bold  text-stone-200">
                    Customer Reviews
                </h1>
            </header>
            <span className="border-t-1 border-t border-neutral-400" />
            <div>
                <RatingSystem />
            </div>
        </div>
    );
}
