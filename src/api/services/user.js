import { clearUserInStore, setUserInStore } from '../../zustand/authExternal';
import * as methods from '../requester';
import { removeFromBrowserStorage, setToBrowserStorage } from './storage';
/*eslint no-useless-catch: "off"*/
const endpoints = {
    getUser: (userId) => `/user/${userId}`,
    updateUser: (userId) => `/user/${userId}`,
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

export const getUserInformation = async (userId, signal) => {
    return await methods.get(endpoints.getUser(userId), null, signal);
};

export const updateUserInformation = async (userId, data, signal) => {
    return await methods.put(endpoints.updateUser(userId), data, signal);
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

function syncUserState(user) {
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
