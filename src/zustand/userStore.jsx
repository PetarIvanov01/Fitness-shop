import { getFromBrowserStorage } from '../api/services/storage';

const userSlice = (set) => ({
    user: getFromBrowserStorage('user'),
});

export default userSlice;
