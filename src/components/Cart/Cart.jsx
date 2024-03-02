import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartBody from './components/CartBody';

export default function Cart() {
    return (
        <div className="h-auto pt-10 font-alegreya">
            <CartHeader />

            <CartBody />

            <CartFooter />
        </div>
    );
}
