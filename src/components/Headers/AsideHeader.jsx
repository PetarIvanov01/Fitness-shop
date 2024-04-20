import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { GrLinkNext } from 'react-icons/gr';
import { BiLogOutCircle } from 'react-icons/bi';

import AsideUl from './components/AsideUl';
import CatalogLink from '../CatalogLink';

export default function AsideHeader({ visible, onClickClose, userId }) {
    const [isVisible, setVisible] = useState(false);

    const handleVisibility = () => {
        setVisible((prev) => !prev);
    };

    const visibilityStyle = visible
        ? 'opacity-100 translate-x-0'
        : 'opacity-0 translate-x-[-100%]';

    return (
        <aside
            className={`${visibilityStyle}
            absolute z-30 flex h-96 w-52 
            flex-col items-center rounded-r-md bg-stone-950 px-8 py-12 
            text-stone-50 transition-transform max-sm:w-44`}
        >
            <h2 className="mb-8 font-bold uppercase text-slate-300 max-sm:text-sm md:text-xl ">
                Products
            </h2>

            <div className="mb-2 flex items-center gap-2 rounded-md bg-stone-700 px-4 py-2 text-base text-stone-300 hover:bg-stone-500  max-sm:px-2 max-sm:text-sm">
                <CatalogLink handler={onClickClose}>
                    <span className="flex items-center gap-2">
                        Catalog <GrLinkNext />
                    </span>
                </CatalogLink>
            </div>

            <button
                onClick={handleVisibility}
                className="mb-2 flex gap-1 rounded-md bg-stone-700  px-4 py-2 text-base text-stone-300 hover:bg-stone-500 max-sm:px-2 max-sm:text-sm"
            >
                Categories <span> +</span>
            </button>

            <AsideUl onClickClose={onClickClose} isVisible={isVisible} />

            <div className="absolute bottom-5 flex w-full justify-between px-4 ">
                {userId ? (
                    <Link onClick={onClickClose} to={'/logout'}>
                        <BiLogOutCircle className="size-6" />
                    </Link>
                ) : (
                    <Link onClick={onClickClose} to={'/login'}>
                        <FaRegUserCircle className="size-6" />
                    </Link>
                )}

                <Link onClick={onClickClose} to={'/cart'}>
                    <FaShoppingCart className="size-6" />
                </Link>
            </div>
        </aside>
    );
}
