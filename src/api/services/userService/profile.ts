import * as methods from '../../requester';

const endpoints = {
    getUser: (userId: string) => `/users/${userId}`,
    updateUser: (userId: string) => `/users/${userId}`,
};
export const getUserInformation = async (
    userId: string,
    signal: AbortSignal
) => {
    return await methods.get(endpoints.getUser(userId), null, signal);
};

export const updateUserInformation = async (
    userId: string,
    data: any,
    signal: AbortSignal
) => {
    return await methods.put(endpoints.updateUser(userId), data, signal);
};
