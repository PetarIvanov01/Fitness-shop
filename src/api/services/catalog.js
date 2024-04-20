import * as methods from '../requester';

const endpoints = {
    getByCategory: (category) => `/catalog?${category}`,
    getAll: '/catalog',
    getCart: '/cart',
    getById: (id) => `/catalog/${id}`,
};

export const getCatalog = async (queryString, signal) => {
    if (queryString) {
        return await methods.get(
            endpoints.getByCategory(queryString),
            undefined,
            signal
        );
    }
    return await methods.get(endpoints.getAll, undefined, signal);
};

export const getCart = async (data = null, signal) => {
    return await methods.post(endpoints.getCart, data, signal);
};

export const getProduct = async (productId, signal) => {
    return await methods.get(endpoints.getById(productId), undefined, signal);
};
