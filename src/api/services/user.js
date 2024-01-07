import * as methods from "../requester"
import { setToBrowserStorage } from "./storage";

const endpoints = {
    register: '/user/sign-up',
    login: '/user/sign-in'
}

export const sendUserRegistration = async (userData) => {
    const user = await methods.post(endpoints.register, userData);

    setToBrowserStorage('user', user);
    return null;
}

export const sendUserLogin = async (userData) => {
    const user = await methods.post(endpoints.login, userData);

    setToBrowserStorage('user', user);
    return null;
}


