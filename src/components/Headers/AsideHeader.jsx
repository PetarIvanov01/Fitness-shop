import { useState } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa"
import { IoMdLogIn } from "react-icons/io";
import { GrLinkNext } from "react-icons/gr";
import { BiLogOutCircle } from "react-icons/bi"

import AsideUl from "./components/AsideUl";

export default function AsideHeader({
    visible,
    onClickClose,
    user
}) {

    const [isVisible, setVisible] = useState(false);

    const handleVisibility = () => {
        setVisible(prev => !prev);
    };

    const visibilityStyle = visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]';

    return (
        <aside className={`${visibilityStyle}
            absolute flex items-center flex-col h-96 
            transition-transform w-52 px-8 py-12 bg-stone-950 text-stone-50
            max-sm:w-32 z-10`}>

            <h2 className="mb-8 font-bold uppercase max-sm:text-xs md:text-xl text-slate-300 ">
                Products
            </h2>

            <Link onClick={onClickClose} to={'/catalog'} className="flex items-center gap-2 px-4 py-2 mb-2 text-xs md:text-base max-sm:px-2 rounded-md bg-stone-700 text-stone-300 hover:bg-stone-500">
                Catalog <GrLinkNext />
            </Link>

            <button onClick={handleVisibility} className="px-4 py-2 mb-2 text-xs md:text-base max-sm:px-2 rounded-md bg-stone-700 text-stone-300 hover:bg-stone-500">
                + Categories
            </button>

            <AsideUl onClickClose={onClickClose} isVisible={isVisible} />

            <div className="absolute bottom-5 right-5 flex flex-col gap-2 ">
                <Link onClick={onClickClose} to={'/cart'}>
                    <FaShoppingCart className="size-6" />
                </Link>

                {user ?
                    <Link onClick={onClickClose} to={'/logout'} >
                        <BiLogOutCircle className="size-6" />
                    </Link>
                    :
                    <Link onClick={onClickClose} to={'/login'} >
                        <IoMdLogIn className="size-6" />
                    </Link>
                }
            </div>

        </aside>
    );
};

