export interface QueryObjectType {
    category?: string;
    page?: number;
    perPage?: number;
    from?: number;
    to?: number;
    sort_by?: string;
}

export interface ReturnedValuesTypes {
    queryObj: QueryObjectType;
    handleQueryChange: (queryObj: QueryObjectType) => void;
    clearQueries: () => void;
}
