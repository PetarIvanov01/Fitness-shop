import useSWR from 'swr';
import useStore from '../../../zustand/store';
import FormSection from './components/FormSection';
import Skeleton from '../PersonalInfo/components/Skeleton';
import OtherAddresses from './OtherAddresses';

export default function AddressBody({
    userId,
    type,
}: {
    userId: string;
    type: string;
}) {
    const fetchAddress = useStore((state) => state.fetchAddress);

    const { data, isLoading } = useSWR(
        `${userId}-${type}`,
        () => fetchAddress(userId, new AbortController().signal, null),
        { revalidateOnFocus: false }
    );

    return (
        <>
            {!isLoading && data !== undefined ? (
                <>
                    <FormSection shippingInfo={data} userId={userId} />
                    <OtherAddresses />
                </>
            ) : (
                <Skeleton />
            )}
        </>
    );
}
