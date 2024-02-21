import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../../zustand/store';
import resolveServerImg from '../../../utils/resolveServerImg';
import { toast } from 'sonner';

export default function ProductInformation({ product }) {
    const navigate = useNavigate();

    const addCartDataToCookies = useStore(
        (state) => state.addCartDataToCookies
    );

    const image = resolveServerImg(product.image);

    const onAddToCartHandler = () => {
        addCartDataToCookies(product.product_id);
        toast.success(`Item-${product.title}: Added to Cart`, {
            position: 'top-right',
            duration: 2000,
            action: {
                label: 'Go to Cart',
                onClick: () => {
                    navigate('/cart');
                },
            },
        });
    };

    return (
        <div className="relative flex w-full flex-col">
            <div className="flex flex-col items-center gap-2">
                <h1 className="pb-2 text-2xl font-bold">{product.title}</h1>

                <div className="max-w-96 pb-4">
                    <img
                        src={image}
                        alt={product.title}
                        className="h-[260px] w-full rounded-lg bg-white shadow-lg max-sm:h-[200px]"
                    />
                </div>
            </div>

            <p className="pb-4 text-lg">{product.description}</p>

            <ul className="list-disc pb-4 pl-6">
                <li>
                    <b>Availability:</b> ✔
                </li>
                <li>
                    <b>Weight:</b> 50.00kg
                </li>
            </ul>

            <div className="flex w-fit flex-col justify-center self-end text-xl font-bold max-sm:text-[1em]">
                <div className="pb-2">Price: ${product.price}</div>
                <button
                    onClick={onAddToCartHandler}
                    className="rounded-md bg-blue-500 px-4 py-2 text-white "
                >
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
