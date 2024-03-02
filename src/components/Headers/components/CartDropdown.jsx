import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useStore from '../../../zustand/store';

export default function CartDropdown({ onClickClose }) {
    const cartLenght = useStore((state) => state.length);

    return (
        <div className="relative">
            <Link onClick={onClickClose} to={'/cart'}>
                <FaShoppingCart className="size-6 hover:scale-110" />
            </Link>
            <span className="absolute right-[2em] top-[1em] rounded-full bg-red-500 px-[5px] py-[0.5px] text-center text-[0.7em] text-white">
                {cartLenght}
            </span>
        </div>
    );
}
