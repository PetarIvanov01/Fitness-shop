import { useParams } from 'react-router-dom';
import ProductInformation from './components/ProductInformation';
import RelatedProducts from './components/RelatedProducts';
import useStore from '../../zustand/store';
import { useEffect } from 'react';

export default function ProductView() {
    const { productId } = useParams();
    const fetchProduct = useStore((state) => state.fetchProduct);

    useEffect(() => {
        const abortController = new AbortController();

        if (productId) {
            fetchProduct(productId, abortController.signal);
        }

        return () => {
            abortController.abort();
        };
    }, [productId]);
    return (
        <div className="mx-1 min-h-full px-3 font-alegreya">
            <section className="flex w-full flex-col rounded-lg bg-gray-900 p-4 text-white opacity-95">
                <ProductInformation />

                <hr className="mt-2 border-t-2 border-black" />

                <RelatedProducts />
            </section>
        </div>
    );
}
