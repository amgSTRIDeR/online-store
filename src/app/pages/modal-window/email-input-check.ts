import { ModalWindow } from "./modalWindow";

export function emailInputCheck(inputElement: HTMLInputElement) {
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