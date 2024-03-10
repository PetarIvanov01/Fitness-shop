import { useNavigate } from 'react-router-dom';
import resolveServerImg from '../../../utils/resolveServerImg';

export default function Card({
    product_id,
    title,
    image,
    price,
    onClickAddCookieData,
    type,
}) {
    const resolvedImage = resolveServerImg(image);
    const navigate = useNavigate();

    const onClickRedirectToProduct = () => {
        navigate(`/${type}/${product_id}`);
    };

    return (
        <div
            className="relative flex w-fit flex-col items-center justify-between
        rounded-lg bg-[#456789] p-4 opacity-95 shadow-lg"
        >
            <div
                onClick={onClickRedirectToProduct}
                className="relative mb-2 h-40  
            w-60 cursor-pointer overflow-hidden rounded-lg bg-white max-sm:w-40"
            >
                <img
                    className="h-full w-full transform 
                    rounded-lg object-contain transition-transform duration-300 hover:scale-110"
                    src={resolvedImage}
                    alt={title}
                />
            </div>

            <div className="max-w-32 text-wrap text-center text-xl font-bold text-white">
                {title}
            </div>

            <div className="flex flex-col items-center gap-2 text-white">
                <p className="text-lg">Price: ${price}</p>
                <button
                    onClick={onClickAddCookieData}
                    className="rounded bg-blue-500 
                px-4 py-2 font-bold text-white ring ring-blue-900 hover:bg-blue-700 "
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
