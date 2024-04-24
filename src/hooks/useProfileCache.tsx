import { useEffect, useMemo, useState } from 'react';

export default function useProfileCache(userId, data = {}, fetchFunc, ...args) {
    const emptyValue = useMemo(() => {
        return Object.values(data).some((e) => e === '');
    }, [data]);

    const [isLoading, setLoading] = useState(() => {
        if (emptyValue) {
            return false;
        }
        return true;
    });
    const [cachedData, setCache] = useState({
        ...data,
    });

    useEffect(() => {
        if (emptyValue) {
            const abortController = new AbortController();

            fetchFunc(userId, abortController.signal, ...args).then((d) => {
                setCache(d);
                setLoading(true);
            });
        }
    }, [userId, fetchFunc, emptyValue, args]);

    return {
        emptyValue,
        isLoading,
        data: { ...cachedData },
    };
}
