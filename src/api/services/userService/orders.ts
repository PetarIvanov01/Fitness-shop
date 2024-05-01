import * as methods from '../../requester';

const endpoints = {
    getOne: (userId: string, orderId: string) =>
        `/users/${userId}/orders?orderId=${orderId}`,
    getAll: (userId: string) => `/users/${userId}/orders`,
    create: (userId: string) => `/users/${userId}/orders`,
};

type PartialOrderType = {
    order_date: Date;
    order_desc: string | null;
    order_id: string;
    status_id: number;
    total_price: string;
    user_id: string;
}[];

type OrderedProducts = {}[];

interface FullOrderType {
    orderInfo: {
        orderId: string;
        createdAt: Date;
        status_name: string;
        totalPrice: string;
        userAddress: {
            country: string;
            city: string;
            address: string;
            postcode: number;
        };
        userProfile: {
            fullName: string;
            phoneNumber: string;
            userId: string;
        };
    };
    orderedProducts: OrderedProducts;
}

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
