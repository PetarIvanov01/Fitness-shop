import * as methods from '../requester';

import { PersonalInfoReturnedType } from '../../zustand/interfaces/UserSlice';

const endpoints = {
    getUser: (userId: string) => `/users/${userId}`,
    updateUser: (userId: string) => `/users/${userId}`,
};

export const getUserInformation = async (
    userId: string,
    signal: AbortSignal
): Promise<PersonalInfoReturnedType> => {
    const res = await methods.get(endpoints.getUser(userId), null, signal);
    return res;
};

export const updateUserInformation = async (
    userId: string,
    data: any,
    signal: AbortSignal
) => {
    return await methods.put(endpoints.updateUser(userId), data, signal);
};
