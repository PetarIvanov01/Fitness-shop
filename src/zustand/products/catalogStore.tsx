import { StateCreator } from 'zustand';
import { getCatalog } from '../../api/services/catalog';
import { CatalogSliceInter } from '../interfaces';

const catalogSlice: StateCreator<CatalogSliceInter> = (set) => ({
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
