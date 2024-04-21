import { useParams } from 'react-router-dom';
import ProductInformation from './components/ProductInformation';
import RelatedProducts from './components/RelatedProducts';
import useStore from '../../zustand/store';
import useFetch from '../../hooks/useFetch';
import Spinner from '../Spinner';

export default function ProductView() {
    const { productId } = useParams();
    const fetchProduct = useStore((state) => state.fetchProduct);

    const { data, isLoading } = useFetch(fetchProduct, productId);

    return (
        <div className="min-h-full max-w-[1000px] self-center px-3 font-alegreya">
            <section className="flex min-h-[800px] w-full flex-col rounded-lg bg-gray-900 bg-opacity-95 p-4 text-white">
                {isLoading ? (
                    <>
                        <ProductInformation
                            product={data}
                            isLoading={isLoading}
                        />

                        <hr className="mt-2 border-t-2 border-black" />

                        <RelatedProducts />
                    </>
                ) : (
                    <Spinner />
                )}
            </section>
        </div>
    );
}
