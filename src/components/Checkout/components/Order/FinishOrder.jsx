import ReceiveEmails from './components/ReceiveEmails';

export default function FinishOrder() {
    return (
        <section className="flex flex-wrap justify-between gap-4 pt-6">
            <div className="w-2/3">
                <ReceiveEmails />
                <p className="text-[0.7em] font-extralight">
                    Your provided information will be used to process your order
                    and for other purposes outlined in our privacy policy. By
                    proceeding, you agree to our privacy policy.
                </p>
            </div>

            <button className="h-max w-max border border-[#EDAD09] px-1 text-xl text-[#EDAD09] hover:opacity-60">
                Complete Purchase
            </button>
        </section>
    );
}
