import { useEffect, useState } from 'react';

export default function useFetch(cb, args = null) {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        if (args) {
            cb(args, abortController.signal).then((data) => {
                setData(data);
                setLoading(true);
            });
        }

        return () => {
            abortController.abort();
        };
    }, [args, cb]);

    return { data, isLoading };
}
