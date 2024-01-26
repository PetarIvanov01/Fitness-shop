import { getFromBrowserStorage } from './services/storage';

const HOST = 'http://localhost:5000/api/v1';
async function request(url, option) {
    try {
        const response = await fetch(HOST + url, option);

        if (response.ok === false) {
            const error = await response.json();
            throw error;
        }
        return response.json();
    } catch (error) {
        throw error;
    }
}

function createOptions(method = 'GET', data, signal) {
    const option = {
        method,
        headers: {},
        signal,
    };

    const user = getFromBrowserStorage('user');

    if (user !== null) {
        option.headers['Authorization'] = user.token;
    }

    if (signal) {
        option.signal = signal;
    }

    if (data !== undefined) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    return option;
}

export async function get(url, data, signal) {
    return await request(url, createOptions('GET', data, signal));
}

export async function post(url, data, signal) {
    return await request(url, createOptions('post', data, signal));
}

export async function put(url, data) {
    return await request(url, createOptions('PUT', data));
}

export async function del(url) {
    return await request(url, createOptions('DELETE'));
}
