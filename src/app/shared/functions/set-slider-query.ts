export function setSliderQuery(str: string, text: string, param: number | string) {
    if (str.includes(text)) {
        const fromSort = str.slice(str.indexOf(text)).indexOf('&');
        if (fromSort === -1) {
            str = str.slice(0, str.indexOf(text) - 1);
        } else {
            str = str.slice(0, str.indexOf(text)) + str.slice(str.indexOf(text) + fromSort + 1);
        }
    }

    if (!param) {
        return str;
    }

    if (str.includes('?')) {
        str += '&';
    } else {
        str += '?';
    }
    str += `${text}=`;

    str += param;

    return str;
}
