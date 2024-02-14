import { setUserInStore } from '../../zustand/authExternal';
import * as methods from '../requester';
import { removeFromBrowserStorage, setToBrowserStorage } from './storage';

const endpoints = {
    register: '/user/sign-up',
    login: '/user/sign-in',
    logout: '/user/logout',
    refresh: '/user/refreshtoken',
};
export const refreshToken = async () => {
    const res = await methods.post(endpoints.refresh);
    console.log(res);
    return null;
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

export async function handleRefreshingToken(HOST) {
    try {
        const endpoint = HOST + endpoints.refresh;
        const response = await fetch(endpoint, {
            method: 'POST',
            credentials: 'include',
        });
        if (response.status === 401) {
            setUserInStore(null);
            removeFromBrowserStorage('user');
            return;
        }
        const data = await response.json();

        syncUserState(data);
    } catch (error) {
        throw error;
    }
}
