import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import userSlice from './user/userStore';
import catalogSlice from './products/catalogStore';
import cartStore from './products/cartStore';
import productSlice from './products/productStore';

const store = devtools((...a) => ({
    ...userSlice(...a),
    ...catalogSlice(...a),
    ...cartStore(...a),
    ...productSlice(...a),
}));

const useStore = create(store);
export default useStore;
