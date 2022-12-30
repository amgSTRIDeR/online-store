import './assets/styles/main.scss';
import App from './app/app';
import { CartStorage } from './app/shared/singletons/cart-singleton';
import gamesCollection from './public/gamesCollection.json';

const page = new App();
page.run();

console.log(gamesCollection.products[0])
console.log(gamesCollection.products[1])