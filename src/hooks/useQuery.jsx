import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import { RANGES } from '../utils/priceRangeConstants';

export default function useQuery() {
    const [urlQueryParams, setQueries] = useSearchParams();

    const handleQueryChange = useCallback(
        (queryObj) => {
            for (const key in queryObj) {
                setQueries((prev) => {
                    if (queryObj[key] === '' && prev.has(key)) {
                        prev.delete(key);
                        return prev;
                    }
                    if (key === 'category' && prev.has('page')) {
                        prev.delete('page');
                    }
                    prev.set(key, queryObj[key]);

                    return prev;
                });
            }
        },
        [setQueries]
    );

    const clearQueries = useCallback(() => {
        setQueries((prev) => {
            const keyArr = Array.from(prev.keys());

            for (const key of keyArr) {
                prev.delete(key);
            }
            prev.set('from', RANGES.from), prev.set('to', RANGES.to);

            return prev;
        });
    }, []);
    const queryObj = Object.fromEntries(urlQueryParams);

    return {
        queryObj,
        urlQueryParams,
        handleQueryChange,
        clearQueries,
    };
}
