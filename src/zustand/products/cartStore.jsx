import { getCart } from '../../api/services/catalog';

import {
    getFromBrowserStorage,
    setToBrowserStorage,
} from '../../api/services/storage';

const STORAGE_NAME = 'cart';
const NEW_CART = { cart: [], length: 0 };

const cartStore = (set) => ({
    cart: [],
    length: (() => {
        try {
            const storageCart = getFromBrowserStorage(STORAGE_NAME);
            if (storageCart === null) {
                setToBrowserStorage(STORAGE_NAME, NEW_CART);
                return 0;
            }
            return storageCart.length ? storageCart.length : 0;
        } catch (error) {
            console.error('Error while calculating length:', error);
            return 0;
        }
    })(),
    fetchCartData: async (signal) => {
        const storageCart = getFromBrowserStorage(STORAGE_NAME);
        if (storageCart.length === 0) return NEW_CART;

        const data = await getCart(storageCart, signal);

        set({ cart: data.cart });
        return data.cart;
    },
    removeCartItem: (cartItemId) => {
        const storageCart = removeCartFromWebStorage(cartItemId);
        set((state) => {
            let cart = [...state.cart];
            const existingItem = cart.find(
                (cartItem) => cartItem.product_id === cartItemId
            );

            existingItem.quantity--;

            if (existingItem.quantity === 0) {
                cart = cart.filter((e) => e.product_id !== cartItemId);
            }

            return {
                cart,
                length: storageCart.length,
            };
        });
    },
    clearCartItem: (productId = undefined) => {
        if (productId === undefined) {
            setToBrowserStorage(STORAGE_NAME, NEW_CART);
            set(NEW_CART);
            return;
        }

        clearCartWebStorage(productId);

        set((state) => {
            let cart = [...state.cart];
            const existingItem = cart.find(
                (cartItem) => cartItem.product_id === productId
            );

            let length = state.length - existingItem.quantity;
            cart = cart.filter((p) => p.product_id !== productId);

            return {
                cart,
                length,
            };
        });
    },
    addCartItemIntoStore: (item) => {
        addCartToWebStorage(item.product_id);

        set((state) => {
            const { cart } = state;
            const existingItem = cart.find(
                (cartItem) => cartItem.product_id === item.product_id
            );
            let length = state.length + 1;

            if (existingItem) {
                existingItem.quantity++;
                return { cart: [...cart], length };
            }

            return {
                cart: [...cart, { ...item, quantity: 1 }],
                length,
            };
        });
    },
});

export default cartStore;

function removeCartFromWebStorage(cartItemId) {
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

function clearCartWebStorage(productId) {
    const storageCart = getFromBrowserStorage(STORAGE_NAME);

    if (storageCart.cartItems[productId]) {
        storageCart.length -= storageCart.cartItems[productId];
        delete storageCart.cartItems[productId];
    }

    setToBrowserStorage(STORAGE_NAME, storageCart);
}

function addCartToWebStorage(cartItemId) {
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
