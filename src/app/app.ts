import { Route } from './core/functionality/routing';
import { Render } from './core/functionality/render';
import { CartPage } from './pages/basket/cart';
import { CartStorage } from './shared/singletons/cart-singleton';

class App {
    constructor() {
        const renderBeginPage = new Render();
        renderBeginPage.renderNewPage('basket');
    }
    run() {
        const routingApp = new Route();
        routingApp.routePage();

        const cart = CartStorage.getInstance();
        cart.renewSumWidget();
        cart.renewCartWidget();
    }
}

export default App;
