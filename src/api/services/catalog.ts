import { CatalogProduct, OneProduct } from '../../types/services/catalog';
import { ClientCartStorage } from '../../zustand/products/cartStore.util';

import * as methods from '../requester';

const endpoints = {
    getByCategory: (category: string) => `/catalog?${category}`,
    getAll: '/catalog',
    getCart: '/cart',
    getById: (id: string) => `/product/${id}`,
};

export const getCatalog = async (
    queryString: string,
    signal: AbortSignal
): Promise<{
    itemsLng: number;
    result: CatalogProduct[];
}> => {
    if (queryString) {
        return await methods.get(
            endpoints.getByCategory(queryString),
            undefined,
            signal
        );
    }
    return await methods.get(endpoints.getAll, undefined, signal);
};

export const getCart = async (data: ClientCartStorage, signal: AbortSignal) => {
    return await methods.post(
        endpoints.getCart,
        {
            cartItems: data.cart,
        },
        signal
    );
};

export const getProduct = async (
    productId: string,
    signal: AbortSignal
): Promise<{ result: OneProduct }> => {
    return await methods.get(endpoints.getById(productId), undefined, signal);
};
