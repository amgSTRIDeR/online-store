/**
 * @jest-environment jsdom
 */

import { addErrorPageListener } from './error-page-listener';

describe('Change hash to #start when click a button', () => {
    let scrollButton: HTMLButtonElement;

    beforeEach(() => {
        scrollButton = document.createElement('button');
        scrollButton.classList.add('scroll-image');
        document.body.appendChild(scrollButton);
    });

    afterEach(() => {
        document.body.removeChild(scrollButton);
    });

    test('adds click event listener to the scroll button', () => {
        let clickEvent = jest.fn();
        scrollButton.addEventListener('click', clickEvent);
        addErrorPageListener();
        scrollButton.click();
        expect(clickEvent).toHaveBeenCalled();
    });

    test("sets location hash to '#start' when the button is clicked", () => {
        window.location.hash = '#test';
        addErrorPageListener();
        scrollButton.click();
        expect(window.location.hash).toBe('#start');
    });
});
