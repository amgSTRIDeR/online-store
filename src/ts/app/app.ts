import { routing } from '../core/functionality/routing';
import { render } from '../core/functionality/render';

class App {
    constructor() {
        render.renderNewPage('start');
    }
    run() {
        routing.routePage();
    }
}

export default App;
