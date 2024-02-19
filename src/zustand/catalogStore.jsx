import { getCatalog } from '../api/services/catalog';

const catalogSlice = (set) => ({
    itemsLngInDb: 0,
    items: [],
    isLoading: true,
    fetch: async (querieString, signal) => {
        try {
            const data = await getCatalog(querieString, signal);
            set({
                items: data.result,
                isLoading: false,
                itemsLngInDb: data.itemsLng,
            });
        } catch (error) {
            // Todo implement error handling
            // console.log(error);
            // throw error;
        }
    },
});

export default catalogSlice;
