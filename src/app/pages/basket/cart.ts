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
        const resultPromocodeInput = document.createElement('input');
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
        promocodes.classList.add('promocodes');
        resultPromocodeInput.classList.add('info__promocode__enter');
        buyButton.classList.add('info__buy_now');

        basketResultHeader.textContent = 'Итого:';
        resultInfoPrice.textContent = 'На сумму: ';
        resultPromocodeInput.type = 'text';
        resultPromocodeInput.placeholder = 'Введите промокод (newRS, salesalesale)';
        buyButton.textContent = 'Купить сейчас';

        resultPromocodeInput.addEventListener('change', () => {
            cart.addPromo(resultPromocodeInput.value);
        });

        basketResultInfo.appendChild(resultInfo);
        basketResultInfo.appendChild(resultPromocode);
        resultInfo.appendChild(resultInfoAmount);
        resultInfoPrice.appendChild(purePrice);
        resultInfoPrice.appendChild(promoPrice);
        resultInfo.appendChild(resultInfoPrice);
        resultPromocode.appendChild(resultPromocodeInput);
        resultPromocode.appendChild(promocodes);

        if (basketResult) {
            basketResult.appendChild(basketResultHeader);
            basketResult.appendChild(basketResultInfo);
            basketResult.appendChild(buyButton);
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
