import { ModalWindow } from './modal-window';

export function cardCodeInputCheck(inputElement: HTMLInputElement) {
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
