import { CartStorage } from '../../shared/singletons/cart-singleton';
import { CartSvg } from './cartSvg';

export function basketPromoRender() {
    const promocodes = document.querySelector('.promocodes');
    const cart = CartStorage.getInstance();

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
            promocodeDeleteButton.innerHTML = CartSvg.PromocodeRemove;

            promocode.appendChild(promocodeDeleteButton);

            const copyCard = promocode.cloneNode(true);
            promocodes.appendChild(copyCard);
        }
    }

    const smallPromoButtonsArray = Array.from(document.querySelectorAll('.small_button-promo'));
    smallPromoButtonsArray.forEach((e) => {
        e.addEventListener('click', () => {
            cart.removePromo(+e.id.split('=')[1]);
            basketPromoRender();
        });
    });
}
