export function truncateWords(str: string, maxWords = 2) {
    const words = str.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ');
    }

    return str;
}
