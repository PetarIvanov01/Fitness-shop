import CheckoutHeader from './components/CheckoutHeader';
import BillingSection from './components/BillingForm/BillingSection';
import OrderSection from './components/Order/OrderSection';

export default function CheckoutView() {
    return (
        <section className="font-inter flex min-h-screen w-full justify-center bg-slate-900 bg-opacity-95">
            <div className="min-h-full w-[93%] border-x border-white p-3">
                <CheckoutHeader />

                <BillingSection />

                <OrderSection />
            </div>
        </section>
    );
}
