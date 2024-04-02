import CheckoutHeader from './components/CheckoutHeader';
import BillingSection from './components/BillingForm/BillingSection';

export default function CheckoutView() {
    return (
        <section className="flex min-h-screen w-full justify-center bg-slate-900 bg-opacity-95 font-inter">
            <div className="min-h-full w-[93%] border-x border-white p-3">
                <CheckoutHeader />

                <BillingSection />
            </div>
        </section>
    );
}
