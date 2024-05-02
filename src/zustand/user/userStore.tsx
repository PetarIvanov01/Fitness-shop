import { StateCreator } from 'zustand';
import { UserSliceInter } from '../interfaces';

import { getFromBrowserStorage } from '../../api/services/storage';

import {
    updateUserInformation,
    getUserInformation,
} from '../../api/services/userService/profile';

import {
    getAddress,
    updateAddress,
} from '../../api/services/userService/address';

const userSlice: StateCreator<UserSliceInter> = (set) => ({
    user: getFromBrowserStorage('user'),
    personalInfo: {},
    shippingInfo: {},
    otherShippingAddresses: [],

    fetchProfile: async (userId, signal) => {
        const data = await getUserInformation(userId, signal);

        set(() => ({ personalInfo: data }));
        return data;
    },
    fetchAddress: async (userId, signal, addressId) => {
        let result;

        if (addressId) {
            result = await getAddress(userId, addressId, signal);
        } else {
            const { payload } = await getAddress(userId, null, signal);
            result = payload[0];
            set(() => ({
                otherShippingAddresses: payload.slice(1).map((e) => ({
                    ...e,
                })),
            }));
        }

        set(() => ({
            shippingInfo: result,
        }));

        return result;
    },
    updateUserProfile: async (userId, profileState, signal) => {
        await updateUserInformation(
            userId,
            { personalInfo: profileState },
            signal
        );
        set(() => ({ personalInfo: profileState }));
    },
    updateUserAddress: async (userId, addressState, signal, addressId) => {
        await updateAddress(
            userId,
            addressId,
            { shippingInfo: addressState },
            signal
        );
        set(() => ({ shippingInfo: addressState }));
    },
    fetchBillingData: async (userId, signal) => {
        const data = await getUserInformation(userId, signal);
        const { payload } = await getAddress(userId, null, signal);

        return {
            personalInfo: data,
            shippingInfo: payload[0],
        };
    },
});

export default userSlice;
