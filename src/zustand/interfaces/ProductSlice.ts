type getProductType = (productId: string, signal: AbortSignal) => Promise<any>;

export interface ProductSliceInter {
    product: {};
    fetchProduct: getProductType;
}
