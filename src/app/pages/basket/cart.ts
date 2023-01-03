import { queryCheck } from '../../shared/functions/queryCheck';
import { CartStorage } from '../../shared/singletons/cart-singleton';
import { GamesCollection } from '../../../public/gamesCollection';
import { ItemInCart } from '../../shared/interfaces/interfaces';

const cart = CartStorage.getInstance();

export class CartPage {
    static pageRender(query: string) {
        const itemsLimit = queryCheck(query, 'limit') || 3;
        const pagesCount = Math.ceil(cart.cartArray.length / itemsLimit) || 1;
        const pageNumber =
            queryCheck(query, 'page') <= pagesCount ? queryCheck(query, 'page') || 1 : 1;

        const mainSection = document.querySelector('.main-section');
        const wrapperDiv = document.createElement('div');
        const basketHead = document.createElement('section');
        const basketCards = document.createElement('section');
        const basketResult = document.createElement('section');
        const basketHeadInfoHeader = document.createElement('h2');
        const basketHeadInfoPageControl = document.createElement('div');
        const basketHeadInfoPageControlPages = document.createElement('p');
        const arrowLeft = document.createElement('button');
        const arrowRight = document.createElement('button');
        const basketHeadInfoPageControlPagesProdAmount = document.createElement('p');
        const arrowLeftProdAmount = document.createElement('button');
        const arrowRightProdAmount = document.createElement('button');

        basketHead.classList.add('basket__head_info');
        basketCards.classList.add('basket__cards');
        basketResult.classList.add('basket__result');
        basketHeadInfoHeader.classList.add('basket__head_info__header');
        basketHeadInfoPageControl.classList.add('basket__head_info__page_control');
        basketHeadInfoPageControlPages.classList.add('basket__head_info__page_control__pages');
        arrowLeft.classList.add('arrow__left');
        arrowLeft.classList.add('small_button');
        arrowRight.classList.add('arrow__right');
        arrowRight.classList.add('small_button');
        basketHeadInfoPageControlPagesProdAmount.classList.add(
            'basket__head_info__page_control__prod_amount'
        );
        arrowLeftProdAmount.classList.add('arrow__left');
        arrowLeftProdAmount.classList.add('small_button');
        arrowRightProdAmount.classList.add('arrow__right');
        arrowRightProdAmount.classList.add('small_button');

        basketHeadInfoHeader.textContent = 'Корзина';
        basketHeadInfoPageControlPages.textContent = 'Страница';
        arrowLeft.innerHTML = '&lt';
        arrowRight.innerHTML = '&gt;';
        basketHeadInfoPageControlPagesProdAmount.textContent = 'Количество товаров на странице';
        arrowLeftProdAmount.innerHTML = '&lt;';
        arrowRightProdAmount.innerHTML = '&gt;';

        basketHeadInfoPageControlPagesProdAmount.appendChild(arrowLeftProdAmount);
        basketHeadInfoPageControlPagesProdAmount.insertAdjacentText('beforeend', `${itemsLimit}`);
        basketHeadInfoPageControlPagesProdAmount.appendChild(arrowRightProdAmount);
        basketHeadInfoPageControlPages.appendChild(arrowLeft);
        basketHeadInfoPageControlPages.insertAdjacentText(
            'beforeend',
            `${pageNumber} / ${pagesCount}`
        );
        basketHeadInfoPageControlPages.appendChild(arrowRight);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPages);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPagesProdAmount);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPages);
        basketHeadInfoPageControl.appendChild(basketHeadInfoPageControlPagesProdAmount);
        basketHead.appendChild(basketHeadInfoHeader);
        basketHead.appendChild(basketHeadInfoPageControl);

        if (mainSection) {
            mainSection.innerHTML = '';
            mainSection.appendChild(wrapperDiv);
            wrapperDiv.appendChild(basketHead);
            wrapperDiv.appendChild(basketCards);
            wrapperDiv.appendChild(basketResult);
        }

        CartPage.cardsRender();
        CartPage.resultRender();
        CartPage.promoRender();
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

                cardMainInfo.classList.add('card__main_info');
                cardMainInfoNum.classList.add('card__main_info_num');
                cardMainInfoPhoto.classList.add('card__main_info__photo');
                cardImage.classList.add('photo');
                cardStars.classList.add('stars');
                cardStars.classList.add(`stars_${GamesCollection[cardIndex].rating}`);
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
            });
        });

        const plusButtonsArray = Array.from(document.querySelectorAll('.num_button_plus'));
        plusButtonsArray.forEach((e) => {
            e.addEventListener('click', () => {
                cart.addItem(+e.id.split('=')[1]);
            });
        });

        const smallButtonsArray = Array.from(document.querySelectorAll('.small_button-item'));
        smallButtonsArray.forEach((e) => {
            e.addEventListener('click', () => {
                cart.removeItem(+e.id.split('=')[1]);
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
        resultPromocodeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 19"><path fill="#ffffff" d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>';
        proposalButton.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.875 122.648" enable-background="new 0 0 122.875 122.648" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z"/></g></svg>'

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
        })

        resultPromocodeButton.addEventListener('click', () => {
          resultPromocodeInput.value = '';
          resultPromocodeButton.classList.remove('info__promocode__button_active');
        })

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
            });
        });
    }
}
