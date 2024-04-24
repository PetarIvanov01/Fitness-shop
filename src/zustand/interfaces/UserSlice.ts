export interface UserSliceInter {
    user: {} | null;
    personalInfo: {};
    shippingInfo: {};
    otherShippingAddresses: {};
    fetchProfile: (userId: string, signal: AbortSignal) => Promise<any>;
    fetchAddress: (
        userId: string,
        signal: AbortSignal,
        addressId: string
    ) => Promise<any>;
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
    fetchBillingData: (userId: string, signal: AbortSignal) => Promise<{}>;
}
