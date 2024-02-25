import { useState } from 'react';
import { RiSubtractFill } from 'react-icons/ri';
import { MdClear } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import resolveServerImg from '../../../../utils/resolveServerImg';
import { Link } from 'react-router-dom';

export default function TableRow({
    image,
    price,
    title,
    quantity = 1,
    product_id,
}) {
    const resolvedImage = resolveServerImg(image);
    const [trackedQuantity, setQuantity] = useState(quantity);

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value);
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
                    <RiSubtractFill className="cursor-pointer hover:scale-105 hover:text-black" />
                    <FiPlus className="cursor-pointer hover:scale-105 hover:text-black" />
                    <input
                        onChange={onChangeQuantity}
                        className="w-12 appearance-none border bg-inherit px-4 py-2 text-center"
                        value={trackedQuantity}
                    />
                </div>
            </td>
            <td className="p-2 text-center">
                <div className="flex items-center justify-center">
                    <div>{price} $</div>
                    <MdClear className=" cursor-pointer hover:scale-105 hover:text-black" />
                </div>
            </td>
        </tr>
    );
}
