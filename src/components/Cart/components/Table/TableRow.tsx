import { ProductInCart } from '../../../../zustand/interfaces/CartSlice';

import { memo } from 'react';
import useStore from '../../../../zustand/store';

import { RiSubtractFill } from 'react-icons/ri';
import { MdClear } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type OmitTypeInProductType = Omit<ProductInCart, 'type'>;

const TableRow = memo(function TableRow({
    image,
    price,
    title,
    quantity = 1,
    product_id,
    type,
}: ProductInCart) {
    const priceForAllProducts = price * quantity;

    const addCartItemIntoStore = useStore(
        (state) => state.addCartItemIntoStore
    );
    const removeCartItem = useStore((state) => state.removeCartItem);
    const clearCartItem = useStore((state) => state.clearCartItem);

    const onClickRemoveProductFromCart = (productId: string) => {
        return () => {
            removeCartItem(productId);
        };
    };
    const onClickAddProductToCart = (product: OmitTypeInProductType) => {
        return () => {
            addCartItemIntoStore(product);
        };
    };
    const onClickClearTheProduct = (productId: string) => {
        return () => {
            clearCartItem(productId);
        };
    };

    return (
        <tr className="max-sm:text-[0.7em]">
            <td>
                <div className="flex items-center gap-2 p-1">
                    <div className="flex size-24 justify-center rounded-md bg-white">
                        <img
                            className="obejct-contain h-full w-full object-scale-down"
                            src={image}
                            alt={title}
                        />
                    </div>
                    <Link
                        className=" text-blue-300 hover:underline"
                        to={`/${type}/${product_id}`}
                    >
                        {title}
                    </Link>
                </div>
            </td>

            <td className="text-center">
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
                    <span className="w-8 appearance-none border  px-2 py-1 text-center">
                        {quantity}
                    </span>
                </div>
            </td>
            <td className="text-center">
                <div className="flex items-center justify-center">
                    <div className="">{priceForAllProducts.toFixed(2)} $</div>
                    <MdClear
                        onClick={onClickClearTheProduct(product_id)}
                        className="ml-2 cursor-pointer ring-white hover:scale-105 hover:text-black hover:ring-1"
                    />
                </div>
            </td>
        </tr>
    );
});
export default TableRow;
