import useStore from '../../zustand/store';

import { getAddress } from '../../api/services/userService/address';
import { getUserInformation } from '../../api/services/userService/profile';
import { defer } from 'react-router-dom';

export const checkoutLoader = async () => {
    const userId = useStore.getState().user!.id;
    const signal = new AbortController().signal;

    return defer({
        userInfo: getUserInformation(userId, signal),
        addressInfo: getAddress(userId, null, signal),
    });
};
