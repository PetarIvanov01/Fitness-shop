import ProductInformation from './components/ProductInformation';
import RelatedProducts from './components/RelatedProducts';

export default function ProductView() {
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
