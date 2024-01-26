import { useEffect, useState } from 'react';

export default function useFetch(cb, args = null) {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        cb(args)
            .then((data) => {
                setData(data);
                setLoading(true);
            })
            .catch((err) => console.log(err));
    }, [args]);

    return { data, isLoading };
}
