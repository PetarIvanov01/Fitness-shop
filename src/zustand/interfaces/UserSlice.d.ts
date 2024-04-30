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
    personalInfo: PersonalInfoReturnedType | {};
    shippingInfo: AddressInfoReturnedType | {};
    otherShippingAddresses: AddressInfoReturnedType[];
    fetchProfile: (
        userId: string,
        signal: AbortSignal
    ) => Promise<PersonalInfoReturnedType>;
    fetchAddress: (
        userId: string,
        signal: AbortSignal,
        addressId: string | null
    ) => Promise<AddressInfoReturnedType>;
    updateUserProfile: (
        userId: string,
        profileState: {},
        signal: AbortSignal
    ) => Promise<void>;
    updateUserAddress: (
        userId: string,
        addressState: {},
        signal: AbortSignal,
        addressId: string
    ) => Promise<void>;
    fetchBillingData: (
        userId: string,
        signal: AbortSignal
    ) => Promise<{
        personalInfo: PersonalInfoReturnedType;
        shippingInfo: AddressInfoReturnedType;
    }>;
}
