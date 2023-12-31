import { Link } from "react-router-dom";

export default function Card({ path, imgPath, alt, buttonText }) {

    // TODO: Redirect to the particular page

    return (
        <div className="size-60 max-md:size-36 
        relative overflow-hidden hover:scale-105 
        transition-transform duration-300">

            <img className="w-full h-full object-cover 
            transition-transform duration-300 transform hover:scale-110"
                src={imgPath} alt={alt} />

            <Link to={`/catalog?category=${path}`} 
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2
            transition-colors duration-300 max-md:text-[0.8em] 
            text-center bg-black text-white font-bold px-3 py-2 hover:text-gray-300 ">
                {buttonText}
            </Link>
        </div>
    );
};