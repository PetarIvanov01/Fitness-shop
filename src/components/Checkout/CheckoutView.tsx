import { Await, useLoaderData, useOutletContext } from 'react-router-dom';
import { initialProfileValue } from '../../utils/constants';

import CheckoutHeader from './components/CheckoutHeader';
import BillingSection from './components/BillingForm/BillingSection';

import { User } from '../../zustand/interfaces/UserSlice';
import { Suspense } from 'react';

export default function CheckoutView() {
    const user = useOutletContext<NonNullable<User>>();

    const { addressInfo, userInfo } = useLoaderData() as {
        userInfo: Promise<typeof initialProfileValue.personalInfo>;
        addressInfo: Promise<typeof initialProfileValue.shippingInfo>;
    };

    return (
        <section className="flex min-h-screen w-full justify-center bg-slate-900 bg-opacity-95 font-inter">
            <div className="min-h-full w-[93%] border-x border-white p-3">
                <CheckoutHeader userId={user.id} />
                <Suspense fallback={<div>Loading....</div>}>
                    <Await resolve={Promise.all([userInfo, addressInfo])}>
                        {(resolve) => {
                            return (
                                <BillingSection user={user} data={resolve} />
                            );
                        }}
                    </Await>
                </Suspense>
            </div>
        </section>
    );
}
