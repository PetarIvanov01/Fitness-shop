import useStore from '../../../../zustand/store';
import AddressBox from './AddressBox';

export default function AddressList() {
    const addresses = useStore((state) => state.otherShippingAddresses);

    return (
        <div className="flex flex-col gap-6 pb-5 max-s:text-[0.8em]">
            {addresses.length > 0 ? (
                addresses.map((e) => <AddressBox {...e} key={e.address_id} />)
            ) : (
                <div className="h-full px-1 text-center text-[1.2em]">
                    <p className="text-gray-400 max-s:text-[1em]">
                        You haven&apos;t added any other addresses yet.
                    </p>
                    <p className="text-gray-400 max-s:text-[1em]">
                        Click the button below to add a new address.
                    </p>
                </div>
            )}
        </div>
    );
}
