/**
 * @jest-environment jsdom
 */
import { addressInputCheck } from "./address-input-check";
import { ModalWindow } from "./modal-window";

describe('addressInputCheck()', () => {
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    inputElement = document.createElement('input');
    document.body.appendChild(inputElement);
  });

  afterEach(() => {
    document.body.removeChild(inputElement);
  });

  test('set ModalWindow.addressCheck to true if the input value matches the pattern', () => {
    inputElement.value = 'example street 12345';
    addressInputCheck(inputElement);
    expect(ModalWindow.addressCheck).toBe(true);
  });

  test('set ModalWindow.addressCheck to false if the input value does not match the pattern', () => {
    inputElement.value = '123 some adress';
    addressInputCheck(inputElement);
    expect(ModalWindow.addressCheck).toBe(false);
  });

  test('add the "input_true" class to the input element if ModalWindow.addressCheck is true', () => {
    inputElement.value = 'example street 12345';
    addressInputCheck(inputElement);
    expect(inputElement.classList.contains('input_true')).toBe(true);
  });

  test('remove the "input_true" class from the input element if ModalWindow.addressCheck is false', () => {
    inputElement.value = '123 some adress';
    addressInputCheck(inputElement);
    expect(inputElement.classList.contains('input_true')).toBe(false);
  });

  test('add the "input_false" class to the input element if ModalWindow.addressCheck is false', () => {
    inputElement.value = '123 some adress';
    addressInputCheck(inputElement);
    expect(inputElement.classList.contains('input_false')).toBe(true);
  });

  test('remove the "input_false" class from the input element if ModalWindow.addressCheck is true', () => {
    inputElement.value = 'example street 12345';
    addressInputCheck(inputElement);
    expect(inputElement.classList.contains('input_false')).toBe(false);
  });

});