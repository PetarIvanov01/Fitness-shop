import RelatedProduct from './Product';
import { getCatalog } from '../../../api/services/catalog';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

export default function RelatedProducts() {
    const { categoryType } = useParams();
    const queryString = `category=${categoryType}&perPage=3`;

    const { data } = useFetch(getCatalog, queryString);
    const relatedItems = data.result;

    return (
        <div className="flex flex-col items-center gap-5 pt-4">
            <header className="border-b border-neutral-400  text-neutral-200">
                <h1 className="text-center text-2xl font-bold text-stone-200">
                    Related Products
                </h1>
            </header>

            <div className="flex flex-wrap justify-center gap-8">
                {relatedItems &&
                    relatedItems.map((pr) => {
                        return (
                            <RelatedProduct
                                type={categoryType}
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
