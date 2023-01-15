import { GamesCollection } from '../../../public/gamesCollection';
import { createDomElement } from '../../shared/functions/create-dom-element';
import { Product } from '../../shared/interfaces/interfaces';
import { CartStorage } from '../../shared/singletons/cart-singleton';
import { ProductPage } from '../product/product';
import { CartPage } from './cart';
import { CartSvg } from './cartSvg';

export function basketCardsRender() {
    const cartSection = document.querySelector('.basket__cards');
    const wrapperDiv = document.querySelector('.basket-wrapper');
    const cart = CartStorage.getInstance();

    if (cartSection) {
        if (cart.cartArray.length) {
            cartSection.innerHTML = '';
            for (let i = 0; i < cart.cartArray.length; i++) {
                const cardIndex = cart.cartArray[i].id - 1;
                const product: Product = GamesCollection[cardIndex];

                const basketCard = createDomElement('div', 'basket__card');
                const cardMainInfo = createDomElement('div', 'card__main_info');
                const cardMainInfoNum = createDomElement('h3', 'card__main_info_num');
                const cardMainInfoPhoto = createDomElement('div', 'card__main_info__photo');
                const cardImage = createDomElement('img', 'card-photo');
                const cardStars = createDomElement('div', 'stars', `stars_${product.rating}`);
                const cardMainInfoHeadInfo = createDomElement('div', 'card__main_info__head_info');
                const headInfoName = createDomElement('p');
                const headInfoCategory = createDomElement('p');
                const headInfoManufactor = createDomElement('p');
                const headInfoPlayers = createDomElement('p');
                const headInfoTime = createDomElement('p');
                const headInfoStock = createDomElement('p');
                const cardMainInfoAmount = createDomElement('div', 'card__main_info__amount');
                const cardMainInfoAmountSpecial = createDomElement(
                    'p',
                    'card__main_info__amount__special'
                );
                const cardMainInfoAmountProducts = createDomElement(
                    'div',
                    'card__main_info__amount__of_products'
                );
                const cardButtonMinus = createDomElement('div', 'card-decrease');
                const cardInput = createDomElement('input', 'number_of_products');
                const cardButtonPlus = createDomElement('div', 'card-increase');
                const cardAmountPrice = createDomElement('div', 'card__main_info__amount__price');
                const cardPrice = createDomElement('p', 'price');
                const cardNewPrice = createDomElement('p', 'new_price');
                const cardSmallButton = createDomElement(
                    'div',
                    'card__main_info__cross',
                    'small_button-item'
                );
                const cardDescription = createDomElement('div', 'card__description');

                cardStars.innerHTML = CartSvg.Stars;

                cardMainInfoNum.textContent = `- ${i + 1} -`;
                if (cardImage instanceof HTMLImageElement) {
                    cardImage.src = product.thumbnail;
                    cardImage.alt = product.title_ru;
                }
                cardImage.id = `product-${product.id}`;
                cardImage.title = `Подробнее о ${product.title_ru}`;
                headInfoName.textContent = `Название: ${product.title_ru}`;
                headInfoCategory.textContent = `Категория: ${product.category_ru.join(', ')}`;
                headInfoManufactor.textContent = `Производитель: ${product.brand}`;
                headInfoPlayers.textContent = `Количество игроков: ${product.gamers.join('-')}`;
                headInfoTime.textContent = `Время игры: ${product.GameTime.join('-')} минут`;
                headInfoStock.textContent = `На складе: ${cart.getItemStockNumber(product.id)}`;

                if (product.discountPercentage > 1) {
                    cardMainInfoAmountSpecial.textContent = 'Акция!';
                    cardNewPrice.textContent = `${Math.round(
                        product.price / product.discountPercentage
                    )}$`;
                    cardNewPrice.insertAdjacentHTML('afterbegin', '&nbsp;');
                    cardPrice.style.textDecoration = 'line-through';
                }

                cardButtonMinus.innerHTML = CartSvg.Minus;
                cardButtonMinus.id = `minus=${product.id}`;
                if (cardInput instanceof HTMLInputElement) {
                    cardInput.type = 'text';
                    cardInput.disabled = true;
                    cardInput.readOnly = true;
                    cardInput.value = `${cart.cartArray[i].quantity}`;
                }
                cardButtonPlus.innerHTML = CartSvg.Plus;
                cardButtonPlus.id = `plus=${product.id}`;
                cardPrice.textContent = `${product.price}$`;

                cardSmallButton.innerHTML = CartSvg.Cross;
                cardSmallButton.id = `small=${product.id}`;
                cardDescription.textContent = `${product.description_ru}`;

                basketCard.appendChild(cardMainInfo);
                basketCard.appendChild(cardDescription);
                cardMainInfo.appendChild(cardMainInfoNum);
                cardMainInfo.appendChild(cardMainInfoPhoto);
                cardMainInfo.appendChild(cardMainInfoHeadInfo);
                cardMainInfo.appendChild(cardMainInfoAmount);
                cardMainInfoPhoto.appendChild(cardImage);
                cardMainInfoPhoto.appendChild(cardStars);
                cardMainInfoHeadInfo.appendChild(headInfoName);
                cardMainInfoHeadInfo.appendChild(headInfoCategory);
                cardMainInfoHeadInfo.appendChild(headInfoManufactor);
                cardMainInfoHeadInfo.appendChild(headInfoPlayers);
                cardMainInfoHeadInfo.appendChild(headInfoTime);
                cardMainInfoHeadInfo.appendChild(headInfoStock);
                cardMainInfoAmount.appendChild(cardSmallButton);
                cardMainInfoAmount.appendChild(cardMainInfoAmountSpecial);
                cardMainInfoAmount.appendChild(cardMainInfoAmountProducts);
                cardMainInfoAmount.appendChild(cardAmountPrice);
                cardMainInfoAmountProducts.appendChild(cardButtonMinus);
                cardMainInfoAmountProducts.appendChild(cardInput);
                cardMainInfoAmountProducts.appendChild(cardButtonPlus);
                cardAmountPrice.appendChild(cardPrice);
                cardAmountPrice.appendChild(cardNewPrice);

                const copyCard = basketCard.cloneNode(true) as HTMLElement;

                const cardButtonMinusCopy = copyCard.querySelector('.card-decrease');
                if (cardButtonMinusCopy instanceof HTMLDivElement) {
                    cardButtonMinusCopy.addEventListener('click', () => {
                        cart.decreaseQuantity(+cardButtonMinusCopy.id.split('=')[1]);
                        CartPage.pageRenew();
                    });
                }

                const cardButtonPlusCopy = copyCard.querySelector('.card-increase');
                if (cardButtonPlusCopy instanceof HTMLDivElement) {
                    cardButtonPlusCopy.addEventListener('click', () => {
                        cart.addItem(+cardButtonPlusCopy.id.split('=')[1]);
                        CartPage.pageRenew();
                    });
                }

                const cardSmallButtonCopy = copyCard.querySelector('.small_button-item');
                if (cardSmallButtonCopy instanceof HTMLDivElement) {
                  cardSmallButtonCopy.addEventListener('click', () => {
                        cart.removeItem(+cardSmallButtonCopy.id.split('=')[1]);
                        CartPage.pageRenew();
                    });
                }

                const cardImageCopy = copyCard.querySelector('.card-photo');
                if (cardImageCopy instanceof HTMLImageElement) {
                  cardImageCopy.addEventListener('click', () => {
                        ProductPage.pageRender(+cardImageCopy.id.split('-')[1]);
                    });
                }

                cartSection.appendChild(copyCard);
            }
        } else if (wrapperDiv) {
            wrapperDiv.innerHTML = `<span style="  height: 70vw;
        line-height: 35vw;
        text-align: center;">Корзина пуста</span>`;
        }
    }
}
