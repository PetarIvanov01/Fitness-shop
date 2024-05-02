import { CatalogProduct } from '../../types/services/catalog';

type FetchCatalogType = (
    querieString: string,
    signal: AbortSignal
) => Promise<CatalogProduct[]>;

export interface CatalogSliceInter {
    itemsLngInDb: number;
    callCatalogSetStore: FetchCatalogType;
}
