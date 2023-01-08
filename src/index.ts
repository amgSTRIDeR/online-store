import './assets/styles/main.scss';
import App from './app/app';

const page = new App();
page.run();

setTimeout(() => {
  const goodsView = document.querySelector('.goods-view');
  const store = document.querySelector('.store');

  if (goodsView instanceof HTMLSelectElement) {
    goodsView.addEventListener('change', () => {
      if(store) {
        if (goodsView.value === '0') {
          store.classList.remove('store_horizontal');
          store.classList.remove('store_vertical');
          store.classList.add('store_horizontal');
        } else {
          store.classList.remove('store_horizontal');
          store.classList.remove('store_vertical');
          store.classList.add('store_vertical');
        }
      }
    })
  }
}, 1000)
