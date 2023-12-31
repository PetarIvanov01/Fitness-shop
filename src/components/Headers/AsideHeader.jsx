import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi"
import AsideUl from "./components/AsideUl";
import { GrLinkNext } from "react-icons/gr";

/*
 Todo: Depending on the user status show logout button;
*/
export default function AsideHeader({ visible }) {

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
            
            <Link to={'/catalog'} className="flex items-center gap-2 px-4 py-2 mb-2 text-xs md:text-base max-sm:px-2 rounded-md bg-stone-700 text-stone-300 hover:bg-stone-500">
                Catalog <GrLinkNext/>
            </Link>

            <button onClick={handleVisibility} className="px-4 py-2 mb-2 text-xs md:text-base max-sm:px-2 rounded-md bg-stone-700 text-stone-300 hover:bg-stone-500">
                + Categories
            </button>

            
          <AsideUl isVisible={isVisible}/>

            <Link to={'/login'}>
                <IoMdLogIn className="absolute bottom-5 right-5 size-6 cursor-pointer" />
            </Link>

        </aside>
    );
};