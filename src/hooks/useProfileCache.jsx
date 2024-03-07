import { useEffect, useState } from 'react';
import useStore from '../zustand/store';

export default function useProfileCache() {
    const fetchProfile = useStore((state) => state.fetchProfile);

    const userId = useStore((state) => state.user.id);
    const personalInfo = useStore((state) => state.personalInfo);
    const shippingInfo = useStore((state) => state.shippingInfo);

    const [cachedData, setCache] = useState({
        personalInfo,
        shippingInfo,
    });

    useEffect(() => {
        if (
            personalInfo.firstName === '' ||
            personalInfo.lastName === '' ||
            personalInfo.email === '' ||
            personalInfo.phoneNumber === ''
        ) {
            const abortController = new AbortController();
            fetchProfile(userId, abortController.signal).then(setCache);
        }
    }, [
        userId,
        fetchProfile,
        personalInfo.firstName,
        personalInfo.lastName,
        personalInfo.email,
        personalInfo.phoneNumber,
    ]);

    return {
        personalInfo: cachedData.personalInfo,
        shippingInfo: cachedData.shippingInfo,
    };
}
