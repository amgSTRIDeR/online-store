import { startPage } from '../../pages/start/start';
import { storePage } from '../../pages/store/store';
import { errorPage } from '../../pages/error/error';
import { basketPage } from '../../pages/basket/basket';
import { productPage } from '../../pages/product/product';

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

        page.loadComponents();

        this.changeURL(pageID);
    }
}
