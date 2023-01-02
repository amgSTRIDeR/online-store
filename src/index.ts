import './assets/styles/main.scss';
import App from './app/app';
import { CartStorage } from './app/shared/singletons/cart-singleton';
import { GamesCollection } from './public/gamesCollection.js';

const page = new App();
page.run();

const cart = CartStorage.getInstance();

// cart.addItem(1)
// cart.addItem(2)
// cart.addItem(3)
// cart.addItem(4)
// cart.addItem(5)
// cart.addItem(6)
// cart.addItem(7)
// cart.addItem(8)
// cart.addItem(9)
// cart.addItem(10)
// cart.addItem(12)
