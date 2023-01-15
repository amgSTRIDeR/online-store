import { ModalSvg } from "./modalSvg";
import { ModalWindow } from "./modalWindow";

export function cardNumberInputCheck(inputElement: HTMLInputElement) {
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
              cardInfoNumberImg.innerHTML = ModalSvg.AmericanExpress;
              break;
          case 4:
              cardInfoNumberImg.innerHTML = ModalSvg.Visa;
              break;
          case 5:
              cardInfoNumberImg.innerHTML = ModalSvg.MasterCard;
              break;
          case 6:
              cardInfoNumberImg.innerHTML = ModalSvg.Maestro;
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