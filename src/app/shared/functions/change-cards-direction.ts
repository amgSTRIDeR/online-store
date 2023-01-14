
import { StoreCards } from '../../pages/store/store.cards-block';

export function changeCardsDirection(directionOrder: number) {
    const store = document.querySelector('.store');
    const goodsView = document.querySelector('.goods-view');

    if (store) {
        if (directionOrder === 0) {
            store.classList.remove('store_horizontal');
            store.classList.remove('store_vertical');
            store.classList.add('store_horizontal');
            StoreCards.direction = 0;
            StoreCards.renewSlider();
            StoreCards.setQuery();
        } else {
            store.classList.remove('store_horizontal');
            store.classList.remove('store_vertical');
            store.classList.add('store_vertical');
            StoreCards.direction = 1;
            StoreCards.renewSlider();
            StoreCards.setQuery();
        }

        if (goodsView instanceof HTMLSelectElement) {
            goodsView.value = `${StoreCards.direction}`;
        }
    }
}
