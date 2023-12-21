import prev from "../../../assets/controllers/prev.svg";
import next from "../../../assets/controllers/next.svg";

import bp from "../../../assets/fitness/benchpress.png";
import smith from "../../../assets/fitness/smith.png";
import legpress from "../../../assets/fitness/legpress.png";

import OfferCards from "./components/OffersCards";
import ControlOfferButton from "./components/ControlOfferButton";
import { useState } from "react";

const mockData = [
    {
        img: bp,
        alt: 'benchpress',
        key: 1,
        visible: false
    },
    {
        img: smith,
        alt: 'smith',
        key: 2,
        visible: true
    },
    {
        img: legpress,
        alt: 'legpres',
        key: 3,
        visible: false

    }
];

export default function TopOffers() {

    const [offers, setOffers] = useState(mockData);

    const handlePrevClick = (e) => {
        setOffers(prevOffers => {

            const lastVisibleIndex = prevOffers.findIndex((offer) => offer.visible);

            const updatedOffers = prevOffers.map((offer, index) => ({
                ...offer,
                visible: index === (lastVisibleIndex > 0 ? lastVisibleIndex - 1 : prevOffers.length - 1),
            }));

            return updatedOffers;
        })
    };

    const handleNextClick = (e) => {
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
        <article className="relative mt-4 py-4 flex items-center justify-center w-9/12 max-w-[540px] max-sm:min-w-[330px]
         opacity-95 bg-stone-950
         rounded-xl self-end 
         ">

            <ControlOfferButton handler={handlePrevClick} icon={prev} alt={'prev'} />

            <h1 className="absolute z-10 text-3xl max-sm:text-xl top-0 font-bold text-center text-stone-200 mb-6">
                Top Offers for the Week!
            </h1>

            {offers.map((i) => <OfferCards key={i.key} {...i} />)}

            <ControlOfferButton handler={handleNextClick} icon={next} alt={'next'} />

        </article>
    );
};


