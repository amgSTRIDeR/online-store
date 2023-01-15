import { ModalWindow } from "./modalWindow";

export function nameInputCheck(inputElement: HTMLInputElement) {
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