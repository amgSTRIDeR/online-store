import { StoreSlider } from '../../pages/store/slider.control';

export function changeCardsDirection(directionOrder: number) {
    const store = document.querySelector('.store');
    const goodsView = document.querySelector('.goods-view');

    if (store) {
        if (directionOrder === 0) {
            store.classList.remove('store_horizontal');
            store.classList.remove('store_vertical');
            store.classList.add('store_horizontal');
            StoreSlider.direction = 0;
            StoreSlider.renewSlider();
            StoreSlider.setQuery();
        } else {
            store.classList.remove('store_horizontal');
            store.classList.remove('store_vertical');
            store.classList.add('store_vertical');
            StoreSlider.direction = 1;
            StoreSlider.renewSlider();
            StoreSlider.setQuery();
        }

        if (goodsView instanceof HTMLSelectElement) {
            goodsView.value = `${StoreSlider.direction}`;
        }
    }
}
