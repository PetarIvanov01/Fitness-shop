import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { AddressInfoReturnedType } from '../../../zustand/interfaces/UserSlice';

import FormSection from './components/FormSection';
import OtherAddresses from './OtherAddresses';
import Skeleton from '../components/Skeleton';

export default function AddressBody({ userId }: { userId: string }) {
    const { data } = useLoaderData() as {
        data: Promise<{
            payload: AddressInfoReturnedType;
        }>;
    };

    return (
        <Suspense fallback={<Skeleton />}>
            <Await resolve={data}>
                {(payload) => {
                    return (
                        <>
                            <FormSection
                                shippingInfo={payload}
                                userId={userId}
                            />
                            <OtherAddresses />
                        </>
                    );
                }}
            </Await>
        </Suspense>
    );
}
