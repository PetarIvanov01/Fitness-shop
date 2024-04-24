export default function OfferCards({ imgPath, alt, visible }) {
    return (
        <div
            className={`${
                !visible
                    ? 'scale-50 transform ease-in'
                    : 'scale-100 transform ease-out'
            } relative flex w-auto
           flex-col items-center transition-transform duration-500 ease-in-out`}
        >
            <img className="h-48 w-52 max-sm:h-28" src={imgPath} alt={alt} />

            {visible && (
                <button
                    className="rounded-full bg-neutral-700/70 px-5 py-1
                font-medium text-neutral-300 hover:scale-105 max-sm:px-2 max-sm:py-1 max-sm:text-sm"
                >
                    Order
                </button>
            )}
        </div>
    );
}
