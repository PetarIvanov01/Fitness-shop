import useStore from '../../../../zustand/store';
import AddressBox from './AddressBox';

export default function AddressList() {
    const addresses = useStore((state) => state.otherShippingAddresses);
    return (
        <div className="flex flex-col gap-6 pb-5">
            {addresses.length > 0 ? (
                addresses.map((e) => <AddressBox {...e} key={e.address_id} />)
            ) : (
                <div className="flex h-full flex-col items-center justify-center">
                    <p className="text-lg text-gray-400">
                        You haven&apos;t added any other addresses yet.
                    </p>
                    <p className="text-lg text-gray-400">
                        Click the button below to add a new address.
                    </p>
                </div>
            )}
        </div>
    );
}
