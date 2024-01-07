const storage = localStorage;

export const getFromBrowserStorage = (key) => {
    if (key) {
        const item = storage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
    }
    return null;
}

export const setToBrowserStorage = (key, value) => {
    if (key && value) {
        const { payload } = value;
        storage.setItem(key, JSON.stringify(payload));
    }
    return null;
}

export const removeFromBrowserStorage = (key) => {
    if (key) {
        storage.removeItem(key);
    }
    return null;
}