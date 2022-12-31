import { startPage } from '../../pages/start/start';
import { storePage } from '../../pages/store/store';
import { errorPage } from '../../pages/error/error';
import { productPage } from '../../pages/product/product';
import { CartPage } from '../../pages/basket/cart';
import { CardComponent } from '../../pages/store/store.components';

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
        } else if (pageID === 'store' || pageID.startsWith('store?')) {
            page = storePage;
        } else if (pageID === 'basket' || pageID.startsWith('basket?')) {
            CartPage.pageRender(pageID);
        } else if (pageID === 'product') {
            page = productPage;
        } else {
            page = errorPage;
            pageID = `error`;
        }

        if (page) {
            page.render();
            page.loadComponents();
        }

        this.changeURL(pageID);
    }
}
