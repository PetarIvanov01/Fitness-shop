import resolveServerImg from '../../../utils/resolveServerImg';
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
        <div className="flex flex-col items-center gap-3 pt-8">
            <header className="rounded-xl bg-stone-950 p-2">
                <h1 className="text-center text-[1.5em]  font-bold text-stone-200 max-md:text-[1em] ">
                    Related Products
                </h1>
            </header>

            <div className="flex flex-wrap justify-center gap-8">
                {relatedItems &&
                    relatedItems.map((pr) => {
                        const image = resolveServerImg(pr.image);
                        return (
                            <RelatedProduct
                                key={pr.product_id}
                                id={pr.product_id}
                                title={pr.title}
                                image={image}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
