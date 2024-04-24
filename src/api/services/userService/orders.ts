import * as methods from '../../requester';

const endpoints = {
    getOne: (userId, orderId) => `/users/${userId}/orders?orderId=${orderId}`,
    getAll: (userId) => `/users/${userId}/orders`,
    create: (userId) => `/users/${userId}/orders`,
};
export const getPartialOrders = async (userId, signal) => {
    const { payload } = await methods.get(
        endpoints.getAll(userId),
        null,
        signal
    );
    return payload;
};

export const getOneFullOrderInfo = async (userId, orderId, signal) => {
    return await methods.get(endpoints.getOne(userId, orderId), null, signal);
};

export const createOrder = async (userId, data, signal) => {
    return await methods.post(endpoints.create(userId), data, signal);
};
