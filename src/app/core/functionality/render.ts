import { startPage } from '../../pages/start/start';
import { storePage } from '../../pages/store/store';
import { errorPage } from '../../pages/error/error';
import { ProductPage } from '../../pages/product/product';
import { CartPage } from '../../pages/basket/cart';
import { CartStorage } from '../../shared/singletons/cart-singleton';
import { GamesCollection } from '../../../public/gamesCollection';
import { addErrorPageListener } from '../../shared/functions/errorPageListener';
import { addStorePageListener } from '../../shared/functions/storePageListener';
import { StoreCards } from '../../pages/store/store.cards-block';

export class Render {
    changeURL(url: string): void {
        const finalLink = window.location.protocol + '//' + window.location.host + '/#' + url;
        window.location.href = finalLink;
        if (url === 'store') {
          StoreCards.setQuery()
        }
    }

    renderNewPage(pageID: string): void {
        let page;
        if (pageID === 'start' || pageID === '') {
            page = startPage;
        } else if (pageID === 'store' || pageID.startsWith('store?')) {
            page = storePage;
        } else if (pageID === 'basket' || pageID.startsWith('basket?')) {
            CartPage.pageRender(pageID.replace('basket', '').replace('?', ''));
        } else if (
            pageID.split('/')[0] === 'product-details' &&
            Number.isInteger(+pageID.split('/')[1]) &&
            +pageID.split('/')[1] <= GamesCollection.length &&
            +pageID.split('/')[1] > 0
        ) {
            ProductPage.pageRender(+pageID.split('/')[1]);
        } else {
            page = errorPage;
            pageID = `error`;
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

        this.changeURL(pageID);
    }
}
