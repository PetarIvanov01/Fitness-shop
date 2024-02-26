import Cookies from 'js-cookie';
import { getCart } from '../api/services/catalog';

const COOKIE_NAME = 'cart-cookie';
const COOKIE_OPTIONS = { expires: 1, sameSite: 'Strict', path: '/' };

const cartStore = (set) => ({
    cart: [],
    length: (() => {
        try {
            const items = Cookies.get(COOKIE_NAME);
            if (items === undefined) {
                return 0;
            }
            const parsedCookieData = JSON.parse(items);
            return parsedCookieData.length ? parsedCookieData.length : 0;
        } catch (error) {
            console.error('Error while calculating length:', error);
            return 0;
        }
    })(),
    removeCartItem: (cartItemId) => {
        const currentCookieItems = Cookies.get(COOKIE_NAME);
        const parsedCookie = JSON.parse(currentCookieItems);

        const items = parsedCookie.cartItems;

        parsedCookie.length--;
        items[cartItemId]--;

        if (items[cartItemId] === 0) {
            delete items[cartItemId];
        }

        const stringifiedCookieData = JSON.stringify(parsedCookie);
        Cookies.set('cart-cookie', stringifiedCookieData, COOKIE_OPTIONS);

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
                ...state,
                cart,
                length: parsedCookie.length,
            };
        });
    },
    fetchCartData: async (signal) => {
        const currentCookieData = Cookies.get(COOKIE_NAME);

        if (currentCookieData === undefined) return;

        const data = await getCart(null, signal);

        set({ cart: data });
    },
    clearCartItem: (productId = undefined) => {
        if (productId === undefined) {
            Cookies.remove(COOKIE_NAME, COOKIE_OPTIONS);
            set({ cart: [], length: 0 });
            return;
        }

        const currentCookieItems = Cookies.get(COOKIE_NAME);
        const parsedCookie = JSON.parse(currentCookieItems);

        if (parsedCookie.cartItems[productId]) {
            parsedCookie.length -= parsedCookie.cartItems[productId];
            delete parsedCookie.cartItems[productId];
        }

        const stringifiedCookieData = JSON.stringify(parsedCookie);
        Cookies.set('cart-cookie', stringifiedCookieData, COOKIE_OPTIONS);

        set((state) => {
            const { cart } = state;
            const existingItem = cart.find(
                (cartItem) => cartItem.product_id === productId
            );

            let length = state.length - existingItem.quantity;

            const newCart = cart.filter((p) => p.product_id !== productId);
            return {
                cart: newCart,
                length,
            };
        });
    },
    addCartItemIntoStore: (item) => {
        addCartItemsToCookies(item.product_id);

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

function addCartItemsToCookies(cartItemId) {
    const currentCookieData = Cookies.get(COOKIE_NAME);

    if (currentCookieData === undefined) {
        Cookies.set(
            COOKIE_NAME,
            JSON.stringify({ cartItems: { [cartItemId]: 1 }, length: 1 }),
            COOKIE_OPTIONS
        );
        return;
    }

    const parsedCookieData = JSON.parse(currentCookieData);

    if (parsedCookieData.cartItems[cartItemId]) {
        parsedCookieData.cartItems[cartItemId]++;
    } else {
        parsedCookieData.cartItems[cartItemId] = 1;
    }

    parsedCookieData.length++;
    const stringifiedCookieData = JSON.stringify(parsedCookieData);
    Cookies.set('cart-cookie', stringifiedCookieData, COOKIE_OPTIONS);
}
