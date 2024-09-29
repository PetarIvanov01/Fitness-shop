import { useOutletContext } from 'react-router-dom';

import CheckoutHeader from './components/CheckoutHeader';
import BillingSection from './components/BillingForm/BillingSection';

import { User } from '../../zustand/interfaces/UserSlice';

export default function CheckoutView() {
    const user = useOutletContext<NonNullable<User>>();

    return (
        <section className="flex min-h-screen w-full justify-center bg-slate-900 bg-opacity-95 font-inter">
            <div className="min-h-full w-[93%] border-x border-white p-3">
                <CheckoutHeader userId={user.id} />

                <BillingSection user={user} />
            </div>
        </section>
    );
}
