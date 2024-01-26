import { setUserInStore } from '../../zustand/authExternal';
import * as methods from '../requester';
import { removeFromBrowserStorage, setToBrowserStorage } from './storage';

const endpoints = {
    register: '/user/sign-up',
    login: '/user/sign-in',
    logout: '/user/logout',
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
    /* 
    TODO: send logout req when its ready on the server 
     await methods.get(endpoints.logout);
    */
    setUserInStore(null);
    return removeFromBrowserStorage('user');
};

function syncUserState(user) {
    if (user) {
        const { payload } = user;
        setUserInStore(payload);
        setToBrowserStorage('user', payload);
    }

    return null;
}
