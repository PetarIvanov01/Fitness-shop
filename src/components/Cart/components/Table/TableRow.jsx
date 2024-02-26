import { RiSubtractFill } from 'react-icons/ri';
import { MdClear } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import resolveServerImg from '../../../../utils/resolveServerImg';
import { Link } from 'react-router-dom';
import useStore from '../../../../zustand/store';

export default function TableRow({
    image,
    price,
    title,
    quantity = 1,
    product_id,
}) {
    const resolvedImage = resolveServerImg(image);
    const priceForAllProducts = Number(price) * Number(quantity);

    const removeCartItem = useStore((state) => state.removeCartItem);
    const addCartItemIntoStore = useStore(
        (state) => state.addCartItemIntoStore
    );
    const clearCartItem = useStore((state) => state.clearCartItem);

    const onClickRemoveProductFromCart = (productId) => {
        return () => {
            removeCartItem(productId);
        };
    };
    const onClickAddProductToCart = (product) => {
        return () => {
            addCartItemIntoStore(product);
        };
    };
    const onClickClearTheProduct = (product_id) => {
        return () => {
            clearCartItem(product_id);
        };
    };

    return (
        <tr className="border-b max-sm:text-[0.7em]">
            <td className="flex items-center p-2">
                <div className="p-2 ">
                    <img
                        className="size-24 bg-white"
                        src={resolvedImage}
                        alt={title}
                    />
                </div>

                <Link
                    className="text-blue-300 hover:underline"
                    to={`/product/${product_id}`}
                >
                    {title}
                </Link>
            </td>

            <td className="p-2 text-center">
                <div className="flex items-center justify-center gap-2">
                    <RiSubtractFill
                        onClick={onClickRemoveProductFromCart(product_id)}
                        className="cursor-pointer ring-white hover:scale-105 hover:text-black hover:ring-1"
                    />
                    <FiPlus
                        onClick={onClickAddProductToCart({
                            image,
                            price,
                            title,
                            quantity,
                            product_id,
                        })}
                        className="cursor-pointer ring-white hover:scale-105 hover:text-black hover:ring-1"
                    />
                    <span className="w-8 appearance-none border bg-inherit px-2 py-1 text-center">
                        {quantity}
                    </span>
                </div>
            </td>
            <td className="p-2 text-center">
                <div className="flex items-center justify-center">
                    <div className="ml-auto">
                        {priceForAllProducts.toFixed(2)} $
                    </div>
                    <MdClear
                        onClick={onClickClearTheProduct(product_id)}
                        className="ml-auto cursor-pointer ring-white hover:scale-105 hover:text-black hover:ring-1"
                    />
                </div>
            </td>
        </tr>
    );
}
