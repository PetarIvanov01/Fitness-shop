type GetCartDataType = (signal: AbortSignal) => Promise<any>;
type RemoveCartItemType = (cartItemId: string) => any;
type ClearCartItemType = (productId: string | undefined) => any;

// TODO create proper cart and item object type
type AddCartItemIntoStoreType = (item: any) => any;

export interface CartSliceInter {
    cart: any[];
    shouldFetchCart: () => boolean;
    length: number;
    fetchCartData: GetCartDataType;
    removeCartItem: RemoveCartItemType;
    clearCartItem: ClearCartItemType;
    addCartItemIntoStore: AddCartItemIntoStoreType;
}
