export class ModalWindow {
    static nameCheck = false;
    static telCheck = false;

    static modalRender() {
        const mainSection = document.querySelector('.main-section');
        const buyButton = document.querySelector('.info__buy_now');
        const bodyElement = document.querySelector('.body');

        const modalContent = document.createElement('div');
        const modalContentHeader = document.createElement('h2');
        const modalCloseButton = document.createElement('button');
        const modalContentPersonalData = document.createElement('form');
        const modalDataHeader = document.createElement('h3');
        const nameInput = document.createElement('input');
        const phoneInput = document.createElement('input');
        const addressInput = document.createElement('input');
        const creditcardHeader = document.createElement('h3');
        const cardInfoForm = document.createElement('form');
        const cardInfoNumber = document.createElement('div');
        const cardInfoNumberLabel = document.createElement('label');
        const cardInfoNumberInput = document.createElement('input');
        const cardInfoNumberImg = document.createElement('img');
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
        modalCloseButton.innerHTML = '&lt';
        modalContentPersonalData.classList.add('modal__content__personal_data');
        modalDataHeader.textContent = 'Ваши данные';
        nameInput.classList.add('modal__content__personal_data__enter');
        // nameInput.type = 'text';
        nameInput.placeholder = 'Имя и Фамилия';
        phoneInput.classList.add('modal__content__personal_data__enter');
        // phoneInput.type = 'number';
        phoneInput.placeholder = 'Номер телефона';
        addressInput.classList.add('modal__content__personal_data__enter');
        addressInput.type = 'text';
        addressInput.placeholder = 'Адрес доставки';
        creditcardHeader.textContent = 'Данные карты';
        cardInfoForm.classList.add('modal__content__card_info');
        cardInfoNumber.classList.add('modal__content__card_info__number');
        cardInfoNumberLabel.classList.add('card_label');
        cardInfoNumberLabel.textContent = 'Номер';
        cardInfoNumberInput.classList.add('card_input');
        cardInfoNumberInput.type = 'text';
        cardInfoNumberImg.classList.add('card_logo');
        cardInfoNumberImg.alt = 'card_logo';
        cardExpireData.classList.add('modal__content__card_info__expire_data');
        cardExpireLabel.classList.add('card_label');
        cardExpireLabel.textContent = 'Действительна до';
        cardExpireInput.classList.add('card_input');
        cardExpireInput.type = 'text';
        cardCvv.classList.add('modal__content__card_info__cvv');
        cardCvvLabel.classList.add('card_label');
        cardCvvLabel.textContent = 'Защитный код';
        cardCvvInput.classList.add('card_input');
        cardCvvInput.type = 'text';
        modalSubmit.classList.add('modal__content__submit');
        modalSubmit.textContent = 'Подтвердить';

        modalContent.appendChild(modalContentHeader);
        modalContentHeader.prepend(modalCloseButton);
        modalContent.appendChild(modalContentPersonalData);
        modalContentPersonalData.appendChild(modalDataHeader);
        modalContentPersonalData.appendChild(nameInput);
        modalContentPersonalData.appendChild(phoneInput);
        modalContentPersonalData.appendChild(addressInput);
        modalContent.appendChild(creditcardHeader);
        modalContent.appendChild(cardInfoForm);
        cardInfoForm.appendChild(cardInfoNumber);
        cardInfoNumber.appendChild(cardInfoNumberLabel);
        cardInfoNumberLabel.appendChild(cardInfoNumberInput);
        cardInfoNumber.appendChild(cardInfoNumberImg);
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

        phoneInput.addEventListener('input', () => {
            ModalWindow.telInputCheck(phoneInput);
        });
    }

    static telInputCheck(inputElement: HTMLInputElement) {
        const inputArray = inputElement.value.split('');
        ModalWindow.telCheck = false;

        if (inputArray[0] !== '+') {
            ModalWindow.telCheck = false;
            inputElement.value = '';
            inputElement.placeholder = 'Должен начинаться с "+"';
        } else {
            for (let i = 1; i < inputArray.length; i += 1) {
                if (!Number.isInteger(+inputArray[i])) {
                    inputArray.length = i;
                    inputElement.value = inputArray.join('');
                    break;
                }
            }

            if (inputArray.length >= 10) {
                ModalWindow.telCheck = true;
            }
        }

        if (ModalWindow.telCheck === true) {
            inputElement.classList.add('input_true');
            inputElement.classList.remove('input_false');
        } else {
            inputElement.classList.add('input_false');
            inputElement.classList.remove('input_true');
        }
    }
}
