export default function ItemCard({ title, image, alt, price, description, active }) {

    return (
        <div
            className={`flex flex-col size-full animate-slide-up ${active ? 'block animate-fade-in' : 'hidden animate-fade-out'}`}>
            <h2 className="font-bold text-slate-600 text-[1.2em] text-center mb-4">
                {title}
            </h2>

            <div className="flex gap-4 size-full">

                <div className="size-[50%] min-h-[110px] min-w-[110px]">
                    <img
                        className="size-full"
                        src={image}
                        alt={alt}
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                    <p className="text-gray-500 max-md:text-[0.75em]">
                        {description}
                    </p>

                    <p className="text-green-500 text-[1.5em] max-md:text-[1em] font-bold mt-4">
                        Price: ${price}
                    </p>

                </div>

            </div>

        </div>
    );
};
