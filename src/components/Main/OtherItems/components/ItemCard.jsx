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
            className={`flex size-full animate-slide-up flex-col ${active ? 'block animate-fade-in' : 'hidden animate-fade-out'}`}
        >
            <h2 className="mb-4 text-center text-[1.2em] font-bold text-slate-600">
                {title}
            </h2>

            <div className="flex size-full gap-4">
                <div className="size-[50%] min-h-[110px] min-w-[110px]">
                    <img className="size-full" src={image} alt={alt} />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <p className="text-gray-500 max-md:text-[0.75em]">
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
