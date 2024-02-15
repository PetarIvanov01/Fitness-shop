import { getCatalog } from '../api/services/catalog';

const catalogSlice = (set) => ({
    items: [],
    isLoading: true,
    fetch: async (querieString, signal) => {
        try {
            const data = await getCatalog(querieString, signal);
            set({ items: data.values, isLoading: false });
        } catch (error) {
            // Todo implement error handling
            // console.log(error);
            // throw error;
        }
    },
});

export default catalogSlice;
