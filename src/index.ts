import './assets/styles/main.scss';
import App from './app/app';
import { CartStorage } from './app/shared/singletons/cart-singleton';
import { GamesCollection } from './public/gamesCollection.js';

const page = new App();
page.run();

// Пример обращения к GamesCollection
// const themeChanger = document.querySelector<HTMLElement>('.start__container');

// if (themeChanger) {
//     themeChanger.style.backgroundImage = `url(${GamesCollection[0].images[2]})`;
// }

