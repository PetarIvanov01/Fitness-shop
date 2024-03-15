import { Link } from 'react-router-dom';
import { LuMapPin } from 'react-icons/lu';
import { IoTicketOutline } from 'react-icons/io5';
import { MdOutlinePayment } from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io';

import ProfilePic from './components/ProfilePic';
import { NavLi } from './components/NavLi';

export default function AsideNav() {
    return (
        <div className="flex w-1/3 min-w-[220px] max-w-[250px] flex-col gap-2 bg-[#1B263E] bg-opacity-65">
            <ProfilePic />

            <nav className="h-full rounded-b-md border-2 border-black bg-[#1B263E] bg-opacity-65 text-white">
                <ul className="flex flex-col justify-center gap-3 px-2 pt-4">
                    <NavLi Icon={IoMdInformationCircleOutline}>
                        <Link to={'/profile/info'}>Personal Information</Link>
                    </NavLi>

                    <NavLi Icon={LuMapPin}>
                        <Link to={'/profile/address'}>Addreses</Link>
                    </NavLi>

                    <NavLi Icon={IoTicketOutline}>
                        <Link to={'/profile/orders'}>My Orders</Link>
                    </NavLi>

                    <NavLi Icon={MdOutlinePayment}>
                        <Link to={'/profile/pers-info'}>Payment Methods</Link>
                    </NavLi>
                </ul>
            </nav>
        </div>
    );
}
