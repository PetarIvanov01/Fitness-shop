import useStore from '../store';
type User = {
    id: string;
    token: string;
} | null;

export const setUserInStore = (userData: User) =>
    useStore.setState({ user: userData });

export const clearUserInStore = () =>
    useStore.setState({
        user: null,
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
