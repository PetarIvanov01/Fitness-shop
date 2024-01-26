import { Link, useParams } from 'react-router-dom';
import useStore from '../../../zustand/store';
import { useEffect } from 'react';

export default function ProductInformation() {
    const { productId } = useParams();

    const product = useStore((state) => state.product);
    const fetchProduct = useStore((state) => state.fetchProduct);

    useEffect(() => {
        const abortController = new AbortController();

        if (productId) {
            fetchProduct(productId, abortController.signal);
        }

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <div className="flex w-full flex-col">
            <div className="flex flex-col items-center gap-2">
                <h1 className="pb-2 text-2xl font-bold">
                    Horizontal Bench Classic Series by Active Gym
                </h1>

                <div className="max-w-96 pb-4">
                    <img
                        src="https://pulsegymshop.bg/image/cache/catalog/products/active-gym/s368-(1)-black-621x424h.png"
                        alt="Horizontal Bench Classic Series by Active Gym"
                        className="w-full rounded-lg bg-white shadow-lg"
                    />
                </div>
            </div>

            <p className="pb-4 text-lg">
                The Horizontal Bench from the Classic Series by Active Gym is a
                multifunctional bench for full-body workouts using weights,
                dumbbells, or body weight.
            </p>

            <ul className="list-disc pb-4 pl-6">
                <li>
                    <b>Availability:</b> ✔
                </li>
                <li>
                    <b>Weight:</b> 50.00kg
                </li>
            </ul>

            <div className="flex w-fit flex-col justify-center self-end text-xl font-bold max-sm:text-[1em]">
                <div className="pb-2">Price: $1,500.00</div>
                <button className="rounded-md bg-blue-500 px-4 py-2 text-white ">
                    Add to Cart
                </button>
            </div>

            <div className="flex items-center gap-8 pt-2 max-sm:text-[0.8em]">
                <p className="text-base">
                    Item added to cart! What would you like to do next?
                </p>
                <div>
                    <Link
                        to="/catalog"
                        className="mr-2 text-white underline transition duration-300 hover:text-gray-300"
                    >
                        Continue Shopping
                    </Link>
                    <Link
                        to="/cart"
                        className="text-white underline transition duration-300 hover:text-gray-300"
                    >
                        Go to Cart
                    </Link>
                </div>
            </div>
        </div>
    );
}
