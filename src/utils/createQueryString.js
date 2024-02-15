export default function createQueryString(queryObj) {
    const string = Object.keys(queryObj)
        .filter((key) => queryObj[key] !== null)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(queryObj[key])}`
        )
        .join('&');
    return string;
}
