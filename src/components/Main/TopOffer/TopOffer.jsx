import OfferCards from './components/OffersCards';
import ControlOfferButton from './components/ControlOfferButton';
import topOfferData from '../../../assets/utils/topOfferData.json';
import resolveImgPaths from '../../../utils/resolveImgPaths';

import { GrPrevious, GrNext } from 'react-icons/gr';
import { useState } from 'react';

export default function TopOffers() {
    const resolvedTopOffersData = resolveImgPaths(topOfferData);
    const [offers, setOffers] = useState(resolvedTopOffersData);

    const handlePrevClick = () => {
        setOffers((prevOffers) => {
            const lastVisibleIndex = prevOffers.findIndex(
                (offer) => offer.visible
            );

            const updatedOffers = prevOffers.map((offer, index) => ({
                ...offer,
                visible:
                    index ===
                    (lastVisibleIndex > 0
                        ? lastVisibleIndex - 1
                        : prevOffers.length - 1),
            }));

            return updatedOffers;
        });
    };

    const handleNextClick = () => {
        setOffers((prevOffers) => {
            const lastVisibleIndex = prevOffers.findIndex(
                (offer) => offer.visible
            );

            const updatedOffers = prevOffers.map((offer, index) => ({
                ...offer,
                visible:
                    index ===
                    (lastVisibleIndex < prevOffers.length - 1
                        ? lastVisibleIndex + 1
                        : 0),
            }));

            return updatedOffers;
        });
    };

    return (
        <section className="flex min-h-12 flex-col px-2 ">
            <article
                className="relative mt-4 flex w-9/12 max-w-[640px] items-center 
                justify-center self-end rounded-xl
                bg-stone-950 bg-opacity-95
                py-4 max-sm:min-w-[330px] 
                "
            >
                <ControlOfferButton handler={handlePrevClick}>
                    <GrPrevious className="w-16 text-white" />
                </ControlOfferButton>

                <h1 className="absolute top-0 z-10 mb-6 text-center text-[2em] font-bold text-stone-200 max-md:text-[1.5em]">
                    Top Offers for the Week!
                </h1>

                {offers.map((i) => (
                    <OfferCards key={i.key} {...i} />
                ))}

                <ControlOfferButton handler={handleNextClick}>
                    <GrNext className="w-16 text-white" />
                </ControlOfferButton>
            </article>

            <hr className="my-4 border-t-2 border-black" />
        </section>
    );
}
