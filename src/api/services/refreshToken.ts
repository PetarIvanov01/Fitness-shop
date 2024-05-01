import { setUserInStore } from '../../zustand/user/authExternal';
import { syncUserState } from './auth';
import { removeFromBrowserStorage } from './storage';

const path = '/users/refreshtoken';

export async function handleRefreshingToken(HOST: string) {
    const endpoint = HOST + path;
    const response = await fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
    });
    if (response.status === 401) {
        setUserInStore(null);
        removeFromBrowserStorage('user');
        return;
    }
    const data = await response.json();

    syncUserState(data);
}
