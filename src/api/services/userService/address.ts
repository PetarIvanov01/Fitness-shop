import { GetAddressType } from '../../../types/services/profile';

import * as methods from '../../requester';

const endpoints = {
    getOne: (userId: string, addressId: string) =>
        `/users/${userId}/addresses?addressId=${addressId}`,
    getAll: (userId: string) => `/users/${userId}/addresses`,
    create: (userId: string) => `/users/${userId}/addresses`,
    update: (userId: string, addressId: string) =>
        `/users/${userId}/addresses?addressId=${addressId}`,
};

export const getAddress = async <T extends string | null>(
    userId: string,
    addressId: T,
    signal: AbortSignal
): Promise<GetAddressType<T>> => {
    if (addressId !== null) {
        let res = await methods.get(
            endpoints.getOne(userId, addressId),
            null,
            signal
        );
        return res.payload;
    }

    let res = await methods.get(endpoints.getAll(userId), null, signal);
    return res.payload[0];
};

export const createAddress = async (
    userId: string,
    data: {
        shippingInfo?: {
            city?: string;
            address?: string;
            country?: string;
            postcode?: number;
        };
    },
    signal: AbortSignal
) => {
    return methods.post(endpoints.create(userId), data, signal);
};

export const updateAddress = async (
    userId: string,
    addressId: string,
    data: {
        city?: string;
        address?: string;
        country?: string;
        postcode?: number;
    },
    signal: AbortSignal
) => {
    return methods.put(
        endpoints.update(userId, addressId),
        { shippingInfo: data },
        signal
    );
};
