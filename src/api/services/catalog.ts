import * as methods from '../requester';

export interface CatalogProduct {
    product_id: string;
    category_id: string;
    title: string;
    price: string;
    description: string;
    image: string;
    type: string;
    quantity: number;
}

export type OneProduct = Omit<CatalogProduct, 'quantity' | 'type'>;

const endpoints = {
    getByCategory: (category: string) => `/catalog?${category}`,
    getAll: '/catalog',
    getCart: '/cart',
    getById: (id: string) => `/catalog/${id}`,
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

export const getCart = async (data = null, signal: AbortSignal) => {
    return await methods.post(endpoints.getCart, data, signal);
};

export const getProduct = async (
    productId: string,
    signal: AbortSignal
): Promise<{ result: OneProduct }> => {
    return await methods.get(endpoints.getById(productId), undefined, signal);
};
