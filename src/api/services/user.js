import { setUserInStore } from "../../zustand/authExternal";
import * as methods from "../requester"
import { setToBrowserStorage } from "./storage";

const endpoints = {
    register: '/user/sign-up',
    login: '/user/sign-in'
}

export const sendUserRegistration = async (userData) => {
    const user = await methods.post(endpoints.register, userData);
    syncUserState(user);
    return null;
}

export const sendUserLogin = async (userData) => {
    const user = await methods.post(endpoints.login, userData);

    syncUserState(user);
    return null;
}

function syncUserState(user) {

    if (user) {
        const { payload } = user;
        setUserInStore(payload);
        setToBrowserStorage('user', payload);
    }

    return null;
}