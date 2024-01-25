import { Link, useParams } from 'react-router-dom';
import useStore from "../../../zustand/store";
import { useEffect } from 'react';

export default function ProductInformation() {

    const { productId } = useParams()

    const product = useStore((state) => state.product);
    const fetchProduct = useStore((state) => state.fetchProduct);

    useEffect(() => {
        const abortController = new AbortController();
        
        if (productId) {
            fetchProduct(productId, abortController.signal);
        }

        return () => {
            abortController.abort();
        }
    }, []);

    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-2xl font-bold pb-2'>Horizontal Bench Classic Series by Active Gym</h1>

                <div className='pb-4 max-w-96'>
                    <img
                        src="https://pulsegymshop.bg/image/cache/catalog/products/active-gym/s368-(1)-black-621x424h.png"
                        alt="Horizontal Bench Classic Series by Active Gym"
                        className="w-full rounded-lg shadow-lg bg-white"
                    />
                </div>
            </div>

            <p className='text-lg pb-4'>The Horizontal Bench from the Classic Series by Active Gym is a multifunctional bench for full-body workouts using weights, dumbbells, or body weight.</p>

            <ul className='list-disc pl-6 pb-4'>
                <li><b>Availability:</b> ✔</li>
                <li><b>Weight:</b> 50.00kg</li>
            </ul>

            <div className='w-fit self-end text-xl font-bold flex flex-col justify-center max-sm:text-[1em]'>
                <div className='pb-2'>Price: $1,500.00</div>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md '>Add to Cart</button>
            </div>

            <div className='flex pt-2 items-center gap-8 max-sm:text-[0.8em]'>

                <p className='text-base'>Item added to cart! What would you like to do next?</p>
                <div>
                    <Link to='/catalog' className='text-white underline mr-2 hover:text-gray-300 transition duration-300'>Continue Shopping</Link>
                    <Link to='/cart' className='text-white underline hover:text-gray-300 transition duration-300'>Go to Cart</Link>
                </div>
            </div>
        </div>
    )
};
