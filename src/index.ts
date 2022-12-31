import './assets/styles/main.scss';
import App from './app/app';
import { CartStorage } from './app/shared/singletons/cart-singleton';
import { GamesCollection } from './public/gamesCollection.js';

const page = new App();
page.run();
