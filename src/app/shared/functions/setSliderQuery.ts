export function setSliderQuery(finalLink: string, text: string, param: number | string) {
    if (finalLink.includes(text)) {
        const fromSort = finalLink.slice(finalLink.indexOf(text)).indexOf('&');
        if (fromSort === -1) {
            finalLink = finalLink.slice(0, finalLink.indexOf(text) - 1);
        } else {
            finalLink =
                finalLink.slice(0, finalLink.indexOf(text)) +
                finalLink.slice(finalLink.indexOf(text) + fromSort + 1);
        }
    }

    if (!param) {
        return finalLink;
    }

    if (finalLink.includes('?')) {
        finalLink += '&';
    } else {
        finalLink += '?';
    }
    finalLink += `${text}=`;

    finalLink += param;

    return finalLink;
}
