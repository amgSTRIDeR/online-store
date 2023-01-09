import { CartStorage } from '../../shared/singletons/cart-singleton';
import { GamesCollection } from '../../../public/gamesCollection';
import { ModalWindow } from '../modal-window/modalWindow';
import { Product } from '../../shared/interfaces/interfaces';
import { CartPage } from '../basket/cart';

const cart = CartStorage.getInstance();

export class ProductPage {
  static pageRender(productId: number) {
    window.location.hash = `#product-details/${productId}`;
    const product: Product = GamesCollection[productId - 1];

    const mainSection = document.querySelector('.main-section');
    const breadCrumps = document.createElement('h2');
    const about = document.createElement('section');
    const main = document.createElement('div');
    const mainPhotoWrapper = document.createElement('div');
    const mainPhoto = document.createElement('img');
    const productRating = document.createElement('p');
    const mainInfo = document.createElement('div');
    const mainInfoCategory = document.createElement('p');
    const mainInfoBrand = document.createElement('p');
    const mainInfoPlayers = document.createElement('p');
    const mainInfoTime = document.createElement('p');
    const mainInfoStock = document.createElement('p');
    const mainInfoPrice = document.createElement('p');
    const mainInfoAmount = document.createElement('div');
    const addDiscordButton = document.createElement('button');
    const buyNowButton = document.createElement('button');
    const gallery = document.createElement('div');
    const description = document.createElement('div');

    breadCrumps.classList.add('bread-crumps');
    about.classList.add('about');
    main.classList.add('about__main_info');
    mainPhotoWrapper.classList.add('about__main_info__photo');
    mainPhoto.classList.add('about__main_info__photo__pic');
    productRating.classList.add('stars');
    productRating.classList.add(`stars_${product.rating}`);
    mainInfo.classList.add('about__main_info__info');
    mainInfoAmount.classList.add('about__main_info__info__amount');
    addDiscordButton.classList.add('add-discord');
    buyNowButton.classList.add('buy-button');
    gallery.classList.add('about__gallery');
    description.classList.add('about__desctiption');

    breadCrumps.textContent = `Каталог / ${product.category_ru[0]} / ${product.brand} / ${product.title_ru}`;
    mainPhoto.src = `${product.images[0]}`;
    mainPhoto.alt = '';
    mainInfoCategory.textContent = `Категория: ${product.category_ru.reduce(
      (s, c) => s + `, ${c}`
    )}`;
    mainInfoBrand.textContent = `Производитель: ${product.brand}`;
    mainInfoPlayers.textContent = `Количество игроков: ${product.gamers.join(' - ')}`;
    mainInfoTime.textContent = `Время игры: ${product.GameTime.join(' - ')} минут`;
    mainInfoStock.textContent = `На складе: ${cart.getItemStockNumber(product.id)}`;

    if (product.discountPercentage > 1) {
      mainInfoPrice.innerHTML = `<span style="text-decoration: line-through">${product.price
        }$</span>&nbsp;${Math.round(product.price / product.discountPercentage)}$`;
    } else {
      mainInfoPrice.innerHTML = `${product.price}$`;
    }

    addDiscordButton.textContent = `${cart.getNumberOfItemsInCart(productId) === 0
        ? 'Добавить в корзину'
        : 'Убрать из корзины'
      }`;
    buyNowButton.textContent = 'Купить сейчас';
    description.textContent = `${product.description_ru}`;

    about.appendChild(main);
    main.appendChild(mainPhotoWrapper);
    mainPhotoWrapper.appendChild(mainPhoto);
    mainPhotoWrapper.appendChild(productRating);
    main.appendChild(mainInfo);
    mainInfo.appendChild(mainInfoCategory);
    mainInfo.appendChild(mainInfoBrand);
    mainInfo.appendChild(mainInfoPlayers);
    mainInfo.appendChild(mainInfoTime);
    mainInfo.appendChild(mainInfoStock);
    mainInfo.appendChild(mainInfoPrice);
    mainInfo.appendChild(mainInfoAmount);
    mainInfoAmount.appendChild(addDiscordButton);
    mainInfo.appendChild(buyNowButton);
    about.appendChild(gallery);

    for (let i = 0; i < product.images.length; i++) {
      const galleryPhoto = document.createElement('img');
      galleryPhoto.alt = '';
      galleryPhoto.classList.add('gallery__photo');
      galleryPhoto.src = `${product.images[i]}`;

      const copyCard = galleryPhoto.cloneNode(true);
      gallery.appendChild(copyCard);
    }

    about.appendChild(description);

    if (mainSection) {
      mainSection.innerHTML = '';
      mainSection.appendChild(breadCrumps);
      mainSection.appendChild(about);
    }

    document.querySelectorAll('.gallery__photo').forEach((e) => {
      if (e instanceof HTMLImageElement) {
        e.addEventListener('click', () => {
          mainPhoto.src = `${e.src}`;
        });
      }
    });

    addDiscordButton.addEventListener('click', () => {
      if (cart.getNumberOfItemsInCart(productId) === 0) {
        cart.addItem(productId);
        addDiscordButton.textContent = 'Убрать из корзины';
        mainInfoStock.textContent = `На складе: ${cart.getItemStockNumber(product.id)}`;
      } else {
        cart.removeItem(productId);
        addDiscordButton.textContent = 'Добавить в корзину';
        mainInfoStock.textContent = `На складе: ${cart.getItemStockNumber(product.id)}`;
      }
    });

    buyNowButton.addEventListener('click', () => {
      if (cart.getNumberOfItemsInCart(productId) === 0) {
        cart.addItem(productId);
      }
      CartPage.pageRender('basket');
      ModalWindow.modalRender();
      const bodyElement = document.querySelector('.body');
      if (bodyElement) {
        setTimeout(() => {
          bodyElement.classList.add('body_modal');
        }, 100)
      }
    });

    cart.renewCartWidget();
    cart.renewSumWidget();
  }
}
