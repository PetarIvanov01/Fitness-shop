import { RANGES } from '../../../../utils/priceRangeConstants';

export default function PriceRange({
    totalPrice,
    setPrice,
    invalidPriceRange,
}) {
    const handleStartPriceChange = (event) => {
        setPrice((prev) => ({ ...prev, from: Number(event.target.value) }));
    };

    const handleEndPriceChange = (event) => {
        setPrice((prev) => ({ ...prev, to: Number(event.target.value) }));
    };
    return (
        <div id="price-filter" className="pb-2">
            <p className="text-white">Price Range</p>
            <div className="mt-2 flex justify-between text-white">
                <span className={`${invalidPriceRange && 'text-red-500'}`}>
                    From: ${totalPrice.from}
                </span>
                <span className={`${invalidPriceRange && 'text-red-500'}`}>
                    To: ${totalPrice.to}
                </span>
            </div>
            <div className="mt-2 flex gap-2">
                <input
                    name="from"
                    type="range"
                    min={RANGES.from}
                    max={RANGES.to}
                    step={RANGES.step}
                    value={totalPrice.from}
                    onChange={handleStartPriceChange}
                    className="w-full bg-gray-800 text-white"
                />
                <input
                    name="to"
                    type="range"
                    min={RANGES.from}
                    max={RANGES.to}
                    step={RANGES.step}
                    value={totalPrice.to}
                    onChange={handleEndPriceChange}
                    className="w-full bg-gray-800 text-white"
                />
            </div>
        </div>
    );
}
