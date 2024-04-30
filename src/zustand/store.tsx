import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import userSlice from './user/userStore';
import catalogSlice from './products/catalogStore';
import cartSlice from './products/cartStore';
import productSlice from './products/productStore';

import {
    CartSliceInter,
    CatalogSliceInter,
    ProductSliceInter,
    UserSliceInter,
} from './interfaces/index';

const useStore = create<
    UserSliceInter & CatalogSliceInter & CartSliceInter & ProductSliceInter
>()(
    devtools((...a) => ({
        ...userSlice(...a),
        ...catalogSlice(...a),
        ...cartSlice(...a),
        ...productSlice(...a),
    }))
);
export default useStore;
