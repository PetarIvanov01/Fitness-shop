import { useEffect, useMemo, useState } from 'react';
import useStore from '../zustand/store';

export default function useProfileCache(userId, data = {}) {
    const fetchProfile = useStore((state) => state.fetchProfile);

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

            fetchProfile(userId, abortController.signal).then((d) => {
                setCache(d);
                setLoading(true);
            });
        }
    }, [userId, fetchProfile, emptyValue]);

    const body = useMemo(() => {
        return {
            emptyValue,
            isLoading,
            data: { ...cachedData },
        };
    }, [isLoading, cachedData, emptyValue]);

    return body;
}
