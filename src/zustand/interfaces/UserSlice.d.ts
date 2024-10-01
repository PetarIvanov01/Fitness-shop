type User = {
    id: string;
    token: string;
} | null;

export type AddressInfoReturnedType = {
    address: string;
    address_id: number;
    city: string;
    country: string;
    postcode: number;
    user_id: string;
};

export type PersonalInfoReturnedType = {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
};

export interface UserSliceInter {
    user: User;
}
