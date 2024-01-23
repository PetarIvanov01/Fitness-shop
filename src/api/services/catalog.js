import * as methods from "../requester"

const endpoints = {
    getByCategory: (category) => `/catalog?category=${category}`,
    getAll: '/catalog'
}

export const getCatalog = async (category, signal) => {
    if (category) {
        return await methods.get(endpoints.getByCategory(category), signal);
    }
    return await methods.get(endpoints.getAll, signal);
};
