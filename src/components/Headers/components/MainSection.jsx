import { IoMdLogIn } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi"
import menu from "../../../assets/menu.svg";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function MainSection({
    handleAsideVisible,
    onClickClose,
    user
}) {

    return (
        <section className="flex items-center px-6 bg-[#4e4242] opacity-95 h-16">

            <button onClick={handleAsideVisible} className="w-8 hover:scale-110">
                <img className="w-auto" src={menu} alt="menu" />
            </button>

            <div className="cursor-pointer w-16 absolute left-1/2 -translate-x-1/2">
                <Link onClick={onClickClose} to="/"><img src={logo} alt="logo" className="h-full" /></Link>
            </div>

            {user ?
                <Link onClick={onClickClose} to={'/logout'} className="block ml-auto size-8">
                    <BiLogOutCircle className="size-full" />
                </Link>
                :
                <Link onClick={onClickClose} to={'/login'} className="block ml-auto size-8">
                    <IoMdLogIn className="size-full" />
                </Link>
            }
        </section>
    );
}; 