type GetCartDataType = (signal: AbortSignal) => Promise<ProductInCart[]>;
type RemoveCartItemType = (cartItemId: string) => void;
type ClearCartItemType = (productId?: string) => void;
type AddCartItemIntoStoreType = (item: any) => any;

export interface ProductInCart {
    product_id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
    type: 'cardio' | 'machines' | 'free-weights';
}

export interface CartSliceInter {
    cart: ProductInCart[];
    length: number;
    fetchCartData: GetCartDataType;
    removeCartItem: RemoveCartItemType;
    clearCartItem: ClearCartItemType;
    addCartItemIntoStore: AddCartItemIntoStoreType;
}
