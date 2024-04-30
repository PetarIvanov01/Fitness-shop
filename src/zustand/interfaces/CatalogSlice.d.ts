type FetchCatalogType = (
    querieString: string,
    signal: AbortSignal
) => Promise<CatalogResultType>;

export type CatalogResultType = {
    product_id: string;
    categoriy_id: number;
    title: string;
    price: string;
    description: string;
    image: string;
    quantity: string;
    type: string;
}[];

export interface CatalogSliceInter {
    itemsLngInDb: number;
    callCatalogSetStore: FetchCatalogType;
}
