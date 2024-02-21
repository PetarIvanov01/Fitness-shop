export default function resolveServerImg(image) {
    if (image) {
        return `http://localhost:5000/uploads/` + image;
    }
    return null;
}
