import { ModalSvg } from './modalSvg';
import { CartStorage } from '../../shared/singletons/cart-singleton';
import { createDomElement } from '../../shared/functions/create-dom-element';
import { telInputCheck } from './tel-input-check';
import { nameInputCheck } from './name-input-check';
import { addressInputCheck } from './address-input-check';
import { emailInputCheck } from './email-input-check';
import { cardNumberInputCheck } from './card-number-input-check';
import { cardDateInputCheck } from './card-date-input-check';
import { cardCodeInputCheck } from './card-code-input-check';

export class ModalWindow {
  static nameCheck = false;
  static telCheck = false;
  static addressCheck = false;
  static emailCheck = false;
  static cardNumberCheck = false;
  static cardDateCheck = false;
  static cardCodeCheck = false;

  static modalRender() {
    const mainSection = document.querySelector('.main-section');
    const buyButton = document.querySelector('.info__buy_now');
    const bodyElement = document.querySelector('.body');

    const modalContent = createDomElement('div', 'modal__content');
    const modalCloseButton = createDomElement('div', 'modal__content__close');
    const modalContentHeader = createDomElement('h2');
    const modalContentPersonalData = createDomElement('form', 'modal__content__personal_data');
    const modalDataHeader = createDomElement('h3');
    const nameInput = createDomElement('input', 'modal__content__personal_data__enter', 'input');
    const phoneInput = createDomElement('input', 'modal__content__personal_data__enter', 'input');
    const addressInput = createDomElement('input', 'modal__content__personal_data__enter', 'input');
    const emailInput = createDomElement('input', 'modal__content__personal_data__enter', 'input');
    const creditcardHeader = createDomElement('h3');
    const cardInfoForm = createDomElement('form', 'modal__content__card_info');
    const cardInfoNumber = createDomElement('div', 'modal__content__card_info__number');
    const cardInfoNumberLabel = createDomElement('label', 'card_label');
    const cardInfoNumberInput = createDomElement('input', 'card_input', 'input');
    const cardInfoNumberImg = createDomElement('div', 'card_logo');
    const cardExpireData = createDomElement('div', 'modal__content__card_info__expire_data');
    const cardExpireLabel = createDomElement('label', 'card_label');
    const cardExpireInput = createDomElement('input', 'card_input', 'input');
    const cardCvv = createDomElement('div', 'modal__content__card_info__cvv');
    const cardCvvLabel = createDomElement('label', 'card_label');
    const cardCvvInput = createDomElement('input', 'card_input', 'input');
    const modalSubmit = createDomElement('button', 'modal__content__submit');

    modalContentHeader.textContent = 'Оформление покупки';
    modalCloseButton.innerHTML = ModalSvg.backButton;
    modalDataHeader.textContent = 'Ваши данные';

    if (nameInput instanceof HTMLInputElement) {
      nameInput.placeholder = 'Имя и Фамилия';
    }
    if (phoneInput instanceof HTMLInputElement) {
      phoneInput.placeholder = 'Номер телефона';
    }
    if (addressInput instanceof HTMLInputElement) {
      addressInput.type = 'text';
      addressInput.placeholder = 'Адрес доставки';
    }
    if (emailInput instanceof HTMLInputElement) {
      emailInput.type = 'email';
      emailInput.placeholder = 'Email';
    }

    creditcardHeader.textContent = 'Данные карты';
    cardInfoNumberLabel.textContent = 'Номер';
    if (cardInfoNumberInput instanceof HTMLInputElement) {
      cardInfoNumberInput.type = 'text';
    }
    cardExpireLabel.textContent = 'Действительна до';
    if (cardExpireInput instanceof HTMLInputElement) {
      cardExpireInput.type = 'text';
    }

    cardCvvLabel.textContent = 'Защитный код';
    if (cardCvvInput instanceof HTMLInputElement) {
      cardCvvInput.type = 'text';
    }

    modalSubmit.textContent = 'Подтвердить';

    modalContent.appendChild(modalContentHeader);
    modalContent.prepend(modalCloseButton);
    modalContent.appendChild(modalContentPersonalData);
    modalContentPersonalData.appendChild(modalDataHeader);
    modalContentPersonalData.appendChild(nameInput);
    modalContentPersonalData.appendChild(phoneInput);
    modalContentPersonalData.appendChild(addressInput);
    modalContentPersonalData.appendChild(emailInput);
    modalContent.appendChild(creditcardHeader);
    modalContent.appendChild(cardInfoForm);
    cardInfoForm.appendChild(cardInfoNumber);
    cardInfoNumber.appendChild(cardInfoNumberLabel);
    cardInfoNumberLabel.appendChild(cardInfoNumberImg);
    cardInfoNumberLabel.appendChild(cardInfoNumberInput);
    cardInfoForm.appendChild(cardExpireData);
    cardExpireData.appendChild(cardExpireLabel);
    cardExpireData.appendChild(cardExpireInput);
    cardInfoForm.appendChild(cardCvv);
    cardCvv.appendChild(cardCvvLabel);
    cardCvv.appendChild(cardCvvInput);
    modalContent.appendChild(modalSubmit);

    if (mainSection) {
      mainSection.appendChild(modalContent);
    }

    if (buyButton) {
      buyButton.addEventListener('click', () => {
        if (bodyElement) {
          bodyElement.classList.add('body_modal');
        }
      });
    }

    modalCloseButton.addEventListener('click', () => {
      if (bodyElement) {
        bodyElement.classList.remove('body_modal');
      }
    });

    document.addEventListener('click', (e) => {
      const buyButton = document.querySelector('.info__buy_now');
      const modal = document.querySelector('.modal__content');

      if (buyButton && bodyElement && modal) {
        const withinBoundaries = e.composedPath().includes(modal);
        const withinButtonBoundaries = e.composedPath().includes(buyButton);

        if (!withinBoundaries && !withinButtonBoundaries) {
          bodyElement.classList.remove('body_modal');
        }
      }
    });

    phoneInput.addEventListener('input', () => {
      if (phoneInput instanceof HTMLInputElement) {
        telInputCheck(phoneInput);
      }

    });

    nameInput.addEventListener('input', () => {
      if (nameInput instanceof HTMLInputElement) {
        nameInputCheck(nameInput);
      }
    });

    addressInput.addEventListener('input', () => {
      if (addressInput instanceof HTMLInputElement) {
        addressInputCheck(addressInput);
      }
    });

    emailInput.addEventListener('input', () => {
      if (emailInput instanceof HTMLInputElement) {
        emailInputCheck(emailInput);
      }
    });

    cardInfoNumberInput.addEventListener('input', () => {
      if (cardInfoNumberInput instanceof HTMLInputElement) {
        cardNumberInputCheck(cardInfoNumberInput);
      }
    });

    cardExpireInput.addEventListener('input', () => {
      if (cardExpireInput instanceof HTMLInputElement) {
        cardDateInputCheck(cardExpireInput);
      }
    });

    cardCvvInput.addEventListener('input', () => {
      if (cardCvvInput instanceof HTMLInputElement) {
        cardCodeInputCheck(cardCvvInput);
      }
    });

    modalSubmit.addEventListener('click', () => {
      if (
        ModalWindow.nameCheck &&
        ModalWindow.telCheck &&
        ModalWindow.addressCheck &&
        ModalWindow.emailCheck &&
        ModalWindow.cardNumberCheck &&
        ModalWindow.cardDateCheck &&
        ModalWindow.cardCodeCheck
      ) {
        modalContent.innerHTML = 'Покупка завершена!';
        ModalWindow.nameCheck = false;
        ModalWindow.telCheck = false;
        ModalWindow.addressCheck = false;
        ModalWindow.emailCheck = false;
        ModalWindow.cardNumberCheck = false;
        ModalWindow.cardDateCheck = false;
        ModalWindow.cardCodeCheck = false;
        setTimeout(() => {
          const cart = CartStorage.getInstance();
          cart.cartArray = [];
          window.location.hash = '#store';

          if (bodyElement) {
            bodyElement.classList.remove('body_modal');
          }
        }, 3000);
      } else {
        const arrayOfInputs = Array.from(document.querySelectorAll('.input'));
        if (arrayOfInputs.length) {
          arrayOfInputs.forEach((e) => {
            if (!e.classList.contains('input_true')) {
              e.classList.add('input_show-false');

              setTimeout(() => {
                e.classList.remove('input_show-false');
              }, 600);
            }
          });
        }
      }
    });
  }
}
