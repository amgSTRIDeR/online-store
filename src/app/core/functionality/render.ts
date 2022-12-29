import { startPage } from '../../pages/start';
import { storePage } from '../../pages/store';
import { errorPage } from '../../pages/error';
import { basketPage } from '../../pages/basket';
import { productPage } from '../../pages/product';

export class Render {
    constructor() {}

    changeURL(url: string): void {
        const finalLink = window.location.protocol + '//' + window.location.host + '/#' + url;
        window.location.href = finalLink;
    }

    renderNewPage(pageID: string): void {
        let page;
        if (pageID === 'start' || pageID === '') {
            page = startPage;
        } else if (pageID === 'store') {
            page = storePage;
        } else if (pageID === 'basket') {
            page = basketPage;
        } else if (pageID === 'product') {
            page = productPage;
        } else {
            page = errorPage;
        }

        if (page) {
            page.render();
        }
        this.changeURL(pageID);
    }
}
