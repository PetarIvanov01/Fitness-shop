import { CatalogProductArr } from '../../types/services/catalog';

import { toast } from 'sonner';

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import useStore from '../../zustand/store';

import Card from './components/Card';

export default function ItemsSection({ data }: { data: CatalogProductArr }) {
    const navigate = useNavigate();

    const addCartItemIntoStore = useStore(
        (state) => state.addCartItemIntoStore
    );

    const onClickAddItemToCart = useCallback(
        (item: CatalogProductArr[number]) => {
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
        },
        [addCartItemIntoStore, navigate]
    );

    return (
        <section className="flex flex-wrap justify-center gap-6 overflow-auto pt-5">
            {data.map((product) => (
                <Card
                    key={product.product_id}
                    {...product}
                    onClickAddCookieData={onClickAddItemToCart(product)}
                />
            ))}
        </section>
    );
}
