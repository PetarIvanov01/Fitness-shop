import prev from "../../../assets/controllers/prev.svg";
import next from "../../../assets/controllers/next.svg";

import OfferCards from "./components/OffersCards";
import ControlOfferButton from "./components/ControlOfferButton";
import topOfferData from "../../../assets/utils/topOfferData.json";
import resolveImgPaths from "../../../utils/resolveImgPaths";

import { useState } from "react";

export default function TopOffers() {

    const resolvedTopOffersData = resolveImgPaths(topOfferData);
    const [offers, setOffers] = useState(resolvedTopOffersData);

    const handlePrevClick = () => {
        setOffers(prevOffers => {

            const lastVisibleIndex = prevOffers.findIndex((offer) => offer.visible);

            const updatedOffers = prevOffers.map((offer, index) => ({
                ...offer,
                visible: index === (lastVisibleIndex > 0 ? lastVisibleIndex - 1 : prevOffers.length - 1),
            }));

            return updatedOffers;
        })
    };

    const handleNextClick = () => {
        setOffers(prevOffers => {
            const lastVisibleIndex = prevOffers.findIndex((offer) => offer.visible);

            const updatedOffers = prevOffers.map((offer, index) => ({
                ...offer,
                visible: index === (lastVisibleIndex < prevOffers.length - 1 ? lastVisibleIndex + 1 : 0),
            }));

            return updatedOffers;
        })
    };

    return (
        <section className="flex px-2 flex-col min-h-12 ">

            <article className="relative mt-4 py-4 flex items-center justify-center w-9/12 max-w-[640px] max-sm:min-w-[330px]
         opacity-95 bg-stone-950
         rounded-xl self-end 
         ">
                <ControlOfferButton handler={handlePrevClick} icon={prev} alt={'prev'} />

                <h1 className="absolute z-10 text-[2em] max-md:text-[1.5em] top-0 font-bold text-center text-stone-200 mb-6">
                    Top Offers for the Week!
                </h1>

                {offers.map((i) => <OfferCards key={i.key} {...i} />)}

                <ControlOfferButton handler={handleNextClick} icon={next} alt={'next'} />

            </article>

            <hr className="my-4 border-t-2 border-black" />
        </section>
    );
};


