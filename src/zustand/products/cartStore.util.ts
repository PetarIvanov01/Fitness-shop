import {
    getFromBrowserStorage,
    setToBrowserStorage,
} from '../../api/services/storage';

export interface ClientCartStorage {
    cart: Record<string, number>;
    length: number;
}

const STORAGE_NAME = 'cart';
const NEW_CART = {
    cart: [],
    length: 0,
};

// TODO add interfaces and types for storageCart
function removeCartFromWebStorage(cartItemId: string) {
    const storageCart = getFromBrowserStorage(STORAGE_NAME);

    const cart = storageCart.cart;

    storageCart.length--;
    cart[cartItemId]--;

    if (cart[cartItemId] === 0) {
        delete cart[cartItemId];
    }

    setToBrowserStorage(STORAGE_NAME, storageCart);
    return storageCart;
}

function clearCartWebStorage(productId: string) {
    const storageCart = getFromBrowserStorage(STORAGE_NAME);

    if (storageCart.cart[productId]) {
        storageCart.length -= storageCart.cart[productId];
        delete storageCart.cart[productId];
    }

    setToBrowserStorage(STORAGE_NAME, storageCart);
}

function addCartToWebStorage(cartItemId: string) {
    const storageCart = getFromBrowserStorage(STORAGE_NAME);

    if (storageCart.length === 0) {
        setToBrowserStorage(STORAGE_NAME, {
            cart: { [cartItemId]: 1 },
            length: 1,
        });
        return;
    }

    if (storageCart.cart[cartItemId]) {
        storageCart.cart[cartItemId]++;
    } else {
        storageCart.cart[cartItemId] = 1;
    }

    storageCart.length++;
    setToBrowserStorage(STORAGE_NAME, storageCart);
}

export {
    STORAGE_NAME,
    NEW_CART,
    removeCartFromWebStorage,
    clearCartWebStorage,
    addCartToWebStorage,
};
