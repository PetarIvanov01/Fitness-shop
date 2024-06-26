import { BiLogOutCircle } from 'react-icons/bi';
import menu from '../../../assets/menu.svg';
import logo from '../../../assets/logo.svg';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartDropdown from './CartDropdown';

type MainSectionProps = {
    handleAsideVisible: () => void;
    onClickClose: () => void;
    userId: string | undefined;
};

export default function MainSection({
    handleAsideVisible,
    onClickClose,
    userId,
}: MainSectionProps) {
    return (
        <section className="flex h-16 items-center justify-between bg-[#4e4242] px-6 opacity-95">
            <button
                data-cy="aside-nav"
                onClick={handleAsideVisible}
                className="w-8 hover:scale-110"
            >
                <img className="w-auto" src={menu} alt="menu" />
            </button>

            <div className="absolute left-1/2 w-20 -translate-x-1/2 cursor-pointer hover:scale-105">
                <Link onClick={onClickClose} to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="size-full fill-white"
                    />
                </Link>
            </div>
            <div className="flex items-center gap-3">
                <CartDropdown />
                {userId ? (
                    <>
                        <Link
                            className="hover:scale-110"
                            onClick={onClickClose}
                            to={`/profile/info/${userId}`}
                        >
                            <FaRegUserCircle className="size-6" />
                        </Link>
                        <Link
                            className="hover:scale-110"
                            onClick={onClickClose}
                            to={'/logout'}
                        >
                            <BiLogOutCircle className="size-7" />
                        </Link>
                    </>
                ) : (
                    <Link
                        className="hover:scale-110"
                        onClick={onClickClose}
                        to={'/login'}
                    >
                        <FaRegUserCircle className="size-6" />
                    </Link>
                )}
            </div>
        </section>
    );
}
