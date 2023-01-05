import { queryCheck } from '../../shared/functions/queryCheck';
import { CartStorage } from '../../shared/singletons/cart-singleton';
import { GamesCollection } from '../../../public/gamesCollection';
import { ModalWindow } from '../modal-window/modalWindow';

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
        const wrapperDiv = document.createElement('div');
        const basketHead = document.createElement('section');
        const basketCardsWrapper = document.createElement('div');
        const basketCards = document.createElement('section');
        const basketResult = document.createElement('section');
        const basketHeadInfoHeader = document.createElement('h2');
        const basketHeadInfoPageControl = document.createElement('div');
        const basketHeadInfoPageControlPages = document.createElement('p');
        const pageNumberDecrease = document.createElement('button');
        const pagesCounter = document.createElement('span');
        const pageNumberIncrease = document.createElement('button');
        const basketHeadInfoPageControlPagesProdAmount = document.createElement('p');
        const productPerPageDecrease = document.createElement('button');
        const productsPerPageShow = document.createElement('span');
        const productPerPageIncrease = document.createElement('button');

        basketHead.classList.add('basket__head_info');
        basketCardsWrapper.classList.add('basket__cards-wrapper');
        basketCards.classList.add('basket__cards');
        basketResult.classList.add('basket__result');
        basketHeadInfoHeader.classList.add('basket__head_info__header');
        basketHeadInfoPageControl.classList.add('basket__head_info__page_control');
        basketHeadInfoPageControlPages.classList.add('basket__head_info__page_control__pages');
        pageNumberDecrease.classList.add('arrow__left');
        pageNumberDecrease.classList.add('small_button');
        pagesCounter.classList.add('pages-counter');
        pageNumberIncrease.classList.add('arrow__right');
        pageNumberIncrease.classList.add('small_button');
        basketHeadInfoPageControlPagesProdAmount.classList.add(
            'basket__head_info__page_control__prod_amount'
        );
        productPerPageDecrease.classList.add('arrow__left');
        productPerPageDecrease.classList.add('small_button');
        productsPerPageShow.classList.add('products-on-page');
        productPerPageIncrease.classList.add('arrow__right');
        productPerPageIncrease.classList.add('small_button');

        basketHeadInfoHeader.textContent = 'Корзина';
        basketHeadInfoPageControlPages.textContent = 'Страница';
        pageNumberDecrease.innerHTML = '&lt';
        pageNumberIncrease.innerHTML = '&gt;';
        basketHeadInfoPageControlPagesProdAmount.textContent = 'Количество товаров на странице';
        productPerPageDecrease.innerHTML = '&lt;';
        productPerPageIncrease.innerHTML = '&gt;';

        basketHeadInfoPageControlPagesProdAmount.appendChild(productPerPageDecrease);
        basketHeadInfoPageControlPagesProdAmount.appendChild(productsPerPageShow);
        basketHeadInfoPageControlPagesProdAmount.appendChild(productPerPageIncrease);
        basketHeadInfoPageControlPages.appendChild(pageNumberDecrease);
        basketHeadInfoPageControlPages.appendChild(pagesCounter);
        basketHeadInfoPageControlPages.appendChild(pageNumberIncrease);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPages);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPagesProdAmount);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPages);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPagesProdAmount);
        basketHead.appendChild(basketHeadInfoHeader);
        basketHead.appendChild(basketHeadInfoPageControl);
        basketCardsWrapper.appendChild(basketCards);

        if (mainSection) {
            mainSection.innerHTML = '';
            mainSection.appendChild(wrapperDiv);
            wrapperDiv.appendChild(basketHead);
            wrapperDiv.appendChild(basketCardsWrapper);
            wrapperDiv.appendChild(basketResult);
        }

        pageNumberDecrease.addEventListener('click', () => {
            if (CartPage.pageNumber > 1) {
                CartPage.pageNumber -= 1;
                CartPage.basketCardsRenew();
            }
        });

        pageNumberIncrease.addEventListener('click', () => {
            if (CartPage.pageNumber < CartPage.pagesCount) {
                CartPage.pageNumber += 1;
                CartPage.basketCardsRenew();
            }
        });

        productPerPageDecrease.addEventListener('click', () => {
            if (CartPage.itemsLimit > 1) {
                CartPage.itemsLimit -= 1;

                CartPage.basketCardsRenew();
            }
        });

        productPerPageIncrease.addEventListener('click', () => {
            CartPage.itemsLimit += 1;

            CartPage.basketCardsRenew();
        });

        CartPage.cardsRender();
        CartPage.resultRender();
        CartPage.promoRender();
        CartPage.basketCardsRenew();
        ModalWindow.modalRender();
    }

    static cardsRender() {
        const cartSection = document.querySelector('.basket__cards');

        if (cartSection) {
            cart.cartArray.length
                ? (cartSection.innerHTML = '')
                : (cartSection.innerHTML = 'Корзина пуста');

            for (let i = 0; i < cart.cartArray.length; i++) {
                const cardIndex = cart.cartArray[i].id - 1;

                const basketCard = document.createElement('div');
                const cardMainInfo = document.createElement('div');
                const cardMainInfoNum = document.createElement('h3');
                const cardMainInfoPhoto = document.createElement('div');
                const cardImage = document.createElement('img');
                const cardStars = document.createElement('div');
                const cardMainInfoHeadInfo = document.createElement('div');
                const headInfoName = document.createElement('p');
                const headInfoCategory = document.createElement('p');
                const headInfoManufactor = document.createElement('p');
                const headInfoPlayers = document.createElement('p');
                const headInfoTime = document.createElement('p');
                const headInfoStock = document.createElement('p');
                const cardMainInfoAmount = document.createElement('div');
                const cardMainInfoAmountSpecial = document.createElement('p');
                const cardMainInfoAmountProducts = document.createElement('div');
                const cardButtonMinus = document.createElement('button');
                const cardInput = document.createElement('input');
                const cardButtonPlus = document.createElement('button');
                const cardAmountPrice = document.createElement('div');
                const cardPrice = document.createElement('p');
                const cardNewPrice = document.createElement('p');
                const cardSmallButton = document.createElement('div');
                const cardDescription = document.createElement('div');

                basketCard.classList.add('basket__card');
                cardMainInfo.classList.add('card__main_info');
                cardMainInfoNum.classList.add('card__main_info_num');
                cardMainInfoPhoto.classList.add('card__main_info__photo');
                cardImage.classList.add('photo');
                cardStars.classList.add('stars');
                cardStars.classList.add(`stars_${GamesCollection[cardIndex].rating}`);
                cardStars.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M814.5,683.2C744.1,542.4,684.1,426.4,682,422.3c-4.1-4.1-130.5-24.9-281.7-47.6c-153.2-22.8-285.8-49.7-298.2-62.1c-14.5-14.5,45.6-87,192.6-229.9L508-124.4l-47.6-287.9c-24.8-157.4-37.3-294.1-29-302.4c8.3-8.3,134.6,45.6,277.5,120.1l263,136.7l263-136.7c142.9-74.5,269.2-130.5,277.5-120.1c8.3,8.3-6.2,145-33.1,304.4l-47.6,289.9l198.8,188.4c118.1,109.8,200.9,205,200.9,227.8c0,20.7-4.1,39.3-10.4,39.3c-14.5,0-420.4,60.1-503.2,72.5c-64.2,12.4-74.6,26.9-190.5,271.3C1048.5,844.8,994.7,935.9,974,935.9C953.3,935.9,895.3,844.8,814.5,683.2z"/><path d="M2955.9,911.1c-12.4-14.5-74.5-130.5-138.8-258.9c-105.6-213.3-120.1-231.9-182.3-244.4c-37.3-6.2-161.5-24.9-275.4-41.4c-113.9-18.6-215.4-41.4-227.8-53.8c-12.4-12.4,53.8-93.2,190.5-231.9l209.2-211.2l-49.7-279.6c-33.1-186.4-43.5-283.7-29-298.2c14.5-14.5,105.6,22.8,279.6,111.8L2991.1-462L3250-596.6c165.7-84.9,265.1-126.3,277.5-113.9c14.5,14.5,2.1,120.1-29,300.3l-49.7,279.6l211.2,211.2c149.1,153.3,203,219.5,188.5,234c-12.4,12.4-147,41.4-300.3,64.2s-279.6,47.6-283.7,55.9c-47.6,113.9-248.5,490.8-265.1,497C2987,933.8,2966.3,925.6,2955.9,911.1z"/><path d="M4873.7,683.2c-70.4-140.8-130.5-256.8-132.5-260.9c-4.1-4.1-130.5-24.9-281.7-47.6c-153.3-22.8-285.8-49.7-298.2-62.1c-14.5-14.5,45.6-87,192.6-229.9l215.4-209.2l-47.6-285.8c-26.9-157.4-41.4-294.1-31.1-302.4c8.3-8.3,134.6,45.6,277.5,120.1l263,136.7l263-136.7c142.9-74.5,269.2-130.5,277.5-120.1c8.3,8.3-6.2,145-33.1,304.4l-47.6,289.9l198.8,188.4c118,109.8,200.9,205,200.9,227.8c0,20.7-4.2,39.3-10.4,39.3c-14.5,0-420.4,58-501.2,72.5c-62.1,10.4-74.6,29-190.5,269.2c-80.8,167.8-134.6,258.9-155.3,258.9C5012.4,935.9,4954.4,844.8,4873.7,683.2z"/><path d="M6959.1,890.3c-16.6-26.9-74.6-140.8-128.4-254.7c-53.9-113.9-99.4-209.2-101.5-211.2c-2.1-4.1-126.3-22.8-279.6-45.6c-151.2-22.8-285.8-51.8-298.2-64.2c-14.5-14.5,39.4-80.8,188.5-234l211.3-211.2l-51.8-279.6c-33.1-186.4-43.5-283.7-29-298.2c14.5-14.5,105.6,22.8,279.6,111.8L7008.9-462l258.9-134.6c174-89.1,265.1-126.3,279.6-111.8c14.5,14.5,4.2,111.8-29,298.2l-51.8,279.6l211.3,211.2c140.8,142.9,202.9,219.5,188.5,234c-10.4,10.4-145,39.3-298.2,62.1c-161.5,24.9-283.7,53.8-287.9,68.3c-31.1,84.9-244.4,480.5-265.1,486.7C7002.7,935.9,6977.8,917.3,6959.1,890.3z"/><path d="M8870.7,677c-116-240.2-128.4-258.9-190.5-269.2c-37.3-6.2-163.6-24.9-283.7-41.4c-120.1-18.6-225.7-41.4-238.2-53.8c-12.4-12.4,51.8-91.1,194.7-229.9l213.3-209.2l-47.6-285.8c-26.9-157.4-41.4-294.1-31.1-302.4c8.3-8.3,134.6,45.6,277.5,120.1l263,136.7l263-136.7c142.9-74.5,269.2-128.4,277.5-120.1c10.4,8.3-4.1,145-31.1,302.4l-47.6,283.7l213.3,211.2c149.1,142.9,209.2,215.4,194.7,229.9c-12.4,12.4-145,39.3-298.2,62.1c-151.2,22.8-279.6,43.5-283.7,47.6c-4.2,4.1-62.1,122.2-130.5,260.9c-82.8,165.7-136.7,252.7-157.4,252.7C9005.3,935.9,8951.4,848.9,8870.7,677z"/></g></g>
                </svg>`
                cardMainInfoHeadInfo.classList.add('card__main_info__head_info');
                cardMainInfoAmount.classList.add('card__main_info__amount');
                cardMainInfoAmountSpecial.classList.add('card__main_info__amount__special');
                cardMainInfoAmountProducts.classList.add('card__main_info__amount__of_products');
                cardButtonMinus.classList.add('num_button');
                cardButtonMinus.classList.add('num_button_minus');
                cardInput.classList.add('number_of_products');
                cardButtonPlus.classList.add('num_button');
                cardButtonPlus.classList.add('num_button_plus');
                cardAmountPrice.classList.add('card__main_info__amount__price');
                cardPrice.classList.add('price');
                cardNewPrice.classList.add('new_price');
                cardSmallButton.classList.add('card__main_info__cross');
                cardSmallButton.classList.add('small_button');
                cardSmallButton.classList.add('small_button-item');
                cardDescription.classList.add('card__description');

                cardMainInfoNum.textContent = (i + 1).toString();
                cardImage.src = <string>GamesCollection[cardIndex].thumbnail;
                cardImage.alt = GamesCollection[cardIndex].title_ru;
                cardImage.width = 111;
                headInfoName.textContent = `Название: ${GamesCollection[cardIndex].title_ru}`;
                headInfoCategory.textContent = `Категория: ${GamesCollection[
                    cardIndex
                ].category_ru.join(', ')}`;
                headInfoManufactor.textContent = `Производитель: ${GamesCollection[cardIndex].brand}`;
                headInfoPlayers.textContent = `Количество игроков: ${GamesCollection[
                    cardIndex
                ].gamers.join('-')}`;
                headInfoTime.textContent = `Время игры: ${GamesCollection[cardIndex].GameTime.join(
                    '-'
                )} минут`;
                headInfoStock.textContent = `На складе: ${cart.getItemStockNumber(
                    GamesCollection[cardIndex].id
                )}`;

                if (GamesCollection[cardIndex].discountPercentage > 1) {
                    cardMainInfoAmountSpecial.textContent = 'Акция!';
                    cardNewPrice.textContent = `${Math.round(
                        GamesCollection[cardIndex].price /
                            GamesCollection[cardIndex].discountPercentage
                    )}$`;
                    cardPrice.style.textDecoration = 'line-through';
                }

                cardButtonMinus.textContent = '-';
                cardButtonMinus.id = `minus=${GamesCollection[cardIndex].id}`;
                cardInput.type = 'text';
                cardInput.readOnly = true;
                cardInput.value = `${cart.cartArray[i].quantity}`;
                cardButtonPlus.textContent = '+';
                cardButtonPlus.id = `plus=${GamesCollection[cardIndex].id}`;
                cardPrice.textContent = `${GamesCollection[cardIndex].price}$`;

                cardSmallButton.textContent = `X`;
                cardSmallButton.id = `small=${GamesCollection[cardIndex].id}`;
                cardDescription.textContent = `${GamesCollection[cardIndex].description_ru}`;

                basketCard.appendChild(cardMainInfo);
                basketCard.appendChild(cardDescription);
                cardMainInfo.appendChild(cardMainInfoNum);
                cardMainInfo.appendChild(cardMainInfoPhoto);
                cardMainInfo.appendChild(cardMainInfoHeadInfo);
                cardMainInfo.appendChild(cardMainInfoAmount);
                cardMainInfo.appendChild(cardSmallButton);
                cardMainInfoPhoto.appendChild(cardImage);
                cardMainInfoPhoto.appendChild(cardStars);
                cardMainInfoHeadInfo.appendChild(headInfoName);
                cardMainInfoHeadInfo.appendChild(headInfoCategory);
                cardMainInfoHeadInfo.appendChild(headInfoManufactor);
                cardMainInfoHeadInfo.appendChild(headInfoPlayers);
                cardMainInfoHeadInfo.appendChild(headInfoTime);
                cardMainInfoHeadInfo.appendChild(headInfoStock);
                cardMainInfoAmount.appendChild(cardMainInfoAmountSpecial);
                cardMainInfoAmount.appendChild(cardMainInfoAmountProducts);
                cardMainInfoAmount.appendChild(cardAmountPrice);
                cardMainInfoAmountProducts.appendChild(cardButtonMinus);
                cardMainInfoAmountProducts.appendChild(cardInput);
                cardMainInfoAmountProducts.appendChild(cardButtonPlus);
                cardAmountPrice.appendChild(cardPrice);
                cardAmountPrice.appendChild(cardNewPrice);

                const copyCard = basketCard.cloneNode(true);
                cartSection.appendChild(copyCard);
            }
        }

        const minusButtonsArray = Array.from(document.querySelectorAll('.num_button_minus'));
        minusButtonsArray.forEach((e) => {
            e.addEventListener('click', () => {
                cart.decreaseQuantity(+e.id.split('=')[1]);
                CartPage.cardsRender();
                CartPage.basketCardsRenew();
            });
        });

        const plusButtonsArray = Array.from(document.querySelectorAll('.num_button_plus'));
        plusButtonsArray.forEach((e) => {
            e.addEventListener('click', () => {
                cart.addItem(+e.id.split('=')[1]);
                CartPage.cardsRender();
                CartPage.basketCardsRenew();
            });
        });

        const smallButtonsArray = Array.from(document.querySelectorAll('.small_button-item'));
        smallButtonsArray.forEach((e) => {
            e.addEventListener('click', () => {
                cart.removeItem(+e.id.split('=')[1]);
                CartPage.cardsRender();
                CartPage.basketCardsRenew();
            });
        });
    }

    static resultRender() {
        const basketResult = document.querySelector('.basket__result');
        const basketResultHeader = document.createElement('h2');
        const basketResultInfo = document.createElement('div');
        const resultInfo = document.createElement('div');
        const resultInfoAmount = document.createElement('p');
        const purePrice = document.createElement('span');
        const promoPrice = document.createElement('span');
        const resultInfoPrice = document.createElement('p');
        const resultPromocode = document.createElement('div');
        const proposalWrapper = document.createElement('div');
        const proposalPromo = document.createElement('p');
        const proposalButton = document.createElement('div');
        const resultPromocodeInput = document.createElement('input');
        const resultPromocodeButton = document.createElement('div');
        const promocodes = document.createElement('div');
        const buyButton = document.createElement('button');

        basketResultHeader.classList.add('basket__result__name');
        basketResultInfo.classList.add('basket__result__info');
        resultInfo.classList.add('info__amount_and_price');
        resultInfoAmount.classList.add('info__amount_and_price__amount');
        resultInfoPrice.classList.add('info__amount_and_price__price');
        purePrice.classList.add('pure-price');
        purePrice.style.textDecoration = 'line-through';
        promoPrice.classList.add('promo-price');
        resultPromocode.classList.add('info__promocode');
        proposalWrapper.classList.add('proposal');
        proposalPromo.classList.add('proposal__promocode');
        proposalButton.classList.add('proposal__button');
        promocodes.classList.add('promocodes');
        resultPromocodeInput.classList.add('info__promocode__enter');
        resultPromocodeButton.classList.add('info__promocode__button');
        buyButton.classList.add('info__buy_now');

        basketResultHeader.textContent = 'Итого:';
        resultInfoPrice.textContent = 'На сумму: ';
        resultPromocodeInput.type = 'text';
        resultPromocodeInput.placeholder = 'Введите промокод (newRS, salesalesale)';
        resultPromocodeButton.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 19"><path fill="#ffffff" d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>';
        proposalButton.innerHTML =
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.875 122.648" enable-background="new 0 0 122.875 122.648" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z"/></g></svg>';

        buyButton.textContent = 'Купить сейчас';

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
            CartPage.promoRender();
        });

        resultPromocodeButton.addEventListener('click', () => {
            resultPromocodeInput.value = '';
            resultPromocodeButton.classList.remove('info__promocode__button_active');
            cart.showPromo(resultPromocodeInput.value);
        });

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

    static promoRender() {
        const promocodes = document.querySelector('.promocodes');

        if (promocodes) {
            promocodes.innerHTML = '';
            for (let i = 0; i < cart.promoArray.length; i++) {
                const promocode = document.createElement('p');
                const promocodeDeleteButton = document.createElement('button');

                promocode.classList.add('promocode');
                promocodeDeleteButton.classList.add('small_button');
                promocodeDeleteButton.classList.add('small_button-promo');
                promocodeDeleteButton.id = `promoId=${cart.promoArray[i].id}`;

                promocode.textContent = `Промокод: ${cart.promoArray[i].title_ru} на ${cart.promoArray[i].discount}%`;
                promocodeDeleteButton.textContent = 'Remove';

                promocode.appendChild(promocodeDeleteButton);

                const copyCard = promocode.cloneNode(true);
                promocodes.appendChild(copyCard);
            }
        }

        const smallPromoButtonsArray = Array.from(document.querySelectorAll('.small_button-promo'));
        smallPromoButtonsArray.forEach((e) => {
            e.addEventListener('click', () => {
                cart.removePromo(+e.id.split('=')[1]);
                CartPage.promoRender();
            });
        });
    }

    static basketCardsRenew() {
        const basketCards = document.querySelector('.basket__cards');
        const pagesCounter = document.querySelector('.pages-counter');
        const productsPerPageShow = document.querySelector('.products-on-page');

        if (basketCards instanceof HTMLElement) {
            CartPage.pagesCount = Math.ceil(cart.cartArray.length / CartPage.itemsLimit);

            if (CartPage.pageNumber > CartPage.pagesCount) {
                CartPage.pageNumber = CartPage.pagesCount;
            }

            basketCards.style.left = `${(CartPage.pageNumber - 1) * -90}vw`;
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

        CartPage.changeHash();
    }

    static changeHash() {
        window.location.hash = `#basket?limit=${this.itemsLimit}&page=${this.pageNumber}`;
    }
}
