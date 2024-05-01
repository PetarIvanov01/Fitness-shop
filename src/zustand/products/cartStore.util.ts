import {
    getFromBrowserStorage,
    setToBrowserStorage,
} from '../../api/services/storage';

const STORAGE_NAME = 'cart';
const NEW_CART = { cart: [], length: 0 };

// TODO add interfaces and types for storageCart
function removeCartFromWebStorage(cartItemId: string) {
    const storageCart = getFromBrowserStorage(STORAGE_NAME);

    const cartItems = storageCart.cartItems;

    storageCart.length--;
    cartItems[cartItemId]--;

    if (cartItems[cartItemId] === 0) {
        delete cartItems[cartItemId];
    }

    setToBrowserStorage(STORAGE_NAME, storageCart);
    return storageCart;
}

function clearCartWebStorage(productId: string) {
    const storageCart = getFromBrowserStorage(STORAGE_NAME);

    if (storageCart.cartItems[productId]) {
        storageCart.length -= storageCart.cartItems[productId];
        delete storageCart.cartItems[productId];
    }

    setToBrowserStorage(STORAGE_NAME, storageCart);
}

function addCartToWebStorage(cartItemId: string) {
    const storageCart = getFromBrowserStorage(STORAGE_NAME);

    if (storageCart.length === 0) {
        setToBrowserStorage(STORAGE_NAME, {
            cartItems: { [cartItemId]: 1 },
            length: 1,
        });
        return;
    }

    if (storageCart.cartItems[cartItemId]) {
        storageCart.cartItems[cartItemId]++;
    } else {
        storageCart.cartItems[cartItemId] = 1;
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
