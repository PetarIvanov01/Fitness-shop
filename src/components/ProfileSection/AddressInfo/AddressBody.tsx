import useStore from '../../../zustand/store';
import useProfileCache from '../../../hooks/useProfileCache';
import FormSection from './components/FormSection';
import Skeleton from '../PersonalInfo/components/Skeleton';
import OtherAddresses from './OtherAddresses';

export default function AddressBody({ userId }: { userId: string }) {
    const fetchAddress = useStore((state) => state.fetchAddress);
    const shippingInfo = useStore((state) => state.shippingInfo);

    const { data, isLoading, emptyValue } = useProfileCache(
        userId,
        shippingInfo,
        fetchAddress
    );

    return (
        <>
            {isLoading ? (
                <>
                    <FormSection
                        emptyValue={emptyValue}
                        shippingInfo={data}
                        userId={userId}
                    />
                    <OtherAddresses />
                </>
            ) : (
                <Skeleton />
            )}
        </>
    );
}
