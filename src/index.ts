import './assets/styles/main.scss';
import App from './app/app';
import { CartStorage } from './app/shared/singletons/cart-singleton';

const page = new App();
page.run();


const cart = CartStorage.getInstance();

const cart1 = CartStorage.getInstance();

cart.addItem(1)
console.table(cart.cartArray)
console.table(cart1.cartArray)