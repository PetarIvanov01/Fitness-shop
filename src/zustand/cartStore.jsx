import Cookies from "js-cookie";

const COOKIE_NAME = "cart-cookie";
const COOKIE_OPTIONS = { expires: 1, sameSite: 'Strict', path: '/' };

const cartStore = (set) => ({
    cart: (() => {
        const currentCookieData = Cookies.get(COOKIE_NAME);
        if (currentCookieData !== undefined) return JSON.parse(currentCookieData);
    })(),

    addCartDataToCookies: (cartItemId) => {
        const currentCookieData = Cookies.get(COOKIE_NAME);

        if (currentCookieData === undefined) {
            Cookies.set(COOKIE_NAME, JSON.stringify([cartItemId]), COOKIE_OPTIONS);
            set({ cart: new Set([cartItemId]) });
            return;
        }

        const parsedCookieData = JSON.parse(currentCookieData);
        const setOfCookieData = new Set(parsedCookieData);

        if (setOfCookieData.has(cartItemId)) {
            set({ cart: setOfCookieData })
            return;
        };

        setOfCookieData.add(cartItemId);

        const stringifiedCookieData = JSON.stringify([...setOfCookieData]);
        Cookies.set("cart-cookie", stringifiedCookieData, COOKIE_OPTIONS);
        set({ cart: setOfCookieData });
    }
})

export default cartStore;
