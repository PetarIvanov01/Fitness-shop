const storage = localStorage;

export const getFromBrowserStorage = (key: string) => {
    if (key) {
        const item = storage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
    }
    return null;
};

export const setToBrowserStorage = (key: string, value: any) => {
    if (key && value) {
        storage.setItem(key, JSON.stringify(value));
    }
    return null;
};

export const removeFromBrowserStorage = (key: string) => {
    if (key) {
        storage.removeItem(key);
    }
    return null;
};
