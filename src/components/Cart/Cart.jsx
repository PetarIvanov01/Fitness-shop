import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartBody from './components/CartBody';

export default function Cart() {
    return (
        <div className="h-auto font-alegreya">
            <CartHeader />

            <CartBody />

            <CartFooter />
        </div>
    );
}
