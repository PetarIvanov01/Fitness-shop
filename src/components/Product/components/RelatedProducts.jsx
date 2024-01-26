import React from 'react';
import { Link } from 'react-router-dom';

export default function RelatedProducts() {
    return (
        <div className="flex flex-col items-center gap-3 pt-8">
            <header className="rounded-xl bg-stone-950 p-2">
                <h1 className="text-center text-[1.5em]  font-bold text-stone-200 max-md:text-[1em] ">
                    Related Products
                </h1>
            </header>

            <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center ">
                    <img
                        src="https://pulsegymshop.bg/image/cache/catalog/products/active-gym/s368-(1)-black-621x424h.png"
                        alt="Related Product 2"
                        className=" max-h-32 w-32 rounded-lg bg-white shadow-lg"
                    />
                    <Link
                        to="/related-product2"
                        className="mt-2 block text-white underline transition duration-300 hover:text-gray-300"
                    >
                        View Product
                    </Link>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="https://pulsegymshop.bg/image/cache/catalog/products/active-gym/s368-(1)-black-621x424h.png"
                        alt="Related Product 2"
                        className="max-h-32 w-32 rounded-lg bg-white shadow-lg"
                    />
                    <Link
                        to="/related-product2"
                        className="mt-2 block text-white underline transition duration-300 hover:text-gray-300"
                    >
                        View Product
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://pulsegymshop.bg/image/cache/catalog/products/active-gym/s368-(1)-black-621x424h.png"
                        alt="Related Product 2"
                        className="max-h-32 w-32 rounded-lg bg-white shadow-lg"
                    />
                    <Link
                        to="/related-product2"
                        className="mt-2 block text-white underline transition duration-300 hover:text-gray-300"
                    >
                        View Product
                    </Link>
                </div>
            </div>
        </div>
    );
}
