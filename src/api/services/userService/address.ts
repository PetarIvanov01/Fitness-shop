import * as methods from '../../requester';

const endpoints = {
    getOne: (userId, addressId) =>
        `/users/${userId}/addresses?addressId=${addressId}`,
    getAll: (userId) => `/users/${userId}/addresses`,
    create: (userId) => `/users/${userId}/addresses`,
    update: (userId, addressId) =>
        `/users/${userId}/addresses?addressId=${addressId}`,
};

export const getAddress = async (userId, addressId, signal) => {
    if (addressId) {
        return methods.get(endpoints.getOne(userId, addressId), null, signal);
    }
    return methods.get(endpoints.getAll(userId), null, signal);
};

export const createAddress = async (userId, data, signal) => {
    return methods.post(endpoints.create(userId), data, signal);
};

export const updateAddress = async (userId, addressId, data, signal) => {
    return methods.put(endpoints.update(userId, addressId), data, signal);
};
