import { Link } from 'react-router-dom';

export default function CheckoutHeader({ userId }: { userId: string }) {
    return (
        <header className="flex flex-col gap-4 text-white">
            <h1 className=" border-b border-white text-3xl font-extrabold">
                Checkout
            </h1>

            {userId ? (
                <p className="border-b border-white text-[0.9em] text-green-400">
                    Let&apos;s finalize your purchase and keep you on track!
                    Thank you.
                </p>
            ) : (
                <p className="border-b border-white text-[0.8em] font-extralight">
                    To coplete your order, please{' '}
                    <Link to={'/login'} className="text-[#CA952F]">
                        [sign in]{' '}
                    </Link>
                    or{' '}
                    <Link to={'/register'} className="text-[#CA952F]">
                        [create and account]
                    </Link>
                    . Thank you!
                </p>
            )}
        </header>
    );
}
