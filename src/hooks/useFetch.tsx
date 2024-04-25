import { useEffect, useState } from 'react';

export default function useFetch<
    T extends (args: F, signal: AbortSignal) => Promise<Awaited<ReturnType<T>>>,
    F extends string,
    A,
>(callback: T, args: F, initialState: A) {
    const [data, setData] = useState<Awaited<ReturnType<T>> | A>(initialState);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        if (args) {
            callback(args, abortController.signal).then((data) => {
                setData(data);
                setLoading(true);
            });
        }

        return () => {
            abortController.abort();
        };
    }, [args, callback]);

    return { data, isLoading };
}
