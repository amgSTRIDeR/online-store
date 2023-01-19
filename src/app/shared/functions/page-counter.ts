export function pageCounter(numberOfProductsPerPage = 6) {
    const cardArray = Array.from(document.querySelectorAll('.card'));
    let visibleProductsCounter = 0;

    cardArray.forEach((e) => {
        if (e instanceof HTMLDivElement) {
            if (e.style.display === 'grid') {
                visibleProductsCounter += 1;
            }
        }
    });
    return Math.ceil(visibleProductsCounter / numberOfProductsPerPage);
}
