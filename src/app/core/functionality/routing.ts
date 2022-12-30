import { Render } from './render';

export class Route {
    constructor() {}
    getHash() {
        const hash = window.location.hash.slice(1);
        return hash;
    }
    routePage() {
        window.addEventListener('hashchange', () => {
            const hash = this.getHash();
            const renderPage = new Render();
            renderPage.renderNewPage(hash);
        });
    }
}
