import { getFromBrowserStorage } from '../api/services/storage';
import {
    getUserInformation,
    updateUserInformation,
} from '../api/services/user';
import { initialProfileValue } from '../utils/constants';

const userSlice = (set) => ({
    user: getFromBrowserStorage('user'),
    personalInfo: initialProfileValue.personalInfo,
    shippingInfo: initialProfileValue.shippingInfo,
    fetchProfile: async (userId, signal) => {
        const { address, ...rest } = await getUserInformation(userId, signal);
        const state = {
            shippingInfo: { ...address },
            personalInfo: { ...rest },
        };

        if (address.address === null) {
            state.shippingInfo = {
                country: '',
                city: '',
                address: '',
                postcode: '',
            };
        }

        set(state);
        return state;
    },
    updateUserProfile: async (userId, profileState, signal) => {
        await updateUserInformation(userId, profileState, signal);
        set(() => ({
            personalInfo: profileState.personalInfo,
            shippingInfo: profileState.shippingInfo,
        }));
    },
});

export default userSlice;
