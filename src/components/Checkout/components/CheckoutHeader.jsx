export default function CheckoutHeader() {
    return (
        <header className="flex flex-col gap-4 text-white">
            <h1 className=" border-b border-white text-3xl font-extrabold">
                Checkout
            </h1>
            <p className="border-b border-white text-[0.8em] font-extralight">
                To coplete your order, please{' '}
                <span className="text-[#CA952F]">[sign in] </span>
                or <span className="text-[#CA952F]">[create and account]</span>.
                Thank you!
            </p>
        </header>
    );
}
