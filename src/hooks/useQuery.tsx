import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import { RANGES } from '../utils/priceRangeConstants';
import {
    QueryObjectType,
    ReturnedValuesTypes,
} from '../types/hooks/queryTypes';

type ValidQueryKeys = NonNullable<keyof QueryObjectType>;

export default function useQuery(): ReturnedValuesTypes {
    const [urlQueryParams, setQueries] = useSearchParams();

    const handleQueryChange = useCallback(
        (queryObj: QueryObjectType) => {
            for (const key in queryObj) {
                const typedKey = key as ValidQueryKeys;

                setQueries((prev) => {
                    if (queryObj[typedKey] === '' && prev.has(typedKey)) {
                        prev.delete(key);
                        return prev;
                    }
                    if (key === 'category' && prev.has('page')) {
                        prev.delete('page');
                    }
                    const value = queryObj[typedKey];
                    if (value) {
                        prev.set(typedKey, value.toString());
                    }
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
            prev.set('from', RANGES.from.toString());
            prev.set('to', RANGES.to.toString());

            return prev;
        });
    }, [setQueries]);
    const queryObj = Object.fromEntries(urlQueryParams) as QueryObjectType;

    return {
        queryObj,
        handleQueryChange,
        clearQueries,
    };
}
