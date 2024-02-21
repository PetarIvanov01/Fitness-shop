import { getFromBrowserStorage } from '../api/services/storage';

const userSlice = () => ({
    user: getFromBrowserStorage('user'),
});

export default userSlice;
