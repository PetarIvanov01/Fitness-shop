export default function ItemCard({
    title,
    image,
    alt,
    price,
    description,
    active,
}) {
    return (
        <div
            className={`flex h-full animate-slide-up flex-col ${active ? 'block animate-fade-in' : 'hidden animate-fade-out'}`}
        >
            <h2 className="pb-4 text-center text-[1.2em] font-bold text-slate-400">
                {title}
            </h2>

            <div className="flex flex-wrap gap-4 max-bil-s:flex-col max-bil-s:items-center">
                <div className="size-1/2 min-w-40">
                    <img className="size-full" src={image} alt={alt} />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <p className=" text-slate-400 max-md:text-sm">
                        {description}
                    </p>

                    <p className="mt-4 text-[1.5em] font-bold text-green-500 max-md:text-[1em]">
                        Price: ${price}
                    </p>
                </div>
            </div>
        </div>
    );
}
