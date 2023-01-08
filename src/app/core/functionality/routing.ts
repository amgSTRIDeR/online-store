import { Render } from './render';

export class Route {
    getHash() {
        const hash = window.location.hash.slice(1);
        return hash;
    }
    routePage() {
        window.addEventListener('hashchange', (e) => {
            if (e.oldURL.split('?')[0] !== e.newURL.split('?')[0]) {
                const hash = this.getHash();
                const renderPage = new Render();
                renderPage.renderNewPage(hash);
            }
        });
    }
}
