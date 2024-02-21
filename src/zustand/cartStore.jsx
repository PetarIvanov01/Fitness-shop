import Cookies from 'js-cookie';
import { getCart } from '../api/services/catalog';

const COOKIE_NAME = 'cart-cookie';
const COOKIE_OPTIONS = { expires: 1, sameSite: 'Strict', path: '/' };

const cartStore = (set) => ({
    length: (() => {
        try {
            const items = Cookies.get(COOKIE_NAME);
            if (items === undefined) {
                return 0;
            }
            const parsedCookieData = JSON.parse(items);
            return Array.isArray(parsedCookieData)
                ? parsedCookieData.length
                : 0;
        } catch (error) {
            console.error('Error while calculating length:', error);
            return 0;
        }
    })(),
    cart: [],
    addCartDataToCookies: (cartItemId) => {
        const currentCookieData = Cookies.get(COOKIE_NAME);

        if (currentCookieData === undefined) {
            Cookies.set(
                COOKIE_NAME,
                JSON.stringify([cartItemId]),
                COOKIE_OPTIONS
            );
            set({ length: 1 });
            return;
        }

        const parsedCookieData = JSON.parse(currentCookieData);
        const setOfCookieData = new Set(parsedCookieData);

        if (setOfCookieData.has(cartItemId)) {
            return;
        }
        setOfCookieData.add(cartItemId);
        set({ length: setOfCookieData.size });

        const stringifiedCookieData = JSON.stringify([...setOfCookieData]);
        Cookies.set('cart-cookie', stringifiedCookieData, COOKIE_OPTIONS);
    },
    fetchCartData: async (signal) => {
        const currentCookieData = Cookies.get(COOKIE_NAME);

        if (currentCookieData === undefined) return;

        const data = await getCart({ ids: currentCookieData }, signal);
        set({ cart: data });
    },
    clearCartData: () => {
        Cookies.remove(COOKIE_NAME, COOKIE_OPTIONS);
        set({ cart: [], length: 0 });
    },
    setCartItemIntoStore: (item) => {
        set(({ cart }) => {
            const exist = cart.some((e) => e.product_id === item.product_id);
            if (exist) return { cart };

            const newCart = [...cart, item];

            return {
                cart: newCart,
            };
        });
    },
});

export default cartStore;
