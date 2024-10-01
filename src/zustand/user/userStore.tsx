import { StateCreator } from 'zustand';
import { UserSliceInter } from '../interfaces';

import { getFromBrowserStorage } from '../../api/services/storage';

const userSlice: StateCreator<UserSliceInter> = () => ({
    user: getFromBrowserStorage('user'),
});

export default userSlice;
