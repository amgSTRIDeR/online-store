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

        const cart = CartStorage.getInstance();
        cart.renewSumWidget();
        cart.renewCartWidget();

        const logoArray = Array.from(document.querySelectorAll('.logo'));
        const cartLink = document.querySelector('.widget__cart');

        //TODO
        if (logoArray) {
            logoArray.forEach((e) => {
                e.addEventListener('click', () => {
                    window.location.hash = '#start';
                });
            });
        }

        if (cartLink) {
            cartLink.addEventListener('click', () => {
                window.location.hash = '#store';
            });
        }
    }
}

export default App;
