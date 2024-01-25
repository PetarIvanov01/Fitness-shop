import React from 'react'
import { Link } from 'react-router-dom'

export default function RelatedProducts() {


    return (
        <div className='flex pt-8 flex-col items-center gap-3'>

            <header className="bg-stone-950 rounded-xl p-2">
                <h1 className="text-[1.5em] max-md:text-[1em]  font-bold text-center text-stone-200 ">
                    Related Products
                </h1>
            </header>

            <div className='flex gap-8 flex-wrap justify-center'>

                <div className='flex flex-col items-center '>
                    <img
                        src="https://pulsegymshop.bg/image/cache/catalog/products/active-gym/s368-(1)-black-621x424h.png"
                        alt="Related Product 2"
                        className=" w-32 max-h-32 rounded-lg shadow-lg bg-white"
                    />
                    <Link to='/related-product2' className='text-white underline mt-2 block hover:text-gray-300 transition duration-300'>View Product</Link>

                </div>

                <div className='flex flex-col items-center'>
                    <img
                        src="https://pulsegymshop.bg/image/cache/catalog/products/active-gym/s368-(1)-black-621x424h.png"
                        alt="Related Product 2"
                        className="w-32 max-h-32 rounded-lg shadow-lg bg-white"
                    />
                    <Link to='/related-product2' className='text-white underline mt-2 block hover:text-gray-300 transition duration-300'>View Product</Link>

                </div>
                <div className='flex flex-col items-center'>
                    <img
                        src="https://pulsegymshop.bg/image/cache/catalog/products/active-gym/s368-(1)-black-621x424h.png"
                        alt="Related Product 2"
                        className="w-32 max-h-32 rounded-lg shadow-lg bg-white"
                    />
                    <Link to='/related-product2' className='text-white underline mt-2 block hover:text-gray-300 transition duration-300'>View Product</Link>

                </div>
            </div>

        </div>

    )
}
