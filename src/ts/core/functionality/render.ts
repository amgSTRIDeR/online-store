import { Render } from '../models/render.model';
import StartPage from '../../app/start/start';
import StorePage from '../../app/store/store';

export const render: Render = {
    changeURL(url: string): void {
        const finalLink = window.location.protocol + '//' + window.location.host + '/#' + url;
        window.location.href = finalLink;
    },
    renderNewPage(pageID) {
        let page;
        if (pageID === 'start' || pageID === '') {
            page = new StartPage(pageID);
        } else if (pageID === 'store') {
            page = new StorePage(pageID);
        } else {
            console.log('ADD 404');
        }

        if (page) {
            page.render();
        }
        this.changeURL(pageID);
    },
};
