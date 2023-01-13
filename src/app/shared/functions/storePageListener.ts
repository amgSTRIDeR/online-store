import { StoreCards } from '../../pages/store/store.cards-block';

export function addStorePageListener() {
    const goodsView = document.querySelector('.goods-view');
    const store = document.querySelector('.store');

    if (goodsView instanceof HTMLSelectElement) {
        goodsView.addEventListener('change', () => {
            if (store) {
                if (goodsView.value === '0') {
                    store.classList.remove('store_horizontal');
                    store.classList.remove('store_vertical');
                    store.classList.add('store_horizontal');
                    StoreCards.direction = 'horizontal';
                    StoreCards.cardsRender();
                } else {
                    store.classList.remove('store_horizontal');
                    store.classList.remove('store_vertical');
                    store.classList.add('store_vertical');
                    StoreCards.direction = 'vertical';
                    StoreCards.renewSlider();
                }
            }
        });
    }
}
