import { OneProduct } from '../../types/services/catalog';

import useStore from '../../zustand/store';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

import ProductInformation from './components/ProductInformation';
import RelatedProducts from './components/RelatedProducts';
import Spinner from '../Spinner';
import Reviews from './components/ReviewsComponents/Reviews';

export default function ProductView() {
    const { productId } = useParams();
    const fetchProduct = useStore((state) => state.fetchProduct);

    const { data, isLoading } = useFetch(fetchProduct, {}, productId);

    return (
        <div className="container min-h-full self-center px-3 font-alegreya">
            <section className="flex min-h-[800px] flex-col rounded-lg bg-gray-900 bg-opacity-95 p-4 text-white">
                {isLoading ? (
                    <>
                        <ProductInformation product={data as OneProduct} />

                        <hr className="mt-2 border-t-2 border-black" />

                        <Reviews />
                        <RelatedProducts />
                    </>
                ) : (
                    <Spinner />
                )}
            </section>
        </div>
    );
}
