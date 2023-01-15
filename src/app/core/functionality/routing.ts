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
                Render.renderNewPage(hash);
            }
        });
        window.addEventListener('beforeunload', () => {
            const hash = this.getHash();
            localStorage.setItem('hash', hash);
        });
        window.addEventListener('load', () => {
            const storageHash = localStorage.getItem('hash');
            if (storageHash) {
                const hash: string | null = storageHash;
                if (hash) {
                  Render.renderNewPage(hash);
                }
            }
        });
    }
}
