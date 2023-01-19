import { queryCheck } from '../../shared/functions/query-check';
import { CartStorage } from '../../shared/singletons/cart-singleton';
import { ModalWindow } from '../modal-window/modal-window';
import { createDomElement } from '../../shared/functions/create-dom-element';
import { CartSvg } from './cart-svg';
import { basketCardsRenew } from './basket-cards-renew';
import { basketCardsRender } from './basket-cards-render';
import { basketPromoRender } from './basket-promo-render';

const cart = CartStorage.getInstance();

export class CartPage {
    static itemsLimit = 3;
    static pagesCount = 1;
    static pageNumber = 1;

    static pageRender(query: string) {
        CartPage.itemsLimit = queryCheck(query, 'limit') || 3;
        CartPage.pagesCount = Math.ceil(cart.cartArray.length / CartPage.itemsLimit) || 1;
        CartPage.pageNumber =
            queryCheck(query, 'page') <= CartPage.pagesCount ? queryCheck(query, 'page') || 1 : 1;

        const mainSection = document.querySelector('.main-section');
        const wrapperDiv = createDomElement('div', 'basket-wrapper');
        const basketCardsWrapper = createDomElement('div', 'basket__cards-wrapper');
        const basketCards = createDomElement('section', 'basket__cards');
        const basketResult = createDomElement('section', 'basket__result');
        const basketHeader = createDomElement('h2', 'basket-header');
        const basketPageControl = createDomElement('div', 'basket-page-control');
        const basketHeadInfoPageControlPages = createDomElement('p', 'basket-page-control__pages');
        const pageNumberDecrease = createDomElement('div', 'arrow-left');
        const pagesCounter = createDomElement('span', 'pages-counter');
        const pageNumberIncrease = createDomElement('div', 'arrow-right');
        const basketHeadInfoPageControlPagesProdAmount = createDomElement(
            'p',
            'basket-page-control__prod_amount'
        );
        const productPerPageDecrease = createDomElement('div', 'arrow-left');
        const productsPerPageShow = createDomElement('span', 'products-on-page');
        const productPerPageIncrease = createDomElement('div', 'arrow-right');

        basketHeader.textContent = 'Корзина';
        basketHeadInfoPageControlPages.textContent = 'Страница';
        pageNumberDecrease.innerHTML = CartSvg.ArrowLeft;
        pageNumberIncrease.innerHTML = CartSvg.ArrowRight;
        basketHeadInfoPageControlPagesProdAmount.textContent = 'Количество товаров на странице';
        productPerPageDecrease.innerHTML = CartSvg.ArrowLeft;
        productPerPageIncrease.innerHTML = CartSvg.ArrowRight;

        basketHeadInfoPageControlPagesProdAmount.appendChild(productPerPageDecrease);
        basketHeadInfoPageControlPagesProdAmount.appendChild(productsPerPageShow);
        basketHeadInfoPageControlPagesProdAmount.appendChild(productPerPageIncrease);
        basketHeadInfoPageControlPages.appendChild(pageNumberDecrease);
        basketHeadInfoPageControlPages.appendChild(pagesCounter);
        basketHeadInfoPageControlPages.appendChild(pageNumberIncrease);
        basketPageControl.appendChild(basketHeadInfoPageControlPages);
        basketPageControl.appendChild(basketHeadInfoPageControlPagesProdAmount);
        basketPageControl.appendChild(basketHeadInfoPageControlPages);
        basketPageControl.appendChild(basketHeadInfoPageControlPagesProdAmount);
        basketCardsWrapper.appendChild(basketCards);

        if (mainSection) {
            mainSection.innerHTML = '';
            mainSection.appendChild(wrapperDiv);
            wrapperDiv.appendChild(basketHeader);
            wrapperDiv.appendChild(basketPageControl);
            wrapperDiv.appendChild(basketCardsWrapper);
            wrapperDiv.appendChild(basketResult);
        }

        pageNumberDecrease.addEventListener('click', () => {
            if (CartPage.pageNumber > 1) {
                CartPage.pageNumber -= 1;
                basketCardsRenew();
            }
        });

        pageNumberIncrease.addEventListener('click', () => {
            if (CartPage.pageNumber < CartPage.pagesCount) {
                CartPage.pageNumber += 1;
                basketCardsRenew();
            }
        });

        productPerPageDecrease.addEventListener('click', () => {
            if (CartPage.itemsLimit > 1) {
                CartPage.itemsLimit -= 1;

                basketCardsRenew();
            }
        });

        productPerPageIncrease.addEventListener('click', () => {
            CartPage.itemsLimit += 1;

            basketCardsRenew();
        });

        CartPage.resultRender();
        CartPage.pageRenew();
        ModalWindow.modalRender();
    }

    static pageRenew() {
        basketCardsRender();
        basketCardsRenew();
        basketPromoRender();
    }

    static resultRender() {
        const basketResult = document.querySelector('.basket__result');
        const basketResultHeader = createDomElement('h2', 'basket__result__name');
        const basketResultInfo = createDomElement('div', 'basket__result__info');
        const resultInfo = createDomElement('div', 'info__amount_and_price');
        const resultInfoAmount = createDomElement('p', 'info__amount_and_price__amount');
        const purePrice = createDomElement('span', 'pure-price');
        const promoPrice = createDomElement('span', 'promo-price');
        const resultInfoPrice = createDomElement('p', 'info__amount_and_price__price');
        const resultPromocode = createDomElement('div', 'info__promocode');
        const proposalWrapper = createDomElement('div', 'proposal');
        const proposalPromo = createDomElement('p', 'proposal__promocode');
        const proposalButton = createDomElement('div', 'proposal__button');
        const resultPromocodeInput = createDomElement('input', 'info__promocode__enter');
        const resultPromocodeButton = createDomElement('div', 'info__promocode__button');
        const promocodes = createDomElement('div', 'promocodes', 'hide');
        const buyButton = createDomElement('div', 'info__buy_now');

        purePrice.style.textDecoration = 'line-through';
        proposalWrapper.insertAdjacentText(
            'afterbegin',
            'Промокоды: newRS, ktulhu666, tabletop2023, inviteRS, salesalesale, student1'
        );

        basketResultHeader.textContent = 'Итого:';
        resultInfoPrice.textContent = 'На сумму: ';

        resultPromocodeButton.innerHTML = CartSvg.Promocode;
        proposalButton.innerHTML = CartSvg.Proposal;

        buyButton.textContent = 'Купить сейчас';

        if (resultPromocodeInput instanceof HTMLInputElement) {
            resultPromocodeInput.type = 'text';
            resultPromocodeInput.placeholder = 'Введите промокод';

            resultPromocodeInput.addEventListener('input', () => {
                cart.showPromo(resultPromocodeInput.value);
                if (resultPromocodeInput.value.length) {
                    resultPromocodeButton.classList.add('info__promocode__button_active');
                } else {
                    resultPromocodeButton.classList.remove('info__promocode__button_active');
                }
            });

            proposalButton.addEventListener('click', () => {
                cart.addPromo(resultPromocodeInput.value);
                basketPromoRender();
            });

            resultPromocodeButton.addEventListener('click', () => {
                resultPromocodeInput.value = '';
                resultPromocodeButton.classList.remove('info__promocode__button_active');
                cart.showPromo(resultPromocodeInput.value);
            });
        }

        basketResultInfo.appendChild(resultInfo);
        basketResultInfo.appendChild(resultPromocode);
        resultInfo.appendChild(resultInfoAmount);
        resultInfoPrice.appendChild(purePrice);
        resultInfoPrice.appendChild(promoPrice);
        resultInfo.appendChild(resultInfoPrice);
        resultInfo.appendChild(buyButton);
        resultPromocode.appendChild(resultPromocodeInput);
        resultPromocode.appendChild(resultPromocodeButton);
        proposalWrapper.appendChild(proposalPromo);
        proposalWrapper.appendChild(proposalButton);
        resultPromocode.appendChild(proposalWrapper);
        resultPromocode.appendChild(promocodes);

        if (basketResult) {
            basketResult.appendChild(basketResultHeader);
            basketResult.appendChild(basketResultInfo);
        }
    }

    static changeHash() {
        window.location.hash = `#basket?limit=${this.itemsLimit}&page=${this.pageNumber}`;
    }
}
