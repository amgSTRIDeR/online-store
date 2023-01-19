import { startPage } from '../../pages/start/start';
import { storePage } from '../../pages/store/store';
import { errorPage } from '../../pages/error/error';
import { ProductPage } from '../../pages/product/product';
import { CartPage } from '../../pages/basket/cart';
import { CartStorage } from '../../shared/singletons/cart-singleton';
import { addErrorPageListener } from '../../shared/functions/error-page-listener';
import { addStorePageListener } from '../../shared/functions/store-page-listener';
import { StoreCards } from '../../pages/store/store.cards-block';

export class Render {
    static changeURL(url: string): void {
        const finalLink = window.location.protocol + '//' + window.location.host + '/#' + url;
        window.location.href = finalLink;
        if (url === 'store') {
            StoreCards.setQuery();
        }
    }

    static renderNewPage(pageID: string): void {
        let page;

        switch (pageID) {
            case 'start':
            case '':
                page = startPage;
                break;

            case 'store':
                page = storePage;
                break;

            case 'basket':
                CartPage.pageRender(pageID.replace('basket', '').replace('?', ''));
                break;

            default:
                if (pageID.match(/^product-details\/([1-9]|[1-9]\d|100|101)$/i)) {
                    ProductPage.pageRender(+pageID.split('/')[1]);
                } else {
                    page = errorPage;
                    pageID = `error`;
                }
        }

        if (page) {
            page.render();
            page.loadComponents();

            const cart = CartStorage.getInstance();
            cart.renewCartWidget();
            cart.renewSumWidget();
            addErrorPageListener();
            addStorePageListener();
            StoreCards.cardsRender();
        }

        Render.changeURL(pageID);
    }
}
