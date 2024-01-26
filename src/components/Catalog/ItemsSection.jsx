import Card from './components/Card';
import useStore from '../../zustand/store';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function ItemsSection({ data }) {
    const navigate = useNavigate();
    const addCartDataToCookies = useStore(
        (state) => state.addCartDataToCookies
    );

    const onClickAddCookieData = ({ id, name }) => {
        return () => {
            addCartDataToCookies(id);
            toast.success(`Item-${name}: Added to Cart`, {
                position: 'top-right',
                duration: 2000,
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
                    onClickAddCookieData={onClickAddCookieData({
                        id: products.product_id,
                        name: products.title,
                    })}
                />
            ))}
        </section>
    );
}
