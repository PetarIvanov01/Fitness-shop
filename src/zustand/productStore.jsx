import { getProduct } from '../api/services/catalog';

const productSlice = (set) => ({
    product: [],
    fetchProduct: async (productId, signal) => {
        const data = await getProduct(productId, signal);
        set({ product: data });
        return data;
    },
});

export default productSlice;
