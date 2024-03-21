import { getFromBrowserStorage } from '../api/services/storage';
import {
    getAddresses,
    updateAddress,
    getUserInformation,
    updateUserInformation,
} from '../api/services/user';
import { initialProfileValue } from '../utils/constants';

const userSlice = (set) => ({
    user: getFromBrowserStorage('user'),
    personalInfo: initialProfileValue.personalInfo,
    shippingInfo: initialProfileValue.shippingInfo,
    otherShippingAddresses: [],
    fetchProfile: async (userId, signal) => {
        const data = await getUserInformation(userId, signal);

        set(() => ({ personalInfo: data }));
        return data;
    },
    fetchAddress: async (userId, signal, addressId = '') => {
        const { payload } = await getAddresses(userId, addressId, signal);
        let state = {
            ...payload[0],
        };

        set(() => ({
            shippingInfo: state,
            otherShippingAddresses: payload.slice(1).map((e) => ({
                ...e,
            })),
        }));
        return state;
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
});

export default userSlice;
