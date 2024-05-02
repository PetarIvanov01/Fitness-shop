export interface CatalogProduct {
    product_id: string;
    category_id: string;
    title: string;
    price: string;
    description: string;
    image: string;
    type: string;
    quantity: number;
}

export type OneProduct = Omit<CatalogProduct, 'quantity' | 'type'>;
export type CatalogProductArr = CatalogProduct[];
