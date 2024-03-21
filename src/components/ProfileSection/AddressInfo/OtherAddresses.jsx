import { IoAddCircleOutline } from 'react-icons/io5';
import AddressList from './components/AddressList';

export default function OtherAddresses() {
    return (
        <>
            <div className="px-6 pb-6 pt-16">
                <header className="flex items-center justify-between border-b pb-1">
                    <h1 className=" text-xl font-semibold text-white">
                        Shipping Addresses
                    </h1>
                    <button className="flex items-center gap-1 rounded-md bg-gray-300 px-2 font-medium text-black hover:bg-opacity-85">
                        <span>Add Address</span>
                        <IoAddCircleOutline className="size-8 text-black " />
                    </button>
                </header>
            </div>

            <AddressList />
        </>
    );
}
