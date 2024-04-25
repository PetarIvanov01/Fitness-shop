import { useEffect, useMemo, useState } from 'react';

type AsyncFunction<T, F extends (...args: any) => any> = (
    userId: T,
    signal: AbortSignal,
    ...args: string[]
) => Promise<Awaited<ReturnType<F>>>;

export default function useProfileCache<
    T,
    A extends {},
    B extends AsyncFunction<T, B>,
>(userId: T, data: A, fetchFunc: B, ...args: string[]) {
    const emptyValue = useMemo(() => {
        return Object.keys(data).length === 0;
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

            fetchFunc(userId, abortController.signal, ...args).then(
                (result) => {
                    setCache(result);
                    setLoading(true);
                }
            );
        }
    }, [userId, fetchFunc, emptyValue, args]);

    return {
        emptyValue,
        isLoading,
        data: { ...cachedData },
    };
}
