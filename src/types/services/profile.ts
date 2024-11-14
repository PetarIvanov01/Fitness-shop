import { AddressInfoReturnedType } from '../../zustand/interfaces/UserSlice';

export type GetAddressType<T extends string | null> = T extends string
    ? Promise<AddressInfoReturnedType>
    : Promise<{ payload: AddressInfoReturnedType[] }>;

export type PartialOrderType = {
    order_date: Date;
    order_desc: string | null;
    order_id: string;
    status_id: number;
    total_price: string;
    user_id: string;
}[];

type OrderedProducts = {}[];

export interface FullOrderType {
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
