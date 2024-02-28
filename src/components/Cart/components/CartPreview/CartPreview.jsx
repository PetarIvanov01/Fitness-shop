import CheckoutSection from '../CheckoutSection';
import TableCart from '../Table/CartTable';

export default function CartPreview() {
    return (
        <section className="flex max-h-full flex-col gap-8 bg-slate-800 bg-opacity-95 text-white">
            <TableCart />
            <CheckoutSection />
        </section>
    );
}
