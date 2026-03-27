import { ModalWindow } from './modal-window';

export function telInputCheck(inputElement: HTMLInputElement) {
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
