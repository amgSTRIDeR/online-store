/**
 * @jest-environment jsdom
 */

import { cardNumberInputCheck } from "./card-number-input-check";
import { ModalWindow } from "./modal-window";

describe('cardNumberInputCheck()', () => {
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    inputElement = document.createElement('input');
    document.body.appendChild(inputElement);
  });

  afterEach(() => {
    document.body.removeChild(inputElement);
  });

  test('set ModalWindow.cardNumberCheck to true if the input value matches the pattern', () => {
    inputElement.value = '1234567891234567';
    cardNumberInputCheck(inputElement);
    expect(ModalWindow.cardNumberCheck).toBe(true);
  });

  test('set ModalWindow.cardNumberCheck to false if the input value does not match the pattern', () => {
    inputElement.value = '345';
    cardNumberInputCheck(inputElement);
    expect(ModalWindow.cardNumberCheck).toBe(false);
  });

  test('add the "input_true" class to the input element if ModalWindow.cardNumberCheck is true', () => {
    inputElement.value = '9999999999999999';
    cardNumberInputCheck(inputElement);
    expect(inputElement.classList.contains('input_true')).toBe(true);
  });

  test('remove the "input_true" class from the input element if ModalWindow.cardNumberCheck is false', () => {
    inputElement.value = '12345';
    cardNumberInputCheck(inputElement);
    expect(inputElement.classList.contains('input_true')).toBe(false);
  });

  test('add the "input_false" class to the input element if ModalWindow.cardNumberCheck is false', () => {
    inputElement.value = '12345';
    cardNumberInputCheck(inputElement);
    expect(inputElement.classList.contains('input_false')).toBe(true);
  });

  test('remove the "input_false" class from the input element if ModalWindow.cardNumberCheck is true', () => {
    inputElement.value = '1111222233334444';
    cardNumberInputCheck(inputElement);
    expect(inputElement.classList.contains('input_false')).toBe(false);
  });
})