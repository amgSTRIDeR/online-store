import { Route } from './core/functionality/routing';
import { Render } from './core/functionality/render';

class App {
    constructor() {
        const renderBeginPage = new Render();
        renderBeginPage.renderNewPage('start');
    }
    run() {
        const routingApp = new Route();
        routingApp.routePage();
    }
}

export default App;
