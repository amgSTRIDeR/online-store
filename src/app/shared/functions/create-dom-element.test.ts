/**
 * @jest-environment jsdom
 */

import { createDomElement } from './create-dom-element';

describe('CreateDomElement', () => {
    test('Create HTML element with the specified tag and class', () => {
      const element = createDomElement('div', 'some-class', 'another-class');
      expect(element.tagName).toBe('DIV');
      expect(element.classList.contains('some-class')).toBe(true);
      expect(element.classList.contains('another-class')).toBe(true);
    });

});
