import { Route } from './core/functionality/routing';
import { Render } from './core/functionality/render';
import { CartPage } from './pages/basket/cart';
import { CartStorage } from './shared/singletons/cart-singleton';

class App {
    constructor() {
        const renderBeginPage = new Render();
        renderBeginPage.renderNewPage('start');
    }

    run() {
        const routingApp = new Route();
        routingApp.routePage();

        //TODO place to different file
        const logoArray = Array.from(document.querySelectorAll('.logo'));
        const cartLink = document.querySelector('.widget__cart');

        if (logoArray) {
            logoArray.forEach((e) => {
                e.addEventListener('click', () => {
                    window.location.hash = '#store';
                });
            });
        }

        if (cartLink) {
            cartLink.addEventListener('click', () => {
                window.location.hash = '#basket';
            });
        }
    }
}

export default App;
