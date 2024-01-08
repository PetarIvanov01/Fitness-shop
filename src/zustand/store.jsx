import { create } from "zustand";
import { devtools } from "zustand/middleware"
import { getFromBrowserStorage } from "../api/services/storage";

const store = devtools((set) => ({
    user: getFromBrowserStorage('user')
}));

const useStore = create(store);
export default useStore;


