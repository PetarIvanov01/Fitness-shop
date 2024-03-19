import useStore from '../../../zustand/store';
import FormSection from './components/FormSection';
import useProfileCache from '../../../hooks/useProfileCache';
import Skeleton from './components/Skeleton';

export default function InfoBody({ userId }) {
    const personalInfo = useStore((state) => state.personalInfo);

    const { data, isLoading, emptyValue } = useProfileCache(
        userId,
        personalInfo
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
