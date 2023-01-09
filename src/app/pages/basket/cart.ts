import { queryCheck } from '../../shared/functions/queryCheck';
import { CartStorage } from '../../shared/singletons/cart-singleton';
import { GamesCollection } from '../../../public/gamesCollection';
import { ModalWindow } from '../modal-window/modalWindow';
import { Product } from '../../shared/interfaces/interfaces';
import { ProductPage } from '../product/product';

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
        const basketCardsWrapper = document.createElement('div');
        const basketCards = document.createElement('section');
        const basketResult = document.createElement('section');
        const basketHeader = document.createElement('h2');
        const basketPageControl = document.createElement('div');
        const basketHeadInfoPageControlPages = document.createElement('p');
        const pageNumberDecrease = document.createElement('div');
        const pagesCounter = document.createElement('span');
        const pageNumberIncrease = document.createElement('div');
        const basketHeadInfoPageControlPagesProdAmount = document.createElement('p');
        const productPerPageDecrease = document.createElement('div');
        const productsPerPageShow = document.createElement('span');
        const productPerPageIncrease = document.createElement('div');

        wrapperDiv.classList.add('basket-wrapper');
        basketCardsWrapper.classList.add('basket__cards-wrapper');
        basketCards.classList.add('basket__cards');
        basketResult.classList.add('basket__result');
        basketHeader.classList.add('basket-header');
        basketPageControl.classList.add('basket-page-control');
        basketHeadInfoPageControlPages.classList.add('basket-page-control__pages');
        pageNumberDecrease.classList.add('arrow-left');
        // pageNumberDecrease.classList.add('small_button');
        pagesCounter.classList.add('pages-counter');
        pageNumberIncrease.classList.add('arrow-right');
        // pageNumberIncrease.classList.add('small_button');
        basketHeadInfoPageControlPagesProdAmount.classList.add('basket-page-control__prod_amount');
        productPerPageDecrease.classList.add('arrow-left');
        // productPerPageDecrease.classList.add('small_button');
        productsPerPageShow.classList.add('products-on-page');
        productPerPageIncrease.classList.add('arrow-right');
        // productPerPageIncrease.classList.add('small_button');

        basketHeader.textContent = 'Корзина';
        basketHeadInfoPageControlPages.textContent = 'Страница';
        pageNumberDecrease.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 444.531 444.531"
    xml:space="preserve">
 <g>
   <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
     l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
     c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
     s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
     L213.13,222.409z"/>
 </g>
 </svg>`;
        pageNumberIncrease.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 444.531 444.531"
    xml:space="preserve">
 <g>
   <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
     l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
     c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
     s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
     L213.13,222.409z"/>
 </g>
 </svg>`;
        basketHeadInfoPageControlPagesProdAmount.textContent = 'Количество товаров на странице';
        productPerPageDecrease.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 444.531 444.531"
    xml:space="preserve">
 <g>
   <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
     l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
     c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
     s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
     L213.13,222.409z"/>
 </g>
 </svg>`;
        productPerPageIncrease.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 444.531 444.531"
    xml:space="preserve">
 <g>
   <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
     l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
     c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
     s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
     L213.13,222.409z"/>
 </g>
 </svg>`;

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
        const wrapperDiv = document.querySelector('.basket-wrapper');

        if (cartSection) {
            if (cart.cartArray.length) {
                cartSection.innerHTML = '';
                for (let i = 0; i < cart.cartArray.length; i++) {
                    const cardIndex = cart.cartArray[i].id - 1;
                    const product: Product = GamesCollection[cardIndex];

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
                    const cardButtonMinus = document.createElement('div');
                    const cardInput = document.createElement('input');
                    const cardButtonPlus = document.createElement('div');
                    const cardAmountPrice = document.createElement('div');
                    const cardPrice = document.createElement('p');
                    const cardNewPrice = document.createElement('p');
                    const cardSmallButton = document.createElement('div');
                    const cardDescription = document.createElement('div');

                    basketCard.classList.add('basket__card');
                    cardMainInfo.classList.add('card__main_info');
                    cardMainInfoNum.classList.add('card__main_info_num');
                    cardMainInfoPhoto.classList.add('card__main_info__photo');
                    cardImage.classList.add('card-photo');
                    cardStars.classList.add('stars');
                    cardStars.classList.add(`stars_${product.rating}`);
                    cardStars.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                 <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M814.5,683.2C744.1,542.4,684.1,426.4,682,422.3c-4.1-4.1-130.5-24.9-281.7-47.6c-153.2-22.8-285.8-49.7-298.2-62.1c-14.5-14.5,45.6-87,192.6-229.9L508-124.4l-47.6-287.9c-24.8-157.4-37.3-294.1-29-302.4c8.3-8.3,134.6,45.6,277.5,120.1l263,136.7l263-136.7c142.9-74.5,269.2-130.5,277.5-120.1c8.3,8.3-6.2,145-33.1,304.4l-47.6,289.9l198.8,188.4c118.1,109.8,200.9,205,200.9,227.8c0,20.7-4.1,39.3-10.4,39.3c-14.5,0-420.4,60.1-503.2,72.5c-64.2,12.4-74.6,26.9-190.5,271.3C1048.5,844.8,994.7,935.9,974,935.9C953.3,935.9,895.3,844.8,814.5,683.2z"/><path d="M2955.9,911.1c-12.4-14.5-74.5-130.5-138.8-258.9c-105.6-213.3-120.1-231.9-182.3-244.4c-37.3-6.2-161.5-24.9-275.4-41.4c-113.9-18.6-215.4-41.4-227.8-53.8c-12.4-12.4,53.8-93.2,190.5-231.9l209.2-211.2l-49.7-279.6c-33.1-186.4-43.5-283.7-29-298.2c14.5-14.5,105.6,22.8,279.6,111.8L2991.1-462L3250-596.6c165.7-84.9,265.1-126.3,277.5-113.9c14.5,14.5,2.1,120.1-29,300.3l-49.7,279.6l211.2,211.2c149.1,153.3,203,219.5,188.5,234c-12.4,12.4-147,41.4-300.3,64.2s-279.6,47.6-283.7,55.9c-47.6,113.9-248.5,490.8-265.1,497C2987,933.8,2966.3,925.6,2955.9,911.1z"/><path d="M4873.7,683.2c-70.4-140.8-130.5-256.8-132.5-260.9c-4.1-4.1-130.5-24.9-281.7-47.6c-153.3-22.8-285.8-49.7-298.2-62.1c-14.5-14.5,45.6-87,192.6-229.9l215.4-209.2l-47.6-285.8c-26.9-157.4-41.4-294.1-31.1-302.4c8.3-8.3,134.6,45.6,277.5,120.1l263,136.7l263-136.7c142.9-74.5,269.2-130.5,277.5-120.1c8.3,8.3-6.2,145-33.1,304.4l-47.6,289.9l198.8,188.4c118,109.8,200.9,205,200.9,227.8c0,20.7-4.2,39.3-10.4,39.3c-14.5,0-420.4,58-501.2,72.5c-62.1,10.4-74.6,29-190.5,269.2c-80.8,167.8-134.6,258.9-155.3,258.9C5012.4,935.9,4954.4,844.8,4873.7,683.2z"/><path d="M6959.1,890.3c-16.6-26.9-74.6-140.8-128.4-254.7c-53.9-113.9-99.4-209.2-101.5-211.2c-2.1-4.1-126.3-22.8-279.6-45.6c-151.2-22.8-285.8-51.8-298.2-64.2c-14.5-14.5,39.4-80.8,188.5-234l211.3-211.2l-51.8-279.6c-33.1-186.4-43.5-283.7-29-298.2c14.5-14.5,105.6,22.8,279.6,111.8L7008.9-462l258.9-134.6c174-89.1,265.1-126.3,279.6-111.8c14.5,14.5,4.2,111.8-29,298.2l-51.8,279.6l211.3,211.2c140.8,142.9,202.9,219.5,188.5,234c-10.4,10.4-145,39.3-298.2,62.1c-161.5,24.9-283.7,53.8-287.9,68.3c-31.1,84.9-244.4,480.5-265.1,486.7C7002.7,935.9,6977.8,917.3,6959.1,890.3z"/><path d="M8870.7,677c-116-240.2-128.4-258.9-190.5-269.2c-37.3-6.2-163.6-24.9-283.7-41.4c-120.1-18.6-225.7-41.4-238.2-53.8c-12.4-12.4,51.8-91.1,194.7-229.9l213.3-209.2l-47.6-285.8c-26.9-157.4-41.4-294.1-31.1-302.4c8.3-8.3,134.6,45.6,277.5,120.1l263,136.7l263-136.7c142.9-74.5,269.2-128.4,277.5-120.1c10.4,8.3-4.1,145-31.1,302.4l-47.6,283.7l213.3,211.2c149.1,142.9,209.2,215.4,194.7,229.9c-12.4,12.4-145,39.3-298.2,62.1c-151.2,22.8-279.6,43.5-283.7,47.6c-4.2,4.1-62.1,122.2-130.5,260.9c-82.8,165.7-136.7,252.7-157.4,252.7C9005.3,935.9,8951.4,848.9,8870.7,677z"/></g></g>
                 </svg>`;
                    cardMainInfoHeadInfo.classList.add('card__main_info__head_info');
                    cardMainInfoAmount.classList.add('card__main_info__amount');
                    cardMainInfoAmountSpecial.classList.add('card__main_info__amount__special');
                    cardMainInfoAmountProducts.classList.add(
                        'card__main_info__amount__of_products'
                    );
                    cardButtonMinus.classList.add('card-decrease');
                    cardInput.classList.add('number_of_products');
                    cardButtonPlus.classList.add('card-increase');
                    cardAmountPrice.classList.add('card__main_info__amount__price');
                    cardPrice.classList.add('price');
                    cardNewPrice.classList.add('new_price');
                    cardSmallButton.classList.add('card__main_info__cross');
                    // cardSmallButton.classList.add('small_button');
                    cardSmallButton.classList.add('small_button-item');
                    cardDescription.classList.add('card__description');

                    cardMainInfoNum.textContent = `- ${i + 1} -`;
                    cardImage.src = product.thumbnail;
                    cardImage.alt = product.title_ru;
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

                    cardButtonMinus.innerHTML = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M819.2 435.2H204.8c-56.32 0-102.4 46.08-102.4 102.4s46.08 102.4 102.4 102.4h614.4c56.32 0 102.4-46.08 102.4-102.4s-46.08-102.4-102.4-102.4z m0 153.6H204.8c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2h614.4c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2z"/></svg>`;
                    cardButtonMinus.id = `minus=${product.id}`;
                    cardInput.type = 'text';
                    cardInput.disabled = true;
                    cardInput.readOnly = true;
                    cardInput.value = `${cart.cartArray[i].quantity}`;
                    cardButtonPlus.innerHTML = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M847.854371 623.409582h-224.336414v224.444789c0 61.990545-50.249912 112.168207-112.276583 112.168207-61.918295 0-112.168207-50.177662-112.168207-112.168207v-224.444789H174.592253c-61.918295 0-112.168207-50.177662-112.168207-112.168208 0-62.02667 50.249912-112.168207 112.168207-112.168207h224.444789V174.628378c0-62.02667 50.249912-112.204332 112.168207-112.204332 61.990545 0 112.276582 50.177662 112.276583 112.204332v224.444789h224.372539c61.990545 0 112.276582 50.177662 112.276582 112.168207s-50.249912 112.168207-112.276582 112.168208zM455.175333 847.890496c0 30.959148 25.070768 56.138291 56.029916 56.138291 31.031398 0 56.138291-25.179143 56.138292-56.138291v-280.51083h280.51083c31.031398 0 56.138291-25.179143 56.138291-56.138292s-25.106893-56.138291-56.138291-56.138291h-280.51083V174.628378c0-30.959148-25.070768-56.138291-56.138292-56.138291-30.959148 0-56.029916 25.179143-56.029916 56.138291v280.51083H174.592253c-30.959148 0-56.138291 25.179143-56.138291 56.138291s25.179143 56.138291 56.138291 56.138292H455.175333v280.474705z"/></svg>`;
                    cardButtonPlus.id = `plus=${product.id}`;
                    cardPrice.textContent = `${product.price}$`;

                    cardSmallButton.innerHTML = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l512-512c17.066667-17.066667 42.666667-17.066667 59.733334 0s17.066667 42.666667 0 59.733334l-512 512c-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"  /><path d="M768 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8l-512-512c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733334 0l512 512c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"  /></svg>`;
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

                    const copyCard = basketCard.cloneNode(true);
                    cartSection.appendChild(copyCard);
                }
            } else if (wrapperDiv) {
                wrapperDiv.innerHTML = `<span style="  height: 70vw;
        line-height: 35vw;
        text-align: center;">Корзина пуста</span>`;
            }
        }

        const minusButtonsArray = Array.from(document.querySelectorAll('.card-decrease'));
        minusButtonsArray.forEach((e) => {
            e.addEventListener('click', () => {
                cart.decreaseQuantity(+e.id.split('=')[1]);
                CartPage.cardsRender();
            });
        });

        const plusButtonsArray = Array.from(document.querySelectorAll('.card-increase'));
        plusButtonsArray.forEach((e) => {
            e.addEventListener('click', () => {
                cart.addItem(+e.id.split('=')[1]);
                CartPage.cardsRender();
            });
        });

        const smallButtonsArray = Array.from(document.querySelectorAll('.small_button-item'));
        smallButtonsArray.forEach((e) => {
            e.addEventListener('click', () => {
                cart.removeItem(+e.id.split('=')[1]);
                CartPage.cardsRender();
            });
        });

        const cardsImages = Array.from(document.querySelectorAll('.card-photo'));
        cardsImages.forEach((e) => {
          e.addEventListener('click', () => {
                ProductPage.pageRender(+e.id.split('-')[1]);
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
        const buyButton = document.createElement('div');

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
        proposalWrapper.insertAdjacentText(
            'afterbegin',
            'Промокоды: newRS, ktulhu666, tabletop2023, inviteRS, salesalesale, student1'
        );
        proposalPromo.classList.add('proposal__promocode');
        proposalButton.classList.add('proposal__button');
        promocodes.classList.add('promocodes');
        promocodes.classList.add('hide');
        resultPromocodeInput.classList.add('info__promocode__enter');
        resultPromocodeButton.classList.add('info__promocode__button');
        buyButton.classList.add('info__buy_now');

        basketResultHeader.textContent = 'Итого:';
        resultInfoPrice.textContent = 'На сумму: ';
        resultPromocodeInput.type = 'text';
        resultPromocodeInput.placeholder = 'Введите промокод';
        resultPromocodeButton.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 19"><path fill="#ffffff" d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>';
        proposalButton.innerHTML =
            '<svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"  /></svg>';

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
            promocodes.innerHTML = 'Примененные промокоды:';

            if (!cart.promoArray.length) {
                if (!promocodes.classList.contains('hide')) {
                    promocodes.classList.add('hide');
                }
            } else {
                promocodes.classList.remove('hide');
            }

            for (let i = 0; i < cart.promoArray.length; i++) {
                const promocode = document.createElement('p');
                const promocodeDeleteButton = document.createElement('div');

                promocode.classList.add('promocode');
                promocodeDeleteButton.classList.add('small_button');
                promocodeDeleteButton.classList.add('small_button-promo');
                promocodeDeleteButton.id = `promoId=${cart.promoArray[i].id}`;

                promocode.textContent = `${cart.promoArray[i].title_ru} на ${cart.promoArray[i].discount}%`;
                promocodeDeleteButton.innerHTML = `<svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z"  /></svg>`;

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

    static changeHash() {
        window.location.hash = `#basket?limit=${this.itemsLimit}&page=${this.pageNumber}`;
    }
}
