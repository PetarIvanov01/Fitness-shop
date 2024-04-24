import { useState } from 'react';

import { Link } from 'react-router-dom';
import { NavLi } from './components/NavLi';

import { LuMapPin } from 'react-icons/lu';
import { IoTicketOutline } from 'react-icons/io5';
import { MdOutlinePayment } from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io';

import ProfilePic from './components/ProfilePic';

export default function AsideNav({ userId, type }) {
    const [active, setActive] = useState(type);

    const onNavigateSetActive = (id) => {
        return () => {
            setActive(id);
        };
    };

    return (
        <div className="flex w-1/3 min-w-[220px] max-w-[250px] flex-col gap-2 bg-[#1B263E] bg-opacity-65">
            <ProfilePic />

            <nav className="h-full rounded-b-md border-2 border-black bg-[#1B263E] bg-opacity-65 text-white">
                <ul className="flex flex-col justify-center gap-3 px-2 pt-4">
                    <NavLi
                        id={'info'}
                        active={active}
                        Icon={IoMdInformationCircleOutline}
                    >
                        <Link
                            onClick={onNavigateSetActive('info')}
                            to={`/profile/info/${userId}`}
                        >
                            Personal Information
                        </Link>
                    </NavLi>

                    <NavLi id={'address'} active={active} Icon={LuMapPin}>
                        <Link
                            onClick={onNavigateSetActive('address')}
                            to={`/profile/address/${userId}`}
                        >
                            Addreses
                        </Link>
                    </NavLi>

                    <NavLi id={'orders'} active={active} Icon={IoTicketOutline}>
                        <Link
                            onClick={onNavigateSetActive('orders')}
                            to={`/profile/orders/${userId}`}
                        >
                            My Orders
                        </Link>
                    </NavLi>

                    <NavLi
                        id={'pay-methods'}
                        active={active}
                        Icon={MdOutlinePayment}
                    >
                        <Link
                            onClick={onNavigateSetActive('pay-methods')}
                            to={`/profile/pay-methods/${userId}`}
                        >
                            Payment Methods
                        </Link>
                    </NavLi>
                </ul>
            </nav>
        </div>
    );
}
