import { LoginParamsType, RegisterParamsType } from '../../types/services/auth';

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

export const sendUserRegistration = async (userData: RegisterParamsType) => {
    const successResponse = await methods.post(endpoints.register, userData);
    syncUserState(successResponse);
    return null;
};

export const sendUserLogin = async (userData: LoginParamsType) => {
    const successResponse = await methods.post(endpoints.login, userData);

    syncUserState(successResponse);
    return null;
};

export const sendUserLogout = async () => {
    await methods.post(endpoints.logout, null);
    clearUserInStore();
    return removeFromBrowserStorage('user');
};

export function syncUserState(response?: {
    payload: {
        id: string;
        token: string;
    };
}) {
    if (response) {
        const { payload } = response;
        const storedInfo = {
            id: payload.id,
            token: payload.token,
        };
        setUserInStore(storedInfo);
        setToBrowserStorage('user', storedInfo);
    }

    return null;
}
