import { Link } from 'react-router-dom';

export default function CartFooter() {
    return (
        <div className=" bg-slate-800 bg-opacity-100 p-4">
            <h2 className="mb-4 text-2xl font-bold text-white">
                Continue Shopping
            </h2>
            <p className="text-gray-300">
                Explore more fitness equipment and accessories.
                <Link
                    to={'/catalog'}
                    className="ml-1 underline hover:no-underline"
                >
                    Go back to shopping
                </Link>
                .
            </p>
        </div>
    );
}
