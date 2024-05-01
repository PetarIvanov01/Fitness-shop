type ObjectValue = number | string | boolean;

type GeneralObject<T> = { [K in keyof T]: ObjectValue };

export default function createQueryString<T extends GeneralObject<T>>(
    queryObj: T
) {
    const keys = Object.keys(queryObj) as (keyof T)[];

    const string = keys
        .filter((key) => queryObj[key] !== null)
        .map(
            (key) =>
                //@ts-ignore
                `${encodeURIComponent(key)}=${encodeURIComponent(queryObj[key as keyof T])}`
        )
        .join('&');
    return string;
}
