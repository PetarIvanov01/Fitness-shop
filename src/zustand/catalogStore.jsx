import { getCatalog } from '../api/services/catalog';

const catalogSlice = (set) => ({
    itemsLngInDb: 0,
    items: [],
    callCatalogSetStore: async (querieString, signal) => {
        const data = await getCatalog(querieString, signal);
        set({
            items: data.result,
            itemsLngInDb: data.itemsLng,
        });
        return true;
    },
});

export default catalogSlice;
