import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';
import useQuery from './useQuery';
import { RANGES } from '../utils/priceRangeConstants';

export default function usePriceRange() {
    const { queryObj, handleQueryChange } = useQuery();

    const [totalPrice, setPrice] = useState(() => {
        const state = {
            from: queryObj.from || RANGES.from,
            to: queryObj.to || RANGES.to,
        };
        if (
            Number(queryObj.from) <= RANGES.from ||
            isNaN(Number(queryObj.from))
        ) {
            state.from = RANGES.from;
        }
        if (
            Number(queryObj.to) > RANGES.to ||
            Number(queryObj.to) < 0 ||
            isNaN(Number(queryObj.to))
        ) {
            state.to = RANGES.to;
        }

        return state;
    });

    const debouncedValues = useDebounce(totalPrice);
    const invalidPriceRange =
        Number(debouncedValues.from) > Number(debouncedValues.to);

    useEffect(() => {
        if (
            debouncedValues.from !== undefined &&
            debouncedValues.to !== undefined
        ) {
            if (!invalidPriceRange) {
                handleQueryChange(debouncedValues);
            }
        }
    }, [debouncedValues, invalidPriceRange, handleQueryChange]);

    return {
        totalPrice,
        invalidPriceRange,
        setPrice,
    };
}
