import { Link } from 'react-router-dom';

export default function Card({ path, imgPath, alt, buttonText }) {
    // TODO: Redirect to the particular page

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

            <Link
                to={`/catalog?category=${path}`}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 transform
            bg-black px-3 py-2 
            text-center font-bold text-white transition-colors duration-300 hover:text-gray-300 max-md:text-[0.8em] "
            >
                {buttonText}
            </Link>
        </div>
    );
}
