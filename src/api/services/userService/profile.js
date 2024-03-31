import * as methods from '../../requester';

const endpoints = {
    getUser: (userId) => `/users/${userId}`,
    updateUser: (userId) => `/users/${userId}`,
};
export const getUserInformation = async (userId, signal) => {
    return await methods.get(endpoints.getUser(userId), null, signal);
};

export const updateUserInformation = async (userId, data, signal) => {
    return await methods.put(endpoints.updateUser(userId), data, signal);
};
