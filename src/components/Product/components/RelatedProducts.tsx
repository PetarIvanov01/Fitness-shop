import RelatedProduct from './Product';
import { getCatalog } from '../../../api/services/catalog';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

export default function RelatedProducts() {
    const { categoryType } = useParams();
    const queryString = `category=${categoryType}&perPage=3`;

    const { data } = useFetch(
        getCatalog,
        {
            itemsLng: 0,
            result: [],
        },
        queryString
    );

    const relatedItems = data.result;

    return (
        <div className="flex flex-col pt-4">
            <header className="text-neutral-200">
                <h1 className="text-center text-2xl font-bold text-stone-200">
                    Related Products
                </h1>
            </header>
            <span className="border-t border-neutral-400" />
            <div className="flex flex-wrap justify-center gap-8 pt-2">
                {relatedItems &&
                    relatedItems.map((pr) => {
                        return (
                            <RelatedProduct
                                type={pr.type}
                                key={pr.product_id}
                                id={pr.product_id}
                                title={pr.title}
                                image={pr.image}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
