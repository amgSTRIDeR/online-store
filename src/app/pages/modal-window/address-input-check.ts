import { ModalWindow } from './modal-window';

export function addressInputCheck(inputElement: HTMLInputElement) {
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
