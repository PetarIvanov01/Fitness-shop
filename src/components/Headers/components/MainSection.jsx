import { BiLogOutCircle } from 'react-icons/bi';
import menu from '../../../assets/menu.svg';
import logo from '../../../assets/logo.png';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useStore from '../../../zustand/store';

export default function MainSection({
    handleAsideVisible,
    onClickClose,
    user,
}) {
    const cartLenght = useStore((state) => state.length);
    return (
        <section className="flex h-16 items-center justify-between bg-[#4e4242] px-6 opacity-95">
            <button
                onClick={handleAsideVisible}
                className="w-8 hover:scale-110"
            >
                <img className="w-auto" src={menu} alt="menu" />
            </button>

            <div className="absolute left-1/2 w-16 -translate-x-1/2 cursor-pointer">
                <Link onClick={onClickClose} to="/">
                    <img src={logo} alt="logo" className="h-full" />
                </Link>
            </div>

            <div className="flex items-center gap-3 ">
                <div className="relative">
                    <Link onClick={onClickClose} to={'/cart'}>
                        <FaShoppingCart className="size-6" />
                    </Link>
                    <span className="absolute right-[2em] top-[1em] rounded-full bg-red-500 px-[5px] py-[0.5px] text-center text-[0.7em] text-white">
                        {cartLenght}
                    </span>
                </div>
                {user ? (
                    <Link onClick={onClickClose} to={'/logout'}>
                        <BiLogOutCircle className="size-6" />
                    </Link>
                ) : (
                    <Link onClick={onClickClose} to={'/login'}>
                        <FaRegUserCircle className="size-6" />
                    </Link>
                )}
            </div>
        </section>
    );
}
