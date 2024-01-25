import ProductInformation from './components/ProductInformation';
import RelatedProducts from './components/RelatedProducts';

export default function ProductView() {

    return (
        <div className='mx-1 px-3 font-alegreya min-h-full'>
            <section className='flex flex-col w-full bg-gray-900 opacity-95 rounded-lg text-white p-4'>

                <ProductInformation />

                <hr className="mt-2 border-t-2 border-black" />

                <RelatedProducts />

            </section>
        </div>
    );
}
