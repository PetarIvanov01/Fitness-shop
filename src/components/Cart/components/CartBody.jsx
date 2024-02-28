import CheckoutSection from './CheckoutSection';
import TableCart from './Table/CartTable';

export default function CartBody() {
    return (
        <section className="flex max-h-full min-h-[540px] flex-col gap-8 bg-slate-800 bg-opacity-95 text-white">
            <>
                <TableCart />
                <CheckoutSection />
            </>
        </section>
    );
}
