import useStore from '../../../zustand/store';

import FormSection from './components/FormSection';
import Skeleton from './components/Skeleton';
import useSWR from 'swr';

export default function InfoBody({
    userId,
    type,
}: {
    userId: string;
    type: string;
}) {
    const fetchProfile = useStore((state) => state.fetchProfile);

    const { data, isLoading } = useSWR(
        `${userId}-${type}`,
        () => fetchProfile(userId, new AbortController().signal),
        { revalidateOnFocus: false }
    );

    return (
        <>
            {!isLoading && data !== undefined ? (
                <FormSection personalInfo={data} userId={userId} />
            ) : (
                <Skeleton />
            )}
        </>
    );
}
