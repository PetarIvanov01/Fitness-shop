export interface QueryObjectType {
    category?: string;
    page?: string;
    perPage?: string;
    from?: string;
    to?: string;
    sort_by?: string;
}

export interface ReturnedValuesTypes {
    queryObj: QueryObjectType;
    handleQueryChange: (queryObj: QueryObjectType) => void;
    clearQueries: () => void;
}
