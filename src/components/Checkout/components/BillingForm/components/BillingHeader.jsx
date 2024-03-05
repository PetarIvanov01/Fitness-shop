import { CiSquareChevDown } from 'react-icons/ci';

export default function BillingHeader() {
    return (
        <header className="flex items-center gap-3 pb-5">
            <h2 className="text-xl font-semibold">Billing Details</h2>
            <CiSquareChevDown size={35} />
        </header>
    );
}
