import * as methods from '../requester';

const endpoints = {
    getByCategory: (category: string) => `/catalog?${category}`,
    getAll: '/catalog',
    getCart: '/cart',
    getById: (id: string) => `/catalog/${id}`,
};

export const getCatalog = async (queryString: string, signal: AbortSignal) => {
    if (queryString) {
        return await methods.get(
            endpoints.getByCategory(queryString),
            undefined,
            signal
        );
    }
    return await methods.get(endpoints.getAll, undefined, signal);
};

export const getCart = async (data = null, signal: AbortSignal) => {
    return await methods.post(endpoints.getCart, data, signal);
};

export const getProduct = async (productId: string, signal: AbortSignal) => {
    return await methods.get(endpoints.getById(productId), undefined, signal);
};
