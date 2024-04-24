let HOST = import.meta.env.VITE_HOST_LOCAL;

if (import.meta.env.MODE === 'production') {
    HOST = import.meta.env.VITE_HOST_PROD;
}
export default function resolveServerImg(image) {
    if (image) {
        return `${HOST}/uploads/` + image;
    }
    return null;
}
