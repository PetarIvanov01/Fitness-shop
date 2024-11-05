import menu from '../../../assets/menu.svg';
import logo from '../../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';

import CartDropdown from './CartDropdown';
import LogoutBtn from '../../Authentication/components/LogoutBtn';

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
        <section className="flex h-16 items-center justify-between bg-stone-800/75 px-6">
            <button
                data-cy="aside-nav"
                onClick={handleAsideVisible}
                className="w-8 hover:scale-110 max-sm:w-6"
            >
                <img className="w-auto" src={menu} alt="menu" />
            </button>

            <div className="hover:scale-15 absolute left-1/2 w-20 -translate-x-1/2 cursor-pointer max-sm:w-14">
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
                            <FaRegUserCircle className="size-7 max-sm:size-5" />
                        </Link>
                        <LogoutBtn className="hover:scale-110">
                            <BiLogOutCircle className="size-7 max-sm:size-5" />
                        </LogoutBtn>
                    </>
                ) : (
                    <Link
                        className="hover:scale-110"
                        onClick={onClickClose}
                        to={'/login'}
                    >
                        <FaRegUserCircle className="size-6 max-sm:size-4" />
                    </Link>
                )}
            </div>
        </section>
    );
}
