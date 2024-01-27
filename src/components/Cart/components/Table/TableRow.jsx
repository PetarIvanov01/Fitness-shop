import { useState } from 'react';
import { MdClear } from 'react-icons/md';
import resolveServerImg from '../../../../utils/resolveServerImg';
export default function TableRow({ image, price, title, quantity = 1 }) {
    const resolvedImage = resolveServerImg(image);
    const [trackedQuantity, setQuantity] = useState(quantity);

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value);
    };
    return (
        <tr className="border-b max-sm:text-[0.7em]">
            <td className="flex items-center p-2">
                <div className="p-2">
                    <img className="size-24" src={resolvedImage} alt={title} />
                </div>

                <div>{title}</div>
            </td>

            <td className="p-2 text-center">
                <div className="flex items-center justify-center gap-2">
                    <MdClear className="cursor-pointer hover:scale-105 hover:text-black" />
                    <input
                        onChange={onChangeQuantity}
                        className="w-12 appearance-none border bg-inherit px-4 py-2 text-center"
                        value={trackedQuantity}
                    />
                </div>
            </td>
            <td className="p-2 text-center">
                <div>{price} $</div>
            </td>
        </tr>
    );
}
