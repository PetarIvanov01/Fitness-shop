/* eslint-disable no-unused-vars */
import * as methods from '../../requester';

const endpoints = {
    getOne: (userId, orderId) => `/${userId}/orders?orderId=${orderId}`,
    getAll: (userId) => `/${userId}/orders`,
    create: (userId) => `/${userId}/orders`,
};
export const getPartialOrders = async (userId, signal) => {
    return await methods.get(endpoints.getAll(userId), null, signal);
};

export const getOneFullOrderInfo = async (userId, orderId, signal) => {
    return await methods.get(endpoints.getOne(userId, orderId), null, signal);
};

export const createOrder = async (userId, data, signal) => {
    return await methods.post(endpoints.create(userId), data, signal);
};