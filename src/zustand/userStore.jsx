import { getFromBrowserStorage } from '../api/services/storage';
import { getUserInformation } from '../api/services/user';

const userSlice = (set) => ({
    user: getFromBrowserStorage('user'),
    personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    },
    shippingInfo: {
        country: '',
        city: '',
        address: '',
        postcode: '',
    },
    handleOnChangePersonalInfo: handleOnChangePersonalInfo(set),
    handleOnChangeShippingInfo: handleOnChangeShippingInfo(set),
    fetchProfile: async (userId, signal) => {
        //Todo try to implement cache
        const { address, ...rest } = await getUserInformation(userId, signal);

        set({
            shippingInfo: { ...address },
            personalInfo: { ...rest },
        });
    },
});

export default userSlice;

const handleOnChangePersonalInfo = (set) => (e) => {
    e.preventDefault();
    set((state) => ({
        personalInfo: {
            ...state.personalInfo,
            [e.target.name]: e.target.value,
        },
    }));
};

const handleOnChangeShippingInfo = (set) => (e) => {
    e.preventDefault();
    set((state) => ({
        shippingInfo: {
            ...state.shippingInfo,
            [e.target.name]: e.target.value,
        },
    }));
};
