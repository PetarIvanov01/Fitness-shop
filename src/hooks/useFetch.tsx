import { useEffect, useState } from 'react';

export default function useFetch<
    T extends (args: F, signal: AbortSignal) => Promise<Awaited<ReturnType<T>>>,
    A,
    F extends string,
>(callback: T, initialState: A, args?: F) {
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

    return { data, isLoading } as const;
}
