import Card from './components/Card';
import useStore from '../../zustand/store';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function ItemsSection({ data }) {
    const navigate = useNavigate();

    const addCartItemIntoStore = useStore(
        (state) => state.addCartItemIntoStore
    );

    const onClickAddItemToCart = (item) => {
        return () => {
            addCartItemIntoStore(item);

            toast.success(`Item-${item.title}: Added to Cart`, {
                position: 'top-left',
                duration: 1000,
                action: {
                    label: 'Go to Cart',
                    onClick: () => {
                        navigate('/cart');
                    },
                },
            });
        };
    };

    return (
        <section className="flex flex-wrap justify-center gap-6 overflow-auto pt-5">
            {data?.map((products) => (
                <Card
                    key={products.product_id}
                    {...products}
                    onClickAddCookieData={onClickAddItemToCart(products)}
                />
            ))}
        </section>
    );
}
