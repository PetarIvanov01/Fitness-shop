import * as methods from '../requester';

const endpoints = {
    getByCategory: (category) => `/catalog?category=${category}`,
    getAll: '/catalog',
    getCart: '/cart',
};

export const getCatalog = async (category, signal) => {
    if (category) {
        return await methods.get(
            endpoints.getByCategory(category),
            undefined,
            signal
        );
    }
    return await methods.get(endpoints.getAll, undefined, signal);
};

export const getCart = async (ids, signal) => {
    return await methods.post(endpoints.getCart, ids, signal);
};

export const getProduct = async (productId, signal) => {
    return [];
};
