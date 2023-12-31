import { IoMdLogIn } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi"
import menu from "../../../assets/menu.svg";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
/*
Todo: Depending on the user status show the right Icon(login/logout)
*/
export default function MainSection({ handleAsideVisible }) {

    return (
        <section className="flex items-center px-6 bg-[#4e4242] opacity-95 h-16">

            <button onClick={handleAsideVisible} className="w-8 hover:scale-110">
                <img className="w-auto" src={menu} alt="menu" />
            </button>

            <div className="cursor-pointer w-16 absolute left-1/2 -translate-x-1/2">
                <Link to="/"><img src={logo} alt="logo" className="h-full" /></Link>
            </div>

            <Link to={'/login'} className="block ml-auto size-8">
                <IoMdLogIn className="size-full" />
            </Link>

        </section>
    );
}; 