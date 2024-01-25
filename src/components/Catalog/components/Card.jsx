import { useNavigate } from "react-router-dom";

export default function Card({
    product_id,
    title,
    image,
    price,
    onClickAddCookieData
}) {

    const navigate = useNavigate();

    const onClickRedirectToProduct = () => {
        navigate(`/product/${product_id}`);
    }

    return (
        <div className="relative flex flex-col justify-between items-center w-fit
        bg-[#456789] opacity-95 p-4 rounded-lg shadow-lg">
            <div onClick={onClickRedirectToProduct}
                className="min-w-60 h-40 max-sm:w-40  
            relative overflow-hidden rounded-lg mb-2 cursor-pointer bg-white">
                <img
                    className="w-full h-full object-cover 
                    transition-transform duration-300 transform hover:scale-110 rounded-lg"
                    src={`http://localhost:5000/uploads/` + image}
                    alt={title}
                />
            </div>

            <div className="text-white text-wrap font-bold text-xl text-center max-w-32">
                {title}
            </div>

            <div className="flex flex-col items-center gap-2 text-white">
                <p className="text-lg">Price: ${price}</p>
                <button onClick={onClickAddCookieData} className="bg-blue-500 hover:bg-blue-700 text-white 
                font-bold py-2 px-4 rounded border border-blue-900 ">
                    Add to Cart
                </button>
            </div>
        </div >
    );
};