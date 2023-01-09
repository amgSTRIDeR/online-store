import { CreditCardsSvg } from '../../shared/enums/creditCardsSvg';
import { CartStorage } from '../../shared/singletons/cart-singleton';

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

        const modalContent = document.createElement('div');
        const modalContentHeader = document.createElement('h2');
        const modalCloseButton = document.createElement('div');
        const modalContentPersonalData = document.createElement('form');
        const modalDataHeader = document.createElement('h3');
        const nameInput = document.createElement('input');
        const phoneInput = document.createElement('input');
        const addressInput = document.createElement('input');
        const emailInput = document.createElement('input');
        const creditcardHeader = document.createElement('h3');
        const cardInfoForm = document.createElement('form');
        const cardInfoNumber = document.createElement('div');
        const cardInfoNumberLabel = document.createElement('label');
        const cardInfoNumberInput = document.createElement('input');
        const cardInfoNumberImg = document.createElement('div');
        const cardExpireData = document.createElement('div');
        const cardExpireLabel = document.createElement('label');
        const cardExpireInput = document.createElement('input');
        const cardCvv = document.createElement('div');
        const cardCvvLabel = document.createElement('label');
        const cardCvvInput = document.createElement('input');
        const modalSubmit = document.createElement('button');

        modalContent.classList.add('modal__content');
        modalContentHeader.textContent = 'Оформление покупки';
        modalCloseButton.classList.add('modal__content__close');
        modalCloseButton.innerHTML = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M638.238123 372.44764c-55.902194 0-19.446911-94.093005-19.446911-94.093005l-0.12075 0.134053c16.712637-38.926568 9.251711-85.760223-22.531156-117.54309-41.661865-41.632189-109.202121-41.632189-150.888546 0L167.746492 438.451914c-19.993357 20.006659-31.228235 47.134507-31.228235 75.426877 0 28.30158 11.234879 55.43045 31.228235 75.461669l277.503245 277.499152c20.844747 20.812001 48.15372 31.224142 75.452459 31.224142 27.28646 0 54.614875-10.412141 75.436086-31.224142 31.762401-31.757285 39.231513-78.503958 22.594601-117.418246l0.057305 0.071631c0 0-36.45426-94.155427 19.447934-94.155427l126.925784 2.717901c67.400063 9.377578 125.729539-44.567032 125.729539-144.163377l0 0c0-96.717785-63.396889-152.390759-125.728516-144.029324L638.238123 372.44764zM765.162884 366.695636"  /></svg>`;
        modalContentPersonalData.classList.add('modal__content__personal_data');
        modalDataHeader.textContent = 'Ваши данные';
        nameInput.classList.add('modal__content__personal_data__enter');
        nameInput.classList.add('input');
        nameInput.placeholder = 'Имя и Фамилия';
        phoneInput.classList.add('modal__content__personal_data__enter');
        phoneInput.classList.add('input');
        phoneInput.placeholder = 'Номер телефона';
        addressInput.classList.add('modal__content__personal_data__enter');
        addressInput.classList.add('input');
        addressInput.type = 'text';
        addressInput.placeholder = 'Адрес доставки';
        emailInput.classList.add('modal__content__personal_data__enter');
        emailInput.classList.add('input');
        emailInput.type = 'email';
        emailInput.placeholder = 'Email';
        creditcardHeader.textContent = 'Данные карты';
        cardInfoForm.classList.add('modal__content__card_info');
        cardInfoNumber.classList.add('modal__content__card_info__number');
        cardInfoNumberLabel.classList.add('card_label');
        cardInfoNumberLabel.textContent = 'Номер';
        cardInfoNumberInput.classList.add('card_input');
        cardInfoNumberInput.classList.add('input');
        cardInfoNumberInput.type = 'text';
        cardInfoNumberImg.classList.add('card_logo');
        cardExpireData.classList.add('modal__content__card_info__expire_data');
        cardExpireLabel.classList.add('card_label');
        cardExpireLabel.textContent = 'Действительна до';
        cardExpireInput.classList.add('card_input');
        cardExpireInput.classList.add('input');
        cardExpireInput.type = 'text';
        cardCvv.classList.add('modal__content__card_info__cvv');
        cardCvvLabel.classList.add('card_label');
        cardCvvLabel.textContent = 'Защитный код';
        cardCvvInput.classList.add('card_input');
        cardCvvInput.classList.add('input');
        cardCvvInput.type = 'text';
        modalSubmit.classList.add('modal__content__submit');
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
            ModalWindow.telInputCheck(phoneInput);
        });

        nameInput.addEventListener('input', () => {
            ModalWindow.nameInputCheck(nameInput);
        });

        addressInput.addEventListener('input', () => {
            ModalWindow.addressInputCheck(addressInput);
        });

        emailInput.addEventListener('input', () => {
            ModalWindow.emailInputCheck(emailInput);
        });

        cardInfoNumberInput.addEventListener('input', () => {
            ModalWindow.cardNumberInputCheck(cardInfoNumberInput);
        });

        cardExpireInput.addEventListener('input', () => {
            ModalWindow.cardDateInputCheck(cardExpireInput);
        });

        cardCvvInput.addEventListener('input', () => {
            ModalWindow.cardCodeInputCheck(cardCvvInput);
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

    static telInputCheck(inputElement: HTMLInputElement) {
        let inputArray = inputElement.value.split('');
        ModalWindow.telCheck = false;

        if (inputArray.length && inputArray[0] !== '+') {
            inputArray.unshift('+');
        }

        inputArray = inputArray
            .map((e, i) => (i === 0 ? e : Number.isInteger(+e) ? e : ''))
            .join('')
            .split('');

        inputElement.value = inputArray.join('');

        if (inputArray.length >= 10) {
            ModalWindow.telCheck = true;
        }

        if (ModalWindow.telCheck === true) {
            inputElement.classList.add('input_true');
            inputElement.classList.remove('input_false');
        } else {
            inputElement.classList.add('input_false');
            inputElement.classList.remove('input_true');
        }
    }

    static nameInputCheck(inputElement: HTMLInputElement) {
        const inputText = inputElement.value;
        ModalWindow.nameCheck = false;

        const nameExp = /^[a-zа-я]{3,}( [a-zа-я]{3,}){1,}$/i;
        if (inputText.match(nameExp)) {
            ModalWindow.nameCheck = true;
        }

        if (ModalWindow.nameCheck === true) {
            inputElement.classList.add('input_true');
            inputElement.classList.remove('input_false');
        } else {
            inputElement.classList.add('input_false');
            inputElement.classList.remove('input_true');
        }
    }

    static addressInputCheck(inputElement: HTMLInputElement) {
        const inputText = inputElement.value;
        ModalWindow.addressCheck = false;

        const addressExp = /^([а-яА-Яa-zA-Z0-9]{5,})( [а-яА-Яa-zA-Z0-9]{5,}){2,}$/;
        if (inputText.match(addressExp)) {
            ModalWindow.addressCheck = true;
        }

        if (ModalWindow.addressCheck === true) {
            inputElement.classList.add('input_true');
            inputElement.classList.remove('input_false');
        } else {
            inputElement.classList.add('input_false');
            inputElement.classList.remove('input_true');
        }
    }

    static emailInputCheck(inputElement: HTMLInputElement) {
        ModalWindow.emailCheck = false;
        const inputArray = inputElement.value.split('');

        const lowerCaseArray = inputArray.map((e) => (e = e.toLowerCase()));
        inputElement.value = lowerCaseArray.join('');

        const inputText = inputElement.value;

        const emailExp =
            /^([a-z\d]+)(\.[a-z]+|-[a-z]+|_[a-z]+)?@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8}?)$/;
        if (inputText.match(emailExp)) {
            ModalWindow.emailCheck = true;
        }

        if (ModalWindow.emailCheck === true) {
            inputElement.classList.add('input_true');
            inputElement.classList.remove('input_false');
        } else {
            inputElement.classList.add('input_false');
            inputElement.classList.remove('input_true');
        }
    }

    static cardNumberInputCheck(inputElement: HTMLInputElement) {
        const cardInfoNumberImg = document.querySelector('.card_logo');

        ModalWindow.cardNumberCheck = false;
        const inputArray = inputElement.value.split('').filter((char) => Number.isInteger(+char));

        if (inputArray.length >= 16) {
            inputArray.length = 16;
            ModalWindow.cardNumberCheck = true;
        }

        if (inputArray.length >= 5) {
            inputArray.splice(4, 0, '-');
        }
        if (inputArray.length >= 10) {
            inputArray.splice(9, 0, '-');
        }
        if (inputArray.length >= 15) {
            inputArray.splice(14, 0, '-');
        }

        inputElement.value = inputArray.join('');

        if (cardInfoNumberImg) {
            switch (+inputArray[0]) {
                case 3:
                    cardInfoNumberImg.innerHTML = CreditCardsSvg.AmericanExpress;
                    break;
                case 4:
                    cardInfoNumberImg.innerHTML = CreditCardsSvg.Visa;
                    break;
                case 5:
                    cardInfoNumberImg.innerHTML = CreditCardsSvg.MasterCard;
                    break;
                case 6:
                    cardInfoNumberImg.innerHTML = CreditCardsSvg.Maestro;
                    break;
                default:
                    cardInfoNumberImg.innerHTML = '';
            }
        }

        if (ModalWindow.cardNumberCheck === true) {
            inputElement.classList.add('input_true');
            inputElement.classList.remove('input_false');
        } else {
            inputElement.classList.add('input_false');
            inputElement.classList.remove('input_true');
        }
    }

    static cardDateInputCheck(inputElement: HTMLInputElement) {
        ModalWindow.cardDateCheck = false;
        let inputArray = inputElement.value.split('/').join('').split('');

        inputArray = inputArray
            .map((e) => (Number.isInteger(+e) ? e : ''))
            .join('')
            .split('');

        if (inputArray.length >= 4) {
            inputArray.length = 4;
        }

        if (inputArray.length === 4) {
            const monthNumber = +(inputArray[0] + inputArray[1]);
            const dayNumber = +(inputArray[2] + inputArray[3]);

            switch (monthNumber) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    if (dayNumber <= 31) {
                        ModalWindow.cardDateCheck = true;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if (dayNumber <= 30) {
                        ModalWindow.cardDateCheck = true;
                    }
                    break;
                case 2:
                    if (dayNumber <= 29) {
                        ModalWindow.cardDateCheck = true;
                    }
                    break;
            }
        }

        if (inputArray.length >= 3) {
            inputArray.splice(2, 0, '/');
        }

        inputElement.value = inputArray.join('');

        if (ModalWindow.cardDateCheck === true) {
            inputElement.classList.add('input_true');
            inputElement.classList.remove('input_false');
        } else {
            inputElement.classList.add('input_false');
            inputElement.classList.remove('input_true');
        }
    }

    static cardCodeInputCheck(inputElement: HTMLInputElement) {
        ModalWindow.cardCodeCheck = false;
        let inputArray = inputElement.value.split('');

        inputArray = inputArray
            .map((e) => (Number.isInteger(+e) ? e : ''))
            .join('')
            .split('');

        if (inputArray.length >= 3) {
            inputArray.length = 3;
            ModalWindow.cardCodeCheck = true;
        }

        inputElement.value = inputArray.join('');

        if (ModalWindow.cardCodeCheck === true) {
            inputElement.classList.add('input_true');
            inputElement.classList.remove('input_false');
        } else {
            inputElement.classList.add('input_false');
            inputElement.classList.remove('input_true');
        }
    }
}
