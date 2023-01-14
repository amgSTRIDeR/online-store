import { changeCardsDirection } from './change-cards-direction';

export function addStorePageListener() {
    const goodsView = document.querySelector('.goods-view');

    if (goodsView instanceof HTMLSelectElement) {
        goodsView.addEventListener('change', () => {
            changeCardsDirection(+goodsView.value);
        });
    }
}
