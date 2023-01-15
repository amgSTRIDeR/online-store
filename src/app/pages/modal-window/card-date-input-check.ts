import { ModalWindow } from "./modalWindow";

export function cardDateInputCheck(inputElement: HTMLInputElement) {
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