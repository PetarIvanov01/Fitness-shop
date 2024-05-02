import { OneProduct } from '../../../types/services/catalog';
import { toast } from 'sonner';

import useStore from '../../../zustand/store';

import { Link, useNavigate } from 'react-router-dom';

export default function ProductInformation({
    product,
}: {
    product: OneProduct;
}) {
    const navigate = useNavigate();

    const addCartItemIntoStore = useStore(
        (state) => state.addCartItemIntoStore
    );

    const onAddToCartHandler = () => {
        addCartItemIntoStore(product);
        toast.success(`Item-${product.title}: Added to Cart`, {
            position: 'top-left',
            duration: 800,
            action: {
                label: 'Go to Cart',
                onClick: () => {
                    navigate('/cart');
                },
            },
        });
    };

    return (
        <div className="relative flex w-full flex-col gap-4 font-sans">
            <div className="flex flex-col items-center gap-3">
                <h1 className="border-b border-neutral-400 text-2xl font-bold">
                    {product.title}
                </h1>

                <div className="h-56 min-w-72 max-w-96 rounded-lg border bg-neutral-200 shadow-lg">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain"
                    />
                </div>
            </div>

            <div className="h-32 rounded-md border bg-slate-400/20 p-2 text-base text-white shadow-inner">
                <p>{product.description}</p>
            </div>

            <ul className="list-disc pl-4">
                <li>
                    <b>Availability:</b>
                    <span className="text-lime-500"> ✔</span>
                </li>
                <li>
                    <b>Weight:</b>{' '}
                    <span className="text-orange-400">50.00kg</span>
                </li>
            </ul>

            <div className="flex flex-col items-center justify-center gap-1 self-end text-lg">
                <div>
                    <b>Price: </b>
                    <span className="font-bold text-lime-500">
                        ${Number(product.price).toFixed(2)}
                    </span>
                </div>
                <button
                    onClick={onAddToCartHandler}
                    className="rounded-lg border-2 border-black
                      bg-slate-400/20 px-4 py-2 font-bold text-neutral-200 transition duration-300 hover:bg-stone-900/60"
                >
                    Add to Cart
                </button>
            </div>

            <div className="flex items-center gap-4 pt-2 max-sm:text-[0.8em]">
                <p className="text-base">What would you like to do next?</p>
                <div className="flex gap-2 text-neutral-200">
                    <Link
                        to="/catalog"
                        className="underline transition duration-300 hover:text-neutral-400"
                    >
                        Continue Shopping
                    </Link>
                    <Link
                        to="/cart"
                        className=" underline transition duration-300 hover:text-neutral-400"
                    >
                        Go to Cart
                    </Link>
                </div>
            </div>
        </div>
    );
}
