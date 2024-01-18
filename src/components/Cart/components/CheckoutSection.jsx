import { GrLinkNext } from "react-icons/gr";

export default function CheckoutSection() {
    return (
        <section className="self-end p-4">
            <div className="bg-slate-800 px-4 py-2 flex flex-col gap-2 rounded-md">
                <p className="text-white font-bold text-lg">Total Price: $8032.54</p>
                <button className="flex items-center justify-center gap-2 bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600 transition duration-300">
                    Checkout <GrLinkNext />
                </button>
            </div>
        </section>
    )
};