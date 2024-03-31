import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import userSlice from './user/userStore';
import catalogSlice from './products/catalogStore';
import cartStore from './products/cartStore';
import productSlice from './products/productStore';

const store = devtools((set) => ({
    ...userSlice(set),
    ...catalogSlice(set),
    ...cartStore(set),
    ...productSlice(set),
}));

const useStore = create(store);
export default useStore;
