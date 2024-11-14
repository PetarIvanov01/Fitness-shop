import { defer, Params } from 'react-router-dom';
import { preload } from 'swr';

import { getUserInformation } from '../../api/services/userService/profile';
import { getAddress } from '../../api/services/userService/address';
import { getPartialOrders } from '../../api/services/userService/orders';

export const profileLoader = async ({
    params,
}: {
    params: Params<'type' | 'userId'>;
}) => {
    const signal = new AbortController().signal;

    const userId = params.userId!;
    const type = params.type!;
    const cacheKey = `${type}/${userId}`;

    if (type === 'info') {
        return preload(cacheKey, () =>
            defer({ data: getUserInformation(userId, signal) })
        );
    } else if (type === 'address') {
        return preload(cacheKey, () =>
            defer({
                data: getAddress(userId, null, signal),
            })
        );
    } else {
        return preload(cacheKey, () =>
            defer({
                data: getPartialOrders(params.userId!, signal),
            })
        );
    }
};
