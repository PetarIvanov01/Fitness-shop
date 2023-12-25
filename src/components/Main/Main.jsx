import TopOffers from "./TopOffer/TopOffer";

export default function Main() {


    return (
        <main className="h-full">
            <section className="flex px-2 flex-col min-h-12 ">

                <TopOffers />
                <hr className="my-4 border-t-2 border-black" />

            </section>


            <section className="bg-stone-950 py-4 opacity-95">

                <header className="text-center">
                    <h1 className="text-[32px] text-white font-bold">Shop Equipment</h1>
                </header>

                <article className="mx-2 mb-4 mt-2 flex flex-wrap gap-14 justify-center">

                    <div className="size-60 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" src="https://thefitnessstore.com/cdn/shop/files/36041931_1725166317562698_119756774977830912_o_370x.jpg?v=1614311367" alt="" />
                        <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white font-bold px-3 py-2 hover:text-gray-300 transition-colors duration-300">Machines</button>
                    </div>

                    <div className="size-60 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" src="https://thefitnessstore.com/cdn/shop/files/18268523_1512377752107364_2257329325229312232_n_270x.jpg?v=1614311367" alt="" />
                        <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white font-bold px-3 py-2 hover:text-gray-300 transition-colors duration-300">Cardio</button>
                    </div>

                    <div className="size-60 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpA_t-nQoaWnpUCmnNS0x5E3l_1LJ5Viz7vQ&usqp=CAU" alt="" />
                        <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white font-bold px-3 py-2 hover:text-gray-300 transition-colors duration-300">Free Weights</button>
                    </div>

                    
                </article>

            </section>

        </main>
    );
};