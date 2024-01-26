import { getProduct } from '../api/services/catalog';

const productSlice = (set) => ({
    product: [],
    productLoading: true,
    fetchProduct: async (productId, signal) => {
        try {
            // const data = await getProduct(productId, signal);
            set({ items: [], isLoading: false });
        } catch (error) {
            // Todo implement error handling
            // console.log(error);
            // throw error;
        }
    },
});

export default productSlice;
