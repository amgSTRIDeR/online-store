export function setSliderQuery(finalLink: string, param: string) {
  if (finalLink.includes(param)) {
    const fromSort = finalLink.slice(finalLink.indexOf(param)).indexOf('&');
    if (fromSort === -1) {
        finalLink = finalLink.slice(0, finalLink.indexOf(param) - 1);
    } else {
        finalLink =
            finalLink.slice(0, finalLink.indexOf(param)) +
            finalLink.slice(finalLink.indexOf(param) + fromSort + 1);
    }
}

return finalLink;
}