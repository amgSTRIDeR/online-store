import { StoreSlider } from "../../pages/store/slider.control";

export function addStorePageListener() {
  const goodsView = document.querySelector('.goods-view');
  const store = document.querySelector('.store');

  if (goodsView instanceof HTMLSelectElement) {
    goodsView.addEventListener('change', () => {
      if(store) {
        if (goodsView.value === '0') {
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
      }
    })
  }
}