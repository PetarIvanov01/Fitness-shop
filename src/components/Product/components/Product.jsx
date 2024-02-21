import { Link } from 'react-router-dom';

export default function RelatedProduct({ id, image, title }) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={image}
                alt={title}
                className="h-24 w-32 rounded-lg bg-white shadow-lg"
            />
            <Link
                to={`/product/${id}`}
                className="mt-2 block rounded-sm px-1 text-white  ring-1 transition duration-300 hover:ring-offset-1"
            >
                View Product
            </Link>
        </div>
    );
}
