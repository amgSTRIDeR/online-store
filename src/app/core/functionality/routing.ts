import { Route } from '../models/routing.model';
import { render } from './render';

export const routing: Route = {
    getHash() {
        const hash = window.location.hash.slice(1);
        return hash;
    },
    routePage() {
        window.addEventListener('hashchange', () => {
            const hash = this.getHash();
            render.renderNewPage(hash);
        });
    },
};
