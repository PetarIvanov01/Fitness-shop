import { create } from "zustand";
import { devtools } from "zustand/middleware";

import userSlice from "./userStore";
import catalogSlice from "./catalogStore";
import cartStore from "./cartStore";

const store = devtools((set) => ({
    ...userSlice(set),
    ...catalogSlice(set),
    ...cartStore(set)
}));

const useStore = create(store);
export default useStore;