import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi"

/*
 Todo: Depending on the user status show logout button;
*/
const categories = ['Cardio', 'Machines', 'Free Weights'];

export default function AsideHeader({ visible }) {

    const [isVisible, setVisible] = useState(false);

    const handleVisibility = () => {
        setVisible(prev => !prev);
    };

    return (
        <aside className={`${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'}
            absolute flex items-center flex-col h-96 
            transition-transform w-52 px-8 py-12 bg-stone-950 text-stone-50
            max-sm:w-32 z-10`}>

            <h2 className="mb-8 font-bold uppercase max-sm:text-xs md:text-xl text-slate-300 ">
                Products
            </h2>

            <button onClick={handleVisibility} className="px-4 py-2 mb-2 text-xs md:text-base max-sm:px-2 rounded-md bg-stone-700 text-stone-300 hover:bg-stone-500">
                + Categories
            </button>

            <ul className={`${!isVisible && "hidden"} flex flex-col pl-4 pt-5 gap-2 w-full`}>
                {categories.map(e => <li className="opacity-50 w-auto cursor-pointer hover:opacity-100" key={e}> {e} </li>)}
            </ul>

            <Link to={'/login'}>
                <IoMdLogIn className="absolute bottom-5 right-5 size-6 cursor-pointer" />
            </Link>

        </aside>
    );
};