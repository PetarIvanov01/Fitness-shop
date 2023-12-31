import * as methods from "../requester"

const endpoints = {
    getByCategory: (category) => `/catalog?category=${category}`,
    getAll: '/catalog'
}

export const getCatalog = async (category) => {
    if (category) {
        return await methods.get(endpoints.getByCategory(category));
    }
    return await methods.get(endpoints.getAll);
};
