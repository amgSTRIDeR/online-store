import StartPage from '../../pages/start';
import StorePage from '../../pages/store';
import ErrorPage from '../../pages/error';
import BasketPage from '../../pages/basket';
import ProductPage from '../../pages/product';

export class Render {
    constructor() {}

    changeURL(url: string): void {
        const finalLink = window.location.protocol + '//' + window.location.host + '/#' + url;
        window.location.href = finalLink;
    }

    renderNewPage(pageID: string): void {
        let page;
        if (pageID === 'start' || pageID === '') {
            page = new StartPage(pageID);
        } else if (pageID === 'store') {
            page = new StorePage(pageID);
        } else if (pageID === 'basket') {
            page = new BasketPage(pageID);
        } else if (pageID === 'product') {
            page = new ProductPage(pageID);
        } else {
            page = new ErrorPage('error');
        }

        if (page) {
            page.render();
        }
        this.changeURL(pageID);
    }
}
