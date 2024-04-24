import useStore from '../../../zustand/store';
import FormSection from './components/FormSection';
import useProfileCache from '../../../hooks/useProfileCache';
import Skeleton from './components/Skeleton';

export default function InfoBody({ userId }) {
    const fetchProfile = useStore((state) => state.fetchProfile);
    const personalInfo = useStore((state) => state.personalInfo);

    const { data, isLoading, emptyValue } = useProfileCache(
        userId,
        personalInfo,
        fetchProfile
    );

    return (
        <>
            {isLoading ? (
                <FormSection
                    emptyValue={emptyValue}
                    personalInfo={data}
                    userId={userId}
                />
            ) : (
                <Skeleton />
            )}
        </>
    );
}
