import * as methods from '../requester';
import {
    clearUserInStore,
    setUserInStore,
} from '../../zustand/user/authExternal';
import { removeFromBrowserStorage, setToBrowserStorage } from './storage';

const endpoints = {
    register: '/users/sign-up',
    login: '/users/sign-in',
    logout: '/users/logout',
};

export const sendUserRegistration = async (userData) => {
    const user = await methods.post(endpoints.register, userData);
    syncUserState(user);
    return null;
};

export const sendUserLogin = async (userData) => {
    const user = await methods.post(endpoints.login, userData);

    syncUserState(user);
    return null;
};

export const sendUserLogout = async () => {
    await methods.post(endpoints.logout);
    clearUserInStore();
    return removeFromBrowserStorage('user');
};

export function syncUserState(user) {
    if (user) {
        const { payload } = user;
        const storedInfo = {
            id: payload.id,
            token: payload.token,
        };
        setUserInStore(storedInfo);
        setToBrowserStorage('user', storedInfo);
    }

    return null;
}
