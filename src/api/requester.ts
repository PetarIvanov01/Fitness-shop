/*eslint no-useless-catch: "off"*/
import { getFromBrowserStorage } from './services/storage';
import { handleRefreshingToken } from './services/refreshToken';

const endpoint = '/api/v1';
let HOST = import.meta.env.VITE_HOST_LOCAL + endpoint;

if (import.meta.env.MODE === 'production') {
    HOST = import.meta.env.VITE_HOST_PROD + endpoint;
}
async function request(url: string, option: Options) {
    try {
        const response = await fetch(HOST + url, option);

        if (response.ok === false) {
            const error = await response.json();
            if (
                response.status === 400 &&
                error.type === 'UnauthorizedError' &&
                error.message.includes('expired')
            ) {
                await handleRefreshingToken(HOST);
                let data;
                if (option.body) {
                    data = JSON.parse(option.body);
                }
                return await request(
                    url,
                    createOptions(option.method, data, option.signal)
                );
            }
            throw error;
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

type Options = {
    method: string;
    headers: {
        Authorization?: string;
        'Content-Type'?: string;
    };
    signal: AbortSignal;
    body?: string;
    credentials: 'include';
};

function createOptions(method = 'GET', data: any, signal: AbortSignal) {
    const option: Options = {
        method,
        headers: {},
        signal,
        credentials: 'include',
    };

    const user = getFromBrowserStorage('user');

    if (user !== null) {
        option.headers['Authorization'] = user.token;
    }

    if (signal) {
        option.signal = signal;
    }
    if (data) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }
    return option;
}

export async function get(url: string, data: any, signal: AbortSignal) {
    return await request(url, createOptions('GET', data, signal));
}

export async function post(url: string, data: any, signal: AbortSignal) {
    return await request(url, createOptions('post', data, signal));
}

export async function put(url: string, data: any, signal: AbortSignal) {
    return await request(url, createOptions('PUT', data, signal));
}

export async function del(url: string, signal: AbortSignal) {
    return await request(url, createOptions('DELETE', null, signal));
}
