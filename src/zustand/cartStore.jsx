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

        try {
            const data = await getCart({ ids: currentCookieData }, signal);
            set({ cart: data });
        } catch (error) {
            // console.log(error);
            // throw error;
        }
    },
    clearCartData: () => {
        Cookies.remove(COOKIE_NAME, COOKIE_OPTIONS);
        set({ cart: [], length: 0 });
    },
});

export default cartStore;
