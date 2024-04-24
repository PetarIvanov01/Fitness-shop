import { StateCreator } from 'zustand';
import { getProduct } from '../../api/services/catalog';
import { ProductSliceInter } from '../interfaces';

// TODO: Add proper types for the product object and what fetchProduct fnc returnes
const productSlice: StateCreator<ProductSliceInter> = (set) => ({
    product: {},
    fetchProduct: async (productId, signal) => {
        const data = await getProduct(productId, signal);

        set({ product: data.result });
        return data.result;
    },
});

export default productSlice;
