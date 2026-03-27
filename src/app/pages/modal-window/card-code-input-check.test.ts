/**
 * @jest-environment jsdom
 */

import { cardCodeInputCheck } from "./card-code-input-check";
import { ModalWindow } from "./modal-window";

describe('cardCodeInputCheck()', () => {
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    inputElement = document.createElement('input');
    document.body.appendChild(inputElement);
  });

  afterEach(() => {
    document.body.removeChild(inputElement);
  });

  test('set ModalWindow.cardCodeCheck to true if the input value matches the pattern', () => {
    inputElement.value = '123';
    cardCodeInputCheck(inputElement);
    expect(ModalWindow.cardCodeCheck).toBe(true);
  });

  test('set ModalWindow.cardCodeCheck to false if the input value does not match the pattern', () => {
    inputElement.value = '12';
    cardCodeInputCheck(inputElement);
    expect(ModalWindow.cardCodeCheck).toBe(false);
  });

  test('add the "input_true" class to the input element if ModalWindow.cardCodeCheck is true', () => {
    inputElement.value = '999';
    cardCodeInputCheck(inputElement);
    expect(inputElement.classList.contains('input_true')).toBe(true);
  });

  test('remove the "input_true" class from the input element if ModalWindow.cardCodeCheck is false', () => {
    inputElement.value = '14';
    cardCodeInputCheck(inputElement);
    expect(inputElement.classList.contains('input_true')).toBe(false);
  });

  test('add the "input_false" class to the input element if ModalWindow.cardCodeCheck is false', () => {
    inputElement.value = '33';
    cardCodeInputCheck(inputElement);
    expect(inputElement.classList.contains('input_false')).toBe(true);
  });

  test('remove the "input_false" class from the input element if ModalWindow.cardCodeCheck is true', () => {
    inputElement.value = '666';
    cardCodeInputCheck(inputElement);
    expect(inputElement.classList.contains('input_false')).toBe(false);
  });
})