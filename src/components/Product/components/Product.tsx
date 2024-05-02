import { Link } from 'react-router-dom';

type RelatedProductType = {
    id: string;
    image: string;
    title: string;
    type: string;
};

export default function RelatedProduct({
    id,
    image,
    title,
    type,
}: RelatedProductType) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={image}
                alt={title}
                className="h-24 w-32 rounded-lg bg-white object-contain shadow-lg"
            />
            <div className="mt-2 block rounded-sm px-1 text-white transition duration-300 hover:ring-1 hover:ring-offset-1">
                <Link to={`/${type}/${id}`}>View Product</Link>
            </div>
        </div>
    );
}
