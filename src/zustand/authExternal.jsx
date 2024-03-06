import useStore from './store';

export const setUserInStore = (userData) =>
    useStore.setState({ user: userData });

export const clearUserInStore = () =>
    useStore.setState({
        user: {},
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
    });
