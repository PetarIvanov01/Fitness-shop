import {
    FullOrderType,
    PartialOrderType,
} from '../../../types/services/profile';

import * as methods from '../../requester';

const endpoints = {
    getOne: (userId: string, orderId: string) =>
        `/users/${userId}/orders?orderId=${orderId}`,
    getAll: (userId: string) => `/users/${userId}/orders`,
    create: (userId: string) => `/users/${userId}/orders`,
};

export const getPartialOrders = async (
    userId: string,
    signal: AbortSignal
): Promise<PartialOrderType> => {
    const { payload } = await methods.get(
        endpoints.getAll(userId),
        null,
        signal
    );

    return payload;
};

export const getOneFullOrderInfo = async (
    userId: string,
    orderId: string,
    signal: AbortSignal
): Promise<FullOrderType> => {
    const { payload } = await methods.get(
        endpoints.getOne(userId, orderId),
        null,
        signal
    );

    return payload;
};

export const createOrder = async (
    userId: string,
    data: any,
    signal: AbortSignal
) => {
    return await methods.post(endpoints.create(userId), data, signal);
};
