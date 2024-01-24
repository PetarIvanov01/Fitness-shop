import Cookies from "js-cookie";
import { getCart } from "../api/services/catalog";

const COOKIE_NAME = "cart-cookie";
const COOKIE_OPTIONS = { expires: 1, sameSite: 'Strict', path: '/' };

const cartStore = (set) => ({
    cart: [],
    addCartDataToCookies: (cartItemId) => {
        const currentCookieData = Cookies.get(COOKIE_NAME);

        if (currentCookieData === undefined) {
            Cookies.set(COOKIE_NAME, JSON.stringify([cartItemId]), COOKIE_OPTIONS);
            return;
        }

        const parsedCookieData = JSON.parse(currentCookieData);
        const setOfCookieData = new Set(parsedCookieData);

        if (setOfCookieData.has(cartItemId)) {
            return;
        };

        setOfCookieData.add(cartItemId);

        const stringifiedCookieData = JSON.stringify([...setOfCookieData]);
        Cookies.set("cart-cookie", stringifiedCookieData, COOKIE_OPTIONS);
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
        Cookies.remove(COOKIE_NAME);
        set({ cart: [] });
    }
})

export default cartStore;
