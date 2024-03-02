export default function ControlOfferButton({ icon, alt, handler }) {
    return (
        <div
            className="mx-2 flex h-max min-h-12 min-w-8 items-center justify-center rounded-full border hover:scale-105
         hover:opacity-40 max-sm:size-12"
        >
            <img
                onClick={handler}
                className="size-full cursor-pointer"
                src={icon}
                alt={alt}
            />
        </div>
    );
}
