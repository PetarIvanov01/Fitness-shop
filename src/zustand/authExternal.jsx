import useStore from './store';

export const setUserInStore = (userData) =>
    useStore.setState({ user: userData });
