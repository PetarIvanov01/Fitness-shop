import { StateCreator } from 'zustand';
import { CartSliceInter } from '../interfaces';

import { getCart } from '../../api/services/catalog';

import {
    ClientCartStorage,
    NEW_CART,
    STORAGE_NAME,
    addCartToWebStorage,
    clearCartWebStorage,
    removeCartFromWebStorage,
} from './cartStore.util';

import {
    getFromBrowserStorage,
    setToBrowserStorage,
} from '../../api/services/storage';

const cartStore: StateCreator<CartSliceInter> = (set, get) => ({
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
        const clientCartStorage = getFromBrowserStorage(
            STORAGE_NAME
        ) as ClientCartStorage | null;

        const currentCart = get().cart;

        if (!clientCartStorage) return NEW_CART;
        if (clientCartStorage.length === 0) return NEW_CART;

        const clientCart = clientCartStorage.cart;

        const needsRevalidation = currentCart.every(
            (e) => clientCart[e.product_id] === undefined
        );

        if (!needsRevalidation) {
            return currentCart;
        }

        const data = await getCart(clientCartStorage, signal);

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

            if (existingItem === undefined) {
                return { cart };
            }
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
    clearCartItem: (productId) => {
        if (!productId) {
            setToBrowserStorage(STORAGE_NAME, NEW_CART);
            set({ cart: [], length: 0 });
            return;
        }

        clearCartWebStorage(productId);

        set((state) => {
            let cart = [...state.cart];
            const existingItem = cart.find(
                (cartItem) => cartItem.product_id === productId
            );

            if (existingItem === undefined) {
                return {
                    cart,
                };
            }
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
