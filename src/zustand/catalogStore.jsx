import { getCatalog } from '../api/services/catalog';

const catalogSlice = (set) => ({
    itemsLngInDb: 0,
    callCatalogSetStore: async (querieString, signal) => {
        const data = await getCatalog(querieString, signal);
        set({
            itemsLngInDb: data.itemsLng,
        });
        return data.result;
    },
});

export default catalogSlice;
