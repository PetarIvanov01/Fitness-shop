import CatalogLink from '../../../CatalogLink';

export default function Card({ path, imgPath, alt, buttonText }) {
    return (
        <div
            className="relative size-60 
        overflow-hidden transition-transform duration-300 
        hover:scale-105 max-md:size-36"
        >
            <img
                className="h-full w-full transform 
            object-cover transition-transform duration-300 hover:scale-110"
                src={imgPath}
                alt={alt}
            />
            <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 transform
            bg-black px-3 py-2 
            text-center font-bold text-white transition-colors duration-300 hover:text-gray-300 max-md:text-[0.8em] "
            >
                <CatalogLink queryType="category" queryValue={path}>
                    {buttonText}
                </CatalogLink>
            </div>
        </div>
    );
}
