export interface CatalogSliceInter {
    itemsLngInDb: number;
    callCatalogSetStore: (
        querieString: string,
        signal: AbortSignal
    ) => Promise<any>;
}
