import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { PersonalInfoReturnedType } from '../../../zustand/interfaces/UserSlice';

import FormSection from './components/FormSection';
import Skeleton from './components/Skeleton';

export default function InfoBody({ userId }: { userId: string }) {
    const { data } = useLoaderData() as {
        data: Promise<PersonalInfoReturnedType>;
    };

    return (
        <Suspense fallback={<Skeleton />}>
            <Await resolve={data}>
                {(resolve) => (
                    <FormSection personalInfo={resolve} userId={userId} />
                )}
            </Await>
        </Suspense>
    );
}
