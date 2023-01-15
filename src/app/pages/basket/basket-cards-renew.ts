import { CartStorage } from "../../shared/singletons/cart-singleton";
import { CartPage } from "./cart";

export function basketCardsRenew() {
    const basketCards = document.querySelector('.basket__cards');
    const pagesCounter = document.querySelector('.pages-counter');
    const productsPerPageShow = document.querySelector('.products-on-page');
    const cart = CartStorage.getInstance();

    if (basketCards instanceof HTMLElement) {
        CartPage.pagesCount = Math.ceil(cart.cartArray.length / CartPage.itemsLimit);

        if (CartPage.pageNumber > CartPage.pagesCount) {
            CartPage.pageNumber = CartPage.pagesCount;
        }

        basketCards.style.transform = `translateX(${(CartPage.pageNumber - 1) * -90}vw)`;
        basketCards.style.gridTemplateRows = `repeat(${
            CartPage.itemsLimit < cart.cartArray.length
                ? CartPage.itemsLimit
                : cart.cartArray.length
        }, 1fr)`;
    }

    if (pagesCounter) {
        pagesCounter.textContent = ` ${CartPage.pageNumber} / ${CartPage.pagesCount} `;
    }

    if (productsPerPageShow) {
        productsPerPageShow.textContent = ` ${CartPage.itemsLimit} `;
    }
    cart.renewSumWidget();
    cart.renewCartWidget();
    CartPage.changeHash();
}
