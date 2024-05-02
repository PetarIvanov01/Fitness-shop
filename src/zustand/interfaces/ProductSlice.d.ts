import { OneProduct } from '../../types/services/catalog';

type getProductType = (
    productId: string,
    signal: AbortSignal
) => Promise<OneProduct>;

export interface ProductSliceInter {
    product: {};
    fetchProduct: getProductType;
}
