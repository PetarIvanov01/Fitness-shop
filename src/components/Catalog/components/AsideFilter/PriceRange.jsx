import React, { useState } from 'react'
const RANGES = {
    start: 0,
    end: 1000,
    step: 10
};

export default function PriceRange() {
    const [totalPrice, setPrice] = useState({
        start: RANGES.start,
        end: RANGES.end
    });

    const handleStartPriceChange = (event) => {
        setPrice((prev) => ({ ...prev, start: event.target.value }));
    };

    const handleEndPriceChange = (event) => {
        setPrice((prev) => ({ ...prev, end: event.target.value }));
    };

    return (
        <div className="mb-4 ">
            <p className="text-white mb-2">Price Range</p>
            <div className="flex justify-between mt-2 text-white">
                <span>From: ${totalPrice.start}</span>
                <span>To: ${totalPrice.end}</span>
            </div>
            <div className="flex gap-2 mt-2">
                <input
                    name="start"
                    type="range"
                    min={RANGES.start}
                    max={RANGES.end}
                    step={RANGES.step}
                    value={totalPrice.start}
                    onChange={handleStartPriceChange}
                    className="w-full bg-gray-800 text-white"
                />
                <input
                    name="end"
                    type="range"
                    min={RANGES.start}
                    max={RANGES.end}
                    step={RANGES.step}
                    value={totalPrice.end}
                    onChange={handleEndPriceChange}
                    className="w-full bg-gray-800 text-white"
                />
            </div>
        </div>
    )
}

